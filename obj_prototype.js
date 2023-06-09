// - Prototype để thực thi OOP trong js. 
// - Là cơ chế mà các obj kế thừa tính năng từ 1 obj khác. 
// - Tất cả các obj trong js đều có 1 prototype, và các obj này thừa kế các property, method,... từ prototype của mình.

const NhanVien = function (name, age) {
    this.name = name;
    this.age = age;

    this.company = "MePage";
    this.getSep = () => {
        console.log("Sep Thanh");
    }
}

NhanVien.prototype.diachi = "41/4a duong 48";
NhanVien.prototype.getHotline = () => {
    console.log('0334857485');
}

const nv1 = new NhanVien("Huy", 23);
console.log(nv1);
const nv2 = new NhanVien("Trinh", 21);
console.log(nv2);

console.log(nv1.company);
console.log(nv2.company);
console.log(nv1.company === nv2.company) // true

console.log(nv1.diachi);
console.log(nv2.diachi);
console.log(nv1.diachi === nv2.diachi) // true

nv1.getSep();
nv2.getSep();
console.log(nv1.getSep === nv2.getSep) // false

nv1.getHotline();
nv2.getHotline();
console.log(nv1.getHotline === nv2.getHotline) // true



const DongVat = function (name) {
    this.name = name;
}
DongVat.prototype.sanbat = () => {
    console.log("Ca dang san bat ...");
}
const ConCa = function (type) {
    this.type = type;
}
ConCa.prototype = new DongVat("Ca");
ConCa.prototype.boi = () => {
    console.log("Ca dang boi ...");
}

const CaVoi = new ConCa("Ca voi");
console.log(CaVoi.name)
CaVoi.boi();
CaVoi.sanbat();
