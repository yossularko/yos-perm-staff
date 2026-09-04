# Runbook: Presentasi Uji Kompetensi ICT Developer Staff

Materi presentasi **Muhammad Yos Sularko — IT System Development, Tim ICT**,
PT Adyawinsa Telecommunication and Electrical (ATE). Disusun mengikuti *Panduan
Materi Presentasi Uji Kompetensi ICT Developer Staff* dari HR.

Deck dibangun sebagai web (Next.js) untuk drafting, lalu dipindahkan manual ke
PowerPoint sebelum submit — HR mewajibkan format PPT/Google Slides.

- **Deadline submit:** Minggu, 6 September, 11.00 WIB (reply email ke Ira Amelia)
- **Alokasi waktu:** Presentasi 30 menit · Q&A / Panel Interview 30 menit
- **Jumlah slide:** 10 (panduan menyarankan maksimal 8–10)

---

## 1. Batas Kepemilikan Pekerjaan — BACA DULU

Ini hal paling penting dalam deck ini, dan paling mudah salah diceritakan.

| Pekerjaan | Pemilik |
| --- | --- |
| Odoo Enterprise 17 sebagai sistem internal utama | **Vendor Garudea** |
| Peralihan dari sistem lama (E-Project, Adyawinsa Web App) ke Odoo Enterprise | **Vendor Garudea** |
| Odoo Community 17 dan seluruh modul pelengkapnya | **Tim ICT ATE** |
| Layer integrasi: Odoo RPC, service Golang, Sync Data System | **Tim ICT ATE** |
| Aplikasi pendukung (AdyaPro, AdyaMitra, AdyaReport, Adyaworx, Hallo ATE, ATE Career, dll.) | **Tim ICT ATE** |
| Pemetaan business process saat analisis requirement | Tim ICT **bersama PMO** |
| Dokumentasi | Tim ICT, **sebagian dibantu PMO** |

> **Jangan pernah** menyampaikan — di slide maupun lisan — bahwa tim ICT yang
> memigrasikan sistem lama ke Odoo. Itu pekerjaan vendor. Klaim yang tidak
> akurat adalah risiko terbesar di sesi Q&A, karena panel kemungkinan tahu
> struktur kerja samanya.

Framing yang benar dan tetap kuat:

> "Sistem internal utama kami Odoo Enterprise, dibangun vendor. Karena scope-nya
> terbatas dan setiap perubahan memerlukan CR berbayar, tim ICT membangun Odoo
> Community sebagai wadah modul yang belum tercakup dan ide modul baru — tetap
> terintegrasi dengan Enterprise."

Nilai jualnya justru di situ: kamu tidak sekadar mengeksekusi permintaan, tapi
menemukan jalur yang menghemat biaya CR sekaligus mempercepat pemenuhan
kebutuhan divisi. Itu langsung menyentuh indikator *Creative Thinking Level 4*
("menciptakan model atau metode baru yang dapat diterapkan dalam organisasi")
dan *Analytical Thinking Level 4*.

---

## 2. Project yang Diangkat

**Pengembangan Odoo Community 17 & Ekosistem Aplikasi Internal Tim ICT ATE.**

Alasan project ini dipilih sebagai studi kasus:

- Menyentuh **semua** aspek penilaian panduan sekaligus: proses bisnis,
  requirement, database, integrasi antar sistem, security, testing, dokumentasi.
- Punya **keputusan arsitektur yang bisa dipertanggungjawabkan** — memilih
  membangun di Odoo Community daripada mengajukan CR berbayar ke vendor untuk
  setiap kebutuhan.
- Skalanya nyata dan terukur: **15 modul** Odoo Community dan **9 aplikasi
  pendukung** aktif, dipakai lintas divisi — dibangun sejak **2025**.
- Integrasinya non-trivial: dua instance Odoo yang harus sinkron tanpa
  mengganggu sistem utama yang dikelola pihak lain.

Detail lengkap tiap aplikasi ada di [projects.md](projects.md).

---

## 3. Peta Slide → Struktur Panduan HR

Panduan punya 6 poin wajib. Semuanya tercakup, dan `eyebrow` tiap slide sengaja
diberi nomor section yang sama agar asesor mudah mencocokkan dengan checklist:

