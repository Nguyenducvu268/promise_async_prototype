// Tình huống 1: Viết một hàm constructor cho đối tượng "Rectangle" và thêm một phương thức vào prototype để tính diện tích của hình chữ nhật
const Rectangle = function (dai, rong) {
    this.dai = dai;
    this.rong = rong;
    this.dt = () => {
        this.dai * this.rong === dai * rong;
        console.log(this.dai * this.rong);
    }
}
Rectangle.prototype.dientich = function () {
    return this.dai * this.rong
}
const rec1 = new Rectangle(10, 20);
rec1.dt();
console.log(rec1.dientich());


// Tình huống 2: Viết một hàm constructor cho đối tượng "Square" kế thừa từ "Rectangle" và thêm phương thức vào prototype để tính chu vi của hình vuông
const Square = function (canh) {
    Rectangle.call(this, canh, canh);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.chuvi = function () {
    return 4 * this.rong;
}
const square01 = new Square(100);
console.log("Chu vi hinh vuong = " + square01.chuvi());


// Tình huống 3: Tạo một đối tượng "Person" và một đối tượng "Student" kế thừa từ "Person". Thêm phương thức vào prototype của "Person" và "Student" để in ra thông tin của mỗi đối tượng.
const Person = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.info = function(){
    console.log("My name is " + this.name);
    console.log("Age: " + this.age);
    console.log("Gender: " + this.gender);
}
// "Student" kế thừa từ "Person"
const Student = function(name, age, gender, major){
    Person.call(this, name, age, gender);
    this.major = major;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.info = function(){
    Person.prototype.info.call(this);
    console.log("Major: " + this.major);

}
const person1 = new Person("Hung", 19, "Nu");
person1.info();
const sv1 = new Student("Tien", 25, "Nam", "IT");
sv1.info();
const sv2 = new Student("Dat", 24, "Nu", "CK");
sv2.info();






