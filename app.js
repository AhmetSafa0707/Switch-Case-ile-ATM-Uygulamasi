/*
 Yapılacak İşlemler

1-Bakiye görüntüleme
2-Para çekme
3-Para Yatırma
4-Çıkış

*/

let yeniSatir = "\n";
let bakiye = 2500;

let secenek = prompt("Hoşgeldiniz...Lütfen yapmak istediğiniz işlemi seçin" + yeniSatir
    + "1-Bakiye görüntüleme" + yeniSatir + "2-Para Çekme" + yeniSatir + "3-Para Yatırma" + yeniSatir + "4-Çıkış");
    
switch (secenek) {

    case "1":
        alert("Bakiyeniz " + bakiye + " lira.")
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz miktarı giriniz:"));

        if (cekilecekTutar < bakiye) {
            alert(cekilecekTutar + " lira çekildi...Yeni bakiyeniz: " + (bakiye - cekilecekTutar))
        }
        else
            alert("Bakiye yetersiz...Lütfen geçerli bir tutar giriniz")
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz miktarı giriniz:"));

        alert(yatirilacakTutar + " lira yatırıldı...Yeni bakiyeniz: " + (bakiye + yatirilacakTutar))
        break;

    case "4":
        alert("Çıkış yapılıyor...İyi günler dileriz.")
        break;

    default:
        alert("Geçerli bir rakam giriniz!")
        break;
}



