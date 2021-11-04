(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jogos-jogos-module"],{

/***/ "BSbT":
/*!***********************************************!*\
  !*** ./src/app/jogos/jogos-routing.module.ts ***!
  \***********************************************/
/*! exports provided: JogosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosRoutingModule", function() { return JogosRoutingModule; });
/* harmony import */ var _novo_jogo_novo_jogo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo-jogo/novo-jogo.component */ "VVp6");
/* harmony import */ var _detalhe_jogo_detalhe_jogo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalhe-jogo/detalhe-jogo.component */ "uYdQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-jogos/lista-jogos.component */ "JZQ1");
/* harmony import */ var _lista_jogos_lista_jogos_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-jogos/lista-jogos.resolver */ "cg8B");








const routes = [
    {
        path: '',
        component: _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__["ListaJogosComponent"],
        resolve: {
            jogos: _lista_jogos_lista_jogos_resolver__WEBPACK_IMPORTED_MODULE_5__["ListaJogosResolver"],
        },
    },
    {
        path: 'novo',
        component: _novo_jogo_novo_jogo_component__WEBPACK_IMPORTED_MODULE_0__["NovoJogoComponent"],
    },
    {
        path: ':jogoId',
        component: _detalhe_jogo_detalhe_jogo_component__WEBPACK_IMPORTED_MODULE_1__["DetalheJogoComponent"],
    },
];
class JogosRoutingModule {
}
JogosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JogosRoutingModule });
JogosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function JogosRoutingModule_Factory(t) { return new (t || JogosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JogosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JogosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "FpVo":
/*!**********************************************************!*\
  !*** ./src/app/jogos/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "fn9L");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CategoriesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_div_2_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.mostrar(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categories_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categories_r2.category, " ");
} }
class CategoriesComponent {
    constructor(categoriService, router) {
        this.categoriService = categoriService;
        this.router = router;
    }
    ngOnInit() {
        this.categories$ = this.categoriService.buscaPorCategoria(this.id);
    }
    mostrar(bolean) {
        let display = document.getElementsByClassName('editar');
        display[0].hidden = display[0].hidden === true ? false : true;
        if (bolean) {
            display[0].hidden = true;
        }
        return display;
    }
    editando(text) {
        return this.categoriService
            .atualizaCategoria(this.id, text.value)
            .subscribe(() => {
            this.categories$ = this.categoriService.buscaPorCategoria(this.id);
            this.mostrar(true);
        });
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], inputs: { id: "id" }, decls: 4, vars: 3, consts: [["type", "text", "hidden", "", "placeholder", "Nova\n  Categoria", 1, "editar", 3, "keyup.enter"], ["editar", ""], [4, "ngIf"], [1, "categoria", 3, "click"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CategoriesComponent_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.editando(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriesComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.categories$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".editar[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 1rem;\n  margin-top: 5rem;\n  background-position-x: 1rem;\n}\n\n.categoria[_ngcontent-%COMP%] {\n  color: blueviolet;\n  font-family: \"comic sans MS\";\n  font-size: 3rem;\n  margin-left: 16rem;\n  margin-top: -2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMXJlbTtcbn1cblxuLmNhdGVnb3JpYSB7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xuICBmb250LWZhbWlseTogXCJjb21pYyBzYW5zIE1TXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDE2cmVtO1xuICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.css'],
            }]
    }], function () { return [{ type: _categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JZQ1":
/*!************************************************************!*\
  !*** ./src/app/jogos/lista-jogos/lista-jogos.component.ts ***!
  \************************************************************/
/*! exports provided: ListaJogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaJogosComponent", function() { return ListaJogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grade_info_jogos_grade_info_jogos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grade-info-jogos/grade-info-jogos.component */ "sGpp");




class ListaJogosComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.jogos = this.activatedRoute.snapshot.data['jogos'];
        });
    }
}
ListaJogosComponent.ɵfac = function ListaJogosComponent_Factory(t) { return new (t || ListaJogosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ListaJogosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaJogosComponent, selectors: [["app-lista-jogos"]], decls: 1, vars: 1, consts: [[1, "bgc", 3, "jogos"]], template: function ListaJogosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grade-info-jogos", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jogos", ctx.jogos);
    } }, directives: [_grade_info_jogos_grade_info_jogos_component__WEBPACK_IMPORTED_MODULE_2__["GradeInfoJogosComponent"]], styles: [".bgc[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWpvZ29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoibGlzdGEtam9nb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaJogosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lista-jogos',
                templateUrl: './lista-jogos.component.html',
                styleUrls: ['./lista-jogos.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "LLEK":
/*!****************************************!*\
  !*** ./src/app/jogos/jogos.service.ts ***!
  \****************************************/
/*! exports provided: JogosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosService", function() { return JogosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _autenticacao_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autenticacao/token.service */ "4/Zf");





const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
class JogosService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    listaDoUsuario() {
        return this.http.get(`${API}/api/game/search`);
    }
    importCategory(_id) {
        return this.http.get(`${API}/api/category/search/${_id}`);
    }
    buscarPorId(id) {
        return this.http.get(`${API}/api/game/search/${id}`);
    }
    excluirJogo(id) {
        return this.http.delete(`${API}/api/game/delete/${id}`);
    }
    uploadJogo(gameName, category, stock, description, price) {
        const body = { gameName, category, stock, description, price };
        console.log(body);
        return this.http.post(`${API}/api/game/create`, body);
    }
}
JogosService.ɵfac = function JogosService_Factory(t) { return new (t || JogosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_autenticacao_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
JogosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JogosService, factory: JogosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JogosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _autenticacao_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "LrN8":
/*!***************************************!*\
  !*** ./src/app/jogos/jogos.module.ts ***!
  \***************************************/
/*! exports provided: JogosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosModule", function() { return JogosModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _jogos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jogos-routing.module */ "BSbT");
/* harmony import */ var _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-jogos/lista-jogos.component */ "JZQ1");
/* harmony import */ var _jogo_jogo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jogo/jogo.component */ "PJ0L");
/* harmony import */ var _componentes_cartao_cartao_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/cartao/cartao.module */ "QDMf");
/* harmony import */ var _grade_info_jogos_grade_info_jogos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grade-info-jogos/grade-info-jogos.component */ "sGpp");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/categories.component */ "FpVo");
/* harmony import */ var _detalhe_jogo_detalhe_jogo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detalhe-jogo/detalhe-jogo.component */ "uYdQ");
/* harmony import */ var _novo_jogo_novo_jogo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./novo-jogo/novo-jogo.component */ "VVp6");












