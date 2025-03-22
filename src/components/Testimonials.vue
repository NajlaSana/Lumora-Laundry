<template>
  <section class="testimonials-section">
    <div class="container text-center">
      <h2 class="section-title">What Do They Say?</h2>
      <p class="section-subtitle">-- Because you deserve the best! --</p>

      <div class="testimonial-carousel">
        <button @click="prevSlide" class="carousel-btn left">❮</button>
        <div class="testimonial-container">
          <div 
            class="testimonial-card"
            v-for="(review, index) in displayedReviews"
            :key="index"
          >
            <img :src="review.image" alt="User Image" class="testimonial-image">
            <h6 class="testimonial-name">@{{ review.username }}</h6>
            <div class="stars">★★★★★</div>
            <p class="testimonial-text">"{{ review.message }}"</p>
          </div>
        </div>
        <button @click="nextSlide" class="carousel-btn right">❯</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      currentIndex: 0,
      reviews: [
        {
          username: "KeishaAlvaro",
          message: "Pelayanan cepat dan hasil cucian yang bersih! Sangat puas dengan jasa laundry ini.",
          image: "/keisha.jpg"
        },
        {
          username: "Pacarnya_AryaMohan",
          message: "Staf ramah dan responsif terhadap permintaan khusus. Rekomendasi untuk jasa laundry terbaik!",
          image: "/aqeela.jpg"
        },
        {
          username: "_AryaMohan",
          message: "Proses pengambilan dan pengantaran yang efisien, sangat membantu bagi yang sibuk.",
          image: "/AryaMohan.jpg"
        },
        {
          username: "Nichoole Rosi",
          message: "Harga terjangkau dengan kualitas terbaik! Sangat puas!",
          image: "/zara.jpg"
        },
        {
          username: "Noel_Londok",
          message: "Sistem antar jemputnya sangat membantu. Sangat direkomendasikan!",
          image: "/noel.jpg"
        }
      ]
    };
  },
  computed: {
    displayedReviews() {
      return this.reviews.slice(this.currentIndex, this.currentIndex + 3);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex + 3 < this.reviews.length) {
        this.currentIndex += 3;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex - 3 >= 0) {
        this.currentIndex -= 3;
      } else {
        this.currentIndex = this.reviews.length - (this.reviews.length % 3 || 3);
      }
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 4rem 0;
  text-align: center;
  background-color: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.testimonial-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #555;
  transition: color 0.3s;
}

.carousel-btn:hover {
  color: #000;
}

.left {
  position: absolute;
  left: -50px;
}

.right {
  position: absolute;
  right: -50px;
}

.testimonial-container {
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.testimonial-card {
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.testimonial-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-name {
  font-weight: bold;
  margin-top: 10px;
}

.stars {
  color: #FFD700;
  font-size: 1.2rem;
}

.testimonial-text {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}
</style>
