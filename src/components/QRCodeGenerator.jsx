import { useState } from 'react';
import QRCode from 'qrcode.react';

export const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  return (
    <section>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div>
          <QRCode value={text} size={256} />
        </div>
      )}
    </section>
  );
};
