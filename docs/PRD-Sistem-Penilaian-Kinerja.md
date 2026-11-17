# PRD — Sistem Penilaian Kinerja Karyawan

**Versi:** 1.0  
**Status:** Final untuk MVP  
**Cakupan:** Satu perusahaan  
**Periode penilaian:** Tahunan  
**Skala nilai:** 1–5

---

## 1. Ringkasan Produk

Website untuk mengelola penilaian kinerja karyawan secara terstruktur, transparan, dan terdokumentasi. Sistem menghubungkan karyawan, beberapa penilai, HR, dan pimpinan dalam satu alur kerja tahunan.

Sistem mendukung:

- Pengelolaan karyawan, divisi, dan jabatan
- Penetapan target dan indikator kerja
- Penilaian mandiri yang bersifat opsional
- Penilaian oleh beberapa penilai dengan bobot berbeda
- Perhitungan nilai otomatis
- Review HR tanpa mengubah nilai penilai
- Persetujuan bonus dan promosi oleh HR serta pimpinan
- Publikasi ringkasan hasil kepada karyawan
- Laporan lintas divisi
- Notifikasi email wajib
- Audit log aktivitas penting

---

## 2. Latar Belakang

Proses penilaian manual menggunakan spreadsheet atau dokumen menyebabkan data tersebar, format tidak konsisten, perhitungan rawan salah, dan riwayat sulit dilacak. Sistem ini menjadi sumber data terpusat untuk seluruh proses evaluasi kinerja.

---

## 3. Tujuan Produk

1. Menstandarkan proses penilaian tahunan.
2. Menghasilkan nilai secara otomatis dan konsisten.
3. Mendukung beberapa penilai dengan bobot berbeda.
4. Menjaga transparansi hasil tanpa membuka data sensitif.
5. Menyediakan dasar keputusan bonus dan promosi.
6. Mengurangi pekerjaan administratif HR.
7. Menyimpan riwayat dan jejak perubahan secara aman.

### Indikator keberhasilan

- 90% penilaian selesai sebelum deadline.
- Waktu pembuatan laporan turun minimal 70%.
- Total bobot indikator dan penilai selalu tervalidasi 100%.
- Seluruh penilaian final tersimpan dan dapat ditelusuri.
- Minimal 80% pengguna dapat menyelesaikan tugas tanpa bantuan admin.

---

## 4. Pengguna dan Hak Akses

| Role | Akses |
|---|---|
| Karyawan | Data diri terbatas, target, penilaian mandiri opsional, hasil ringkasan sendiri |
| Penilai | Penilaian karyawan yang ditugaskan, target, bukti kerja, komentar |
| HR | Konfigurasi sistem, karyawan, periode, template, penilai, review, laporan, rekomendasi |
| Pimpinan | Performa seluruh divisi, laporan, rekomendasi bonus/promosi, tanpa data pribadi |

### Batasan data pribadi

Pimpinan tidak dapat melihat alamat, nomor identitas, nomor rekening, nomor telepon pribadi, data keluarga, dokumen pribadi, dan data sensitif non-kinerja.

---

## 5. Ruang Lingkup MVP

### Termasuk

- Login, logout, reset password
- Role-based access control
- Data karyawan, divisi, dan jabatan
- Periode penilaian tahunan
- Template indikator dan bobot
- Target kerja dan lampiran bukti
- Penilaian mandiri opsional
- Multi-penilai dengan bobot berbeda
- Perhitungan nilai otomatis skala 1–5
- Review HR tanpa edit nilai
- Ringkasan hasil untuk karyawan
- Persetujuan bonus dan promosi
- Dashboard dan laporan
- Ekspor PDF, Excel, atau CSV
- Notifikasi email
- Audit log

### Tidak termasuk MVP

- Integrasi payroll dan absensi
- Penilaian 360 derajat penuh
- Aplikasi mobile native
- Analisis prediktif berbasis AI
- Perhitungan nominal bonus otomatis
- Integrasi WhatsApp atau Slack

