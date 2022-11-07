
/**
 * 防抖
 */
const but = document.querySelector('.button')
but.addEventListener('click', debounce(debounceEvent, 200))
const but2 = document.querySelector('.button2')
but2.addEventListener('click', throttle(debounceEvent2, 200))
const but3 = document.querySelector('.button3')
but3.addEventListener('click', deThrottle(debounceEvent3, 500))

function debounceEvent() {
    console.log('防抖了');
}
function debounceEvent2() {
    console.log('节流了');
}
function debounceEvent3() {
    console.log('防抖和节流了');
}

// 防抖
function debounce(fn, delay) {
    let time = null
    return () => {
        clearTimeout(time)
        time = setTimeout(() => {
            fn.call(this.arguments)
        }, delay);
    }
}

// 节流
function throttle(fn, delay) {
    let time = true
    return () => {
        if (!time) {
            return
        }
        time = false
        setTimeout(() => {
            time = true
            fn.apply(this, arguments)
        }, delay);
    }
}


function deThrottle(fn, delay) {
    let last = 0, timer = null;
    return function (...args) {
        let now = new Date();
        if (now - last < delay) {
            clearTimeout(timer);
            setTimeout(function () {
                last = now;
                fn.apply(this, args);
            }, delay);
        } else {
            // 这个时候表示时间到了，必须给响应
            last = now;
            fn.apply(this, args);
        }
    }
}


//  手写一个flatten 数组扁平
/* function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
        console.log(arr);
    }
    return
}
console.log(flatten(arr));
 */

