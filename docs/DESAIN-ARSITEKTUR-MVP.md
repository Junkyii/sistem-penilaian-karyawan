# Desain Arsitektur MVP
## Sistem Penilaian Kinerja Karyawan

**Versi:** 1.0  
**Dasar:** PRD-Sistem-Penilaian-Kinerja.md  
**Cakupan:** Satu perusahaan, periode tahunan, skala 1–5

---

## 1. Sasaran MVP

MVP harus menyelesaikan alur penuh berikut:

```text
HR membuat periode
→ HR memilih template
→ HR menetapkan peserta dan penilai
→ Email penugasan terkirim
→ Karyawan mengisi penilaian mandiri opsional
→ Penilai mengisi penilaian
→ Sistem menghitung nilai berbobot
→ HR review tanpa mengubah nilai
→ HR dan pimpinan memproses bonus/promosi
→ Hasil ringkasan dipublikasikan
→ Email hasil terkirim
```

---

## 2. User Flow

### 2.1 Flow HR membuat periode

1. HR membuka `Periode Penilaian`.
2. HR memilih `Buat Periode`.
3. HR memasukkan tahun, tanggal mulai, deadline, dan tanggal publikasi.
4. Sistem memvalidasi agar tidak ada periode aktif lain pada tahun yang sama.
5. HR memilih template indikator.
6. HR menyimpan periode sebagai draft.
7. HR memilih peserta.
8. HR menetapkan penilai dan bobot masing-masing.
9. Sistem memvalidasi total bobot penilai = 100%.
10. HR mengaktifkan periode.
11. Sistem membuat tugas penilaian dan mengirim email.

### 2.2 Flow karyawan

1. Karyawan menerima email.
2. Karyawan login.
3. Karyawan membuka `Penilaian Saya`.
4. Karyawan membaca indikator dan target.
5. Karyawan mengisi penilaian mandiri atau memilih `Lewati`.
6. Sistem menyimpan draft otomatis.
7. Karyawan mengirim sebelum deadline.
8. Setelah hasil dipublikasikan, karyawan membuka ringkasan hasil.

### 2.3 Flow penilai

1. Penilai menerima email penugasan.
2. Penilai membuka `Tugas Penilaian`.
3. Penilai membaca target dan bukti kerja.
4. Penilai mengisi nilai 1–5 dan komentar.
5. Penilai menyimpan draft.
6. Penilai mengirim sebelum deadline.
7. Sistem mengunci nilai setelah dikirim.
8. Jika dikembalikan, penilai memperbaiki dan mengirim ulang.
9. Setelah deadline, sistem menolak pengiriman.

### 2.4 Flow HR review

1. HR membuka `Review Penilaian`.
2. Sistem menampilkan status setiap penilai.
3. HR memeriksa kelengkapan dan hasil hitung.
4. HR menyetujui atau mengembalikan proses.
5. HR tidak memiliki kontrol edit nilai.
6. Jika disetujui, HR membuat rekomendasi bonus/promosi.

### 2.5 Flow pimpinan

1. Pimpinan menerima email permintaan review.
2. Pimpinan membuka `Keputusan Bonus & Promosi`.
3. Pimpinan melihat performa seluruh divisi.
4. Pimpinan melihat nilai akhir dan ringkasan komentar.
5. Pimpinan menyetujui, menolak, atau meminta revisi rekomendasi.
6. Sistem mengirim hasil keputusan kepada HR.

### 2.6 Flow publikasi

1. HR memastikan keputusan HR dan pimpinan lengkap.
2. HR memilih `Publikasikan Hasil`.
3. Sistem membuat ringkasan yang aman untuk karyawan.
4. Sistem menyembunyikan nilai individual penilai dan catatan internal.
5. Sistem mengirim email hasil.
6. Hasil menjadi read-only bagi pengguna biasa.

---

## 3. Struktur Navigasi

### Karyawan

- Dashboard
- Penilaian Saya
- Target Saya
- Hasil Penilaian
- Notifikasi
- Profil dan Pengaturan

### Penilai

- Dashboard
- Tugas Penilaian
- Riwayat Penilaian
- Notifikasi
- Profil dan Pengaturan

### HR

- Dashboard HR
- Karyawan
- Struktur Organisasi
- Periode Penilaian
- Template Indikator
- Penugasan Penilai
- Review Penilaian
- Bonus dan Promosi
- Laporan
- Notifikasi
- Audit Log
- Pengaturan Sistem