---

## 6. Alur Bisnis Utama

1. HR membuat periode penilaian tahunan.
2. HR memilih template indikator.
3. HR menentukan peserta, penilai, peran penilai, dan bobot.
4. Sistem mengirim email penugasan.
5. Karyawan mengisi penilaian mandiri secara opsional.
6. Setiap penilai memberi nilai secara terpisah.
7. Sistem menghitung nilai berbobot.
8. HR memeriksa kelengkapan dan mengembalikan jika perlu revisi.
9. HR menyetujui proses tanpa mengubah nilai.
10. HR mengajukan rekomendasi bonus atau promosi.
11. Pimpinan meninjau dan memberi keputusan.
12. HR menyelesaikan persetujuan administratif.
13. Sistem mempublikasikan ringkasan hasil kepada karyawan.
14. Sistem mengirim email hasil dan menyimpan audit log.

---

## 7. Periode Penilaian

### Aturan

- Periode berlangsung tahunan.
- Satu tahun hanya boleh memiliki satu periode aktif.
- HR menetapkan tanggal mulai, deadline penilaian, deadline review, dan tanggal publikasi.
- Pengiriman setelah deadline ditolak.
- Penilaian yang belum dikirim saat deadline berstatus terlambat.
- Periode tidak dapat ditutup jika penilai wajib belum selesai, kecuali kebijakan administratif khusus.

### Data periode

- Nama periode
- Tahun
- Tanggal mulai
- Deadline penilaian mandiri
- Deadline penilaian penilai
- Deadline review HR
- Tanggal publikasi
- Status periode

---

## 8. Template dan Indikator Penilaian

### Jenis indikator

- KPI atau target kerja
- Kompetensi
- Perilaku kerja
- Kepemimpinan, bila relevan

### Data indikator

- Nama indikator
- Deskripsi
- Kategori
- Bobot indikator
- Skala nilai 1–5
- Target dan satuan
- Wajib atau opsional

Total bobot indikator wajib 100%.

### Skala nilai

| Nilai | Keterangan |
|---:|---|
| 1 | Sangat kurang |
| 2 | Kurang |
| 3 | Sesuai harapan |
| 4 | Baik |
| 5 | Sangat baik |

---

## 9. Multi-Penilai

Satu karyawan dapat memiliki beberapa penilai. Bobot berbeda bergantung peran penilai.

### Contoh

| Penilai | Peran | Bobot |
|---|---|---:|
| Atasan langsung | Direct manager | 50% |
| Project manager | Project reviewer | 30% |
| Kepala divisi | Division head | 20% |
| **Total** |  | **100%** |

### Aturan

- Total bobot seluruh penilai wajib 100%.
- HR menetapkan penilai dan bobot.
- Penilai tidak dapat melihat nilai penilai lain.
- Setiap penilai mengisi penilaian terpisah.
- HR dapat menambah, mengganti, atau menghapus penilai sebelum penilaian dikirim.
- Setelah penilai mengirim, penilai dan bobot terkunci.
- Perubahan setelah terkunci membutuhkan proses pembukaan ulang administratif.
- Penilaian mandiri tidak masuk nilai akhir secara default.
- Karyawan hanya melihat ringkasan gabungan, bukan nilai tiap penilai.

### Status penilai

- Belum ditugaskan
- Belum mulai
- Draft
- Sudah dikirim
- Terlambat
- Dibatalkan

---

## 10. Target Kerja

Data target:

- Nama target
- Deskripsi
- Indikator keberhasilan
- Nilai target
- Nilai aktual
- Bobot
- Deadline
- Catatan
- Lampiran bukti

Aturan:

- Total bobot target wajib 100% jika target digunakan sebagai kelompok indikator.
- Target dapat dikunci setelah disetujui.
- Perubahan setelah dikunci memiliki riwayat.
- File lampiran divalidasi berdasarkan ukuran dan tipe file.

