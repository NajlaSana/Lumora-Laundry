<template>
  <section class="container py-5">
    <h2 class="text-center fw-bold mb-2">Our Outlet</h2>
    <p class="text-center text-muted mb-4">-- Because you deserve the best! --</p>

    <!-- Filter dan Search dalam satu container -->
    <div class="filter-search-container">
      <div class="filter-group">
        <button class="btn-filter" :class="{ active: selectedCity === 'Bandung' }" @click="selectedCity = 'Bandung'">
          Bandung
        </button>
        <button class="btn-filter" :class="{ active: selectedCity === 'Cimahi' }" @click="selectedCity = 'Cimahi'">
          Cimahi
        </button>
      </div>
      <div class="search-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search Here" />
        <span class="search-icon">🔍</span>
      </div>
    </div>


    <div class="row justify-content-center">
      <div v-for="(outlet, index) in filteredOutlets" :key="index" class="col-md-4 mb-4">
        <router-link :to="'/outlet/' + outlet.id" class="text-decoration-none">
          <div class="card outlet-card">
            <img :src="outlet.image" class="card-img-top" alt="Laundry">
            <div class="card-body text-center">
              <p class="fw-semibold">{{ outlet.name }}</p>
              <small class="text-muted">{{ outlet.address }}</small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: 'Bandung',
      searchQuery: '',
      outlets: [
        { id: 1, name: 'Outlet Braga', address: "Jl. Braga No.33", city: 'Bandung', image: "/images/Braga.jpg" },
        { id: 2, name: 'Outlet Surapati', address: "Jl. Surapati No.48", city: 'Bandung', image: "/images/surapati.jpg" },
        { id: 3, name: 'Outlet Cikutra', address: "Jl. Cikutra No.23", city: 'Bandung', image: "/images/cikutra.jpg" },
        { id: 4, name: "Outlet Sukajadi", address: "Jl. Sukajadi No.99", city: 'Bandung', image: "/images/sukajadi.jpg" },
        { id: 5, name: 'Outlet Asia Afrika', address: "Jl. Asia Afrika No.15", city: 'Bandung', image: "/images/afrika.jpg" },  
        { id: 6, name: 'Outlet Dago', address: "Jl. Dago No.20", city: 'Bandung', image: "/images/dago.jpg" },  
        { id: 7, name: 'Outlet Baros', address: "Jl. Baros No.5", city: 'Cimahi', image: "/images/baros.jpg" },
        { id: 8, name: 'Outlet Cibeber', address: "Jl. Cibeber No.8", city: 'Cimahi', image: "/images/cibeber.jpg" },
        { id: 9, name: 'Outlet Cibabat', address: "JL. Cibabat No.20", city: 'Cimahi', image: "/images/cibabat.jpg" },
        { id: 10, name: 'Outlet Ciseupan', address: "JL. Ciseupan No.17", city: 'Cimahi', image: "/images/cisepan.jpg" },
        { id: 11, name: 'Outlet Sangkuriang', address: "JL. Sangkuriang No.53", city: 'Cimahi', image: "/images/sangkuriang.jpg" },
        { id: 12, name: 'Outlet Padasuka', address: "JL. Padasuka No.40", city: 'Cimahi', image: "/images/padasuka.jpg" },
      ],
    };
  },
  computed: {
    filteredOutlets() {
      return this.outlets
        .filter(outlet => outlet.city === this.selectedCity)
        .filter(outlet => outlet.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  }
};
</script>

<style scoped>
/* Container untuk filter dan search */
.filter-search-container {
  display: flex;
  flex-direction: column; /* Biar search bar ada di bawah */
  align-items: center; /* Posisikan ke tengah */
  gap: 15px; /* Beri jarak antara tombol filter dan search bar */
  margin-bottom: 30px; /* Tambahkan jarak lebih besar ke daftar outlet */
}

/* Filter tetap di tengah */
.filter-group {
  display: flex;
  border: 2px solid #ddd;
  border-radius: 25px;
  overflow: hidden;
}

/* Tombol filter */
.btn-filter {
  padding: 10px 20px;
  border: none;
  background: white;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

.btn-filter.active {
  background-color: #bdd6ff;
  color: black;
  border-radius: 20px;
}

.btn-filter:not(.active):hover {
  background-color: #f1f1f1;
}

/* Search bar tetap di tengah dan diberi jarak */
.search-container {
  display: flex;
  align-items: center;
  background: white;
  padding: 5px 15px;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  width: 250px;
  justify-content: space-between;
  margin-left: auto; /* Geser search bar ke kanan */
  margin-right: 0;
}

.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  width: 150px;
}

.search-icon {
  margin-left: 10px;
  font-size: 18px;
  cursor: pointer;
}

.outlet-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100%;
}

.row .col-md-4 {
  display: flex;
}

.outlet-card:hover {
  transform: scale(1.05);
}

</style>
