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

//---------------------- class in typeScript ----------------

// class Account{
//    readonly id:number ;
//    name:string ;
//    nichName ?: string;
//    private _balence:number ;
//    constructor(id:number , name:string , balence:number) {
//       this.id = id
//       this.name = name
//       this._balence = balence
//    }
//    private deposite(amount:number){
//       if(amount<= 0)
//          throw new Error("Invalid amount")
//       this._balence += amount
//    }
// }

//-------------------------parametr property with accessmodifire public / private -------------------

// class Account {
//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balence: number
//   ) {}
//   private deposite(amount: number) {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balence += amount;
//   }
// }

//---------------------------getter and setter--------------------

// class Account {
//     constructor(
//       public readonly id: number,
//       public name: string,
//       private _balence: number
//     ) {}
//     deposite(amount: number) {
//       if (amount <= 0) throw new Error("Invalid amount");
//       this._balence += amount;
//     }
//     get balence():number{
//         return this._balence
//     }
//     set balence(value:number){
//         if(value < 0)
//             throw new Error("invalid value")
//         this._balence = value
//     }
//   }

//   const account = new Account(1,"saleh",3)
//   account.balence = 10
//   console.log(account.balence);

//--------------------------dynamic property--------------------------
//***************************index signatures ************************

// class SeatAssignment {
//     [seatNAme : string]:string
// }

// let seat = new SeatAssignment()

// seat.a1 = "saleh";
// seat["a1"]="saleh"
// seat.a2 = "hamed";

//--------------------------- members of static ------------------------

// class Ride {
//   private static _activeRiders: number = 0;

//   start() {
//     Ride._activeRiders++;
//   }
//   end() {
//     Ride._activeRiders--;
//   }
//   static get getActiveRiders(){
//     return Ride._activeRiders
//   }
// }

// let ride1 = new Ride();
// ride1.start();
// ride1.start();
// let ride2 = new Ride();
// ride2.start();
// ride2.start();


// console.log(Ride.getActiveRiders);


//----------------------------------inhertance--------------------------------

// class Person {
//     constructor(public firstName:string ,
//                 public lastName:string
//     ){}
//     get fullName ():string{
//         return this.firstName + '' + this.lastName
//     }

// }

// class Student extends Person{
//     constructor(public studentId : number , firstName:string , lastName:string ){
//         super(firstName,lastName)
//     }
//     walk(){

//     }
//     takeTest (){

//     }
// }

// const student = new Student (1 ,'saleh','torkashvand')

//------------------------- overRide metods in sub classes (poli morfism)--------------------

// class Person {
//     constructor(public firstName:string ,
//                 public lastName:string
//     ){}
//     get fullName ():string{
//         return this.firstName + '' + this.lastName
//     }

// }

// class Student extends Person{
//     constructor(public studentId : number , firstName:string , lastName:string ){
//         super(firstName,lastName)
//     }
//     walk(){

//     }
//     takeTest (){

//     }
// }

// class Teacher extends Person{
//     override get fullName():string{
//         return 'professor' +' '+ super.fullName
//     }
// } 

// let teacher = new Teacher("saleh",'torkashvand')

// console.log(teacher.fullName);

//-------------------------- type generic (season 4) --------------------------------

//--------------------------- type parameter <> ----------------------------------

// class TypeKeyValue < K , V > {
//     constructor( public key : K , public value : V){}
// }

// new TypeKeyValue<string,number>("saleh",1)

//------------------------------ generic function (metod) --------------------------------

// function GenericFunction<T>(key : T){
//     return [key]
// }

// ArrayUtils<number>(20)

// class GenericMetod{
//  ArrayUtils<k>(key:k){
//     return [key]
//  }
// } 

// let metod = new GenericMetod()
// metod.ArrayUtils<number>(2)

//**************************in static */


// class GenericMetod {
//     static arrayUtils<v>(value:v){
//         return [value]
//     }
// }

// GenericMetod.arrayUtils<number>(2)

//------------------------- generic type with using interface for create object ---------------------

// interface person {
//     name : string
// }
// function echo<T extends person > (value : T):T{
//     return value
// }

// echo({name:"saleh"})


//-------------------------- generic type for class object ---------------------------
// class person {
//     constructor(public name:string){}
// }

// function acho <T extends person>(value :T):T{
//     return value ;
// }

