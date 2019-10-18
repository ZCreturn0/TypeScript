"use strict";
function tellName(name) {
    if (name.length) {
        console.log(name);
    }
    else if (name) {
        name();
    }
}
tellName('aaa');
tellName(function () {
    console.log('bbb');
});
