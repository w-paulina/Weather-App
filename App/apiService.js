export const getWeatherByCity = city => {
return fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
.then(resp => resp.json())
.then(cityInfo => {
    const woeid = cityInfo[0].woeid;
    return fetch(`https://www.metaweather.com/api/location/${woeid}/`)
    .then(res => res.json())
    .then(data => data)
})
}