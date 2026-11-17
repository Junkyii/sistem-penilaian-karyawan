const toast = document.querySelector('#toast');
const pageBody = document.querySelector('.page-body');
const navButtons = [...document.querySelectorAll('.pill')];
const dashboardMarkup = pageBody.innerHTML;
function esc(v) { return String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
const state = {
  page: 'dashboard',
  employees: [
    { name: 'Dimas Pratama', role: 'Product designer', division: 'Teknologi', score: '4,12', status: 'Selesai' },
    { name: 'Maya Sari', role: 'Finance analyst', division: 'Keuangan', score: '—', status: 'Berjalan' },
    { name: 'Raka Putra', role: 'Operations lead', division: 'Operasional', score: '3,78', status: 'Selesai' },
    { name: 'Siti Nurhaliza', role: 'People partner', division: 'People & Culture', score: '4,45', status: 'Selesai' },
    { name: 'Reza Firmansyah', role: 'Engineering manager', division: 'Teknologi', score: '—', status: 'Menunggu review' }
  ],
  assessments: [
    { name: 'Dimas Pratama', division: 'Teknologi', evaluator: '2 penilai', status: 'Selesai', score: '4,12' },
    { name: 'Maya Sari', division: 'Keuangan', evaluator: '1 penilai', status: 'Berjalan', score: '—' },
    { name: 'Raka Putra', division: 'Operasional', evaluator: '3 penilai', status: 'Selesai', score: '3,78' },
    { name: 'Siti Nurhaliza', division: 'People & Culture', evaluator: '2 penilai', status: 'Selesai', score: '4,45' },
    { name: 'Reza Firmansyah', division: 'Teknologi', evaluator: '2 penilai', status: 'Menunggu review', score: '—' }
  ]
};

const icons = { dashboard: 'Ringkasan', assessments: 'Penilaian', employees: 'Karyawan', reports: 'Laporan', period: 'Periode', templates: 'Template' };

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2300);
}
function statusClass(status) {
  const value = typeof status === 'string' ? status.trim() : '';
  if (['Selesai', 'Aktif', 'Disetujui'].includes(value)) return 'done';
  if (['Berjalan', 'Draft', 'Menunggu review'].includes(value)) return 'pending';
  return 'review';
}
function pageHeader(kicker, title, description, action = '', actionType = 'toast') {
  return `<section class="inner-page-head"><div><div class="kicker">${esc(kicker)}</div><h1>${esc(title)}</h1><p>${esc(description)}</p></div>${action ? `<button class="btn btn-dark" data-action="${esc(actionType)}" type="button">${esc(action)}</button>` : ''}</section>`;
}
function panel(title, subtitle, body, extra = '') {
  return `<section class="card full-panel"><div class="card-header"><div><b>${esc(title)}</b>${subtitle ? `<small class="panel-subtitle">${esc(subtitle)}</small>` : ''}</div>${extra}</div>${body}</section>`;
}
function table(headers, rows, empty = 'Belum ada data') {
  return `<div class="table-scroll"><table class="data-table"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.map(row => `<tr>${row.map((cell, i) => `<td class="${i === 0 ? 'name' : ''}">${typeof cell === 'string' ? esc(cell) : cell}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${headers.length}" class="empty-row">${esc(empty)}</td></tr>`}</tbody></table></div>`;
}
function statusPill(status) { return `<span class="pill-status ${statusClass(status)}">${esc(String(status ?? ''))}</span>`; }

function dashboardView() {
  return dashboardMarkup;
}
function assessmentsView() {
  const rows = state.assessments.map(a => [a.name, a.division, a.evaluator, statusPill(a.status), a.score, `<button class="row-action" data-action="detail">Detail</button>`]);
  return pageHeader('Ruang kerja', 'Penilaian', 'Pantau status penilaian tahunan, penilai, dan hasil sementara.', 'Buat penugasan', 'new-assignment') + `<div class="filter-row"><div class="search-field"><span>⌕</span><input data-filter="assessments" placeholder="Cari nama atau divisi..." /></div><select class="filter-select"><option>Semua status</option><option>Selesai</option><option>Berjalan</option><option>Menunggu review</option></select><button class="btn btn-ghost" data-action="export">Ekspor CSV</button></div>` + panel('Daftar penilaian', 'Periode tahunan 2026', table(['Nama karyawan', 'Divisi', 'Penilai', 'Status', 'Nilai akhir', ''], rows));
}
function employeesView() {
  const rows = state.employees.map(e => [e.name, e.role, e.division, e.score, statusPill(e.status), `<button class="row-action" data-action="detail">Lihat</button>`]);
  return pageHeader('Data organisasi', 'Karyawan', 'Kelola data kerja dan penanggung jawab penilaian perusahaan.', 'Tambah karyawan', 'new-employee') + `<div class="filter-row"><div class="search-field"><span>⌕</span><input data-filter="employees" placeholder="Cari karyawan..." /></div><select class="filter-select"><option>Semua divisi</option><option>Teknologi</option><option>Keuangan</option><option>Operasional</option></select><button class="btn btn-ghost" data-action="import">Impor CSV</button></div>` + panel('248 karyawan', 'Data aktif perusahaan', table(['Nama', 'Jabatan', 'Divisi', 'Nilai akhir', 'Status', ''], rows));
}
function reportsView() {
  return pageHeader('Insight kinerja', 'Laporan', 'Baca perkembangan performa seluruh divisi dan siapkan keputusan.', 'Ekspor laporan', 'export') + `<div class="report-grid"><div class="card report-highlight"><span class="label">Nilai rata-rata perusahaan</span><strong>3,84</strong><p>Naik 0,16 dari periode sebelumnya</p><div class="report-line"><i style="width:76%"></i></div></div><div class="card report-highlight light"><span class="label">Karyawan berperforma tinggi</span><strong>69</strong><p>28% dari seluruh karyawan</p><div class="report-line"><i style="width:28%"></i></div></div></div>` + panel('Laporan tersedia', 'Pilih laporan untuk membuka detail atau mengunduhnya.', table(['Nama laporan', 'Periode', 'Terakhir diperbarui', 'Format', 'Aksi'], [['Ringkasan seluruh divisi','2026','Hari ini','PDF / Excel','<button class="row-action" data-action="detail">Buka</button>'],['Performa individu','2026','Kemarin','PDF / Excel','<button class="row-action" data-action="detail">Buka</button>'],['Rekap bonus dan promosi','2026','15 Nov 2026','Excel','<button class="row-action" data-action="detail">Buka</button>']]));
}
function periodView() {
  return pageHeader('Konfigurasi', 'Periode tahunan', 'Atur jadwal, deadline, dan tahapan penilaian kinerja.', 'Buat periode', 'new-period') + `<div class="period-banner"><div><span class="label">Periode sedang berjalan</span><h2>Penilaian kinerja 2026</h2><p>Berakhir 31 Desember 2026 · 68% proses selesai</p></div><span class="pill-status done">Aktif</span></div>` + panel('Riwayat periode', 'Satu periode tahunan untuk setiap tahun.', table(['Periode', 'Tanggal', 'Peserta', 'Kemajuan', 'Status', ''], [['Penilaian 2026','1 Jan – 31 Des 2026','248 karyawan','68%','Aktif','<button class="row-action" data-action="detail">Kelola</button>'],['Penilaian 2025','1 Jan – 31 Des 2025','236 karyawan','100%','Ditutup','<button class="row-action" data-action="detail">Lihat</button>']]));
}
function templatesView() {
  return pageHeader('Konfigurasi', 'Template indikator', 'Susun indikator, kategori, dan bobot penilaian.', 'Buat template', 'new-template') + panel('Template penilaian', 'Total bobot setiap template wajib 100%.', table(['Nama template', 'Indikator', 'Kategori', 'Bobot', 'Status', ''], [['Template umum perusahaan','12 indikator','KPI, kompetensi, perilaku','100%','Aktif','<button class="row-action" data-action="detail">Kelola</button>'],['Template manajerial','16 indikator','KPI, kepemimpinan','100%','Draft','<button class="row-action" data-action="detail">Lanjutkan</button>']]));
}
function settingsView() {
  return pageHeader('Workspace', 'Pengaturan', 'Kelola preferensi perusahaan, akses, dan pengiriman email.', 'Simpan perubahan', 'save') + `<div class="settings-grid"><div class="card settings-card"><h2>Notifikasi email</h2><p>Email otomatis membantu setiap orang mengikuti deadline penilaian.</p><label class="switch-row"><span>Pengingat deadline</span><label class="switch"><input type="checkbox" checked /><i></i></label></label><label class="switch-row"><span>Email hasil publikasi</span><label class="switch"><input type="checkbox" checked /><i></i></label></label><label class="switch-row"><span>Ringkasan mingguan HR</span><label class="switch"><input type="checkbox" checked /><i></i></label></label></div><div class="card settings-card"><h2>Aturan penilaian</h2><p>Aturan ini diterapkan pada periode baru.</p><div class="setting-field"><label>Skala nilai</label><input value="1 – 5" readonly /></div><div class="setting-field"><label>Pembulatan nilai</label><select><option>Dua angka desimal</option></select></div><div class="setting-field"><label>Penilaian mandiri</label><select><option>Opsional</option></select></div></div></div>`;
}

function render(page = 'dashboard') {
  state.page = page;
  navButtons.forEach(button => button.classList.toggle('active', (button.dataset.page || 'dashboard') === page));
  if (page === 'dashboard') {
    pageBody.innerHTML = dashboardMarkup;
    location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const views = { assessments: assessmentsView, employees: employeesView, reports: reportsView, period: periodView, templates: templatesView, settings: settingsView };
  pageBody.innerHTML = views[page] ? views[page]() : document.querySelector('.bg-frame').innerHTML;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function openModal(type) {
  const config = {
    'new-employee': ['Tambah karyawan', 'Masukkan data dasar karyawan baru.', ['Nama lengkap', 'Email kerja', 'Jabatan', 'Divisi'], (values, row) => state.employees.push({ name: values[0], role: values[2] || '', division: values[3] || '', score: '—', status: 'Draft' })],
    'new-period': ['Buat periode tahunan', 'Tentukan jadwal penilaian untuk satu tahun.', ['Nama periode', 'Tahun', 'Deadline penilai', 'Tanggal publikasi']],
    'new-template': ['Buat template indikator', 'Mulai dengan template baru untuk penilaian.', ['Nama template', 'Deskripsi']],
    'new-assignment': ['Buat penugasan', 'Tentukan peserta dan beberapa penilai.', ['Karyawan', 'Penilai utama', 'Bobot penilai']]
  }[type];
  if (!config) return showToast('Data berhasil disimpan');
  function closeModal() { document.querySelector('.modal-backdrop')?.remove(); }
  const modal = document.createElement('div'); modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><button class="modal-close" type="button" data-action="close-modal">×</button><div class="kicker">Form baru</div><h2>${config[0]}</h2><p>${config[1]}</p><form><input type="hidden" value="${type}">${config[2].map(label => `<label>${label}<input required placeholder="Masukkan ${label.toLowerCase()}" /></label>`).join('')}<div class="modal-actions"><button type="button" class="btn btn-ghost" data-action="close-modal">Batal</button><button class="btn btn-dark" type="submit">Simpan</button></div></form></div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  modal.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const inputs = [...modal.querySelectorAll('input:not([type="hidden"])')];
    const values = inputs.map(input => input.value.trim());
    if (typeof config[3] === 'function') config[3](values, values.join(', '));
    closeModal();
    showToast('Data berhasil ditambahkan');
  });
}

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-page]');
  if (nav) { render(nav.dataset.page); return; }
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const type = action.dataset.action;
  if (type === 'close-modal') action.closest('.modal-backdrop')?.remove();
  else if (['new-employee', 'new-period', 'new-template', 'new-assignment'].includes(type)) openModal(type);
  else if (type === 'open-assessments') render('assessments');
  else if (type === 'export') showToast('Laporan siap diunduh');
  else if (type === 'import') showToast('Pilih file CSV untuk diimpor');
  else if (type === 'detail') showToast('Detail akan dibuka');
  else if (type === 'save' || type === 'toast') showToast('Perubahan berhasil disimpan');
});
document.addEventListener('input', event => {
  const input = event.target.closest('[data-filter]');
  if (!input || input.type === 'search') return;
  const query = input.value.toLowerCase();
  const rows = event.target.closest('.full-panel')?.querySelectorAll('tbody tr') || [];
  rows.forEach(row => row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none');
});

window.addEventListener('hashchange', () => { const page = location.hash.slice(1); if (icons[page]) render(page); });
