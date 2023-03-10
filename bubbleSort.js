
// function bubbleSort(list) {
//     const len = list.length;
//     let sortBorder = len - 1;
//     for (let i = 0; i < len - 1; i++) {
//         let isSorted = true;
//         let maxIndex = sortBorder;
//         for (let j = 0; j < sortBorder; j++) {
//             if (list[j] > list[j + 1]) {
//                 const temp = list[j + 1];
//                 list[j + 1] = list[j];
//                 list[j] = temp;
//                 isSorted = false;
//                 maxIndex = j;
//             }
//         }
//         sortBorder = maxIndex;
//         if (isSorted) {
//             break;
//         }
//     }
// }

function bubbleSort(list) {
    if (Array.isArray(list) && list.length > 1) {
        const length = list.length;
        let sortBorder = length - 1;
        for (let i = 0; i < length - 1; i++) {
            let isSorted = true;
            let tempSortBorder = sortBorder;
            for (let j = 0; j < sortBorder; j++) {
                if (list[j] > list[j+1]) {
                    const temp = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                    isSorted = false;
                    tempSortBorder = j;
                }
            }
            sortBorder = tempSortBorder;
            if (isSorted) {
                break;
            }
        }
    }
}

const list = [1, 36, 6, 2, 3, 19, 8, 6, 20, 42, 66, 55, 5, 12, 100, 76, 51];
console.log('before bubbleSort', list);
bubbleSort(list);
console.log('after bubbleSort', list);