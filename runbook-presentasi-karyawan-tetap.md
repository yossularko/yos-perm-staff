# Runbook: Web Presentasi Pengajuan Karyawan Tetap

## Tujuan
Buatkan web presentasi single-page application menggunakan **Next.js (App Router) + TypeScript terbaru** untuk saya presentasikan sebagai bagian dari proses pengajuan status **Karyawan Tetap**.

Ini BUKAN rekap jawaban formulir HR — ini adalah **pitch deck singkat dan menjual**, fokus menjawab satu pertanyaan besar: *"Kenapa saya layak jadi karyawan tetap?"*. Setiap slide harus punya poin sedikit (maks 4-5 bullet), padat, dan didukung data historikal nyata (lama kerja, jumlah promosi, dsb) — bukan narasi panjang.

## Requirement Teknis

1. **Framework**: Next.js versi terbaru (App Router), TypeScript, Tailwind CSS untuk styling.
2. **Struktur navigasi**: Semua slide/poin ditampilkan dalam **satu halaman** (single page scroll), bukan multi-route. Setiap section slide punya `id` HTML unik (misal `id="slide-1"`, `id="slide-2"`, dst) sehingga bisa di-scroll langsung ke section tertentu menggunakan anchor/`scrollIntoView`.
3. **Navigasi tombol**:
   - Tombol **"Next"** dan **"Prev"** (fixed di posisi bawah layar atau floating) untuk berpindah antar slide secara berurutan, dengan smooth scroll ke `id` slide berikutnya/sebelumnya.
   - Tombol Next disabled/hidden di slide terakhir, tombol Prev disabled/hidden di slide pertama.
   - Tampilkan indikator posisi slide saat ini, misal "Slide 3 / 14" atau dot-indicator di bagian bawah.
   - Opsional: dukung navigasi keyboard (arrow key kiri/kanan) dan swipe di mobile.
4. **Desain visual**:
   - Setiap slide full-viewport-height (`min-h-screen`), konten center secara vertikal & horizontal, dengan padding yang nyaman dibaca saat presentasi.
   - Gunakan skema warna profesional (contoh: navy/biru tua + aksen kuning/emas — boleh disesuaikan dengan branding perusahaan PT Adyawinsa Telecommunication and Electrical jika diketahui, atau warna netral profesional jika tidak).
   - Tipografi jelas dan besar (mudah dibaca dari jarak presentasi), gunakan heading besar untuk judul tiap slide dan bullet points rapi untuk isi.
   - Animasi transisi antar slide yang halus (fade/slide) menggunakan CSS transition atau Framer Motion (opsional, tidak wajib).
   - Slide pertama adalah **Cover/Judul** berisi nama saya, jabatan, dan judul presentasi. Slide terakhir adalah **Penutup/Terima Kasih**.
5. **Struktur data**: Simpan seluruh konten slide dalam satu array/object terstruktur (misal `data/slides.ts`) berisi `{ id, title, content }` agar mudah di-maintain dan tidak hardcode di JSX berulang-ulang.
6. **Responsif**: Harus tetap baik dilihat di layar presentasi besar (proyektor/TV) maupun laptop.
7. **Tidak perlu backend/database** — seluruh konten statis dari data lokal.

## Struktur Folder yang Disarankan
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  SlideContainer.tsx
  Slide.tsx
  NavigationControls.tsx
  SlideIndicator.tsx
data/
  slides.ts
