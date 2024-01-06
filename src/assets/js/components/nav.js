export default function nav(){
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
          <a class="nav-link" href="/pages/policies/privacy">Privacy Policy</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="/pages/policies/terms">Terms &amp; Conditions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}