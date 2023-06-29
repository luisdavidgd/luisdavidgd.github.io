import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_wfv89sq';
const TEMPLATE_ID = 'template_n20y8v9';
const USER_ID = 'QAdDe6hRM9xHS7uP0';

async function sendEmail(payload) {
    try {
        const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID);

        return result;
    } catch (error) {
        throw new Error('Failed to send email: ' + error);
    }
}

export default sendEmail;
