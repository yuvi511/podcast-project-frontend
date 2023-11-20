import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Home.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import VolumeIcon from './volume.png';
import AudioFile1 from './audio1.mp3'; // Replace with actual audio file paths
import AudioFile2 from './audio2.mp3';
import AudioFile3 from './audio3.mp3';
import AudioFile4 from './audio4.mp3';
import AudioFile5 from './audio5.mp3';
const audioFiles = [AudioFile1, AudioFile2, AudioFile3,AudioFile4,AudioFile5];

const Home = () => {
  const [podcastImages, setPodcastImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = [
          { urls: { small: img1 }, alt_description: 'Podcast Image 1' },
          { urls: { small: img2 }, alt_description: 'Podcast Image 2' },
          { urls: { small: img3 }, alt_description: 'Podcast Image 3' },
        ];
        setPodcastImages(data);
        setLoaded(true);
      } catch (error) {
        console.error('Error fetching podcast images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    gsap.from('.podcast-item', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.2,
      onComplete: () => {
        setLoaded(true);
      },
    });
  }, []);

  const playAudio = (episode) => {
    if (playingAudio === episode) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(episode);
    }
  };

  return (
    <div className="podcast-home">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3 text-white">Discover Amazing Podcasts</h1>
          <p className="lead text-white">Explore a world of engaging content and interesting stories.</p>
          <Link to="/discover" className="btn btn-primary btn-lg">
            Discover Now
          </Link>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-dark">Popular Podcasts</h2>
            <ul className="list-unstyled">
              {podcastImages.map((podcast, index) => (
                <li key={index} className="podcast-item">
                  {podcast.urls.small ? (
                    <img
                      src={podcast.urls.small}
                      alt={`Podcast ${index + 1}`}
                      className="podcast-image"
                    />
                  ) : (
                    <div className="image-error">Image not available</div>
                  )}
                  <p className="podcast-description text-dark">
                    Podcast {index + 1}: {podcast.alt_description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-dark">Featured Episodes</h2>
            <ul className="list-unstyled">
              {[1, 2, 3, 4, 5].map((episode) => (
                <li key={episode} className="audio-file">
                  <img
                    src={VolumeIcon}
                    alt="Audio Icon"
                    className={`audio-icon ${playingAudio === episode ? 'playing' : ''}`}
                    onClick={() => playAudio(episode)}
                  />
                  {playingAudio === episode && (
                    <audio
                      autoPlay
                      src={audioFiles[episode - 1]} // Adjust index based on the episode number
                      onEnded={() => setPlayingAudio(null)}
                    />
                  )}
                  <div className="episode-details">
                    <h3>Episode {episode}: Exciting Title</h3>
                    <p className="episode-description text-dark">
                      A brief description of the episode content.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