### Pimpinan

- Dashboard Pimpinan
- Performa Seluruh Divisi
- Detail Penilaian
- Bonus dan Promosi
- Laporan
- Notifikasi
- Profil dan Pengaturan

---

## 4. Daftar Halaman MVP

| Halaman | Pengguna | Fungsi utama |
|---|---|---|
| Login | Semua | Autentikasi |
| Dashboard | Semua | Ringkasan tugas dan status |
| Karyawan | HR | CRUD karyawan, filter, impor |
| Detail karyawan | HR, pimpinan terbatas | Profil kerja dan riwayat performa |
| Struktur organisasi | HR | Divisi, jabatan, atasan |
| Periode penilaian | HR | Buat dan kelola periode |
| Detail periode | HR | Peserta, deadline, status |
| Template indikator | HR | Indikator, kategori, bobot |
| Penugasan penilai | HR | Penilai, peran, bobot |
| Penilaian mandiri | Karyawan | Isi atau lewati penilaian |
| Tugas penilaian | Penilai | Isi penilaian bawahan |
| Review HR | HR | Validasi proses, minta revisi |
| Bonus dan promosi | HR, pimpinan | Rekomendasi dan keputusan |
| Hasil penilaian | Karyawan | Ringkasan hasil sendiri |
| Laporan | HR, pimpinan | Rekap dan ekspor |
| Notifikasi | Semua | Daftar notifikasi |
| Audit log | HR | Riwayat aktivitas penting |
| Pengaturan | HR | Template email dan sistem |

---

## 5. Permission Matrix

Legenda: `Lihat`, `Buat`, `Ubah`, `Kirim`, `Setujui`, `Ekspor`.

| Modul | Karyawan | Penilai | HR | Pimpinan |
|---|---|---|---|---|
| Profil sendiri | Lihat/Ubah terbatas | Lihat/Ubah terbatas | Lihat/Ubah | Lihat/Ubah terbatas |
| Profil karyawan lain | Tidak | Lihat tugas | Lihat/Buat/Ubah | Lihat data kerja |
| Data pribadi | Sendiri | Tidak | Lihat | Tidak |
| Divisi dan jabatan | Tidak | Tidak | Lihat/Buat/Ubah | Lihat |
| Periode | Lihat periode sendiri | Lihat tugas | Lihat/Buat/Ubah | Lihat |
| Template indikator | Lihat sendiri | Lihat tugas | Lihat/Buat/Ubah | Lihat |
| Target kerja | Lihat/Ubah sendiri | Lihat tugas | Lihat/Buat/Ubah | Lihat |
| Penilaian mandiri | Buat/Ubah/Kirim sendiri | Tidak | Lihat | Lihat ringkasan |
| Penilaian penilai | Tidak | Buat/Ubah/Kirim tugas | Lihat/Kembalikan | Lihat ringkasan |
| Nilai penilai mentah | Tidak | Nilai sendiri | Lihat | Tidak |
| Nilai akhir | Lihat setelah publikasi | Lihat tugas terkait | Lihat | Lihat |
| Ringkasan hasil | Lihat sendiri | Lihat tugas terkait | Lihat | Lihat |
| Rekomendasi bonus | Tidak | Tidak | Buat/Lihat/Setujui administratif | Lihat/Setujui |
| Rekomendasi promosi | Tidak | Tidak | Buat/Lihat/Setujui administratif | Lihat/Setujui |
| Laporan semua divisi | Tidak | Tidak | Lihat/Ekspor | Lihat/Ekspor |
| Audit log | Tidak | Tidak | Lihat | Tidak |
| Pengaturan email | Tidak | Tidak | Lihat/Ubah | Tidak |

Catatan: akses pimpinan selalu menggunakan data performa. Data pribadi dikeluarkan dari query dan ekspor, bukan hanya disembunyikan di UI.

---

## 6. Aturan Status dan Transisi

### Periode

```text
DRAFT → AKTIF → REVIEW → SELESAI → DITUTUP
```

Transisi:

- `DRAFT → AKTIF`: HR mengaktifkan periode valid.
- `AKTIF → REVIEW`: deadline penilaian tercapai atau HR mengunci proses.
- `REVIEW → SELESAI`: seluruh review dan keputusan selesai.
- `SELESAI → DITUTUP`: HR menutup periode.

