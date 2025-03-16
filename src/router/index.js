import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Karyawan from '@/views/Karyawan.vue';
import Pelanggan from '@/views/Pelanggan.vue';
import Layanan from '@/views/Layanan.vue';
import Transaksi from '@/views/Transaksi.vue';
import Pengeluaran from '@/views/Pengeluaran.vue';
import Laporan from '@/views/Laporan.vue';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import TambahPengeluaran from '@/views/TambahPengeluaran.vue';

const routes = [
  {path: '/', component: LoginPage},
  {
    path: '/',
    component: BaseLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'karyawan', component: Karyawan },
      { path: 'pelanggan', component: Pelanggan },
      { path: 'layanan', component: Layanan },
      { path: 'transaksi', component: Transaksi },
      { path: 'pengeluaran', component: Pengeluaran },
      { path: 'laporan', component: Laporan },
      {path: '/profile', component: ProfilePage},
      {path: '/TambahPengeluaran', component: TambahPengeluaran },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
