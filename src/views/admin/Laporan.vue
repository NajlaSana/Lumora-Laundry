<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h5 class="text fw-bold">Data Laporan Pemasukan dan Pengeluaran</h5>
        <div class="d-flex justify-content-end mb-3">
          <button class="btn btn-light dropdown-toggle me-2" type="button">Filter</button>
          <button class="btn btn-primary">Cetak</button>
        </div>

        <table class="table table-bordered">
          <thead class="table-primary text-center">
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Keterangan</th>
              <th>Catatan</th>
              <th>Pengeluaran</th>
              <th>Pemasukan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in laporan" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ item.tanggal }}</td>
              <td class="text-center">{{ item.keterangan }}</td>
              <td>{{ item.catatan }}</td>
              <td class="text-end">Rp {{ formatRupiah(item.pengeluaran) }}</td>
              <td class="text-end">Rp {{ formatRupiah(item.pemasukan) }}</td>
            </tr>
            <tr class="fw-bold text-center">
              <td colspan="4">Total Pemasukan dan Pengeluaran</td>
              <td class="text-end">Rp {{ formatRupiah(totalPengeluaran) }}</td>
              <td class="text-end">Rp {{ formatRupiah(totalPemasukan) }}</td>
            </tr>
            <tr class="fw-bold text-center">
              <td colspan="5">Saldo Akhir</td>
              <td class="text-end">Rp {{ formatRupiah(saldoAkhir) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laporan: [
        { tanggal: "15-01-2025", keterangan: "Pengeluaran", catatan: "Sabun Cuci Downy 2 Liter", pengeluaran: 100000, pemasukan: 0 },
        { tanggal: "14-01-2025", keterangan: "Pemasukan", catatan: "Baju 20, Jaket 2", pengeluaran: 0, pemasukan: 250000 },
        { tanggal: "14-01-2025", keterangan: "Pemasukan", catatan: "Baju 5, Sepatu 7, Celana 10", pengeluaran: 0, pemasukan: 300000 },
      ],
    };
  },
  computed: {
    totalPemasukan() {
      return this.laporan.reduce((sum, item) => sum + item.pemasukan, 0);
    },
    totalPengeluaran() {
      return this.laporan.reduce((sum, item) => sum + item.pengeluaran, 0);
    },
    saldoAkhir() {
      return this.totalPemasukan - this.totalPengeluaran;
    },
  },
  methods: {
    formatRupiah(value) {
      return new Intl.NumberFormat("id-ID").format(value);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1100px; /* Perbesar ukuran card */
  margin: auto;
}

.card {
  padding: 20px;
}

h3 {
  font-size: 24px; /* Perbesar ukuran judul */
}

.table {
  font-size: 18px; /* Perbesar ukuran teks tabel */
}

th, td {
  padding: 15px; /* Tambahkan padding agar lebih nyaman */
}

.table-primary {
  background-color: #cce5ff;
}

.fw-bold {
  font-weight: bold;
}

.text-center {
  text-align: center;
}

.text-end {
  text-align: right;
}
</style>
