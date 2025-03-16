<template>
  <div class="container mt-4">
    <h3 class="mb-3">Dashboard</h3>

    <!-- Kartu Statistik -->
      <div class="row">
    <div v-for="(stat, index) in stats" :key="index" class="col-md-3">
      <router-link :to="stat.route" class="card shadow-sm text-dark text-decoration-none">
        <div class="card-body d-flex align-items-center">
          <i :class="[stat.icon, 'fs-2', 'me-3']" :style="{ color: stat.color }"></i>
          <div>
            <h6 class="mb-1">{{ stat.title }}</h6>
            <h4 class="fw-bold">{{ stat.count }}</h4>
          </div>
        </div>
          <div class="d-flex align-items-center">
            <div
              class="growth-box"
              :class="{
                'positive': percentage > 0,
                'negative': percentage < 0,
                'neutral': percentage === 0
              }"
            >
              <i :class="percentage > 0 ? 'bi bi-arrow-up' : percentage < 0 ? 'bi bi-arrow-down' : 'bi bi-dash'"></i>
              <span class="growth-text">{{ percentage }}%</span>
            </div>
            <span class="text-muted ms-2">Dari bulan terakhir</span>
          </div>
      </router-link>
    </div>
  </div>

    <!-- Grafik dan Keuangan -->
  <div class="row mt-3">
      <div class="col-lg-7">
        <div class="card p-3">  
          <h5>Statik Penjualan Perbulan</h5>
          <canvas ref="chartCanvas"></canvas>
        </div>
      </div>

    <div class="col-lg-4 d-flex flex-column gap-3">
      <div class="card p-3 d-flex flex-row align-items-center shadow-sm border-0" v-for="(finance, index) in finances" :key="index">
        <div class="icon-wrapper d-flex align-items-center justify-content-center me-3" :class="finance.bgClass">
          <i :class="finance.iconClass" class="text-white fs-4"></i>
        </div>
        <div>
          <h6 class="mb-1 text-muted">{{ finance.title }}</h6>
          <h4 class="fw-bold">Rp. {{ finance.amount }}</h4>
        </div>
      </div>
    </div>
  </div>

    <!-- Histori Transaksi dan Kalender -->
    <div class="row mt-3">
      <div class="col-lg-7">
        <div class="card p-3">
          <h5>Histori Transaksi</h5>
          <table class="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Pelanggan</th>
                <th>Jenis Layanan</th>
                <th>Tgl Terima</th>
                <th>Tgl Selesai</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(transaction, index) in transactions" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ transaction.pelanggan }}</td>
                <td>{{ transaction.jenis }}</td>
                <td>{{ transaction.tglTerima }}</td>
                <td>{{ transaction.tglSelesai }}</td>
                <td><span class="badge bg-success">{{ transaction.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <div class="calendar-container">
          <VueDatePicker 
            v-model="selectedDate"
            locale="id-ID"
            :enable-time-picker="false"
            :format="formatDate"
          />
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Chart from "chart.js/auto";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const selectedDate = ref(new Date());

const formatDate = (date) => {
  return date.toLocaleDateString("id-ID", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
};

const percentage = ref(40.10); // Ganti dengan nilai dinamis dari data


const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: '#9F1C1C' } }
  }
});

const finances = ref([
  { title: "Pemasukan", amount: "2.750.000", iconClass: "bi bi-arrow-down-circle", bgClass: "bg-success" },
  { title: "Pengeluaran", amount: "550.000", iconClass: "bi bi-arrow-up-circle", bgClass: "bg-warning" }
]);

// Data Statistik
const stats = ref([
  { icon: "bi bi-person", title: "Total Pelanggan", count: "102", change: "40.10%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "orange", route: "/pelanggan" },
  { icon: "bi bi-people", title: "Total Karyawan", count: "43", change: "15.10%", changeTypeClass: "bg-danger text-white", changeIcon: "bi bi-arrow-down", color: "purple", route: "/karyawan" },
  { icon: "bi bi-tag", title: "Total Laundry", count: "97", change: "40.10%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "blue", route: "/transaksi" },
  { icon: "bi bi-box", title: "Total Layanan", count: "03", change: "0%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "green", route: "/layanan" }
]);

// Histori Transaksi
const transactions = ref([
  { pelanggan: "Najla Sana", jenis: "Dry Cleaning", tglTerima: "02-02-2025", tglSelesai: "05-02-2025", status: "Selesai" }
]);

// Kalender

</script>

<style scoped>
.growth-box {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: bold;
}

.growth-box i {
  margin-right: 4px;
}

/* Warna untuk kondisi berbeda */
.positive {
  background-color: #c8e6c9; /* Hijau soft */
  color: #1b5e20; /* Hijau tua */
}

.negative {
  background-color: #f8d7da; /* Merah soft */
  color: #721c24; /* Merah tua */
}

.neutral {
  background-color: #e0e0e0; /* Abu-abu soft */
  color: #424242; /* Abu-abu tua */
}

.chart-container {
  height: 300px;
  min-height: 300px;
  width: 100%;
}

.shadow-sm {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.bg-success {
  background-color: #28a745 !important;
}
.bg-warning {
  background-color: #fd7e14 !important;
}

.card {
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.badge {
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
}
</style>
