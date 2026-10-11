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
document.getElementById("top").innerHTML =
  '<div class="wrap"><a class="brand" href="index.html"><i></i>'+BRAND+'</a><nav>'+nav+
  '</nav><div class="lang"><button id="pl">PL</button><button id="en">EN</button></div></div>';
document.getElementById("foot").innerHTML = '<div class="wrap">© 2026 '+BRAND+'</div>';
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
