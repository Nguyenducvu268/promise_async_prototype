// Xây dựng một ứng dụng quản lý nhân viên. Mỗi nhân viên có thông tin cơ bản như tên, tuổi và mức lương. Chúng ta có hai loại nhân viên: Nhân viên thường (Employee) và Quản lý (Manager). Quản lý là một loại đặc biệt của nhân viên, ngoài thông tin cơ bản, họ còn có danh sách nhân viên cấp dưới (subordinates) mà họ quản lý.
// Hãy triển khai các lớp (constructors) Employee và Manager bằng cách sử dụng kế thừa prototype.

const Employee = function(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
const em1 = new Employee("Nghiem", 23, 10000);
Employee.prototype.getInfo = function(){
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Salary: " + this.salary);
}

const Manager = function(name, age, salary, subordinates){
    Employee.call(this, name, age, salary);
    this.subordinates = subordinates;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
const mn1 = new Manager("Thanh", 29, 120000, ['Anh A', 'Chi B', 'Anh C']);
Manager.prototype.getInfo = function(){
    Employee.prototype.getInfo.call(this);
    console.log("Cap duoi: " + this.subordinates.join(" / "));
}

em1.getInfo();
mn1.getInfo();
