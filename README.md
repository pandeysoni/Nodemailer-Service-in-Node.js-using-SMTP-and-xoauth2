Nodemailer Service in Node.js using SMTP and xoauth2

========================

The purpose of this app is to upload and download the file of any extension. You don't need to worry about file extension, is going to work for all types of file.

### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

npm install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

node server.js

You can see the port number in command prompt after sucessfull run

POST --> localhost:3000/send
Body:
{
   "subject": "Nodemailer Test using SMTP",
   "receivers": "sonipandey.71@gmail.com",
   "text":"Hey, You Recieved message from your nodemailer package"
}
Response:
mail send successfully




