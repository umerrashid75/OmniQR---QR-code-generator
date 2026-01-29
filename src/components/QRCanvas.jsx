import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export function QRCanvas({ value, options, className }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current || !value) return;

        const renderOptions = {
            width: options.width || 300,
            margin: options.margin || 2,
            color: {
                dark: options.fgColor || '#000000',
                light: options.bgColor || '#ffffff'
            },
            errorCorrectionLevel: options.level || 'M',
            ...options
        };

        QRCode.toCanvas(canvasRef.current, value, renderOptions, (error) => {
            if (error) {
                console.error('QR Generation Error:', error);
            }
        });

        // Clean canvas if value is empty? 
        // Usually we just want to keep the last valid one or show placeholder. 
        // If value is empty, we arguably shouldn't render anything or clear it.

    }, [value, options]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
        />
    );
}
