# JobFishApp
CRUD Job Board APP With Auth &amp; Database

## Features
- Login, Register and Logout functionality with JWT (jsonwebtoken).
- REST Jobs API created with Express & MongoDB.
- Global Redux State to manage authenticated user functionality, job posts CRUD functionality and displaying feedback messages to client.
- Protected private routes (create job, edit job, my ads and delete job) where only users that created the ad can only edit, update and delete that certain job.
- Global routes such as viewing all ads and all the ads a certain user has.
- Reusable job display component that renders dynamic UI (all jobs, my jobs or user jobs) based on options prop.
- Reusable create job component that allows to either create a job or edit a job based on options prop.
- Front-end sort, pagination and search functionality.
- Material UI for building UI and usage of TypeScript.
- Fully responsive across devices.
