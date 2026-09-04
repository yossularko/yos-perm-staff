/**
 * Konten presentasi Uji Kompetensi ICT Developer Staff.
 *
 * Urutan slide mengikuti "A. Struktur Materi Presentasi" pada panduan HR:
 * Project Overview → Requirement Analysis → System/Application Design →
 * Software Development → Testing & QA → Future Development.
 *
 * PENTING — batas kepemilikan pekerjaan:
 * Odoo Enterprise 17 dibangun oleh vendor Garudea, termasuk peralihan dari
 * sistem lama (E-Project, Adyawinsa Web App). Tim ICT ATE membangun Odoo
 * Community 17 sebagai wadah modul pelengkap, layer integrasinya, dan aplikasi
 * pendukung. Jangan menulis kalimat yang menyiratkan tim ICT melakukan migrasi
 * ke Odoo Enterprise.
 *
 * Konvensi penulisan: teks di dalam «guillemet» adalah angka/fakta draft yang
 * masih perlu diverifikasi sebelum submit, dan dirender dengan garis putus-putus.
 * Daftar lengkapnya ada di runbook-presentasi-uji-kompetensi.md.
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
  /** Daftar label–value, dipakai untuk Project Profile. */
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
  /** Dua kolom daftar sejajar, mis. functional vs non-functional. */
  | { kind: "columns"; columns: { title: string; items: string[] }[] }
  /** Tabel ringkas untuk prioritization. */
  | {
      kind: "table";
      heading?: string;
      headers: string[];
      rows: { cells: string[]; tone?: "drop" | "keep" }[];
    }
  /** Tahapan bernomor untuk development / troubleshooting process. */
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
  /** Kotak sorot untuk keputusan teknis penting. */
  | { kind: "callout"; title: string; items: string[] }
  /** Baris ringkas label + dampak, lebih padat dari kartu points. */
  | {
      kind: "impact";
      heading?: string;
      items: { label: string; text: string }[];
    };

export type Presenter = { name: string; role: string; meta: string[] };

