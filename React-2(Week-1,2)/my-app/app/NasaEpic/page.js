"use client";
import React, { useState, useEffect } from "react";
import styles from "./NasaEpic.module.css";
import { useSearchParams } from "next/navigation";

export default function NasaEpic() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const [epicImages, setEpicImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!date) {
      setError("No date specified in query string");
      return;
    }
    const fetchEpicImages = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=rImV4aOVkxgIbtpJLlJ3pHzzbHghzahaQTcM3wNU`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEpicImages(data);
      } catch (error) {
        console.error("Error fetching EPIC images:", error);
        setError(error.message);
      }
    };

    fetchEpicImages();
  }, [date]);

  if (!date) {
    return <p>Please provide a date query parameter, e.g. ?date=2024-05-01</p>;
  }

  if (error) {
    return <p>Error fetching EPIC images: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>NASA EPIC Images (Most Recent)</h1>
      <div className={styles.imageGrid}>
        {epicImages.slice(0, 5).map((image) => {
          const [year, month, day] = image.date.split(" ")[0].split("-");
          const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image.image}.png`;
          return (
            <div key={image.identifier} className={styles.imageCard}>
              <img src={imageUrl} alt={image.caption} />
              <p className={styles.caption}>{image.caption}</p>
              <p className={styles.caption}>{image.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
