console.log(tempData);

const renderizado = (tempData) => {
  tempData.forEach((pelicula) => {
    //creamos elemenos para la card
    const card = document.createElement("div");
    const titulo = document.createElement("h2");
    const dir = document.createElement("h3");
    const dur = document.createElement("h3");
    const year = document.createElement("h3");
    const genero = document.createElement("h3");
    const rate = document.createElement("h3");
    const img = document.createElement("img");

    //obtenemos el contenedor para las cards.
    const contenedor = document.getElementById("contenedorPeliculas");

    //aplicamos estilos
    card.classList.add("tarjetas");
    titulo.classList.add("titulo");

    //seteamos los valores obtenidos de tempData a los elementos
    titulo.innerText = pelicula.title;
    year.innerText = `Año: ${pelicula.year}`;
    dir.innerText = `Director: ${pelicula.director}`;
    dur.innerText = `Duración: ${pelicula.duration}`;
    genero.innerText = pelicula.genre;
    rate.innerText = pelicula.rate;
    img.src = pelicula.poster;
    //insertamos los elemenos a la card

    card.appendChild(titulo);
    card.appendChild(year);
    card.appendChild(dir);
    card.appendChild(dur);
    card.appendChild(genero);
    card.appendChild(rate);
    card.appendChild(img);

    //insertamos la card en el contenedor del DOM
    contenedor.appendChild(card);
  });
};
renderizado(tempData);
