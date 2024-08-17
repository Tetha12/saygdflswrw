var pesanpertama = document.querySelector(".pesan-pertama");
var pesankedua = document.querySelector(".pesan-kedua");
var pesanketiga = document.querySelector(".pesan-ketiga");
var pesankeempat = document.querySelector(".pesan-keempat");
var pesankelima = document.querySelector(".pesan-kelima");

// Tombol Lanjut
var lanjut1 = document.getElementById('lanjut1')
var lanjut2 = document.getElementById('lanjut2')
var lanjut3 = document.getElementById('lanjut3')
var lanjut4 = document.getElementById('lanjut4')

// Tombol Kembali
var kembali2 = document.getElementById('kembali2')
var kembali3 = document.getElementById('kembali3')
var kembali4 = document.getElementById('kembali4')

// Lanjut

lanjut1.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "block"
    pesanketiga.style.display = "none"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "none"
})
lanjut2.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "none"
    pesanketiga.style.display = "block"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "none"
})
lanjut3.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "none"
    pesanketiga.style.display = "none"
    pesankeempat.style.display = "block"
    pesankelima.style.display = "none"
})
lanjut4.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "none"
    pesanketiga.style.display = "none"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "block"
})

// tombol Kembali
kembali2.addEventListener('click',function(){
    pesanpertama.style.display = "block"
    pesankedua.style.display = "none"
    pesanketiga.style.display = "none"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "none"
})
kembali3.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "block"
    pesanketiga.style.display = "none"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "none"
})
kembali4.addEventListener('click',function(){
    pesanpertama.style.display = "none"
    pesankedua.style.display = "none"
    pesanketiga.style.display = "block"
    pesankeempat.style.display = "none"
    pesankelima.style.display = "none"
})


