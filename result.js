const { myFileWriter, myFileReader, myFileDeleter, myFileUpdater } = require(".");

myFileWriter('input.txt','Chavva');
myFileReader('input.txt').then(data => { console.log(data) });
myFileUpdater('input.txt' , " is a Developer")
// myFileDeleter('inputt.txt')
