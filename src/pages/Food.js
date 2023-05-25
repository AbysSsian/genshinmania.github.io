import React, { useState } from "react";
import "./styles.css";
import { Navigate } from "react-router-dom";
import { FoodSearch } from "./Search-Functions/foodSearch";
import icon from "../assets/icon.png";
import backgroundMusic from "../assets/menu.mp3";
import audioIcon from "../assets/audio-icon.png";

export default function Food() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [goToCharacter, setGoToCharacter] = React.useState(false);
  const [goToArtifact, setGoToArtifact] = React.useState(false);
  const [goToWeapon, setGoToWeapon] = React.useState(false);

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    const selectedFood = event.target.value;
    setSearch(selectedFood);
  };

  if (goToCharacter) {
    return <Navigate to="/Character" />;
  }

  if (goToWeapon) {
    return <Navigate to="/Weapon" />;
  }

  if (goToArtifact) {
    return <Navigate to="/Artifact" />;
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="styles.css" />
        <title>GenshinMania</title>
      </head>
      <body>
        <div className="audio">
          <audio src={backgroundMusic} autoPlay loop />
        </div>
        <nav className="nav">
          <a href="/" className="site-title">
            {" "}
            GenshinMania{" "}
          </a>
          <img src={icon} className="icon" />
          <div className="nav-elements">
            <span className="scroll-elements" onClick={toggleMusic}>
              <img src={audioIcon} alt="audio" />
            </span>
          </div>
        </nav>

        <div className="sections">
          <div className="button-group">
            <button
              onClick={() => {
                setGoToCharacter(true);
              }}
            >
              Characters
            </button>
            <button
              onClick={() => {
                setGoToWeapon(true);
              }}
            >
              Weapons
            </button>
            <button
              onClick={() => {
                setGoToArtifact(true);
              }}
            >
              Artifacts
            </button>
            <button>Food</button>
          </div>
        </div>
        <h2 className="char-archive">Food Archive</h2>
        <div className="App">
          <h1>Search</h1>
          <div>
            <input
              type="text"
              placeholder="Search food"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <FoodSearch search={search} onSearchChange={handleSearchChange} />
        </div>

        <div className="character-cards"></div>
      </body>
    </html>
  );
}
