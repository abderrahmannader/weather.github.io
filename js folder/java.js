
let countryName = document.querySelector(".country-name")
let countryTemp = document.querySelector(".country-temp")
let countryImg = document.querySelector(".country-img")
let countryStats = document.querySelector(".country-stats")
let countryRain = document.querySelector(".country-rain")
let countryWind = document.querySelector(".country-wind")
let countryDirection = document.querySelector(".country-dirction")

let countryImg2 = document.querySelector(".country-img2")
let countryTemp2 = document.querySelector(".country-temp2")
let countryTempLower2 = document.querySelector(".country-temp-lower2")
let countryStats2 = document.querySelector(".country-stats2")

let countryImg3 = document.querySelector(".country-img3")
let countryTemp3 = document.querySelector(".country-temp3")
let countryTempLower3 = document.querySelector(".country-temp-lower3")
let countryStats3 = document.querySelector(".country-stats3")

let searchButton = document.querySelector(".btn-search")
let searchInput = document.querySelector(".input-value")

let weekDay = document.querySelector(".week")
let dateDay = document.querySelector(".date")
let dateDay2 = document.querySelector(".date2")
let dateDay3 = document.querySelector(".date3")



console.log("hi")



searchButton.addEventListener('click', function(){
    finalResponse = searchInput.value
    console.log(searchInput.value)
    if(searchInput.value = ""){
        getLocation()
    }else{
        getData(finalResponse)
    }
    

})

searchInput.addEventListener('keyup', function(){
    finalResponse = searchInput.value
    if(searchInput.value == ""){
        getLocation()
    }else{
        getData(finalResponse)
    }
})

async function getLocation(){

    let ipaddress = await fetch (`https://api.ipify.org/?format=json`)
    let response = await ipaddress.json()
    
    let finalIpAdress = response.ip

    let location = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=3f2601f1025e4072b0a22d77dbbee04e&ip_address=${finalIpAdress}`)
    let locationResponse = await location.json()

    getData(locationResponse.city)
    
}

async function days(){

    let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let week = new Date().getDay()
    let months = new Date().getMonth()
    let days = new Date().getDate()

   

    weekDay.innerHTML = weekDays[week - 1]
    dateDay.innerHTML = days + monthName[months]
    dateDay2.innerHTML = weekDays[week]
    dateDay3.innerHTML = weekDays[week + 1]
    





   


   

}

async function getData(country = "egypt"){
    
    
    let weatherData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d4c1cc9f15fb4a6783c124236240101&q=${country}&days=7`)
    let response = await weatherData.json()
    

    
        countryName.innerHTML = response.location.name
    countryTemp.innerHTML = response.current.temp_c+"oC"
    countryImg.setAttribute("src", "https:"+response.current.condition.icon)
    countryStats.innerHTML = response.current.condition.text
    countryRain.innerHTML = `<img  src="img/icon-umberella.png" alt="">`+response.current.precip_mm+"%"
    countryWind.innerHTML = `<img  src="img/icon-wind.png" alt="">`+response.current.wind_kph+"km/h"
    countryDirection.innerHTML = `<img  src="img/icon-compass.png" alt="">`+response.current.wind_dir


    countryImg2.setAttribute("src","https:"+response.forecast.forecastday[1].day.condition.icon )
    countryTemp2.innerHTML = response.forecast.forecastday[1].day.maxtemp_c+"oC"
    countryTempLower2.innerHTML = response.forecast.forecastday[1].day.mintemp_c+"oC"
    countryStats2.innerHTML = response.forecast.forecastday[1].day.condition.text

    countryImg3.setAttribute("src","https:"+response.forecast.forecastday[2].day.condition.icon )
    countryTemp3.innerHTML = response.forecast.forecastday[2].day.maxtemp_c+"oC"
    countryTempLower3.innerHTML = response.forecast.forecastday[2].day.mintemp_c+"oC"
    countryStats3.innerHTML = response.forecast.forecastday[2].day.condition.text



    


   

}



