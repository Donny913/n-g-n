/* eslint-disable import/no-extraneous-dependencies*/
/* eslint-disable no-console*/
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const buildPath = path.join(__dirname, '../build');
const publicPath = path.join(__dirname, '../../g-news-app/public');

const removeUiBuildToApp = () => {
  fs.rename(buildPath, publicPath, error => console.error(error));
};

exec('npm run build', () => {
  if (fs.existsSync(publicPath)) {
    fs.remove(publicPath, err => {
      if (err) {
        console.error(err);
      }
      removeUiBuildToApp();
    });
  } else {
    removeUiBuildToApp();
  }
});
