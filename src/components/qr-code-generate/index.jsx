import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handelQRCodeGenerate(){
        setQrCode(input)
    }

    return(
        <div>
            <h1>QR code</h1>
            <div>
                <input type="text" name="qr-code" onChange={(e)=> setInput(e.target.value)}/>
                <button onClick={handelQRCodeGenerate}>Generate</button>
            </div>
            <div>
                <QRCode 
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
                />
            </div>
        </div>
    );

}