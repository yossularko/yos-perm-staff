# Runbook: Presentasi Uji Kompetensi ICT Developer Staff

Materi presentasi **Muhammad Yos Sularko — IT System Development, Tim ICT**,
PT Adyawinsa Telecommunication and Electrical (ATE).

Deck dibangun sebagai web (Next.js) untuk drafting, lalu dipindahkan manual ke
PowerPoint — HR mewajibkan format PPT/Google Slides.

- **Deadline submit materi:** Minggu, 6 September, 11.00 WIB (reply email ke Ira Amelia)
- **Jadwal presentasi:** diinformasikan menyusul oleh HR
- **Alokasi waktu:** Presentasi 30 menit · Q&A / Panel Interview 30 menit
- **Jumlah slide:** 8

---

## 1. Audiens Menentukan Segalanya — BACA DULU

Pendengarnya tiga orang, dan prioritasnya **tidak** sama rata:

| Pendengar | Yang dicari | Prioritas |
| --- | --- | --- |
| **Direktur Utama** | Hasil, manfaat bagi perusahaan, keahlian | **Utama** |
| **Direktur Operasional** | Hasil, dampak operasional, rencana ke depan | **Utama** |
| Head HRD | Kesesuaian dengan panduan asesmen | Sekunder |

Deck ini **sengaja tidak** mengikuti urutan 6 section panduan HR. Struktur
panduan itu project-centric dan berat di proses — cocok untuk asesor teknis,
tidak cocok untuk dua direktur yang peduli hasil.

Keputusan ini diambil setelah **review langsung Direktur Operasional**, yang
menolak judul lama, menolak slide "Profil & Tujuan Project", dan menolak seluruh
slide analisa requirement. Arahan beliau: pendengar harus mendapat **prestasi
apa yang dicapai, apa manfaatnya bagi perusahaan, dan rencana ke depan**.

Panduan HR tetap tersentuh lewat slide 6 (proses & jaminan kualitas) dan slide
cadangan di seksi 7. Cukup untuk Head HRD, tanpa memakan waktu para direktur.

### Empat hal yang wajib sampai

1. **Potensi & keahlian** → slide 5
2. **Project yang telah diselesaikan** → slide 3
3. **Manfaat bagi perusahaan** → slide 4
4. **Rencana ke depan** → slide 7

---

## 2. Batas Kepemilikan Pekerjaan

Deck ini bercerita soal pencapaian, jadi risiko terbesarnya adalah **klaim
berlebih**. Kalau ada direktur yang tahu struktur kerja sama dengan vendor,
satu klaim yang meleset merusak kredibilitas seluruh presentasi.

| Pekerjaan | Pemilik |
| --- | --- |
| Odoo Enterprise 17 sebagai sistem internal utama | **Vendor Garudea** |
| Peralihan dari sistem lama (E-Project, Adyawinsa Web App) ke Odoo Enterprise | **Vendor Garudea** |
| Odoo Community 17 dan 15 modulnya | **Tim ICT ATE** |
| Layer integrasi: Odoo RPC, service Golang, Sync Data System | **Tim ICT ATE** |
| 9 aplikasi pendukung | **Tim ICT ATE** |
| Pemetaan business process saat analisis | Tim ICT **bersama PMO** |
| Dokumentasi | Tim ICT, **sebagian dibantu PMO** |
| **Material Control Asset External** | **Tim ICT, bukan kamu** — sebut sebagai antrean tim |
| Odoo Enterprise ke depan | **Masih wacana** — sengaja tidak masuk slide, lihat catatan di bawah |

> **Jangan pernah** menyampaikan bahwa tim ICT yang memigrasikan sistem lama ke
> Odoo. Itu pekerjaan vendor.

Atribusi vendor sudah ditulis eksplisit di slide 2. Sebutkan juga secara lisan
di awal — justru membuat batas kontribusimu terlihat jelas, dan bikin klaim
sisanya lebih dipercaya.

Deck ini juga bercerita atas nama **tim ICT**. Panel kemungkinan menggali
kontribusi personalmu, jadi siapkan 2–3 modul atau aplikasi yang benar-benar
kamu pegang end-to-end.

### Yang belum terjadi — jangan diklaim sebagai pencapaian

Tiga hal ini ada di deck sebagai **rencana**, bukan hasil. Kalau tertukar saat
bicara, kredibilitasmu yang jadi taruhannya:

| Hal | Status sebenarnya | Cara menyebutnya |
| --- | --- | --- |
| **HRIS** | Antrean prioritas, **belum dikerjakan** | "Pengembangannya dialihkan dari vendor ke tim internal, dan segera dikerjakan" |
| **Monitoring / observability** | **Belum ada** — baru rencana (Sentry, OpenTelemetry) | Masuk slide 7 sebagai peluang teknologi, bukan slide 5 sebagai keahlian |
| **Alih kelola Odoo Enterprise** | **Masih wacana**, belum ada keputusan | **Tidak masuk slide.** Lihat catatan di bawah |

