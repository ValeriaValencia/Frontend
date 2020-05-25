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
Object.keys(valeria.dato).forEach(key => {
    const p = document.createElement('p');
    const pDato = document.createTextNode(key + ':' + valeria.dato[key]);
    p.appendChild(pDato);
    document.querySelector('body').appendChild(p);
    p.className ='dato';
    p.addEventListener('click', () => { 
    alert(key + ':' + valeria.dato[key])})
});

 
Object.keys(valeria.direccion).forEach(key => {
  const p = document.createElement('p');
  const pDireccion = document.createTextNode(key + ':' + valeria.direccion[key]);
  p.appendChild(pDireccion);
  document.querySelector('body').appendChild(p);
  p.className ='direccion'
  p.addEventListener('click', () => {
    alert(key + ':' + valeria.direccion[key])})
  });
  

Object.keys(valeria.escuela).forEach(key => {
  const p = document.createElement('p');
  const pEscuela = document.createTextNode(key + ':' + valeria.escuela[key]);
  p.appendChild(pEscuela);
  document.querySelector('body').appendChild(p);
  p.className ='escuela'
  p.addEventListener('click', () => {
    alert(key + ':' + valeria.escuela[key])})
  
});

  Object.keys(valeria.trabajo).forEach(key => {
    const p = document.createElement('p');
    const pTrabajo = document.createTextNode(key + ':' + valeria.trabajo[key]);
    p.appendChild(pTrabajo);
    document.querySelector('body').appendChild(p);
    p.className = 'trabajo'
    p.addEventListener('click', () => {
      alert(key + ':' + valeria.trabajo[key])})


  });
  Object.keys(valeria.skills).forEach(key => {
    const p = document.createElement('p');
    const pSkills = document.createTextNode(key + ':' + valeria.skills[key]);
    p.appendChild(pSkills);
    document.querySelector('body').appendChild(p);
    p.className ='skills'
    p.addEventListener('click', () => {
      alert(key + ':' + valeria.skills[key])})
  });

 /* const getSections = () => Object.keys(valeria)
  const getSubSections = (subsection) => Object.keys(valeria[subsection])
  const getValueSubSection = (section ,subsection) => valeria[section][subsection]
  const createNode = nodeName => document.createElement(nodeName)
  const createParagraph = (textContent) => {
    const paragraph = createNode('p')
    paragraph.textContent = textContent
    return paragraph
  }

  const createCV = () => {
    const constainerSectionsDiv = createNode('div')
    constainerSectionsDiv.className = 'container'

    getSections().forEach(section => {
      const constainerSectionDiv = createNode('div')
      constainerSectionDiv.className = section
      constainerSectionDiv.appendChild(createParagraph(section.toLocaleUpperCase()))
      getSubSections(section).forEach(subsection => {
        const valueSubsection = getValueSubSection(section, subsection)
        const paragraphSubsection = createParagraph(valueSubsection)
        paragraphSubsection.addEventListener('click', () => {
          alert(valueSubsection)
        })
        constainerSectionDiv.appendChild(paragraphSubsection)
      })
      constainerSectionsDiv.appendChild(constainerSectionDiv)
          })
 document.body.appendChild(constainerSectionsDiv)
    }

     createCV()  */
 