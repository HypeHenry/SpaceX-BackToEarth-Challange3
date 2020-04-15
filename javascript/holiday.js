
/**
 * Fetch API data
 */
function getAPIdata() {
    var url = 'https://holidayapi.com/v1/holidays';
    var apiKey ='7cdc5654-55bd-47ef-8158-c23998201787\n';
    var land = 'Netherlands';

    // construct request
    var request = url + '?' + 'key=' + apiKey + '&' + 'country=' + land + '&year=2019';

    // get weather forecast
    fetch(request)

        // parse to JSON format
        .then(function(response) {
            if(!response.ok) throw Error(response.statusText);
            return response.json();
        })

        // render weather per day
        .then(function(response) {
            console.log(response);
            // render weatherCondition
            onAPISucces(response);
        })

        // catch error
        .catch(function (error) {
            console.log('ERROR:', error);
        });
}

/**
 * Render weather listing
 */
function onAPISucces(response) {

    var holidayList = response.list;
    var holidayBox = document.getElementById('MySpaceDisplay');

    for(var i=0; i< holidayList.length; i++){
        console.log(holidayList[i]);

        // var dateTime = new Date(holidayList[i].dt_txt);
        // var date = formDate(dateTime);
        // var time = formTime(dateTime);
        // var temp = Math.floor(holidayList[i].main.temp - 273.15);
        // var iconUrl = 'http://openweathermap.org/img/w/'+holidayList[i].weather[0].icon+'.png';
        //
        // forecastMessage =  '<div class="forecastMoment">';
        // forecastMessage +=   '<div class="date"> '+date+' </div>';
        // forecastMessage +=	 '<div class="time"> '+ time +' </div>';
        // forecastMessage +=	 '<div class="temp"> '+temp+'&#176;C </div>';
        // forecastMessage +=	 '<div class="icon"> <img src="'+iconUrl+'"> </div>';
        // forecastMessage += '</div>';
        //
        // holidayBox.innerHTML += forecastMessage;
    }
}

/**
 * Error
 */
function updateUIError() {
    var weatherBox = document.getElementById('bar');
    weatherBox.className = 'hidden';
}

/**
 * Format date
 */
function formDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    return day +'/'+ month;
}

/**
 * Format time
 */
function formTime(date) {
    var hours = date.getHours();
    if(hours<10){
        hours = '0'+hours;
    }
    var minutes = date.getMinutes();
    if(minutes < 10){
        minutes = '0'+ minutes;
    }
    return hours +':'+ minutes;
}

// init data stream
getAPIdata();
