const form = document.querySelector('#contact-form');
const responseMessage = document.querySelector('#response-message');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    phone: formData.get('phone'),

  };

  try {
    const response = await fetch('http://localhost:4000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      form.style.display = 'none';
      responseMessage.style.display = 'block'; 
      responseMessage.textContent = 'Email successfully sent, I\'ll contact you ASAP!';
      responseMessage.style.color = 'green';
    } else {
      form.style.display = 'none';
      responseMessage.style.display = 'block';
      responseMessage.textContent = 'Error: ' + result.message;
      responseMessage.style.color = 'red';

      setTimeout(() => {
        responseMessage.style.display = 'none';
        form.style.display = 'block';
      }, 10000);
    }

  } catch (error) {
    form.style.display = 'block';
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'An error occurred while sending your email. Please try again later.';
    responseMessage.style.color = 'red';
    setTimeout(() => {
      responseMessage.style.display = 'none';
      form.style.display = 'block';
    }, 5000);
  }
});