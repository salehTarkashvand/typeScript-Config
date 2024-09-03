
//---------------------- enum type ----------------------

// enum Size {Small = "s" , Medium = "m" , Large = "l" }

// let mySize :Size = Size.Small
// console.log(mySize);

// function calculateTax (income :number , taxYear :number): number{
//    if(taxYear < 20_000)
//       return income * 3;
//    return income * 1.2
// }


//-------------------- type elies ---------------------
// for anotating variable and funtion and something


// type Employee = {
//    readonly id :number,
//    name : string,
//    func : (date : Date) => void

// }
 

// const employee : Employee  = {
//    id : 1 ,
//    name : "name",
//    func : (date : Date) => {
//       return console.log(date)
//    }
// }


//------------------ union types |---------------------


// function employee (name : number | string):number {
//    //***************/ naroing : if for cheking type ***************
//    if(typeof name === "number")
//       return name * 4
//    else
//       return parseInt(name) * 5
// }
// console.log(employee("3"));

 
// ---------------- interSection----------------------


// type Draggble = {
//    drag : () => void
// }
// type resize = {
//    size: () => void
// }
// // ******important*******
// type UIinterSection = Draggble & resize

// let textBox = {
//    drag : ()=>{},
//    size : ()=>{}
// }
  

// ----------------- literal types --------------------

// type Quentity = 50 | 100  ;

// let quentity : Quentity = 50

// quentity = 100


// ----------------- nullable types -------------------

// function greet (name : string | null | undefined ){
//    if(name)
//       console.log(name.toUpperCase());
//    else
//       console.log("invalid arguments");
      
// }

// greet(null)

// ----------------- optional chaning ------------------

// type Customer = {
//    birthDay? : Date 
// }

// function customDate (id : number ): Customer | null | undefined {

// return id === 0 ? null : {birthDay : new Date()}

// }

// let customer = customDate(1)

// console.log(customer?.birthDay?.getFullYear());

//***************** ? chaining opprator *************
//***************** ?. optional property access opprator *************
// **************** ?.[0] optional element access oprator *************
// customer?.[0]
//**************** optional call access oprator **************

// let log : any = null ;
// log?.("a")




//----------------- nullish oprator -------------------

// let speed : number | null | undefined  = null

// let ride = {
//    // speed : speed !== null ? speed : 30 
//       speed : speed ?? 30
// }


// -----------------type assertion ----------------------

// const element = document.getElementById("phone") as HTMLInputElement 
// const element = <HTMLInputElement> document.getElementById("phone") 

// element.value


//-------------------unknown-----------------------------

// function unkonwn (document : unknown){

//    // we can writhing "naroing" for undrstand type 

//    if(typeof document === "string"){
//       document.concat()
//    }
// }

// --------------------never-------------------------------

// function loop () :never{
//    while(true){

//    }
// }

// loop()
// console.log("this log 'never' use with 'never' anotation ")