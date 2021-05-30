const _ =require('lodash');
//console.log(_);
list=[1,2,2];
list1=[1,[2,3,[2,5]]]
const newI = _.flattenDeep(list1);
console.log(newI);