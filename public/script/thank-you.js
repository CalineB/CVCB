document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact-form');
  const responseMessage = document.querySelector('#response-message');

  if (form) {
      form.addEventListener('submit', async (event) => {
          event.preventDefault(); 

          const formData = new FormData(form);
          const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              subject: formData.get('subject'),
              message: formData.get('message'),
              phone: formData.get('phone'),
          };

          try {
              const response = await fetch(form.action, {
                  method: 'POST',
                  body: formData
              });

              const result = await response.json();

              if (result.success) {
                  // Form successfully submitted, save to sessionStorage
                  sessionStorage.setItem('formSubmitted', 'true');
                  form.style.display = 'none';
                  responseMessage.style.display = 'block';
                  responseMessage.textContent = 'Thank you for reaching out. Your email was successfully sent. I\'ll contact you ASAP!';
                  responseMessage.style.color = 'green';
              } else {
                  form.style.display = 'none';
                  responseMessage.style.display = 'block';
                  responseMessage.textContent = 'Error: ' + result.message;
                  responseMessage.style.color = 'red';

                  setTimeout(() => {
                      responseMessage.style.display = 'none';
                      form.style.display = 'block';
                  }, 30000);
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
  }
});


window.addEventListener('load', function() {
    if (sessionStorage.getItem('formSubmitted') !== 'true') {
        window.location.href = 'contact.html';
    } else {
        sessionStorage.removeItem('formSubmitted');
    }
});
