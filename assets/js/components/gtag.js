export default function gtag(){
  // Google Tag Manager script
var script1 = document.createElement('script');
script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-RSDHYBR4R1';
script1.async = true;

// Configuration script
var script2 = document.createElement('script');
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-RSDHYBR4R1');
`;

// Append both scripts to the head
document.head.appendChild(script1);
document.head.appendChild(script2);
}