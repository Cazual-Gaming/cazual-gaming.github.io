// Navigation
document.querySelector("#nav").innerHTML= `<nav class="navbar navbar-expand-lg bg-light w-100">
  <div class="container-fluid fw-bold">
    <a class="navbar-brand p-2" href="#">Cazual Gaming</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item p-1">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="/privacy.html">Privacy Policy</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="/terms.html">Terms &amp; Conditions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

document.querySelector("#footer").innerHTML=`<footer class="bg-light text-lg-start">
  <div class="container p-4">
    <section class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <ul class="list-unstyled">
          <li><a href="/privacy.html" class="text-dark text-decoration-none">Privacy Policy</a></li>
          <li><a href="/terms.html" class="text-dark text-decoration-none">Terms and Conditions</a></li>
        </ul>
      </div>
    </section>
    <p class="text-muted text-center small mb-4 mb-lg-0">&copy; ${new Date().getFullYear()} Cazual Gaming</p>
  </div>
</footer>`


// read url params of website 
//Access the query string
const queryString = window.location.search; 
// Parse it into a URLSearchParams object
const params = new URLSearchParams(queryString); 
// Get individual parameter values
//const name = params.get('name');