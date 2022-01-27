let fetch = require('node-fetch')

let url = "https://viacep.com.br/ws/06065220/json"

let adress = {}

fetch(url)
    .then(response => response.json())
    .then(data => {

        adress = data

        console.log(adress)
    })
