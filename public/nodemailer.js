const form = document.querySelector('#contact-form');

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
      alert('Email successfully send !');
    } else {
      alert('Erreur : ' + result.message);
    }
  } catch (error) {
    alert('Error sending your email');
  }
});
