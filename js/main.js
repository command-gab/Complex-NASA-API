// Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently

nasaInfo()
function nasaInfo() {
const url = `https://data.nasa.gov/resource/gvk9-iz74.json`

fetch(url)
 .then(res => res.json()) // parse response as JSON 
 .then(dataFromArray => { 
  console.log(dataFromArray) 

  for(let i = 0; i < dataFromArray.length; i++) {
  
  let row = document.createElement('tr')
  let weatherCell = document.createElement('td')

// USED SUBSTRING SINCE IT WILL GET AN ERROR IF LAST 4 DIGITS ARE RAN 
  let firstFive = dataFromArray[i].zipcode.substring(0,5)


  const weather = `https://api.openweathermap.org/data/2.5/weather?zip=${firstFive}&units=imperial&appid=`

fetch(weather)
  .then(res => res.json()) // parse response as JSON 
  .then(dataFromWeather => { 
  console.log(dataFromWeather)

  let weather = dataFromWeather.main.temp 

  weatherCell.innerText = weather 
  row.appendChild(weatherCell)

}) 
  .catch(err => { 
    console.log(`error ${err}`) 
    
});

    let facility = dataFromArray[i].center
    let location = dataFromArray[i].city
    let united = dataFromArray[i].state
    let facilityCell = document.createElement('td')
    let locationCell = document.createElement('td')
    let unitedCell = document.createElement('td')
    facilityCell.innerText = facility
    locationCell.innerText = location
    unitedCell.innerText = united

    row.appendChild(facilityCell)
    row.appendChild(locationCell)
    row.appendChild(unitedCell)
    document.querySelector('tbody').appendChild(row)

}

  }) 
  .catch(err => { 
    console.log(`error ${err}`) 
 })
}
