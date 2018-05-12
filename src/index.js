import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var myRequest = new Request('./content/about.txt');
  

  // fetch(myRequest).then(function(response) {
  //   element.innerHTML = response;
  // })

  element.innerHTML = 'hello';
  console.log('testa wdawd');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  

  return element;
}

document.body.appendChild(component());