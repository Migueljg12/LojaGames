(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(e,o,n){"use strict";n.r(o),n.d(o,"HomeModule",function(){return A});var r=n("PCNd"),t=n("ofXK"),a=n("tyNb"),i=n("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i.Ab({type:e,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"body"],[1,"row"],[1,"col-md-6","mb-2"],["src","assets/img/logo_geracao_games.png","alt","imagem do mario no seu carrinho com a logo loja de games",1,"img-fluid","d-none","d-sm-block"],[1,"col-md-6"]],template:function(e,o){1&e&&(i.Jb(0,"div",0),i.Jb(1,"div",1),i.Jb(2,"div",2),i.Hb(3,"img",3),i.Ib(),i.Jb(4,"div",4),i.Hb(5,"router-outlet"),i.Ib(),i.Ib(),i.Ib())},directives:[a.e],styles:[".body[_ngcontent-%COMP%]{margin-top:1px;margin-left:.1rem;margin-right:.2rem;padding:3rem 2rem 17em;background-color:#000}"]}),e})();var u=n("vkgz"),l=n("AytR"),m=n("tk/3"),c=n("7oKD");const b=l.a.apiURL;let g=(()=>{class e{constructor(e,o){this.http=e,this.usuarioService=o}autenticar(e,o){return this.http.post(b+"/api/auth/signin",{email:e,password:o},{observe:"response"}).pipe(Object(u.a)(e=>{var o;const n=null!==(o=e.body)&&void 0!==o?o:"";this.usuarioService.salvaToken(n)}))}}return e.\u0275fac=function(o){return new(o||e)(i.Nb(m.b),i.Nb(c.a))},e.\u0275prov=i.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("3Pt+"),f=n("E1ld");function d(e,o){1&e&&i.Hb(0,"app-mensagem",12)}function v(e,o){1&e&&i.Hb(0,"app-mensagem",13)}const h=function(){return["novousuario"]};let I=(()=>{class e{constructor(e,o){this.auth=e,this.router=o,this.email="",this.senha=""}ngOnInit(){}login(){this.auth.autenticar(this.email,this.senha).subscribe(()=>{this.router.navigate(["jogos"])},e=>{alert("Usuario ou senha inv\xe1lido"),console.log(e)})}}return e.\u0275fac=function(o){return new(o||e)(i.Gb(g),i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-login"]],decls:18,vars:7,consts:[[1,"text-center","text-danger"],[1,"form","mt-4",3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],["placeholder","Email do usu\xe1rio","name","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["campoEmail","ngModel"],["mensagem","Email obrigat\xf3rio!",4,"ngIf"],["type","password","placeholder","Senha","name","senha","required","",1,"form-control",3,"ngModel","ngModelChange"],["campoSenha","ngModel"],["mensagem","Senha obrigat\xf3ria!",4,"ngIf"],["type","submit",1,"btn","btn-danger","btn-block",3,"disabled"],[3,"routerLink"],["mensagem","Email obrigat\xf3rio!"],["mensagem","Senha obrigat\xf3ria!"]],template:function(e,o){if(1&e&&(i.Jb(0,"h4",0),i.hc(1,"Login"),i.Ib(),i.Jb(2,"form",1,2),i.Qb("ngSubmit",function(){return o.login()}),i.Jb(4,"div",3),i.Jb(5,"input",4,5),i.Qb("ngModelChange",function(e){return o.email=e}),i.Ib(),i.fc(7,d,1,0,"app-mensagem",6),i.Ib(),i.Jb(8,"div",3),i.Jb(9,"input",7,8),i.Qb("ngModelChange",function(e){return o.senha=e}),i.Ib(),i.fc(11,v,1,0,"app-mensagem",9),i.Ib(),i.Jb(12,"button",10),i.hc(13," Login "),i.Ib(),i.Ib(),i.Jb(14,"p"),i.hc(15,"N\xe3o \xe9 um usu\xe1rio?"),i.Jb(16,"a",11),i.hc(17," Se cadastre!"),i.Ib(),i.Ib()),2&e){const e=i.bc(3),n=i.bc(6),r=i.bc(10);i.wb(5),i.Xb("ngModel",o.email),i.wb(2),i.Xb("ngIf",n.invalid&&n.touched),i.wb(2),i.Xb("ngModel",o.senha),i.wb(2),i.Xb("ngIf",r.invalid&&r.touched),i.wb(1),i.Xb("disabled",e.invalid),i.wb(4),i.Xb("routerLink",i.Yb(6,h))}},directives:[p.n,p.g,p.h,p.a,p.l,p.f,p.i,t.k,a.c,f.a],styles:[""]}),e})();function w(e){const o=e.value;return o!==o.toLocaleLowerCase()?{minusculo:!0}:null}function U(e){var o,n,r,t;const a=null!==(n=null===(o=e.get("name"))||void 0===o?void 0:o.value)&&void 0!==n?n:"",i=null!==(t=null===(r=e.get("password"))||void 0===r?void 0:r.value)&&void 0!==t?t:"";return a.trim()+i.trim()?a!==i?null:{senhaIgualUsuario:!0}:null}const J=l.a.apiURL;let x=(()=>{class e{constructor(e){this.http=e}cadastroNovoUsuario(e){return this.http.post(J+"/api/user/create",e)}verificarCpfExiste(e){return this.http.get(`${J}/api/user/exist?cpf=${e}`)}verificarEmailExiste(e){return this.http.get(`${J}/api/user/exist?email=${e}`)}}return e.\u0275fac=function(o){return new(o||e)(i.Nb(m.b))},e.\u0275prov=i.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var E=n("eIep"),C=n("lJxs"),F=n("SxV6");let y=(()=>{class e{constructor(e){this.novoUsuarioService=e}emailJaExiste(){return e=>e.valueChanges.pipe(Object(E.a)(e=>this.novoUsuarioService.verificarEmailExiste(e)),Object(C.a)(e=>(console.log(e),e?{usuarioExistente:!0}:null)),Object(F.a)())}cpfJaExiste(){return e=>e.valueChanges.pipe(Object(E.a)(e=>this.novoUsuarioService.verificarCpfExiste(e)),Object(C.a)(e=>(console.log(e),e?{usuarioExistente:!0}:null)),Object(F.a)())}}return e.\u0275fac=function(o){return new(o||e)(i.Nb(x))},e.\u0275prov=i.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function S(e,o){1&e&&i.Hb(0,"app-mensagem",20)}function X(e,o){1&e&&i.Hb(0,"app-mensagem",21)}function k(e,o){1&e&&i.Hb(0,"app-mensagem",22)}function H(e,o){1&e&&i.Hb(0,"app-mensagem",23)}function N(e,o){1&e&&i.Hb(0,"app-mensagem",24)}function j(e,o){1&e&&i.Hb(0,"app-mensagem",25)}function L(e,o){1&e&&i.Hb(0,"app-mensagem",26)}function M(e,o){1&e&&i.Hb(0,"app-mensagem",27)}function O(e,o){1&e&&i.Hb(0,"app-mensagem",28)}const P=function(){return[""]},G=[{path:"",component:s,children:[{path:"",component:I},{path:"novousuario",component:(()=>{class e{constructor(e,o,n,r){this.formBuilder=e,this.novoUserService=o,this.usuarioExistenteService=n,this.router=r}ngOnInit(){this.novoUsuarioForm=this.formBuilder.group({name:["",[p.m.required,p.m.minLength(4),w]],cpf:["",[p.m.minLength(11),p.m.maxLength(11),p.m.required],this.usuarioExistenteService.cpfJaExiste()],email:["",[p.m.required,p.m.email],this.usuarioExistenteService.emailJaExiste()],password:[""]},{validators:[U]})}cadastrar(){if(this.novoUsuarioForm.valid){const e=this.novoUsuarioForm.getRawValue();this.novoUserService.cadastroNovoUsuario(e).subscribe(()=>{this.router.navigate([""])},e=>console.log(e))}}}return e.\u0275fac=function(o){return new(o||e)(i.Gb(p.b),i.Gb(x),i.Gb(y),i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-novo-usuario"]],decls:27,vars:12,consts:[[1,"body"],[1,"text-center","text-danger"],[3,"formGroup","submit"],[1,"form-group"],["placeholder","email","formControlName","email",1,"form-control"],["mensagem","Email obrigat\xf3rio",4,"ngIf"],["mensagem","Email no formato incorreto.",4,"ngIf"],["mensagem","Email j\xe1 existe",4,"ngIf"],["placeholder","Nome","formControlName","name",1,"form-control"],["mensagem","Nome Incorreto.",4,"ngIf"],["mensagem","Nome deve ser minusculo!",4,"ngIf"],["placeholder","CPF","formControlName","cpf",1,"form-control"],["mensagem","Cpf deve conter 11 digitos.",4,"ngIf"],["mensagem","CPF obrigat\xf3rio",4,"ngIf"],["mensagem","CPF j\xe1 existe",4,"ngIf"],["placeholder","Senha","type","password","formControlName","password",1,"form-control"],["mensagem","Senha n\xe3o pode ser igual ao nome",4,"ngIf"],[1,"btn","btn-danger","btn-block"],[1,"text-light"],[3,"routerLink"],["mensagem","Email obrigat\xf3rio"],["mensagem","Email no formato incorreto."],["mensagem","Email j\xe1 existe"],["mensagem","Nome Incorreto."],["mensagem","Nome deve ser minusculo!"],["mensagem","Cpf deve conter 11 digitos."],["mensagem","CPF obrigat\xf3rio"],["mensagem","CPF j\xe1 existe"],["mensagem","Senha n\xe3o pode ser igual ao nome"]],template:function(e,o){if(1&e&&(i.Jb(0,"div",0),i.Jb(1,"h4",1),i.hc(2,"Cadastre-se e compre nossos jogos!"),i.Ib(),i.Jb(3,"form",2),i.Qb("submit",function(){return o.cadastrar()}),i.Jb(4,"div",3),i.Hb(5,"input",4),i.fc(6,S,1,0,"app-mensagem",5),i.fc(7,X,1,0,"app-mensagem",6),i.fc(8,k,1,0,"app-mensagem",7),i.Ib(),i.Jb(9,"div",3),i.Hb(10,"input",8),i.fc(11,H,1,0,"app-mensagem",9),i.fc(12,N,1,0,"app-mensagem",10),i.Ib(),i.Jb(13,"div",3),i.Hb(14,"input",11),i.fc(15,j,1,0,"app-mensagem",12),i.fc(16,L,1,0,"app-mensagem",13),i.fc(17,M,1,0,"app-mensagem",14),i.Ib(),i.Jb(18,"div",3),i.Hb(19,"input",15),i.fc(20,O,1,0,"app-mensagem",16),i.Ib(),i.Jb(21,"button",17),i.hc(22,"Cadastro"),i.Ib(),i.Ib(),i.Jb(23,"p",18),i.hc(24," J\xe1 \xe9 um usu\xe1rio? "),i.Jb(25,"a",19),i.hc(26," Fa\xe7a login!"),i.Ib(),i.Ib(),i.Ib()),2&e){let e=null,n=null,r=null,t=null,a=null,s=null,u=null,l=null;i.wb(3),i.Xb("formGroup",o.novoUsuarioForm),i.wb(3),i.Xb("ngIf",(null==(e=o.novoUsuarioForm.get("email"))||null==e.errors?null:e.errors.required)&&(null==(e=o.novoUsuarioForm.get("email"))?null:e.touched)),i.wb(1),i.Xb("ngIf",(null==(n=o.novoUsuarioForm.get("email"))||null==n.errors?null:n.errors.email)&&(null==(n=o.novoUsuarioForm.get("email"))?null:n.touched)),i.wb(1),i.Xb("ngIf",null==(r=o.novoUsuarioForm.get("email"))||null==r.errors?null:r.errors.usuarioExistente),i.wb(3),i.Xb("ngIf",(null==(t=o.novoUsuarioForm.get("name"))?null:t.errors)&&(null==(t=o.novoUsuarioForm.get("name"))?null:t.touched)),i.wb(1),i.Xb("ngIf",(null==(a=o.novoUsuarioForm.get("name"))||null==a.errors?null:a.errors.minusculo)&&(null==(a=o.novoUsuarioForm.get("name"))?null:a.touched)),i.wb(3),i.Xb("ngIf",(null==(s=o.novoUsuarioForm.get("cpf"))?null:s.errors)&&(null==(s=o.novoUsuarioForm.get("cpf"))?null:s.touched)),i.wb(1),i.Xb("ngIf",(null==(u=o.novoUsuarioForm.get("cpf"))||null==u.errors?null:u.errors.required)&&(null==(u=o.novoUsuarioForm.get("cpf"))?null:u.touched)),i.wb(1),i.Xb("ngIf",null==(l=o.novoUsuarioForm.get("cpf"))||null==l.errors?null:l.errors.usuarioExistente),i.wb(3),i.Xb("ngIf",null==o.novoUsuarioForm.errors?null:o.novoUsuarioForm.errors.senhaIgualUsuario),i.wb(5),i.Xb("routerLink",i.Yb(11,P))}},directives:[p.n,p.g,p.d,p.a,p.f,p.c,t.k,a.c,f.a],styles:[".body[_ngcontent-%COMP%]{margin-bottom:-5.78rem}"]}),e})()}]}];let q=(()=>{class e{}return e.\u0275mod=i.Eb({type:e}),e.\u0275inj=i.Db({factory:function(o){return new(o||e)},imports:[[a.d.forChild(G)],a.d]}),e})(),A=(()=>{class e{}return e.\u0275mod=i.Eb({type:e}),e.\u0275inj=i.Db({factory:function(o){return new(o||e)},imports:[[t.c,q,p.e,r.a]]}),e})()}}]);