export default function footer(){
  document.querySelector("#footer").innerHTML=`<footer class="bg-light text-lg-start">
  <div class="container p-4">
    <b class="text-center" style="color:#FFD700">Supported By Dhiraj Mishra</b>
    <p class="text-muted text-center small my-2 mb-lg-0">&copy; ${new Date().getFullYear()} Cazual Gaming</p>
  </div>
</footer>`;
}