### Penilaian

```text
DRAFT → DIKIRIM → REVIEW_HR → DISETUJUI → DIPUBLIKASIKAN → DITUTUP
                 ↘ PERLU_REVISI → DIKIRIM
```

Aturan:

- Penilai hanya dapat mengubah status `DRAFT`.
- `DIKIRIM` mengunci nilai.
- HR hanya dapat mengembalikan, bukan mengubah nilai.
- `DIPUBLIKASIKAN` bersifat read-only.
- Deadline menolak transisi `DRAFT → DIKIRIM` setelah waktu batas.

### Rekomendasi

```text
DRAFT → MENUNGGU_PIMPINAN → MENUNGGU_HR → DISETUJUI_FINAL
                                      ↘ DITOLAK
```

Kedua persetujuan wajib selesai sebelum `DISETUJUI_FINAL`.

---

## 7. Skema Database MVP

### users

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| email | VARCHAR | Unique, wajib |
| password_hash | VARCHAR | Wajib |
| role | ENUM | EMPLOYEE, EVALUATOR, HR, LEADER |
| status | ENUM | ACTIVE, INACTIVE |
| last_login_at | TIMESTAMP | Nullable |
| created_at | TIMESTAMP | Wajib |
| updated_at | TIMESTAMP | Wajib |

### employees

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| user_id | UUID | FK users, unique |
| employee_number | VARCHAR | Unique |
| full_name | VARCHAR | Wajib |
| department_id | UUID | FK departments |
| position_id | UUID | FK positions |
| manager_id | UUID | FK employees, nullable |
| start_date | DATE | Wajib |
| employment_status | ENUM | ACTIVE, INACTIVE |
| personal_data | JSONB | Dilindungi, bukan akses pimpinan |
| created_at | TIMESTAMP | Wajib |
| updated_at | TIMESTAMP | Wajib |

### departments

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR | Unique |
| code | VARCHAR | Unique |
| status | ENUM | ACTIVE, INACTIVE |

### positions

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR | Wajib |
| department_id | UUID | FK departments |

### evaluation_periods

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| year | INT | Unique untuk periode aktif |
| name | VARCHAR | Wajib |
| start_date | DATE | Wajib |
| self_deadline | TIMESTAMP | Wajib |
| evaluator_deadline | TIMESTAMP | Wajib |
| hr_review_deadline | TIMESTAMP | Wajib |
| publish_date | TIMESTAMP | Wajib |
| status | ENUM | DRAFT, ACTIVE, REVIEW, COMPLETED, CLOSED |
| created_by | UUID | FK users |
| created_at | TIMESTAMP | Wajib |

### evaluation_templates

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR | Wajib |
| description | TEXT | Nullable |
| status | ENUM | DRAFT, ACTIVE, ARCHIVED |
| created_by | UUID | FK users |

### evaluation_indicators

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| template_id | UUID | FK evaluation_templates |
| name | VARCHAR | Wajib |
| description | TEXT | Wajib |
| category | ENUM | KPI, COMPETENCY, BEHAVIOR, LEADERSHIP |
| weight | DECIMAL(5,2) | 0–100 |
| required | BOOLEAN | Default true |
| sort_order | INT | Wajib |

Constraint: total `weight` dalam satu template = 100.

### evaluations

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| period_id | UUID | FK evaluation_periods |
| employee_id | UUID | FK employees |
| template_id | UUID | FK evaluation_templates |
| status | ENUM | DRAFT, SUBMITTED, HR_REVIEW, REVISION, APPROVED, PUBLISHED, CLOSED, LATE |
| final_score | DECIMAL(4,2) | Nullable sebelum selesai |
| final_category | VARCHAR | Nullable |
| published_at | TIMESTAMP | Nullable |
| created_at | TIMESTAMP | Wajib |
| updated_at | TIMESTAMP | Wajib |

Constraint: satu employee hanya memiliki satu evaluation per period.

### evaluator_assignments

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| evaluation_id | UUID | FK evaluations |
| evaluator_id | UUID | FK employees |
| evaluator_role | VARCHAR | Wajib |
| weight | DECIMAL(5,2) | 0–100 |
| required | BOOLEAN | Default true |
| status | ENUM | ASSIGNED, DRAFT, SUBMITTED, LATE, CANCELLED |
| locked_at | TIMESTAMP | Nullable |

