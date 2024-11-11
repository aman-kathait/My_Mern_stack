const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');
const { error } = require('console');

const favouriteFilePath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {

  static fetchAll(callback) {
    fs.readFile(favouriteFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }

  static addToFavourites(homeId, callback) {
    Favourite.fetchAll(favouriteIds => {
      favouriteIds.push(homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(favouriteIds), callback);
    });
  }

  static deleteById(removehomeId, callback) {
    Favourite.fetchAll(homeIds => {
      const newHomeIds=homeIds.filter(homeId => removehomeId !== homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(newHomeIds), error=>{
        if (error) {
          callback(error);
          return;
        }
        Favourite.deleteById(homeId,callback);
      });
    })
  }
}