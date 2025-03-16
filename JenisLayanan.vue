<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <!-- Header dengan tombol Filter & Tambah -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="fw-bold title-inria">Data Jenis Layanan</h5>
          <div v-if="!isTambah && !isEdit">
            <button class="btn btn-light dropdown-toggle me-2" data-bs-toggle="dropdown">
              Filter
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Semua</a></li>
              <li><a class="dropdown-item" href="#">Lama Proses &lt; 3 Hari</a></li>
              <li><a class="dropdown-item" href="#">Tarif &gt; 5.000</a></li>
            </ul>
            <button class="btn btn-primary" @click="isTambah = true">+ Tambah</button>
          </div>
        </div>

        <!-- Form Tambah/Edit -->
        <div v-if="isTambah || isEdit" class="text-inter">
          <form @submit.prevent="isEdit ? updateLayanan() : submitForm()">
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Jenis Layanan</label>
              <div class="col-sm-9">
                <input v-model.trim="jenisLayanan" type="text" class="form-control" placeholder="Masukan Jenis Layanan" required />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Lama Proses / Hari</label>
              <div class="col-sm-9">
                <input v-model.trim="lamaProses" type="text" class="form-control" placeholder="Masukan Lama Proses" required />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Tarif / Kg</label>
              <div class="col-sm-9">
                <input v-model.trim="tarif" type="text" class="form-control" placeholder="Rp." required />
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-warning me-2" @click="cancelForm">Kembali</button>
              <button type="submit" class="btn btn-primary">
                {{ isEdit ? 'Update' : 'Tambah' }}
              </button>
            </div>
          </form>
        </div>

        <!-- Tabel Data -->
        <div v-else class="text-inter">
          <table class="table table-striped">
            <thead class="table-primary custom-header">
              <tr>
                <th>No</th>
                <th>Jenis Layanan</th>
                <th>Lama Proses / Hari</th>
                <th>Tarif / Kg</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(layanan, index) in layananList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ layanan.jenis }}</td>
                <td>{{ layanan.lamaProses }}</td>
                <td>{{ layanan.tarif }}</td>
                <td class="text-center">
                  <div class="dropdown">
                    <button class="btn btn-light btn-sm border-0 p-2 rounded-circle" type="button" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots-vertical fs-5"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                      <li>
                        <button class="dropdown-item d-flex align-items-center py-2" @click="editLayanan(index)">
                          <i class="bi bi-pencil-square me-3 text-primary fs-6"></i> Edit
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item d-flex align-items-center py-2 text-danger" @click="openDeleteModal(index)">
                          <i class="bi bi-trash me-3 fs-6"></i> Hapus
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
                <!-- Modal Konfirmasi Hapus -->
                <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Konfirmasi Hapus</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>Apakah Anda yakin ingin menghapus layanan ini?</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button type="button" class="btn btn-danger" @click="hapusLayanan">Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  data() {
    return {
      isTambah: false,
      isEdit: false,
      selectedIndex: null,
      jenisLayanan: '',
      lamaProses: '',
      tarif: '',
      layananList: [
        { jenis: 'Dry Cleaning', lamaProses: '3 Hari', tarif: '7.000' }
      ],
      indexToDelete: null, // Menyimpan index layanan yang akan dihapus
      deleteModalInstance: null, // Instance modal Bootstrap
    };
  },
  methods: {
    submitForm() {
      this.layananList.push({
        jenis: this.jenisLayanan.trim(),
        lamaProses: this.lamaProses.trim(),
        tarif: this.tarif.trim(),
      });
      this.resetForm();
    },
    editLayanan(index) {
      this.isEdit = true; 
      this.isTambah = true; // Pastikan form muncul
      this.selectedIndex = index;
      this.jenisLayanan = this.layananList[index].jenis;
      this.lamaProses = this.layananList[index].lamaProses;
      this.tarif = this.layananList[index].tarif;
    },
    updateLayanan() {
      if (this.selectedIndex !== null) {
        this.layananList[this.selectedIndex] = {
          jenis: this.jenisLayanan.trim(),
          lamaProses: this.lamaProses.trim(),
          tarif: this.tarif.trim(),
        };
      }
      this.resetForm();
    },
    openDeleteModal(index) {
      this.indexToDelete = index; // Set layanan yang akan dihapus
      this.$nextTick(() => {
        this.deleteModalInstance = new bootstrap.Modal(this.$refs.deleteModal);
        this.deleteModalInstance.show();
      });
    },
    hapusLayanan() {
      if (this.indexToDelete !== null) {
        this.layananList.splice(this.indexToDelete, 1); // Hapus layanan dari array
        this.indexToDelete = null; // Reset index setelah hapus
        if (this.deleteModalInstance) {
          this.deleteModalInstance.hide(); // Tutup modal setelah berhasil menghapus
        }
      }
    },
    cancelForm() {
      this.resetForm();
    },
    resetForm() {
      this.isTambah = false;
      this.isEdit = false;
      this.selectedIndex = null;
      this.jenisLayanan = '';
      this.lamaProses = '';
      this.tarif = '';
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif&family=Inter&display=swap');

.title-inria {
  font-family: 'Inria Serif', serif;
}

.text-inter {
  font-family: 'Inter', sans-serif;
}

.card {
  border-radius: 10px;
  transition: none !important;
  box-shadow: none !important;
  user-select: none;
}

.card:active, .card:focus, .card:hover {
  transform: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
  outline: none !important;
}

.table th, .table td {
  border: 1px solid #dee2e6;
  text-align: center;
  vertical-align: middle;
}

.thead tr {
  background-color: #C7DCFF;
  color: #000;
}

.form-control {
  border-radius: 8px;
}

.btn-warning {
  background-color: #f6a623;
  border: none;
  color: white;
}

.btn-primary {
  background-color: #3b5bfd;
  border: none;
}

.btn-primary:hover {
  background-color: #2e49cc;
}
</style>
