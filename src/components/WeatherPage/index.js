import {Component} from 'react'
import './index.css'

class WeatherPage extends Component {
  state = {
    location: '',
    isDarkMode: true,
    weatherData: [],
    showData: false,
    error: '',
  }

  onChangeValue = event => {
    this.setState({location: event.target.value})
  }

  onClickModeButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onClickSearchButton = async () => {
    try {
      const apiKey = '9d468eb3c319eb3c14d6ca05075a6f85' // API KEY for Authentication
      const {location} = this.state
      let apiUrl = ''
      if (typeof location === 'number') {
        // Check if location is a number

        apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=${apiKey}&units=metric&lang=en`
      } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=en`
      }

      const response = await fetch(apiUrl)
      if (response.ok) {
        const data = await response.json()
        this.setState({weatherData: [data], showData: true, error: ''})
      } else {
        throw new Error('Weather data not found.')
      }
    } catch (error) {
      this.setState({error: error.message, weatherData: []}) // Reset to empty array on error
    }
  }

  render() {
    const {location, isDarkMode, weatherData, error, showData} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`weather-container ${modeClassName}`}>
        <nav className="navbar">
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1718444267/pngegg_fwzlw9.png"
            alt="weather-logo"
            className="logo"
          />
          <button
            type="button"
            className="mode-button"
            onClick={this.onClickModeButton}
          >
            {buttonText}
          </button>
        </nav>
        <div className="display-container">
          <h1 className="heading"> FORECAST CONDITIONS</h1>
          <input
            type="search"
            onChange={this.onChangeValue}
            required
            value={location}
            placeholder="Enter City Name or Zip Code"
            className="input"
          />
          <button
            type="button"
            className="search-button"
            onClick={this.onClickSearchButton}
          >
            Search
          </button>
          {error && <p className="error">{error}</p>}
          {showData && (
            <div className="data">
              {weatherData.map(eachData => (
                <div key={eachData.id}>
                  <p className="description">City : {eachData.name}</p>
                  <p className="description">
                    Temperature : {eachData.main.temp} °C
                  </p>
                  <p className="description">
                    Pressure : {eachData.main.pressure}
                  </p>
                  <p className="description">
                    Date : {new Date().toLocaleDateString()}
                  </p>
                  <p className="description">
                    Time : {new Date().toLocaleTimeString()}
                  </p>
                  <p className="description">
                    Humidity : {eachData.main.humidity}
                  </p>
                  <p className="description">
                    Wind Speed : {eachData.wind.speed}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default WeatherPage
