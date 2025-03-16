<template>
  <div id="about-section" class="landing-container">
    <h1 class="main-title">My Laundry Is The Solution</h1>
    <p class="subtitle-text">-- Because you deserve the best! --</p>

    <div class="content-wrapper">
      <div class="image-container">
        <img src="/laundry.jpg" class="laundry-image img-fluid" alt="Laundry Service">
      </div>
      <div class="content-container">
        <h2 class="subtitle">Clean, Fragrant, Hygienic, and On-Time Laundry</h2>
        <p class="paragraph">
          My Laundry is a laundry service by the kilo and by the unit. We are a professional 
          team that always prioritizes the quality of laundry & service with the principles of 
          clean, neat, fragrant, hygienic & on time.
        </p>
        <p class="paragraph">
          We are here to provide the best solution for caring for your clothes. With modern 
          technology, environmentally friendly detergents and professional staff, we ensure 
          that every piece of laundry is clean, smells good, and is perfectly cared for.
        </p>
        <p class="paragraph">
          💦 From everyday wear to exclusive outfits, leave it all to us. <br>
          Order now and enjoy the convenience of hassle-free laundry! 🚀
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaundryServiceLanding'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Inter:wght@400;600&display=swap');

.landing-container {
  text-align: center;
  padding: 40px 0;
}

.main-title {
  font-family: 'Inria Serif', serif;
  font-size: 36px;
  font-weight: 700;
  color: #000;
}

.subtitle-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E3ECFD; /* Warna latar belakang biru muda */
  padding: 50px;
  border-radius: 10px;
  max-width: 90%;
  margin: auto;
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.laundry-image {
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content-container {
  flex: 1;
  text-align: left;
  padding: 0 30px;
}

.subtitle {
  font-family: 'Inria Serif', serif;
  font-size: 22px;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;
}

.paragraph {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #000;
  margin-bottom: 15px;
  line-height: 1.6;
}
</style>
