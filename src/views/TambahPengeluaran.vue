<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm bg-white">
      <h2 class="mb-4 fw-bold">Tambah Data Pengeluaran</h2>

      <form @submit.prevent="submitForm">
        <div class="mb-3 row align-items-center">
          <label class="col-sm-3 col-form-label fw-bold">Tanggal</label>
          <div class="col-sm-9">
            <div class="input-group">
              <input type="date" v-model="form.date" class="form-control" required />
              <span class="input-group-text"><i class="bi bi-calendar"></i></span>
            </div>
          </div>
        </div>

        <div class="mb-3 row align-items-center">
          <label class="col-sm-3 col-form-label fw-bold">Produk</label>
          <div class="col-sm-9">
            <div v-for="(product, index) in form.products" :key="index" class="row g-3 align-items-center">
              <!-- Input Nama Produk -->
              <div class="col-md-3">
                <input type="text" v-model="product.name" class="form-control" placeholder="Masukan Produk" required />
              </div>

              <!-- Input Jumlah Produk -->
              <div class="col-md-3 d-flex align-items-center">
                <button type="button" class="btn btn-outline-secondary px-2" @click="decreaseQuantity(index)">-</button>
                <input type="number" v-model="product.quantity" min="1" class="form-control text-center mx-2" style="max-width: 60px;" />
                <button type="button" class="btn btn-secondary px-2" @click="increaseQuantity(index)">+</button>
              </div>

              <!-- Input Harga Produk -->
              <div class="col-md-4">
                <div class="input-group input-group-sm">
                  <span class="input-group-text">Harga</span>
                  <span class="input-group-text">Rp</span>
                  <input type="number" v-model="product.price" min="0" class="form-control" placeholder="0" required />
                </div>
              </div>

              <!-- Tombol Tambah & Hapus -->
              <div class="col-auto d-flex gap-2">
                <button type="button" class="btn btn-primary" @click="addProduct">
                  <i class="bi bi-plus"></i>
                </button>
                <button v-if="form.products.length > 1" type="button" class="btn btn-danger" @click="removeProduct(index)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-3 row align-items-center">
          <label class="col-sm-3 col-form-label fw-bold">Catatan</label>
          <div class="col-sm-9">
            <textarea v-model="form.note" class="form-control" placeholder="Masukkan Catatan" required></textarea>
          </div>
        </div>

        <div class="mb-3 row align-items-center">
          <label class="col-sm-3 col-form-label fw-bold">Total Pengeluaran</label>
          <div class="col-sm-9">
            <div class="input-group">
              <span class="input-group-text">Rp</span>
              <input type="text" :value="formattedTotal" class="form-control" readonly />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-warning">Kembali</button>
          <button type="submit" class="btn btn-primary">+ Tambah</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  date: '',
  products: [{ name: '', quantity: 1, price: 0 }],
  note: ''
});

const addProduct = () => {
  form.value.products.push({ name: '', quantity: 1, price: 0 });
};

const removeProduct = (index) => {
  if (form.value.products.length > 1) {
    form.value.products.splice(index, 1);
  }
};

const increaseQuantity = (index) => {
  form.value.products[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (form.value.products[index].quantity > 1) {
    form.value.products[index].quantity--;
  }
};

const formattedTotal = computed(() => {
  return `Rp ${form.value.products.reduce((sum, product) => sum + product.quantity * product.price, 0).toLocaleString('id-ID')}`;
});

const submitForm = () => {
  alert('Data berhasil disimpan!');
};
</script>

<style scoped>
.input-group .form-control {
  flex: 1;
}
.card {
  border-radius: 10px;
  background-color: white;
}
</style>
`