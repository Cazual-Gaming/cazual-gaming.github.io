// ads by bgoogle 
export default function ads(){
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9681524722510358';
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}