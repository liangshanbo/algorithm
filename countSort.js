// 

function countSort(array) {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (item > max) {
            max = item;
        } else if (item < min) {
            min = item;
        }
    }

    const length = max - min + 1;
    const sortedArray = new Array(length);
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (!sortedArray[item - min]) {
            sortedArray[item - min] = 0;
        }
        sortedArray[item - min]++;
    }
    const result = [];
    console.log('sortedArray', sortedArray);
    for (let i = 0; i < sortedArray.length; i++) {
        const item = sortedArray[i];
        if (item > 0) {
            for (let j = 0; j < item; j++) {
                result.push(min + i);
            }
        }
    }
    return result;
}

console.log(countSort([1, 2, 5, 6, 8, 4, 2, 1, 3, 9, 0, 7, 5, 3, 4, 6, 0, 0, 1, 5, 7, 9, 3]));