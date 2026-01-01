// Konsola yazı yazdırma
console.log("Merhaba JavaScript!");

// Basit değişken
let isim = "Ahmet";
console.log("İsim:", isim);

// Butona tıklayınca mesaj göster
const buton = document.getElementById("btnSelam");

buton.addEventListener("click", function () {
  alert("Merhaba " + isim + "!");
});
