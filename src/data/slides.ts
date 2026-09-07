/**
 * Konten presentasi Uji Kompetensi ICT Developer Staff.
 *
 * ARAH DECK — dirombak setelah review Direktur Operasional:
 * Audiens adalah Head HRD, Direktur Operasional, dan Direktur Utama. Dua
 * direktur lebih peduli pada hasil dan keahlian, bukan proses. Karena itu deck
 * dipimpin oleh pencapaian dan dampak, bukan oleh urutan section panduan HR.
 * Materi proses dipadatkan jadi satu slide (slide 6) agar checklist HR tetap
 * tersentuh tanpa memakan waktu para direktur.
 *
 * Empat hal yang wajib sampai ke pendengar:
 *   1. Potensi & keahlian          -> slide 5
 *   2. Project yang telah selesai  -> slide 3
 *   3. Manfaat bagi perusahaan     -> slide 4
 *   4. Rencana ke depan            -> slide 7
 *
 * PENTING — batas kepemilikan pekerjaan:
 * Odoo Enterprise 17 dibangun oleh vendor Garudea, termasuk peralihan dari
 * sistem lama (E-Project, Adyawinsa Web App). Tim ICT ATE membangun Odoo
 * Community 17, layer integrasinya, dan aplikasi pendukung. Jangan menulis
 * kalimat yang menyiratkan tim ICT melakukan migrasi ke Odoo Enterprise.
 * Material Control Asset External TIDAK dikerjakan sendiri — sebut sebagai
 * antrean tim, jangan diklaim.
 */

export type SlideVariant = "cover" | "content" | "closing";

export type Stat = { value: string; label: string };

export type Point = {
  /** Kata kunci yang ditebalkan di depan poin. */
  lead?: string;
  text: string;
};

export type Tone = "before" | "after" | "core" | "satellite" | "external";

export type Block =
  /** Daftar label–value, dipakai untuk profil ringkas. */
  | { kind: "profile"; rows: { label: string; value: string }[] }
  /** Poin bullet rapi; `emphasized` untuk poin kunci. */
  | { kind: "points"; heading?: string; items: Point[]; emphasized?: boolean }
  /** Alur proses dengan konektor antar langkah. */
  | {
      kind: "flow";
      heading?: string;
      steps: { label: string; caption?: string }[];
    }
  /** Dua kolom pembanding, mis. pembagian peran sistem. */
  | { kind: "compare"; columns: { title: string; tone: Tone; items: string[] }[] }
  /** Dua kolom daftar sejajar. */
  | { kind: "columns"; columns: { title: string; items: string[] }[] }
  /** Tabel ringkas. */
  | {
      kind: "table";
      heading?: string;
      headers: string[];
      rows: { cells: string[]; tone?: "drop" | "keep" }[];
    }
  /** Tahapan bernomor untuk proses kerja. */
  | {
      kind: "steps";
      heading?: string;
      items: { title: string; detail: string }[];
    }
  /** Angka kunci besar dengan label kecil di bawahnya. */
  | { kind: "stats"; heading?: string; items: Stat[] }
  /** Lapisan arsitektur sistem, dirender bertumpuk dengan konektor. */
  | {
      kind: "arch";
      layers: { label: string; caption?: string; tone: Tone; items: string[] }[];
    }
  /** Kotak sorot untuk poin penting. */
  | { kind: "callout"; title: string; items: string[] }
  /** Baris ringkas label + dampak, lebih padat dari kartu points. */
  | {
      kind: "impact";
      heading?: string;
      items: { label: string; text: string }[];
    }
  /** Kelompok chip — dipakai untuk portofolio modul/aplikasi dan stack. */
  | {
      kind: "groups";
      heading?: string;
      items: { category: string; items: string[] }[];
    }
  /** Daftar project dengan pill status di sampingnya. */
  | {
      kind: "roadmap";
      heading?: string;
      items: {
        title: string;
        status: string;
        tone: "active" | "done" | "queued";
        detail: string;
      }[];
    };

export type Presenter = { name: string; role: string; meta: string[] };

export type Slide = {
  id: string;
  variant: SlideVariant;
  /** Label section kecil di atas judul. */
  eyebrow?: string;
  title: string;
  /** Kalimat pengantar di bawah judul. */
  subtitle?: string;
  /** Kalimat pendukung untuk cover & closing. */
  content?: string;
  presenter?: Presenter;
  blocks?: Block[];
};

