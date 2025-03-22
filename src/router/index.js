import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/views/LoginPage.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";

import Dashboard from "@/views/admin/Dashboard.vue";
import Karyawan from "@/views/admin/Karyawan.vue";
import Pelanggan from "@/views/admin/Pelanggan.vue";
import Layanan from "@/views/admin/Layanan.vue";
import Transaksi from "@/views/admin/Transaksi.vue";
import Pengeluaran from "@/views/admin/Pengeluaran.vue";
import Laporan from "@/views/admin/Laporan.vue";
import ProfilePage from "@/views/admin/ProfilePage.vue";
import TambahPengeluaran from "@/views/admin/TambahPengeluaran.vue";
import CetakNota from "@/views/admin/CetakNota.vue";
import TambahKaryawan from "@/views/admin/TambahKaryawan.vue";
import EditKaryawan from "@/views/admin/EditKaryawan.vue";
import TambahPelanggan from "@/views/admin/TambahPelanggan.vue";
import EditPelanggan from "@/views/admin/EditPelanggan.vue";

import Home from "@/views/user/Home.vue";
import LaundryTracking from "@/views/user/LaundryTracking.vue";
import HomeView from "@/views/user/HomeView.vue";
import OutletDetail from "@/views/user/OutletDetail.vue";
import DetailLaundry from "@/views/user/DetailLaundry.vue"; 
import Services from '../components/Services.vue';
import About from '../components/LaundrySection.vue';



const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: '/tracking', component: LaundryTracking },
  { path: '/Service', component: Services},
  { path: '/About', component: About},
  { path: "/home", component: HomeView, name: "HomeView" },
  { path: "/outlet/:id", component: OutletDetail, name: "OutletDetail", props: true },
  { path: "/detail-laundry/:id", component: DetailLaundry, name: "DetailLaundry", props: true },

  { path: "/login", component: LoginPage, name: "Login" },

  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "dashboard", component: Dashboard, name: "Dashboard" },
      { path: "karyawan", component: Karyawan, name: "Karyawan" },
      { path: "pelanggan", component: Pelanggan, name: "Pelanggan" },
      { path: "layanan", component: Layanan, name: "Layanan" },
      { path: "transaksi", component: Transaksi, name: "Transaksi" },
      { path: "pengeluaran", component: Pengeluaran, name: "Pengeluaran" },
      { path: "laporan", component: Laporan, name: "Laporan" },
      { path: "profile", component: ProfilePage, name: "Profile" },
      { path: "tambahpengeluaran", component: TambahPengeluaran, name: "TambahPengeluaran" },
      { path: "nota-view", component: CetakNota, name: "CetakNota" },

      { path: "tambah-karyawan", component: TambahKaryawan, name: "TambahKaryawan" },
      { path: "edit-karyawan/:id", component: EditKaryawan, name: "EditKaryawan", props: true },
      { path: "tambah-pelanggan", component: TambahPelanggan, name: "TambahPelanggan" },
      { path: "edit-pelanggan/:id", component: EditPelanggan, name: "EditPelanggan", props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
