// Giả sử chúng ta có một ứng dụng Node.js đơn giản để tải thông tin ve xem phim.
// API này cung cấp một phương thức getFilm để lấy thông tin của một người dùng dựa trên ID. 
// Yêu cầu triển khai một hàm getMovieData sử dụng async/await để tải thông tin của người dùng và hiển thị nó ra màn hình.

const { rejects } = require("assert");
const { resolve } = require("path");

function getMovieData(movieID) {
    showDataMovie(movieID);
}

async function showDataMovie(movieID) {
    const movie = await getMovie(movieID);
    console.log("Thong tin bo phim: ");
    console.log("ID phim: " + movie.id);
    console.log("Ten phim: " + movie.tenphim);
    console.log("Gia tien: " + movie.giatien);
    console.log("Ten rap: " + movie.tenrap);
    console.log("Ngay chieu: " + movie.ngaychieu);
}

function getMovie(movieID) {
    return new Promise((resolve, reject) => {
        const listData = {
            1: { id: 's87gdksk', tenphim: "Bo Gia", giatien: "350.000 VND", tenrap: "CGV Gigamall", ngaychieu: "12-5-2018" },
            2: { id: "sfa7as9", tenphim: "Lat Mat", giatien: "500.000 VND", tenrap: "Lottie", ngaychieu: "20-12-2019" }
        }
        setTimeout(() => {
            resolve(listData[movieID])
        }, 2000)
    })
}
getMovie()
    .then((result) => {
        return result;
    })
    .catch(() => {
        console.log(new Error('Da co loi.'));
    })

getMovieData(2);