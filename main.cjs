const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  // إنشاء نافذة المتصفح
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "مدينتي - City Builder",
    icon: path.join(__dirname, 'icon.png'), 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true // إخفاء شريط القوائم الافتراضي
  });

  // تحميل ملف اللعبة
  win.loadFile('index.html');

  // إزالة القوائم العلوية لتجربة لعبة كاملة
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});