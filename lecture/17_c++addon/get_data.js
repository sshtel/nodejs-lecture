const getDataMod = require('./build/release/getDataMod')
console.log(getDataMod.getData(1, 2, 3));

getDataMod.getDataCb((data1, data2, data3)=> {
    console.log(data1, data2, data3);
})