| Slide | Judul | Poin panduan yang dijawab |
| --- | --- | --- |
| 1 | Cover | Identitas presenter + rekam jejak singkat |
| 2 | Profil & Tujuan Project | 1 — Project Profile, Project Objective |
| 3 | Pembagian Peran Sistem & Alur Proses | 1 — Business Process |
| 4 | Requirement & Prioritisasi | 2 — Requirement Analysis, Prioritization |
| 5 | Technical Approach & Keputusan Arsitektur | 3 — Technical Approach, Business/operational impact |
| 6 | Proses Development & Standar Kerja | 4 — Development Process |
| 7 | Metode Testing & Mekanisme Monitoring | 5 — Testing Method, Mekanisme Monitoring |
| 8 | Penanganan Issue di Production | Checklist "Issue & Troubleshooting Data" |
| 9 | Rencana Pengembangan Berikutnya | 6 — Future Improvement, Technology Opportunity |
| 10 | Terima Kasih | Penutup |

### Catatan cakupan

- **User Flow** (sub-poin panduan no. 3) diwakili alur end-to-end penerbitan SPP
  di slide 3: PO terbit di Enterprise → validasi item ke Bill via RPC → SPP
  dibuat di Community → mitra pantau status di AdyaMitra. Contoh ini dipilih
  karena melintasi ketiga lapisan sekaligus. Siapkan 1 alur cadangan (misal
  Cash Advance) kalau panel minta contoh lain.
- **Slide 8 di luar 6 poin utama**, tapi diminta eksplisit di "Checklist
  Persiapan Data Peserta". Jangan dihapus.
- **Rekam jejak karier** diringkas jadi chip kecil di slide cover saja. Asesmen
  ini menilai kompetensi, bukan loyalitas.

---

## 4. Status Verifikasi Konten

**Seluruh isi deck sudah dikonfirmasi.** Tidak ada lagi penanda draft (garis
putus-putus emas) yang tersisa di slide.

| Item | Status |
| --- | --- |
| Periode pengembangan — 2025 – sekarang | Terkonfirmasi |
| 15 modul Odoo Community | Terkonfirmasi, cocok dengan [projects.md](projects.md) |
| 9 aplikasi pendukung aktif | Terkonfirmasi (10 entri aktif, dikurangi Odoo Community itu sendiri) |
| KPI utama project (slide 7) | Terkonfirmasi |
| Target SLA resolution time (slide 8) | Terkonfirmasi |
| Corrective & preventive action (slide 8) | Terkonfirmasi, dipakai apa adanya |
| Jabatan sesuai PKWT | Terkonfirmasi |

### Catatan jabatan

Nama jabatan di PKWT adalah **"IT System Development"** — satu istilah, dipakai
sejak 2021 sampai sekarang. Rekam jejak di slide cover:

> IT Support 2020 · IT System Development (Frontend) 2021 · IT System Development 2024

Keterangan "(Frontend)" ditambahkan karena saat itu tim ICT cukup besar dan
menganut pembagian FE/BE, sehingga lingkup kerjanya condong ke frontend
meskipun nama jabatannya sama. Sekarang lingkupnya fullstack.

Jangan pernah menyebut "Fullstack Developer" sebagai nama jabatan — itu
deskripsi lingkup kerja, bukan jabatan di dokumen kepegawaian.

---

## 5. Talking Points per Slide

Target ±3 menit per slide untuk mengisi 30 menit.

**Slide 1 — Cover.** Perkenalan singkat, sebutkan project yang dibahas. Rekam
jejak cukup satu kalimat. Jangan berlama-lama.

**Slide 2 — Profil & Tujuan.** Buka dengan menempatkan posisi: sistem utama
Odoo Enterprise dibangun vendor. Baru masuk ke masalahnya — scope terbatas dan
setiap perubahan berbiaya CR. Sebutkan atribusi vendor di awal; itu justru
membuat kontribusimu terlihat jelas batasnya.

