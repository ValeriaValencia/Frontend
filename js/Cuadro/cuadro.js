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
    espacio.addEventListener('click',() =>{
      alert('Perdiste')
      });
    }
    contenedorJuego.appendChild(espacio)
  document.body.appendChild(contenedorJuego)
  }
} 
Juego(prompt('dame un numero'))














