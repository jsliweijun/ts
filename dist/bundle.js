(function () {
    'use strict';

    // 装饰器
    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    // @eat('3')
    // @eat('2')
    // @eat('1')
    var Person = /** @class */ (function () {
        function Person() {
            // @toUpperCase
            this.name = 'zs';
        }
        Person.prototype.getName = function (name) {
            console.log('getName');
        };
        __decorate([
            showMethodInfo,
            __param(0, param)
        ], Person.prototype, "getName", null);
        return Person;
    }());
    function showMethodInfo(target, key, descripter) {
        console.log(target, key, descripter);
    }
    function param(target, key, index) {
        console.log(target, key, index);
    }
    var p = new Person();
    console.log('具体值', p.name);

})();
//# sourceMappingURL=bundle.js.map
