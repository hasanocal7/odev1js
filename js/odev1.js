let span = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

span.innerHTML = prompt("Adınızı giriniz: ")
function anlikZamaniGoster() {
    const suan = new Date(); // Geçerli tarih ve saat bilgisini alır
    const saat = suan.getHours(); // Saati alır
    const dakika = suan.getMinutes(); // Dakikayı alır
    const saniye = suan.getSeconds(); // Saniyeyi alır
    const gunler = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    const gun = suan.getDay(); // Günü alır
  
    // Zamanı bir metin olarak biçimlendirir
    const zamanMetni = `${saat.toString().padStart(2, '0')}:${dakika.toString().padStart(2, '0')}:${saniye.toString().padStart(2, '0')} ${gunler[gun]}`;
  
    // HTML içinde bir elementi güncelleyerek zamanı gösterir
    myClock.innerHTML = zamanMetni;
  }
  
  // Her saniye yeniden çağırarak zamanı güncel tutar
  setInterval(anlikZamaniGoster, 1000);