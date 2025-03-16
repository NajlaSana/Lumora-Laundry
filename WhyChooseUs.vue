<template>
  <div class="why-choose-us container my-5 text-center">
    <h2 class="display-6 inria-serif">Why Choose Us?</h2>
    <p class="subtitle inter mb-4">-- because you deserve the best --</p>
    <div class="row g-3">
      <div class="col-md-4 col-sm-6" v-for="(feature, index) in features" :key="index">
        <div class="card h-100 text-center p-3">
          <div class="feature-icon mb-3">
            <svg :width="feature.iconWidth" :height="feature.iconHeight" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="feature.iconPath"></path>
            </svg>
          </div>
          <div class="feature-content">
            <h5 class="inria-serif">{{ feature.title }}</h5>
            <p class="text-muted inter">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyChooseUs',
  data() {
    return {
      features: [
        {
          title: 'Free Delivery',
          description: '-- because you deserve the best --',
          iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
          iconWidth: 24,
          iconHeight: 24
        },
        {
          title: 'Open 24 Hour',
          description: '-- because you deserve the best --',
          iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          iconWidth: 24,
          iconHeight: 24
        },
        {
          title: 'Safety Guaranteed',
          description: '-- because you deserve the best --',
          iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          iconWidth: 24,
          iconHeight: 24
        },
        {
          title: 'Fast Turnaround Time',
          description: '-- because you deserve the best --',
          iconPath: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4v-4H9v4m6-4v4',
          iconWidth: 24,
          iconHeight: 24
        },
        {
          title: 'Eco Friendly Practice',
          description: '-- because you deserve the best --',
          iconPath: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
          iconWidth: 24,
          iconHeight: 24
        },
        {
          title: 'Professional Care',
          description: '-- because you deserve the best --',
          iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
          iconWidth: 24,
          iconHeight: 24
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&family=Inter:wght@400;600&display=swap');

.inria-serif {
  font-family: 'Inria Serif', serif;
}

.inter {
  font-family: 'Inter', sans-serif;
}

.why-choose-us {
  font-family: 'Inter', sans-serif;
}

.why-choose-us h2 {
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}

.feature-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.feature-icon svg {
  stroke: black;
  width: 48px;
  height: 48px;
}

.card {
  border-radius: 40px;
  transition: transform 0.3s ease;
}

.card:hover {
  border-radius: 40px;
  transform: scale(1.05);
}
</style>
