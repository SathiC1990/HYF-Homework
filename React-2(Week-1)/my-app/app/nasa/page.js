"use client";
import React, { useState, useEffect } from "react";

export default function AstronomyPicture() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=rImV4aOVkxgIbtpJLlJ3pHzzbHghzahaQTcM3wNU"
        );
        const data = await response.json();
        setPhoto(data);
        console.log("Fetched APOD data:", data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };

    fetchPhoto();
  }, []);

  if (!photo) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Astronomy Picture of the Day</h1>
      <h2>{photo.title}</h2>
      {photo.media_type === "image" ? (
        <img src={photo.url} alt={photo.title} />
      ) : (
        <iframe
          title="NASA Video"
          src={photo.url}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
      <p>{photo.explanation}</p>
      <p>Date: {photo.date}</p>
    </div>
  );
}
