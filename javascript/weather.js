let button = document.querySelector('.button');
let inputValue = document.querySelector('.search-box');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1365c344b30a6fb54bf686aa482fe495')
        .then(response => response.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
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

