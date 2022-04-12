import  './cardsong.css';
function CardSong () {
    return (
        <div className="Home">
            <h1>Songs</h1>
            <div className="search-bar">
                <input type = "search" id = "search" name = "search"></input>
                <input type = "submit"></input>
            </div>
            <img src = "https://pbs.twimg.com/profile_images/1080450214807298048/QUetVW1e_400x400.jpg" />
            <h2>Song Title : Bohemian Rhapsody</h2>
            <h2>Song Artist : QUEEN</h2>
            <div className= "button-component">Select</div>

            <div class="flex-container">
            <div>Song Title</div>
            <div>Artist</div>
            <div>Albums Name</div>
            </div>
            
        </div>
    );
}