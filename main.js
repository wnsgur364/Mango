const { app, BrowserWindow } = require('electron');
const path = require('path');
// 창을 정의 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 480,
        webPreferences: { preload: path.join(__dirname, 'preload.js') } // 페이지가 표시되기 전에 실행할 전처리 코드, 절대 경로로 지정
    });
 
    win.loadFile('index.html'); // 창에서 불러들일 HTML 문서 지정
};
// Application이 준비된 후 실해할 스크립트 지정 
app.whenReady().then(() => {
    createWindow();
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});