'use strict';
require('electron-reload')('__dirname');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 800
  });

  mainWindow.webContents.openDevTools();

  app.on('window-all-closed', () => {
    app.quit();
  });

  app.on('open-file', () => {
    console.log(arguments);
  });

  mainWindow.loadURL(`file://${__dirname}/public/index.html`);
});
