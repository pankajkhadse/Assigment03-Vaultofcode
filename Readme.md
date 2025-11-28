EDITKARO Website Final Project with Google Sheet Implimentaion

finalProject/
├── index.html                 # Main HTML file
├── style.css                  # All styles and animations
├── script.js                  # JavaScript functionality
├── netlify.toml              # Netlify configuration
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine instructions
├── contact-form-appscript.js # Google Apps Script for contact form
├── email-subscription-appscript.js # Google Apps Script for email form
└── README.md                 # This file

--------------------------------------------------------------------------------------------------------------------------------

📋 Project Setup Guide

1. Clone the Repository



2. Google Sheets Setup Create 2 Google Sheets:

Sheet 1: Contact Details Collection
Name: EditkaroApp_Contact_Data
Create columns: Timestamp, Name, Email, PhoneNumber, Message

Sheet 2: Email Subscription Collection
Name: EditkaroApp_Email_Subscriptions
Create columns: Timestamp, Email



3. Google Apps Script Setup For Contact Form:

Go to your Google Sheet EditkaroApp_Contact_Data
Click Extensions → Apps Script
Delete the default code and paste the code from contact-form-appscript.js
Save the project as EditkaroApp_Contact_Handler
Click Deploy → New deployment
Select type: Web app
Set:
    Execute as: Me
    Who has access: Anyone
Click Deploy
Copy the generated Web App URL


For Email Subscription Form:

Go to your Google Sheet EditkaroApp_Email_Subscriptions
Click Extensions → Apps Script
Delete the default code and paste the code from email-subscription-appscript.js
Save the project as EditkaroApp_Email_Handler
Click Deploy → New deployment
Select type: Web app
Set:
    Execute as: Me
    Who has access: Anyone
Click Deploy
Copy the generated Web App URL



4. Update HTML with Deployment URLs
Replace the form action URLs in index.html:

Contact Form:
<form id="contactForm" action="YOUR_CONTACT_FORM_WEB_APP_URL" method="post">

Email Subscription Form:
<form id="emailForm" action="YOUR_EMAIL_SUBSCRIPTION_WEB_APP_URL" method="post">
----------------------------------------------------------------------------------------------------------------------------------



📧 Form Functionality

Contact Form Collects: Name, Email, Phone (optional), Message
Stores data in Google Sheets
Auto-timestamping
Input validation

Email Subscription Collects: Email address
Stores data in Google Sheets
Auto-timestamping
Email validation



---------------------------------------------------------------------------------------------------------------------------------
