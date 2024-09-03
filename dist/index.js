"use strict";
var _a;
function customDate(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = customDate(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map