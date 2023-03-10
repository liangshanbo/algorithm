
function selectorSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        if (i != minIndex) {
            const minValue = list[minIndex];
            list[minIndex] = list[i];
            list[i] = minValue;
        }
    }
}

const list = [1, 36, 6, 2, 3, 19, 8, 6, 20, 42, 66, 55];
console.log('before quickSort', list);
selectorSort(list, 0, list.length);
console.log('after quickSort', list);