```

## Konten Presentasi (7 Slide — Ringkas & Menjual)

Gunakan konten berikut sebagai isi masing-masing slide (`id`, `title`, dan `content` sudah disiapkan, tinggal dimasukkan ke `data/slides.ts`). Setiap slide sengaja dibuat singkat — ini presentasi lisan yang dibacakan, bukan dokumen yang dibaca sendiri oleh audiens.

### Slide 1 — Cover
- id: `slide-1`
- title: "Pengajuan Status Karyawan Tetap"
- subtitle: "Muhammad Yos Sularko — Fullstack Developer"
- content: "6+ Tahun Bertumbuh Bersama PT Adyawinsa Telecommunication and Electrical"
- catatan desain: tampilkan angka **"6+"** besar sebagai visual hook di cover.

### Slide 2 — Rekam Jejak & Loyalitas (Historikal)
- id: `slide-2`
- title: "Rekam Jejak: Tumbuh Bersama Perusahaan"
- content (tampilkan sebagai timeline vertikal/horizontal, bukan bullet biasa):
  - 2018 – 2020 — Graphic Designer, PT Garuda Abadi (fondasi lintas disiplin: desain, IT support, sistem reservasi)
  - Jun 2020 — Bergabung di PT Adyawinsa sebagai IT Support
  - Okt 2021 — Naik jabatan: Frontend Developer
  - Agu 2024 — Naik jabatan: Fullstack Developer (posisi saat ini)
- highlight stat di akhir slide: **"6+ tahun di perusahaan • 3x promosi internal • 0x pindah kerja"**

### Slide 3 — Kontribusi Nyata
- id: `slide-3`
- title: "Kontribusi Nyata untuk Perusahaan"
- content:
  - Membangun & memelihara seluruh aplikasi internal (web & mobile) lintas divisi
  - Mengembangkan dan menjaga sistem **Odoo** sebagai tulang punggung operasional
  - Menangani end-to-end: frontend, backend, database, hingga deployment — tanpa vendor luar
  - Responsif untuk kebutuhan mendadak (bug fix < 24 jam) sekaligus proyek jangka panjang

### Slide 4 — Kompetensi Teknis
- id: `slide-4`
- title: "Kompetensi Teknis yang Dikuasai"
- content (tampilkan sebagai grid/badge, bukan list panjang):
  - Frontend: ReactJS, Next.js, React Native, TypeScript
  - Backend: NestJS, Golang, Next.js API
  - Database: PostgreSQL, MySQL, Redis
  - Sistem Bisnis: Odoo (kustomisasi & integrasi)
  - Nilai tambah: latar belakang desain grafis → peka pada UI/UX

### Slide 5 — Mengapa Saya Layak (Inti Presentasi)
- id: `slide-5`
- title: "Mengapa Saya Layak Menjadi Karyawan Tetap"
- content:
  - **Terbukti loyal & konsisten** — 6+ tahun, 3x promosi tanpa pernah pindah kerja
  - **Efisiensi biaya** — kemampuan fullstack mengurangi kebutuhan rekrut developer tambahan
  - **Memegang sistem kritikal** — pengelola utama Odoo & aplikasi internal perusahaan
  - **Terus dipercaya** — tanggung jawab bertambah dari waktu ke waktu, selalu berhasil dijalankan

### Slide 6 — Komitmen ke Depan
- id: `slide-6`
- title: "Rencana & Komitmen ke Depan"
- content:
  - Perdalam Golang & Odoo untuk mendukung skalabilitas sistem perusahaan
  - Pelajari DevOps (CI/CD, Docker) demi deployment lebih cepat & stabil
  - Siap membimbing developer junior seiring bertambahnya tim
  - Berkomitmen jangka panjang bersama PT Adyawinsa Telecommunication and Electrical

### Slide 7 — Penutup
- id: `slide-7`
- title: "Terima Kasih"
- content: "Saya siap memberikan kontribusi yang lebih besar sebagai bagian tetap dari perusahaan ini."
- subtitle: "Muhammad Yos Sularko — Fullstack Developer"

## Instruksi Implementasi untuk Claude Code

1. Inisialisasi project Next.js terbaru dengan TypeScript dan Tailwind:
   ```
   npx create-next-app@latest presentasi-karyawan-tetap --typescript --tailwind --eslint --app
   ```
2. Buat file `data/slides.ts` berisi array **7 slide** sesuai konten di atas, dengan field `id`, `title`, `subtitle` (opsional), `points` (array string, maksimal 4-5 item), dan `variant` (opsional: `"cover" | "timeline" | "stats" | "badges" | "default" | "closing"`) untuk menentukan gaya render tiap slide.
3. Buat komponen `Slide.tsx` yang menerima props slide dan me-render section dengan `id={slide.id}`, styling full height, judul besar (`text-5xl`+ di desktop), dan konten sesuai `variant`:
   - `cover` / `closing`: teks besar center, minim elemen.
   - `timeline`: render Slide 2 sebagai garis waktu vertikal dengan titik/dot per milestone, bukan bullet biasa.
   - `stats`: tampilkan angka kunci (misal "6+", "3x", "0x") dalam ukuran besar dengan label kecil di bawahnya, cocok untuk highlight di Slide 2 & 5.
   - `badges`: render list sebagai badge/pill (bukan bullet list panjang), cocok untuk Slide 4.
   - `default`: bullet list rapi maksimal 4-5 poin, font besar, banyak whitespace — hindari teks padat.
4. Buat komponen utama di `page.tsx` yang me-render seluruh 7 slide secara berurutan dalam satu halaman (map dari `data/slides.ts`).
5. Buat komponen `NavigationControls.tsx`:
   - State `currentSlideIndex` di client component (`"use client"`).
   - Fungsi `goToNext()` dan `goToPrev()` yang increment/decrement index lalu `document.getElementById(slideId)?.scrollIntoView({ behavior: 'smooth' })`.
   - Gunakan `IntersectionObserver` untuk mendeteksi slide mana yang sedang aktif di viewport saat user scroll manual, agar index tetap sinkron.
   - Render tombol Prev/Next fixed di bagian bawah tengah layar, serta indikator "Slide X / 7" atau dot-indicator klikable (klik dot langsung scroll ke slide terkait, karena tiap slide sudah punya `id`).
6. Tambahkan dukungan keyboard arrow key (kiri = prev, kanan = next) menggunakan `useEffect` dengan event listener `keydown`.
7. Styling: gunakan Tailwind, tema warna profesional (navy `#1e293b` / gold `#eab308` sebagai aksen), scroll-snap CSS (`scroll-snap-type: y mandatory` pada container, `scroll-snap-align: start` pada tiap slide) supaya scroll antar slide terasa rapi. Beri sedikit animasi fade-in per slide saat masuk viewport (opsional, pakai CSS transition + IntersectionObserver, tidak wajib library tambahan).
8. Pastikan build sukses (`npm run build`) tanpa error TypeScript.
9. Jalankan `npm run dev` untuk preview lokal.

## Prinsip Desain Konten (Penting)
- **Sedikit tapi kuat**: maksimal 4-5 poin per slide, tiap poin idealnya 1 baris kalimat pendek. Ini dibacakan langsung oleh presenter, bukan dibaca sendiri oleh audiens.
- **Angka > kalimat panjang**: setiap kali ada data kuantitatif (lama kerja, jumlah promosi, SLA bug fix), tampilkan sebagai angka besar dengan label, bukan disisipkan dalam kalimat.
- **Satu pesan besar per slide**: jangan campur beberapa topik berbeda dalam satu slide.

## Catatan Tambahan
- Semua teks bisa diedit lagi sebelum presentasi asli — ini adalah draft konten awal.
- Tidak perlu koneksi API eksternal atau database, murni presentasi statis.
- Prioritaskan agar mudah dibaca dari layar proyektor: font besar, kontras tinggi, tidak terlalu padat teks per slide.