---

## 11. Penilaian Mandiri

Penilaian mandiri bersifat opsional.

Karyawan dapat:

- Melihat indikator
- Mengisi nilai 1–5
- Menulis komentar
- Mengunggah bukti
- Menyimpan draft
- Mengirim atau melewati penilaian

Penilaian mandiri menjadi bahan perbandingan dan diskusi, bukan komponen nilai akhir default. Jika fitur dinonaktifkan atau dilewati, proses penilaian tetap berjalan.

---

## 12. Penilaian Penilai

Penilai dapat:

- Melihat karyawan yang ditugaskan
- Melihat target dan bukti kerja
- Mengisi nilai 1–5
- Menambahkan komentar
- Menyimpan draft
- Mengirim penilaian sebelum deadline
- Mengembalikan catatan melalui proses revisi

HR tidak dapat mengubah nilai penilai. Jika terdapat kesalahan, HR mengembalikan penilaian untuk diperbaiki oleh penilai. Nilai lama dan baru dicatat dalam audit log.

---

## 13. Perhitungan Nilai

### Nilai indikator

```text
Nilai indikator akhir =
(nilai penilai 1 × bobot penilai 1)
+ (nilai penilai 2 × bobot penilai 2)
+ ...
```

### Nilai keseluruhan

```text
Nilai akhir =
sum(nilai indikator akhir × bobot indikator)
```

Nilai akhir dibulatkan menjadi dua angka desimal.

### Contoh

```text
Atasan langsung: 4 × 50% = 2,00
Project manager: 5 × 30% = 1,50
Kepala divisi: 3 × 20% = 0,60

Nilai indikator akhir = 4,10
```

### Kategori performa

| Rentang | Kategori |
|---:|---|
| 4,50–5,00 | Sangat baik |
| 3,50–4,49 | Baik |
| 2,50–3,49 | Cukup |
| 1,50–2,49 | Kurang |
| 1,00–1,49 | Sangat kurang |

---

## 14. Review dan Persetujuan HR

HR dapat:

- Memeriksa kelengkapan
- Melihat status tiap penilai
- Mengembalikan penilaian untuk revisi
- Menyetujui proses
- Menambahkan catatan administratif
- Mengajukan rekomendasi bonus/promosi
- Mempublikasikan hasil

HR tidak dapat mengubah nilai penilai.

---

## 15. Bonus dan Promosi

Hasil penilaian menjadi dasar rekomendasi bonus dan promosi. MVP menyimpan status rekomendasi dan keputusan, bukan menghitung nominal bonus otomatis.

### Alur persetujuan

1. Hasil penilaian disetujui.
2. HR mengajukan rekomendasi.
3. Pimpinan meninjau seluruh informasi kinerja.
4. Pimpinan memberi keputusan.
5. HR menyelesaikan persetujuan administratif.
6. Sistem menyimpan keputusan final.

### Status rekomendasi

- Belum diajukan
- Menunggu review HR
- Menunggu keputusan pimpinan
- Disetujui HR
- Disetujui pimpinan
- Disetujui final
- Ditolak
- Perlu revisi

Nominal bonus, jika ada, hanya dapat dilihat HR dan pimpinan berwenang.

---

## 16. Hasil untuk Karyawan

Karyawan melihat:

- Nilai akhir
- Kategori performa
- Nilai per indikator
- Ringkasan komentar penilai
- Kekuatan utama
- Area perbaikan
- Rekomendasi pengembangan
- Status bonus atau promosi jika sudah diputuskan

Karyawan tidak melihat nilai individual tiap penilai, komentar mentah penilai, catatan internal HR, atau catatan rahasia pimpinan.

---

## 17. Notifikasi Email

Email wajib dikirim saat:

