document.getElementById("but").addEventListener("click", change);

var index = 0;
var btn = document.getElementById('but');
var text = document.getElementById('mes');

var mes = ["Hi", "W cb buat ini, hanya khusus utk lu", "Lumayan susah sih, tp worth it lah", "Tgl 27 lu kan jalan2, sun hong ya",
"Ingat jaga diri, jan begadang, makan tepat waktu", "Dan juga jangan stress ya ππ", "Itu aj sih dr w", "And last, love you β€οΈ", 
"Bye2, sry ag lebayππ"];

function change() {
  text.innerHTML = mes[index];
  index++;
  index %= mes.length
}