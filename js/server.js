const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'movieReviews_db'
  },
  console.log(`Connected to the movieReviews_db database.`)
);

// Query database
// ROUTE 1 READ ALL MOVIES
app.get('/api/movies', (req, res) => {
  const sql = `SELECT id, movie_name AS title FROM movies`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// ROUTE 3 ADD REVIEW
app.get('/api/add-review', (req, res) => {
  const sql = `ADD id AS movie_review AS review FROM movies`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// ROUTE 3 UPDATES MOVIE
app.get('/api/update-review', (req, res) => {
  const sql = `UPDATE id, movie_name AS title FROM movies`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});
// ROUTE 4 DELETES MOVIE AND REVIEW BASED ON ID
// Hardcoded query: DELETE FROM course_names WHERE id = 3;
app.get('/api/movies', (req, res) => {
  const sql = `DELETE id, movie_name AS title FROM movies`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});



app.use((req, res) => {
  res.status(404).end();
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});