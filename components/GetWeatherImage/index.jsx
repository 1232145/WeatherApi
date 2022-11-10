const getImageWeather = (weatherType) => {
    const weatherTypes = {
        Clear: require("../../assets/clear.png"),
        Hail: require("../../assets/hail.png"),
        "Heavy Cloud": require("../../assets/heavycloud.png"),
        "Light Cloud": require("../../assets/partlycloudy.png"),
        "Heavy Rain": require("../../assets/heavyrain.png"),
        "Light Rain": require("../../assets/lightrain.png"),
        Showers: require("../../assets/showers.png"),
        Sleet: require("../../assets/sleet.png"),
        Snow: require("../../assets/snow.png"),
        Thunder: require("../../assets/thunder.png"),
    }

    //need optimization
    const weather = weatherType.replace(/\s/g, "").toLowerCase();
    if (weather === 'clear' || weather === 'sunny') return weatherTypes.Clear;
    if (weather === 'partlycloudy' || weather === 'mist') return weatherTypes["Light Cloud"];
    if (weather === 'overcast') return weatherTypes["Heavy Cloud"];
    if (weather === 'lightrainshower') return weatherTypes["Light Rain"];
    if (weather === 'fog') return weatherTypes.Hail;
    if (weather === 'patchylightrain') return weatherTypes["Light Rain"];
}

export default getImageWeather