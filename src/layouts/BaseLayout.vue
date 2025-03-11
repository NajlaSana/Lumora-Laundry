<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <aside class="sidebar bg-primary-subtle vh-100 d-flex flex-column p-3">
      <h5 class="brand-title">My Laundry</h5>

      <!-- Menu Navigasi -->
      <nav class="nav flex-column flex-grow-1">
        <router-link to="/dashboard" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/dashboard' }">
          <i class="bi bi-grid me-2"></i> Dashboard
        </router-link>
        <router-link to="/karyawan" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/karyawan' }">
          <i class="bi bi-people me-2"></i> Karyawan
        </router-link>
        <router-link to="/pelanggan" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/pelanggan' }">
          <i class="bi bi-person me-2"></i> Pelanggan
        </router-link>
        <router-link to="/layanan" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/layanan' }">
          <i class="bi bi-box me-2"></i> Jenis Layanan
        </router-link>
        <router-link to="/transaksi" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/transaksi' }">
          <i class="bi bi-receipt me-2"></i> Transaksi
        </router-link>
        <router-link to="/pengeluaran" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/pengeluaran' }">
          <i class="bi bi-cash-stack me-2"></i> Pengeluaran
        </router-link>
        <router-link to="/laporan" class="nav-link menu-item"
          :class="{ 'active-menu': $route.path === '/laporan' }">
          <i class="bi bi-file-earmark-text me-2"></i> Laporan
        </router-link>
        <router-link to="/logout" class="nav-link menu-item logout text-danger fw-bold"
          :class="{ 'active-menu': $route.path === '/logout' }" @click="logout">
          <i class="bi bi-box-arrow-left me-2"></i> Logout
        </router-link>
      </nav>
    </aside>

    <!-- Konten Utama -->
    <div class="main-content flex-grow-1">
      <header class="app-header p-3 bg-white border-bottom d-flex justify-content-between align-items-center">
        <!-- Search Bar -->
        <div class="search-container d-flex align-items-center">
          <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="Search Here">
            <i class="bi bi-search search-icon"></i>
          </div>
        </div>

        <!-- Notifikasi & Profil Admin -->
        <div class="header-actions d-flex align-items-center">
          <i class="bi bi-bell notification-icon"></i>

          <div class="d-flex align-items-center gap-2 user-profile" @click="toggleDropdown">
            <img src="https://via.placeholder.com/50" alt="User Avatar" class="rounded-circle user-avatar" />
            <div>
              <div class="fw-bold">Anderson Barden</div>
              <div class="text-muted small">Admin</div>
            </div>
          </div>


          <!-- Dropdown Modal -->
          <div v-if="isDropdownOpen" class="dropdown-modal shadow-sm">
            <div class="modal-header bg-light d-flex align-items-center p-3">
              <div class="profile-avatar bg-primary text-white d-flex align-items-center justify-content-center">
                <span>AI</span>
              </div>
              <div class="ms-3">
                <h6 class="mb-0">Aetherion Tech Indonesia</h6>
                <p class="mb-0 text-muted" style="font-size: 0.9rem;">aetherion.tech.official@gmail.com</p>
              </div>
            </div>
            <ul class="list-group">
              <li class="list-group-item"><i class="bi bi-person me-2"></i><router-link to="/profile" class="text-decoration-none text-dark">Profile</router-link></li>
              <li class="list-group-item"><i class="bi bi-gear me-2"></i><router-link to="/settings" class="text-decoration-none text-dark">Account settings</router-link></li>
              <li class="list-group-item"><i class="bi bi-palette me-2"></i> Theme</li>
              <li class="list-group-item"><i class="bi bi-lightning-charge me-2"></i> Open Quickstart</li>
              <li class="list-group-item"><i class="bi bi-people me-2"></i> Switch account</li>
              <li class="list-group-item text-danger"><i class="bi bi-box-arrow-right me-2"></i><router-link to="/logout" class="text-decoration-none text-danger">Log out</router-link></li>
            </ul>
          </div>
        </div>
      </header>

      <main class="page-content p-3">
        <router-view />
      </main>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Tutup dropdown jika klik di luar
const closeDropdown = (event) => {
  if (!event.target.closest(".user-profile") && !event.target.closest(".dropdown-modal")) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});

const logout = () => {
  alert("Logout berhasil!");
  router.push("/");
};
</script>

<style scoped>
/* Dropdown Modal */
.dropdown-modal {
  position: absolute;
  top: 120%;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Supaya modal nempel ke tombol */
.header-actions {
  position: relative;
}

/* Mengatasi overflow global */
html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

/* Layout */
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* Avatar Profil */
.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 18px;
}

.list-group-item {
  cursor: pointer;
  transition: background 0.2s;
}

.list-group-item:hover {
  background: #f8f9fa;
}

/* Sidebar */
.sidebar {
  width: 230px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  padding-bottom: 20px;
}

/* My Laundry Title */
.brand-title {
  font-family: 'Irian Serif', serif; /* Ubah font */
  font-size: 1.8rem; /* Besarin dikit biar lebih elegan */
  font-weight: bold;
  text-align: center;
  color: black; /* Warna tetap hitam */
  margin-top: 10px;
  margin-bottom: 70px; /* Tambah jarak lebih besar */
}


/* Menu Item */
.menu-item {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  color: black !important; /* Warna teks jadi hitam */
  font-size: 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

/* Menu Aktif */
.active-menu {
  background-color: #4169E1 !important;
  color: white !important;
  font-weight: semibold;
  border-radius: 20px; /* Ini bikin sudut melengkung */
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 1); 
}

/* Hover */
.menu-item:hover {
  background-color: #87a9db !important;
  color: white !important;
}

/* Logout sejajar */
.logout {
  color: red !important;
  font-weight: semibold;
  margin-top:60px
}

.main-content {
  position: fixed; /* Biarkan konten tetap memenuhi layar */
  top: 60px; /* Sesuaikan dengan tinggi header */
  left: 230px; /* Sesuaikan dengan lebar sidebar */
  width: calc(100% - 250px); /* Pastikan memenuhi sisa layar */
  height: calc(100vh - 60px); /* Kurangi tinggi header agar konten penuh */
  background-color: #f4f7fa;
  padding: 20px;
  overflow-y: auto; /* Tambahkan scroll jika kontennya panjang */
}


/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 230px; /* Sesuaikan dengan sidebar */
  width: calc(100% - 250px);
  padding: 15px 25px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1000;
}

/* Search Bar */
.search-wrapper {
  display: flex;
  align-items: center;
  background-color: #dce4f0; /* Warna abu-abu biru */
  padding: 8px 15px;
  border-radius: 30px;
  position: relative;
  width: 250px;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  right: 15px;
  color: #6c757d;
  font-size: 16px;
}

/* Notifikasi & Profil */
.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.notification-icon {
  font-size: 1.2rem;
  color: #6c757d;
  cursor: pointer;
}

/* Admin Profile */
.user-profile {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #dce4f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #4169E1;
}

.admin-text {
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-left: 5px;
}

/* Ikon Titik Tiga */
.options-icon {
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
}

/* Konten */
.page-content {
  flex-grow: 1;
  padding: 25px;
  overflow-y: auto;
}
</style>
