const db = require('../util/database');

module.exports = class Incidente {
    constructor(mi_nombre, mi_descripcion, mi_fecha_hora) {
        this.nombre_completo = mi_nombre;
        this.mi_descripcion = descripcion;
        this.mi_fecha_hora = fecha_hora
    }
    /*save(nombre_completo) {
        return db.execute('INSERT INTO nuevos_zombies (nombre_completo, estado) VALUES (?,?)'
        ,[this.nombre_completo, 1]);
    }*/
    
    static fetchAll(){
        return db.execute(
            'SELECT Z.nombre_completo nombre_completo, E.descripcion descripcion, ZE.fecha_hora fecha_hora FROM zombies Z, estados E, zombies_estados ZE WHERE Z.id = ZE.id_zombie AND E.id = ZE.id_estado'
        );
    }
    
    static fetchFilters(select){
        return db.execute(
            'SELECT Z.nombre_completo nombre_completo, E.descripcion descripcion, ZE.fecha_hora fecha_hora FROM zombies Z, estados E, zombies_estados ZE WHERE Z.id = ZE.id_zombie AND E.id = ZE.id_estado AND E.id = ?',
            [select]
        );
    }
}