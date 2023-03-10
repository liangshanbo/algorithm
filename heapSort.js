
function upAdjust(array) {
    let childIndex = array.length - 1;
    let parentIndex = Math.floor((childIndex -1) / 2);

    const value = array[childIndex];

    while(parentIndex >= 0 && value > array[parentIndex]) {
        array[childIndex] = array[parentIndex];
        childIndex = parentIndex;
        parentIndex = Math.floor((childIndex -1) / 2);
    }
    array[childIndex] = value;
}

function downAdjust(array, parentIndex, length) {
    const value = array[parentIndex];
    let childIndex = parentIndex * 2 + 1;

    while(childIndex < length) {
        if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
            childIndex++;
        }
        if (value > array[childIndex]) {
            break;
        }
        array[parentIndex] = array[childIndex];
        parentIndex = childIndex;
        childIndex = parentIndex * 2 + 1;
    }
    array[parentIndex] = value;
}

function buildHeap(array) {
    const parentIndex = Math.floor((array.length - 2) / 2);
    for (let i = parentIndex; i >= 0; i--) {
        downAdjust(array, i, array.length);
    }
}

const list = [1, 36, 6, 2, 3, 19, 8, 6, 20, 42, 66, 55, 5, 12, 100, 76, 51];
console.log('before quickSort', list);
buildHeap(list);
console.log('after quickSort', list);

function heapSort(array) {
    // array.push(array.shift());
    for (let i = array.length - 1; i > 0; i--) {
        const temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        downAdjust(array, 0, i);

    }
}

heapSort(list);
console.log('after heapSort', list);
