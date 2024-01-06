// read url params of website 
//Access the query string
const queryString = window.location.search; 
// Parse it into a URLSearchParams object
const params = new URLSearchParams(queryString); 
// Get individual parameter values
//const name = params.get('name');

// if param available then show name otherwise without name
 if(params.get('n')){
   document.querySelector(".wishing").innerHTML=`${params.get('n').replace("-", " ")} Wishing You`;
 }else{
   document.querySelector(".wishing").innerHTML="Wishing You";
 }

// share button
function share(sm){
  event.preventDefault();
  let name = document.querySelector("#name").value.replace(" ","-"); // get name from input and replace whitespace with hyphen
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