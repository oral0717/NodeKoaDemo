let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/api/user', true);
xhr.onload = function(){
  console.log(xhr.response);
}
xhr.send();