Slide 5 sengaja hanya menyebut **Docker dan Deployment** di kategori
Infrastruktur. Monitoring dikeluarkan dari sana karena memang belum berjalan.

### Soal Odoo Enterprise — jangan kamu yang mengangkat

Wacana pengalihan Odoo Enterprise dari vendor ke Tim ICT **sengaja dikeluarkan
dari slide**, karena belum ada kabar keputusannya. Kemungkinannya masih terbuka
ke dua arah:

1. Enterprise dialihkan ke Tim ICT, dengan dukungan konsultan Odoo
2. Tetap di vendor, tapi dengan komitmen baru — misalnya Tim ICT diberi akses
   dan izin insert data yang lebih terbuka, tanpa terganjal perjanjian dan
   garansi aplikasi

Menyebut arah pertama di slide berisiko: kalau keputusannya ternyata arah kedua,
kamu terlihat mendahului manajemen. Jadi **jangan kamu yang membuka topik ini.**
Kalau salah satu direktur yang menyinggung, baru jawab — bahannya ada di seksi
Q&A.

---

## 3. Peta Slide

| # | Slide | Isi | Untuk |
| --- | --- | --- | --- |
| 1 | Pencapaian, Dampak, dan Rencana ke Depan | Judul + identitas + rekam jejak sebagai chip | Semua |
| 2 | Masalah Bisnis yang Diselesaikan | Konteks vendor, 3 masalah, jalan keluar Tim ICT | Semua |
| 3 | Sistem yang Telah Dibangun | 15 modul + 9 aplikasi, dikelompokkan per fungsi bisnis | **Direktur** |
| 4 | Manfaat bagi Perusahaan | 4 angka besar + 4 dampak | **Direktur — slide terpenting** |
| 5 | Keahlian yang Dikuasai | Stack per kategori + lingkup end-to-end | **Direktur** |
| 6 | Proses & Jaminan Kualitas | 5 tahap kerja + QA + monitoring/SLA | Head HRD |
| 7 | Yang Sedang & Akan Dikerjakan | HRIS, HR Training, Material Control + peluang teknologi | **Direktur** |
| 8 | Terima Kasih | Penutup | Semua |

Modul yang dulu ada di slide analisa requirement sekarang tampil sebagai
**pencapaian** di slide 3, persis seperti arahan Dir. Operasional.

---

## 4. Angka di Slide 4 — Sumber & Cara Mempertahankannya

Semua angka berasal darimu. Yang perlu kamu ingat adalah **konteks di baliknya**,
karena inilah slide yang paling mungkin digali direktur.

| Angka | Arti sebenarnya | Kalau ditanya |
| --- | --- | --- |
| **±1.000** | Total karyawan ATE | Ini populasi yang tercakup sistem, bukan pengguna harian |
| **±100** | Tim lapangan yang pakai aplikasi harian (pelaporan project) | Ini pengguna aktif harian yang sesungguhnya |
| **±50** | Admin aktif | Pengguna yang memproses transaksi di sistem |
| **±30** | Tiket ICT Helpdesk per bulan | Beban support yang ditangani |
| **RAB: berhari-hari → 1 hari** | **Bersyarat** | Lihat catatan di bawah |
| **1–4 minggu / 1–2 bulan** | Waktu delivery modul kecil / project penuh | Bukti kecepatan tim |

### Catatan penting soal RAB

Angka "satu hari" itu berlaku **jika setiap approver merespons konsisten**.
Slide sudah memakai kata "bisa", tapi kalau ditanya, jawab apa adanya:

> "Sistem menghilangkan hambatan prosesnya — dokumen tidak lagi berpindah manual
> dan statusnya terpantau. Sisa variabelnya tinggal kecepatan approver merespons.
> Kalau semua approver konsisten, satu hari cukup."

Jawaban jujur begini justru lebih kuat, karena menunjukkan kamu paham batas
kendali sistem terhadap perilaku manusia.

### Biaya CR tidak disebut angkanya

Kamu tidak punya datanya, jadi slide hanya menyebut "tanpa change request
berbayar" secara kualitatif. Kalau direktur menanyakan besarannya, jawab jujur
bahwa data biayanya ada di sisi procurement/manajemen — jangan menebak. Ini
justru peluang: kalau mereka tahu angkanya, mereka sendiri yang akan menyebutkan,
dan dampaknya jauh lebih kuat keluar dari mulut mereka.

---

## 5. Talking Points per Slide

Target ±3–4 menit per slide untuk mengisi 30 menit.

**Slide 1 — Cover.** Perkenalan singkat. Sebutkan rekam jejak dalam satu
kalimat: masuk 2020 sebagai IT Support, sekarang IT System Development dengan
lingkup fullstack. Langsung masuk isi.

