/**
 * Utility functions to generate QR code strings for different types
 */

export const generateWifiString = ({ ssid, password, encryption = 'WPA', hidden = false }) => {
    // Format: WIFI:T:WPA;S:mynetwork;P:mypass;;
    // Encryption types: WPA, WEP, nopass
    const safeSSID = ssid.replace(/([\\;,:])/g, '\\$1');
    const safePassword = password.replace(/([\\;,:])/g, '\\$1');
    return `WIFI:T:${encryption};S:${safeSSID};P:${safePassword};H:${hidden};;`;
};

export const generateVCardString = ({
    firstName,
    lastName,
    phone,
    email,
    website,
    organization,
    jobTitle,
    street,
    city,
    zip,
    country
}) => {
    const n = `${lastName || ''};${firstName || ''};;;`;
    const fn = `${firstName || ''} ${lastName || ''}`.trim();

    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${n}\nFN:${fn}\n`;
    if (organization) vcard += `ORG:${organization}\n`;
    if (jobTitle) vcard += `TITLE:${jobTitle}\n`;
    if (phone) vcard += `TEL:${phone}\n`;
    if (email) vcard += `EMAIL:${email}\n`;
    if (website) vcard += `URL:${website}\n`;
    if (street || city || zip || country) {
        vcard += `ADR:;;${street || ''};${city || ''};;${zip || ''};${country || ''}\n`;
    }
    vcard += `END:VCARD`;
    return vcard;
};

export const generateEmailString = ({ email, subject, body }) => {
    return `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
};

export const generateSmsString = ({ phone, message }) => {
    return `smsto:${phone}:${message || ''}`;
};

export const generateWhatsappString = ({ phone, message }) => {
    // Ensure phone has no symbols
    const cleanPhone = phone.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message || '')}`;
};

export const generateGeoString = ({ latitude, longitude }) => {
    // geo:lat,long but maps link is often more universal for scanners that open browsers
    // Standard geo URI: geo:37.786971,-122.399677
    return `geo:${latitude},${longitude}`;
};

export const generateGoogleMapsString = ({ latitude, longitude }) => {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
};

export const generatePaymentString = (paymentType, data) => {
    if (paymentType === 'upi') {
        // upi://pay?pa=address&pn=name&am=amount&cu=currency
        const { pa, pn, am, cu } = data;
        const params = new URLSearchParams();
        if (pa) params.append('pa', pa);
        if (pn) params.append('pn', pn);
        if (am) params.append('am', am);
        if (cu) params.append('cu', cu || 'INR');
        return `upi://pay?${params.toString()}`;
    }

    if (paymentType === 'crypto') {
        // bitcoin:address?amount=0.5
        // ethereum:address?value=...
        const { currency, address, amount } = data;
        let uri = `${currency.toLowerCase()}:${address}`;
        if (amount) {
            uri += `?amount=${amount}`;
        }
        return uri;
    }

    if (paymentType === 'paypal') {
        // https://www.paypal.com/paypalme/username/amount
        const { username, amount, currency } = data; // currency needs to be handled by the user knowing their link format usually?
        // PayPal.Me links are usually just paypal.me/user/amount
        let uri = `https://www.paypal.me/${username}`;
        if (amount) {
            uri += `/${amount}`;
            if (currency) uri += currency;
        }
        return uri;
    }

    return '';
};
