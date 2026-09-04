# Projects

Daftar aplikasi yang dibangun dan dikelola tim ICT PT Adyawinsa Telecommunication and Electrical (ATE).

## Lanskap Sistem

Aplikasi internal utama perusahaan adalah **Odoo Enterprise 17**, yang dikembangkan oleh vendor **Garudea**.

Sebagian kebutuhan bisnis belum tercakup di Odoo Enterprise. Untuk menutup celah tersebut, tim ICT membangun **Odoo Community 17** sebagai wadah modul-modul tambahan yang tetap terintegrasi dengan Odoo Enterprise. Integrasi dilakukan melalui RPC bawaan Odoo, dengan sebagian jalur data dijembatani oleh service Golang.

Di luar ekosistem Odoo, tim ICT juga membangun aplikasi pendukung menggunakan Golang, React, Next.js, dan React Native.

## Ringkasan

| # | Aplikasi | Fungsi Utama | Stack | Status |
| --- | --- | --- | --- | --- |
| 1 | Odoo Community | Modul internal pelengkap Odoo Enterprise | Odoo Community 17, Golang | Aktif |
| 2 | AdyaPro | Registrasi aset, absensi, dan pelaporan tim lapangan | React Native (Expo) | Aktif |
| 3 | Adyaworx | Penyimpanan file | Next.js + shadcn/ui, Golang | Aktif |
| 4 | Adyawinsa Company Profile | Company profile | Next.js, Sanity | Aktif |
| 5 | ATE Company Profile | Company profile | Next.js, Sanity | Aktif |
| 6 | AdyaMitra | Portal mitra untuk memantau status SPP | Next.js + shadcn/ui, Golang + Odoo | Aktif |
| 7 | AdyaReport | Generate report dari data tim lapangan | Next.js + shadcn/ui, Golang | Aktif |
| 8 | Hallo ATE | Chatbot informasi HRD dan ICT | Next.js + shadcn/ui, Golang | Aktif |
| 9 | Helpdesk MS Surabaya | Pemantauan dan distribusi issue ke tim lapangan | React + Ant Design, Golang | Aktif |
| 10 | ATE Career | Job portal untuk kandidat | Next.js + shadcn/ui, Odoo | Aktif |
| 11 | E-Project | Sistem internal sebelum migrasi ke Odoo | PHP | Nonaktif |
| 12 | Adyawinsa Web App | Modul baru di luar E-Project | React + Ant Design, Laravel | Nonaktif |
| 13 | AdyawinsaApp | Registrasi aset, absensi, task report, approval | React Native | Nonaktif |
| 14 | ICT Ticketing System | Manajemen tiket ICT | Next.js + Chakra UI, Laravel | Nonaktif |
| 15 | EProc | Manajemen tender | Next.js + daisyUI, NestJS | Dibatalkan |

---

## Aplikasi Aktif

### 1. Odoo Community

Aplikasi internal untuk mendukung produktivitas karyawan, terkoneksi dengan Odoo Enterprise.

**Stack:** Odoo Community 17, dengan service Golang sebagai penjembatan data.

Modul yang tersedia:

| Modul | Pengguna | Fungsi |
| --- | --- | --- |
| **Cash Advance** | Karyawan | Mengajukan kasbon. |
| **Cash Advance Settlement** | Karyawan | Melaporkan penggunaan kasbon dengan lampiran struk dan dana pengembalian jika ada. |
| **Reimbursement** | Karyawan | Mengajukan reimbursement dengan lampiran struk. |
| **Asset Management** | Divisi Asset Management, Divisi GA | Mengelola aset seperti laptop dan tools (angle meter, crimping, tang, dll.), serta manajemen kendaraan untuk Divisi GA. |
| **Vendor Bills** | Divisi Finance | Mencetak bill dengan template baru. Dibuat di Community karena penambahan template di Odoo Enterprise memerlukan change request berbayar ke vendor. |
| **ESPP** | Admin Proyek lintas divisi | Membuat surat perintah pembayaran berdasarkan PO, dengan validasi item merujuk Bill di Odoo Enterprise. |
| **ERAB** | Project Manager lintas divisi | Menyusun Rencana Anggaran Biaya. Budget yang sudah final dikirim ke Odoo Enterprise. |
| **Project & Material Control** | Tim proyek (PM, Waspang, Material Control) | Mengelola proyek melalui gantt chart beserta manajemen materialnya. |
| **Manpower Request** | Project Manager lintas divisi | Mengajukan pengadaan karyawan baru. |
| **Recruitment** | Tim Recruitment | Mengelola job request dan kandidat. |
| **Training** | Tim Training | Mengelola request training dan sertifikat. |
| **Exit Clearances** | Tim HR | Mengelola proses karyawan keluar. |
| **ICT Helpdesk** | Tim ICT | Mengelola tiket. |
| **Dashboard** | PM, BPC, AM GA | Menampilkan statistik data proyek, budget, dan aset. |
| **Sync Data System** | — | Sinkronisasi data dari Odoo Enterprise ke Odoo Community, dijembatani oleh Golang. |

### 2. AdyaPro (The New AdyawinsaApp)

Aplikasi Android untuk registrasi aset bulanan, absensi, dan pelaporan pekerjaan tim lapangan.

**Stack:** React Native (Expo)

### 3. Adyaworx

Aplikasi web untuk penyimpanan file.

**Stack:** Next.js + shadcn/ui · Golang

### 4. Adyawinsa Company Profile

Aplikasi web company profile.

**Stack:** Next.js · Sanity

### 5. ATE Company Profile

Aplikasi web company profile.

**Stack:** Next.js · Sanity

### 6. AdyaMitra

Aplikasi web bagi mitra untuk memantau status SPP.

**Stack:** Next.js + shadcn/ui · Golang + Odoo

### 7. AdyaReport

Aplikasi web untuk generate report berdasarkan data yang dilaporkan tim lapangan.

**Stack:** Next.js + shadcn/ui · Golang

### 8. Hallo ATE

Aplikasi web chatbot bagi karyawan dan eks karyawan ATE untuk menanyakan informasi seputar HRD (status kontrak, status EC, potong gaji, hold gaji) dan ICT.

**Stack:** Next.js + shadcn/ui · Golang

### 9. Helpdesk MS Surabaya

Aplikasi web untuk memantau dan mendistribusikan issue ke tim lapangan.

**Stack:** React + Ant Design · Golang

### 10. ATE Career

Aplikasi web job portal bagi kandidat untuk mengirimkan lamaran.

**Stack:** Next.js + shadcn/ui · Odoo

---

## Aplikasi Nonaktif

Aplikasi berikut sudah tidak digunakan, sebagian besar karena fungsinya diambil alih oleh ekosistem Odoo.

### 11. E-Project

Aplikasi internal yang digunakan sebelum migrasi ke Odoo.

**Stack:** PHP

### 12. Adyawinsa Web App

Aplikasi web untuk sistem internal di luar E-Project, menampung modul-modul baru.

**Stack:** React + Ant Design · Laravel

### 13. AdyawinsaApp

Aplikasi Android untuk registrasi aset bulanan, absensi, task report, dan approval (CA, RMB, peminjaman aset, EC). Digantikan oleh AdyaPro.

**Stack:** React Native

### 14. ICT Ticketing System

Aplikasi web untuk manajemen tiket ICT. Fungsinya kini ditangani modul ICT Helpdesk di Odoo Community.

**Stack:** Next.js + Chakra UI · Laravel

### 15. EProc — Dibatalkan

Aplikasi web untuk manajemen tender. Pengembangan dibatalkan.

**Stack:** Next.js + daisyUI · NestJS
