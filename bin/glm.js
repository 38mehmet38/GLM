#!/usr/bin/env node

// GLM Derleyicisi CLI
// Bu dosya GLM dilindeki kodları JavaScript'e dönüştürür ve çalıştırır.

const fs = require('fs');
const path = require('path');
const { transpileGLM } = require('../src/transpiler');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Kullanım: glm <dosya.glm> [--çalıştır]');
    process.exit(1);
}

const inputFile = args[0];
const runFlag = args.includes('--çalıştır');
const outputFile = runFlag ? null : (args[1] || inputFile.replace('.glm', '.js'));

if (!fs.existsSync(inputFile)) {
    console.error(`Hata: ${inputFile} dosyası bulunamadı.`);
    process.exit(1);
}

const glmCode = fs.readFileSync(inputFile, 'utf8');
const jsCode = transpileGLM(glmCode);

if (runFlag) {
    console.log(`${inputFile} derleniyor ve çalıştırılıyor...`);
    try {
        eval(jsCode);
    } catch (error) {
        console.error('Çalıştırma hatası:', error.message);
    }
} else {
    fs.writeFileSync(outputFile, jsCode);
    console.log(`${inputFile} başarıyla ${outputFile} olarak derlendi.`);
}

// Eğer çıkış dosyası belirtilmemişse, çalıştırma kaldırıldı - modül olduğu için