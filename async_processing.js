const { rejects } = require("assert");
const { resolve } = require("path");

// Tình huống 1: Viết một hàm tính tổng của hai số và sử dụng callback để in kết quả ra màn hình
function sum(a, b, callback) {
    setTimeout(() => {
        let tong = a + b;
        callback(tong);
    }, 5000)
}
sum(15, 25, (result) => {
    console.log(result);
})


// Tình huống 2: Sử dụng Promise để lấy dữ liệu từ API và in ra màn hình
// data = { id: '01', productName: 'giay the thao' };
function fetchData() {
    return new Promise((relsove, reject) => {
        const data = { id: '01', productName: 'giay the thao' };
        setTimeout(() => {
            relsove(data);
        }, 2000)
    })
}

fetchData()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log('co loi')
    })



// Tình huống 3: Viết một async function và sử dụng await để đợi kết quả trả về
function delay(x) {
    return new Promise((relsove, reject) => {
        setTimeout(() => {
            relsove();
        }, x);
    })
}
async function handle() {
    console.log(1);
    await delay(5000);
    console.log(2);
}
handle();


// Tình huống 4: Sử dụng Promise.all để thực hiện nhiều công việc song song
// tast 1
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}
// task 2
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })
}
// task 3
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000)
    })
}
// task 4
function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    })
}
Promise.all([task1(), task2(), task3(), (task4())])
    .then(() => {
        console.log('Done task 1!');
    })
    .then(() => {
        console.log('Done task 2!');
    })
    .then(() => {
        console.log('Done task 3!');
    })
    .then(() => {
        console.log('Done task 4!');
    })
    .catch(() => {
        console.log(new Error('Da co loi.'));
    })