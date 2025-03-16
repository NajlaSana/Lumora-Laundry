<template>
  <div class="container text-center mt-5">
    <h2 class="fw-bold">Track Your Laundry Status</h2>
    <p class="text-muted">-- Because you deserve the best! --</p>

    <!-- Dropdown dan Input Nama -->
    <div class="mb-3">
      <select v-model="selectedOutlet" class="form-select custom-input w-50 mx-auto">
        <option disabled value="">-- Choose Outlet --</option>
        <option v-for="outlet in outlets" :key="outlet">{{ outlet }}</option>
      </select>
    </div>
      <div>
      <div class="mb-3 d-flex justify-content-center align-items-center w-50 mx-auto">
        <input v-model="name" type="text" class="form-control custom-input flex-grow-1" placeholder="Enter your name here" />
        <button class="btn btn-primary rounded-pill ms-2 px-4" @click="trackOrder">Track</button>
      </div>

      <!-- Hanya tampil jika nama ditemukan -->
      <div v-if="trackedName" class="text-center mt-3">
        <p><strong>Name:</strong> {{ trackedName }}</p>
      </div>

      <!-- Jika nama tidak ditemukan, tampilkan pesan -->
      <div v-if="showNotFound" class="text-center mt-3 text-danger">
        <p>Name not found</p>
      </div>
    </div>

    <!-- Pesanan dan Progress Tracking -->
    <div v-if="order" class="d-flex justify-content-center align-items-center mt-4 mb-5">
      <!-- Card Pesanan -->
      <div class="card p-4 shadow-sm rounded-3 pesanan-card">
        <h5 class="fw-bold text-center">PESANAN</h5>
        <p><strong>Nama:</strong> {{ order.name }}</p>
        <p><strong>Jenis Layanan:</strong> {{ order.service }}</p>
        <p><strong>Tanggal Terima:</strong> {{ order.receiveDate }}</p>
        <p><strong>Tanggal Selesai:</strong> {{ order.completeDate }}</p>
        <p><strong>Catatan:</strong> {{ order.notes }}</p>
        <p><strong>Status Pembayaran:</strong> {{ order.paymentStatus }}</p>
      </div>

      <!-- Progress Tracking -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressWidth }"></div>
        </div>
        <div class="steps">
          <div v-for="(step, index) in progressSteps" :key="index" class="step">
            <div class="circle" :class="{ active: index <= currentStep }">
              <i :class="step.icon"></i>
            </div>
            <p class="fw-bold mt-2">{{ step.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOutlet: '',
      name: '',
      order: null,
      showNotFound: false, // Untuk menampilkan pesan jika nama tidak ditemukan
      ordersData: [
        {
          name: 'Nieva Rianti Devi', 
          service: 'Dry Cleaning',
          receiveDate: '02 Februari 2025',
          completeDate: '05 Februari 2025',
          notes: '20 Baju, 15 Celana, 1 Mukena',
          paymentStatus: 'Lunas',
          outlet: 'Outlet Braga' // Nama outlet tempat pesanan ini ada
        },
        {
          name: 'Rizky Febriansyah',
          service: 'Ironing & Pressing',
          receiveDate: '04 Februari 2025',
          completeDate: '07 Februari 2025',
          notes: '15 Baju, 8 Celana',
          paymentStatus: 'Belum Lunas',
          outlet: 'Outlet Ciseupan'
        }
      ],
      outlets: [
        'Outlet Braga', 'Outlet Surapati', 'Outlet Cikutra', 'Outlet Sukajadi', 
        'Outlet Asia Afrika', 'Outlet Dago', 'Outlet Diponegoro', 'Outlet Antapani', 
        'Outlet Cihampelas', 'Outlet Baros', 'Outlet Cibeber', 'Outlet Cibabat', 
        'Outlet Ciseupan', 'Outlet Sangkuriang', 'Outlet Padasuka'
      ],
      progressSteps: [
        { label: 'Order Accepted', icon: 'bi bi-box-seam' },
        { label: 'Laundry on process', icon: 'bi bi-hourglass-split' },
        { label: 'Order Completed', icon: 'bi bi-check-circle' },
        { label: 'Order Sent', icon: 'bi bi-truck' }
      ],
      currentStep: 1
    };
  },
  computed: {
    progressWidth() {
      return `${(this.currentStep / (this.progressSteps.length - 1)) * 100}%`;
    }
  },
  methods: {
    trackOrder() {
      // Cek apakah input nama dan outlet tidak kosong
      if (!this.name.trim() || !this.selectedOutlet) {
        this.order = null;
        this.showNotFound = true;
        return;
      }

      // Cari pesanan berdasarkan nama DAN outlet (case-insensitive)
      const foundOrder = this.ordersData.find(order => 
        order.name.trim().toLowerCase() === this.name.trim().toLowerCase() &&
        order.outlet === this.selectedOutlet // Cek apakah outlet sesuai
      );

      if (foundOrder) {
        this.order = foundOrder;
        this.showNotFound = false;
        this.currentStep = 2; // Sesuaikan status progres
      } else {
        this.order = null; // Kosongkan data jika tidak ditemukan
        this.showNotFound = true; // Tampilkan pesan tidak ditemukan
      }
    }
  }
};
</script>

<style>
.custom-input {
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}

/* Tata letak */
.pesanan-card {
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  text-align: left; /* Pastikan teks rata kiri */

}

/* Progress Container */
.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  position: relative;
}

/* Progress Bar (Garis) */
.progress-bar {
  position: absolute;
  top: 22px;
  left: 0;
  width: 100%;
  height: 5px;
  background: #ccc;
  z-index: 0;
  border-radius: 5px;
}

.progress-fill {
  height: 5px;
  background: #007bff;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
}

/* Steps */
.steps {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100px;
}

/* Circle untuk setiap step */
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
  z-index: 2;
}

.circle.active {
  background: #007bff;
  color: white;
}
</style>
