const Zombie = require('../models/zombie');
const { fetchAll } = require('../models/zombie');
//let suma_estados = [];

// Mostrar Form para registrar Zombie
exports.addZombie = (request, response, next) => {
    response.render('add_zombie',  {
        titulo_1: "Agregar Zombie",
        titulo_2: "Lista Zombies",
    });
};

// Desplegar Zombies
exports.getZombies = (request, response, next) => {
    Zombie.fetchAll()
        .then(([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

exports.getZombiesFiltered = (request, response, next) => {
    Zombie.fetchFilters(request.body.select_value)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

/*exports.postSearch = (request, response, next) => {
    console.log(request.body.query);
    platillo.find(request.body.query)
        .then( ([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(
            err => {
                console.log(err);
                esponse.status(200).json({error: err});
            }
        );
    
};*/