Constraint: total `weight` per evaluation = 100.

### evaluator_assessments

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| assignment_id | UUID | FK evaluator_assignments, unique |
| submitted_at | TIMESTAMP | Nullable |
| status | ENUM | DRAFT, SUBMITTED, REVISION |
| overall_comment | TEXT | Nullable |

### assessment_scores

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| assessment_id | UUID | FK evaluator_assessments |
| indicator_id | UUID | FK evaluation_indicators |
| score | DECIMAL(3,2) | 1–5 |
| comment | TEXT | Nullable |
| created_at | TIMESTAMP | Wajib |
| updated_at | TIMESTAMP | Wajib |

Constraint: skor tidak dapat diubah setelah assessment dikirim.

### self_assessments

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| evaluation_id | UUID | FK evaluations, unique |
| status | ENUM | NOT_STARTED, DRAFT, SKIPPED, SUBMITTED |
| submitted_at | TIMESTAMP | Nullable |
| overall_comment | TEXT | Nullable |

### targets

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| evaluation_id | UUID | FK evaluations |
| title | VARCHAR | Wajib |
| description | TEXT | Wajib |
| target_value | VARCHAR | Wajib |
| actual_value | VARCHAR | Nullable |
| weight | DECIMAL(5,2) | 0–100 |
| deadline | DATE | Wajib |
| locked_at | TIMESTAMP | Nullable |

### recommendations

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| evaluation_id | UUID | FK evaluations, unique |
| bonus_status | ENUM | NOT_SUBMITTED, PENDING_LEADER, PENDING_HR, APPROVED, REJECTED |
| promotion_status | ENUM | NOT_SUBMITTED, PENDING_LEADER, PENDING_HR, APPROVED, REJECTED |
| bonus_amount | DECIMAL | HR/pimpinan only, nullable |
| hr_note | TEXT | Internal |
| leader_note | TEXT | Internal |
| finalised_at | TIMESTAMP | Nullable |

### notifications

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| user_id | UUID | FK users |
| type | VARCHAR | Wajib |
| channel | ENUM | IN_APP, EMAIL |
| subject | VARCHAR | Wajib |
| status | ENUM | QUEUED, SENT, FAILED |
| sent_at | TIMESTAMP | Nullable |
| retry_count | INT | Default 0 |
| created_at | TIMESTAMP | Wajib |

### audit_logs

| Kolom | Tipe | Aturan |
|---|---|---|
| id | UUID | Primary key |
| actor_id | UUID | FK users |
| entity_type | VARCHAR | Wajib |
| entity_id | UUID | Wajib |
| action | VARCHAR | Wajib |
| before_data | JSONB | Nullable |
| after_data | JSONB | Nullable |
| ip_address | VARCHAR | Nullable |
| created_at | TIMESTAMP | Wajib |

---

## 8. API Endpoint MVP

### Auth

```text
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/auth/me
```

### Employee dan organisasi

```text
GET    /api/employees
POST   /api/employees
GET    /api/employees/:id
PATCH  /api/employees/:id
POST   /api/employees/import
GET    /api/departments
POST   /api/departments
PATCH  /api/departments/:id
GET    /api/positions
```

### Periode dan template

```text
GET    /api/evaluation-periods
POST   /api/evaluation-periods
GET    /api/evaluation-periods/:id
PATCH  /api/evaluation-periods/:id
POST   /api/evaluation-periods/:id/activate
POST   /api/evaluation-periods/:id/close
GET    /api/templates
POST   /api/templates
GET    /api/templates/:id
PATCH  /api/templates/:id
```

### Penugasan dan penilaian

```text
POST   /api/evaluations/:id/participants
POST   /api/evaluations/:id/evaluators
PATCH  /api/evaluator-assignments/:id
DELETE /api/evaluator-assignments/:id
GET    /api/my-assessments
GET    /api/evaluator-assignments/:id
PUT    /api/evaluator-assignments/:id/scores
POST   /api/evaluator-assignments/:id/submit
GET    /api/evaluations/:id/result
POST   /api/evaluations/:id/request-revision
POST   /api/evaluations/:id/approve
POST   /api/evaluations/:id/publish
```

### Bonus dan promosi