**Slide 2 — Masalah Bisnis.** Buka dengan menempatkan posisi: sistem utama
dibangun vendor. Lalu tiga masalahnya. Tutup dengan jalan keluar yang diambil
tim. **Jangan berlama-lama di sini** — ini panggung untuk slide berikutnya.

**Slide 3 — Pencapaian.** Jangan bacakan semua nama modul. Sebutkan
kelompoknya, lalu tunjuk 2–3 yang paling berdampak. Pesan yang harus sampai:
*volume dan sebarannya* — hampir semua fungsi bisnis tersentuh.

**Slide 4 — Manfaat. Ini slide terpenting.** Mulai dari angka besar, lalu RAB
sebagai contoh konkret. Tutup dengan HRIS yang ditarik dari vendor — itu kartu
terkuatmu. Kalau waktu mepet, slide ini yang tidak boleh dipangkas.

**Slide 5 — Keahlian.** Jangan membaca daftar teknologi satu per satu; direktur
tidak akan menangkap bedanya. Sampaikan intinya: satu orang bisa menangani
rantai penuh dari analisis sampai deployment, jadi perusahaan tidak perlu
merekrut beberapa peran terpisah atau menyewa vendor. Latar belakang desain
grafis dipakai sebagai pembeda, bukan sekadar tambahan.

Perhatikan: Infrastruktur hanya menyebut Docker dan Deployment. **Monitoring
belum ada**, jadi jangan diucapkan di sini — tempatnya di slide 7.

**Slide 6 — Proses & Kualitas.** Ini slide untuk Head HRD. Sampaikan cepat,
jangan bertele-tele. Satu hal yang layak ditekankan ke direktur: review mingguan
sudah berjalan bersama Dept Head ICT dan Direktur Operasional — artinya hasil
kerja ini sudah terpantau di level manajemen.

**Slide 7 — Rencana ke Depan.** HRIS lebih dulu: statusnya **prioritas
berikutnya**, dan yang sudah terjadi adalah pengalihannya dari vendor ke tim
internal — bukan pengerjaannya. Lalu HR Training yang sudah selesai dan sedang
direview. Material Control **disebut sebagai antrean tim**, bukan pekerjaanmu.

Kolom Arah Jangka Panjang sengaja hanya berisi hal yang ada dalam kendalimu —
memperluas cakupan Community, mengurangi ketergantungan vendor, self-service
mitra, dan kesiapan membimbing developer baru. Wacana pengalihan Odoo Enterprise
**tidak dimasukkan**; alasannya ada di seksi 2.

Untuk peluang teknologi, sebut alatnya secara konkret (Sentry, OpenTelemetry,
CI/CD) lalu hubungkan ke manfaatnya — masalah terdeteksi sebelum user melapor,
dan rilis lebih cepat.

**Slide 8 — Penutup.** Singkat, serahkan waktu ke panel.

---

## 6. Persiapan Q&A (30 menit — sama panjang dengan presentasi)

Pertanyaan dari **direktur** (prioritaskan latihan di sini):

- **"Kalau kamu tidak ada, sistem ini bagaimana?"** → Dokumentasi teknis dan
  panduan user tiap modul, standar kerja, environment terpisah. Sebutkan juga
  kesiapan membimbing developer baru. Ini pertanyaan yang hampir pasti muncul
  untuk keputusan karyawan tetap — **siapkan jawabannya matang**.
- **"Berapa penghematan yang dihasilkan?"** → Jujur bahwa data biaya CR ada di
  procurement. Alihkan ke yang bisa kamu buktikan: pekerjaan dikerjakan internal,
  HRIS ditarik dari vendor, delivery 1–4 minggu.
- **"Apa kontribusi kamu sendiri, bukan tim?"** → Siapkan 2–3 modul/aplikasi
  yang kamu pegang end-to-end.
- **"Rencana mana yang paling berdampak?"** → Pilih satu dan pertahankan.
  Rekomendasi: HRIS, karena menyentuh seluruh karyawan sekaligus memindahkan
  pekerjaan dari vendor ke internal.
- **"Sanggup kalau Enterprise dipegang tim ICT?"** → **Hanya dijawab kalau
  direktur yang mengangkat** — jangan kamu yang membuka. Kalau ditanya: tim
  sudah menguasai Odoo lewat 15 modul Community beserta integrasinya, dan celah
  yang tersisa bisa ditutup lewat konsultan Odoo yang paham sistem ATE. Sebutkan
  juga yang perlu disiapkan (waktu transisi, transfer pengetahuan) — mengakui
  kebutuhan itu terbaca sebagai kesiapan, bukan keraguan.

  Tambahkan bahwa kamu terbuka pada skenario lain: Enterprise tetap di vendor,
  tapi Tim ICT diberi akses dan izin insert data yang lebih longgar. Menyebut
  dua opsi menunjukkan kamu memikirkan kepentingan perusahaan, bukan memperluas
  wilayah sendiri.
