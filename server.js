let express = require('express');

let app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.ejs', {title: 'Home'});
});

app.get('/guide', function(req, res) {
    res.render('guide.ejs', {title: 'Guide'});
});

app.get('/primer', function(req, res) {
    res.render('primer.ejs', {title: 'Primer'});
});

app.get('/sothos', function(req, res) {
    res.render('person.ejs', {
        title: 'Sothos',
        race: 'Elf (formerly human)',
        born: '11,975 AoD',
        died: '2,078 AoE (aged 2,704)',
        ruler: true,
        position: 'King of Nekravys',
        ruler: 'true',
        reign: '1 AoE - 2,078 AoE',
        family: ['Sothia (daughter)']
    })
});

app.listen(1974, function() {
    console.log('Critical success! Server is running on port 1974.')
});