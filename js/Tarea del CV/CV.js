let valeria={}
  valeria.dato={}
  valeria.dato.name="Valeria Irisel"
  valeria.dato.lastName="Valencia"
  valeria.dato.edad=24
  valeria.direccion={}
  valeria.direccion.calle="Calle 19"
  valeria.direccion.numeroExterior=39
  valeria.direccion.numeroInterior=7
  valeria.direccion.codigoPostal=15010
  valeria.direccion.colonia="Valentin Gomez Farias"
  valeria.direccion.ciudad="Ciudad de Mexico"
  valeria.escuela={}
  valeria.escuela.preparatoria="CECyT 8 Narciso Bassols"
  valeria.escuela.preparatoriaPeriodo="2011-2014"
  valeria.escuela.preparatoriaTitulo="Titulo en Tecnico en Computacion"
  valeria.escuela.superior="UPIICSA"
  valeria.escuela.superiorPeriodo="2014-2018"
  valeria.escuela.superiorTitulo="Pasante de Ing en Informatica"
  valeria.trabajo={}
  valeria.trabajo.accasiPuesto="Soporte tecnico"
  valeria.trabajo.accasiDescripcion="Capacitacion presencial y telefonica a clientes que utilizaban en sistema,configuracion de biometricos"
  valeria.trabajo.accasiPeriodo="Junio-Septiembre 2019"
  valeria.skills={}
  valeria.skills.css="CSS"
  valeria.skills.html="HTML"
  valeria.skills.JS="JS"
let body= document.createElement("body");
Object.keys(valeria.dato).forEach(key => {
  const p= document.createElement("p");
  const pDato= document.createTextNode(key + ":" + valeria.dato[key]);
  p.appendChild(pDato);
  document.querySelector("body").appendChild(p);
});
Object.keys(valeria.direccion).forEach(key => {
  const p= document.createElement("p");
  const pDireccion= document.createTextNode(key + ":" + valeria.direccion[key]);
  p.appendChild(pDireccion);
  document.querySelector("body").appendChild(p);
});
Object.keys(valeria.escuela).forEach(key => {
  const p= document.createElement("p");
  const pEscuela= document.createTextNode(key + ":" + valeria.escuela[key]);
  p.appendChild(pEscuela);
  document.querySelector("body").appendChild(p);
});
  Object.keys(valeria.trabajo).forEach(key => {
    const p= document.createElement("p");
    const pTrabajo= document.createTextNode(key + ":" + valeria.trabajo[key]);
    p.appendChild(pTrabajo);
    document.querySelector("body").appendChild(p);
  });
  Object.keys(valeria.skills).forEach(key => {
    const p= document.createElement("p");
    const pSkills= document.createTextNode(key + ":" + valeria.skills[key]);
    p.appendChild(pSkills);
    document.querySelector("body").appendChild(p);
  });
