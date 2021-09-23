import React, { useState } from "react";
import "./styles.css";
var recommendations = {
  Action: [
    {
      name: "Godzilla vs. Kong",
      description:
        "It's a modern take on the classic creature feature (and featuring two of movie history's most iconic creatures, at that). Plus, the always amazing and inspiring Millie Bobby Brown is back for this one (she was also in 2019's Godzilla: King of Monsters), and her presence is always a bonus.",
      IMDb_rating: "IMDb rating = 6.4/10"
    },
    {
      name: "Black Widow",
      description:
        "Fans have been calling for a Black Widow movie for literally years now. The character has always been a fan favorite in the MCU and it was honestly a crime that it took this long for us to see Scarlett Johansson lead her own Marvel movie.",
      IMDb_rating: "IMDb rating = 6.8/10"
    },
    {
      name: "The Suicide Squad",
      description:
        "Equal parts action and comedy, this James Gunn-helmed supervillain film gives its DC comics source material its silver screen due",
      IMDb_rating: "IMDb rating = 7.3/10"
    }
  ],
  Horror: [
    {
      name: "Train to Busan",
      description:
        "South Korean director Sang-ho Yeon unleashed his zombie epic, Train to Busan, on audiences who only thought they’d had their fill of the undead. An unrelenting and action-packed pulse-raiser that focuses on a father and daughter who board a train just as the apocalypse begins.",
      IMDb_rating: "IMDb rating = 7.6/10"
    },
    {
      name: "A Tale of Two Sisters",
      description:
        "Not even daylight will save you from the fury of Jee-woon Kim’s South Korean psychological horror, about a pair of siblings and their very persistent ghost.",
      IMDb_rating: "IMDb rating = 7.2/10"
    },
    {
      name: "The Eyes of My Mother",
      description:
        "A socially awkward farm girl surrounded by death (her mother murdered, her father gone) gives into creepy urges: murder, torture, and maiming. If it sounds morbid, that's because it is. This is an atmospheric indie produced by Antonio",
      IMDb_rating: "IMDb rating = 6.2/10"
    }
  ],
  Rom_Coms: [
    {
      name: "Band Baaja Baarat",
      description:
        "The story follows the lives of business partners Bittoo Sharma (Ranveer Singh) and Shruti Kakkar (Anushka Sharma) who start a wedding planning business called Shaadi Mubarak. The business does well and everything is going fine but when Shruti falls for her business partner Bittoo, everything goes haywire. The songs are what get this film some brownie points, they will get you all groovy and ready to take the dance floor.",
      IMDb_rating: "IMDb rating = 7.2/10"
    },
    {
      name: "Jab We Met",
      description:
        "The story revolves around Aditya (Shahid Kapoor) a business tycoon who while escaping his boring life, meets Geet (Kareena Kapoor) a bubbly Punjabi girl while he boards a train. And from there starts an unforgettable and crazy journey. This film is perfect in every manner, from the chemistry between the two actors, to the storyline and songs this film is one of our top favourites.",
      IMDb_rating: "IMDb rating = 7.9/10"
    },
    {
      name: "Zindagi Na Milegi Dobara",
      description:
        "The film revolves around three friends Kabir (Abhay Deol), Imran (Farhan Akhtar) and Arjun (Hrithik Roshan) who take a vacation to Spain before Kabir gets married. The trip makes them fall in love with life and gives them opportunity to mend their relationships with one another.",
      IMDb_rating: "IMDb rating = 8.2/10"
    }
  ]
};
var movieGenre = ["Action", "Horror", "Rom_Coms"];

export default function App() {
  const [movie, setMovie] = useState("Action");
  function onClickHandler(genre) {
    console.log(genre);
    setMovie(genre);
    console.log(movie);
  }
  return (
    <div className="App">
      <h1>Movie recommendations!</h1>
      <p>Select your genre : )</p>

      {movieGenre.map(function (genre) {
        return (
          <button key={genre} onClick={() => onClickHandler(genre)}>
            {" "}
            {genre}{" "}
          </button>
        );
      })}
      <hr />
      <div className="contents">
        <ul style={{ paddingInlineStart: "0" }}>
          {recommendations[movie].map((mov) => (
            <li>
              {" "}
              <div className="movien"> {mov.name} </div>
              <div className="movied"> {mov.description} </div>
              <br />
              <div className="movier"> {mov.IMDb_rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
