<template>
  <div class="card p-4">
    <h5 class="fw-bold">Data Pengeluaran</h5>
    <div class="d-flex justify-content-end mb-3 gap-2">
      <button class="btn btn-light dropdown-toggle">Filter</button>
      <button @click="goToTambah" class="btn btn-primary">+ Tambah</button>
    </div>
    <table class="table table-bordered">
      <thead class="table-primary">
        <tr>
          <th>No</th>
          <th>Tanggal</th>
          <th>Produk</th>
          <th>Catatan</th>
          <th>Pengeluaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in expenses" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>{{ item.date }}</td>
          <td>{{ item.product }}</td>
          <td>{{ item.note }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <div class="dropdown">
              <button class="btn btn-light" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Edit</button></li>
                <li><button class="dropdown-item text-danger">Hapus</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToTambah = () => {
  router.push('/TambahPengeluaran');
};

const expenses = ref([
  {
    date: "15-01-2025",
    product: "Sabun cuci",
    note: "Belanja Bulanan",
    amount: "100.000",
  }
]);
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.table {
  margin-top: 10px;
  border-radius: 10px;
}

.btn-light {
  border: none;
}

.bi-three-dots-vertical {
  font-size: 18px;
}
</style>
