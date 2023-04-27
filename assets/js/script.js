// API
//MOSTRAR DIGIMON
function mostrarDigimon(name) {
  console.log(name);
  let contenedor = document.getElementById("carta_container");
  contenedor.innerHTML = '';

  fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
  .then((response) => response.json())
  .then((result) => {
    
	  let digimones = result;
    let contenedor = document.getElementById("carta_container");
    let cartas = '';
    
	for (let digimon in digimones) {
      	cartas += `

          <div class="col-md-12 col-sm-12">
          <div class="card" id="carta_digimon">
          
          <img src="${digimones[digimon].img}" class="card-img-top" alt="${digimones[digimon].name}" id="img_digimon1">
          
          <div class="card-body">
              <h3 id="nombre_digimon">${digimones[digimon].name}</h3>
              <h6 id="lab-nivel">level</h6>
              <h6 id="nivel_digimon">${digimones[digimon].level}</h6>
          </div>
          
          <div id="botonModal">
              <button type="button" class="btn btn-info" onclick="mostrarTodos('${digimones[digimon].name}')">
              <i class="fa-solid fa-minus"></i>
              </button>
          </div>
  
          </div>
          </div>
            
        `;
    }
    contenedor.innerHTML = cartas;
  })
  .catch((error) => console.log(error));
}



//BUSCAR DIGIMON
function buscarDigimon() {
  let name = document.getElementById("inputName").value
  console.log(name);

  fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let digimon = data[0]
    let contenedor = document.getElementById("carta_container");
    console.log(digimon);
    let cartas = `
        <div class="col-md-12 col-sm-12">
        <div class="card" id="carta_digimon">
        <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}" id="img_digimon1">
        <div class="card-body">
            <h3 id="nombre_digimon">${digimon.name}</h3>
            <h6 id="lab-nivel">level</h6>
            <h6 id="nivel_digimon">${digimon.level}</h6>
        </div>
        <div id="botonModal">
            <button type="button" class="btn btn-info" onclick="mostrarTodos('${digimon.name}')">
            <i class="fa-solid fa-minus"></i>
            </button>
        </div>
        </div>
        </div>
      `;
    contenedor.innerHTML = cartas;
  })
  .catch(() => alert("No se ha podido cargar el digimon buscado.")); 
  // .catch((error) => console.log(error));
}

document.getElementById("botonBuscar").addEventListener("click", function (event) {
  event.preventDefault()
  buscarDigimon()
})

//TODOS LOS DIGIMONES

function mostrarTodos() {
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((result) => {
    
	let digimones = result;
    // console.log(digimones);
    let contenedor = document.getElementById("carta_container");
    
    // console.log(digimones);
    let cartas = '';
    
	for (let digimon in digimones) {
      	cartas += `

          <div class="col-lg-3 col-xl-3">
          <div class="card" id="carta_digimones">
          <img src="${digimones[digimon].img}" class="card-img-top" alt="${digimones[digimon].name}">
          
          <div class="card-body">
              <h3 id="nombre_digimones">${digimones[digimon].name}</h3>
              <h6 id="lab-nivel">level</h6>
              <h6 id="nivel_digimones">${digimones[digimon].level}</h6>
          </div>
          
          <div id="botonModal">
              <button type="button" class="btn btn-info" onclick="mostrarDigimon('${digimones[digimon].name}')">
              <i class="fa-solid fa-plus"></i>
              </button>
          </div>
  
          </div>
          </div>
            
        `;
    }
    contenedor.innerHTML = cartas;
  })
  .catch((error) => console.log(error));
}
mostrarTodos()



//FONDO 1
var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      // Setting the width and height of the canvas
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
      
      // Setting up the letters
      var letters = '101010110101010101011010101011010101010101';
      letters = letters.split('');
      
      // Setting up the columns
      var fontSize = 10,
          columns = myCanvas.width / fontSize;
      
      // Setting up the drops
      var drops = [];
      for (var i = 0; i < columns; i++) {
        drops[i] = 1;
      }


      // Setting up the draw function
      function draw() {
        
        ctx.fillStyle = 'rgba(0, 0, 0, .1)';
        ctx.fillRect(0, 0, myCanvas.width, 1000);
        for (var i = 0; i < drops.length; i++) {
          var text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillStyle = '#94771a';
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          if (drops[i] * fontSize > myCanvas.height && Math.random() > .95) {
            drops[i] = 0;
          }
        }
      }
      
      // Loop the animation
      setInterval(draw, 33);
