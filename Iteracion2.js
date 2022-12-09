/*
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruébalo con un console.log.
*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
console.log("Is Approved: ")

for(let aprobados of alumns) {
    if(aprobados.T1 && aprobados.T2 && aprobados.T3 == true) {
        console.log('- '+aprobados.name);
        } else if(aprobados.T1 && aprobados.T3 == true) {
        console.log('- '+aprobados.name);
        } else if(aprobados.T2 && aprobados.T3 == true) {
            console.log('- '+aprobados.name);
        } else if(aprobados.T1 && aprobados.T2 == true) {
            console.log('- '+aprobados.name);
        }
    }    
isApproved = true;
