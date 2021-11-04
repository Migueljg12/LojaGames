(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "5vQb":
/*!***********************************************************!*\
  !*** ./src/app/home/novo-usuario/novo-usuario.service.ts ***!
  \***********************************************************/
/*! exports provided: NovoUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoUsuarioService", function() { return NovoUsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
class NovoUsuarioService {
    constructor(http) {
        this.http = http;
    }
    cadastroNovoUsuario(novoUsuario) {
        return this.http.post(`${API}/api/user/create`, novoUsuario);
    }
    verificarCpfExiste(novoUsuario) {
        return this.http.get(`${API}/api/user/exist?cpf=${novoUsuario}`);
    }
    verificarEmailExiste(novoUsuario) {
        return this.http.get(`${API}/api/user/exist?email=${novoUsuario}`);
    }
}
NovoUsuarioService.ɵfac = function NovoUsuarioService_Factory(t) { return new (t || NovoUsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NovoUsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NovoUsuarioService, factory: NovoUsuarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NovoUsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7fA9":
/*!*************************************************************!*\
  !*** ./src/app/home/novo-usuario/usuario-existe.service.ts ***!
  \*************************************************************/
/*! exports provided: UsuarioExisteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioExisteService", function() { return UsuarioExisteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _novo_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./novo-usuario.service */ "5vQb");




