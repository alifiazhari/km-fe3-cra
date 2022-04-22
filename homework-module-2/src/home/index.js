import "./styles";
import "./src/component/img";

function () {
  var files = [
      "sample1.mp3",
      "sample2.mp3",
      "sample3.mp3"
  ];
  var i = 0;
  var music_player = document.querySelector("#music_list audio");

  function next() {
     
      if (i === files.length - 1) {
          i = 0;
      } else {
          i++;
      }
      music_player.src = files[i];
  }
  if (music_player === null) {
      throw "Playlist Player does not exists ...";
  } else {
      music_player.src = files[i];
      music_player.addEventListener('ended', next, false)
  }

})();
);
export default function selectForm() {
  return (
  <><head>
      <title>GENERASI GIGIH 2.0 HOMEWORK</title>
      <meta charset="UTF-8" />
      <link rel stylesheet />" href="src/styles.css" /&gt;
      <button onclicks="myFunction" />()&gt;Submit<button>
      </></head><form>
        <input type="text" id="searchBar" placeholder="Select"></input>
        <input type="submit" id="searchBtn" value="Select"></input>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png"
            alt="pic" />
        </div>
      </form><a href="https://developer.spotify.com/documentation/general/guides/authorization/">Spotify Auth API</a>    
      <div id="music_list">
      <audio controls autoplay></audio>
      </div>
&rbrace;