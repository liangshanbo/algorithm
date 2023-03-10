/**
 * 动态规划：背包问题
 * 一个背包可装4磅的东西，当前有音响（3000美元，4磅）、笔记本电脑（2000美元，3磅）、吉他（1500美元，1磅）
 */

 function backpack(goods, size) {
    let weightList = new Array(size + 1);
    for (let i = 0; i < goods.length; i++) {
        const tempWeightList = [...weightList];
        const currentValue = goods[i].value;
        const currentweight = goods[i].weight;
        for (let j = 1; j < tempWeightList.length; j++) {
            const maxValue = tempWeightList[j];
            if (!maxValue) {
                if (j >= currentweight) {
                    tempWeightList[j] = goods[i];
                } else {
                    tempWeightList[j] = { value: 0, weight: 0 };
                }
            } else {
                const pervMax = weightList[j-currentweight] || {};
                const prevMaxValue = pervMax.value || 0;
                const prevMaxGoods = pervMax.goods || [];
                const prevMaxWeight = pervMax.weight || 0;
                if (currentValue + prevMaxValue > maxValue.value && prevMaxWeight + currentweight <= j) {
                    tempWeightList[j] = {
                        value: currentValue + prevMaxValue,
                        weight: prevMaxWeight + currentweight,
                        goods: prevMaxGoods.concat([goods[i]]),
                    }
                }
            }
        }
        weightList = tempWeightList;
    }
    console.log('weightList', weightList);
    return weightList[size];
 }

 const goods = [
    { value: 3000, weight: 4, name: '音响' },
    { value: 2000, weight: 3, name: '笔记本电脑' },
    { value: 1500, weight: 1, name: '吉他' },
    { value: 2000, weight: 1, name: '手机' },
    { value: 3000, weight: 1, name: '按摩椅' },
    { value: 1200, weight: 1, name: '按摩店' },
    { value: 6000, weight: 3, name: '洗衣机' },
];

console.log(backpack(goods, 4));