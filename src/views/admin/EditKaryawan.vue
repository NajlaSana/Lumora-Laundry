<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm">
      <h2 class="mb-4">Edit Data Karyawan</h2>
      <form @submit.prevent="updateKaryawan">
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Username</label>
          <div class="col-sm-9">
            <input type="text" v-model="karyawan.username" class="form-control" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9">
            <input type="password" v-model="karyawan.password" class="form-control" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Nama</label>
          <div class="col-sm-9">
            <input type="text" v-model="karyawan.nama" class="form-control" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-9 d-flex align-items-center">
            <input type="radio" value="Laki-laki" v-model="karyawan.jenis_kelamin" class="me-2" /> Laki-laki
            <input type="radio" value="Perempuan" v-model="karyawan.jenis_kelamin" class="ms-3 me-2" /> Perempuan
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Alamat</label>
          <div class="col-sm-9">
            <input type="text" v-model="karyawan.alamat" class="form-control" required />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">No Telepon</label>
          <div class="col-sm-9">
            <input type="text" v-model="karyawan.telp" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Jabatan</label>
          <div class="col-sm-9">
            <select v-model="karyawan.jabatan" class="form-control" required>
              <option value="Admin">Admin</option>
              <option value="Kasir">Kasir</option>
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <router-link to="/karyawan" class="btn btn-secondary me-2">Kembali</router-link>
          <button type="submit" class="btn btn-primary">Update</button>
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
        id: null,
        username: '',
        password: '',
        nama: '',
        jenis_kelamin: '',
        alamat: '',
        telp: '',
        jabatan: ''
      }
    };
  },
  created() {
    const id = this.$route.params.id;
    if (!id) {
      alert("ID karyawan tidak ditemukan!");
      this.$router.push("/karyawan");
      return;
    }

    const data = JSON.parse(localStorage.getItem('karyawanList')) || [];
    const selected = data.find(karyawan => karyawan.id == id);
    if (selected) {
      this.karyawan = { ...selected };
    } else {
      alert("Data karyawan tidak ditemukan!");
      this.$router.push("/karyawan");
    }
  },
  methods: {
    updateKaryawan() {
      const data = JSON.parse(localStorage.getItem('karyawanList')) || [];
      const index = data.findIndex(karyawan => karyawan.id == this.karyawan.id);
      if (index !== -1) {
        data[index] = { ...this.karyawan };
        localStorage.setItem('karyawanList', JSON.stringify(data));
        this.$router.push('/karyawan');
      } else {
        alert("Gagal memperbarui data. Karyawan tidak ditemukan.");
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
}
</style>