export type Slide = {
  id: string;
  variant: SlideVariant;
  /** Label section sesuai panduan HR, tampil kecil di atas judul. */
  eyebrow?: string;
  title: string;
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
    title: "Pengembangan Odoo Community & Ekosistem Aplikasi Internal",
    subtitle:
      "Melengkapi cakupan Odoo Enterprise secara mandiri — terintegrasi lewat Odoo RPC dan service Golang",
    presenter: {
      name: "Muhammad Yos Sularko",
      role: "IT System Development — Tim ICT, PT Adyawinsa Telecommunication and Electrical",
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
    eyebrow: "1 — Project Overview",
    title: "Profil & Tujuan Project",
    blocks: [
      {
        kind: "profile",
        rows: [
          {
            label: "Nama Project",
            value:
              "Pengembangan Odoo Community 17 & aplikasi pendukung Tim ICT ATE",
          },
          {
            label: "Konteks",
            value:
              "Sistem internal utama perusahaan adalah Odoo Enterprise 17, dibangun oleh vendor Garudea",
          },
          {
            label: "User / Business Unit",
            value:
              "Finance, GA, Asset Management, HR, Recruitment, Training, tim proyek (PM/Waspang/Material Control), ICT, serta mitra eksternal",
          },
          {
            label: "Periode",
            value: "2025 – sekarang",
          },
          {
            label: "Peran Saya",
            value:
              "IT System Development — lingkup fullstack: analisis kebutuhan, frontend, backend, database, integrasi, deployment, maintenance",
          },
        ],
      },
      {
        kind: "points",
        heading: "Project Objective — masalah bisnis yang diselesaikan",
        items: [
          {
            lead: "Cakupan Enterprise terbatas",
            text: "Sebagian kebutuhan operasional divisi belum tercakup dalam scope yang dibangun vendor",
          },
          {
            lead: "Setiap perubahan berbiaya",
            text: "Penambahan modul atau template di Odoo Enterprise memerlukan change request berbayar ke vendor",
          },
          {
            lead: "Ide internal sulit terwadahi",
            text: "Kebutuhan dan ide modul baru dari divisi perlu jalur pengembangan yang bisa dijalankan sendiri",
          },
        ],
      },
    ],
  },

  {
    id: "slide-3",
    variant: "content",
    eyebrow: "1 — Project Overview",
    title: "Pembagian Peran Sistem & Alur Proses",
    blocks: [
      {
        kind: "compare",
        columns: [
          {
            title: "Odoo Enterprise 17 — vendor Garudea",
            tone: "before",
            items: [
              "Sistem internal utama perusahaan",
              "Menggantikan sistem lama E-Project & Adyawinsa Web App",
              "Sumber data transaksi inti (PO, Bill, master data)",
              "Perubahan di luar scope memerlukan CR berbayar",
            ],
          },
          {
            title: "Odoo Community 17 — Tim ICT ATE",
            tone: "after",
            items: [
              "Wadah modul yang belum tercakup dan ide modul baru",
              "Versi sama (17) agar kompatibel dengan Enterprise",
              "Tidak mengubah alur inti Enterprise, hanya membaca & menulis terkontrol",
              "Dikembangkan dan dirawat sepenuhnya oleh tim internal",
            ],
          },
        ],
      },
      {
        kind: "flow",
        heading: "Contoh alur end-to-end — penerbitan SPP (modul ESPP)",
        steps: [
          { label: "PO terbit", caption: "Odoo Enterprise" },
          { label: "Validasi item ke Bill", caption: "via Odoo RPC" },
          { label: "SPP dibuat", caption: "Odoo Community" },
          { label: "Mitra pantau status", caption: "AdyaMitra" },
        ],
      },
    ],
  },

  {
    id: "slide-4",
    variant: "content",
    eyebrow: "2 — Requirement Analysis",
    title: "Requirement & Prioritisasi",
    blocks: [
      {
        kind: "columns",
        columns: [
          {
            title: "Functional Requirement",
            items: [
              "Modul operasional yang belum tercakup Enterprise: Cash Advance, Settlement, Reimbursement, Asset Management",
              "Modul proyek & anggaran: ESPP, ERAB, Project & Material Control",
              "Modul SDM: Manpower Request, Recruitment, Training, Exit Clearances",
              "Sinkronisasi data dari Enterprise ke Community",
              "Akses mitra eksternal untuk memantau status SPP",
            ],
          },
          {
            title: "Non-Functional Requirement",
            items: [
              "Integritas: tidak mengganggu alur dan data transaksi di Enterprise",
              "Keamanan: role-based access, data mitra terisolasi dari data internal",
              "Kompatibilitas: mengikuti versi Odoo 17 agar integrasi tetap aman",
              "Maintainability: memanfaatkan fitur standar Odoo, kustomisasi seperlunya",
              "Ketersediaan: deployment Docker dan backup terjadwal",
            ],
          },
        ],
      },
      {
        kind: "table",
        heading:
          "Prioritization — urgency, business impact, complexity, feasibility",
        headers: ["Kebutuhan", "Urgency", "Impact", "Effort", "Keputusan"],
        rows: [
          {
            cells: [
              "Sinkronisasi data Enterprise → Community",
              "Tinggi",
              "Tinggi",
              "Tinggi",
              "P1 — fondasi semua modul",
            ],
            tone: "keep",
          },
          {
            cells: [
              "Modul operasional & proyek (CA, ESPP, ERAB, dll.)",
              "Tinggi",
              "Tinggi",
              "Sedang",
              "P1 — bertahap per modul",
            ],
            tone: "keep",
          },
          {
            cells: [
              "Aplikasi pendukung (AdyaPro, AdyaMitra, AdyaReport)",
              "Sedang",
              "Sedang",
              "Sedang",
              "P2 — menyusul",
            ],
          },
          {
            cells: [
              "Ajukan CR ke vendor untuk tiap modul baru",
              "—",
              "Sedang",
              "Biaya tinggi",
              "Dihindari — dialihkan ke Community",
            ],
            tone: "drop",
          },
        ],
      },
    ],
  },

  {
    id: "slide-5",
    variant: "content",
    eyebrow: "3 — System / Application Design",
    title: "Technical Approach & Keputusan Arsitektur",
    blocks: [
      {
        kind: "callout",
        title: "Kenapa modul dibangun di Odoo Community, bukan CR ke vendor?",
        items: [
          "Setiap penambahan modul atau template di Odoo Enterprise memerlukan change request berbayar — biaya menumpuk dan kebutuhan harus mengantre",
          "Odoo Community 17 dipakai sebagai wadah modul pelengkap, dengan versi yang sama agar tetap kompatibel",
          "Enterprise tetap menjadi sumber kebenaran data transaksi; Community tidak mengubah alur intinya",
          "Hasilnya: kebutuhan baru dari divisi bisa dikerjakan sendiri, tanpa biaya CR dan tanpa menunggu vendor",
        ],
      },
      {
        kind: "arch",
        layers: [
          {
            label: "Core System — vendor",
            caption: "Sumber kebenaran data transaksi",
            tone: "core",
            items: ["Odoo Enterprise 17 (Garudea)"],
          },
          {
            label: "Integration Layer — Tim ICT",
            caption: "Penghubung dua instance dan pintu data keluar",
            tone: "external",
            items: [
              "Odoo RPC bawaan",
              "Service penjembatan Golang",
              "Sync Data System",
            ],
          },
          {
            label: "Odoo Community 17 — Tim ICT",
            caption: "15 modul pelengkap",
            tone: "satellite",
            items: [
              "Cash Advance & Settlement",
              "Reimbursement",
              "Asset Management",
              "ESPP & ERAB",
              "Project & Material Control",
              "Recruitment, Training, Exit Clearances",
              "ICT Helpdesk",
              "Dashboard",
            ],
          },
          {
            label: "Aplikasi Pendukung — Tim ICT",
            caption: "Di luar Odoo, sebagian terhubung ke core",
            tone: "satellite",
            items: [
              "AdyaPro — React Native",
              "AdyaMitra — Next.js + Golang",
              "AdyaReport — Next.js + Golang",
              "Adyaworx — Next.js + Golang",
              "Hallo ATE — chatbot",
              "ATE Career — job portal",
            ],
          },
        ],
      },
      {
        kind: "impact",
        heading: "Business / Operational Impact",
        items: [
          { label: "Cost", text: "Biaya CR vendor dapat dihindari" },
          { label: "Kecepatan", text: "Kebutuhan baru tak menunggu antrean vendor" },
          { label: "Cakupan", text: "15 modul dan 9 aplikasi berjalan" },
          { label: "Kemandirian", text: "Stack dikuasai dan dirawat tim internal" },
        ],
      },
    ],
  },

  {
    id: "slide-6",
    variant: "content",
    eyebrow: "4 — Software Development / Implementation",
    title: "Proses Development & Standar Kerja",
    blocks: [
      {
        kind: "steps",
        items: [
          {
            title: "Analisis & Requirement",
            detail:
              "Diskusi dengan divisi user, dibantu PMO dalam pemetaan business process, lalu kesepakatan output",
          },
          {
            title: "Design & Prototype",
            detail:
              "Rancang data model, alur approval, dan titik integrasi ke Enterprise",
          },
          {
            title: "Development",
            detail:
              "Modul Odoo Community (Python) dan aplikasi pendukung (Golang, Next.js, React Native)",
          },
          {
            title: "Review & Testing",
            detail:
              "Code review, lalu uji di staging bersama user sebelum disetujui rilis",
          },
          {
            title: "Deployment & Maintenance",
            detail:
              "Rilis bertahap per modul via Docker, dilanjutkan monitoring pasca-rilis",
          },
        ],
      },
      {
        kind: "points",
        heading: "Standar yang diterapkan",
        items: [
          {
            lead: "Version control",
            text: "Git dengan branch per fitur dan commit terstruktur",
          },
          {
            lead: "Environment terpisah",
            text: "Development → staging → production, tidak pernah uji langsung di production",
          },
          {
            lead: "Rilis per modul",
            text: "Satu modul selesai dan dipakai user sebelum masuk modul berikutnya",
          },
          {
            lead: "Dokumentasi",
            text: "Dokumentasi teknis dan panduan user disiapkan tim ICT bersama PMO setiap modul rilis",
          },
        ],
      },
    ],
  },

  {
    id: "slide-7",
    variant: "content",
    eyebrow: "5 — Testing & Quality Assurance",
    title: "Metode Testing & Mekanisme Monitoring",
    blocks: [
      {
        kind: "columns",
        columns: [
          {
            title: "Testing Method",
            items: [
              "Unit & functional test pada logic kritikal, terutama perhitungan anggaran dan approval",
              "User Acceptance Test bersama divisi sebelum go-live tiap modul",
              "Uji integrasi: verifikasi data hasil sinkronisasi Community terhadap sumbernya di Enterprise",
              "Regression test setiap ada perubahan pada Odoo Enterprise dari vendor",
            ],
          },
          {
            title: "Mekanisme Monitoring",
            items: [
              "Harian — cek error log dan status job sinkronisasi",
              "Mingguan — review tiket ICT Helpdesk bersama Dept Head ICT dan Direktur Operasional; divisi dilibatkan bila ada issue spesifik",
              "Bulanan — evaluasi performa sistem dan backlog improvement",
              "Eskalasi — user → developer → manajemen ICT; ke vendor bila akar masalah ada di Enterprise",
            ],
          },
        ],
      },
      {
        kind: "stats",
        heading: "KPI utama project",
        items: [
          { value: "100%", label: "Data sinkron sesuai sumber Enterprise" },
          { value: "< 24 jam", label: "Penutupan bug kritikal" },
          { value: "≥ 99%", label: "Uptime sistem" },
          { value: "0", label: "Gangguan pada Enterprise akibat Community" },
        ],
      },
    ],
  },

  {
    id: "slide-8",
    variant: "content",
    eyebrow: "5 — Problem Solving & Troubleshooting",
    title: "Penanganan Issue di Production",
    blocks: [
      {
        kind: "steps",
        heading: "Troubleshooting steps",
        items: [
          {
            title: "Kumpulkan bukti",
            detail:
              "Reproduksi masalah, ambil error log, screenshot, dan langkah yang dilakukan user",
          },
          {
            title: "Isolasi layer",
            detail:
              "Tentukan sumbernya: UI, service Golang, modul Community, atau data dari Enterprise",
          },
          {
            title: "Analisis root cause",
            detail: "Cari penyebab dasar, bukan sekadar menutup gejalanya",
          },
          {
            title: "Perbaiki & verifikasi",
            detail: "Perbaikan diuji di staging, baru dirilis ke production",
          },
          {
            title: "Dokumentasi & komunikasi",
            detail:
              "Catat penyelesaian, informasikan ke user, teruskan ke vendor bila akarnya di Enterprise",
          },
        ],
      },
      {
        kind: "compare",
        columns: [
          {
            title: "Corrective Action",
            tone: "before",
            items: [
              "Sinkronisasi ulang data yang tidak sesuai setelah perubahan di Enterprise",
              "Perbaikan query dan indexing pada laporan yang melambat seiring bertambahnya data",
              "Hotfix dirilis terpisah dari rilis fitur terjadwal",
            ],
          },
          {
            title: "Preventive Action",
            tone: "after",
            items: [
              "Validasi hasil sinkronisasi terjadwal, tidak menunggu laporan user",
              "Pengecekan integrasi setiap ada perubahan Enterprise dari vendor",
              "Kasus berulang diangkat jadi perbaikan permanen, bukan hotfix berulang",
            ],
          },
        ],
      },
      {
        kind: "stats",
        heading: "Resolution time — target SLA",
        items: [
          { value: "< 24 jam", label: "Kritikal — operasional berhenti" },
          { value: "< 3 hari", label: "Mayor — masih ada workaround" },
          { value: "Terjadwal", label: "Minor — masuk rilis berikutnya" },
        ],
      },
    ],
  },

  {
    id: "slide-9",
    variant: "content",
    eyebrow: "6 — Future Development",
    title: "Rencana Pengembangan Berikutnya",
    blocks: [
      {
        kind: "columns",
        columns: [
          {
            title: "Future Improvement",
            items: [
              "Perluas modul Community ke proses divisi yang masih berjalan manual",
              "Perkuat dashboard analitik lintas data Enterprise dan Community",
              "Perluas self-service mitra agar request manual ke ICT berkurang",
              "Standarisasi CI/CD supaya rilis lebih cepat dan konsisten",
            ],
          },
          {
            title: "Technology Opportunity",
            items: [
              "AI: kembangkan Hallo ATE menjadi asisten pencarian data internal",
              "Golang untuk service bervolume tinggi yang dipisah dari Odoo",
              "Observability terpusat: log dan metrik sinkronisasi dalam satu dashboard",
              "Mobile-first (React Native) untuk proses yang berjalan di lapangan",
            ],
          },
        ],
      },
      {
        kind: "points",
        emphasized: true,
        items: [
          {
            lead: "Arah jangka panjang",
            text: "Odoo Community tetap jadi jalur cepat untuk kebutuhan yang tidak tercakup vendor, dengan integrasi ke Enterprise yang dijaga tetap aman dan terukur",
          },
        ],
      },
    ],
  },

  {
    id: "slide-10",
    variant: "closing",
    title: "Terima Kasih",
    content:
      "Terbuka untuk pertanyaan dan diskusi lebih dalam mengenai project ini.",
    presenter: {
      name: "Muhammad Yos Sularko",
      role: "IT System Development — Tim ICT",
      meta: ["PT Adyawinsa Telecommunication and Electrical"],
    },
  },
];
