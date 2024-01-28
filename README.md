<div align="center">
  <h3 align="center">Puppeteer</h3>
  <div>
  <a href="https://bgcp.vercel.app/article/8b2284c6-80b4-4bef-b1bd-2f145a92414a">
  <img src="https://img.shields.io/badge/Download PDF (ENGLISH)-black?style=for-the-badge&logoColor=white&color=000000" alt="three.js" />
  </a>
  </div>
</div>

## 🚀 Introdução ao Puppeteer
Puppeteer é uma biblioteca Node.js poderosa que permite automatizar ações no Chrome ou Chromium, como captura de screenshots, geração de PDFs de páginas web, automação de testes, e scraping de conteúdo. Para desenvolvedores que desejam gerar relatórios em PDF diretamente do frontend, Puppeteer oferece uma solução robusta e flexível.

### 🌟 Principais Características:

- **⚡ Rápido e Eficiente**: Executa operações em páginas web de forma rápida e eficiente.
- **🔍 Automação de Testes**: Ideal para testes automatizados, incluindo testes end-to-end.
- **📸 Screenshots e PDFs**: Facilita a captura de screenshots e a geração de PDFs de páginas web.
- **🕵️‍♂️ Web Scraping**: Excelente para coletar informações de sites de forma programada.

## 🛠️ Instalação

### Pré-requisitos:

Puppeteer requer uma versão do Chrome ou Chromium para funcionar. Ao instalar o Puppeteer via npm, uma versão compatível do Chromium será automaticamente baixada. No entanto, se preferir usar uma versão específica do navegador, você pode configurar o Puppeteer para usar o executável desejado.
### Windows, Linux e macOS:

Puppeteer é instalado via npm, o gerenciador de pacotes do Node.js, e pode ser instalado em qualquer sistema operacional que suporte Node.js. Aqui estão os passos para a instalação:

```bash
npm install puppeteer
```

### Configuração do Navegador (Opicional):

Para usar um navegador específico, configure o caminho do executável no momento de lançar o Puppeteer:

```js
const browser = await puppeteer.launch({
    executablePath: '/caminho/para/o/chrome'
});

```

## 📊 Uso Básico

### Configuração Inicial:

🔧 Para começar a usar o Puppeteer, você primeiro precisa instalar a biblioteca e, em seguida, pode começar a escrever scripts que interajam com o navegador de forma automatizada.

### Exemplo Básico em Node.js:

Este exemplo demonstra como iniciar o navegador, abrir uma página, e tirar um screenshot:

```js
// index.js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();
```
<div style="page-break-after: always;"></div>

1. Executer o index.js:  `node index.js`
2. Deve gerar uma imagem do screenshot: `example.png`

## 📈 Geração de Relatórios com Puppeteer

### Teoria da Geração de Relatórios:

💡 A geração de relatórios em PDF é um requisito comum em muitos sistemas web, oferecendo uma forma conveniente e profissional de apresentar informações. 
### Motivo para Utilizar:

A utilização do Puppeteer para geração de relatórios em PDF diretamente de templates HTML oferece várias vantagens:

- - **⚡ Alta Precisão e Fidelidade**: Puppeteer renderiza o HTML como o Chrome ou Chromium, garantindo que o PDF gerado seja uma representação precisa do layout e design pretendidos.
- **🎨 Personalização**: Permite a criação de relatórios personalizados com facilidade, modificando o HTML/CSS conforme necessário.
- **🚀 Eficiência**: Automatiza o processo de geração de relatórios, economizando tempo e recursos.

### 👨‍💻 Implementação de um Sistema de Geração de Relatórios:

#### 1. Configuração:

- **Frontend**: Aplicação React com um componente de seleção para o tipo de relatório.
- **Backend**: Servidor Node.js com Puppeteer para gerar o PDF a partir do HTML do relatório selecionado.

#### 2. Exemplo Prático:

##### Frontend (React):

Componente React com um `<select>` para escolher o tipo de relatório:

1. Criar o front em React: `npm create vite@latest`
2. Modifica o App

```jsx
import React, { useState } from 'react';

function ReportSelector() {
    const [reportType, setReportType] = useState('');

    const handleGenerateReport = async () => {
        const response = await fetch(`http://localhost:3000/generate-report`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reportType })
        });
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank'); // 📄 Abre o PDF gerado em uma nova aba
        }
    };

    return (
        <div>
            <select value={reportType} onChange={e => setReportType(e.target.value)}>
                <option value="">🔄 Selecione o Tipo de Relatório</option>
                <option value="type1">📊 Relatório Tipo 1</option>
                <option value="type2">📈 Relatório Tipo 2</option>
            </select>
            <button onClick={handleGenerateReport}>🖨️ Gerar Relatório</button>
        </div>
    );
}

export default ReportSelector;
```

3. Executa o frontend:  `npm run dev`
##### Backend (Node.js):

Servidor Express que gera o PDF com Puppeteer:

1. Inicia o projeto do backend na sua pasta: `npm init -y`
2. Instala as dependencies: `npm install express puppeteer cors`

```js
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
```
3. Executa o backend:  `node index.js`
### 🔍Testes:

- **Verificação do Funcionamento**:
    - Inicie o servidor backend e o frontend.
	- No frontend, selecione o tipo de relatório desejado e clique em "🖨️ Gerar Relatório".
	- Um PDF do relatório selecionado deve ser aberto em uma nova aba do navegador 🌐.

## 🏆 Conclusão

O Puppeteer oferece uma interface poderosa e flexível para automação de tarefas no navegador, tornando-o uma ferramenta indispensável para desenvolvedores web, testadores de QA, e geração de relatórios em PDF. O Puppeteer simplifica a interação com o navegador de formas que antes exigiam soluções complexas e demoradas.

Espero que este tutorial tenha te dado uma boa introdução ao Puppeteer e inspirado a explorar mais sobre o que você pode automatizar em seus projetos web. Lembre-se de que a prática leva à perfeição, então não hesite em experimentar e personalizar seus scripts para atender às suas necessidades específicas. Feliz codificação! 🚀💻