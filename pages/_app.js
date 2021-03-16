import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const express = require('express');
  const mysql = require('mysql');

  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'nodemysql'
  });


  const app = express();

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySql Connected.....')
  });

  app.listen('3000', () => {
    console.log('Server started on port 3000');
  });

  return <Component {...pageProps} />
}

export default MyApp
