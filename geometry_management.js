// Phát triển một ứng dụng quản lý các hình học. Bạn cần xây dựng các lớp hình học cơ bản bao gồm Hình vuông (Square) và Hình chữ nhật (Rectangle). Yêu cầu phải triển khai các lớp này và tính diện tích cho mỗi hình.
// Hãy sử dụng kế thừa prototype để triển khai các lớp Hình vuông và Hình chữ nhật, và tính diện tích cho mỗi hình.

const Rectangle = function(dai, rong){
    this.dai = dai;
    this.rong = rong;
}
Rectangle.prototype.tinhDienTich = function(){
    return this.dai * this.rong;
}
const rec1 = new Rectangle(12, 10);

const Square = function(canh){
    Rectangle.call(this, canh, canh);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
const squa1 = new Square(15);

console.log(rec1.tinhDienTich());
console.log(squa1.tinhDienTich());



