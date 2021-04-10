function extensibleObject() {
    const proto = {};
    let myObj = Object.create(proto);
    myObj.extend = function (obj) {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                myObj[key] = value;
            }
        })
    };

    return myObj;
}


const myObj = extensibleObject();
console.log(myObj);
const template = {
    extensionMethod: function () {
    },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
