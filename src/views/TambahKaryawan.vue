<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm">
      <h2 class="mb-4">Tambah Data Karyawan</h2>
      <form @submit.prevent="tambahKaryawan">
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
            <input v-model="nomorTelepon" type="tel">
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
          <router-link to="/admin/karyawan" class="btn btn-warning me-2">Kembali</router-link>
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
        jenis_kelamin: '',
        alamat: '',
        telp: '',
        jabatan: ''
      }
    };
  },
  methods: {
    tambahKaryawan() {
      // Validasi input
      if (!this.karyawan.username || !this.karyawan.password || !this.karyawan.nama || 
          !this.karyawan.jenis_kelamin || !this.karyawan.alamat || !this.karyawan.jabatan) {
        Swal.fire("Error!", "Harap isi semua field yang diperlukan!", "error");
        return;
      }

      // Tampilkan notifikasi sukses tanpa menyimpan ke backend atau localStorage
      Swal.fire({
        title: "Berhasil!",
        text: "Data karyawan berhasil ditambahkan (hanya sementara di memori)",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        this.$router.push('/admin/karyawan');
      });

      // Reset form setelah submit
      this.karyawan = {
        username: '',
        password: '',
        nama: '',
        jenis_kelamin: '',
        alamat: '',
        telp: '',
        jabatan: ''
      };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}
</style>
