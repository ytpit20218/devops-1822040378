// JavaScript cho Website Demo CI/CD GitHub Actions
// Sinh viên: Nguyễn Minh Kiệt - MSSV: 1822040378

document.addEventListener("DOMContentLoaded", () => {
    const btnClick = document.getElementById("btn-click");
    const btnTime = document.getElementById("btn-time");
    const outputBox = document.getElementById("output-box");

    let clickCount = 0;

    btnClick.addEventListener("click", () => {
        clickCount++;
        outputBox.innerHTML = `Xin chào! Bạn vừa tương tác với trang web của <strong>Nguyễn Minh Kiệt (1822040378)</strong> lần thứ <strong>${clickCount}</strong>. Pipeline GitHub Actions hoạt động hoàn hảo!`;
    });

    btnTime.addEventListener("click", () => {
        const now = new Date();
        const timeString = now.toLocaleString("vi-VN", {
            hour12: false,
            dateStyle: "full",
            timeStyle: "medium"
        });
        outputBox.innerHTML = `Thời gian hệ thống hiện tại: <strong>${timeString}</strong>`;
    });

    console.log("Website initialized successfully. GitHub Actions CI/CD ready!");
});
