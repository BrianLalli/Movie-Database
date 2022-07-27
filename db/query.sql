SELECT movie_names.movie_name AS name , movie_reviews.review AS review
FROM movies
JOIN movie_names ON movie_reviews.review = movie_review.id;