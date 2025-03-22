<template>
  <div class="layout">
    <!-- Tampilkan Navbar dan HeroSection hanya jika bukan halaman admin -->
    <template v-if="!isAdminPage">
      <Navbar />
      <HeroSection />
    </template>

    <!-- Tempat untuk menampilkan halaman yang sesuai dengan route -->
    <router-view></router-view>

    <template v-if="!isAdminPage">
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router"; // Pastikan ini ada
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";

// Pastikan router sudah di-load sebelum mengambil route
const route = useRoute();
const router = useRouter(); // Tambahkan ini agar Vue mengenali router

// Pastikan route tersedia sebelum mengakses path
const isAdminPage = computed(() => route?.path?.startsWith("/admin") || false);
</script>

<style>
.layout {
  min-height: 100vh; /* Pastikan tinggi minimal 100% viewport */
  display: flex;
  flex-direction: column;
}

body {
  font-family: Arial, sans-serif, inter;
}
</style>
