$(document).ready(function () {
    let api_key = "563492ad6f91700001000001799634c115164b51815cfcde0245227b"
    let image = ''

    $("#form").submit(function (event) {
        event.preventDefault()

        let search = $("#search").val()

        imagesearch()
    })

    function imagesearch() {
        $.ajax({
            method: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", api_key);
            },
            url:"https://api.pexels.com/v1/search?query="+search+"&per_page=1&page=1",
            success: function (data) {
                console.log(data)
                data.photos.forEach(photo => {
                    image = `
                        <img src="${photo.src.original}" alt="city" witdh="300" height="200" />
                    `
                    $("#images").append(image)
                });
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
})



