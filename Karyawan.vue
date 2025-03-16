<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h2>Data Karyawan</h2>
        <div class="d-flex justify-content-end align-items-center mb-3">
          <button class="btn btn-light dropdown-toggle me-2" type="button">Filter</button>
          <router-link to="/admin/tambah-karyawan" class="btn btn-primary">+ Tambah</router-link>
        </div>

        <table class="table table-striped">
          <thead class="table-primary">
            <tr>
              <th>No</th>
              <th>Foto Profil</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>No Telp</th>
              <th>Jabatan</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(karyawan, index) in filteredKaryawanList" :key="karyawan.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="getImagePath(karyawan.foto)" alt="Foto Profil" class="foto-profil">
              </td>
              <td>{{ karyawan.nama }}</td>
              <td>{{ karyawan.alamat }}</td>
              <td>{{ karyawan.telp }}</td>
              <td>{{ karyawan.jabatan }}</td>
              <td class="text-center">
                <div class="dropdown">
                  <button class="btn btn-light btn-sm border-0 p-2 rounded-circle"
                    type="button"
                    @click="toggleDropdown(index)">
                    <i class="bi bi-three-dots-vertical fs-5"></i>
                  </button>
                  <ul 
                    class="dropdown-menu dropdown-menu-end shadow-sm border-0"
                    :class="{ 'show': activeDropdown === index }">
                    <li>
                      <router-link :to="`/admin/edit-karyawan/${karyawan.id}`" class="dropdown-item d-flex align-items-center py-2">
                        <i class="bi bi-pencil-square me-3 text-primary fs-6"></i> Edit
                      </router-link>
                    </li>
                    <li>
                      <button 
                        class="dropdown-item d-flex align-items-center py-2 text-danger" 
                        @click="showDeleteModal(karyawan.id)">
                        <i class="bi bi-trash3 me-3 fs-6"></i> Hapus
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      karyawanList: [],
      selectedKaryawan: null,
      activeDropdown: null, // Menyimpan index dropdown yang aktif
    };
  },
  computed: {
    filteredKaryawanList() {
      return this.karyawanList;
    }
  },
  mounted() {
    this.loadKaryawan();
  },
  methods: {
    loadKaryawan() {
      const data = localStorage.getItem("karyawanList");
      if (data) {
        this.karyawanList = JSON.parse(data);
      }
    },
    getImagePath(foto) {
      return foto && foto.trim() ? `/images/${foto}` : "/images/default-profile.png";
    },
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },
    showDeleteModal(id) {
      this.selectedKaryawan = id;
      new bootstrap.Modal(document.getElementById('deleteModal')).show();
    }
  }
};
</script>

<style scoped>
.foto-profil {
  width: 80px !important; /* Ubah dari 100px ke 80px atau lebih besar */
  height: 80px !important; /* Sesuaikan dengan width */
  border-radius: 50%;
  object-fit: cover;
}
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
th, td {
  border-right: 1px solid #ddd; /* Garis vertikal antar kolom */
  text-align: center;
}

th:last-child, td:last-child {
  border-right: none; /* Hilangkan garis di kolom terakhir */
}

/* Warna latar belakang header tabel karyawan */
.table-karyawan thead {
    background-color: #dae7ff; /* Warna biru muda */
}

/* Gaya header tabel karyawan */
.table-karyawan th {
    font-weight: bold;
    color: black;
}


</style>
