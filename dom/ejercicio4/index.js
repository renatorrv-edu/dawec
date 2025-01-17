function anade() {
  num = Math.floor(Math.random() * 100);
  let nodo = document.createElement('li');
  nodo.innerHTML = num;

  document.getElementById('lista').appendChild(nodo);
}