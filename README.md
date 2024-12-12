That's my website !

You can download it and use the contact form for your website, you just need to keep the .css and .js related files and create a .env according to the exemple.  

Update the nodemailer.js from the server folder with your SMTP email information   
And add your email and password in the .env file..  
to receive the submitted forms directly in your email inbox.  

You can also delete the server folder, replace the contact form action with "thank-you" instead of "/send-email" and upload your program on Netlify, they handle the backend part.

npm i cors npm i dotenv npm i nodemailer npm i express

start server with ' cd server ' ' node nodemailer.js '

add you email and password in .env It's required to create a application password from your email provider.