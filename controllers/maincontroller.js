const db = require('../models');
const User = db.User;
const express = require('express');
const social = require('../public/js/socials');


module.exports = async (req,res) => {
    const siteUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const teams = await User.findAll();
    const events = await db.Event.findAll();
    const gallery = await db.Galleries.findAll();
    
    
    res.render('home', { siteData : {
                                    social,
                                    siteUrl,
                                    teams,
                                    gallery,
                                    events
                                }
                        });
}