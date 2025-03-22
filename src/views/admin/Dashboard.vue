<template>
  <div class="container mt-4">
    <h3 class="judul-title mb-3">Dashboard</h3>

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
        <div class="card p-3 shadow-sm">
          <h5 class="judul-title">Statistik Penjualan Perbulan</h5>
          <div class="chart-container">
            <canvas ref="chartCanvas"></canvas>
          </div>
        </div>
      </div>

      <div class="col-lg-5 d-flex flex-column gap-3">
        <div v-for="(finance, index) in finances" :key="index" class="card p-3 shadow-sm d-flex flex-row align-items-center">
          <i :class="finance.iconClass" class="me-3" :style="{ color: finance.color, fontSize: '3rem' }"></i>
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
        <div class="card p-3 shadow-sm">
          <h5 class="judul-title">Histori Transaksi</h5>
          <table class="table table-striped">
            <thead class="table-light">
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
                <td><span class="badge" :class="statusBadge(transaction.status)">{{ transaction.status }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="card p-3 shadow-sm">
          <h5 class="judul-title">Kalender</h5>
          <div class="calendar-container">
            <div class="calendar-header">
              <h6 class="text-muted">{{ formattedDate }}</h6>
            </div>
            <table class="calendar-table">
              <thead>
                <tr>
                  <th v-for="day in days" :key="day">{{ day }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="week in calendar" :key="week">
                  <td v-for="date in week" :key="date?.day" :class="{ 'current-day': isToday(date) }">
                    {{ date?.day || '' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Chart from "chart.js/auto";

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Data Statistik
const stats = ref([
  { icon: "bi bi-person", title: "Total Pelanggan", count: "102", change: "40.10%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "orange", route: "/pelanggan" },
  { icon: "bi bi-people", title: "Total Karyawan", count: "43", change: "15.10%", changeTypeClass: "bg-danger text-white", changeIcon: "bi bi-arrow-down", color: "purple", route: "/karyawan" },
  { icon: "bi bi-tag", title: "Total Laundry", count: "97", change: "40.10%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "blue", route: "/transaksi" },
  { icon: "bi bi-box", title: "Total Layanan", count: "03", change: "0%", changeTypeClass: "bg-success text-white", changeIcon: "bi bi-arrow-up", color: "green", route: "/layanan" }
]);

const finances = ref([
  { title: "Pemasukan", amount: "2.750.000", iconClass: "bi bi-arrow-down-circle-fill", color: "green" },
  { title: "Pengeluaran", amount: "550.000", iconClass: "bi bi-arrow-up-circle-fill", color: "orange"}
]);

const transactions = ref([
  { pelanggan: "Najla Sana", jenis: "Dry Cleaning", tglTerima: "02-02-2025", tglSelesai: "05-02-2025", status: "Selesai" }
]);

const statusBadge = (status) => {
  if (status === "Selesai") return "bg-success text-white";
  if (status === "Proses") return "bg-warning text-dark";
  return "bg-secondary text-white";
};

// Kalender
const days = ["S", "M", "T", "W", "T", "F", "S"];

const getCalendarDays = (month, year) => {
  let firstDay = new Date(year, month, 1).getDay();
  let totalDays = new Date(year, month + 1, 0).getDate();
  let calendar = [];
  let week = [];

  for (let i = 0; i < firstDay; i++) {
    week.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    week.push({ day, month, year });
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) week.push(null);
    calendar.push(week);
  }

  return calendar;
};

const calendar = ref(getCalendarDays(currentMonth, currentYear));

const formattedDate = computed(() => {
  return today.toLocaleDateString("id-ID", { weekday: "short", month: "long", day: "numeric" });
});

const isToday = (date) => {
  return date?.day === today.getDate() && date?.month === currentMonth && date?.year === currentYear;
};

onMounted(() => {
  const ctx = document.querySelector("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
      datasets: [
        {
          label: "Pendapatan",
          data: [100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: "#ddd" } },
      },
    },
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif&family=Inter&display=swap');

.judul-title {
  font-family: 'Inria Serif', serif;
}

body, table, button, input, select, label, p, span, div {
  font-family: 'Inter', sans-serif !important;
}

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

.bg-success {
  background-color: #28a745 !important;
}
.bg-warning {
  background-color: #fd7e14 !important;
}

.negative {
  background-color: #f8d7da; /* Merah soft */
  color: #721c24; /* Merah tua */
}

.neutral {
  background-color: #e0e0e0; /* Abu-abu soft */
  color: #424242; /* Abu-abu tua */
}

.calendar-container {
  padding: 15px;
}
.calendar-table {
  width: 100%;
  text-align: center;
}
.current-day {
  background: #007bff;
  color: white;
  font-weight: bold;
}

</style>