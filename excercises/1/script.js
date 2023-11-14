const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!'


container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = `Hey I'm red!`;
paragraph.style.cssText= 'color: red;';

container.appendChild(paragraph);

const heading3 = document.createElement('h3');
heading3.classList.add('h3');
heading3.textContent = `Hey I'm blue!`;
heading3.style.cssText= 'color: blue;';

container.appendChild(heading3);

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.cssText= 'border: 2px solid black; background-color: pink';

const heading1 = document.createElement('h1');
heading1.classList.add('h1');
heading1.textContent = `I'm in a div`;

const paragraph2 = document.createElement('p');
paragraph2.classList.add('paragraph2');
paragraph2.textContent = `ME TOO!`;


content2.appendChild(heading1);
content2.appendChild(paragraph2);
container.appendChild(content2);





const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World');
})

function alertFunction() {
    alert('YAY! YOU DID IT!');
}

/*btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);*/
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


 // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});