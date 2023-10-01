
                        // for loop statement 

// for (let i =1;i<=10;i++){
//     if(i%2 !==0){
//         console.log(`oddnumber: ${i}`);
//     }
// }



                        // while loop 

// let r=1;
// while(r<=20){
//     if(r%2 !==0){
//         console.log(`oddnumber in while loop ${r}`);
//     }
//     r++;
// }




                        // do while loop

// let i=0;
// do{
//     if(i%2 !==0){
//         console.log(`this is do while conduction ${i}`);
//     }
//     i++
// } while(i<=10);                       





                // for in loop 

// const person = {
//     name:"Rdx_Akash",
//     age:23,
//     sex:"Male"
// }   ;        

// for(let key in person){
//     console.log(key +":" , person{key]);
// }

                // for of loop
// let colors =["red","green","blue"];
// for(let color of colors){
//     console.log(`colors: ${colors}`);
// }

                        // oop object oriented programing

// let person = {
//     names:"akash",
//     age:23,
//     intrest:'books',
//     isAlive:true,
//     address : {
//         city:"Vaniyambadi",
//         state : "THIRUPATHURE"

//     },
//     gretting:function(){
//         let msg= `My Name is ${this.names} and i'm From ${this.address.city}`;
//         console.log(msg);
//     }
// };
// person.gretting();

            // factory functions

// function createPerson(Name){
//     return{
//         Name: Name,
//         gretting:function(){
//             let msg=`my name is ${this.Name}`;
//             console.log(msg);
//         }
//     };

// }            

// let anbu=createPerson('AKASH');
// let rdx = createPerson('amos');

// anbu.gretting();
// rdx.gretting();

            //constructor function

// function asd(a) {
//     this.name=a;
//     this.greeting = function() {
//         console.log(`My name is ${this.name}`);
//     }

// }
// let person=new asd("Akash");
// person.greeting();

            // dynamic nature of objects

// const person ={
//     name:"Akash"
// }
// person.age=24;
// person.greeting=function(){
//     person.place="Vaniyambadi";
// }

//  console.log(person);

            // Primitive value type

// let cardObj={
//     value:5
// };
// function updateCard(){
//     cardObj.value++;
// }
// updateCard(cardObj)

// console.log("Card avalible:",cardObj);


            // Spread Operator

// const user ={
//     name:"Akash",
//     getFullName(){
//         console.log(`My name is ${this.name}`);
//     }

// }
// // Copy the user object to another

// let another ={...user.getFullName()};
// console.log(another);


                



// Arrays
//  Push() add the elements on end
let names=['RDX','Akash'];
names.push('From Vaniyambadi')
console.log(names);

// unshift() add the elements to the beginning 
let namesUnshift=['Akash', 'From Vaniyambadi']
namesUnshift.unshift('Rolex')
console.log(namesUnshift);
// --------------------------------------------------------------------------
// Arrow Function 

const orders=[
    {id :1,item:'RDX',quantity:1},
    {id :1,item:'VDX',quantity:2}
]

// Arrow Function is Very Important 
let result = orders.find((orders)=>orders.item==='VDX' && orders.quantity=== 2)
console.log(result);
// --------------------------------------------------------------------------


// Removing Elements in the Array 

// pop() is Remove the value on end 

const numbersPop=[1,2,3,4,5];
numbersPop.pop();
console.log(numbersPop);

// shift() is Removing the Value on the First Index
const numberShift=[1,2,3,4,5,6,7];
numberShift.shift();
console.log(numberShift);

// splice() is Used to Removing On Middle 
const numberSplice=[1,2,3,4,5,6,7,8,9,10];
numberSplice.splice(1,3);
console.log(numberSplice);

// --------------------------------------------------------------------------

// Emptying An Array
let removingArray=[1,2,3,4,5,6];

// Solution 1  => Easy to Use And Easy to Understand
removingArray=[];  

// Solution 2
removingArray.length=0;

// Solution 3
removingArray.splice(0,removingArray.length);

// --------------------------------------------------------------------------


// Combining and Extracting Elements

// Combining Array
const shopping_Cart=[{item:'Magi'}];
const additional_Cart=['Beans','Masala','Matchbox','Salt'];
// Combine 

let recipe =shopping_Cart.concat(additional_Cart);
shopping_Cart[0].item='Noodles';  // Changing or Replacing  the index [.item] value
console.log(recipe);

//Extract
let extractedInfo=recipe.slice(2,recipe.length);   // This is Removing Front of the Index
console.log(recipe);
console.log(extractedInfo);


