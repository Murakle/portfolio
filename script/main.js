function findMin(arr) {
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i
        }
    }
    return arr[minIndex];
}

function findMax(arr) {
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxndex = i
        }
    }
    return arr[maxIndex];
}

function swap(arr, firstIndex, secondIndex) {
    const t = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = t;
}

function partition(arr, left, right) {
    var p = arr[Math.floor((right + left) / 2)];
    var i = left;
    var j = right;
    while (i <= j) {
        while (arr[i] < p) {
            i++;
        }
        while (arr[j] > p) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        var index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function sort(arr) {
    arrCopy = [];
    for (var i = 0; i < arr.length; i++) {
        arrCopy.push(arr[i])
    }
    return quickSort(arrCopy, 0, arrCopy.length - 1)
}

function countAll(currentElement) {
    var tags = new Map();
    var childrens = currentElement.children;
    for (var i = 0; i < childrens.length; i++) {
        tagName = childrens[i].tagName;
        if (tags.has(tagName)) {
            tags.set(tagName, tags.get(tagName) + 1);
        } else {
            tags.set(tagName, 1);
        }
        childrenTags = countAll(childrens[i])
        for (var [childrenTag, amount] of childrenTags.entries()) {
            if (tags.has(childrenTag)) {
                tags.set(childrenTag, tags.get(childrenTag) + amount);
            } else {
                tags.set(childrenTag, amount);
            }
        }
    }
    return tags;
}

var arr = [];
n = 1500;
maxNumber = 1e6;
for (var i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * maxNumber));
}
console.log(arr)
console.log(findMin(arr))
console.log(findMax(arr))
var sortedArr = sort(arr)
console.log(sortedArr)
tags = countAll(document)
console.log(tags)
// console.log(arr)