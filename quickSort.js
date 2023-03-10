
// function partition(array, startIndex, endIndex) {
//     let mark = startIndex;
//     const pivot = array[startIndex];
//     for (let i = startIndex + 1; i <= endIndex; i++) {
//         if (array[i] < pivot) {
//             const temp = array[mark];
//             array[mark] = array[i];
//             array[i] = array[mark];
//             mark++;
//         }
//     }
//     array[mark] = pivot;
//     return mark;
// }

// function quickSort(array, startIndex, endIndex) {
//     if (startIndex >= endIndex) {
//         return;
//     }
//     const pivotIndex = partition(array, startIndex, endIndex);
//     quickSort(array, startIndex, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, endIndex);
// }

function partition(list, startIndex, endIndex) {
    let mark = startIndex;
    const pivot = list[startIndex];
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (list[i] < pivot) {
            const temp = list[mark];
            list[mark] = list[i];
            list[i] = temp;
            mark++;
        }
    }
    list[mark] = pivot;
    return mark;
}

function quickSort(list, startIndex, endIndex) {
    if (startIndex >= endIndex) {
        return;
    }
    const pivotIndex = partition(list, startIndex, endIndex);
    quickSort(list, startIndex, pivotIndex - 1);
    quickSort(list, pivotIndex + 1, endIndex);
}

const list = [1, 36, 6, 2, 3, 19, 8, 6, 20, 42, 66, 55];
console.log('before quickSort', list);
quickSort(list, 0, list.length);
console.log('after quickSort', list);