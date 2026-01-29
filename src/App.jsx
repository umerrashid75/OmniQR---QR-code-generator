import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { UrlInput, TextInput } from './components/inputs/SimpleInputs';
import { WifiInput } from './components/inputs/WifiInput';
import { VCardInput } from './components/inputs/VCardInput';
import { EmailInput, SmsInput, WhatsappInput } from './components/inputs/CommunicationInputs';

import { LocationInput } from './components/inputs/LocationInput';
import { QRControls } from './components/QRControls';
import { QRCanvas } from './components/QRCanvas';
import {
  generateWifiString,
  generateVCardString,
  generateEmailString,
  generateSmsString,
  generateWhatsappString,
  generateGeoString
} from './utils/qr-generators';
import { Download, Share2 } from 'lucide-react';

function App() {
  const [activeType, setActiveType] = useState('url');
  const [data, setData] = useState({});
  const [qrValue, setQrValue] = useState('');
  const [filename, setFilename] = useState('');
  const [options, setOptions] = useState({
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'M',
    margin: 2
  });

  // Reset data when type changes
  const handleTypeChange = (type) => {
    setActiveType(type);
    setData({});
    setQrValue('');
    setFilename('');
  };

  // Generate QR string based on type and active data
  useEffect(() => {
    let value = '';

    try {
      switch (activeType) {
        case 'url':
          value = data.value || '';
          break;
        case 'text':
          value = data.value || '';
          break;
        case 'wifi':
          if (data.ssid) value = generateWifiString(data);
          break;
        case 'vcard':
          if (data.firstName || data.lastName || data.phone) value = generateVCardString(data);
          break;
        case 'email':
          if (data.email) value = generateEmailString(data);
          break;
        case 'sms':
          if (data.phone) value = generateSmsString(data);
          break;
        case 'whatsapp':
          if (data.phone) value = generateWhatsappString(data);
          break;
        case 'location':
          if (data.latitude && data.longitude) value = generateGeoString(data);
          break;
        default:
          value = '';
      }
    } catch (e) {
      console.error("Error generating QR string", e);
    }

    setQrValue(value);
  }, [activeType, data]);

  const handleDownload = (format) => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL(`image/${format}`);
      const link = document.createElement('a');
      const name = filename.trim() || `omniqr-${activeType}-${Date.now()}`;
      link.download = `${name}.${format}`;
      link.href = url;
      link.click();
    }
  };

  const handleShare = async () => {
    const canvas = document.querySelector('canvas');
    if (canvas && navigator.share) {
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'qr.png', { type: 'image/png' });
        try {
          await navigator.share({
            title: 'Share QR Code',
            text: 'Check out this QR code created with OmniQR',
            files: [file]
          });
        } catch (e) {
          console.error('Share failed', e);
        }
      });
    } else {
      alert('Sharing is not supported on this browser or device.');
    }
  };

  const renderInput = () => {
    switch (activeType) {
      case 'url': return <UrlInput value={data.value} onChange={(v) => setData({ ...data, value: v })} />;
      case 'text': return <TextInput value={data.value} onChange={(v) => setData({ ...data, value: v })} />;
      case 'wifi': return <WifiInput data={data} onChange={setData} />;
      case 'vcard': return <VCardInput data={data} onChange={setData} />;
      case 'email': return <EmailInput data={data} onChange={setData} />;
      case 'sms': return <SmsInput data={data} onChange={setData} />;
      case 'whatsapp': return <WhatsappInput data={data} onChange={setData} />;
      case 'location': return <LocationInput data={data} onChange={setData} />;
      default: return <div>Select a type</div>;
    }
  };

  return (
    <Layout activeType={activeType} onTypeSelect={handleTypeChange}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

        {/* Input Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
              {activeType === 'url' ? 'Website URL' : activeType}
            </h2>
            {renderInput()}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Customization</h3>
            <QRControls options={options} onChange={setOptions} />
          </div>
        </div>

        {/* Preview Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-gray-600 mb-6">Live Preview</h3>

              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                {qrValue ? (
                  <QRCanvas value={qrValue} options={options} className="rounded-lg shadow-sm" />
                ) : (
                  <div className="w-[300px] h-[300px] flex items-center justify-center text-gray-400 bg-gray-100 rounded-lg">
                    <span className="text-sm">Enter data to generate QR</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full gap-3">
                <div className="w-full">
                  <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">File Name (Optional)</label>
                  <input
                    type="text"
                    placeholder={`omniqr-${activeType}-...`}
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-50"
                  />
                </div>
                <button
                  onClick={() => handleDownload('png')}
                  disabled={!qrValue}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download size={20} />
                  Download PNG
                </button>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={handleShare}
                    disabled={!qrValue}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Share2 size={20} />
                    Share Link
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-800 text-center">
                Your QR code is generated locally in your browser.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default App;
