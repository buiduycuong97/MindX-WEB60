const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const BMW = new Car("utanium", 100);
const Mercedes = new Car("utanium", 100);

console.log(BMW.accelerate());
console.log(BMW.accelerate());

Mercedes.brake();
