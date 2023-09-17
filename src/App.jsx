import { useState } from 'react';
import './App.scss';
import DataSection from './Components/DataSection';
import PrevSection from './Components/PrevSection';
import QRCode from 'qrcode';

function App() {
  const [ qrData, setQrData ] = useState();
  const dataTypes = ['Text', 'Wifi', 'URL', 'WhatsApp', "UPI"];

  function setData(s) {
    setQrData(s);
    if (!s) return;
    console.log(s);
    QRCode.toDataURL(s, { scale: 15 }).then(u => setQrData(u));
  }

  return (
    <div className="App">
      <div className="Mask">
        <div className="Container">
          <DataSection options={{ dataTypes: dataTypes, setData: setData }} />
          <PrevSection options={{ data: qrData}}  />
        </div>
      </div>
    </div>
  );
}

export default App;
