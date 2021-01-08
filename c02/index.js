const fs = require('fs');


const dirMk = (path) => {
  return new Promise((success, fail) => {
    fs.mkdir(path, {recursive: true}, err => {
      if(err) {
        return fail(err);
      }
      return success();
    });
  });
};

  
  const fileCopy = (source, destination) => {
    return new Promise((success, fail) => {
      fs.copyFile(source, destination, err => {
        if(err) {
          return fail(err);
        }
        return success();
      });
    });
  };

  const renameFile = (oldFile, newFile) => {
    new Promise((success, fail) => {
      fs.rename(oldFile, newFile, err => {
        if(err) {
          return fail(err);
        }
        return success();
      });
    });
  };

  
  const fileAccess = (file) => {
    return new Promise((success, fail) => {
      fs.access(file, fs.constants.F_OK, err => {
        if(err) {
          return fail(err);
        }
        return success(file);
      });
    });
  };

  const fileChmod = (file) => {
    return new Promise((success, fail) => {
      fs.chmod(file, 0o400, err => {
        if(err) {
          return fail(err);
        }
        return success(file);
      });
    });
  };

  const main = async () => {
    try {
      await dirMk('\Users\PC\Desktop\Bojan\c02\data.txt');
      console.log('Successful path created');

      await fileCopy('index.js', 'copyedIndex.js');
      console.log('Success copy file');

      await renameFile('index.js', 'index1.js');
      console.log('Success rename');
        
      let check = await fileAccess('index1.js');
      console.log('exists', check);

      await fileChmod('index1.js');
      console.log('The permissions for file "index1.js" have been changed!')

    } catch(err) {
      console.log(err);
    }
  };

  main(); 