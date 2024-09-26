const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM "koalas" 
        ORDER BY "name";
    `;
    pool.query(sqlQuery)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('error getting koalas in router.get', error);
        });
});

// POST
koalaRouter.post('/', (req, res) => {
    const sqlQuery = `
        INSERT INTO "koalas" 
            ("name", "age", "color", "readyToTransfer", "notes") 
        VALUES 
            ($1, $2, $3, $4, $5)
    `;
    const sqlParams = [
        req.body.name,
        req.body.age,
        req.body.color,
        req.body.readyForTransfer,
        req.body.description
    ];

    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);

            res.sendStatus(500);
        });
});

// PUT
koalaRouter.put('/:koalaId', (req, res) => {
    const id = req.params.koalaId; // Use koalaId instead of id
    const readyToTransfer = req.body.readyToTransfer; // Get readyToTransfer from the request body

    const sqlText = `
        UPDATE "koalas" 
        SET "readyToTransfer"=$2
        WHERE id=$1;
    `;
    const params = [id, readyToTransfer]; // Make sure params is defined correctly

    pool.query(sqlText, params)
        .then(response => {
            console.log(`PUT /koalas/${id} succeeded!`);
            res.sendStatus(204); // No content, indicating success
        })
        .catch(err => {
            console.log('PUT /koalas/:koalaId failed', err);
            res.sendStatus(500); // Internal server error
        });
});


// DELETE
koalaRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const sqlText = `
        DELETE FROM "koalas" WHERE "id" = $1;
    `;
    let params = [id];

    pool.query(sqlText, params)
        .then((response) => {
           
            res.sendStatus(200);
        }).catch((err) => {
            console.log('something went wrong in koalaRouter.delete', err);
            res.sendStatus(500)
        });
});

module.exports = koalaRouter;