// acho(new person("saleh"))

//-------------------------- inheritence in generic class ----------------------------

// interface product {
//     name : string,
//     prise : number
// }
// class Store <T> {
//     protected _objects:T[] = []
//     get(obj:T){
//         this._objects.push(obj)
//     }     
// }

// class compressibleStore<T> extends Store<T> {
//     writing(){}
// }

// class searchableStore<T extends {name:string}> extends Store<T> {
//     find (name : string): T | undefined {
//         return this._objects.find(obj => obj.name === name) 
//     }
// }

// class ProductStore extends Store<product> {
//     filterByCategory(cattegory : string):product[] {
//         return []
//     }
// }

// interface Resive <T> {
    
//          data:T | null,
//          error: string | null

// }

// interface User<T> {
//     userName:T
// }

// interface product<T>{
//     product : T

// }

// interface person <T>{
//     name : string,
//     family: string,
//     age:number,
//     id:number
// }

// function fetch<T>(url:string):Resive<T>{
//  return { data : null , error: null}
// }

// fetch<number>("url")

//--------------------------------------- inheritense in class genericTypes -----------------------------

// interface Product {
//     name:string
//     prise:number
// }

// class Store <T>{
//     protected _objects : T[] = [] 
//     add(product:T):void{
//        this._objects.push(product)
//     } 
// }

// class ComperissenStore <T> extends Store<T> {
//  comperson(){}
// }

// class FilteredStore <T extends {name : string}> extends Store <T>{
//     find(name : string):T | undefined{
//         return this._objects.find(obj => obj.name === name)
//     }
// }

// class CreateCategory extends Store<Product> {

// } 

//-----------------------------keyof -----------------------------

// interface Product {
//     name:string
//     price:number
// }

// class Store <T>{
//     protected _objects : T[] = [] 
//     add(product:T):void{
//        this._objects.push(product)
//     } 
//     find(property : keyof T , value :unknown): T | undefined {
//         return this._objects.find(obj => obj[property] === value)
//     }
//     get objects (){
//         return this._objects
//     }
// }

// let store = new Store<Product>()

// store.add({name:"saleh" , price : 2})
// store.find("name" , "saleh" )
// store.find("price" , 2 )

// store.find("home" , "tehran " ) // error mide chon azz keyof poduct estefade mikonim va bayyad property ha az interface product bashe

// console.log(store.objects)

//------------------------type maping -------------------------

// interface Product {
//     name:string
//     price:number
// }

// type ReadOnly<T> ={
//    readonly [key in keyof T]:T[key]
// }
// type optional<T> ={
//     [key in keyof T]?:T[key]
// }
// type nullable<T>={
//     [key in keyof T]?:T[key] | null
// }

// let product :ReadOnly<Product> = {
//     name :"saleh",
//     price : 2
// }




//-------------------------- start season 5---------------------
//------------------------- decorators-------------------------

// function Components (constraucctor : Function){
//     console.log("hello saleh")
//    constraucctor.prototype.date = Date.now()
//    constraucctor.prototype.insert=()=>{
//     console.log("inserted")
//    }
// }
// @Components
// class Profilecomponenets {
// }


//----------------------- send parameters for decorators --------------------

// type ComponentsValue ={
//     insert:string
// }

// function Components (value:ComponentsValue){
//     return function Components (constraucctor : Function){
//         console.log("hello saleh")
//        constraucctor.prototype.date = Date.now()
//        constraucctor.prototype.value=value
//        constraucctor.prototype.insert=()=>{
//         console.log("inserted")
//        }
//        console.log(value);
       
//     }
// }
// @Components({insert:"fjghgllh"})
// class Profiles {
// }





//---------------------------- combine decorators -------------------------------------




type ComponentsValue ={
    insert:string
}

function Components (value:ComponentsValue){
    return function Components (constraucctor : Function){
        console.log("components decrartors called")
       constraucctor.prototype.date = Date.now()
       constraucctor.prototype.value=value
       constraucctor.prototype.insert=()=>{
        console.log("inserted")
       }
       console.log(value);
       
    }
}
function pipe (constructor: Function){
    constructor.prototype.pipe = 1
    console.log("pipe dectorated");
}

// f(g(x))
@pipe
@Components({insert:"fjghgllh"})
class Profiles {
}