## Add users data thorough submit button 
## HTML Code
```html

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <style>

        .whole{

            background-color: rgb(155, 115, 115);

            height: 200px;

            width: 300px;

            display: flex;

            align-items: center;

            justify-content: center;

            margin: auto;

            border-radius: 5px;

            box-shadow: 5px 5px 5pt;

        }

        #name,#email{

            padding: 2px;

            border-radius: 2px;

            margin: 5px;

            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .btn{

            background-color: aqua;

            padding: 3px;

            width: 210px;

            border-radius: 4px;

            font-family: Verdana, Geneva, Tahoma, sans-serif;

        }

        .msg{

            background-color:rgb(105, 237, 131);

            color: white;

            padding:5px;

            margin: 5px;

        }

        .users{

            position: absolute;

            left: 763px;

            width: 180px;

            align-items: center;

            justify-content: center;

            list-style-type:none;

        }

        li,.item{

            background-color: rgb(109, 139, 236);

            padding: 5px;

            width: 294px;

            margin: 5px;

            box-shadow: 5px 5px 5px rgb(37, 29, 29);

  

        }

        .text1{

            text-align: center;

        }

</style>

</head>

<body>

    <div class="whole">

        <form id="my-form">

            <div class="msg"></div>

            <div>

                <label for="name">Name:</label>

                <input type="text" id="name">

            </div>

            <div>

                <label for="email">Email:</label>

                <input type="email" id="email">

            </div>

            <input class="btn" type="submit" value="Submit">

        </form>

    </div>

                <ul class="users">

                    <li class="text1">Input Field Data</li>

                    <!-- <li class="item">item-2</li> -->

                    <!-- <li class="item">item-3</li> -->

                </ul>

    <script src="mainjs.js"></script>

</body>

</html>
```


## Javascript Code
```javascript
const myform =document.querySelector('#my-form');

const nameinput =document.querySelector('#name');

const emailinput =document.querySelector('#email');

const msg =document.querySelector('.msg');

const userlist =document.querySelector('.users');

  

myform.addEventListener('submit', onSubmit);

  

function onSubmit(e){

    e.preventDefault();

    if(nameinput.value ==='' || emailinput.value ===''){

        msg.classList.add('error');

        msg.innerHTML='Please enter all fields';

        setTimeout(() => msg.remove(), 2000);


    } else{

        const li =document.createElement('li');

        li.appendChild(document.createTextNode(`${nameinput.value}: ${emailinput.value}`));

        userlist.appendChild(li);

    //clear fields

    nameinput.value='';

    emailinput.value='';

    }

  

}

```