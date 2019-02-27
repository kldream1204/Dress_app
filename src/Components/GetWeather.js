import React from "react";
import axios from "axios";
import WeatherPresenter from "./WeatherPresenter";

class GetWeather extends React.Component {
    
    state = {
        lat: "",
        lon: "",
        loading: true,
        weather: {
            temp: "",
            tempMax: "",
            tempMin: "",
            weather: "",
            cloud: "",
            wind: "",
            name: ""
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = async() => {
        try{
            await navigator.geolocation.getCurrentPosition(this.successLocation);
        }catch(error) {
            console.log(error);
        }
    }

    successLocation = (location) => {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        this.setState({
            lat,
            lon
        });
        this.getweather();
    }

    getweather = () => {
        const apiKey = "c7fb80a15a65edbd3e07489c87961335";
        try{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${apiKey}&units=metric`)
            .then(response => this.saveWeather(response.data));
        }catch(error) {
            console.log(error);
        }finally{
            this.setState({
                loading: false
            })
        }
     
    }

    saveWeather = (response) => {
        this.setState({
            weather: {
                temp: response.main.temp,
                tempMax: response.main.temp_max,
                tempMin: response.main.temp_min,
                weather: response.weather[0].main,
                cloud: response.clouds.all,
                wind: response.wind.speed,
                name: response.name
            }
        });
    }

    render() {
        console.log(this.state);
        const {weather:{temp, tempMax, tempMin, weather, cloud, wind, name},
        loading} = this.state;
        return (
            <>                
                <WeatherPresenter 
                    temp={temp}
                    tempMax={tempMax}
                    tempMin={tempMin}
                    weather={weather}
                    cloud={cloud}
                    wind={wind}
                    name={name}
                    loading={loading}
                    >
                </WeatherPresenter>
            </>
        )
    }
}

export default GetWeather;