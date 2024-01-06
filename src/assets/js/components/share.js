// share input box display on page
document.querySelector("#share").innerHTML=`
 <form action="#" class="mt-5 p-2" onsubmit="return false">
   <input type="text" name="name" id="name" placeholder="Enter Your Name" class="form-control form-control-lg w-75 mx-auto" required>
   <div class="sm-box d-flex m-2">
     <button class="btn btn-outline-light w-25" onclick="share('w')"><img src="/assets/img/icon/whatsapp.png" alt="WhatsApp" class="img-fluid"></button>
     <button class="btn btn-outline-light w-25" onclick="share('f')"><img src="/assets/img/icon/facebook.png" alt="Facebook" class="img-fluid"></button>
     <button class="btn btn-outline-light w-25" onclick="share('t')"><img src="/assets/img/icon/telegram.png" alt="Telegram" class="img-fluid"></button>
     <button class="btn btn-outline-light w-25" onclick="share('x')"><img src="/assets/img/icon/twitter.png" alt="X (Twitter)" class="img-fluid"></button>
   </div>
 </form>`;

// read url params of website 
//Access the query string
const queryString = window.location.search; 
// Parse it into a URLSearchParams object
const params = new URLSearchParams(queryString); 
// Get individual parameter values
//const name = params.get('name');

// if param available then show name otherwise without name
 if(params.get('n')){
   document.querySelector(".wishing").innerHTML=`${params.get('n').replace(/-/g, " ")} Wishing You`;
 }else{
   document.querySelector(".wishing").innerHTML="Wishing You";
 }

// share button
function share(sm){
  event.preventDefault();
  let name = document.querySelector("#name").value.replace(/ /g,"-"); // get name from input and replace whitespace with hyphen
  let text= encodeURIComponent(`${window.location.protocol}//${window.location.hostname}${window.location.pathname}?n=${name}`);
  
  if(!name){
     document.querySelector("#name").focus();
     return false;
  }else{
   if(sm=="w"){
      window.location.href = `https://wa.me/?text=${text}`;
    }else if(sm=="f"){
      window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${text}`;
    }else if(sm=="t"){
      window.location.href = `https://t.me/share/url?url=&text=${text}`;
    }else if(sm=="x"){
      window.location.href = `https://twitter.com/intent/tweet?text=${text}`; }
   }
}