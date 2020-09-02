const titleText = document.querySelector('.logo-heading');
const navBar = document.querySelector('.main-navigation .nav');
const buttons = document.querySelectorAll('.content-pick .btn');
const myHeading = document.querySelector('.intro p');
const headingSection = document.querySelector('.intro');
const introImg = document.querySelector('.intro img');
const headers = document.getElementsByTagName('a');
const foot = document.querySelector('footer p');

headers[0].addEventListener('click', (event) => {
    event.preventDefault();
  });
headers[1].addEventListener('click', (event) => {
    event.preventDefault();
  });
headers[2].addEventListener('click', (event) => {
    event.preventDefault();
  });
headers[3].addEventListener('click', (event) => {
    event.preventDefault();
  });


titleText.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
  });

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(`You pressed ${keyName}!`);
});

buttons[0].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[1].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});
buttons[2].addEventListener('dragstart', (event) => {
    event.target.style.opacity = '.5';
});

window.addEventListener('load', () => {
    console.log('Fun Bus Loading!');
  });

document.addEventListener('copy', (event) => {
    event.clipboardData.setData('text/plain', 'You copied from the Fun Bus website!');
    event.preventDefault();
});

window.addEventListener('scroll', () => {
    console.log('scrolling away!');
});

headingSection.addEventListener('click', (event) => {
    event.target.style = 'background-color: blue';
});

myHeading.addEventListener('click', (event) => {
    event.target.style.color = "gold";
    event.stopPropagation();
})

introImg.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.toggle('hide');
  });

foot.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    event.target.style.color = 'white';
  }, true);

foot.addEventListener('blur', (event) => {
    event.target.style.background = "";
}, true);