<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- My Laundry -->
        <div class="col-md-3">
          <h5>My Laundry</h5>
          <p>
            Our mission is to provide fast, reliable, and high-quality laundry services 
            that make life easier for our customers, with convenience and care at every step.
          </p>
        </div>

        <!-- Company -->
        <div class="col-md-3">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Workers</a></li>
          </ul>
        </div>

        <!-- Help -->
        <div class="col-md-3">
          <h5>Help</h5>
          <ul class="list-unstyled">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-md-3">
          <h5>Contact</h5>
          <p>mylaundry@gmail.com</p>
          <p>+62 812 3456 678</p>
          <p>mylaundry</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #b1cfff; /* Warna biru muda */
  padding: 40px 0;
}

.footer h5 {
  font-weight: bold;
}

.footer p {
  color: #333;
  font-size: 14px;
}

.footer ul {
  padding: 0;
}

.footer ul li {
  list-style: none;
  margin-bottom: 8px;
}

.footer ul li a {
  text-decoration: none;
  color: #333;
}

.footer ul li a:hover {
  color: #0056b3;
}
</style>
