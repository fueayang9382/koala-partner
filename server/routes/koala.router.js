const { Router } = require('express');
const express = require('express');
const pool = require('../module/pool');
const koalaRouter = express.Router();

// DB CONNECTION


// GET //THIS WORKS
koalaRouter.get('/', (req, res)=>{
    console.log('we in the koalaRouter.get')
    let sqlQuery=`
    select * from "koala";
`;

pool.query(sqlQuery)
    .then((dbRes)=>{
        res.send(dbRes.rows);
    })
    .catch((dbErr)=>{
    console.log('something went wrong in koalaRouter.get', dbErr)
    res.sendStatus(500);
    })
})
// POST


// PUT


// DELETE

module.exports = koalaRouter;