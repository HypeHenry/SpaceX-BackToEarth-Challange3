let button = document.querySelector('.button');
let inputValue = document.querySelector('.search-box');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let hum = document.querySelector('.hum');


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1365c344b30a6fb54bf686aa482fe495')
        .then(response => response.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let humValue = data['main']['humidity'];
            let descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = Math.floor(tempValue - 273.15);
            hum.innerHTML = humValue;
            desc.innerHTML = descValue;

        })

        .catch(err => ("verkeerde stadnaam"))

})



// button.addEventListener('click', function () {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1365c344b30a6fb54bf686aa482fe495')
//         .then(response => response.json())
//         .then(data => {
//             let nameValue = data['name'];
//             let tempValue = data['main']['temp'];
//             let descValue = data['weather'][0]['description'];
//
//             name.innerHTML = nameValue
//             temp.innerHTML = tempValue
//             desc.innerHTML = descValue
//
//         })
//
//
//         .catch(err => alert('Verkeerde stad naam'))
// })

