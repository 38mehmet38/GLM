// GLM Derleyicisi Testleri

const { transpileGLM } = require('../src/transpiler');
const fs = require('fs');

console.log('GLM Transpiler Testleri Başlıyor...');

// Örnek GLM kodu
const glmCode = `sabit dükkan = "Mehmet Cloud"
işlev selamla(isim) {
    yazdır("Selam " + isim + ", " + dükkan + " hazır!")
}
selamla("Şefim")

// Sınıf örneği
sınıf Kişi {
    yapıcı(isim) {
        bu.isim = isim
    }
    selamVer() {
        yazdır("Merhaba, ben " + bu.isim)
    }
}
olsun kişi = yeni Kişi("Ahmet")
kişi.selamVer()

// Try-catch örneği
dene {
    fırlat yeni Hata("Test hatası")
} yakala (hata) {
    yazdır("Hata yakalandı: " + hata.message)
}

// Terminal komutu
yazdır("Terminal komutu çalışıyor:")
çalıştır("echo 'Merhaba Dünya'")`;

// Transpile et
const jsCode = transpileGLM(glmCode);
console.log('Transpiled JS Kodu:');
console.log(jsCode);

// JS kodunu çalıştır
try {
    eval(jsCode);
    console.log('Test başarılı!');
} catch (error) {
    console.error('Test hatası:', error.message);
}