**Slide 3 — Pembagian Peran & Alur.** Dua kolom menjelaskan siapa mengerjakan
apa. Lalu jalankan alur SPP dari kiri ke kanan — ini bukti kamu paham prosesnya
lintas sistem, bukan cuma modulmu sendiri.

**Slide 4 — Requirement & Prioritisasi.** Tabel prioritisasi adalah inti slide.
Tekankan bahwa baris terakhir — mengajukan CR ke vendor untuk tiap modul — juga
sebuah keputusan: sesuatu yang sengaja **tidak** dipilih, dengan alasan biaya.

**Slide 5 — Keputusan Arsitektur. Ini slide terkuat.** Pesan yang harus sampai:
Odoo Community bukan sistem tandingan, tapi pelengkap yang sengaja dijaga agar
tidak mengganggu Enterprise — versi disamakan (17), Enterprise tetap sumber
kebenaran, Community hanya baca dan tulis terkontrol. Lalu tunjukkan skalanya.

**Slide 6 — Development Process.** Tekankan rilis per modul dan environment
terpisah. Ini yang menunjukkan disiplin teknis. Sebutkan juga peran PMO dalam
pemetaan business process dan penyusunan dokumentasi — menunjukkan kamu bekerja
lintas fungsi, bukan sendirian di ruang developer.

**Slide 7 — Testing & Monitoring.** Poin terkuat: uji integrasi memverifikasi
data Community terhadap sumbernya di Enterprise, dan regression test setiap
vendor mengubah Enterprise. Yang kedua menunjukkan kamu sadar sistem ini
bergantung pada pihak yang tidak kamu kontrol. Perhatikan bahwa review mingguan
dilakukan bersama **Dept Head ICT dan Direktur Operasional** — sebutkan ini,
karena artinya hasil kerjamu dipantau langsung di level manajemen.

**Slide 8 — Troubleshooting.** Pakai satu kasus nyata, pola STAR: situasi → apa
yang kamu lakukan → hasil. Tutup dengan preventive action.

**Slide 9 — Future Development.** Hubungkan kembali ke kebutuhan bisnis, jangan
berhenti di daftar teknologi.

**Slide 10 — Penutup.** Singkat, serahkan waktu ke panel.

---

## 6. Persiapan Q&A (30 menit — sama panjang dengan presentasi)

- **"Kenapa tidak minta vendor saja menambahkan modulnya?"** → Jawaban ada di
  slide 5: biaya CR per perubahan dan antrean vendor. Sebutkan bahwa Community
  dipakai justru agar Enterprise tetap stabil dan tidak banyak disentuh.
- **"Apa risikonya menjalankan dua instance Odoo?"** → Akui risikonya: data bisa
  tidak sinkron, dan perubahan di Enterprise bisa merusak integrasi. Lalu
  jelaskan mitigasinya (validasi sinkronisasi terjadwal, versi disamakan,
  regression test). **Panel menghargai kandidat yang menyebut risiko duluan.**
- **"Kalau vendor upgrade Enterprise, apa yang terjadi?"** → Slide 7. Siapkan
  contoh nyata kalau pernah terjadi.
- **"Bagaimana pengamanan akses mitra ke sistem internal?"** → Role-based
  access, data mitra terisolasi, akses lewat API dengan cakupan terbatas.
  *Siapkan detail teknisnya* — Information Security adalah aspek penilaian no. 8.
- **"Mana yang kamu kerjakan sendiri, mana yang tim?"** → **Siapkan jawaban ini
  dengan jujur dan spesifik.** Deck ini bercerita atas nama tim ICT; panel akan
  menggali kontribusi personalmu. Siapkan 2–3 modul/aplikasi yang benar-benar
  kamu pegang end-to-end.
- **"Jabatanmu apa persisnya?"** → Sebut **IT System Development** sesuai PKWT,
  lalu jelaskan lingkup kerjanya memang fullstack (frontend, backend, database,
  deployment). Jangan menyebut jabatan yang berbeda dari dokumen kepegawaian.
- **"Dulu frontend, sekarang fullstack — kenapa berubah?"** → Saat itu tim ICT
  cukup besar dan menganut pembagian FE/BE, jadi lingkup kerja lebih spesifik.
  Seiring tim mengecil dan kebutuhan meluas, cakupannya jadi end-to-end. Ini
  jawaban yang bagus karena menunjukkan kemampuan menyesuaikan diri dengan
  kebutuhan organisasi, bukan sekadar bertambah skill.
