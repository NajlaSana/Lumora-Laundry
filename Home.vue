<template>
  <div>
    <WhyChooseUs />
    <LaundrySection />
    <Services />
    <Location />
    <Testimonials />
  </div> 
</template>

<script>
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import LaundrySection from "@/components/LaundrySection.vue";
import Services from "@/components/Services.vue";
import Location from "@/components/Location.vue";
import Testimonials from "@/components/Testimonials.vue";

export default {
  components: {
    WhyChooseUs,
    LaundrySection,
    Services,
    Location,
    Testimonials
  }
};
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
