<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand fw-bold" href="#">My Laundry</a>

      <!-- Toggle Button untuk Mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu Navbar -->
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
  <ul class="navbar-nav text-center">
    <li class="nav-item">
      <router-link class="nav-link" :class="{ 'active-link': activePage === 'home' }" @click="setActive('home')" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ 'active-link': activePage === 'service' }" @click="setActive('service')" to="/service">Service</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ 'active-link': activePage === 'about' }" @click="setActive('about')" to="/about">About</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ 'active-link': activePage === 'outlet' }" @click="setActive('outlet')" to="/home">Outlet</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ 'active-link': activePage === 'tracking' }" @click="setActive('tracking')" to="/tracking">Laundry Tracking</router-link>
    </li>
  </ul>
</div>


      <!-- Tombol Contact -->
      <a class="btn btn-custom-contact" href="#">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activePage: 'home', // Default halaman aktif
    };
  },
  methods: {
    setActive(page) {
      this.activePage = page; // Mengubah halaman aktif
    },
  },
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  font-size: 16px;
}

body, html {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
}

.navbar {
    height: 10vh; /* 10% dari tinggi layar */
    width: 96vw; /* Lebar penuh */
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Pusatkan menu navbar */
.navbar-nav {
  display: flex;
  gap: 20px;
}

.navbar-nav .nav-link {
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  position: relative;
  padding-bottom: 5px;
}

/* Garis bawah saat aktif */
.navbar-nav .nav-link.active-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: #F2D9BB; /* Warna sesuai desain */
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Hover efek */
.navbar-nav .nav-link:hover {
  color: #B3CFFD;
}

/* Tombol Contact */
.btn-custom-contact {
  background-color: #F2D9BB;
  color: #333;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 6px;
  transition: background 0.3s ease-in-out;
  text-decoration: none;
}

.btn-custom-contact:hover {
  background-color: #B3CFFD;
  color: white;
}
</style>