- Periode dimulai
- Penilai ditugaskan
- Penilaian mandiri tersedia
- Deadline mendekat
- Penilaian terlambat
- Penilaian dikirim
- Penilaian dikembalikan
- Penilaian disetujui
- Hasil dipublikasikan
- Keputusan bonus/promosi berubah

Email tidak memuat nilai sensitif secara langsung. Email berisi ringkasan status dan tautan ke aplikasi.

Sistem menyediakan template email, log pengiriman, status gagal/berhasil, dan kirim ulang.

---

## 18. Dashboard dan Laporan

### Dashboard HR

- Total karyawan
- Status penilaian
- Penilaian terlambat
- Rata-rata per divisi
- Distribusi kategori
- Rekomendasi bonus/promosi

### Dashboard pimpinan

- Performa seluruh divisi
- Perbandingan antar divisi
- Tren tahunan
- Daftar rekomendasi
- Status penyelesaian penilaian

### Laporan

- Laporan individu
- Laporan divisi
- Rekap seluruh perusahaan
- Distribusi kategori performa
- Riwayat tahunan
- Rekomendasi bonus dan promosi

Format ekspor: PDF, Excel, CSV.

---

## 19. Status Penilaian

- Draft
- Menunggu penilaian mandiri
- Menunggu penilaian penilai
- Sebagian penilai selesai
- Menunggu review HR
- Perlu revisi
- Disetujui
- Menunggu keputusan bonus/promosi
- Disetujui final
- Dipublikasikan
- Ditutup
- Terlambat

---

## 20. Halaman Utama

1. Login
2. Dashboard
3. Daftar karyawan
4. Detail karyawan
5. Struktur organisasi
6. Daftar periode
7. Detail periode
8. Template indikator
9. Penugasan penilai
10. Target kerja
11. Penilaian mandiri
12. Penilaian penilai
13. Review HR
14. Persetujuan bonus/promosi
15. Hasil penilaian
16. Laporan
17. Notifikasi
18. Pengaturan akun
19. Audit log

---

## 21. Model Data Utama

- User
- Employee
- Role
- Department
- Position
- EvaluationPeriod
- EvaluationTemplate
- EvaluationIndicator
- EvaluationParticipant
- EvaluatorAssignment
- EmployeeTarget
- SelfAssessment
- EvaluatorAssessment
- EvaluationResult
- FeedbackSummary
- CompensationRecommendation
- PromotionRecommendation
- Notification
- AuditLog
- Attachment

Relasi penting:

```text
Department memiliki banyak Employee.
Employee memiliki satu atau beberapa EvaluatorAssignment.
EvaluationPeriod memiliki banyak EvaluationParticipant.
EvaluationTemplate memiliki banyak EvaluationIndicator.
Evaluation memiliki banyak Target.
Evaluation memiliki satu SelfAssessment opsional.
Evaluation memiliki banyak EvaluatorAssessment.
Evaluation menghasilkan satu EvaluationResult.
Evaluation dapat memiliki rekomendasi bonus dan promosi.
```

---

## 22. Kebutuhan Nonfungsional

### Keamanan

- HTTPS
- Password hashing
- Role-based access control
- Validasi frontend dan backend
- Perlindungan SQL injection dan XSS
- Pembatasan akses lampiran
- Backup berkala
- Audit log

### Performa

- Dashboard tampil maksimal 3 detik pada data normal.
- Pencarian maksimal 2 detik.
- Ekspor laporan berjalan sebagai proses terpisah.
- Mendukung minimal 500 pengguna aktif pada tahap awal.

### Usability

- Responsive untuk desktop dan tablet.
- Draft dapat disimpan.
- Pesan error jelas.
- Deadline dan status terlihat jelas.
- Navigasi berbeda sesuai role.

### Integritas data

- Bobot indikator wajib 100%.
- Bobot penilai wajib 100%.
- Nilai tidak dapat diubah HR.
- Perubahan status dicatat.
- Penilaian terkunci setelah deadline.

