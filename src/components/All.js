import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./All.css";

export default function All() {
  const [search, setSearch] = useState("");
  const [podcasts, setPodcasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("http://localhost:5001/podcasts");
        if (response.ok) {
          const data = await response.json();
          setPodcasts(data);
        } else {
          console.error("Error fetching podcasts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching podcasts:", error.message);
      }
    };

    // Fetch the list of podcasts when the component mounts
    fetchPodcasts();
  }, []);

  const locations = podcasts.map((podcast) => ({
    title: podcast.title,
    description: podcast.description,
    mp3Path: `http://localhost:5001/uploads/${podcast.audioFile}`,
  }));

  const filteredLocations = locations.filter((location) =>
    location.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #343a40, #1db954)",
        minHeight: "100vh",
      }}
    >
      <div className="col searchloc">
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group mb-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter name"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mainDiv"
      >
        <div className="container loca">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {filteredLocations.map((location, index) => (
              <div key={index} className="col-md-6 px-2 ">
                <div className="location-card ">
                  <h3>{location.title}</h3>
                  <p>{location.description}</p>
                  <audio controls>
                    <source src={location.mp3Path} type="audio/mp3" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
