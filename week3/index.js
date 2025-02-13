const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

//第一階段
let purchaseRecords = [];
let purchaseRecord = {
    name : name,
    course: course,
    price: price,
    total: course*price
};
function addPurchaseRecord(name,course){
    let price = 0;
    if (name.trim() === '' || course <= 0 || typeof name !== 'string' ||typeof course !== 'number' ){
        return "您的輸入有誤";
    }
    if (course >= 1 && course <= 10){
        price = 1500;
    }else if(course >= 11 && course <= 20){
        price = 1300;
    }else if(course >= 21 && course <= 30){
        price = 1100;
    }
    purchaseRecords.push(purchaseRecord);
    //console.log(purchaseRecords);
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${course} 堂課，總金額為 ${course*price} 元。`)
}
addPurchaseRecord('Bob',3);
addPurchaseRecord('Alice',9);

//第二階段
function calculateTotalPrice(purchaseRecords){
    let total = 0;
    purchaseRecords.forEach(function(element,index,array){
    total += element.total
    })
    return total;
}
calculateTotalPrice(purchaseRecords);

//第三階段

function filterNoPurchaseMember(){
    let purchasedMembers = [];
    purchaseRecords.forEach(function(member){
        purchasedMembers.push(member.name);
    });
    //console.log(purchasedMembers);
    let NoPurchaseMember = members.filter(function(member){
        return purchasedMembers.includes(member)===false;
    })
    return `未購買課程的會員有：${NoPurchaseMember.join(",")}`;
}