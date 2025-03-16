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
            <router-link class="nav-link" :class="{ 'active-link': isActive('/') }" to="/" exact>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active-link': isActive('/service') }" to="/service#service-section">
              Service
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active-link': isActive('/about') }" to="/about#about-section">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active-link': isActive('/outlet') }" to="/outlet">
              Outlet
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active-link': isActive('/tracking') }" to="/tracking">
              Laundry Tracking
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Tombol Contact -->
      <router-link class="btn btn-custom-contact" :class="{ 'active-link': isActive('/contact') }" to="/contact">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isActive() {
      return (route) => {
        return this.$route.path === route || (this.$route.hash && this.$route.hash.includes(route));
      };
    },
  },
  watch: {
    '$route'() {
      this.forceUpdate();
    }
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  font-size: 16px;
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
  cursor: pointer;
}

/* Garis bawah saat halaman aktif */
.navbar-nav .nav-link.active-link::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: #F2D9BB;
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Pastikan hanya satu menu yang memiliki garis bawah */
.navbar-nav .nav-link:not(.active-link)::after {
  content: none;
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
