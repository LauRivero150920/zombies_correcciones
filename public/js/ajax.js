document.getElementById("enviar_ajax").onclick = () => {
    console.log("Se presionó el botón 😄");
    fetch('/zombies/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            datos = data.rows;
            let tabla = "";
            if(datos.length > 0){
                for(let zombie of datos){
                    tabla += '<tr>';
                    tabla += '<td>' + zombie.nombre_completo +'</td>';
                    tabla += '<td>' + zombie.descripcion + '</td>';
                    tabla += '<td>' + new Date(zombie.fecha_hora) + '</td>';
                    tabla +='</tr>';
                }
            }
            else{
                tabla += '<tr>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla +='</tr>';
                tabla += '</tbody>';
            }
            document.getElementById("table_body").innerHTML = tabla;
            document.getElementById("sum_zombies_cont").innerHTML = sum_zombies;
        }).catch(err => {
            console.log(err);
        });
}

document.getElementById("show_all").onclick = () => {
    console.log("Se presionó el botón show_all 😄");
    fetch('/zombies/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            datos = data.rows;
            let tabla = "";
            if(datos.length > 0){
                for(let zombie of datos){
                    tabla += '<tr>';
                    tabla += '<td>' + zombie.nombre_completo +'</td>';
                    tabla += '<td>' + zombie.descripcion + '</td>';
                    tabla += '<td>' + new Date(zombie.fecha_hora) + '</td>';
                    tabla +='</tr>';
                }
            }
            else{
                tabla += '<tr>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla +='</tr>';
                tabla += '</tbody>';
            }
            document.getElementById("table_body").innerHTML = tabla;
            // document.getElementById("sum_zombies_cont").innerHTML = sum_zombies;
            
        }).catch(err => {
            console.log(err);
        });
}

document.getElementById("select_filter").onchange = () => {
    console.log("opción seleccionada 😄");
    fetch('/zombies/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            select_value: document.getElementById("select_filter").value,
        })
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            datos = data.rows;
            let tabla = "";
            if(datos.length > 0){
                for(let zombie of datos){
                    tabla += '<tr>';
                    tabla += '<td>' + zombie.nombre_completo +'</td>';
                    tabla += '<td>' + zombie.descripcion + '</td>';
                    tabla += '<td>' + new Date(zombie.fecha_hora) + '</td>';
                    tabla +='</tr>';
                }
            }
            else{
                tabla += '<tr>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla +='</tr>';
                tabla += '</tbody>';
            }
            document.getElementById("table_body").innerHTML = tabla;
        }).catch(err => {
            console.log(err);
        });
}