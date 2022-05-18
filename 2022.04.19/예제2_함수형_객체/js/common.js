'use strict'


function Product(name, price) {
  this/*생성자 본인 product*/.name = name;
  this.price = price;
  this.getProduct = function(){
    console.log('get product!!!');
  }
}

function Food(name, price){
  Product.call/*내부에 있는 객체를 가져올 수 있음*/(this/*Food?*/, name, price);
  this.category = 'food';
}

let pd = new Product('사과',5000);
console.log(pd.price);
pd.getProduct();

let bread = new Food('chocobread',5000);
console.log(bread.category);

/*
bakery 객체를 생성하고 product 함수형 객체에서 상속을 받고 아래 구문을 출력하세요
bakery 카테고리에서 구매하신 상품은 cheese-bread이고 상품의 금액은 7000원 입니다.
*/

function Bakery(name, price){
  Product.call(this,name,price); // call : 함수에서의 객체 상속(재정의 안함???)
  this.category = 'bakery';
  this.pdCheck = function(){
    alert(`${this.category}카테고리에서 구매하신 상품은${this.name}이고 상품의 금액은${this.price}`)
  }
}

let bakery = new Bakery('cheese-bread',7000);
console.log(bakery.pdCheck());
