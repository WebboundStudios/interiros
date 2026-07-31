import { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../constants/data';

/**
 * Custom hook to fetch live Google Reviews via Google Places API (or CORS proxy / third-party service).
 * Falls back seamlessly to curated Google reviews if API key / Place ID is not provided.
 */
export function useGoogleReviews() {
  const [reviews, setReviews] = useState(TESTIMONIALS_DATA);
  const [rating, setRating] = useState('5.0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

  useEffect(() => {
    if (!apiKey || !placeId) {
      // Use fallback curated Google Reviews dataset
      return;
    }

    async function fetchPlacesReviews() {
      setLoading(true);
      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
        // Note: Google Places API requires CORS handling on frontend or proxy backend
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.reviews) {
          const liveReviews = data.result.reviews.map((r) => ({
            quote: r.text,
            client: r.author_name,
            role: `${r.relative_time_description} • Google ${r.rating}★ Review`,
            avatar: r.profile_photo_url,
          }));

          setReviews(liveReviews);
          if (data.result.rating) {
            setRating(data.result.rating.toFixed(1));
          }
        }
      } catch (err) {
        console.warn('Google Places API fetch fallback to local reviews:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlacesReviews();
  }, [apiKey, placeId]);

  return { reviews, rating, loading, error };
}
