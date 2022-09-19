## Single Element Selector
```javascript

console.log(document.getElementById('contain'));

console.log(document.querySelector('.button')); // Most used one

```

## Multiple Element Selector
```javascript
console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'))  // Generally dont use these
```

## Manupulating the dom
![[list iamges.png|{width=100%}]]


```javascript
const ul = document.querySelector('.items'); (.items is the selected class from the html where there is certain lists.. )

ul.remove(); // Removes the entire lists

ul.lastElementChild.remove(); // Removes the last item of the list

ul.children[0].innerText ="Niku"; // Replaces the text of first item

ul.lastElementChild.textContent="Nikesh"; // Replaces the text of last item

```

## Event Listener In JavaScript
![[Before CLick Image.png|500}]]
```javascript
const btn =document.querySelector('.button');

btn.style.background ='red'; (overright the background-color of the button to red)

btn.addEventListener('click', (e) => {

    e.preventDefault();

    console.log('You Clicked Here Yahoo!')

    document.querySelector('.whole').style.background='blue';

    document.querySelector('body').classList.add('bg-dark'); (bg-dark is an style class in which consists of background-color and color)

    document.querySelector('.items').lastElementChild.innerHTML="<h1>You Clicked on that button! Wow</h1>"
    
    

});

```

## After clicking on the button
![[After Click Button.png]]
