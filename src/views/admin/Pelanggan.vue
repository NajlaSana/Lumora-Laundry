<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h5 class="fw-bold">Data Pelanggan</h5>
        <div class="d-flex justify-content-end align-items-center mb-3">
          <button class="btn btn-light dropdown-toggle me-2">Filter</button>
          <router-link to="/tambah-pelanggan" class="btn btn-primary">+ Tambah</router-link>
        </div>
        
        <table>
          <thead class="table-primary">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>No Telp</th>
              <th>Jenis Kelamin</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pelanggan, index) in pelangganList" :key="pelanggan.id">
              <td>{{ index + 1 }}</td>
              <td>{{ pelanggan.nama }}</td>
              <td>{{ pelanggan.alamat }}</td>
              <td>{{ pelanggan.noTelp }}</td>
              <td>{{ pelanggan.jenisKelamin }}</td>
              <td class="text-center">
                <!-- Dropdown -->
                <div class="dropdown">
                  <button 
                    class="btn btn-light btn-sm border-0 p-2 rounded-circle" 
                    type="button" 
                    @click="toggleDropdown(index)"
                    :id="'dropdownMenu' + index">
                    <i class="bi bi-three-dots-vertical fs-5"></i>
                  </button>
                  <ul 
                    class="dropdown-menu dropdown-menu-end shadow-sm border-0" 
                    :class="{ 'show': activeDropdown === index }"
                    :aria-labelledby="'dropdownMenu' + index">
                    <li>
                      <router-link 
                        :to="`/edit-pelanggan/${pelanggan.id}`" 
                        class="dropdown-item d-flex align-items-center py-2">
                        <i class="bi bi-pencil-square me-3 text-primary fs-6"></i> Edit
                      </router-link>
                    </li>
                    <li>
                      <button 
                        class="dropdown-item text-danger"
                        @click.stop="showDeleteModal(pelanggan.id)">
                        <i class="bi bi-trash me-2"></i> Hapus
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

    <!-- Modal Hapus -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Konfirmasi Hapus</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>Apakah Anda yakin ingin menghapus pelanggan ini?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-danger" @click="deletePelanggan">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      pelangganList: [],
      selectedPelangganId: null,
      activeDropdown: null
    };
  },
  methods: {
    loadPelanggan() {
      this.pelangganList = JSON.parse(localStorage.getItem("pelangganList")) || [];
    },
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },
    showDeleteModal(id) {
      this.selectedPelangganId = id;
      console.log("ID Pelanggan yang akan dihapus:", this.selectedPelangganId); // Debugging
      let modal = new bootstrap.Modal(document.getElementById("deleteModal"));
      modal.show();
    },
    deletePelanggan() {
      if (this.selectedPelangganId !== null) {
        this.pelangganList = this.pelangganList.filter(p => p.id !== this.selectedPelangganId);
        localStorage.setItem("pelangganList", JSON.stringify(this.pelangganList));

        console.log("Pelanggan setelah dihapus:", this.pelangganList); // Debugging
        this.selectedPelangganId = null;

        // Tutup modal
        let modalElement = document.getElementById("deleteModal");
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }

        alert("Pelanggan berhasil dihapus!");
      }
    }
  },
  mounted() {
    this.loadPelanggan();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  background-color: #cfe2ff; /* Biru lebih tua */
  color: #000; /* Warna teks hitam */
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

th.aksi, td.aksi {
  text-align: center;
  vertical-align: middle;
}

.dropdown-menu {
  min-width: 150px;
}

.dropdown-menu.show {
  display: block;
}

.btn-light {
  background-color: #f8f9fa;
}


</style>
