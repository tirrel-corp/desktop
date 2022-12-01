const ipcRenderer = require('electron').ipcRenderer;
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// const { contextBridge } = require("electron");

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
// process.once("loaded", () => {
//     contextBridge.exposeInMainWorld("versions", process.versions);
// });

window.scene = {
  respawn: () => {
    ipcRenderer.send('respawn');
  },
  handleUpdateDownloaded: callback => {
    ipcRenderer.on('update-downloaded', callback);
  },
  queryVersion: () => ipcRenderer.invoke('query-version'),
}
