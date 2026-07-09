# whats_app_bot

Bot integration in whats app account

# backend

===========
Folder Structure
backend/
│
├── package.json
├── package-lock.json
├── src
│ ├── app.ts
│ ├── config
│ │ └── env.ts
│ ├── controllers
│ │ └── webhook.controller.ts
│ ├── middleware
│ ├── routes
│ │ └── webhook.routes.ts
│ ├── server.ts
│ ├── services
│ │ ├── ai.service.ts
│ │ └── whatsapp.service.ts
│ └── utils
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json

# Run

npm run dev

# Test webhook api

http://localhost:3000/webhook?hub.mode=subscribe&hub.verify_token=my_verify_token&hub.challenge=12345

# Meta Account creation

# Meta App

Got to https://accountscenter.facebook.com/
Then Get started and verify Meta

Got to this link and create App
https://developers.facebook.com/apps
Crate App name
Create buisness portfolio choose whats app message option
Then create token and test for message receiver and message sender in the UI

# Meta connection

Our server is running on http://localhost:3000

Meta (Developer tool) cannot access localhost.
So we need public server, So Use ngrok
sudo snap install ngrok
Create free account on https://dashboard.ngrok.com
Then get token
Then Authenticate token into system by cmd
ngrok config add-authtoken YOUR_TOKEN

Then run your local server - npm run dev
Then run - ngrok http 3000
You will see that Forwarding http://xyz....
This is your web url

# Meta Webhook configuration

Go to https://developers.facebook.com/apps/
Select your App
Got to Wahts app-> Webhook-> Callback URL
Fill callback URL = your_ngrok_url/webhook
verify_token = your_token (using in .env)
Then save

Now we are ready to test message webhook
