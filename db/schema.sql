DROP DATABASE IF EXISTS movieReviews_db;
CREATE DATABASE movieReviews_db;

USE movieReviews_db;

CREATE TABLE movies (
  id INT NOT NULL  PRIMARY KEY,
  movie_name VARCHAR(100)
);

CREATE TABLE reviews (
  movie_id INT NOT NULL,
  review TEXT
  FOREIGN KEY (movies)
  REFERENCES movies(id)
);
