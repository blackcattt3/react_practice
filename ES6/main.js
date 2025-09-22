// object shorthand assignment

// let name = "noona";
// let age = 17;

// let person = {
//     // name : name,
//     // age : age
//     name,
//     age
// }
// console.log(person);


// Destructuring
// let person = {
//     name:"noona",
//     age:20
// }

// // let name = person.name;
// // let age = person['age'];

// // let {name, age} = person;
// // console.log(name,age);

// let array=[1,2,3,4];
// // let [a,,,b] = array;
// let [a,b,...rest] = array;      // 이때 rest는 배열형태로 출력된다.
// console.log(rest);


// spread {...person}->객체를 복사해서 새로운 객체를 하나더 만든다.
let person = {name:"noona", age:20};
// 1)
// let person2 = {...person};      
// person2에 person과 같은 새로운 객체가 생성된다!
// person의 객체가 복사되어 실객체가 새로 생성되는 것.
// 값 변경도 가능하고 새로운 변수 추가도 가능하다!
// let person2 = {...person, address:'korea'};
let person2 = {...person, name: "haha"};
// console.log(person == person2)      // false

// 2)
// let person3 = person;
// 이 경우는 person의 주소값을 참조. 객체는 하나이고 그 객체를 참조하는 변수가 두개인 것이다.
// console.log(person == person3)          // true
console.log(person2);
// console.log(person3);