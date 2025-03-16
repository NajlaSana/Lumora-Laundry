<template>
  <div class="card p-4 w-100">
    <h4 class="fw-bold">Pengaturan Profil</h4>
    
    <form @submit.prevent="saveChanges">
      <!-- Foto Profil -->
      <div class="mb-3 text-center">
        <label class="form-label d-block">Foto Profil</label>
        <img src="/kimdokja.jpg" class="rounded-circle profile-img mb-2" alt="Foto Profil" />
        <input type="file" @change="uploadImage" class="form-control w-50 mx-auto" />
      </div>
      
      <!-- Username -->
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input type="text" v-model="form.username" class="form-control" required />
      </div>
      
      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="form.email" class="form-control" required />
      </div>
      
      <!-- Ubah Password -->
      <div class="mb-3">
        <label class="form-label">Ubah Kata Sandi</label>
        <input type="password" v-model="form.newPassword" class="form-control" placeholder="Masukkan kata sandi baru" />
      </div>
      <div class="mb-3">
        <input type="password" v-model="form.confirmPassword" class="form-control" placeholder="Konfirmasi kata sandi baru" />
      </div>
      
      <!-- Tombol Aksi -->
      <div class="d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-secondary" @click="goBack">Batal</button>
        <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};

const form = ref({
  username: 'Kim Dokja',
  email: 'kimdokja@laundry.com',
  newPassword: '',
  confirmPassword: ''
});

const profilePicture = ref('https://via.placeholder.com/100');

// Fungsi upload gambar
const uploadImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    profilePicture.value = URL.createObjectURL(file);
  }
};

// Fungsi reset form
const resetForm = () => {
  form.value.newPassword = '';
  form.value.confirmPassword = '';
};

// Fungsi simpan perubahan
const saveChanges = () => {
  if (form.value.newPassword !== form.value.confirmPassword) {
    alert('Kata sandi tidak cocok!');
    return;
  }
  console.log('Data disimpan:', form.value);
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.profile-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.btn-primary, .btn-secondary {
  color: white;
}
</style>
