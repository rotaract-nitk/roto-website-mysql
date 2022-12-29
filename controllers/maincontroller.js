const db = require('../models');
const User = db.User;
const express = require('express');
const social = require('../public/js/socials');


module.exports = async (req,res) => {
    const siteUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    let teams = await User.findAll();
    
    res.render('home', { siteData : {
                                    social : social,
                                    siteUrl : siteUrl,
                                    teams: teams,
                                    gallery:{},
                                    events:{}
                                }
                        });
}