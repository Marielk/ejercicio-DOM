const button = document.getElementById('btn');
boton.addEventListener('click', () => {
  //aqui extraemos el texto que ingresa el usuario 
  let comment = document.getElementById('comment').value;
  //limpiar el cuadro de texto
  document.getElementById('comment').value = " "; 

  //contenedor donde dejare mis comentarios en html 
  const cont = document.getElementById('cont');
  
  //crear un div contenedor que sera padre de los demas elementos que crearemos
  const newComments = document.createElement('div');
  //validar que el textarea tenga un comentario
  if (comment.length === 0 || comment === null) {
    alert('Debes ingresar un mensaje');
    return false; 
  }
  //crear un chekbox
  const check = document.createElement('input'); 
  check.type = 'checkbox'; 
  //crear icono corazon 
  const heart = document.createElement('i'); 
  heart.classList.add('fas', 'fa-heart', 'heart')
  // crear icono basura
  const trash = document.createElement('i'); 
  trash.classList.add('fas', 'fa-trash', 'trash')
  //nodos de texto del textarea 
  let newTextComments = document.createTextNode(comment); 

  const contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(newTextComments);
  newComments.appendChild('check');
  newComments.appendChild('heart');
  newComments.appendChild('trash');
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments); 

})