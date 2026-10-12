// ====== TU EDYTUJESZ ======
var BRAND = "Autofilm"; // nazwa marki (pokazuje się na każdej podstronie)
var LINKS = {
  "buy-autofilm": "#", // link do Gumroad: Autofilm (subskrypcja)
  "buy-silence": "#",  // link do Gumroad: wtyczka do usuwania ciszy
  "buy-whisper": "#"   // link do Gumroad: wtyczka Whisper (napisy)
};
// ==========================
var PAGES = [
  ["index.html","Start","Home"],
  ["autofilm.html","Autofilm","Autofilm"],
  ["wtyczki.html","Wtyczki","Plugins"],
  ["faq.html","FAQ","FAQ"]
];
var here = location.pathname.split("/").pop() || "index.html";
var nav = PAGES.map(function(p){
  return '<a href="'+p[0]+'"'+(p[0]===here?' aria-current="page"':'')+'><span data-pl>'+p[1]+'</span><span data-en>'+p[2]+'</span></a>';
}).join("");
function S(pl,en){return '<span data-pl>'+pl+'</span><span data-en>'+en+'</span>';}
var logo='<a class="brand" href="index.html"><i>'+BRAND.charAt(0)+'</i>'+BRAND.toUpperCase()+'<span class="sub">'+S("Filmy z tekstu<br>i wtyczki","Videos from text<br>and plugins")+'</span></a>';
document.getElementById("top").innerHTML =
  '<div class="wrap">'+logo+'<nav>'+nav+'</nav><div class="right"><div class="lang"><button id="pl">PL</button><button id="en">EN</button></div><a class="btn line" href="autofilm.html">'+S("Zobacz produkty","View products")+'</a></div></div>';
document.getElementById("foot").innerHTML = '<div class="wrap"><div class="fcols">'+
  '<div>'+logo+'<p style="margin-top:12px">'+S("Narzędzia do montażu i tworzenia filmów.","Tools for editing and creating videos.")+'</p></div>'+
  '<div><h4>'+S("Szybkie linki","Quick links")+'</h4><a href="index.html">'+S("Start","Home")+'</a><a href="autofilm.html">Autofilm</a><a href="wtyczki.html">'+S("Wtyczki","Plugins")+'</a><a href="faq.html">FAQ</a></div>'+
  '<div><h4>'+S("Produkty","Products")+'</h4><a href="autofilm.html">Autofilm</a><a href="wtyczki.html">Speech Cutter</a><a href="wtyczki.html">Whisper</a></div>'+
  '<div class="box"><h4>'+S("Kup na Gumroad","Buy on Gumroad")+'</h4><p>'+S("Płatność i pobranie plików odbywają się na Gumroad.","Payment and file download happen on Gumroad.")+'</p><a class="btn" href="autofilm.html">'+S("Zobacz produkty","View products")+'</a></div>'+
  '</div><small>© 2026 '+BRAND+'</small></div>';
for (var id in LINKS) { document.querySelectorAll("[data-link="+id+"]").forEach(function(e){e.href=LINKS[id];}); }
function setLang(l){
  document.documentElement.classList.toggle("en", l==="en");
  document.documentElement.lang = l;
  document.getElementById("pl").setAttribute("aria-pressed", l==="pl");
  document.getElementById("en").setAttribute("aria-pressed", l==="en");
  try{localStorage.setItem("lang", l)}catch(e){}
}
document.getElementById("pl").onclick=function(){setLang("pl")};
document.getElementById("en").onclick=function(){setLang("en")};
var s=null; try{s=localStorage.getItem("lang")}catch(e){}
setLang(s || ((navigator.language||"").indexOf("pl")===0 ? "pl" : "en"));
