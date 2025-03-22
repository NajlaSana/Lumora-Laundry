<template>
  <div class="container mt-4">
    <div class="card p-4">
      <h2 class="mb-4">Tambah Data Karyawan</h2>
      <form @submit.prevent="tambahKaryawan">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input v-model="karyawan.username" type="text" class="form-control" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input v-model="karyawan.password" type="password" class="form-control" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-10">
            <input v-model="karyawan.nama" type="text" class="form-control" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-10 d-flex align-items-center gap-3">
            <div class="form-check">
              <input v-model="karyawan.jenisKelamin" class="form-check-input" type="radio" value="Perempuan" required />
              <label class="form-check-label">Perempuan</label>
            </div>
            <div class="form-check">
              <input v-model="karyawan.jenisKelamin" class="form-check-input" type="radio" value="Laki-laki" required />
              <label class="form-check-label">Laki-laki</label>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <textarea v-model="karyawan.alamat" class="form-control" required></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">No Telepon</label>
          <div class="col-sm-10">
            <input v-model="karyawan.noTelp" type="text" class="form-control" required />
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Jabatan</label>
          <div class="col-sm-10">
            <select v-model="karyawan.jabatan" class="form-select" required>
              <option value="" disabled>Pilih Jabatan</option>
              <option value="Kasir">Kasir</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <router-link to="/karyawan" class="btn btn-warning me-2">Kembali</router-link>
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
      karyawan: {
        username: '',
        password: '',
        nama: '',
        jenisKelamin: '',
        alamat: '',
        noTelp: '',
        jabatan: ''
      }
    };
  },
  methods: {
    tambahKaryawan() {
      let karyawanList = JSON.parse(localStorage.getItem("karyawanList")) || [];

      let newId = karyawanList.length > 0 
        ? karyawanList[karyawanList.length - 1].id + 1 
        : 1;

      let karyawanBaru = {
        id: newId,
        ...this.karyawan
      };

      karyawanList.push(karyawanBaru);
      localStorage.setItem("karyawanList", JSON.stringify(karyawanList));

      console.log("Data Karyawan Tersimpan:", JSON.parse(localStorage.getItem("karyawanList")));

      this.$router.replace("/karyawan");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.card {
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
</style>
