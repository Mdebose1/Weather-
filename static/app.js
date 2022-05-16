
const apiKey = 'a9e69863fb7a28c5fac71a760e152b52'
const apiLink = 'https://api.openweathermap.org/data/2.5/weather'
console.log(apiKey)

async function getTheWeather(){
    const response = await fetch(apiLink);
    const json = await response.json;
    console.log(json);
}


getTheWeather();


weatherMap = {
base: "stations",
main: {
temp_min: 305.94,
temp_max: 310.14,
humidity: 45
}
}