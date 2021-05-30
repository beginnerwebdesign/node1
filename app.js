const amount=12;
if(amount<10)
{
    console.log("small number");
}
else{
    console.log("large number");
}
// console.log("Hey its my first app");
// console.log(__dirname);
// console.log(__filename);
const say = (name) =>{
    console.log('hello '+name+'');
}
say('keerthana');
say('aruna');
//console.log(module);
// var os=require('os');
// const list=['list1','list2']
// const per={
//     name:'keer',
//     lists:list
// };
// var x=require('./add');
// x.add();
// console.log(per.name);
// const currentos={
//     name:os.type(),
//     release:os.release(),
//     totalmemory:os.totalmem(),
//     freemem:os.freemem()
// };
// console.log(currentos);
var path=require('path');
console.log(path.sep);
var {readFileSync,writeFileSync, writeFile}=require('fs');
const { write } = require('fs/promises');
var first=readFileSync('./module.js','utf-8');
console.log(first);
writeFileSync('./app.js','console.log("hello");',{flag:'a'});
writeFile('./add.js','console.log("hello")',{flag:'a'},(err,result)=>
{
    if(err){
        console.log("unable to write in to the file");
    }
    else{
    result;
    }
});
console.log("hello");console.log("hello");console.log("hello");console.log("hello");