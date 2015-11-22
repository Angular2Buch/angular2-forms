var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('angular2/testing');
var angular2_1 = require('angular2/angular2');
var GasService = (function () {
    function GasService() {
    }
    return GasService;
})();
var Dashboard = (function () {
    function Dashboard(gasService) {
        this.gasService = gasService;
        console.log('Dependency:', gasService);
    }
    Dashboard = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [GasService])
    ], Dashboard);
    return Dashboard;
})();
testing_1.describe("Injector", function () {
    testing_1.it("should be able to resolve and inject dependencies", function () {
        var injector = angular2_1.Injector.resolveAndCreate([
            Dashboard,
            GasService]);
        var dashboard = injector.get(Dashboard);
        testing_1.expect(dashboard instanceof Dashboard).toBe(true);
        testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
    });
});
//# sourceMappingURL=sample_constructor_injection_test.js.map