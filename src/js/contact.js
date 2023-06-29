import sendEmail from './emailjs';

function contact() {
    return {
        formData: {
            name: '',
            email: '',
            message: ''
        },
        async send() {
            try {
                const result = await sendEmail(this.formData);
                console.log('Email sent successfully:', result);

                this.formData = {
                    name: '',
                    email: '',
                    message: ''
                };

                alert('Email sent successfully!');
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email.');
            }
        }
    };
}

export default contact
