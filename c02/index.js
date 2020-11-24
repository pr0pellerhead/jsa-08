// const cb = () => {
//     console.log('timed out!');
// };

// cb();

// setTimeout(cb, 5000);

// console.log('***');

const rezultat = (calc, a, b) => {
    console.log('Rezultatot e:', calc(a, b));
};

rezultat((c, d) => {
    return c * d;
}, 4, 3);


// *******************************************

// temp(42, 'c2f', (output) => {
//     console.log('Tekovnata temperatura e', output, 'stepeni');
// });

// Tekovnata temperatura e 107.6 stepeni

// c2f -> celsius to fahrenheit
// f2c -> fahrehneit to celsius


// ********************************************************
// ДОМАШНА ЗАДАЧА: 3 различни употреби на callback шаблонот
// ********************************************************


const funWithPromise = (param) => {
    return new Promise((success, fail) => {
        // ако операцијата е успешна
        // return success();
        // ако операцијата е неупешна
        // return fail();
        if(param === true) {
            return success('SUCCESS!!!!!!'); // success(N) -> then(N => ...)
        } else {
            return fail(':('); // fail(N) -> catch(N => ...)
        }
    });
};

funWithPromise(false)
    .then(o => {
        console.log(o); // SUCCESS!!!!!!
    })
    .catch(err => {
        console.log(err); // :(
    });


// ***************************************

sobiranje(2, 2)
    .then(r => {
        console.log(r); // 4
    })
    .catch(err => {
        console.log(err);
    });


sobiranje(1, -27)
    .then(r => {
        console.log(r);
    })
    .catch(err => {
        console.log(err); // не е дозволено собирање на негативни броеви
    });


sobiranje(-90, -2)
    .then(r => {
        console.log(r);
    })
    .catch(err => {
        console.log(err); // не е дозволено собирање на негативни броеви
    });


sobiranje(81, -54)
    .then(r => {
        console.log(r);
    })
    .catch(err => {
        console.log(err); // не е дозволено собирање на негативни броеви
    });


// ********************************************************
// ДОМАШНА ЗАДАЧА: 3 различни употреби на promise шаблонот
// ********************************************************