- **"Kenapa tidak minta vendor saja?"** → Biaya CR per perubahan dan antrean
  vendor. Community dipakai justru agar Enterprise tetap stabil.
- **"Risiko dua instance Odoo?"** → Akui risikonya duluan (data bisa tidak
  sinkron, perubahan Enterprise bisa merusak integrasi), baru sebutkan
  mitigasinya. Menyebut risiko lebih dulu menaikkan kredibilitas.

Pertanyaan dari **Head HRD**:

- **"Jabatanmu apa persisnya?"** → **IT System Development** sesuai PKWT, lalu
  jelaskan lingkup kerjanya fullstack. Jangan menyebut "Fullstack Developer"
  sebagai nama jabatan.
- **"Dulu frontend, sekarang fullstack — kenapa?"** → Dulu tim ICT lebih besar
  dan menganut pembagian FE/BE. Seiring kebutuhan meluas, cakupannya jadi
  end-to-end.
- **"Bagaimana requirement dianalisis?"** → Slide 6, plus slide cadangan.
- **"Bagaimana keamanan akses mitra?"** → Role-based access, data mitra
  terisolasi, akses via API dengan cakupan terbatas. Siapkan detail teknisnya.

---

## 7. Slide Cadangan — Siapkan, Jangan Ditampilkan

Materi yang dipangkas dari deck **masih ada di branch `guideline-v1`**. Ambil
dari sana, jadikan slide terpisah di akhir PPT (setelah slide penutup), dan buka
hanya kalau ditanya:

| Slide cadangan | Sumber di `guideline-v1` | Dibuka kalau ditanya soal |
| --- | --- | --- |
| Requirement & tabel prioritisasi | slide 4 | Cara menentukan prioritas |
| Diagram arsitektur Enterprise ↔ Community | slide 5 | Detail teknis integrasi |
| Alur end-to-end penerbitan SPP | slide 3 | Contoh proses lintas sistem |
| Penanganan issue & troubleshooting | slide 8 | Corrective/preventive action, SLA |

Ini asuransi murah: Head HRD melihat materinya ada, para direktur tidak
kehilangan waktu.

---

## 8. Catatan Konversi ke PowerPoint

- **Slide 3 paling padat** (9 kartu kelompok). Kalau sesak, pecah jadi dua:
  modul Odoo Community di satu slide, aplikasi pendukung di slide lain — jadi
  9 slide, masih wajar.
- **Slide 4 jangan dipadatkan.** Empat angka besar harus benar-benar besar;
  ini slide yang paling menentukan.
- **Pill status di slide 7** (Sedang berjalan / Review & revisi / Antrean tim)
  sebaiknya dibuat sebagai shape berwarna, bukan teks biasa — statusnya harus
  terbaca sekali lihat.
- **Warna:** navy `#050B18` / `#0A1628` latar, emas `#FACC15` aksen, teks
  `#E2E8F0`. Hijau `#34D399` untuk status selesai.

---

## 9. Menjalankan Deck Web

```bash
bun install
bun run dev     # buka http://localhost:3000
```

Navigasi: tombol Prev/Next, dot-indicator klikable, atau keyboard
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

Untuk mengubah konten, cukup edit `src/data/slides.ts`. Tiap slide berisi array
`blocks`, dan tiap block punya `kind` yang menentukan cara render:

| `kind` | Bentuk tampilan | Dipakai di |
| --- | --- | --- |
| `points` | Kartu poin, opsional `emphasized` | Slide 2, 5 |
| `callout` | Kotak sorot beraksen emas | Slide 2 |
| `groups` | Kartu kategori berisi chip | Slide 3, 5 |
| `stats` | Angka besar + label | Slide 4 |
| `impact` | Baris ringkas label + dampak | Slide 4 |
| `steps` | Tahapan bernomor | Slide 6 |
| `columns` | Dua kolom daftar sejajar | Slide 6, 7 |
| `roadmap` | Item + pill status berwarna | Slide 7 |
| `profile` `flow` `compare` `table` `arch` | Tersedia, sedang tidak dipakai | — |

Slide `content` juga menerima `subtitle` sebagai kalimat pengantar di bawah
judul. Teks di dalam `«...»` dirender bergaris putus-putus sebagai penanda
"perlu diverifikasi" — saat ini tidak ada yang tersisa.

---

## 10. Riwayat Versi

| Branch | Isi |
| --- | --- |
| `simple-v1` | Versi awal — pitch karyawan tetap, 7 slide |
| `guideline-v1` | Versi mengikuti panduan HR, 10 slide (sumber slide cadangan) |
| `main` | Versi berjalan — achievement-led, 8 slide |
