const hari = document.getElementById("hari")
const jam = document.getElementById("jam")
const menit = document.getElementById("menit")
const detik = document.getElementById("detik")
const rangeBar = document.getElementById("range")
const imgRun = document.getElementById("runActor")
const ketHari = document.getElementById("ketHari")
const pesan = document.querySelectorAll(".pesan .c-pesan")
const penutupC = document.querySelectorAll(".pesan .penutup-c")
const cvr = document.getElementById("cover")
const bgInput = document.getElementById("bgInput")
const awal = document.getElementsByClassName("awal")
const akhir = document.getElementsByClassName("akhir")

const waktuTujuan = new Date("April 22, 2023 14:27:00").getTime()
let perhitungan = ()=> {
  let waktuSekarang = new Date().getTime()
  const waktuSet = waktuTujuan - waktuSekarang
  let hari_a = Math.floor(waktuSet / (1000 * 60 * 60 * 24))
  let jam_a = Math.floor((waktuSet % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let menit_a = Math.floor((waktuSet % (1000 * 60 * 60)) / (1000 * 60))
  let detik_a = Math.floor((waktuSet % (1000 * 60)) / 1000)

  hari.innerText = hari_a
  jam.innerText = jam_a
  menit.innerText = menit_a
  detik.innerText = detik_a

  let hari_fix
  switch (hari_a) {
    case 30: hari_fix = 1; break;
    case 29: hari_fix = 2; break;
    case 28: hari_fix = 3; break;
    case 27: hari_fix = 4; break;
    case 26: hari_fix = 5; break;
    case 25: hari_fix = 6; break;
    case 24: hari_fix = 7; break;
    case 23: hari_fix = 8; break;
    case 22: hari_fix = 9; break;
    case 21: hari_fix = 10; break;
    case 20: hari_fix = 11; break;
    case 19: hari_fix = 12; break;
    case 18: hari_fix = 13; break;
    case 17: hari_fix = 14; break;
    case 16: hari_fix = 15; break;
    case 15: hari_fix = 16; break;
    case 14: hari_fix = 17; break;
    case 13: hari_fix = 18; break;
    case 12: hari_fix = 19; break;
    case 11: hari_fix = 20; break;
    case 10: hari_fix = 21; break;
    case 9: hari_fix = 22; break;
    case 8: hari_fix = 23; break;
    case 7: hari_fix = 24; break;
    case 6: hari_fix = 25; break;
    case 5: hari_fix = 26; break;
    case 4: hari_fix = 27; break;
    case 3: hari_fix = 28; break;
    case 2: hari_fix = 29; break;
    case 1: hari_fix = 30; break;
  }

  let jarakImg = 10
  let jarakKetHari = 3
  if (Math.floor((hari_fix / 30)*100 >= 80)) {
    jarakKetHari = -20
    jarakImg = 20
  }
  rangeBar.style.width = `${Math.floor((hari_fix / 30)*100)}%`
  rangeBar.innerText = `${Math.floor((hari_fix / 30)*100)}%`
  ketHari.style.left = `${(hari_fix /30)*100 + jarakKetHari}%`
  ketHari.innerText = `h-${30 - hari_a}`
  imgRun.style.left = `${(hari_fix /30)*100 - jarakImg}%`
  //console.log(Math.floor(( hari_fix / 30))*100)
  if (parseInt(pesan[0].getAttribute("data-hari")) <= hari_fix) {
    pesan[0].classList.add("animPesan")
    penutupC[0].style.display = "none"
  }
  if (parseInt(pesan[1].getAttribute("data-hari")) <= hari_fix) {
    pesan[1].classList.add("animPesan")
    penutupC[1].style.display = "none"
  }
  if (parseInt(pesan[2].getAttribute("data-hari")) <= hari_fix) {
    pesan[2].classList.add("animPesan")
    penutupC[2].style.display = "none"
  }
  if (parseInt(pesan[3].getAttribute("data-hari")) <= hari_fix) {
    pesan[3].classList.add("animPesan")
    penutupC[3].style.display = "none"
  }
  if (parseInt(pesan[4].getAttribute("data-hari")) <= hari_fix) {
    pesan[4].classList.add("animPesan")
    penutupC[4].style.display = "none"
  }
  if (parseInt(pesan[5].getAttribute("data-hari")) <= hari_fix) {
    pesan[5].classList.add("animPesan")
    penutupC[5].style.display = "none"
  }
  //console.log()
  if (hari_a < 1 && jam_a < 1 && menit_a < 1 && detik_a < 1) {
    hari.innerText = 0
    jam.innerText = 0
    menit.innerText = 0
    detik.innerText = 0
    clearInterval(interVL)
    rangeBar.style.width = `100%`
    rangeBar.innerText = `100%`
    ketHari.setAttribute("id", "ketHariAkhir")
    ketHari.innerText = 'Alhamdulillah selesai'
    ketHari.style.padding = "5px"
    ketHari.style.letterSpacing = "1px"
    ketHari.style.fontWeight = "bold"
    imgRun.style.display = "none"
    awal[0].style.display = "none"
    akhir[0].style.display = "block"
    lopPesan()
  }else if(hari_a < 1){
    rangeBar.style.width = `99%`
    rangeBar.innerText = `99%`
    ketHari.innerText = 'h-29'
    ketHari.style.left = '78%'
    imgRun.style.display = "block"
    imgRun.style.left = "80%"
    awal[0].style.display = "block"
    akhir[0].style.display = "none"
    lopPesan()
  }
    
}
function lopPesan(){
  for(let i = 0; i < 6; i++){
    pesan[i].classList.add("animPesan")
    penutupC[i].style.display = "none"
  }
}
function pesanTimbul(pesan, stiker) {
  const psnTimbul = document.getElementById("psnTimbul")
  const psnTimbulImg = document.querySelector("#psnTimbul img")
  const psnTimbulP = document.querySelector("#psnTimbul p")
  const dataImg = [];

  psnTimbul.style.width = "100%"
  psnTimbul.style.height = "100%"
  psnTimbul.style.zIndex = "9"
  psnTimbulImg.src = stiker
  psnTimbulP.innerHTML = pesan
  //console.log(pesan)
}
function exitPesan(psnTimbul) {
  psnTimbul.style.width = "0"
  psnTimbul.style.height = "0"
  psnTimbul.style.zIndex = "-3"
  if (psnTimbul.getAttribute("data-ok") == "ok") {
    musik(document.getElementById("audio"))
  }
}
function belumWaktunya(pesan) {
  alert("Belum waktunya di buka !")
}
function musik(audio) {
  if (audio.getAttribute("data-play") == "false") {
    audio.play()
    audio.loop = true
  }
}
function gantiWallpaper(wallpaper, yangMana) {
  wallpaper.style.backgroundImage = `url('${yangMana}')`
  //console.log(yangMana)
}
function cekRequest(i) {
  if (i.checked == true) {
    fullLayar()
  } else {
    exitFullLayar()
  }
}
function fullLayar() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }

}

function exitFullLayar() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }

}
setInterval(musik, 206000)
let interVL = setInterval(perhitungan, 1000)