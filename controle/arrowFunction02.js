let comparaComThis = (parms) => console.log(this === parms);
comparaComThis(global)

let arrow = (parms) => console.log(this === parms)