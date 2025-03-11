<template>
  <div class="login-container">
    <div class="card login-card shadow-lg rounded-4">
      <div class="row g-0">
        <div class="col-md-5 bg-light d-flex align-items-center justify-content-center rounded-start-4">
          <div class="text-center">
            <img src="/login.png" alt="Login Illustration" class="img-fluid p-1">
            </div>
        </div>
        <div class="col-md-7">
          <div class="card-body p-5">
            <h2 class="card-title text-center mb-4 welcome-title">Welcome Back</h2>
            <p class="text-center text-muted mb-3">Please enter your details</p>
            
            <form @submit.prevent="handleLogin" class="login-form">
              <div class="mb-4">
                <label for="username" class="form-label">Username</label>
                <input 
                  type="text" 
                  class="form-control py-2" 
                  id="username" 
                  v-model="username" 
                  placeholder="Enter your username"
                >
              </div>
              
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <div class="input-group">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control py-2" 
                    id="password" 
                    v-model="password" 
                    placeholder="Enter your password"
                  >
                  <button 
                    class="btn btn-outline-secondary" 
                    type="button" 
                    @click="togglePasswordVisibility"
                  >
                    <i :class="showPassword ? 'bi-eye' : 'bi-eye-slash'"></i>
                  </button>
                </div>
              </div>
              
              <div class="mb-4 form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="rememberMe" 
                  v-model="rememberMe"
                >
                <label class="form-check-label" for="rememberMe">
                  Remember me
                </label>
              </div>
              
             <button 
                type="submit" 
                class="btn btn-primary w-100 py-2 rounded-5"
                @click="goToDashboard"
              >
                LOGIN
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const router = useRouter();

const goToDashboard = () => {
  router.push('/dashboard');
};

const handleLogin = () => {
  console.log('Login attempted', {
    username: username.value,
    rememberMe: rememberMe.value
  });
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');

.welcome-title {
  font-family: 'Merriweather', serif;
  color: #333;
}
</style>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #4169E1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.login-card {
  width: 800px;
  max-width: 90%;
}

.login-form {
  padding: 30px;
}

.form-control, .btn {
  padding: 12px 15px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .login-card .col-md-5 {
    display: none; /* Hide illustration on smaller screens */
  }
  
  .login-card .col-md-7 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>