class UsuarioExisteService {
    constructor(novoUsuarioService) {
        this.novoUsuarioService = novoUsuarioService;
    }
    emailJaExiste() {
        return (control) => {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(nomeUsuario => {
                return this.novoUsuarioService.verificarEmailExiste(nomeUsuario);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(usuarioExiste => {
                console.log(usuarioExiste);
                return usuarioExiste ? { usuarioExistente: true } : null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        };
    }
    cpfJaExiste() {
        return (control) => {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(nomeUsuario => {
                return this.novoUsuarioService.verificarCpfExiste(nomeUsuario);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(usuarioExiste => {
                console.log(usuarioExiste);
                return usuarioExiste ? { usuarioExistente: true } : null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        };
    }
}
UsuarioExisteService.ɵfac = function UsuarioExisteService_Factory(t) { return new (t || UsuarioExisteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_novo_usuario_service__WEBPACK_IMPORTED_MODULE_2__["NovoUsuarioService"])); };
UsuarioExisteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioExisteService, factory: UsuarioExisteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioExisteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _novo_usuario_service__WEBPACK_IMPORTED_MODULE_2__["NovoUsuarioService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "body"], [1, "row"], [1, "col-md-6", "mb-2"], ["src", "assets/img/logo_geracao_games.png", "alt", "imagem do mario no seu carrinho com a logo loja de games", 1, "img-fluid", "d-none", "d-sm-block"], [1, "col-md-6"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".body[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  padding-top: 3rem;\n  margin-left: 0.1rem;\n  padding-left: 2rem;\n  margin-right: 0.2rem;\n  padding-right: 2rem;\n  padding-bottom: 17em;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "I+oK");
/* harmony import */ var _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./novo-usuario/novo-usuario.component */ "WWez");







const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            {
                path: '',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            },
            {
                path: 'novousuario',
                component: _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_4__["NovoUsuarioComponent"]
            }
        ],
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "I+oK":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/autenticacao/autenticacao.service */ "rKke");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/mensagem/mensagem.component */ "E1ld");







function LoginComponent_app_mensagem_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 12);
} }
function LoginComponent_app_mensagem_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 13);
} }
const _c0 = function () { return ["novousuario"]; };
class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.email = '';
        this.senha = '';
    }
    ngOnInit() {
    }
    login() {
        this.auth.autenticar(this.email, this.senha).subscribe(() => {
            this.router.navigate(['jogos']);
        }, error => {
            alert('Usuario ou senha inválido');
            console.log(error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 7, consts: [[1, "text-center", "text-danger"], [1, "form", "mt-4", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["placeholder", "Email do usu\u00E1rio", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["campoEmail", "ngModel"], ["mensagem", "Email obrigat\u00F3rio!", 4, "ngIf"], ["type", "password", "placeholder", "Senha", "name", "senha", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["campoSenha", "ngModel"], ["mensagem", "Senha obrigat\u00F3ria!", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-danger", "btn-block", 3, "disabled"], [3, "routerLink"], ["mensagem", "Email obrigat\u00F3rio!"], ["mensagem", "Senha obrigat\u00F3ria!"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_app_mensagem_7_Template, 1, 0, "app-mensagem", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.senha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_app_mensagem_11_Template, 1, 0, "app-mensagem", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "N\u00E3o \u00E9 um usu\u00E1rio?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Se cadastre!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.senha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_5__["MensagemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacaoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "LldO":
/*!**********************************************************!*\
  !*** ./src/app/home/novo-usuario/minusculo.validator.ts ***!
  \**********************************************************/
/*! exports provided: minusculoValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minusculoValidator", function() { return minusculoValidator; });
function minusculoValidator(control) {
    const valor = control.value;
    if (valor !== valor.toLocaleLowerCase()) {
        return { minusculo: true };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "WWez":
/*!*************************************************************!*\
  !*** ./src/app/home/novo-usuario/novo-usuario.component.ts ***!
  \*************************************************************/
/*! exports provided: NovoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoUsuarioComponent", function() { return NovoUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _minusculo_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minusculo.validator */ "LldO");
/* harmony import */ var _usuario_senha_iguais_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-senha-iguais.validator */ "ZxF9");
/* harmony import */ var _novo_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./novo-usuario.service */ "5vQb");
/* harmony import */ var _usuario_existe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-existe.service */ "7fA9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentes/mensagem/mensagem.component */ "E1ld");











function NovoUsuarioComponent_app_mensagem_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 20);
} }
function NovoUsuarioComponent_app_mensagem_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 21);
} }
function NovoUsuarioComponent_app_mensagem_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 22);
} }
function NovoUsuarioComponent_app_mensagem_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 23);
} }
function NovoUsuarioComponent_app_mensagem_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 24);
} }
function NovoUsuarioComponent_app_mensagem_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 25);
} }
function NovoUsuarioComponent_app_mensagem_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 26);
} }
function NovoUsuarioComponent_app_mensagem_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 27);
} }
function NovoUsuarioComponent_app_mensagem_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 28);
} }
const _c0 = function () { return [""]; };
class NovoUsuarioComponent {
    constructor(formBuilder, novoUserService, usuarioExistenteService, router) {
        this.formBuilder = formBuilder;
        this.novoUserService = novoUserService;
        this.usuarioExistenteService = usuarioExistenteService;
        this.router = router;
    }
    ngOnInit() {
        this.novoUsuarioForm = this.formBuilder.group({
            name: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _minusculo_validator__WEBPACK_IMPORTED_MODULE_2__["minusculoValidator"]],
            ],
            cpf: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                this.usuarioExistenteService.cpfJaExiste(),
            ],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
                this.usuarioExistenteService.emailJaExiste(),
            ],
            password: [''],
        }, {
            validators: [_usuario_senha_iguais_validator__WEBPACK_IMPORTED_MODULE_3__["usuarioSenhaIguaisValidator"]],
        });
    }
    cadastrar() {
        if (this.novoUsuarioForm.valid) {
            const novoUsuario = this.novoUsuarioForm.getRawValue();
            this.novoUserService.cadastroNovoUsuario(novoUsuario).subscribe(() => {
                this.router.navigate(['']);
            }, (error) => console.log(error));
        }
    }
}
NovoUsuarioComponent.ɵfac = function NovoUsuarioComponent_Factory(t) { return new (t || NovoUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_novo_usuario_service__WEBPACK_IMPORTED_MODULE_4__["NovoUsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_usuario_existe_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioExisteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NovoUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NovoUsuarioComponent, selectors: [["app-novo-usuario"]], decls: 27, vars: 12, consts: [[1, "body"], [1, "text-center", "text-danger"], [3, "formGroup", "submit"], [1, "form-group"], ["placeholder", "email", "formControlName", "email", 1, "form-control"], ["mensagem", "Email obrigat\u00F3rio", 4, "ngIf"], ["mensagem", "Email no formato incorreto.", 4, "ngIf"], ["mensagem", "Email j\u00E1 existe", 4, "ngIf"], ["placeholder", "Nome", "formControlName", "name", 1, "form-control"], ["mensagem", "Nome Incorreto.", 4, "ngIf"], ["mensagem", "Nome deve ser minusculo!", 4, "ngIf"], ["placeholder", "CPF", "formControlName", "cpf", 1, "form-control"], ["mensagem", "Cpf deve conter 11 digitos.", 4, "ngIf"], ["mensagem", "CPF obrigat\u00F3rio", 4, "ngIf"], ["mensagem", "CPF j\u00E1 existe", 4, "ngIf"], ["placeholder", "Senha", "type", "password", "formControlName", "password", 1, "form-control"], ["mensagem", "Senha n\u00E3o pode ser igual ao nome", 4, "ngIf"], [1, "btn", "btn-danger", "btn-block"], [1, "text-light"], [3, "routerLink"], ["mensagem", "Email obrigat\u00F3rio"], ["mensagem", "Email no formato incorreto."], ["mensagem", "Email j\u00E1 existe"], ["mensagem", "Nome Incorreto."], ["mensagem", "Nome deve ser minusculo!"], ["mensagem", "Cpf deve conter 11 digitos."], ["mensagem", "CPF obrigat\u00F3rio"], ["mensagem", "CPF j\u00E1 existe"], ["mensagem", "Senha n\u00E3o pode ser igual ao nome"]], template: function NovoUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cadastre-se e compre nossos jogos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NovoUsuarioComponent_Template_form_submit_3_listener() { return ctx.cadastrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NovoUsuarioComponent_app_mensagem_6_Template, 1, 0, "app-mensagem", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NovoUsuarioComponent_app_mensagem_7_Template, 1, 0, "app-mensagem", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NovoUsuarioComponent_app_mensagem_8_Template, 1, 0, "app-mensagem", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NovoUsuarioComponent_app_mensagem_11_Template, 1, 0, "app-mensagem", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NovoUsuarioComponent_app_mensagem_12_Template, 1, 0, "app-mensagem", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NovoUsuarioComponent_app_mensagem_15_Template, 1, 0, "app-mensagem", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NovoUsuarioComponent_app_mensagem_16_Template, 1, 0, "app-mensagem", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NovoUsuarioComponent_app_mensagem_17_Template, 1, 0, "app-mensagem", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NovoUsuarioComponent_app_mensagem_20_Template, 1, 0, "app-mensagem", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cadastro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " J\u00E1 \u00E9 um usu\u00E1rio? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Fa\u00E7a login!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.novoUsuarioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.novoUsuarioForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && ((tmp_1_0 = ctx.novoUsuarioForm.get("email")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.novoUsuarioForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.email) && ((tmp_2_0 = ctx.novoUsuarioForm.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.novoUsuarioForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.usuarioExistente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.novoUsuarioForm.get("name")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.novoUsuarioForm.get("name")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.novoUsuarioForm.get("name")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.minusculo) && ((tmp_5_0 = ctx.novoUsuarioForm.get("name")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.novoUsuarioForm.get("cpf")) == null ? null : tmp_6_0.errors) && ((tmp_6_0 = ctx.novoUsuarioForm.get("cpf")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.novoUsuarioForm.get("cpf")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required) && ((tmp_7_0 = ctx.novoUsuarioForm.get("cpf")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.novoUsuarioForm.get("cpf")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.usuarioExistente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.novoUsuarioForm.errors == null ? null : ctx.novoUsuarioForm.errors.senhaIgualUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_8__["MensagemComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  margin-bottom: -5.78rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6Im5vdm8tdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBtYXJnaW4tYm90dG9tOiAtNS43OHJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NovoUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-novo-usuario',
                templateUrl: './novo-usuario.component.html',
                styleUrls: ['./novo-usuario.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _novo_usuario_service__WEBPACK_IMPORTED_MODULE_4__["NovoUsuarioService"] }, { type: _usuario_existe_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioExisteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZxF9":
/*!*********************************************************************!*\
  !*** ./src/app/home/novo-usuario/usuario-senha-iguais.validator.ts ***!
  \*********************************************************************/
/*! exports provided: usuarioSenhaIguaisValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuarioSenhaIguaisValidator", function() { return usuarioSenhaIguaisValidator; });
function usuarioSenhaIguaisValidator(formGroup) {
    var _a, _b, _c, _d;
    const username = (_b = (_a = formGroup.get('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    const password = (_d = (_c = formGroup.get('password')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
    if (username.trim() + password.trim()) {
        return username !== password ? null : { senhaIgualUsuario: true };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "I+oK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./novo-usuario/novo-usuario.component */ "WWez");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_7__["NovoUsuarioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _novo_usuario_novo_usuario_component__WEBPACK_IMPORTED_MODULE_7__["NovoUsuarioComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "rKke":
/*!******************************************************!*\
  !*** ./src/app/autenticacao/autenticacao.service.ts ***!
  \******************************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario/usuario.service */ "7oKD");






const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
class AutenticacaoService {
    constructor(http, usuarioService) {
        this.http = http;
        this.usuarioService = usuarioService;
    }
    autenticar(email, senha) {
        console.log(API);
        return this.http
            .post(`${API}/api/auth/signin`, {
            email: email,
            password: senha,
        }, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            var _a;
            const authtoken = (_a = res.body) !== null && _a !== void 0 ? _a : '';
            this.usuarioService.salvaToken(authtoken);
        }));
    }
}
AutenticacaoService.ɵfac = function AutenticacaoService_Factory(t) { return new (t || AutenticacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"])); };
AutenticacaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutenticacaoService, factory: AutenticacaoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutenticacaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map