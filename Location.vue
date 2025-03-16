<template>
  <section class="location-section">
    <div class="container text-center">
      <h2 class="section-title">Our Location</h2>
      <p class="section-subtitle">-- Because you deserve the best! --</p>
      
      <!-- Gambar Lokasi -->
      <div class="location-image">
        <img :src="locationImage" alt="Location Image">
      </div>

      <!-- Tombol Lokasi (Bisa Diklik) -->
      <a 
        :href="mapsLink" 
        target="_blank" 
        class="location-address"
      >
        Jl. Sangkuriang No. 53
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
      locationImage: "/location.jpg",
      mapsLink: "https://maps.app.goo.gl/aR2dZt52K4iVBvDh7" // Ganti dengan koordinat sebenarnya
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Inter:wght@400;600&display=swap');

.location-section {
  padding: 4rem 0;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-family: 'Inria Serif', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.location-image img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Tombol lokasi sebagai link */
.location-address {
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  padding: 10px 30px;
  border: 2px solid #000;
  border-radius: 50px;
  display: inline-block;
  min-width: 600px;
  max-width: 600px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.location-address:hover {
  background-color: #000;
  color: #fff;
}
</style>
