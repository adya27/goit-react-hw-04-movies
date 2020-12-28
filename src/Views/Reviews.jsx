import React, { useState, useEffect } from "react";

import { apiService } from "../JS/apiService";
import styles from "./Styles.module.css";

const ApiService = new apiService();

function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.fetchReviews(id)
      .then((res) => res.json())
      .then((data) => setReviews(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.reviewsList}>
      {reviews.length !== 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <ul className={styles.reviewsList}>
              <li>
                <h4>Author: {review.author}</h4>
              </li>
              <li>
                <p>{review.content}</p>
              </li>
            </ul>
          </li>
        ))
      ) : (
        <li>There is no reviews of this movie yet</li>
      )}
    </ul>
  );
}

export default Reviews;