---

## 23. Acceptance Criteria MVP

### Autentikasi

- Pengguna dapat login dengan kredensial valid.
- Pengguna tanpa akses tidak dapat membuka halaman internal.
- Dashboard sesuai role.

### Periode

- HR dapat membuat satu periode tahunan.
- Periode memiliki tanggal dan status valid.
- Sistem menolak periode aktif kedua pada tahun sama.

### Penilai

- HR dapat menetapkan beberapa penilai.
- Bobot penilai wajib berjumlah 100%.
- HR dapat mengganti penilai sebelum penilaian dikirim.
- Nilai tiap penilai tersimpan terpisah.

### Penilaian

- Karyawan dapat mengisi atau melewati penilaian mandiri.
- Penilai dapat menyimpan draft.
- Penilai hanya dapat mengirim sebelum deadline.
- Sistem menghitung nilai berbobot otomatis.
- Nilai dibulatkan dua angka desimal.

### Review

- HR dapat mengembalikan penilaian.
- HR tidak dapat mengubah nilai penilai.
- Sistem mencatat riwayat revisi.
- Hasil yang disetujui dapat dipublikasikan.

### Bonus dan promosi

- HR dapat mengajukan rekomendasi.
- Pimpinan dapat menyetujui atau menolak.
- Keputusan final membutuhkan HR dan pimpinan.

### Laporan

- Pimpinan dapat melihat seluruh divisi.
- Pimpinan tidak dapat melihat data pribadi.
- Karyawan hanya melihat ringkasan sendiri.
- Laporan dapat diekspor.

### Email

- Email dikirim pada event wajib.
- Status pengiriman tercatat.
- Email tidak menampilkan nilai sensitif secara langsung.

---

## 24. Prioritas Pengembangan

### Must Have

- Login dan permission
- Data karyawan
- Periode tahunan
- Template indikator
- Multi-penilai
- Target kerja
- Penilaian mandiri opsional
- Penilaian penilai
- Perhitungan nilai
- Review HR
- Persetujuan bonus/promosi
- Publikasi hasil
- Email wajib
- Laporan dasar

### Should Have

- Impor CSV
- Lampiran bukti
- Grafik performa
- Audit log lengkap
- Kirim ulang email
- Riwayat tahunan

### Could Have

- Penilaian 360 derajat
- Integrasi payroll
- Integrasi absensi
- Rekomendasi pelatihan otomatis
- Analitik lanjutan

---

## 25. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Penilai terlambat | Reminder email, dashboard deadline, penguncian otomatis |
| Nilai tidak objektif | Multi-penilai, bobot transparan untuk admin, bukti kerja |
| Data sensitif bocor | Permission ketat, penyaringan laporan, audit log |
| Nilai berubah tanpa jejak | Nilai terkunci, riwayat revisi, audit log |
| Bobot salah | Validasi total 100% sebelum simpan |
| Email gagal | Log pengiriman dan fitur kirim ulang |
| Karyawan tidak memahami hasil | Ringkasan nilai, kategori, area perbaikan |
| Persetujuan bonus tertunda | Status workflow dan reminder ke HR/pimpinan |

---

## 26. Roadmap

### Fase 1 — Fondasi

- Setup aplikasi
- Login
- Role dan permission
- Data karyawan
- Divisi dan jabatan

### Fase 2 — Penilaian inti

- Periode tahunan
- Template indikator
- Target kerja
- Penilaian mandiri
- Multi-penilai
- Perhitungan nilai

### Fase 3 — Review dan keputusan

- Review HR
- Rekomendasi bonus/promosi
- Persetujuan pimpinan
- Publikasi hasil
- Notifikasi email

### Fase 4 — Laporan dan penyempurnaan

- Dashboard lintas divisi
- Ekspor laporan
- Audit log lengkap
- Riwayat tahunan
- Integrasi sistem perusahaan