```text
GET    /api/recommendations
POST   /api/evaluations/:id/recommendations
POST   /api/recommendations/:id/leader-decision
POST   /api/recommendations/:id/hr-decision
```

### Laporan dan notifikasi

```text
GET    /api/reports/summary
GET    /api/reports/departments
GET    /api/reports/export?format=pdf
GET    /api/notifications
POST   /api/notifications/:id/retry
GET    /api/audit-logs
```

---

## 9. Validasi Backend Wajib

1. Pengguna hanya mengakses resource sesuai role.
2. Karyawan tidak dapat melihat penilaian karyawan lain.
3. Penilai hanya dapat mengakses assignment sendiri.
4. Pimpinan tidak menerima kolom data pribadi dalam response.
5. Total bobot indikator harus 100%.
6. Total bobot penilai harus 100%.
7. Skor hanya boleh 1 sampai 5.
8. Penilaian tidak dapat dikirim setelah deadline.
9. Penilaian terkirim tidak dapat diedit oleh penilai.
10. HR tidak dapat mengubah skor.
11. Hasil hanya terlihat karyawan setelah publikasi.
12. Bonus/promosi final membutuhkan keputusan HR dan pimpinan.
13. Semua aksi kritis menulis audit log.
14. File lampiran harus melewati validasi MIME type, ukuran, dan hak akses.
15. Operasi submit harus idempotent agar klik ganda tidak membuat duplikasi.

---

## 10. Urutan Implementasi

### Sprint 1 — Fondasi

- Setup project
- Database dan migration
- Login dan session
- Role middleware
- Layout dan navigasi

### Sprint 2 — Organisasi

- Karyawan
- Divisi
- Jabatan
- Struktur atasan
- Impor CSV dasar

### Sprint 3 — Konfigurasi penilaian

- Periode tahunan
- Template indikator
- Validasi bobot
- Peserta dan penugasan penilai

### Sprint 4 — Pengisian penilaian

- Penilaian mandiri opsional
- Form penilai
- Autosave draft
- Lampiran bukti
- Deadline dan lock

### Sprint 5 — Review dan hasil

- Perhitungan nilai
- Review HR
- Revisi
- Ringkasan karyawan
- Publikasi

### Sprint 6 — Bonus, promosi, dan laporan

- Rekomendasi
- Persetujuan pimpinan
- Dashboard lintas divisi
- Ekspor laporan
- Email dan retry
- Audit log

---

## 11. Skenario Uji Kritis

### Bobot penilai tidak 100%

**Given** bobot penilai berjumlah 90%  
**When** HR menyimpan penugasan  
**Then** sistem menolak dan menampilkan kekurangan bobot.

### Penilai mengirim setelah deadline

**Given** deadline sudah lewat  
**When** penilai menekan `Kirim`  
**Then** sistem menolak request dan status tetap `LATE`.

### HR mencoba mengubah nilai

**Given** assessment sudah dikirim  
**When** HR mengubah skor  
**Then** API menolak dengan status `403`.

### Pimpinan membuka data pribadi

**Given** pimpinan meminta detail karyawan  
**When** API mengembalikan data  
**Then** response tidak berisi kolom data pribadi.

### Penilaian mandiri dilewati

**Given** penilaian mandiri opsional  
**When** karyawan memilih `Lewati`  
**Then** penilaian penilai tetap dapat diproses.

### Persetujuan belum lengkap

**Given** keputusan pimpinan belum ada  
**When** HR mencoba publikasi hasil bonus/promosi  
**Then** sistem menolak publikasi final.

### Submit diklik dua kali

**Given** request submit terkirim dua kali  
**When** server memproses kedua request  
**Then** hanya satu assessment tersimpan sebagai submitted.

---

## 12. Keputusan Teknologi yang Disarankan

- Frontend: React atau Next.js.
- Backend: API dalam Next.js atau NestJS.
- Database: PostgreSQL.
- Penyimpanan file: object storage kompatibel S3.
- Email: provider transactional email dengan webhook status.
- Auth: session cookie HTTP-only.
- Background job: queue untuk email dan ekspor laporan.
- PDF: server-side PDF generator.
- Deployment: satu environment staging dan satu production.

Pilihan teknologi dapat mengikuti stack yang sudah tersedia. Invariant bisnis, permission, dan validasi tetap sama.
