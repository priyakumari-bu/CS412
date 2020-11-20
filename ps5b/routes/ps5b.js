const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/config');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncSet = promisify(client.set).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, success) => {
    if(err) {
        throw new Error(err)
    }
});

router.post('/', async (req, res, next) => {
    let artist = req.body.artist;
    let match = await asyncExists(artist);
    if(match) {
        let data = await asyncGet(artist);
        let response = {
            data: data,
            cached: true
        }
        res.send(response);
    } else {
        let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + req.body.artist);
        let data = await rawReturnValue.json();
        await asyncSet(artist, JSON.stringify(data));
        let response = {
            data: data,
            cached: false
        }
        await asyncExpire(artist, 15);
        res.send(response);
    }
});

/*
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
*/

module.exports = router;