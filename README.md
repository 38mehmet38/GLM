# GLM Programlama Dili Derleyicisi

GLM, Python, JavaScript ve Kotlin'in en iyi özelliklerini harmanlayan, Türkçe sözdizimli bir programlama dilidir. Bu proje, GLM dilindeki kodları JavaScript'e dönüştüren bir transpiler sağlar.

## Özellikler

- **Okunabilirlik**: Python'dan esinlenilen basit ve temiz sözdizimi.
- **Asenkron Hız**: JavaScript'in olay döngüsü ve async/await mekanizmaları.
- **Güvenlik**: Kotlin'den null safety ve modern veri sınıfları.
- **Türkçe Sözdizimi**: Komutlar Türkçe, çakışma olmadan benzersiz.
- **Tam JS Desteği**: Sınıflar, kalıtım, hata yönetimi, modüller, terminal komutları.
- **Performans**: Hızlı tokenize ve dönüştürme algoritması.
- **Interactive REPL**: GLM kodunu yazıp anında çalıştırın.

## Sözdizimi Kuralları

| GLM Komutu | JavaScript Eşdeğeri | Açıklama |
|------------|---------------------|----------|
| `sabit` | `const` | Sabit değişken tanımlama |
| `olsun` | `let` | Değişken tanımlama |
| `işlev` | `function` | Fonksiyon tanımlama |
| `yazdır` | `console.log` | Konsola yazdırma |
| `eğer` | `if` | Koşul ifadesi |
| `değilse` | `else` | Aksi takdirde |
| `sürece` | `while` | Döngü |
| `döngü` | `for` | Döngü |
| `döndür` | `return` | Değer döndürme |
| `eşzamanlı` | `async` | Asenkron fonksiyon |
| `bekle` | `await` | Asenkron bekleme |
| `getir` | `require` | Modül getirme |
| `sınıf` | `class` | Sınıf tanımlama |
| `yapıcı` | `constructor` | Yapıcı fonksiyon |
| `dene` | `try` | Hata yakalama bloğu |
| `yakala` | `catch` | Hata yakalama |
| `fırlat` | `throw` | Hata fırlatma |
| `yeni` | `new` | Yeni nesne oluşturma |
| `bu` | `this` | Geçerli nesne referansı |
| `dışaAktar` | `export` | Modül dışa aktarma |
| `varsayılan` | `default` | Varsayılan dışa aktarma |
| `genişlet` | `extends` | Sınıf genişletme |
| `üst` | `super` | Üst sınıf referansı |
| `durağan` | `static` | Statik üye |
| `örneğiMi` | `instanceof` | Tür kontrolü |
| `türü` | `typeof` | Değişken türü |
| `sil` | `delete` | Özellik silme |
| `içinde` | `in` | Özellik kontrolü |
| `öğesi` | `of` | Döngü öğesi |
| `çalıştır` | `execSync` | Terminal komutu çalıştırma |
| `Hata` | `Error` | Hata sınıfı |
| `Matematik` | `Math` | Matematik nesnesi |

## Kurulum

1. Node.js'i yükleyin (sürüm 14+ önerilir).
2. Projeyi klonlayın: `git clone https://github.com/38mehmet38/GLM.git`
3. Bağımlılıkları yükleyin: `npm install`
4. Derleyiciyi global olarak yükleyin: `npm link`

## Kullanım

### CLI ile Derleme

```bash
glm örnek.glm
```

### Çalıştırma

```bash
glm örnek.glm --çalıştır
```

### Interactive REPL

```bash
npm run repl
```

### Programatik Kullanım

```javascript
const { transpileGLM } = require('glm-derleyici');
const jsCode = transpileGLM('yazdır("Merhaba")');
```

## Teknik Detaylar

- **Giriş**: .glm uzantılı dosyalar
- **Çıkış**: Node.js üzerinde çalışacak JavaScript kodu
- **Platform**: Cross-platform
- **Dil**: Tamamen JavaScript ile yazılmış
- **Performans**: Tokenize tabanlı hızlı dönüştürme

## Geliştirme

Testleri çalıştırmak için: `npm test`

## Lisans

MIT Lisansı altında lisanslanmıştır.