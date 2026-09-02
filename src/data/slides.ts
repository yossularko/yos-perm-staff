export type SlideVariant =
  | "cover"
  | "timeline"
  | "badges"
  | "highlight"
  | "default"
  | "closing";

/** Angka kunci yang ditampilkan besar dengan label kecil di bawahnya. */
export type Stat = {
  value: string;
  label: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  detail?: string;
  /** Menandai posisi saat ini agar diberi aksen emas. */
  current?: boolean;
};

export type BadgeGroup = {
  category: string;
  items: string[];
};

export type Point = {
  /** Kata kunci yang ditebalkan di depan poin. */
  lead?: string;
  text: string;
};

export type Slide = {
  id: string;
  title: string;
  variant: SlideVariant;
  /** Teks kecil di atas judul (nama perusahaan, konteks slide). */
  eyebrow?: string;
  subtitle?: string;
  /** Kalimat penutup/pendukung, dipakai di slide cover & closing. */
  content?: string;
  /** Angka besar sebagai visual hook (cover). */
  hook?: string;
  hookLabel?: string;
  points?: Point[];
  timeline?: TimelineItem[];
  badges?: BadgeGroup[];
  stats?: Stat[];
};

export const slides: Slide[] = [
  {
    id: "slide-1",
    variant: "cover",
    eyebrow: "PT Adyawinsa Telecommunication and Electrical",
    hook: "6+",
    hookLabel: "Tahun bertumbuh bersama perusahaan",
    title: "Pengajuan Status Karyawan Tetap",
    subtitle: "Muhammad Yos Sularko — Fullstack Developer",
  },
  {
    id: "slide-2",
    variant: "timeline",
    eyebrow: "Rekam Jejak & Loyalitas",
    title: "Tumbuh Bersama Perusahaan",
    timeline: [
      {
        period: "2018 – 2020",
        title: "Graphic Designer — PT Garuda Abadi",
        detail: "Fondasi lintas disiplin: desain, IT support, sistem reservasi",
      },
      {
        period: "Jun 2020",
        title: "IT Support — PT Adyawinsa",
        detail: "Bergabung dengan perusahaan",
      },
      {
        period: "Okt 2021",
        title: "Frontend Developer",
        detail: "Naik jabatan",
      },
      {
        period: "Agu 2024",
        title: "Fullstack Developer",
        detail: "Naik jabatan — posisi saat ini",
        current: true,
      },
    ],
    stats: [
      { value: "6+", label: "Tahun di perusahaan" },
      { value: "3x", label: "Promosi internal" },
      { value: "0x", label: "Pindah kerja" },
    ],
  },
  {
    id: "slide-3",
    variant: "default",
    eyebrow: "Kontribusi",
    title: "Kontribusi Nyata untuk Perusahaan",
    points: [
      {
        lead: "Aplikasi internal",
        text: "Membangun & memelihara seluruh aplikasi internal (web & mobile) lintas divisi",
      },
      {
        lead: "Sistem Odoo",
        text: "Mengembangkan dan menjaga Odoo sebagai tulang punggung operasional",
      },
      {
        lead: "End-to-end",
        text: "Frontend, backend, database, hingga deployment — tanpa vendor luar",
      },
      {
        lead: "Responsif",
        text: "Bug fix kurang dari 24 jam, sekaligus menjalankan proyek jangka panjang",
      },
    ],
  },
  {
    id: "slide-4",
    variant: "badges",
    eyebrow: "Kompetensi",
    title: "Kompetensi Teknis yang Dikuasai",
    badges: [
      {
        category: "Frontend",
        items: ["ReactJS", "Next.js", "React Native", "TypeScript"],
      },
      {
        category: "Backend",
        items: ["NestJS", "Golang", "Next.js API"],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "MySQL", "Redis"],
      },
      {
        category: "Sistem Bisnis",
        items: ["Odoo — kustomisasi", "Odoo — integrasi"],
      },
      {
        category: "Nilai Tambah",
        items: ["Latar belakang desain grafis", "Peka pada UI/UX"],
      },
    ],
  },
  {
    id: "slide-5",
    variant: "highlight",
    eyebrow: "Inti Presentasi",
    title: "Mengapa Saya Layak Menjadi Karyawan Tetap",
    points: [
      {
        lead: "Terbukti loyal & konsisten",
        text: "6+ tahun, 3x promosi, tanpa pernah pindah kerja",
      },
      {
        lead: "Efisiensi biaya",
        text: "Kemampuan fullstack mengurangi kebutuhan rekrut developer tambahan",
      },
      {
        lead: "Memegang sistem kritikal",
        text: "Pengelola utama Odoo & aplikasi internal perusahaan",
      },
      {
        lead: "Terus dipercaya",
        text: "Tanggung jawab bertambah dari waktu ke waktu, selalu berhasil dijalankan",
      },
    ],
  },
  {
    id: "slide-6",
    variant: "default",
    eyebrow: "Komitmen",
    title: "Rencana & Komitmen ke Depan",
    points: [
      {
        lead: "Perdalam Golang & Odoo",
        text: "Mendukung skalabilitas sistem perusahaan",
      },
      {
        lead: "Pelajari DevOps",
        text: "CI/CD dan Docker demi deployment lebih cepat & stabil",
      },
      {
        lead: "Membimbing junior",
        text: "Siap menjadi mentor seiring bertambahnya anggota tim",
      },
      {
        lead: "Jangka panjang",
        text: "Berkomitmen bersama PT Adyawinsa Telecommunication and Electrical",
      },
    ],
  },
  {
    id: "slide-7",
    variant: "closing",
    title: "Terima Kasih",
    content:
      "Saya siap memberikan kontribusi yang lebih besar sebagai bagian tetap dari perusahaan ini.",
    subtitle: "Muhammad Yos Sularko — Fullstack Developer",
  },
];
