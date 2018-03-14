//LOOP 1
for(let i = 0; i <= 20; i++){
	if (i % 2 === 0){
		console.log("Number " + i + " is Even")
	 } else {
	 	console.log("Number " + i + " is Odd")
	 }
 };

 //I don't get why 0 % 2 === 0 computes as true/why the number 0 prints as even. 

 //LOOP 2
 for(let i = 0; i <= 100; i++){
	if (i === 0){
		console.log("We are at Zero")
	}
	if (i % 3 === 0){
		console.log("Fizz")
	  // } 
	 	// if (i % 5 === 0){
	  // 	console.log("Buzz")
	 } else {
	 	console.log(i)
	 }
 };
 //I'm not sure what's wrong - every time I add the commented code back in the logic gets screwed up. 
 //Also not entirely sure why i % 3 === 0 produces Fizz when i = 0. 

 //LOOP 3
 for(let i = 1; i <= 5; i++){
 	console.log("x" * i);
 }
 // Did not Complete


 //LOOP 4
 //LOOP 1
for(let i = 99; i >= 0; i--){
	console.log(i + " bottles of beer on the wall " + i + " bottles of beer...")
	 };
 