// Spread Operators 
let recipes=[...shopping_Cart,45,{name:'RDX'},...additional_Cart];
console.log(recipes);

// --------------------------------------------------------------------------

// Iterating Elements 

const dailyRoutine=['Wake Up ','Eat ','Sleep'];
// for each

dailyRoutine.forEach(function(routine,index){
            console.log(index,routine);
});

// To Using Arrow Function 

dailyRoutine.forEach(routines => console.log(routines))


// --------------------------------------------------------------------------

// Array Ever()

// Check if all Values in ages[] are Over 18:

// in every function is Check all the Values  is equal to grater then 18 is return true or if any one is less then 18 is return false
const ages =[24,32,155,7];
let ageCheck=ages.every(function(value){
    return value >= 18
});
console.log(ageCheck);

// In Some Function Is Check Any One  Value is Grater Then 18 Is Return true  
const agesSome =[24,32,13];
let ageChecking=ages.some(function(value){
    return value >= 18
});
console.log(ageChecking);

// Testing elements in Java Script Array 
// Reference Type 

const items=[
    {id :1 ,name:'Mobile', Deliverable:true},
    {id :2 ,name:'Ac', Deliverable:true},
    {id :3 ,name:'TV', Deliverable:false}
]
// in every function is Check all the Values  is equal to true is return true or if any one is False is return false

let allDeliverable=items.every(function(value){
    return value.Deliverable==true;
});

// In Some Function Is Check Any One  Value is True  Is Return true  

let notDeliverable=items.some(function(value){
    return value.Deliverable==true;
});

console.log("All",allDeliverable);
console.log("Not",notDeliverable);

// --------------------------------------------------------------------------



// FILTERING A JAVA SCRIPT ARRAY
    const cardItem =[
        {id :1,items:'Android Mobile',cost :6500},
        {id :1,items:'Iphone Mobile',cost :27000},
        {id :1,items:'Windows Mobile',cost :8500},
    ];

    // The filter Method is Filtering the Given Value On The Array ;
    let offorablaPhone=cardItem.filter((value)=> value.cost<10000);
    console.log('Afforable Phone',offorablaPhone);


    // The Find Method is Return The Value of the First Elements 
    let offordable=cardItem.find((value)=>value.cost<10000);
    console.log('Affordable',offordable);

// --------------------------------------------------------------------------

// JAVA SCRIPT ARRAY MAP()

// Mapping a JavaScript Array

const mapNumbers=[1,2,3,4,5,];
let find=mapNumbers.map((vlaue)=>vlaue*2)
console.log(find);


//EXAMPLE 2

// I Need This o/p =>{id:1,FullName="RDX Akash"}

const people=[
{id :1,FirstName:'RDX',LastName:'Akash'},
{id :1,FirstName:'RDX',LastName:'Amos'},
{id :1,FirstName:'RDX',LastName:'Sathish'},
];
let findAndMap=people.map( function(val){
    let fullName=[val.FirstName,val.LastName].join(" ");
    let obj={id:val.id,fullName}
    return obj;
}
);

console.log(findAndMap);

// --------------------------------------------------------------------------

// JS CHANGING METHOD
let products=[
    {id:1,title:'Android Phone',cost:7000},
    {id:1,title:'Gaming Computer',cost:90500},
    {id:1,title:'Head Phone',cost:2400},
];

//sort it using lowest price
// sort it by ascending 
// filter products less then 8000
// map it like this :// android phone -$7500

let finds=products

    //sort it using lowest price
.sort((a,b)=> {
    return a.cost-b.cost; // ascenting 
    // return b.cost-a.cost; // descending

    // sort it by ascending 
})
.sort((a,b)=> {
    if (a.title< b.title) return -1;
    if (a.title> b.title) return 1;

    return 1;
})
    // filter products less then 8000
.filter((value)=>value.cost<=8000);
    // map it like this :// android phone -$7500
finds.map((value)=> `${value.title} -$ ${value.cost}`);
console.log(finds);

// --------------------------------------------------------------------------

// JS Reduce Method 

const donation =[45,78,95,65,4851];
let totalDonation = donation.reduce(function(perviousVal,currentVal){
    return perviousVal+currentVal;
})
console.log("Total",totalDonation);

// Example -2

const shoppingCart=[
    {id:1,iteam:'Orange',const:45},
    {id:1,iteam:'Bread',const:20},
    {id:1,iteam:'Maagi',const:12}
];

const addCost=(accumulate,currentValue) =>
    accumulate+currentValue.const;
    let totalCost=shoppingCart.reduce(addCost,50);
    console.log("Total Amount is :" ,totalCost);


