// Tạo promise
// Sử dụng promise 
// .then return promise khác
// .then ...
// Khởi tạo new Promise là 1 hàm đồng bộ ... 
// nhưng tới sử dụng .then() lại là đoạn bất đồng bộ
// .then() bất đồng bộ chỉ chạy khi đã fullFill


// ex1. 
var fs = require('fs');
var check = new Promise((relsove, reject) => {
    // đọc file mất tầm 3s
    fs.readFile('D:/JavaScript/bat-dong-bo/callback.js', (err, data) => {
        if (err) {
            reject(err);
        } else {
            relsove(data);
        }
    })
})
// return kết quả của .then() trên sẽ là đầu vào input của .then() kế tiếp
// vậy sẽ ntn nếu .then() trước không return về gì cả ??? 
check
    .then((data) => {
        // công việc 1
        console.log('result', data);
        //return 0;
    })
    .then((data) => {
        // công việc 2 
        console.log('result', data); // undefined
    })
    // để test công việc 3 có chạy đúng k, có thể sửa data2 ở đây và check
    .then(() => {
        // công việc 3
    })
    .then(() => {
        // công việc 4
    })
    .then(() => {
        // công việc 5
    })
    .then(() => {
        // công việc 6
    })
    .then(() => {
        // công việc n ...
    })
    .catch((err) => {
        console.log('loi', err);
    })



// promise hell 
check
    .then(data => {
        new Promise((relsove, reject) => {

        }).then(
            check3.then(
                check4.then(
                    ///
                )
            )
        )
    })


// Viết promise đúng 
// promise hell 
check
    .then(data => {
        return new Promise((relsove, reject) => {
            //
        })
    })
    .then(() => {

    })
    .then(() => {

    })
    .then(() => {

    })
    .catch(() => {

    })