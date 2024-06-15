Explanation

Firstly Create a WeatherPage in src/components/weatherPage/index.js

import the Component from the react to extends the property and method form react

Class Component: WeatherApp is a class extending Component.

State Initialization: location, weatherData, error, and theme are initialized in the constructor using this.state.

setState Method: Used throughout to update state variables (location, weatherData, error, theme).

Create a one Navbar for logo and change the mode of backgroundColor with the help on isDark variable in state.

With the help of img src attribute used the logo for weather.

Using a CSS Styling for responsive website and for attraction of web page with the help of media queries and the css properties.

For change background mode use css gradients to right property.

fetchWeatherData: Asynchronous method to fetch weather data using fetch API and update weatherData and error state based on the API response.

Event Handlers: onClickEvent for called render method and fetching the data, handleInputChange for input change, and handleThemeToggle for toggle.

Render Method: Renders the UI based on current state values (location, weatherData, error, theme).

Whenever use search by the city name and zip code get all the details of location like temp and pressure and speed of wind and all.
