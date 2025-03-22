<template>
  <div>
    <button @click="generatePDF">Download PDF</button>
    <div id="invoice" class="invoice-container">
      <h2>My Laundry</h2>
      <p>Jl. Sangkuriang - Cimahi</p>
      <p>No. Hp / WA: 081313797932</p>
      <p>Email: mylaundry@gmail.com</p>
      <p>Jam Operasional: Senin - Minggu | 08:00 - 19:00 WIB</p>
      <hr />

      <div class="customer-info">
        <p><strong>No. Order:</strong> {{ transaksi.orderId || 'LD-0006' }}</p>
        <p><strong>Nama Konsumen:</strong> {{ transaksi.pelanggan || 'Nieva' }}</p>
        <p><strong>Alamat:</strong> {{ transaksi.alamat || 'Cisangkan' }}</p>
        <p><strong>Jenis Kelamin:</strong> {{ transaksi.jenisKelamin || 'Perempuan' }}</p>
        <p><strong>No. Telp:</strong> {{ transaksi.noTelp || '0812345679' }}</p>
        <p><strong>Tanggal Selesai:</strong> {{ transaksi.tglSelesai || '2025-01-10' }}</p>
        <p><strong>Catatan Laundry:</strong> {{ transaksi.catatan || '5 kemeja, 20 kaos, 1 jeans' }}</p>
        <p><strong>Status Pembayaran:</strong> 
          <span :class="{'status': true, 'lunas': transaksi.status === 'Lunas', 'belum-lunas': transaksi.status !== 'Lunas'}">
            {{ transaksi.status || 'Lunas' }}
          </span>
        </p>
        <p><strong>Status Pengambilan Baju:</strong> 
          <span class="status diambil">Sudah Diambil</span>
        </p>
        <p><strong>Kasir:</strong> {{ transaksi.kasir || 'LASFii' }}</p>
      </div>

      <table class="order-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Terima</th>
            <th>Jenis Layanan</th>
            <th>Tanggal Selesai</th>
            <th>Berat Cucian</th>
            <th>Harga/Kg</th>
            <th>Total Bayar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{{ transaksi.tglTerima || '2025-01-07' }}</td>
            <td>{{ transaksi.jenisLayanan || 'Laundry + Setrika' }}</td>
            <td>{{ transaksi.tglSelesai || '2025-01-10' }}</td>
            <td>{{ transaksi.jumlahKg || '20' }} Kg</td>
            <td>Rp. {{ transaksi.tarif ? transaksi.tarif.toLocaleString() : '20,000' }}</td>
            <td>Rp. {{ transaksi.totalBayar ? transaksi.totalBayar.toLocaleString() : '140,000' }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="total">TOTAL PESANAN: Rp. {{ transaksi.totalBayar ? transaksi.totalBayar.toLocaleString() : '140,000' }}</h3>

      <div class="keterangan">
        <h4>Keterangan:</h4>
        <p>1. Pengambilan cucian harus membawa nota</p>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      transaksi: {},
    };
  },
  created() {
    // Ambil data dari query params di router
    this.transaksi = this.$route.query;
  },
  methods: {
    generatePDF() {
      const invoice = document.getElementById("invoice");

      html2canvas(invoice, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
        pdf.save("Laundry_Invoice.pdf");
      });
    },
  },
};
</script>

<style>
.invoice-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 800px;
  background: #f8f9fa;
  border: 1px solid #ddd;
}

.customer-info p {
  margin: 5px 0;
}

.status {
  padding: 4px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

.lunas {
  background: green;
}

.belum-lunas {
  background: red;
}

.diambil {
  background: blue;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.order-table th, .order-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.total {
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.keterangan {
  margin-top: 15px;
}
</style>
