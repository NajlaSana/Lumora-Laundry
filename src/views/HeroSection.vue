<template>
  <section class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <!-- Teks -->
        <div class="col-lg-6 ps-lg-5">
          <h1 class="hero-title">WE DO LAUNDRY <br> FOR YOU!</h1>
          <p class="hero-subtitle">
            We are here to make your life easier with practical, <br> fast, and reliable laundry services.
          </p>
            <button class="btn btn-custom">Request A Service</button> <!-- Kelas tombol diperbarui -->
        </div>

        <!-- Gambar -->
        <div class="col-lg-6 text-center">
          <img src="/hero.jpg" class="hero-image img-fluid" alt="Laundry Service">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Import Font */
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&family=Inter:wght@400;700&display=swap');

/* Hero Section */
.hero-section {
  background: linear-gradient(to right, #d6e5fa, #fbe5d6);
  padding: 60px 0;
  border-radius: 20px;
  max-width: 1300px;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center; /* Menyelaraskan konten secara vertikal */
  justify-content: space-between; /* Jarak seimbang antara teks dan gambar */
}

/* Teks */
.hero-text {
  max-width: 50%; /* Agar teks tidak melebar */
}

.hero-title {
  font-family: 'Inria Serif', serif; /* Font khusus untuk judul */
  font-size: 2rem;
  font-weight: bold;
  color: #222;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif; /* Font Inter untuk teks lainnya */
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* Gambar */
.hero-image {
  max-width: 100%;
  width: 550px; /* Perbesar gambar */
  height: auto;
  transform: scale(1.2) translateY(20px); /* Perbesar dan geser ke bawah */
  transition: transform 0.3s ease-in-out; /* Animasi smooth */
}

/* Button Custom */
.btn-custom {
  background-color: #fff !important; /* Putih */
  color: #000 !important; /* Hitam */
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1rem;
  border: none; /* Menghilangkan garis pinggir */
  border-radius: 30px; /* Membuat lebih membulat */
  transition: all 0.3s ease-in-out;
}

.btn-custom:hover {
  background-color: #f0f0f0 !important; /* Sedikit abu-abu saat hover */
  color: #000 !important; /* Tetap hitam saat hover */
}
</style>
