# Alemeno Skillshop App

Project Features: 

`All courses created with appropriate data`
On the homepage, the courses are displayed with information such as the thumbnail, instructor, course title (course name), description and a 'See more Details' button.

`Search Functionality`
Courses can be searched for using the course title (course name) or name of the instructor

`Accessible Course Details and Enrollment`
The individual course details can be viewed and the details page, the user can decide to enrol. Once a course is enrolled for, the course status (enrolmentStatus) becomes 'In Progress' and the user is taken to the dashboard to see the newly enrolled course and other previously enrolled courses (if available).

Validation Check: Note that, if the user decides to go back the details page of the newly enrolled course, the course enrol button has changed to 'Enrolled' and unclickable as expected. Even in the homepage, anywhere the enrolled course appears, the user sees that that course has been enrolled for and the course is in Progress.

`Dashboard functionality`
The user's enrolled courses are displayed on the dashboard by clicking on the 'My Account' button on the homepage. Each enrolled course carry some detail about the course like course name (course title), instructor, due date and more. 

If the user still wants to see the full details of the enrolled course, the user can still click on the "Details" button in the dashboard and go see the full details. 

If for some reason, the user wants to move on and mark that course as completed, that is also possible, by just clicking the 'MARK AS COMPLETE' button, and the course is registered as completed throughout the application.

`StateManagement`
State of the application is being managed with Redux toolkit. I am also using redux persist to keep things persisted to localStorage when the app is refreshed.

Thank you,



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
