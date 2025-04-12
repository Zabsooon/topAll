import './styles.css'

const apikey = process.env.WEATHER_API_KEY

async function fetchWeather(city) {
    const datapromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apikey}&contentType=json`);
    return datapromise.json();
}



function addSearchEvent() {
    const button = document.querySelector('.searchbtn');
    button.addEventListener("click", async () => {
        try {
            const inputs = await getInputs();
            inputs.forEach(async (input) => {
                let weather = await fetchWeather(input.value);
                console.log(weather);
            });
        } catch (error) {
            console.error("Error fetching inputs:", error);
        }
    });
}

function getInputs() {
    return new Promise((resolve, reject) => {
        const inputs = document.querySelectorAll('.searchinput');
        if (inputs.length > 0) {
            resolve(inputs);
        } else {
            reject(Error("No inputs found!"));
        }
    });
}

addSearchEvent();
