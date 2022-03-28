import "./styles.css";
import "./src/component/img";

export default function selectForm() {
  return (
    <form>
      <input type="text" id="searchBar" placeholder="Select"></input>
      <input type="submit" id="searchBtn" value="Select"></input>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png"
          alt="pic"
        />
      </div>
    </form>
  );
}