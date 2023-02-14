
const search = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6df849e5192110b2d4ea23ac4653ae6b`, {
        method: 'get'
    })
        .then((res) => res.json())
        .then((data) => creat(data));
}
const creat = (data) => {

    const { name } = data
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main
    const { speed } = data.wind

    console.log(name, description, temp, humidity, speed, icon);

    document.querySelector(`.city`).innerHTML = `Weather in ${name}`
    document.querySelector(`.temp`).innerHTML = `${Math.floor(temp)} °C`
    document.querySelector(`.icon`).src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector(`.discription`).innerHTML = description
    document.querySelector(`.humidity`).innerHTML = `Humidity : ${humidity}%`
    document.querySelector(`.wind`).innerHTML = `wind speed : ${speed}km/h`
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random/?${name}')`
    setTimeout(() => {
        document.querySelector(`.weather`).classList.remove(`close`)
    }, 1050);
}


function value() {
    search(document.querySelector(`#text`).value)
}

document.querySelector(`#search`).addEventListener(`click`, (e) => {
    value()
    e.target.value = ``
})

search(`chennai`)

document.querySelector(`#text`).addEventListener(`keyup`, (e) => {
    if (e.key == 'Enter') {
        value()
        e.target.value = ``
    }

})