class JogosModule {
}
JogosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JogosModule });
JogosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function JogosModule_Factory(t) { return new (t || JogosModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _jogos_routing_module__WEBPACK_IMPORTED_MODULE_3__["JogosRoutingModule"], _componentes_cartao_cartao_module__WEBPACK_IMPORTED_MODULE_6__["CartaoModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JogosModule, { declarations: [_lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__["ListaJogosComponent"],
        _jogo_jogo_component__WEBPACK_IMPORTED_MODULE_5__["JogoComponent"],
        _grade_info_jogos_grade_info_jogos_component__WEBPACK_IMPORTED_MODULE_7__["GradeInfoJogosComponent"],
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"],
        _detalhe_jogo_detalhe_jogo_component__WEBPACK_IMPORTED_MODULE_9__["DetalheJogoComponent"],
        _novo_jogo_novo_jogo_component__WEBPACK_IMPORTED_MODULE_10__["NovoJogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _jogos_routing_module__WEBPACK_IMPORTED_MODULE_3__["JogosRoutingModule"], _componentes_cartao_cartao_module__WEBPACK_IMPORTED_MODULE_6__["CartaoModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JogosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _lista_jogos_lista_jogos_component__WEBPACK_IMPORTED_MODULE_4__["ListaJogosComponent"],
                    _jogo_jogo_component__WEBPACK_IMPORTED_MODULE_5__["JogoComponent"],
                    _grade_info_jogos_grade_info_jogos_component__WEBPACK_IMPORTED_MODULE_7__["GradeInfoJogosComponent"],
                    _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"],
                    _detalhe_jogo_detalhe_jogo_component__WEBPACK_IMPORTED_MODULE_9__["DetalheJogoComponent"],
                    _novo_jogo_novo_jogo_component__WEBPACK_IMPORTED_MODULE_10__["NovoJogoComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _jogos_routing_module__WEBPACK_IMPORTED_MODULE_3__["JogosRoutingModule"], _componentes_cartao_cartao_module__WEBPACK_IMPORTED_MODULE_6__["CartaoModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PJ0L":
/*!**********************************************!*\
  !*** ./src/app/jogos/jogo/jogo.component.ts ***!
  \**********************************************/
/*! exports provided: JogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoComponent", function() { return JogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");



const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
class JogoComponent {
    constructor() {
        this.urlOriginal = '';
    }
    set banco(banco) {
        if (banco.startsWith('data')) {
            this.urlOriginal = banco;
        }
        else {
            this.urlOriginal = `${API}/api/game/search`;
        }
    }
    get url() {
        return this.urlOriginal;
    }
    ngOnInit() {
    }
}
JogoComponent.ɵfac = function JogoComponent_Factory(t) { return new (t || JogoComponent)(); };
JogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JogoComponent, selectors: [["app-jogo"]], inputs: { banco: "banco" }, decls: 2, vars: 0, template: function JogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "oi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2dvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jogo',
                templateUrl: './jogo.component.html',
                styleUrls: ['./jogo.component.css']
            }]
    }], function () { return []; }, { banco: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QDMf":
/*!*****************************************************!*\
  !*** ./src/app/componentes/cartao/cartao.module.ts ***!
  \*****************************************************/
/*! exports provided: CartaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoModule", function() { return CartaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cartao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartao.component */ "gaS1");




class CartaoModule {
}
CartaoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartaoModule });
CartaoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartaoModule_Factory(t) { return new (t || CartaoModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartaoModule, { declarations: [_cartao_component__WEBPACK_IMPORTED_MODULE_2__["CartaoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_cartao_component__WEBPACK_IMPORTED_MODULE_2__["CartaoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartaoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cartao_component__WEBPACK_IMPORTED_MODULE_2__["CartaoComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_cartao_component__WEBPACK_IMPORTED_MODULE_2__["CartaoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "VVp6":
/*!********************************************************!*\
  !*** ./src/app/jogos/novo-jogo/novo-jogo.component.ts ***!
  \********************************************************/
/*! exports provided: NovoJogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoJogoComponent", function() { return NovoJogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../jogos.service */ "LLEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentes/mensagem/mensagem.component */ "E1ld");








function NovoJogoComponent_app_mensagem_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mensagem", 15);
} }
class NovoJogoComponent {
    constructor(formBuilder, router, jogoServ) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.jogoServ = jogoServ;
    }
    ngOnInit() {
        this.formularioJogo = this.formBuilder.group({
            gameName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            category: [''],
            stock: [''],
            description: [''],
            price: [''],
        });
    }
    upload() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const gameName = (_b = (_a = this.formularioJogo.get('gameName')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        const category = (_d = (_c = this.formularioJogo.get('category')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        const stock = (_f = (_e = this.formularioJogo.get('stock')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        const description = (_h = (_g = this.formularioJogo.get('description')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        const price = (_k = (_j = this.formularioJogo.get('price')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        this.jogoServ
            .uploadJogo(gameName, category, stock, description, price)
            .subscribe(() => this.router.navigate(['jogos']));
    }
}
NovoJogoComponent.ɵfac = function NovoJogoComponent_Factory(t) { return new (t || NovoJogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jogos_service__WEBPACK_IMPORTED_MODULE_3__["JogosService"])); };
NovoJogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NovoJogoComponent, selectors: [["app-novo-jogo"]], decls: 18, vars: 2, consts: [[1, "body"], [1, "row", 3, "formGroup", "submit"], [1, "col-md-6", "text-center"], ["src", "assets/img/logo_geracao_games.png", "alt", "imagem do mario no seu carrinho com a logo loja de games"], [1, "col-md-6"], [1, "form-group"], ["formControlName", "gameName", "placeholder", "Nome do jogo", 1, "form-control"], ["mensagem", "Nome do jogo \u00E9 obrigatorio!", 4, "ngIf"], [1, "formgroup"], ["formControlName", "category", "placeholder", "Categoria", 1, "form-control"], [1, "form-group", "stock-design"], ["type", "number", "formControlName", "stock", "placeholder", "Quantidade do estoque!", 1, "form-control"], ["formControlName", "description", "placeholder", "Descri\u00E7\u00E3o do jogo!", 1, "form-control"], ["formControlName", "price", "placeholder", "Pre\u00E7o do jogo!", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger", "btn-block", "bot\u00E3o-design"], ["mensagem", "Nome do jogo \u00E9 obrigatorio!"]], template: function NovoJogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NovoJogoComponent_Template_form_submit_1_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NovoJogoComponent_app_mensagem_7_Template, 1, 0, "app-mensagem", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioJogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.formularioJogo.get("gameName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && ((tmp_1_0 = ctx.formularioJogo.get("gameName")) == null ? null : tmp_1_0.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _componentes_mensagem_mensagem_component__WEBPACK_IMPORTED_MODULE_5__["MensagemComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  padding-top: 3rem;\n  margin-left: 0.1rem;\n  padding-left: 2rem;\n  margin-right: 0.2em;\n  padding-right: 2rem;\n  padding-bottom: 10.2em;\n  background-color: black;\n}\n\n.stock-design[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.bot\u00E3o-design[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdm8tam9nby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJub3ZvLWpvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTAuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnN0b2NrLWRlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYm90w6NvLWRlc2lnbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NovoJogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-novo-jogo',
                templateUrl: './novo-jogo.component.html',
                styleUrls: ['./novo-jogo.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _jogos_service__WEBPACK_IMPORTED_MODULE_3__["JogosService"] }]; }, null); })();


/***/ }),

/***/ "cg8B":
/*!***********************************************************!*\
  !*** ./src/app/jogos/lista-jogos/lista-jogos.resolver.ts ***!
  \***********************************************************/
/*! exports provided: ListaJogosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaJogosResolver", function() { return ListaJogosResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _jogos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jogos.service */ "LLEK");
/* harmony import */ var src_app_autenticacao_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/autenticacao/usuario/usuario.service */ "7oKD");




class ListaJogosResolver {
    constructor(jogoService, userService) {
        this.jogoService = jogoService;
        this.userService = userService;
    }
    resolve(route, state) {
        return this.jogoService.listaDoUsuario();
    }
}
ListaJogosResolver.ɵfac = function ListaJogosResolver_Factory(t) { return new (t || ListaJogosResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_autenticacao_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"])); };
ListaJogosResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListaJogosResolver, factory: ListaJogosResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaJogosResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"] }, { type: src_app_autenticacao_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }]; }, null); })();


/***/ }),

/***/ "fn9L":
/*!********************************************************!*\
  !*** ./src/app/jogos/categories/categories.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    buscaPorCategoria(id) {
        return this.http.get(`${API}/api/category/search/${id}`);
    }
    atualizaCategoria(id, category) {
        console.log('Chegou até o metodo de atualizar!');
        return this.http.put(`${API}/api/category/update?_id=${id}`, {
            category,
        });
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gaS1":
/*!********************************************************!*\
  !*** ./src/app/componentes/cartao/cartao.component.ts ***!
  \********************************************************/
/*! exports provided: CartaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoComponent", function() { return CartaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CartaoComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
const _c0 = ["*"];
class CartaoComponent {
    constructor() {
        this.titulo = '';
    }
    ngOnInit() {
    }
}
CartaoComponent.ɵfac = function CartaoComponent_Factory(t) { return new (t || CartaoComponent)(); };
CartaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartaoComponent, selectors: [["app-cartao"]], inputs: { titulo: "titulo" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "card", "borde-light", "text-center", "bg-danger"], ["class", "card-header", 4, "ngIf"], [1, "card-block", "textjustify"], [1, "card-header"]], template: function CartaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartaoComponent_h4_1_Template, 2, 1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titulo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0YW8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cartao',
                templateUrl: './cartao.component.html',
                styleUrls: ['./cartao.component.css']
            }]
    }], function () { return []; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sGpp":
/*!**********************************************************************!*\
  !*** ./src/app/jogos/grade-info-jogos/grade-info-jogos.component.ts ***!
  \**********************************************************************/
/*! exports provided: GradeInfoJogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeInfoJogosComponent", function() { return GradeInfoJogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _jogos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jogos.service */ "LLEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_cartao_cartao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentes/cartao/cartao.component */ "gaS1");






const _c0 = function (a1) { return ["/jogos", a1]; };
function GradeInfoJogosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-cartao", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jogo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, jogo_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nome do jogo: ", jogo_r1.gameName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Categoria: ", jogo_r1.category[0] == null ? null : jogo_r1.category[0].category, " ", jogo_r1.category[1] == null ? null : jogo_r1.category[1].category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pre\u00E7o: R$ ", jogo_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Estoque: ", jogo_r1.stock, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descri\u00E7\u00E3o: ", jogo_r1.description, "");
} }
class GradeInfoJogosComponent {
    constructor(jogoServ) {
        this.jogoServ = jogoServ;
    }
    ngOnInit() { }
}
GradeInfoJogosComponent.ɵfac = function GradeInfoJogosComponent_Factory(t) { return new (t || GradeInfoJogosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"])); };
GradeInfoJogosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeInfoJogosComponent, selectors: [["app-grade-info-jogos"]], inputs: { jogos: "jogos", categories: "categories" }, decls: 2, vars: 1, consts: [[1, "row", "bgc"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "link", 3, "routerLink"], [1, "px-1"], [1, "testando"], ["aria-hidden", "true", 1, "fa", "fa-cart-plus"]], template: function GradeInfoJogosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GradeInfoJogosComponent_div_1_Template, 16, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jogos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _componentes_cartao_cartao_component__WEBPACK_IMPORTED_MODULE_4__["CartaoComponent"]], styles: [".testando[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: hidden;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.bgc[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWRlLWluZm8tam9nb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJncmFkZS1pbmZvLWpvZ29zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdGFuZG8ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJnYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeInfoJogosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-info-jogos',
                templateUrl: './grade-info-jogos.component.html',
                styleUrls: ['./grade-info-jogos.component.css'],
            }]
    }], function () { return [{ type: _jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"] }]; }, { jogos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uYdQ":
/*!**************************************************************!*\
  !*** ./src/app/jogos/detalhe-jogo/detalhe-jogo.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalheJogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheJogoComponent", function() { return DetalheJogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _jogos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jogos.service */ "LLEK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/categories.component */ "FpVo");






function DetalheJogoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Categoria:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-categories", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalheJogoComponent_div_0_Template_i_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.excluir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jogo_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Jogo: ", jogo_r1.gameName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", jogo_r1.category[0]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Estoque: ", jogo_r1.stock, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", jogo_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jogo_r1.description, " ");
} }
class DetalheJogoComponent {
    constructor(jogoService, activatedRoute, router) {
        this.jogoService = jogoService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.jogoId = this.activatedRoute.snapshot.params.jogoId;
        this.jogos = this.jogoService.buscarPorId(this.jogoId);
    }
    excluir() {
        this.jogoService.excluirJogo(this.jogoId).subscribe(() => {
            this.router.navigate(['/jogos/']);
        }, (error) => console.log(error));
    }
}
DetalheJogoComponent.ɵfac = function DetalheJogoComponent_Factory(t) { return new (t || DetalheJogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DetalheJogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalheJogoComponent, selectors: [["app-detalhe-jogo"]], decls: 2, vars: 3, consts: [["class", "fundoTotal border", 4, "ngIf"], [1, "fundoTotal", "border"], [1, "row"], [1, "col-lg-7"], [1, "personalizar-nome"], ["for", "[categoria]", 1, "label-personalizada"], [3, "id"], [1, "personalizar-stock"], [1, "personalizar-price"], [1, "col-lg-3", "personalizar-descri\u00E7\u00E3o"], [1, "text-left", "break-word", "text-center"], [1, "texto-Personalizado"], [1, "fa", "fa-trash-o", "fa-2x", "lixeira", 3, "click"]], template: function DetalheJogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetalheJogoComponent_div_0_Template, 19, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.jogos));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["@font-face {\n  font-family: fontePersonalizada;\n  src: url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.woff2\")\n      format(\"woff2\"),\n    url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.woff\")\n      format(\"woff\"),\n    url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.ttf\")\n      format(\"truetype\"),\n    url(\"//db.onlinewebfonts.com/t/0c1daa5d5bb8782f2128d9c76bcb2f10.svg#CCTreacherousCorners\")\n      format(\"svg\");\n}\n\n.personalizar-nome[_ngcontent-%COMP%] {\n  font-size: 6em;\n  font-family: fontePersonalizada;\n  text-align: center;\n  padding-left: 2rem;\n  color: rgba(228, 0, 0, 0.842);\n}\n\n.personalizar-price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: yellowgreen;\n  margin-top: 3.8rem;\n  margin-left: 3rem;\n}\n\n.personalizar-descri\u00E7\u00E3o[_ngcontent-%COMP%] {\n  background-color: rgb(143, 25, 25);\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 2rem;\n}\n\n.fundoTotal[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.personalizar-categoria[_ngcontent-%COMP%] {\n  color: blueviolet;\n  font-family: \"comic sans MS\";\n  font-size: 3rem;\n  margin-left: 16rem;\n  margin-top: -2rem;\n}\n\n.texto-Personalizado[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-family: arial black;\n}\n\n.label-personalizada[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 6rem;\n  margin-top: 5rem;\n  color: blueviolet;\n}\n\n.personalizar-stock[_ngcontent-%COMP%] {\n  color: rgb(155, 155, 5);\n  overflow: hidden;\n  margin-top: 1rem;\n  margin-left: 30rem;\n  font-size: 2rem;\n}\n\n.lixeira[_ngcontent-%COMP%] {\n  margin-top: 11rem;\n  margin-left: -1.2em;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsaGUtam9nby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLDBFQUEwRTtFQUMxRTs7Ozs7Ozs7O21CQVNpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaIiwiZmlsZSI6ImRldGFsaGUtam9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBmb250ZVBlcnNvbmFsaXphZGE7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8wYzFkYWE1ZDViYjg3ODJmMjEyOGQ5Yzc2YmNiMmYxMC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8wYzFkYWE1ZDViYjg3ODJmMjEyOGQ5Yzc2YmNiMmYxMC5lb3Q/I2llZml4XCIpXG4gICAgICBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzBjMWRhYTVkNWJiODc4MmYyMTI4ZDljNzZiY2IyZjEwLndvZmYyXCIpXG4gICAgICBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzBjMWRhYTVkNWJiODc4MmYyMTI4ZDljNzZiY2IyZjEwLndvZmZcIilcbiAgICAgIGZvcm1hdChcIndvZmZcIiksXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8wYzFkYWE1ZDViYjg3ODJmMjEyOGQ5Yzc2YmNiMmYxMC50dGZcIilcbiAgICAgIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMGMxZGFhNWQ1YmI4NzgyZjIxMjhkOWM3NmJjYjJmMTAuc3ZnI0NDVHJlYWNoZXJvdXNDb3JuZXJzXCIpXG4gICAgICBmb3JtYXQoXCJzdmdcIik7XG59XG5cbi5wZXJzb25hbGl6YXItbm9tZSB7XG4gIGZvbnQtc2l6ZTogNmVtO1xuICBmb250LWZhbWlseTogZm9udGVQZXJzb25hbGl6YWRhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgY29sb3I6IHJnYmEoMjI4LCAwLCAwLCAwLjg0Mik7XG59XG5cbi5wZXJzb25hbGl6YXItcHJpY2Uge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgbWFyZ2luLXRvcDogMy44cmVtO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cblxuLnBlcnNvbmFsaXphci1kZXNjcmnDp8OjbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDI1LCAyNSk7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZnVuZG9Ub3RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ucGVyc29uYWxpemFyLWNhdGVnb3JpYSB7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xuICBmb250LWZhbWlseTogXCJjb21pYyBzYW5zIE1TXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDE2cmVtO1xuICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cblxuLnRleHRvLVBlcnNvbmFsaXphZG8ge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsIGJsYWNrO1xufVxuXG4ubGFiZWwtcGVyc29uYWxpemFkYSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIGNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4ucGVyc29uYWxpemFyLXN0b2NrIHtcbiAgY29sb3I6IHJnYigxNTUsIDE1NSwgNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAzMHJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubGl4ZWlyYSB7XG4gIG1hcmdpbi10b3A6IDExcmVtO1xuICBtYXJnaW4tbGVmdDogLTEuMmVtO1xuICBjb2xvcjogcmVkO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalheJogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalhe-jogo',
                templateUrl: './detalhe-jogo.component.html',
                styleUrls: ['./detalhe-jogo.component.css'],
            }]
    }], function () { return [{ type: _jogos_service__WEBPACK_IMPORTED_MODULE_1__["JogosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=jogos-jogos-module.js.map