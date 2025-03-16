<template>
  <div class="container">
    <div v-if="outlet" class="outlet-detail">
      <h1 class="title">Detail Laundry {{ outlet.name }}</h1>
      <p class="subtitle">-- Because you deserve the best! --</p>

      <div class="outlet-card">
        <img :src="outlet.image" alt="Outlet Laundry" class="outlet-image" />
        
        <div class="outlet-info">
          <h3>{{ outlet.name }} <span class="city">({{ outlet.city }})</span></h3>
          <p class="address">📍 {{ outlet.address }}</p>
          <div class="buttons">
            <button @click="openMaps" class="btn btn-primary">📍 Lokasi GMaps</button>
            <a :href="'tel:' + outlet.phone" class="btn btn-secondary">📞 Hubungi Outlet</a>
          </div>
          <router-link to="/" class="router-link">Kembali</router-link>
        </div>

      </div>
    </div>
    
    <div v-else>
      <h3 class="text-danger">Outlet tidak ditemukan!</h3>
      <router-link to="/" class="btn btn-primary">Kembali ke Beranda</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outlets: [
        { id: 1, name: "Outlet Braga", address: "JL. Braga No.33, Bandung", city: "Bandung", image: "/images/Braga.jpg", gmaps: "https://maps.app.goo.gl/Bd8QXYuZEeueoyvt9", phone: "+62123456789" },
        { id: 2, name: "Outlet Surapati", address: "JL. Surapati No.50, Bandung", city: "Bandung", image: "/images/surapati.jpg", gmaps: "https://maps.app.goo.gl/pcEDaXxvNWMhCCca9", phone: "+62876543210" },
        { id: 3, name: "Outlet Cikutra", address: "JL. Cikutra No.23, Bandung", city: "Bandung", image: "/images/cikutra.jpg", gmaps: "https://maps.app.goo.gl/5H8Cme82TDMHoyGB8", phone: "+62876543210" },        
        { id: 4, name: "Outlet Sukajadi", address: "JL. Sukajadi No.15, Bandung", city: "Bandung", image: "/images/sukajadi.jpg", gmaps: "https://maps.app.goo.gl/7Ji1yeprBzptUsox5", phone: "+62811223344" },
        { id: 5, name: "Outlet Asia Afrika", address: "JL. Asia Afrika No.1, Bandung", city: "Bandung", image: "/images/afrika.jpg", gmaps: "https://maps.app.goo.gl/pChrDKQKWv5R92cR7", phone: "+62123456789" },
        { id: 6, name: "Outlet Dago", address: "JL. Dago No.56, Bandung", city: "Bandung", image: "/images/dago.jpg", gmaps: "https://maps.app.goo.gl/JCAbViExVjDRg49WA", phone: "+62123456789" },
        { id: 7, name: "Outlet Baros", address: "JL. Baros No.12, Cimahi", city: "Cimahi", image: "/images/baros.jpg", gmaps: "https://maps.app.goo.gl/vvnj8QjjhWqvXbJ37", phone: "+62811223344" },
        { id: 8, name: "Outlet Cibeber", address: "JL. Cibeber No.51, Cimahi", city: "Cimahi", image: "/images/cibeber.jpg", gmaps: "https://maps.app.goo.gl/yTdN76DZf1NDRWkY7", phone: "+62811223344" },
        { id: 9, name: "Outlet Cibabat", address: "JL. Cibabat No.20, Cimahi", city: "Cimahi", image: "/images/cibabat.jpg", gmaps: "https://maps.app.goo.gl/nNTXFNWzaiCVLym99", phone: "+62811223344" },
        { id: 10, name: "Outlet Ciseupan", address: "JL. Ciseupan No.17, Cimahi", city: "Cimahi", image: "/images/cisepan.jpg", gmaps: "https://maps.app.goo.gl/WqCmUNCDbMHwxFbT6", phone: "+62811223344" },
        { id: 11, name: "Outlet Sangkuriang", address: "JL. Sangkuriang No.53, Cimahi", city: "Cimahi", image: "/images/sangkuriang.jpg", gmaps: "https://maps.app.goo.gl/WSfs98Rd8Pz2MNuDA", phone: "+62811223344" },
        { id: 12, name: "Outlet Padasuka", address: "JL. Padasuka No.40, Cimahi", city: "Cimahi", image: "/images/padasuka.jpg", gmaps: "https://maps.app.goo.gl/REg7pfu9DT2m34WWA", phone: "+62811223344" },
      ],
      outlet: null
    };
  },
  methods: {
    fetchOutlet() {
      const outletId = Number(this.$route.params.id);
      this.outlet = this.outlets.find(o => o.id === outletId);
    },
    openMaps() {
      if (this.outlet && this.outlet.gmaps) {
        window.open(this.outlet.gmaps, "_blank"); // Membuka link di tab baru
      } else {
        alert("Lokasi tidak ditemukan.");
      }
    }
  },
  watch: {
    "$route.params.id": "fetchOutlet",
  },
  mounted() {
    this.fetchOutlet();
  }
};
</script>


<style scoped>
.container {
  text-align: center;
  padding: 40px 20px;
}

.title {
  font-size: 36px; /* Memperbesar judul */
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
  color: gray;
  margin-bottom: 20px;
}

.outlet-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 15px;
  padding: 30px; /* Memberikan ruang lebih di dalam card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 890px; /* Menyesuaikan lebar card */
  margin: auto;
  margin-top: 40px;
  gap: 20px; /* Jarak antara gambar dan teks */
  border: 2px solid #ddd; /* Menambahkan border agar lebih mirip Figma */
}

.outlet-image {
  width: 400px; /* Ukuran gambar di dalam card */
  height: auto;
  border-radius: 15px;
  object-fit: cover; /* Memastikan gambar tidak terdistorsi */
}

.outlet-info {
  text-align: left;
  font-size: 18px; /* Menyesuaikan ukuran teks */
  margin-left: 20px;
}

.city {
  font-size: 16px;
  color: gray;
}

.address {
  font-size: 18px;
  margin: 10px 0;
}

.buttons {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}

.btn {
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease; /* Menambahkan efek hover */
}

.btn:hover {
  opacity: 0.8;
}

.btn-primary {
  background: #4e8cff;
  color: white;
}

.btn-secondary {
  background: #6c8cff;
  color: white;
}

.router-link {
  display: inline-block;
  margin-top: 20px; /* Menambahkan jarak ke atas */
  font-size: 16px;
  color: #4e8cff;
  text-decoration: none;
  font-weight: bold;
}

/* Tambahkan jarak antara card dan footer */
.footer {
  margin-top: 60px;
  padding: 20px;
  background: #cce0ff; /* Warna mirip dengan Figma */
  text-align: center;
}

</style>
