import React, { useState, useEffect } from 'react';
import './Upload.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [podcasts, setPodcasts] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAudioFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('audioFile', audioFile);

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Podcast uploaded successfully!');
        setTitle('');
        setDescription('');
        setAudioFile(null);
        // After a successful upload, you can refresh the list of podcasts
        fetchPodcasts();
      } else {
        console.error('Error uploading podcast:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading podcast:', error.message);
    }
  };

  const fetchPodcasts = async () => {
    try {
      const response = await fetch('http://localhost:5001/podcasts');
      if (response.ok) {
        const data = await response.json();
        setPodcasts(data);
      } else {
        console.error('Error fetching podcasts:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error.message);
    }
  };

  useEffect(() => {
    // Fetch the list of podcasts when the component mounts
    fetchPodcasts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="form-container">
        <h2 className="mb-4">Upload Podcast</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control textarea-control"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="audioFile" className="form-label">
              Audio File:
            </label>
            <input
              type="file"
              className="form-control file-control"
              id="audioFile"
              accept="audio/*"
              onChange={handleAudioFileChange}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>

      <div className="podcasts-container mt-5">
        <h2>Podcasts</h2>
        <ul>
          {podcasts.map((podcast) => (
            <li key={podcast._id}>
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
              {/* You can add audio player or download link here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Upload;
