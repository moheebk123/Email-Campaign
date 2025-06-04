# Email Campaign Scheduler

A simple backend system to schedule and simulate email campaign dispatches using Node.js, Express, and MongoDB.

## Features

- Create email campaigns with scheduled time
- Fetch user-specific leads
- Scheduled background job (every minute) to simulate email sending

## Setup

1. Clone the repository
2. Run `npm install`
3. Set up `.env` with `MONGO_URI` AND `PORT`. `.env.sample` is given for reference.
4. Run the app:
   ```bash
   npm start