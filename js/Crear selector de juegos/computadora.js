const contenedor = document.createElement('div')
contenedor.className = 'contenedor'
document.body.appendChild(contenedor)

const contenedor2 = document.createElement('div')
contenedor2.className = 'contenedor2'
document.body.appendChild(contenedor2)

const parrafo = document.createElement('p')
parrafo.textContent = 'La computadora de: Valeria'
parrafo.className = 'encabezado'
contenedor.appendChild(parrafo)

const contenedores = document.createElement('div')
  contenedores.className = 'contenedores'
  document.body.appendChild(contenedores)
  
const botonEncender = document.createElement('button')
  botonEncender.textContent = 'Encender'
  botonEncender.className = 'encabezado'
  contenedor.appendChild(botonEncender)
const botonApagar = document.createElement('button')
  botonApagar.textContent = 'Apagar'
  botonApagar.className = 'encabezado'
  contenedor.appendChild(botonApagar)  


  botonEncender.addEventListener('click', () =>{

   const frase = document.createElement('p')
   frase.textContent= 'Selecciona una accion'

  const botonCV = document.createElement('button')
  botonCV.textContent = 'Dame Mi CV'
  botonCV.className = 'boton'

  botonCV.addEventListener('click', () => {
    let valeria = {}
    valeria.dato = {}
      valeria.dato.name = 'Valeria Irisel'
      valeria.dato.lastName = 'Valencia'
      valeria.dato.edad = 24
    valeria.direccion = {}
      valeria.direccion.calle = 'Calle 19'
      valeria.direccion.numeroExterior = 39
      valeria.direccion.numeroInterior = 7
      valeria.direccion.codigoPostal = 15010
      valeria.direccion.colonia = 'Valentin Gomez Farias'
      valeria.direccion.ciudad = 'Ciudad de Mexico'
    valeria.escuela = {}
      valeria.escuela.preparatoria = 'CECyT 8 Narciso Bassols'
      valeria.escuela.preparatoriaPeriodo = '2011-2014'
      valeria.escuela.preparatoriaTitulo = 'Titulo en Tecnico en Computacion'
      valeria.escuela.superior = 'UPIICSA'
      valeria.escuela.superiorPeriodo = '2014-2018'
      valeria.escuela.superiorTitulo = 'Pasante de Ing en Informatica'
      valeria.trabajo = {}
      valeria.trabajo.accasiPuesto = 'Soporte tecnico'
      valeria.trabajo.accasiDescripcion = 'Capacitacion presencial y telefonica a clientes que utilizaban en sistema,configuracion de biometricos'
      valeria.trabajo.accasiPeriodo = 'Junio-Septiembre 2019'
    valeria.skills = {}
      valeria.skills.css = 'CSS'
      valeria.skills.html = 'HTML'
      valeria.skills.JS = 'JS'
  
  const body = document.body
  const contenedorCV = document.createElement('div')
  contenedorCV.className ='contenedorCV'
  contenedores.appendChild(contenedorCV)
  
  


  
  Object.keys(valeria.dato).forEach(key => {
      const p = document.createElement('p')
      const pDato = document.createTextNode(key + ':' + valeria.dato[key])
      p.appendChild(pDato)
      contenedorCV.appendChild(p)
      p.className ='dato'
      p.addEventListener('click', () => { 
      alert(key + ':' + valeria.dato[key])})
  });
  
   
  Object.keys(valeria.direccion).forEach(key => {
    const p = document.createElement('p')
    const pDireccion = document.createTextNode(key + ':' + valeria.direccion[key])
    p.appendChild(pDireccion)
    contenedorCV.appendChild(p)
    p.className ='direccion'
    p.addEventListener('click', () => {
      alert(key + ':' + valeria.direccion[key])})
    });
    
  
  Object.keys(valeria.escuela).forEach(key => {
    const p = document.createElement('p')
    const pEscuela = document.createTextNode(key + ':' + valeria.escuela[key])
    p.appendChild(pEscuela);
    contenedorCV.appendChild(p)
    p.className ='escuela'
    p.addEventListener('click', () => {
      alert(key + ':' + valeria.escuela[key])})
    
  });
  
    Object.keys(valeria.trabajo).forEach(key => {
      const p = document.createElement('p');
      const pTrabajo = document.createTextNode(key + ':' + valeria.trabajo[key])
      p.appendChild(pTrabajo)
      contenedorCV.appendChild(p);
      p.className = 'trabajo'
      p.addEventListener('click', () => {
        alert(key + ':' + valeria.trabajo[key])})
  
  
    });
    Object.keys(valeria.skills).forEach(key => {
      const p = document.createElement('p');
      const pSkills = document.createTextNode(key + ':' + valeria.skills[key])
      p.appendChild(pSkills)
      contenedorCV.appendChild(p);
      p.className ='skills'
      p.addEventListener('click', () => {
        alert(key + ':' + valeria.skills[key])})
    });
    botonAzar.addEventListener('click', ()=>{    
      contenedores.removeChild(contenedorCV)
       })
  })
  
  const botonAzar = document.createElement('button')
  botonAzar.textContent = 'Juego de Azar'
  botonAzar.className= 'boton'

  const contenedorJuego = document.createElement('div')
  contenedorJuego.className = 'contenedorJuego' 
  
  

  botonAzar.addEventListener('click', ()=>{ 
    
    const Juego = (numero) => {
      const numeroRandomGanador= Math.floor(Math.random() * numero) + 1
      console.log(numeroRandomGanador)
      const contenedorJuego = document.createElement('div')
      contenedorJuego.className = 'contenedorJuego' 
      
       
       
         
      
    
      for( let i=1;i<=numero;i++){
        const espacio= document.createElement('p')
        espacio.className = 'cuadrado'  
       
        if(i===numeroRandomGanador){
          espacio.textContent= i
          espacio.addEventListener('click', () => {
          alert('Ganaste')
          });
        } 
        else{
          espacio.textContent= i
        espacio.addEventListener('click', () =>{
          alert ('Perdiste')
          });
        }
        contenedorJuego.appendChild(espacio)
      document.body.appendChild(contenedorJuego)
     
      }
    } 
    Juego(prompt('dame un numero'))
}  );

  
  contenedor2.appendChild(frase)
  contenedor2.appendChild(botonCV)
  contenedor2.appendChild(botonAzar)

 botonApagar.addEventListener('click', ()=>{ 
  document.body.removeChild(contenedorJuego)
   
     })
    
  
  });





