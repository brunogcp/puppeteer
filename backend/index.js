const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

app.post('/generate-report', async (req, res) => {
    const { reportType } = req.body;
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Define o HTML para o tipo de relatório
    const reportHtml = {
        type1: `<html><body><h1>📊 Relatório Tipo 1</h1></body></html>`,
        type2: `<html><body><h1>📈 Relatório Tipo 2</h1></body></html>`
    };

    await page.setContent(reportHtml[reportType]);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    res.contentType('application/pdf');
    res.send(pdf); // 🚀 Envia o PDF gerado de volta ao frontend
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🌐 Servidor rodando na porta ${PORT}`));