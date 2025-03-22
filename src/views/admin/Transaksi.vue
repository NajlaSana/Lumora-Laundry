<template>
  <div class="container py-1">
    <!-- Halaman Data Transaksi -->
    <div v-if="!showForm" class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="data-transaksi-title mb-5 fw-bold">Data Transaksi</h5>

          <!-- Container untuk Filter dan Tambah -->
          <div class="d-flex justify-content-end align-items-center gap-2 mb-0">
            <!-- Dropdown Filter -->
            <div class="me-2">
             <button class="btn btn-light dropdown-toggle me-2" type="button">
              Filter
             </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Semua</a></li>
                <li><a class="dropdown-item" href="#">Lama Proses < 3 Hari</a></li>
                <li><a class="dropdown-item" href="#">Tarif > 5.000</a></li>
              </ul>
            </div>
            <!-- Tombol Tambah -->
            <button class="btn btn-primary" @click="openForm('tambah')">
             + Tambah
            </button>
          </div>
        </div>

        <div class="table-container">
          <table class="table table-striped font-inter mt-0">
            <thead class="table-primary custom-header">
              <tr>
                <th>No</th>
                <th>Pelanggan</th>
                <th>Jenis Layanan</th>
                <th>Tgl Terima</th>
                <th>Tgl Selesai</th>
                <th>Catatan</th>
                <th>Status</th>
                <th>Collected</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(transaksi, index) in transaksiList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ transaksi.pelanggan }}</td>
                <td>{{ transaksi.jenisLayanan }}</td>
                <td>{{ transaksi.tglTerima }}</td>
                <td>{{ formatDate(transaksi.tglSelesai) }}</td>
                <td class="catatan">{{ transaksi.catatan }}</td>
                <td>
                  <span :class="{'badge bg-success': transaksi.lunas, 'badge bg-warning text-dark': !transaksi.lunas}">
                    {{ transaksi.lunas ? "Lunas" : "Belum Lunas" }}
                  </span>
                </td>
                <td>
                  <span :class="{'badge bg-success': transaksi.collected === 'Diambil', 'badge bg-warning text-dark': transaksi.collected === 'Belum Diambil'}">
                    {{ transaksi.collected }}
                  </span>
                </td>
                <td class="text-center">
                  <div class="dropdown">
                    <button class="btn btn-light btn-sm border-0 p-2 rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="bi bi-three-dots-vertical fs-5"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                      <li>
                        <button class="dropdown-item d-flex align-items-center py-2" @click="openForm('edit', index)">
                          <i class="bi bi-pencil-square me-3 text-primary fs-6"></i> Edit
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item d-flex align-items-center py-2 text-danger" @click="openDeleteModal(index)">
                          <i class="bi bi-trash me-3 fs-6"></i> Hapus
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item d-flex align-items-center py-2 text-dark" @click="cetakNota(transaksi)">
                          <i class="bi bi-printer me-3 fs-6"></i> Cetak Nota
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Form Tambah/Edit Data -->
    <div v-else class="card shadow-sm">
      <div class="card-body">
        <h5 class="fw-bold mb-3">{{ formMode === 'tambah' ? 'Tambah' : 'Edit' }} Data Transaksi</h5>
        <form @submit.prevent="formMode === 'tambah' ? simpanTransaksi() : updateTransaksi()">
          
          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Nama Pelanggan</label>
            <div class="col-sm-9">
              <select v-model="currentTransaksi.pelanggan" class="form-control">
                <option>Pilih Nama Pelanggan</option>
                <option>Najla Sana</option>
                <option>Nieva Rianti Devi</option>
                <option>Della Safitri Safarina</option>
                <option>Deva Arianti</option>
                <option>Rizky Febriansyah</option>
              </select>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Jenis Layanan</label>
            <div class="col-sm-9">
              <select v-model="currentTransaksi.jenisLayanan" class="form-control">
                <option>Pilih Jenis Layanan</option>
                <option>Dry Cleaning</option>
                <option>Ironing & Pressing</option>
                <option>Pick Up</option>
                <option>Delivery</option>
              </select>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Jumlah Kg</label>
            <div class="col-sm-9">
              <input type="number" v-model="currentTransaksi.jumlahKg" class="form-control" placeholder="Masukkan Jumlah Kg" />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Catatan</label>
            <div class="col-sm-9">
              <textarea v-model="currentTransaksi.catatan" class="form-control" placeholder="Masukkan Catatan"></textarea>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Collected</label>
            <div class="col-sm-9">
              <select v-model="currentTransaksi.collected" class="form-control">
                <option>Pilih Collected</option>
                <option>Diambil</option>
                <option>Belum Diambil</option>
              </select>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Status</label>
            <div class="col-sm-9">
              <select v-model="currentTransaksi.status" class="form-control">
                <option>Pilih Status</option>
                <option>Lunas</option>
                <option>Belum Lunas</option>
              </select>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Tarif / Kg</label>
            <div class="col-sm-9">
              <input type="text" v-model="currentTransaksi.tarif" class="form-control" />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Tgl Selesai</label>
            <div class="col-sm-9">
              <input type="date" v-model="currentTransaksi.tglSelesai" class="form-control" />
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Total Bayar</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" :value="totalBayarComputed" disabled />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-warning" @click="showForm = false">Kembali</button>
            <button type="submit" class="btn btn-primary">{{ formMode === 'tambah' ? '+ Tambah' : 'Simpan' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      showForm: false,
      formMode: "tambah",
      transaksiList: [
        {
          pelanggan: "Najla Sana",
          jenisLayanan: "Dry Cleaning",
          tglTerima: "02-02-2025",
          tglSelesai: "05-02-2025",
          lunas: true,
          jumlahKg: 2,
          catatan: "Baju 10, Celana 10",
          status: "Lunas",
          collected: "Diambil",
          tarif: 7000,
          totalBayar: 14000,
        },
      ],
      currentTransaksi: {
        pelanggan: "",
        jenisLayanan: "",
        jumlahKg: "",
        catatan: "",
        status: "",
        collected: "",
        tarif: 0, // Akan otomatis diubah berdasarkan jenis layanan
        tglSelesai: "",
        totalBayar: 0,
      },
      editIndex: null,
    };
  },
  computed: {
    tarifLayanan() {
      const tarifMap = {
        "Dry Cleaning": 7000,
        "Ironing & Pressing": 10000,
        "Pick Up": 12000,
        "Delivery": 12000,
      };
      return tarifMap[this.currentTransaksi.jenisLayanan] || 0;
    },
    totalBayarComputed() {
      return (this.currentTransaksi.jumlahKg || 0) * this.tarifLayanan;
    },
  },
  watch: {
    "currentTransaksi.jenisLayanan": function (newVal) {
      this.currentTransaksi.tarif = this.tarifLayanan;
      this.currentTransaksi.totalBayar = this.totalBayarComputed;
    },
    "currentTransaksi.jumlahKg": function () {
      this.currentTransaksi.totalBayar = this.totalBayarComputed;
    },
  },
  methods: {
    openForm(mode, index = null) {
      this.formMode = mode;
      this.showForm = true;
      if (mode === "edit" && index !== null) {
        this.editIndex = index;
        this.currentTransaksi = { ...this.transaksiList[index] };
      } else {
        this.resetForm();
      }
    },
    resetForm() {
      this.currentTransaksi = {
        pelanggan: "",
        jenisLayanan: "",
        jumlahKg: "",
        catatan: "",
        status: "",
        collected: "",
        tarif: 0,
        tglSelesai: "",
        totalBayar: 0,
      };
    },
    formatDate(date) {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    simpanTransaksi() {
      if (!this.currentTransaksi.pelanggan || !this.currentTransaksi.jenisLayanan || !this.currentTransaksi.jumlahKg) {
        alert("Harap isi semua data dengan benar!");
        const today = new Date();
        const formattedDate = today.toLocaleDateString("id-ID").split("/").reverse().join("-");
        this.currentTransaksi.tglTerima = formattedDate;
        return;
      }

      this.currentTransaksi.totalBayar = this.totalBayarComputed;
      this.currentTransaksi.tglTerima = new Date().toLocaleDateString("id-ID");

      if (this.formMode === "tambah") {
        this.transaksiList.push({ ...this.currentTransaksi });
      } else if (this.formMode === "edit" && this.editIndex !== null) {
        this.transaksiList[this.editIndex] = { ...this.currentTransaksi };
      }

      this.showForm = false;
      this.resetForm();
    },
    updateTransaksi() {
      if (this.editIndex !== null) {
        this.currentTransaksi.lunas = this.currentTransaksi.status === "Lunas";
        this.transaksiList[this.editIndex] = { ...this.currentTransaksi };
        this.showForm = false;
        this.editIndex = null;
      }
    },
    cetakNota(transaksi) {
      this.$router.push({
        name: "NotaView", // Pastikan ada rute dengan nama ini di Vue Router
        query: {
          pelanggan: transaksi.pelanggan,
          jenisLayanan: transaksi.jenisLayanan,
          jumlahKg: transaksi.jumlahKg,
          tarif: transaksi.tarif,
          totalBayar: transaksi.totalBayar,
          tglTerima: transaksi.tglTerima,
          tglSelesai: transaksi.tglSelesai,
        },
      });
    },
    resetForm() {
      this.currentTransaksi = {
        pelanggan: "",
        jenisLayanan: "",
        jumlahKg: "",
        catatan: "",
        status: "",
        collected: "",
        tarif: 0,
        tglSelesai: "",
        totalBayar: 0,
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif&family=Inter&display=swap');

.data-transaksi-title {
  font-family: 'Inria Serif', serif;
}

body, table, button, input, select, label, p, span, div {
  font-family: 'Inter', sans-serif !important;
}

.table {
    margin-top: 0; /* Atau lebih besar sesuai kebutuhan */
}

.card {
  border-radius: 10px;
  transition: none !important; /* Menghilangkan animasi transisi */
  box-shadow: none !important; /* Menghapus bayangan jika masih ada */
  user-select: none; /* Cegah teks di dalam card agar tidak terpilih saat diklik */
}

.card:active, .card:focus, .card:hover {
  transform: none !important; /* Hapus efek pergerakan */
  box-shadow: none !important; /* Hapus efek bayangan saat interaksi */
  background-color: inherit !important; /* Hindari perubahan warna */
  outline: none !important; /* Hapus border fokus */
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.btn-container {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px; /* Sesuaikan jarak antar tombol */
    margin-bottom: 0; /* Hilangkan jarak bawah */
    padding-bottom: 0; /* Hilangkan padding bawah */
}

.button.btn {
  height: 38px; /* Sesuaikan dengan tinggi elemen tabel */
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-container {
    margin-top: -10px; /* Sesuaikan dengan kebutuhan */
}

.d-flex {
  display: flex;
}

.justify-content-end {
  justify-content: flex-end; /* Posisikan ke kanan */
}

.align-items-center {
  align-items: center; /* Pastikan sejajar secara vertikal */
}

.me-2 {
  margin-right: 8px; /* Memberi sedikit jarak antara tombol Filter dan Tambah */
}

.table th,
.table td {
  border: 1px solid #dee2e6; /* Tambahkan garis */
  text-align: center;
  vertical-align: middle;
}

.thead tr {
  background-color: #C7DCFF; /* Biru lebih tua seperti di gambar pertama */
  color: #000; /* Warna teks tetap hitam agar terbaca */
}

th,
td {
  vertical-align: middle;
  text-align: center;
}

td.catatan {
  max-width: 200px; /* Batasi lebar maksimal */
  white-space: normal; /* Izinkan teks turun ke bawah */
  word-wrap: break-word;
  text-align: left; /* Agar teks sejajar kiri */
}
</style>