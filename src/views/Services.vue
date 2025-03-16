<template>
  <section id="service-section" class="services-section">
    <div class="container">
      <h2 class="section-title">Our Service</h2>
      <p class="section-subtitle">-- Because you deserve the best! --</p>

      <div class="service-list">
        <div v-for="(service, index) in services" :key="index" class="service-item">
          <div class="service-image">
            <img :src="'/' + service.image" :alt="service.title">
          </div>
          <div class="service-content">
            <h3 class="service-number">0{{ index + 1 }}</h3>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-subtitle">-- Because you deserve the best! --</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Dry Cleaning",
          image: "drycleaning.jpg"
        },
        {
          title: "Ironing & Pressing",
          image: "ironing.jpg"
        },
        {
          title: "Pickup & Delivery",
          image: "delivery.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Inter:wght@400;600&display=swap');

.services-section {
  padding: 6rem 10%;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-family: 'Inria Serif', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 3rem;
  text-align: center;
}

.service-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1100px;
}

.service-item:nth-child(even) {
  flex-direction: row-reverse;
}

.service-image img {
  width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.service-content {
  text-align: left;
}

.service-number {
  font-size: 3rem;
  font-weight: 700;
  color: #000;
}

.service-title {
  font-family: 'Inria Serif', serif;
  font-size: 2.5rem;
  font-weight: 700;
}

.service-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  color: #666;
}
</style>
