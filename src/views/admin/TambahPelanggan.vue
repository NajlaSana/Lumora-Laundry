<template>
  <div class="container mt-4">
    <div class="card p-4">
      <h2 class="mb-4">Tambah Data Pelanggan</h2>
      <form @submit.prevent="tambahPelanggan">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-10">
            <input v-model="pelanggan.nama" type="text" class="form-control" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-10 d-flex align-items-center gap-3">
            <div class="form-check">
              <input v-model="pelanggan.jenisKelamin" class="form-check-input" type="radio" value="Perempuan" required />
              <label class="form-check-label">Perempuan</label>
            </div>
            <div class="form-check">
              <input v-model="pelanggan.jenisKelamin" class="form-check-input" type="radio" value="Laki-laki" required />
              <label class="form-check-label">Laki-laki</label>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <textarea v-model="pelanggan.alamat" class="form-control" required></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">No Telp</label>
          <div class="col-sm-10">
            <input v-model="pelanggan.noTelp" type="text" class="form-control" required />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <router-link to="/pelanggan" class="btn btn-warning me-2">Kembali</router-link>
          <button type="submit" class="btn btn-primary">+ Tambah</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pelanggan: {
        nama: '',
        jenisKelamin: '',
        alamat: '',
        noTelp: ''
      }
    };
  },
  methods: {
    tambahPelanggan() {
      let pelangganList = JSON.parse(localStorage.getItem("pelangganList")) || [];

      let newId = pelangganList.length > 0 
        ? pelangganList[pelangganList.length - 1].id + 1 
        : 1;

      let pelangganBaru = {
        id: newId,
        nama: this.pelanggan.nama,
        jenisKelamin: this.pelanggan.jenisKelamin,
        alamat: this.pelanggan.alamat,
        noTelp: this.pelanggan.noTelp
      };

      pelangganList.push(pelangganBaru);
      localStorage.setItem("pelangganList", JSON.stringify(pelangganList));

      this.$router.push("/pelanggan"); // Langsung pindah halaman tanpa notifikasi
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}
.card {
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
</style>