- **"Apa yang terjadi kalau kamu tidak ada?"** → Dokumentasi teknis, panduan
  user, standar kerja di slide 6. Menyentuh *Expertise Level 4 poin e*
  (transfer pengetahuan).
- **"Improvement apa yang kamu inisiasi sendiri?"** → Siapkan 1–2 contoh modul
  yang idenya datang dari internal, bukan diminta user. Menyentuh
  *Continuous Improvement*.

Aspek penilaian yang **paling tipis** di deck dan sebaiknya disiapkan lisan:
**Information Security** dan **Documentation**.

---

## 7. Catatan Konversi ke PowerPoint

- **Slide 5 paling padat** (callout + 4 lapisan arsitektur + baris impact).
  Kalau di PPT terasa sesak, pecah jadi 2 slide — jadi 11 slide total. Panduan
  bilang "disarankan maksimal 8–10", jadi ini keputusanmu; keterbacaan lebih
  penting daripada patuh angka secara kaku.
- **Diagram arsitektur slide 5** paling berdampak kalau digambar ulang sebagai
  shape PowerPoint dengan panah dua arah antara Enterprise ↔ Integration ↔
  Community. Beri warna berbeda untuk blok vendor dan blok Tim ICT — pembagian
  kepemilikan jadi terbaca sekali lihat.
- **Tabel prioritisasi (slide 4)** dibuat sebagai tabel native, bukan
  screenshot, supaya teksnya tajam di proyektor.
- **Warna:** navy `#050B18` / `#0A1628` latar, emas `#FACC15` aksen, teks
  `#E2E8F0`.
- **Penanda garis putus-putus emas** hanya alat bantu drafting — jangan dibawa
  ke PPT. Semua yang bergaris putus-putus harus sudah diganti angka asli atau
  dihapus sebelum submit.

---

## 8. Menjalankan Deck Web

```bash
bun install
bun run dev     # buka http://localhost:3000
```

Navigasi: tombol Prev/Next di bawah, dot-indicator klikable, atau keyboard
(`←`/`→`, `↑`/`↓`, `PageUp`/`PageDown`, `Home`, `End`).

### Struktur kode

```
src/
  app/
    layout.tsx        metadata & font
    page.tsx          merender seluruh slide dari data
    globals.css       tema warna, scroll-snap, animasi reveal
  components/
    Slide.tsx         renderer semua tipe block
    SlideContainer.tsx  state slide aktif, keyboard, IntersectionObserver
    NavigationControls.tsx
    SlideIndicator.tsx
  data/
    slides.ts         SELURUH KONTEN ADA DI SINI
```

Untuk mengubah konten, cukup edit `src/data/slides.ts` — tidak perlu menyentuh
komponen. Tiap slide berisi array `blocks`, dan tiap block punya `kind` yang
menentukan cara render:

| `kind` | Bentuk tampilan | Dipakai di |
| --- | --- | --- |
| `profile` | Daftar label–value | Slide 2 |
| `points` | Kartu poin, opsional `emphasized` | Slide 2, 6, 9 |
| `flow` | Alur horizontal berpanah | Slide 3 |
| `compare` | Dua kolom pembanding | Slide 3, 8 |
| `columns` | Dua kolom daftar sejajar | Slide 4, 7, 9 |
| `table` | Tabel; baris `tone: "drop"` diredupkan | Slide 4 |
| `steps` | Tahapan bernomor | Slide 6, 8 |
| `stats` | Angka besar + label | Slide 7, 8 |
| `arch` | Lapisan arsitektur bertumpuk | Slide 5 |
| `callout` | Kotak sorot keputusan | Slide 5 |
| `impact` | Baris ringkas label + dampak | Slide 5 |

Teks di dalam `«...»` otomatis dirender dengan garis putus-putus sebagai
penanda "perlu diverifikasi".

### Versi sebelumnya

Deck lama (pitch pengajuan karyawan tetap, 7 slide) ada di branch `simple-v1`.
