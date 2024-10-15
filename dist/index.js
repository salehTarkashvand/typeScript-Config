"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Components(value) {
    return function Components(constraucctor) {
        console.log("components decrartors called");
        constraucctor.prototype.date = Date.now();
        constraucctor.prototype.value = value;
        constraucctor.prototype.insert = () => {
            console.log("inserted");
        };
        console.log(value);
    };
}
function pipe(constructor) {
    constructor.prototype.pipe = 1;
    console.log("pipe dectorated");
}
let Profiles = class Profiles {
};
Profiles = __decorate([
    pipe,
    Components({ insert: "fjghgllh" })
], Profiles);
//# sourceMappingURL=index.js.map