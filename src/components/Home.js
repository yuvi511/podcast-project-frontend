import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Home.css";
import VolumeIcon from "./volume.png";
import AudioFile1 from "./audio1.mp3";
import AudioFile2 from "./audio2.mp3";
import AudioFile3 from "./audio3.mp3";
import AudioFile4 from "./audio4.mp3";
import AudioFile5 from "./audio5.mp3";
import "./Home.css";

const audioFiles = [AudioFile1, AudioFile2, AudioFile3, AudioFile4, AudioFile5];

const Home = () => {
  const [podcastImages, setPodcastImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = [
          {
            urls: {
              small:
                "https://www.smartpassiveincome.com/wp-content/uploads/2021/12/Learn-How-to-Podcast.png",
            },
            alt_description: "Podcast Image 1",
          },
          {
            urls: {
              small:
                "https://www.smartpassiveincome.com/wp-content/uploads/2019/11/askpat-2.0-logo-e1574394792545.png",
            },
            alt_description: "Podcast Image 2",
          },
          {
            urls: {
              small:
                "https://www.searchenginejournal.com/wp-content/uploads/2020/02/7-tips-to-make-a-successful-podcast-5e3d9fa1ad735-1520x800.webp",
            },
            alt_description: "Podcast Image 3",
          },
        ];
        setPodcastImages(data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching podcast images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    gsap.from(".podcast-item", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
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

  const episodeDetails = [
    {
      title: "Episode 1: Tales Unheard: Stories from the Unexplored Realms",
      description:
        "Dive into the unknown with Tales Unheard where every episode unveils captivating narratives from unexplored corners of the world. Through vivid storytelling and immersive soundscapes, we unravel myths, legends, and personal anecdotes that transport you to realms both fantastical and real. Join us on this auditory expedition to discover the untold tales that shape our diverse cultures and ignite the imagination.",
    },

    {
      title: "Episode 3:Perspectives Unboxed: Unconventional Dialogues",
      description:
        "Welcome to Perspectives Unboxed, where we unpack diverse viewpoints through thought-provoking conversations and unexpected discussions. Engage with us as we explore unconventional ideas, challenge societal norms, and dive into the complexity of human experiences. Join our open-minded community as we unravel unique perspectives, inviting you to expand your horizons and see the world through different lenses.",
    },
    {
      title: "Episode 3:Perspectives Unboxed: Unconventional Dialogues",
      description:
        "Welcome to Perspectives Unboxed, where we unpack diverse viewpoints through thought-provoking conversations and unexpected discussions. Engage with us as we explore unconventional ideas, challenge societal norms, and dive into the complexity of human experiences. Join our open-minded community as we unravel unique perspectives, inviting you to expand your horizons and see the world through different lenses.",
    },
    {
      title: "Episode 4:Inquiry Illuminated: Curiosity Unveiled",
      description:
        "Join us on Inquiry Illuminated as we illuminate the unexplored corridors of knowledge through curious inquiries and enlightening discussions. Each episode is a journey through intriguing questions, exploring topics from science, philosophy, history, and beyond. Delve into the realms of the unknown, satisfying your curiosity and sparking new intellectual revelations.",
    },
    {
      title:
        "Episode 5: Mindscape Medley: Unraveling the Spectrum of Human Thought",
      description:
        'Welcome to "Mindscape Medley," where we embark on a captivating voyage through the vast spectrum of human thoughts, ideas, and experiences. Join us as we navigate the labyrinth of the mind, featuring fascinating interviews, engaging discussions, and immersive storytelling. From the realms of science and technology to the nuances of culture and creativity, each episode is a mosaic of diverse perspectives, unveiling the intricacies of the human intellect. Join us in unraveling the threads of curiosity and discovery that weave the tapestry of our existence.',
    },
  ];
  return (
    <div className="podcast-home">
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="display-3 text-white">Discover Amazing Podcasts</h1>
          <p className="lead text-white">
            Explore a world of engaging content and interesting stories.
          </p>
          <Link to="/all" className="btn btn-primary btn-lg">
            Discover Now
          </Link>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          {podcastImages.map((podcast, index) => (
            <div key={index} className="col-md-4">
              <div className="podcast-item mb-4">
                {podcast.urls.small ? (
                  <img
                    src={podcast.urls.small}
                    alt={`Podcast ${index + 1}`}
                    className="podcast-image img-fluid rounded"
                  />
                ) : (
                  <div className="image-error">Image not available</div>
                )}
                <h3 className="text-dark">{episodeDetails[index].title}</h3>
                <p className="episode-description text-dark">
                  {episodeDetails[index].description}
                </p>
                <img
                  src={VolumeIcon}
                  alt="Audio Icon"
                  className={`audio-icon ${
                    playingAudio === index + 1 ? "playing" : ""
                  }`}
                  onClick={() => playAudio(index + 1)}
                />
                {playingAudio === index + 1 && (
                  <audio
                    autoPlay
                    src={audioFiles[index]}
                    onEnded={() => setPlayingAudio(null)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