export const slides: Slide[] = [
  {
    id: "slide-1",
    variant: "cover",
    eyebrow: "Uji Kompetensi ICT Developer Staff",
    title: "Pencapaian, Dampak, dan Rencana ke Depan",
    subtitle:
      "Pengembangan sistem internal yang kini dipakai ±1.000 karyawan PT Adyawinsa Telecommunication and Electrical",
    presenter: {
      name: "Muhammad Yos Sularko",
      role: "IT System Development — Tim ICT",
      meta: [
        "6+ tahun di perusahaan",
        "IT Support 2020",
        "IT System Development (Frontend) 2021",
        "IT System Development 2024",
      ],
    },
  },

  {
    id: "slide-2",
    variant: "content",
    eyebrow: "Latar Belakang",
    title: "Masalah Bisnis yang Diselesaikan",
    subtitle:
      "Sistem internal utama perusahaan, Odoo Enterprise 17, dibangun oleh vendor Garudea. Berikut kebutuhan yang belum tercakup, dan ditangani sendiri oleh Tim ICT.",
    blocks: [
      {
        kind: "points",
        items: [
          {
            lead: "Cakupan vendor terbatas",
            text: "Sebagian kebutuhan operasional divisi berada di luar scope yang dibangun vendor",
          },
          {
            lead: "Setiap perubahan berbiaya",
            text: "Penambahan modul atau template di Odoo Enterprise memerlukan change request berbayar",
          },
          {
            lead: "Ide internal sulit terwadahi",
            text: "Kebutuhan baru dari divisi perlu jalur pengembangan yang bisa dijalankan sendiri",
          },
        ],
      },
      {
        kind: "callout",
        title: "Jalan keluar yang diambil Tim ICT",
        items: [
          "Membangun Odoo Community 17 sebagai wadah modul pelengkap — versi sama agar tetap kompatibel",
          "Terintegrasi dengan Enterprise lewat Odoo RPC dan service Golang, tanpa mengubah alur intinya",
          "Kebutuhan baru sejak itu bisa dikerjakan internal, tanpa menunggu dan tanpa biaya vendor",
        ],
      },
    ],
  },

  {
    id: "slide-3",
    variant: "content",
    eyebrow: "Pencapaian",
    title: "Sistem yang Telah Dibangun",
    subtitle:
      "15 modul Odoo Community dan 9 aplikasi pendukung, aktif dipakai lintas divisi.",
    blocks: [
      {
        kind: "groups",
        heading: "15 Modul Odoo Community",
        items: [
          {
            category: "Finance & Pembayaran",
            items: [
              "Cash Advance",
              "Cash Advance Settlement",
              "Reimbursement",
              "Vendor Bills",
              "ESPP",
            ],
          },
          {
            category: "Proyek & Anggaran",
            items: ["ERAB", "Project & Material Control", "Dashboard"],
          },
          {
            category: "SDM",
            items: [
              "Manpower Request",
              "Recruitment",
              "Training",
              "Exit Clearances",
            ],
          },
          { category: "Aset & Umum", items: ["Asset Management"] },
          {
            category: "ICT & Integrasi",
            items: ["ICT Helpdesk", "Sync Data System"],
          },
        ],
      },
      {
        kind: "groups",
        heading: "9 Aplikasi Pendukung",
        items: [
          { category: "Lapangan & Mobile", items: ["AdyaPro"] },
          { category: "Mitra & Pelaporan", items: ["AdyaMitra", "AdyaReport"] },
          {
            category: "Layanan Internal",
            items: ["Adyaworx", "Hallo ATE", "Helpdesk MS Surabaya"],
          },
          {
            category: "Rekrutmen & Publik",
            items: [
              "ATE Career",
              "Adyawinsa Company Profile",
              "ATE Company Profile",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "slide-4",
    variant: "content",
    eyebrow: "Dampak",
    title: "Manfaat bagi Perusahaan",
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "±1.000", label: "Karyawan terlayani sistem" },
          { value: "±100", label: "Tim lapangan memakai harian" },
          { value: "±50", label: "Admin aktif harian" },
          { value: "±30", label: "Tiket ICT ditangani per bulan" },
        ],
      },
      {
        kind: "impact",
        items: [
          {
            label: "Produktivitas",
            text: "Pembuatan dan approval RAB yang dulu berhari-hari kini bisa selesai dalam satu hari",
          },
          {
            label: "Efisiensi biaya",
            text: "Kebutuhan baru dikerjakan internal, tanpa change request berbayar ke vendor",
          },
          {
            label: "Kecepatan delivery",
            text: "Modul kecil selesai 1–4 minggu, project penuh 1–2 bulan",
          },
          {
            label: "Kepercayaan",
            text: "Pengembangan HRIS dialihkan dari vendor untuk digarap tim internal",
          },
        ],
      },
    ],
  },

  {
    id: "slide-5",
    variant: "content",
    eyebrow: "Kapasitas",
    title: "Keahlian yang Dikuasai",
    blocks: [
      {
        kind: "groups",
        items: [
          {
            category: "Frontend",
            items: ["React", "Next.js", "React Native", "TypeScript"],
          },
          { category: "Backend", items: ["Golang", "Python (Odoo)", "NestJS"] },
          { category: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
          {
            category: "Integrasi",
            items: ["Odoo RPC", "REST API", "Integrasi pihak ketiga"],
          },
          { category: "Infrastruktur", items: ["Docker", "Deployment"] },
        ],
      },
      {
        kind: "points",
        items: [
          {
            lead: "Menangani rantai penuh",
            text: "Dari analisis kebutuhan, frontend, backend, database, hingga deployment — tanpa bergantung vendor luar",
          },
          {
            lead: "Latar belakang desain grafis",
            text: "Terbiasa memperhatikan UI/UX, sehingga sistem internal tetap nyaman dipakai orang non-teknis",
          },
        ],
      },
    ],
  },

  {
    id: "slide-6",
    variant: "content",
    eyebrow: "Cara Kerja",
    title: "Proses & Jaminan Kualitas",
    blocks: [
      {
        kind: "steps",
        items: [
          {
            title: "Analisis",
            detail:
              "Bersama divisi user dan PMO untuk pemetaan business process",
          },
          {
            title: "Design",
            detail: "Rancang data model, alur approval, dan titik integrasi",
          },
          { title: "Development", detail: "Modul Odoo dan aplikasi pendukung" },
          {
            title: "Review & UAT",
            detail: "Code review, lalu uji bersama user sebelum rilis",
          },
          {
            title: "Deploy & Rawat",
            detail: "Rilis bertahap via Docker, lalu monitoring",
          },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            title: "Jaminan Kualitas",
            items: [
              "User Acceptance Test bersama divisi sebelum go-live",
              "Rekonsiliasi data Community terhadap sumbernya di Enterprise",
              "Regression test setiap Enterprise berubah dari sisi vendor",
              "Dokumentasi teknis dan panduan user tiap modul rilis",
            ],
          },
          {
            title: "Monitoring & SLA",
            items: [
              "Harian — cek error log dan status sinkronisasi",
              "Mingguan — review tiket bersama Dept Head ICT dan Direktur Operasional",
              "Bug kritikal ditutup < 24 jam, mayor < 3 hari",
              "Kasus berulang diangkat jadi perbaikan permanen",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "slide-7",
    variant: "content",
    eyebrow: "Rencana ke Depan",
    title: "Yang Sedang & Akan Dikerjakan",
    blocks: [
      {
        kind: "roadmap",
        items: [
          {
            title: "HRIS — Sistem Informasi SDM",
            status: "Prioritas berikutnya",
            tone: "active",
            detail:
              "Absensi mobile (React Native), pengelolaan data karyawan, payroll, dan kontrak — digabung ke Odoo Community. Pengembangannya dialihkan dari vendor ke tim internal, dan segera dikerjakan.",
          },
          {
            title: "HR Training",
            status: "Review & revisi",
            tone: "done",
            detail:
              "Manajemen training karyawan hingga pengelolaan sertifikat. Pengembangan selesai, sedang dalam tahap review.",
          },
          {
            title: "Material Control Asset External",
            status: "Antrean tim ICT",
            tone: "queued",
            detail:
              "Modul yang dinantikan divisi, sudah masuk pipeline pengembangan tim.",
          },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            title: "Peluang Teknologi",
            items: [
              "Observability: Sentry di React Native, OpenTelemetry di service Golang dan Next.js",
              "CI/CD agar proses deployment lebih cepat dan konsisten",
              "AI: kembangkan Hallo ATE jadi asisten pencarian data internal",
              "Dashboard analitik lintas data Enterprise dan Community",
            ],
          },
          {
            title: "Arah Jangka Panjang",
            items: [
              "Perluas cakupan Community ke proses yang masih berjalan manual",
              "Kurangi ketergantungan pada vendor untuk kebutuhan baru",
              "Perluas self-service mitra agar request manual ke ICT berkurang",
              "Siap membimbing developer baru seiring tim bertambah",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "slide-8",
    variant: "closing",
    title: "Terima Kasih",
    content:
      "Siap memberikan kontribusi yang lebih besar bersama PT Adyawinsa Telecommunication and Electrical.",
    presenter: {
      name: "Muhammad Yos Sularko",
      role: "IT System Development — Tim ICT",
      meta: ["Terbuka untuk pertanyaan dan diskusi"],
    },
  },
];
