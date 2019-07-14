let topics = ['Mario', 'Dark Souls', 'The Legend of Zelda', 'Bioshock', 'Call of Duty', 'Bloodborne', 'Final Fantasy', 'Donkey Kong', 'Metroid', 'Halo', 'Battlefield', 'Borderlands', 'Pokemon', 'Tetris', 'Gran Turismo', 'The Elder Scrolls', 'Mega Man', 'Mass Effect']
//creating buttons//
function createButtons() {
    for (let i = 0; i < topics.length; i++) {
        let gameBtn = $("<button>")
        gameBtn.addClass("btn btn-dark")
        gameBtn.text(topics[i])
        $("#vgbtns").append(gameBtn)
    }
}

let queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=iR1jPERPw1oBVLsNHYX6W0mWSu0zfstS";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
})

createButtons();
