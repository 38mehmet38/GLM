// GLM Transpiler Modülü
// Bu modül GLM dilindeki kodları JavaScript'e dönüştürür.

// Ana transpile fonksiyonu
function transpileGLM(code) {
    let lines = code.split('\n');
    let jsLines = [];

    // Keyword eşlemeleri
    const keywordMap = {
        'sabit': 'const',
        'olsun': 'let',
        'işlev': 'function',
        'yazdır': 'console.log',
        'eğer': 'if',
        'değilse': 'else',
        'sürece': 'while',
        'döngü': 'for',
        'döndür': 'return',
        'eşzamanlı': 'async',
        'bekle': 'await',
        'getir': 'require',
        'sınıf': 'class',
        'dene': 'try',
        'yakala': 'catch',
        'fırlat': 'throw',
        'yeni': 'new',
        'bu': 'this',
        'dışaAktar': 'export',
        'varsayılan': 'default',
        'genişlet': 'extends',
        'üst': 'super',
        'durağan': 'static',
        'örneğiMi': 'instanceof',
        'türü': 'typeof',
        'sil': 'delete',
        'içinde': 'in',
        'öğesi': 'of',
        'yapıcı': 'constructor',
        'Hata': 'Error',
        'Matematik': 'Math'
    };

    // Özel fonksiyonlar için eşleme
    const specialFunctions = {
        'çalıştır': 'execSync'
    };

    for (let line of lines) {
        let jsLine = line;

        // Özel fonksiyon çağrılarını değiştir
        for (let [glmFunc, jsFunc] of Object.entries(specialFunctions)) {
            const regex = new RegExp(`(?<!\\w)${glmFunc}\\s*\\(`, 'g');
            jsLine = jsLine.replace(regex, `${jsFunc}(`);
        }

        // Keyword'leri değiştir, ama string içinde değil
        // Line'ı tokenize et ve değiştir
        let tokens = jsLine.split(/(\s+|[{}();,.])/);
        jsLine = tokens.map(token => {
            if (keywordMap[token]) {
                return keywordMap[token];
            }
            return token;
        }).join('');

        jsLines.push(jsLine);
    }

    // execSync için gerekli import ekle
    let finalCode = jsLines.join('\n');
    if (finalCode.includes('execSync')) {
        finalCode = `const { execSync } = require('child_process');\n${finalCode}`;
    }

    return finalCode;
}

module.exports = { transpileGLM };