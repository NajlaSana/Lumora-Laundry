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
body, html {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
}

.footer {
    height: 45vh; /* 10% dari tinggi layar */
    width: 100vw; /* Lebar penuh */
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.footer {
  background-color: #B1CFFF;
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