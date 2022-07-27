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
// ROUTE 1 SHOW MOVIE
// ROUTE 2 UPDATES MOVIE
// ROUTE 3 ADD REVIEW
// ROUTE 4 DELETES MOVIE AND REVIEW BASED ON ID
// Hardcoded query: DELETE FROM course_names WHERE id = 3;
// Query database
db.query(`DELETE FROM movieReviews WHERE id = ?`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
db.query('SELECT * FROM movieReviews', function (err, results) {
    console.log(results);
  });
app.use((req, res) => {
  res.status(404).end();
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});