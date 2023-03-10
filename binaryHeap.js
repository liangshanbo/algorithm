
function upAdjust(array) {
    let childIndex = array.length -1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    const temp = array[childIndex];

    while(childIndex > 0 & temp > array[parentIndex]) {
        array[childIndex] = array[parentIndex];
        childIndex = parentIndex;
        parentIndex = Math.floor((childIndex - 1) / 2);
    }

    array[childIndex] = temp;
}

function downAdjust(array, parentIndex) {
    const length = array.length;
    const temp = array[parentIndex];
    let childIndex = parentIndex * 2 + 1;

    while(childIndex < length) {
        if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
            childIndex++;
        }
        if (temp >= array[childIndex]) {
            break;
        } else if (array[childIndex] > temp) {
            array[parentIndex] = array[childIndex];
            parentIndex = childIndex;
            childIndex = parentIndex * 2 + 1;
        }
    }
    array[parentIndex] = temp;
}

function createBinaryHeap(array) {
    let parentIndex = Math.floor((array.length - 1) / 2);
    for (let i = parentIndex; i >= 0; i--) {
        downAdjust(array, i);
    }
}

const list1 = [16, 24, 65, 17];

console.log('before list1', list1);
createBinaryHeap(list1);
console.log('after list1', list1);
// list1.push(100);
console.log('after push list1', list1);
upAdjust(list1);
console.log('after upAjest list1', list1);

const array2 = [10, 20, 50, 70, 90, 100, 92, 53, 66, 91, 82, 8];

for (let i = 0; i < array2.length; i++) {
    const item = array2[i];
    if (item < list1[0]) {
        list1[0] = list1.pop();
        downAdjust(list1, 0);
        list1.push(item);
        upAdjust(list1);
    }
}

console.log('after upAjest list2', list1);
