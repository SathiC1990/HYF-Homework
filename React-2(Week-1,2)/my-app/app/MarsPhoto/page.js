"use client";
import React, { useState, useEffect, use } from "react";

export default function MarsPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=rImV4aOVkxgIbtpJLlJ3pHzzbHghzahaQTcM3wNU"
      )
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data.photos);
        })
        .catch((error) => {
          console.error("Error fetching Mars photos:", error);
        });
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Mars Photos</h1>
      <div className="photo-grid">
        {photos.slice(0, 10).map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.img_src} alt={`Mars photo ${photo.id}`} />
            <p>Rover: {photo.rover.name}</p>
            <p>Camera: {photo.camera.full_name}</p>
            <p>Date: {new Date(photo.earth_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
