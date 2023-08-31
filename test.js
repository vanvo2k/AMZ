const arr = [55, 255, 2255, 255, 45, 87, 62]
const array = ['ab', 'cb', 'ba', 'abb', 'abbba', 'bac', 'acb', 'ac']
// console.log(array)
let temppp = []
for (let i = 0; i < array.length; i++) {
    let temp = []
    let tempp = [];
    
    temp.push(array[i].split(','))
    // console.log(temp)
    temp[0].map((item) => {
        tempp.push(item.split(''));
    });
    temppp.push(tempp);
};
let result_1=[];
temppp.map((item)=>{
    // console.log(item[0]);
    item[0].map((itemm)=>{
        // if(itemm=="a" && itemm=="b"){
        //     result_1.push(item);
        // };
        // console.log(itemm);
    });
});
console.log(temppp);