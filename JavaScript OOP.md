~# Javascript Object Oriented Programming
*Constructor Function*
```javascript
 function person(firstname, lastname, dob){

        this.firstname=firstname;

        this.lastname=lastname;

        this.dob =dob;
    }
    const person1 = new person('Nikesh','Uprety','july 24 2003');

	const person2 = new person('David','Becam','july 24 1994');

	console.log(person1);

	console.log(person2.firstname);
```


*Date object*

```javascript

	function person(dob){
	this.dob=dob;
	}
	
	const persondate =new person('5-9-2001');
	console.log(persondate.dob);
	console.log(persondate.dob.getFullYear());
	console.log(persondate.dob.getDay());

```

*Return Type Function*

```javascript

	function person(firstname, lastname, dob){

        this.firstname=firstname;

        this.lastname=lastname;

        this.dob =new Date(dob);

		this.getFullName =function(){
		return `${this.firstname} ${this.lastname}`
		
		}

    }
	const person1 = new person('Nikesh','Uprety','july 24 2003');
	console.log(person1.getFullName());

```

*Prototype (Recommended)*

```javascript

		function person(firstname, lastname, dob){

        this.firstname=firstname;

        this.lastname=lastname;

        this.dob =new Date(dob);

		person.prototype.getFullName =function(){
		
		return `${this.firstname} ${this.lastname}`
		
		}

    }
	const person1 = new person('Nikesh','Uprety','july 24 2003');
	console.log(person1.getFullName());

```