let kullaniciSayaci = 0;
let bilgisayarinSayaci = 0;



function bilgisayarHamlesiAl() {
  return ["tas", "kagit", "makas"][Math.floor(Math.random() * 3)];
}

function kazananBelirle(kullaniciHamlesi, bilgisayarHamlesi) {
  if (kullaniciHamlesi === bilgisayarHamlesi) {
    return "Berabere";
  } else if (
    (kullaniciHamlesi === "tas" && bilgisayarHamlesi === "makas") ||
    (kullaniciHamlesi === "kagit" && bilgisayarHamlesi === "tas") ||
    (kullaniciHamlesi === "makas" && bilgisayarHamlesi === "kagit")
  ) {
    return "Oyuncu Kazandi";
  } else {
    return "Bilgisayar Kazandi";
  }
}

tas.addEventListener("click", function () {
  let bilgisayarHamlesi = bilgisayarHamlesiAl();
  computerBtn.innerText = bilgisayarHamlesi;
  let sonuc = kazananBelirle("tas", bilgisayarHamlesi);
  winner.innerText = sonuc;

  if (sonuc === "Bilgisayar Kazandi") {
    bilgisayarinSayaci++;
    bilgisayar.innerText = `Bilgisayar: ${bilgisayarinSayaci}`;
  } else if (sonuc === "Oyuncu Kazandi") {
    kullaniciSayaci++;
    gamer.innerText = `Oyuncu: ${kullaniciSayaci}`;
  }
});

kagit.addEventListener("click", function () {
  let bilgisayarHamlesi = bilgisayarHamlesiAl();
  computerBtn.innerText = bilgisayarHamlesi;
  let sonuc = kazananBelirle("kagit", bilgisayarHamlesi);
  winner.innerText = sonuc; 

  if (sonuc === "Bilgisayar Kazandi") {
    bilgisayarinSayaci++;
    bilgisayar.innerText = `Bilgisayar: ${bilgisayarinSayaci}`;
  } else if (sonuc === "Oyuncu Kazandi") {
    kullaniciSayaci++;
    gamer.innerText = `Oyuncu: ${kullaniciSayaci}`;
  }
});

makas.addEventListener("click", function () {
  let bilgisayarHamlesi = bilgisayarHamlesiAl();
  computerBtn.innerText = bilgisayarHamlesi;
  let sonuc = kazananBelirle("makas", bilgisayarHamlesi);
  winner.innerText = sonuc; 

  if (sonuc === "Bilgisayar Kazandi") {
    bilgisayarinSayaci++;
    bilgisayar.innerText = `Bilgisayar: ${bilgisayarinSayaci}`;
  } else if (sonuc === "Oyuncu Kazandi") {
    kullaniciSayaci++;
    gamer.innerText = `Oyuncu: ${kullaniciSayaci}`;
  }
});

function scoreDelete() {
  kullaniciSayaci = 0;
  bilgisayarinSayaci = 0;
  gamer.innerText = 'Oyuncu: 0'; 
  bilgisayar.innerText = 'Bilgisayar: 0';
  winner.innerText = 'Kimse kazanmadi'; 
}
