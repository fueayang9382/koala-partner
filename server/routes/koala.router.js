const { Router, application } = require('express');
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
koalaRouter.post('/', (req,res)=>{
    console.log('we are in the koala.Router.post');
    let sqlQuery = `
    INSERT INTO "koala"
    ("age", "name", "gender", "rtt","notes") 
    VALUES ($1,$2,$3,$4,$5);   `

    let koala = req.body
    let sqlvalues = [koala.age, koala.name, koala.gender, koala.rtt, koala.notes];
    pool.query(sqlQuery, sqlvalues)
    .then((dbRes)=>{
        res.sendStatus(201);
    })
    .catch((dbErr)=>{
        console.log('something broke in koalaRouter.post', dbErr);
    })

})


// PUT


// DELETE
koalaRouter.delete('/:id', (req, res)=>{
    console.log(req.params)
    let idToDelete =req.params.id;
    let sqlQuery = `
    DELETE FROM "koala"
    WHERE "id"=$1;`

    let sqlvalues= [idToDelete];
    pool.query(sqlQuery, sqlvalues) 
    .then((dbRes)=>{
    res.sendStatus(200)
    })
    .catch((dbErr)=>{
    console.log('something broke in koalaRouter.Delete', dbErr);
    })
})


module.exports = koalaRouter;