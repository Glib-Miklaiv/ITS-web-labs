function task1(n) {
    if (!isNaN(Number(n))) {
        if (n%2===0) {
            return "even";
        }
        else if (n%2===1) {
            return "odd"
        } else {
            return "not even not odd but a number";
        }
    }
    return "";
}
// alert(task1("5.5"));


function isSimple(n) {
    if (n<2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++ ){
        if (n%i===0) {
            return false;
        }
    }
    return true;
}

function task2() {
    var arr = [];
    for (var i = 0; i < Infinity; i++) {
        if (isSimple(i)) {
            arr.push(i);
        }
        if (arr.length===5) {
            return arr;
        }
    }
}


function task3(n) {
    var k = 1;
    var l = 0;
    for (var i = 0; i < n; i++) {
        l+=k;
        k=k*10+1;
    }
    return l;
}

form.task1.addEventListener('click', function() {
    alert(task1(form.input.value));
}, false);

form.task2.addEventListener('click', function() {
    alert(task2());
}, false);

form.task3.addEventListener('click', function() {
    alert(task3(form.input.value));
}, false);

// alert(task3(10));