const app = {};

app.key = `4tmTuB7uItPxIKkPMwNyQCA97snlBc5K`;

app.getImages = function(query) {
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search`,
        method: 'GET',
        dataType: 'json',
        data: {
            api_key: app.key,
            q: query,
            format: 'json'
        }
    }).then(function(result) {

        $('.results').empty();
        app.displayImages(result.data);

    })
}

app.displayImages = function(data) {
    data.forEach(function(gifObj) {
        const gifHtml = `
        <div class="gif-box">
            <div class="img-box">
                <img src="${gifObj.images.original.url}" alt="${gifObj.title}">
            </div>
            <p class="gif-title">${gifObj.title}</p>
        </div> `

        $('.results').append(gifHtml);
       
    });
};





app.init = function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const selection = $('input').val();
        console.log(selection);
        app.getImages(selection);
    })
    
    
};

$(function() {
    app.init();
});