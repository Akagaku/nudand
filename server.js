//jshint esversion: 6

import express from 'express';
const app = express();

import { Trait, Race, dragonborn, dwarf, elf, genasi, halfOrc, halfling, human } from './race.js';

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

app.get('/wiki/main', function(req, res) {
    res.render('wiki/main.ejs', {title: 'Wiki'});
});

app.get('/races/dragonborn', function(req, res) {
    res.render('races/dragonborn.ejs', {title: 'Dragonborn', race: dragonborn});
});

app.get('/races/dwarf', function(req, res) {
    res.render('races/dwarf.ejs', {title: 'Dwarf', race: dwarf});
});

app.get('/races/elf', function(req, res) {
    res.render('races/elf.ejs', {title: 'Elf', race: elf});
});

app.get('/races/half-orc', function(req, res) {
    res.render('races/half-orc.ejs', {title: 'Half-Orc', race: halfOrc});
});

app.get('/races/halfling', function(req, res) {
    res.render('races/halfling.ejs', {title: 'Halfling', race: halfling});
});

app.get('/races/human', function(req, res) {
    res.render('races/human.ejs', {title: 'Human', race: human});
});

app.listen(1974, function() {
    console.log('Critical success! Server is running on port 1974.');
});