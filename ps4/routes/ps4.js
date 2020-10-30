const express = require('express');
const router = express.Router();
const request = require('request');
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/config');

router.route('/')
    .post((req, res, next) => {
        let info = doRequest(req.body.artist)
        .then(cleanReturnValue => {
            res.render('ps4', {'artist': req.body.artist, 'song1': cleanReturnValue.results[0].trackName,
                'song2': cleanReturnValue.results[1].trackName, 'song3': cleanReturnValue.results[2].trackName});
        });
    })

const doRequest = async value => {
    let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + value);
    let cleanReturnValue = await rawReturnValue.json();
    //console.log(cleanReturnValue.results[0].trackName);
    return cleanReturnValue;
};

module.exports = router;