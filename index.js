
/**
 * 防抖
 */
const but = document.querySelector('.button')

// 防抖
function debounce(fn, delay) {
    let time = null
    return () => {
        clearTimeout(time)
        setTimeout(() => {
            fn.call(this.arguments)
        }, delay);
    }
}

// 节流
function throttle(fn, delay) {
    let time = true
    if (time) {
        time= false
        setTimeout(() => {
            time = true
            fn.call(this.arguments)
        }, delay);
    }
}

/* 
const arr = [1, [[2, 3], 4],5]
const flatten = (arr, deep = 1) => {
    if (deep <= 0) return arr;
    return arr.reduce((res, curr) => res.concat(Array.isArray(curr) ? flatten(curr, deep - 1) : curr), [])
}
// function flatten (arr,deep=1) {
// return   arr.reduce((acc,val) => acc.concat(Array.isArray(val)? flatten(val,deep-1):val),[])
// }
console.log(arr, Infinity);
// 输出:[ 1, 2, 3, 4, 5, 6 ]
 
*/


/* function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
        console.log(arr);
    }
    return
}
console.log(flatten(arr));
 */

