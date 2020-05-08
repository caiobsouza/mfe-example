const express = require('express');

const app = express();

const html = `<html>
    <body>
        <h1>Home</h1>
        <nav>
          <ul>
          <li>Home</li>
          <li>About</li>
          </ul>
        </nav>
    </body>
</html>`;

app.get('/header-app', (req, res) => {
  res.type('html').send(html);
});

app.listen(8808, () => console.log('Header app listening...')); 
