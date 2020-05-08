const express = require('express');

const app = express();

// <!--# include virtual="/header-app" -->

const html = `<html>
    <body>
        <h2>Content</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, alias.</p>
    </body>
</html>`;

app.get('*', (req, res) => {
  res.type('html').send(html);
});

app.listen(8809, () => console.log('Content app listening...'));
