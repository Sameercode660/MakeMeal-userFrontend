'use client'

import QRCode from 'qrcode.react';

function QRPayment({amount}: {amount: number}) {
    const upiLink = `upi://pay?pa=6394867435@ybl&pn=Sameer&am=${amount}&cu=INR`;

    return (
        <div>
            <h3 className='text-center text-lg font-semibold'>Scan to Pay</h3>
            <QRCode value={upiLink} size={200} />
        </div>
    );
}

export default QRPayment;