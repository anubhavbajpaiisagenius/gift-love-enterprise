document.documentElement.classList.add("js");
var WA="919999999999"; // TODO: replace with your WhatsApp number (country code + number, no +)
var $=function(i){return document.getElementById(i)};
var cur=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".links a").forEach(function(a){var h=a.getAttribute("href");if(h===cur||h.replace(".html","")===cur)a.classList.add("on")});
$("lk").previousElementSibling.onclick=function(){$("lk").classList.toggle("open")};
$("wl").href=$("wf").href="https://wa.me/"+WA;
if($("f")){
function calc(){var a=+$("n3").value||0,b=+$("n2").value||0,c=+$("n1").value||0,t=a+b+c,bd=+$("bd").value||0;
$("tot").textContent=t;$("per").textContent=(t&&bd)?"About \u20B9"+Math.round(bd/t).toLocaleString("en-IN")+" per person on average.":""}
["n1","n2","n3","bd"].forEach(function(i){$(i).addEventListener("input",calc)});
$("f").addEventListener("submit",function(e){e.preventDefault();
var items=Array.from($("it").selectedOptions).map(function(o){return o.value}).join(", ");
var m="Hi Gift Love! Hamper enquiry%0A"+encodeURIComponent("Company: "+$("co").value+"\nName: "+$("nm").value+"\nPhone: "+$("ph").value+"\nTotal budget: \u20B9"+$("bd").value+"\nPremium: "+$("n3").value+", Deluxe: "+$("n2").value+", Normal: "+$("n1").value+"\nItems: "+items+"\nNotes: "+$("nt").value);
window.open("https://wa.me/"+WA+"?text="+m,"_blank")})}

var D={n:{t:"Normal",d:"A neat, useful festive box for your wider team.",i:[["📓","Customised diary or pen"]]},
d:{t:"Deluxe",d:"More items and a finer finish, for managers and partners.",i:[["📓","Customised diary"],["🖋️","Pen"],["🌸","Perfume"]]},
p:{t:"Premium",d:"Our fullest box with a murti, for clients and leadership.",i:[["📓","Customised diary"],["🖋️","Pen"],["🌸","Perfume"],["🪔","Murti"]]}};
function show(k){var x=D[k],h="";x.i.concat([["🏷️","Your logo on the box"],["✉️","Personal letter"]]).forEach(function(a,n){h+='<div class="tile'+(n>=x.i.length?" pk":"")+'" style="animation-delay:'+n*60+'ms"><span>'+a[0]+'</span>'+a[1]+'</div>'});
$("tiles").innerHTML=h;$("ptitle").textContent=x.t+" box";$("pdesc").textContent=x.d+" Final contents are confirmed on WhatsApp within 10\u201315 minutes."}
if($("tiles")){document.querySelectorAll(".tab").forEach(function(b){b.onclick=function(){document.querySelectorAll(".tab").forEach(function(t){t.classList.remove("on")});b.classList.add("on");show(b.dataset.t)}});show("d")}

["n3","n2","n1"].forEach(function(i){var el=$(i);if(!el)return;var w=document.createElement("div");w.className="step";
function mk(t,d){var b=document.createElement("button");b.type="button";b.textContent=t;b.setAttribute("aria-label",d>0?"More":"Fewer");b.onclick=function(){el.value=Math.max(0,(+el.value||0)+d*(d>0?1:1));el.dispatchEvent(new Event("input"))};return b}
el.parentNode.insertBefore(w,el);w.appendChild(mk("\u2212",-1));w.appendChild(el);w.appendChild(mk("+",1))});

// ---- UI polish: header state, menu, scroll reveal ----
(function(){
var hd=document.querySelector("header"),lk=$("lk");
function sc(){hd.classList.toggle("sc",window.scrollY>12)}sc();addEventListener("scroll",sc,{passive:true});
lk.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){lk.classList.remove("open")})});
document.addEventListener("click",function(e){if(!e.target.closest("nav"))lk.classList.remove("open")});
var sel="section .wrap > *, .cta2 .wrap > *, .steps > *, .grid > *, .gal > *, .stats > *, .occ > *, .tl > *, details, .formgrid > *";
var els=Array.prototype.slice.call(document.querySelectorAll(sel));
if(!("IntersectionObserver" in window)){return}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
els.forEach(function(el){
  if(el.closest(".panel")||el.matches(".steps,.grid,.gal,.stats,.occ,.tl,.formgrid,.two,.panel"))return;
  el.classList.add("rv");
  var sib=Array.prototype.indexOf.call(el.parentNode.children,el);
  if(el.parentNode.matches(".steps,.grid,.gal,.stats,.occ,.tl"))el.style.transitionDelay=(sib%4)*90+"ms";
  io.observe(el)});
setTimeout(function(){document.querySelectorAll(".rv:not(.in)").forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight)el.classList.add("in")})},600);
})();
