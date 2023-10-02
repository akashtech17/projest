
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

// --------------------------------------------------------------------------

  // ARRAY INTERVIEW QUESTIONS AND ANSWERS

  // 1> create an Array Object (Atlest 3 method)?
  let array1=[1,4,5,6,7]; // Method 1


 let array2=[];
 array2[0]="Rdx_Akash "; // Method2
  
 let array3= new Array(10); // Method 3 : Menction a Single Value On Array it is assume the overall size

 let array4=Array.of(10,45,67,44);

/*****************************************************************************************************/

// 2> Taken the below array and copy it using the Slice Method and the For Loop Method?

let arr=[1,3,5,6,7];


// Solution 

// slice
let results =arr.slice();

// for loop

let copyArr=[];
for (let i=0; i<arr.length; i++){
    // console.log(`cp${copyArr} arr${arr}`);
    copyArr[i]=arr[i];
}

console.log(copyArr);

// Es6 Method 
let copyArrs=[...arr];

/*****************************************************************************************************/

// 3> Empty this array let array01=[1,2,3,4,5]?

//Solution
let array01=[1,2,3,4,5];


array01=[]; // method 1

array01.length=0; // method 2

while(array01.length){ // method 3
    array01.pop();
}

array01.splice(0,array01.length) //method 4

/*****************************************************************************************************/
// 4> What type is an array set to?

let array5=[1,3,4,5,6,7];
console.log(typeof array5); // Object

/*****************************************************************************************************/

// 5> How can you chick if Something is an Array?

// Method 1

let check=[3,5,6,7];
let a=Array.isArray(check);
let b=Array.isArray({foo:123,});
let c=Array.isArray("foodbar");
let d=Array.isArray(undefined);
let e=Array.isArray([1,3,5]);

console.log(a,b,c,d,e);

//Method 2

let array6=[2,4,5,6,];
let obj1={id:1};
let other=undefined;
let string='RDX_Akash';

/*****************************************************************************************************/

// 6> add on iteam to the end of an Array?

let array7=[1,3,4,5,6];
array7.push("Apple");
console.log(array7);

/*****************************************************************************************************/
// 7> Find the index position of [d] in the array let arr=['a','b','c','d'];
let arr1=['a','b','c','d'];
let result1=arr1.indexOf('d');
console.log(result1);

/*****************************************************************************************************/

// 8> What will be returned if you look for the index of Something that does not existing?

let arr2=["a","b"];
let result2=arr2.indexOf(3);
console.log(result2);
/*****************************************************************************************************/

// 9> Write a function to check if MILk exist in your ARRAY  let iteam= ["milk ","bread","sugar"];?
let iteam= ["milk","bread","sugar"];

function checkForProduct(){
    if(iteam.indexOf("milk")){
        console.log('item dons not exist');
    }
    else{
        console.log('item exist');
    }
}

checkForProduct()

/*****************************************************************************************************/
// 10> now you`ve found MILK exist add some to find the INDEX OF MILK and remove thet items?

let item1=["milk","bread","sugar"];

function checkForProducts(products){
    let index=item1.indexOf(products)
    if (index==-1){
        console.log('item dons not exist');
    }
    else{
        item1.splice(index,1);
        console.log('item exist');
        console.log(index);
    }
}


checkForProducts("milk")

/*****************************************************************************************************/
// 11> list the ways to loop over an array? 

/*
foreach()
for-in()
forloop()
for-of()
*/ 
/*****************************************************************************************************/

// 12> Write some code to put these number in order ( ASCENDING & DECENDING)?

    let numbers=[12,34,546,7,8,223,5,,89,1,45,3673,13,3,6];

    let result3=numbers.sort((a,b)=>{
        return a-b; // ASCENDING 
    });
    console.log(result3);

    let result4=numbers.sort((a,b)=>{
        return b-a; // DECENDING 
    });
    console.log(result4);

/*****************************************************************************************************/

// 13> Write some code to place this list in alphabetical order let p=["a","z","e","y"];?

let p=["a","k","A","s",'h'];
let resultOfP=p.sort();
console.log(resultOfP);

/*****************************************************************************************************/

// 14> what is the lengeth of the ARRAY?

let arr01=[,,,,];
let arr02= new Array(3);
let arr03 =[1,3,4,5,5];
let arr04 =[[1,4,5], [4,56,6]];

console.log(arr01.length,arr02.length,arr03.length,arr04.length);


/*****************************************************************************************************/

// 15> what are the result of these SPLIC and SLICE methods?

let ab =['zero','one','two','three'];
let name01=['jovin','peter','keran','john'];

// This is Removing Front of the Index
let slice=ab.slice(1,3); 
// splice() is Used to Removing On Middle 
let splice=name01.splice(1,3); 

console.log(slice);
console.log(splice);

/*****************************************************************************************************/

//16> what are the console logs of these SHIFT and UNSHIFT methods?

// UNSHIFT IS ADDING THE VALUE ON FRONT 
// SHIFT IS REMOVING THE VALUE ON FRONT 
let a1=[];
a1.unshift(1);
a1.unshift(22);
let b1=console.log(a1);
a1.shift();
let c1=console.log(a1);
a1.unshift(3,[4,55]);
let d1=console.log(a1);
a1.shift();
let e1=console.log(a1);

/*****************************************************************************************************/

// 17> using  REDUCE add all the number?

let numberss=[1,4,5,6,7];

let result5=numberss.reduce((a,b)=>{
    return a+b;
});

console.log(result5);

/*****************************************************************************************************/

// 18> flatlen this array to one single array using REDUCE?

    let array8=[
        [0,3],
        [4,6],
        [7,8]
    ];

    let arrResult=array8.reduce((a,b)=>{
        return a.concat(b);
    });
    console.log(arrResult);


/*****************************************************************************************************/

 //19> filter this array to return just the dogs

 let animals=[
    {name:'rdx',anm:'dog'},
    {name:'rdx',anm:'fish'},
    {name:'rdx',anm:'got'},

 ]

let resultAnimals=animals.filter((val)=>{
    return val.anm=='dog';
}
);

console.log(resultAnimals);

/*****************************************************************************************************/
// 20> using ARRAY in question 19 use Map function to return all the ANM    ?

let resultAll_Anm=animals.map((val)=>{
    return val.anm;
});

console.log(resultAll_Anm);






































