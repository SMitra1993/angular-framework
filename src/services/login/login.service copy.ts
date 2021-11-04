// // abstract class Token {
// //   abstract getToken(): string;
// //   static coreInterface: () => any;
// // }

// // class Ryu extends Token {
// //   constructor() {
// //     super();
// //   }
// //   getToken(): string {
// //     Token.coreInterface();
// //     return 'Souvik';
// //   }
// // }

// // const ryu = new Ryu();

// // ryu.getToken();

// // class A {
// //   open() {
// //     return 2;
// //   }
// // }

// // class B extends A {
// //   open() {
// //     super.open();
// //     return 1;
// //   }
// // }

// // interface Vehicle {
// //   move(): void;
// // }

// // class Car implements Vehicle {
// //   public move(): void {
// //     console.log('Moving Car!');
// //   }
// // }

// // abstract class VehicleHandler {
// //   public abstract createVehicle(): Vehicle;
// //   public moveVehicle(): void {
// //     const myVehicle = this.createVehicle();
// //     myVehicle.move();
// //   }
// // }

// // class CarHandler extends VehicleHandler {
// //   public createVehicle(): Vehicle {
// //     return new Car();
// //   }
// // }

// // const cars = new CarHandler()
// // cars.moveVehicle()

// // class Person {
// //   constructor(private fname: string) {
// //     this.fname = fname;
// //   }

// //   getName(): string {
// //     return this.fname;
// //   }
// // }

// // class Employee extends Person {
// //   constructor(fname: string) {
// //     super(fname);
// //   }
// // }

// // new Employee('Souvik').getName();

// // class Control {
// //   private state: any;
// // }

// // interface SelectableControl extends Control {
// //   select(): void;
// // }

// // class Button extends Control implements SelectableControl {
// //   select() { }
// // }

// // class TextBox extends Control {
// //   select() { }
// // }

// // class Image1 implements SelectableControl {
// //   private state: any;
// //   select() { }
// // }

// // class Location1 {

// // }

// // class Person {
// //   name: string;
// //   age: number;
// // }
// // class Child  extends Person {}

// // class Man implements Person {
// //   // name: string = '';
// //   // age: number = 0
// // }

// import * as Rx from 'rxjs';

// const observable = new Rx.Observable((observer) => {
//   observer.next(1);
// });

// observable.subscribe((data) => {
//   console.log(data);
// });

// const subject = new Rx.Subject();

// subject.subscribe((val) => {
//   console.log(val);
// });

// subject.next(2);
// subject.complete();
