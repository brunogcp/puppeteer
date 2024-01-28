import { useState } from 'react'
import './App.css'

function App() {
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
    <>
      <div>
        <select value={reportType} onChange={e => setReportType(e.target.value)}>
            <option value="">🔄 Selecione o Tipo de Relatório</option>
            <option value="type1">📊 Relatório Tipo 1</option>
            <option value="type2">📈 Relatório Tipo 2</option>
        </select>
        <button onClick={handleGenerateReport}>🖨️ Gerar Relatório</button>
      </div>
    </>
  )
}

export default App
