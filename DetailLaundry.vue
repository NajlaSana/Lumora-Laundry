<template>
  <div>
    <h1>Detail Outlet Laundry</h1>
    <p>Outlet ID: {{ $route.params.id }}</p>

    <h2>Daftar Pesanan</h2>
    <ul>
      <li v-for="pesanan in filteredPesanan" :key="pesanan.id">
        Nama: {{ pesanan.nama }} - Status: {{ pesanan.status }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesanan: [
        { id: 1, outlet_id: 1, nama: "Rizky", status: "Selesai" },
        { id: 2, outlet_id: 1, nama: "Siti", status: "Dalam proses" },
        { id: 3, outlet_id: 2, nama: "Budi", status: "Selesai" },
        // Data pesanan lainnya...
      ],
    };
  },
  computed: {
    filteredPesanan() {
      return this.pesanan.filter(p => p.outlet_id == this.$route.params.id);
    },
  },
};
</script>
