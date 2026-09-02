# syntax=docker/dockerfile:1

# Build memakai Bun (mengikuti bun.lock), runtime memakai Node —
# server.js hasil standalone Next.js dijalankan di Node LTS.

# ---------- 1. dependencies ----------
FROM oven/bun:1.2.13-alpine AS deps
WORKDIR /app

# NODE_ENV sengaja tidak diset di sini supaya devDependencies
# (tailwindcss, typescript) tetap terpasang untuk proses build.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---------- 2. build ----------
FROM oven/bun:1.2.13-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# ---------- 3. runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3446 \
    HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 --ingroup nodejs nextjs

# server.js standalone tidak menyertakan public/ dan .next/static — harus disalin manual.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3446

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3446/ || exit 1

CMD ["node", "server.js"]
