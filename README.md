# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Weather Forecast App
This is a simple React application that allows users to search for a city and view the current weather as well as a 5-day forecast. It integrates with the OpenWeatherMap API to fetch weather data.

### Features
Search weather for any city in the world.
Displays the current temperature, weather condition, and an icon for the current weather.
Allows switching between Celsius and Fahrenheit units.
Displays a 5-day weather forecast.

### Setup Instructions
### Prerequisites
Node.js installed on your system (version 14 or higher).
A free API key from OpenWeatherMap.

### Installation Steps
## Clone the repository
Open your terminal and run the following command to clone the project:

git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app

## Install dependencies
Once inside the project directory, install the required dependencies using npm or yarn:
npm install

## Set up your API key
You will need an API key from OpenWeatherMap. Sign up for an API key at OpenWeatherMap. Once you have your API key, update the API_KEY variable in the src/App.js file with your key:

const API_KEY = 'your_api_key'; // Replace this with your OpenWeatherMap API key

## Run the project
To start the project locally, run:

npm start

This will start the development server, and the application will be available at http://localhost:3000.

### Assumptions Made
The application assumes that the OpenWeatherMap API returns data for cities that exist and can display a proper error message if a city cannot be found.
Only one forecast entry is shown per day, which is the forecast at 12:00 PM (based on OpenWeatherMap's forecast data structure).
Unit switching between Celsius and Fahrenheit will apply to both current weather and the 5-day forecast.
The default city when the app loads is 'New York.'

### How to Use the Application

## Search for a City
Enter a city name in the search input box at the top of the page and press the "Search" button. The current weather and 5-day forecast for that city will be displayed.

## View Current Weather
The current weather card will show the city's name, temperature, and weather condition with an icon.

## Toggle Temperature Units
Use the "Switch to Fahrenheit/Celsius" button to switch between metric (Celsius) and imperial (Fahrenheit) units for both current weather and the 5-day forecast.

## View 5-Day Forecast
Below the current weather, a 5-day forecast is shown with high and low temperatures and weather icons for each day.

### Technologies Used
React.js: Frontend library for building user interfaces.
Axios: For making HTTP requests to the OpenWeatherMap API.
OpenWeatherMap API: To fetch current weather and 5-day forecast data.
CSS: For styling and responsive design.

### Error Handling
The application has error handling mechanisms in place for the following scenarios:
If the city name entered is invalid or cannot be found, a descriptive error message will be shown.
If there are network issues, the app will notify the user with an appropriate error message.
Both errors for the current weather and 5-day forecast are handled separately to ensure users receive clear feedback.

### Future Enhancements
Add a loading spinner while waiting for data from the API.
Implement better error handling (e.g., handling rate-limiting from the OpenWeatherMap API).
Include more details in the forecast, such as wind speed and humidity.
