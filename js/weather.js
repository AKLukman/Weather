
const searchCity = () => {
    const searchField = document.getElementById('city-name');
    const searchCityName = searchField.value;
    searchField.value = '';

    if (searchCityName == '') {
        document.getElementById('error').style.display = 'block';
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=afe12676249a99f15ab1c6437b32a454`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayResult(data));
        document.getElementById('error').style.display = 'none';
    }

}

const displayResult = result => {
    console.log(result)
    if (!result) {

    } else {
        const cityName = document.getElementById('city');
        cityName.innerText = `${result.name}`;

        const tempText = document.getElementById('temp');
        const temp1 = result.main.temp - 273;
        const temp = temp1.toFixed(2);
        tempText.innerText = `${temp}`;

        const weather1 = document.getElementById('weather');
        const weather = result.weather[0].main;
        weather1.innerText = `${weather}`;
    }

}

