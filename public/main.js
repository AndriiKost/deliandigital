(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/projects.ts":
/*!*********************************!*\
  !*** ./src/app/api/projects.ts ***!
  \*********************************/
/*! exports provided: logos, ProjectsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logos", function() { return logos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsAPI", function() { return ProjectsAPI; });
var logos = {
    wordpress: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/wordpress-logo-notext-rgb.png',
    react: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/React.js_logo.png',
    redux: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Redux-logo.png',
    node: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Node-logo.png',
    aws: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/aws-logo.png',
    angular: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/angular.png',
    firebase: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Firebase-logo.png',
    mongoDB: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/mongo-db-logo.png',
    express: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/express-logo.png',
    heroku: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/heroku-logo.png',
    html: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/HTML_Logo.png',
    css: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/CSS3_logo_and_wordmark.svg.png',
    js: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/Badge_js-strict.svg.png',
    php: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/php_PNG23.png',
    auth0: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/auth0-logo-png-transparent.png'
};
var ProjectsAPI = {
    projects: [
        {
            id: 11,
            link: "https://taggingthemascot.herokuapp.com/",
            name: "Tagging The Mascot",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/tagging-the-mascot.png',
            freeHosting: true,
            description: 'Tagging the Mascot was an augmented reality geotagging event. There were 85 real world objects all around the Madison area, and you as a participant team needed to be within 40 feet to each of them in order to check in and cross over an object. Who ever tag all 85 objects wins.',
            role: 'My role was to build an application what will allow participants to use their phones as a interactive map with all markers, compass, guideline, check real time leaderboards, checklist, account management, state management and security.',
            type: 'Full Stack',
            technologiesUsed: [
                {
                    text: 'React.js',
                    icon: logos.react
                },
                {
                    text: 'Redux',
                    icon: logos.redux
                },
                {
                    text: 'Firebase',
                    icon: logos.firebase
                },
                {
                    text: 'Node.js',
                    icon: logos.node
                },
                {
                    text: 'AWS',
                    icon: logos.aws
                },
                {
                    text: 'Heroku',
                    icon: logos.heroku
                }
            ]
        },
        {
            id: 1,
            link: "http://unitedstatestaxservices.us/",
            name: "United States Tax Services",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/usts.png',
            description: 'United States Tax Services (USTS) is a company located in Buffalo Grove, IL. The company provide a broad range of services such as: accounting, public notary, tax calculation, incorporation etc.',
            role: 'My role was to completely redesign and built brand new website with brand new branding. USTS has onboard marketing eecutive who helped me during the proccess. I choose WordPress, because the company wants to drive organic traffic from social media by posting blog posts. Another reason was that WordPress is easy to maintain and edit.',
            type: 'Full Stack',
            technologiesUsed: [
                {
                    text: 'WordPress',
                    icon: logos.wordpress
                },
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
        {
            id: 2,
            link: "https://spoofingwilly.com/",
            name: "Spoofing Willy Street",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/spoofingwilly-head.png',
            description: 'Spoofing Willy Street is marketing consultancy company in Madison, WI. Spoofing Willy provide proffesional services like social media strategy, website development, photography, content creation etc.',
            role: 'My role, as Director of Technology was to redesign and improve performance of existing website. Create interactive wireframes, prototypes, develop web and mobile applications, develop websites, technical support for clients. Innovation of internal and external infrastracture of the company. Automation of tasks. For this website I choose WordPress, because marketing director has experience with it, and the website is news/blog platform.',
            type: 'Full Stack',
            technologiesUsed: [
                {
                    text: 'WordPress',
                    icon: logos.wordpress
                },
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
        {
            id: 3,
            link: "http://www.perkinsproperties.us/",
            name: "Perkins Properties",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/pekrins-head.png',
            description: 'Perkins Properties is a commercial real estate investment agency with offices in MidWest.',
            role: 'Develop WordPress website based on provided design (PSD files) and prototype.',
            type: 'Front End',
            technologiesUsed: [
                {
                    text: 'WordPress',
                    icon: logos.wordpress
                },
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
        {
            id: 5,
            link: "http://badgerblinds.com/",
            name: "Badger Blinds",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/badgerblinds-head.png',
            description: 'Home Improvement company in Madison area. Badger Blinds and Shades install and sell blinds and shades.',
            role: 'My role at this project was to build a brouchure, information based website from scratch. I have choose WordPress, because client wanted to post blogs and have a posibility to update website without third party.',
            type: 'Front End',
            technologiesUsed: [
                {
                    text: 'WordPress',
                    icon: logos.wordpress
                },
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
        {
            id: 6,
            link: "https://kunzeanalytics.com/",
            name: "Kunze Analytics  ",
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/kunze-head.png',
            description: 'Kunze Analytics is HR company what uses AI to build models for big corporations.',
            role: 'Build B2B website with Blog integration.',
            type: 'Full Stack',
            technologiesUsed: [
                {
                    text: 'WordPress',
                    icon: logos.wordpress
                },
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
        {
            id: 8,
            link: "http://www.klaritos.com/",
            name: "Klaritos Inc",
            description: 'KLĀRITOS is a novel managed-care company specializing in precision medicine.',
            role: 'Build minimalistic info based website for med-tech startup.',
            type: 'Front End',
            image: 'https://s3.amazonaws.com/project-pictures-andriikost-portfolio/klaritos-head.png',
            technologiesUsed: [
                {
                    text: 'HTML5',
                    icon: logos.html
                },
                {
                    text: 'CSS3',
                    icon: logos.css
                },
                {
                    text: 'JavaScript',
                    icon: logos.js
                },
                {
                    text: 'PHP',
                    icon: logos.php
                }
            ]
        },
    ],
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ "./src/app/components/testimonials/testimonials.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_approach_approach_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/approach/approach.component */ "./src/app/components/approach/approach.component.ts");
/* harmony import */ var _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/technology/technology.component */ "./src/app/components/technology/technology.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/call-to-action/call-to-action.component */ "./src/app/components/call-to-action/call-to-action.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/case-study/case-study.component */ "./src/app/components/case-study/case-study.component.ts");
/* harmony import */ var _components_estimate_estimate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/estimate/estimate.component */ "./src/app/components/estimate/estimate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';




// import { AuthService } from './services/auth.service';
// import { AuthGuard } from './guards/auth.guard';












var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    // { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
        // , canActivate: [AuthGuard]
    },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
        // , canActivate: [AuthGuard]
    },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'estimate', component: _components_estimate_estimate_component__WEBPACK_IMPORTED_MODULE_21__["EstimateComponent"] },
    { path: 'work', component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"] },
    { path: 'work/:id', component: _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_20__["CaseStudyComponent"] },
    { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"] },
    { path: 'register', redirectTo: 'login' },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                // LoginComponent,
                // RegisterComponent,
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _components_work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
                _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_11__["TestimonialsComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _components_approach_approach_component__WEBPACK_IMPORTED_MODULE_13__["ApproachComponent"],
                _components_technology_technology_component__WEBPACK_IMPORTED_MODULE_14__["TechnologyComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _components_call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_18__["CallToActionComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"],
                _components_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_20__["CaseStudyComponent"],
                _components_estimate_estimate_component__WEBPACK_IMPORTED_MODULE_21__["EstimateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_9__["ValidateService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".light-section {\n  height: 100%;\n  background-color: rgb(255, 255, 255);\n}\n.__headline:after {\n  position: absolute;\n  margin-top: 1em;\n  content: \"\";\n  width: 60px;\n  height: 5px;\n  background-color: rgb(0, 0, 0);\n}\n.__headline {\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n}\n.__headline h1 {\n  color: #000;\n  font-weight: bolder;\n}\n.content {\n  padding-top: 3em;\n  font-size: 1.2em;\n  letter-spacing: .03em;\n}\n.light-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.left-content {\n  padding: 8em 3em;\n}\n.right-content img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlnaHQtc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLl9faGVhZGxpbmU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG4uX19oZWFkbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbn1cbi5fX2hlYWRsaW5lIGgxIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMDNlbTtcbn1cbi5saWdodC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuLmxlZnQtY29udGVudCB7XG4gIHBhZGRpbmc6IDhlbSAzZW07XG59XG4ucmlnaHQtY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"light-section\">\n  <div class=\"left-content\">\n    <div class=\"section-header __headline\">\n      <h1>About</h1>\n    </div>\n    <div class=\"content\">\n        <p>Delian Digital is a brand that emerged from combining the power and best qualities.</p>\n        <p>We draw our strength from the creativity and experience of our talented professionals and the foolproof processes that guide our collaborative product design and development practice.</p>\n    </div>\n  </div>\n  <div class=\"right-content\">\n    <img src=\"https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/approach/approach.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/approach/approach.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwcm9hY2gvYXBwcm9hY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/approach/approach.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/approach/approach.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  approach works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/approach/approach.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/approach/approach.component.ts ***!
  \***********************************************************/
/*! exports provided: ApproachComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproachComponent", function() { return ApproachComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApproachComponent = /** @class */ (function () {
    function ApproachComponent() {
    }
    ApproachComponent.prototype.ngOnInit = function () {
    };
    ApproachComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approach',
            template: __webpack_require__(/*! ./approach.component.html */ "./src/app/components/approach/approach.component.html"),
            styles: [__webpack_require__(/*! ./approach.component.css */ "./src/app/components/approach/approach.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApproachComponent);
    return ApproachComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-section {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  margin-top: 5em;\n  padding: 5em 7em;\n}\n.post-image img {\n  height: 350px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.post-header h1 {\n  font-weight: bolder;\n  padding-top: 10px;\n}\n.author-info {\n  display: flex;\n}\n.author-info img {\n  height: 60px;\n  border-radius: 50%;\n}\n.author-info p {\n  margin: 0;\n  padding: 0;\n}\n.name-and-date {\n  margin-left: 15px;\n}\n.name-and-date .date {\n  color: rgb(80, 80, 80);\n}\n.post-content {\n  padding-top: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgcGFkZGluZzogNWVtIDdlbTtcbn1cbi5wb3N0LWltYWdlIGltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wb3N0LWhlYWRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmF1dGhvci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hdXRob3ItaW5mbyBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hdXRob3ItaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm5hbWUtYW5kLWRhdGUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5uYW1lLWFuZC1kYXRlIC5kYXRlIHtcbiAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcbn1cbi5wb3N0LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"blog\" class=\"white-section\">\n  <div class=\"left-blog-column\">\n    <div class=\"post-container\">\n      <div class=\"post-image\">\n        <!-- <img src=\"https://images.unsplash.com/photo-1473073899705-e7b1055a7419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80\" /> -->\n      </div>\n      <div class=\"post-header\">\n        <!-- <h1>The Power of Not Retweeting</h1> -->\n        <!-- <p>I was outraged by a tweet. I didn’t share it.</p> -->\n        <div class=\"author-info\">\n          <!-- <img src=\"https://media.licdn.com/dms/image/C5603AQG_GxHAtaBQUg/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=7H6vzjUQ1YT6lRR0kmMm7eK8YgxAixYO_yeqpWRmRoI\" /> -->\n          <div class=\"name-and-date\">\n            <!-- <p>Andrii Kost</p> -->\n            <!-- <p class=\"date\">Jan 30, 2019</p> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"post-content\">\n        <h1>Coming Soon ...</h1>\n      </div>\n    </div>\n  </div>\n  <div class=\"right-column\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/call-to-action/call-to-action.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/call-to-action/call-to-action.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cta-yellow {\n  margin-top: 5em;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n}\n.cta-right {\n  background-color: rgb(240, 212, 60);\n  padding: 2em;\n}\n.cta-link {\n  font-weight: bold;\n  color: #000;\n}\n.cta-link:hover {\n  text-decoration: none;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN0YS15ZWxsb3cge1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS42ZnI7XG59XG4uY3RhLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEyLCA2MCk7XG4gIHBhZGRpbmc6IDJlbTtcbn1cbi5jdGEtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jdGEtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/call-to-action/call-to-action.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/call-to-action/call-to-action.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cta-yellow\">\n    <div class=\"cta-left\"></div>\n    <div class=\"cta-right\">\n      <h3>We'd love to help with your product. <a class=\"cta-link\" [routerLink]=\"['/contact']\" >Let’s talk</a></h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/call-to-action/call-to-action.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/call-to-action/call-to-action.component.ts ***!
  \***********************************************************************/
/*! exports provided: CallToActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionComponent", function() { return CallToActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallToActionComponent = /** @class */ (function () {
    function CallToActionComponent() {
    }
    CallToActionComponent.prototype.ngOnInit = function () {
    };
    CallToActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-to-action',
            template: __webpack_require__(/*! ./call-to-action.component.html */ "./src/app/components/call-to-action/call-to-action.component.html"),
            styles: [__webpack_require__(/*! ./call-to-action.component.css */ "./src/app/components/call-to-action/call-to-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallToActionComponent);
    return CallToActionComponent;
}());



/***/ }),

/***/ "./src/app/components/case-study/case-study.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/case-study/case-study.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-section {\n  padding: 10em 14em 5em 14em;\n}\n.white-section h6 {\n  color: rgb(243, 117, 119);\n  font-weight: bolder;\n}\n.white-section p {\n  padding-top: 2em;\n  line-height: 2em;\n  letter-spacing: .05em;\n}\n.white-section h1 {\n  font-weight: bolder;\n  letter-spacing: .025em;\n  line-height: 1.8em;\n}\n.head-image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.back {\n  color: #fff;\n  background-color: #000;\n  width: 5em;\n  padding: 1em;\n  margin-left: 14em;\n}\n.back:hover {\n  cursor: pointer;\n}\n/* MAIN CONTENT */\n.content-section-white {\ndisplay: grid;\ngrid-template-columns: 1fr 3fr 1fr;\npadding: 2em 3em;\n}\n.btn-action {\n  color: #000;\n  border: 2px solid #000;\n  background: rgb(240, 212, 60);\n  padding: .6em;\n  box-shadow: -4px 4px 0 0 #000;\n  font-weight: bold;\n  letter-spacing: .05em;\n}\n.btn-action:hover{\n  cursor: pointer;\n}\n.btn-action:focus {\n  outline: none;\n}\n.sidebar p {\n  font-weight: bold;\n}\n.sidebar {\n  padding: 0 2em;\n}\n.sidebar hr {\n  background-color: rgb(145, 145, 145);\n}\n.author-info {\n  /* margin-top: 2em; */\n  text-align: center;\n}\n.author-info .author-img {\n  width: 65px;\n  margin: 0 auto;\n}\n.author-info img {\n  height: 65px;\n  border-radius: 50%;\n}\n.author-info p {\n  margin: 0;\n  padding: 0;\n}\n.name-and-date .date {\n  color: rgb(80, 80, 80);\n  font-size: 0.8em;\n}\n.main-content p {\n  line-height: 2em;\n  letter-spacing: .025em;\n}\n.main-content p:nth-child(odd) {\n  font-weight: bolder;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\n.tech-spec {\n  padding: 1em 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  text-align: center;\n}\n.tech-spec li p {\n  margin: 0;\n  padding: 0;\n}\n.tech-spec li {\n  padding: .2em;\n}\n.tech-spec img {\n  width: auto;\n  height: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXNlLXN0dWR5L2Nhc2Utc3R1ZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhc2Utc3R1ZHkvY2FzZS1zdHVkeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMGVtIDE0ZW0gNWVtIDE0ZW07XG59XG4ud2hpdGUtc2VjdGlvbiBoNiB7XG4gIGNvbG9yOiByZ2IoMjQzLCAxMTcsIDExOSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ud2hpdGUtc2VjdGlvbiBwIHtcbiAgcGFkZGluZy10b3A6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xufVxuLndoaXRlLXNlY3Rpb24gaDEge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogLjAyNWVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG4uaGVhZC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5iYWNrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHdpZHRoOiA1ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IDE0ZW07XG59XG4uYmFjazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTUFJTiBDT05URU5UICovXG4uY29udGVudC1zZWN0aW9uLXdoaXRlIHtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xucGFkZGluZzogMmVtIDNlbTtcbn1cbi5idG4tYWN0aW9uIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6IHJnYigyNDAsIDIxMiwgNjApO1xuICBwYWRkaW5nOiAuNmVtO1xuICBib3gtc2hhZG93OiAtNHB4IDRweCAwIDAgIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbn1cbi5idG4tYWN0aW9uOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLWFjdGlvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZWJhciBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2lkZWJhciB7XG4gIHBhZGRpbmc6IDAgMmVtO1xufVxuLnNpZGViYXIgaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG59XG4uYXV0aG9yLWluZm8ge1xuICAvKiBtYXJnaW4tdG9wOiAyZW07ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdXRob3ItaW5mbyAuYXV0aG9yLWltZyB7XG4gIHdpZHRoOiA2NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5hdXRob3ItaW5mbyBpbWcge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hdXRob3ItaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm5hbWUtYW5kLWRhdGUgLmRhdGUge1xuICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLm1haW4tY29udGVudCBwIHtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMjVlbTtcbn1cbi5tYWluLWNvbnRlbnQgcDpudGgtY2hpbGQob2RkKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi50ZWNoLXNwZWMge1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRlY2gtc3BlYyBsaSBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnRlY2gtc3BlYyBsaSB7XG4gIHBhZGRpbmc6IC4yZW07XG59XG4udGVjaC1zcGVjIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/case-study/case-study.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/case-study/case-study.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"white-section\">\n  <h6>CASE STUDY</h6>\n  <h1>{{project.name}}</h1>\n  <p>{{project.description}}</p>\n</div>\n<div class=\"back\" (click)=\"toCaseStudies()\">\n  Back\n</div>\n<div class=\"head-image\">\n  <img src={{project.image}} />\n</div>\n\n<div class=\"content-section-white\">\n  <div class=\"author-info\">\n    <div class=\"author-img\"><img src=\"https://media.licdn.com/dms/image/C5603AQG_GxHAtaBQUg/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=7H6vzjUQ1YT6lRR0kmMm7eK8YgxAixYO_yeqpWRmRoI\" /> </div>\n    <div class=\"name-and-date\">\n      <p>Andrii Kost</p>\n      <p class=\"date\">Full Stack Developer</p>\n    </div>\n  </div>\n  <div class=\"main-content\">\n    <!-- <p>Setting the scene: one year to dominate 27 markets worldwide</p>\n    <p>When BlaBlaCar approached Boldare, they were at a stage of rapid growth with around 24 million users already buzzing about their excellent carpooling platform. But the visionaries at BlaBlaCar understood that the competition never sleeps. Other tech startups around the world were quickly entering the race for a piece of the carpooling pie. BlaBlaCar’s traction was impressive on their home turf in France and they wanted to expand quickly into 27 markets around the world, ensuring their competitive advantage over other travel and carpooling app contenders. They had just over a year to succeed by establishing themselves as the leading and most trustworthy platform.</p>\n    <p>Setting the scene: one year to dominate 27 markets worldwide</p>\n    <p>When BlaBlaCar approached Boldare, they were at a stage of rapid growth with around 24 million users already buzzing about their excellent carpooling platform. But the visionaries at BlaBlaCar understood that the competition never sleeps. Other tech startups around the world were quickly entering the race for a piece of the carpooling pie. BlaBlaCar’s traction was impressive on their home turf in France and they wanted to expand quickly into 27 markets around the world, ensuring their competitive advantage over other travel and carpooling app contenders. They had just over a year to succeed by establishing themselves as the leading and most trustworthy platform.</p> -->\n    <ul class=\"tech-spec\">\n      <li *ngFor=\"let tech of project.technologiesUsed\">\n          <img src={{tech.icon}} />\n          <p>{{tech.text}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"sidebar\">\n    <hr>\n    <p>Let's talk about<br>\n      your business</p>\n      <button [routerLink]=\"['/contact']\" class=\"btn-action\">Contact</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/case-study/case-study.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/case-study/case-study.component.ts ***!
  \***************************************************************/
/*! exports provided: CaseStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function() { return CaseStudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaseStudyComponent = /** @class */ (function () {
    function CaseStudyComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
    }
    CaseStudyComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.project = this.projectService.getPorject(id);
    };
    CaseStudyComponent.prototype.toCaseStudies = function () {
        this.router.navigate(['/work']);
    };
    CaseStudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-case-study',
            template: __webpack_require__(/*! ./case-study.component.html */ "./src/app/components/case-study/case-study.component.html"),
            styles: [__webpack_require__(/*! ./case-study.component.css */ "./src/app/components/case-study/case-study.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], CaseStudyComponent);
    return CaseStudyComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-section {\n  margin-top: 8em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background: rgb(240, 212, 60);\n}\n.left-contact-intro .content {\n  padding: 0 3em 2em 3em;\n}\n.transition-block {\n  background-color: rgb(36, 36, 36);\n  height: 40px;\n}\n.right-contact-intro img {\n  width: 100%;\n  /* margin-top: -3em; */\n}\n.white-container {\n  background-color: #fff;\n  padding: 2em 3em 0 3em;\n}\nh1 {\n  font-size: 3.8em;\n  font-weight: bolder;\n  letter-spacing: .05em;\n}\n.__headline:after {\n  position: absolute;\n  margin-top: 1em;\n  content: \"\";\n  width: 60px;\n  height: 5px;\n  background-color: rgb(65, 64, 64);\n}\n.__headline {\n  padding-bottom: 3em;\n}\n.btn-action {\n  color: #000;\n  border: 2px solid #000;\n  background: rgb(240, 212, 60);\n  padding: .6em;\n  box-shadow: -4px 4px 0 0 #000;\n  font-weight: bold;\n  letter-spacing: .05em;\n}\n.btn-action:hover{\n  cursor: pointer;\n}\n.btn-action:focus {\n  outline: none;\n}\n.contact-container {\n  margin-top: 3em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: #fff;\n  color: #000;\n}\n.btn-action-white {\n  color: #000;\n  border: 2px solid #000;\n  background: #fff;\n  padding: .6em;\n  box-shadow: -4px 4px 0 0 #000;\n  font-weight: bold;\n  letter-spacing: .05em;\n}\n.btn-action-white:hover{\n  cursor: pointer;\n}\n.btn-action-white:focus {\n  outline: none;\n}\n.contact-container {\n  padding: 4em 3em;\n}\n.contact-form-full-width {\n  display: flex;\n  flex-direction: row;\n}\n.contact-form-full-width input:first-child {\n  margin-right: 15px;\n}\n.message textarea {\n  margin-top: 15px;\n  height: 10em;\n  resize: none;\n}\nform {\n  padding-top: 3em;\n}\nform input {\n  color: #000;\n}\n.form-control {\n  border: 2px solid #000;\n  border-radius: 0px;\n}\nform .message {\n  padding-bottom: 2em;\n}\nform .message input {\n  height: 40px;\n}\n.contact-info {\n  list-style: none;\n  padding: 1em 0 0 0;\n  margin: 0;\n}\n.contact-info li {\n  padding-top: 1em;\n  font-size: 1.2em;\n}\n.contact-info li a {\n  font-weight: bold;\n  text-decoration: none;\n  color: #000;\n  font-size: 1.4em;\n}\n.__headline h2 {\n  font-size: 3em;\n  letter-spacing: .05em;\n  font-weight: bolder;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDhlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyMTIsIDYwKTtcbn1cbi5sZWZ0LWNvbnRhY3QtaW50cm8gLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDNlbSAyZW0gM2VtO1xufVxuLnRyYW5zaXRpb24tYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGhlaWdodDogNDBweDtcbn1cbi5yaWdodC1jb250YWN0LWludHJvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW4tdG9wOiAtM2VtOyAqL1xufVxuLndoaXRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJlbSAzZW0gMCAzZW07XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMy44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbn1cbi5fX2hlYWRsaW5lOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2NCwgNjQpO1xufVxuLl9faGVhZGxpbmUge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xufVxuLmJ0bi1hY3Rpb24ge1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjEyLCA2MCk7XG4gIHBhZGRpbmc6IC42ZW07XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDAgMCAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xufVxuLmJ0bi1hY3Rpb246aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tYWN0aW9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5idG4tYWN0aW9uLXdoaXRlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IC42ZW07XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDAgMCAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xufVxuLmJ0bi1hY3Rpb24td2hpdGU6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tYWN0aW9uLXdoaXRlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDRlbSAzZW07XG59XG4uY29udGFjdC1mb3JtLWZ1bGwtd2lkdGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNvbnRhY3QtZm9ybS1mdWxsLXdpZHRoIGlucHV0OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm1lc3NhZ2UgdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDEwZW07XG4gIHJlc2l6ZTogbm9uZTtcbn1cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogM2VtO1xufVxuZm9ybSBpbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmZvcm0gLm1lc3NhZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xufVxuZm9ybSAubWVzc2FnZSBpbnB1dCB7XG4gIGhlaWdodDogNDBweDtcbn1cbi5jb250YWN0LWluZm8ge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxZW0gMCAwIDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250YWN0LWluZm8gbGkge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmNvbnRhY3QtaW5mbyBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4uX19oZWFkbGluZSBoMiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-section\">\n  <div class=\"left-contact-intro\">\n    <div class=\"white-container\">\n      <h1>Connect</h1>\n    </div>\n    <div class=\"content\">\n      <div class=\"__headline\">\n        <h1>with Our Circle</h1>\n      </div>\n      <p>We are digital thinkers who build products for you. We draw our strength from self-development, exchanging ideas and giving back to the community. Experience our culture and get to know our people.</p>\n      <p>Pick a place where you feel comfortable or just contact one of our Customer Success Guides straight away.</p>\n      <button class=\"btn-action\" [routerLink]=\"['/estimate']\">Request Estimate</button>\n    </div>\n  </div>\n\n  <div class=\"right-contact-intro\">\n    <img src=\"https://images.unsplash.com/photo-1531901783755-825e82c0d762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1662&q=80\" />\n  </div>\n</div>\n\n<div class=\"contact-container\">\n  <div class=\"left-contact-form\">\n  <div class=\"__headline\">\n    <h2>Let's talk</h2>\n  </div>\n    <ul class=\"contact-info\">\n      <li class=\"padding-top\">Phone\n        <p>\n          <a href=\"tel:3148854259\">+1 314 885 4259</a>\n        </p>\n      </li>\n      <li class=\"padding-top\">Got a digital product to discuss?\n          <p>\n              <a href=\"mailto:a.kost@deliandigital.com\">a.kost@deliandigital.com</a>\n          </p>\n        </li>\n    </ul>\n  </div>\n  <div class=\"right-contact-intro\">\n    <div class=\"contact-head\">\n      <h2>Do you want to build a product, hire a developer or simply have a question? Leave us a message.</h2>\n    </div>\n      <!-- <form (submit)=\"onContactSubmit()\">\n        <div class=\"contact-form-full-width\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Name\" name=\"username\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email\" name=\"email\">\n        </div>\n        <div class=\"message\">\n          <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"message\" placeholder=\"How can we help you?\" name=\"message\"></textarea>\n        </div>\n        <input type=\"submit\" class=\"btn-action-white\" value=\"Send Message\">\n      </form> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onContactSubmit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/estimate/estimate.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/estimate/estimate.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  background: transparent;\n}\n.estimate-fade {\n  position: relative;\n  margin: 10% 0 10% 25%;\n  background-color: white;\n}\n.close-modal {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-weight: bolder;\n}\n.close-modal:hover{\n  cursor: pointer;\n}\n.close-modal:focus {\n  outline: none;\n}\n.post-content {\n  margin: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3RpbWF0ZS9lc3RpbWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXN0aW1hdGUvZXN0aW1hdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5lc3RpbWF0ZS1mYWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwJSAwIDEwJSAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsb3NlLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNsb3NlLW1vZGFsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2xvc2UtbW9kYWw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBvc3QtY29udGVudCB7XG4gIG1hcmdpbjogMTAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/estimate/estimate.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/estimate/estimate.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"estimate-fade\">\n  <div class=\"estimate-title\">\n    <h3>Get your estimate in less then 5 minutes!</h3>\n    <div class=\"close-modal\" [routerLink]=\"['/']\">Back</div>\n  </div>\n  <div class=\"estimate-body\">\n    <!-- <p>One option with some description</p>\n    <p>Second option with some description</p>\n    <p>Third option with some description</p>\n    <p>Fourth option with some description</p> -->\n    <h1 class=\"post-content\">Coming Soon ...</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/estimate/estimate.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/estimate/estimate.component.ts ***!
  \***********************************************************/
/*! exports provided: EstimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateComponent", function() { return EstimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstimateComponent = /** @class */ (function () {
    function EstimateComponent() {
    }
    EstimateComponent.prototype.ngOnInit = function () {
    };
    EstimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estimate',
            template: __webpack_require__(/*! ./estimate.component.html */ "./src/app/components/estimate/estimate.component.html"),
            styles: [__webpack_require__(/*! ./estimate.component.css */ "./src/app/components/estimate/estimate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EstimateComponent);
    return EstimateComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  height: 100%;\n  background-color: rgb(36, 36, 36);\n  color: #fff;\n  padding: 2em 2em 0 2em;\n}\nhr {\n  background-color: rgb(57, 57,57);\n  height: 1px;\n}\n.footer-copy {\n  text-align: right;\n  font-size: .8em;\n  color: rgb(212, 212, 212);\n}\na {\n  color: #fff;\n}\na:hover {\n  text-decoration: none;\n  color: yellow;\n}\n.footer-content {\n  padding: 1em 0;\n}\n.logo-icon {\n  height: 50px;\n  margin-bottom: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDJlbSAyZW0gMCAyZW07XG59XG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNTcsNTcpO1xuICBoZWlnaHQ6IDFweDtcbn1cbi5mb290ZXItY29weSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IC44ZW07XG4gIGNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XG59XG5hIHtcbiAgY29sb3I6ICNmZmY7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogeWVsbG93O1xufVxuLmZvb3Rlci1jb250ZW50IHtcbiAgcGFkZGluZzogMWVtIDA7XG59XG4ubG9nby1pY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"footer-content\">\n    <div class=\"left-description\">\n      <img class=\"logo-icon\" src={{iconLogoUrl}} />\n      <h4>The digital product design & development<br>\n          company. Contact us: <a href=\"mailto:hello@deliandigital.com\">hello@deliandigital.com</a></h4>\n    </div>\n    <div class=\"right-description\">\n    </div>\n  </div>\n  <hr>\n  <p class=\"footer-copy\">© 2019 Delian Digital. All rights reserved.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.iconLogoUrl = 'assets/Delian-Digital--ICON-W.png';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  /* position: absolute; */\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: rgb(36, 36, 36);\n  height: 20em;\n  padding-top: 4em;\n}\n.left, .right {\n  color: #fff;\n  letter-spacing: .025em;\n  font-weight: 400;\n  line-height: 2em;\n}\n.intro {\n  padding: 5em 3em 3em 3em;\n}\n.left {\n  float: left;\n  font-size: 1.1em;\n}\n.right {\n  float: right;\n  max-width: 300px;\n  font-size: .9em;\n}\n.right a {\n  color: #fff;\n}\n.right a:hover {\n  text-decoration: none;\n  color: yellow;\n}\n.slide-section {\n  color: rgb(36, 36, 36);;\n}\n.slide-section {\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n}\n.slide-image img {\n  width: 100%;\n  height: auto;\n}\n.slider-container ul {\n  list-style: none;\n}\n.slide-description {\n  padding: 3em;\n}\n.case-study {\n  color: #000;\n}\n.transition-rectangle {\n  height: 50px;\n  background-color: rgb(36, 36, 36);\n}\nul{\n  margin: 0;\n  padding: 0;\n  margin-top: -1px;\n}\n.slide-description p {\n  padding-top: 1em;\n  font-weight: 100;\n  color: rgb(116, 114, 114);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGhlaWdodDogMjBlbTtcbiAgcGFkZGluZy10b3A6IDRlbTtcbn1cbi5sZWZ0LCAucmlnaHQge1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cbi5pbnRybyB7XG4gIHBhZGRpbmc6IDVlbSAzZW0gM2VtIDNlbTtcbn1cbi5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogLjllbTtcbn1cbi5yaWdodCBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucmlnaHQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHllbGxvdztcbn1cbi5zbGlkZS1zZWN0aW9uIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTs7XG59XG4uc2xpZGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNmZyO1xufVxuLnNsaWRlLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2xpZGVyLWNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc2xpZGUtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAzZW07XG59XG4uY2FzZS1zdHVkeSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRyYW5zaXRpb24tcmVjdGFuZ2xlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG59XG51bHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLnNsaWRlLWRlc2NyaXB0aW9uIHAge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogcmdiKDExNiwgMTE0LCAxMTQpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"intro\">\n      <div class=\"left\">\n          <p>The digital product design & development<br>\n          company and your guide on the digital<br>\n          transformation journey.</p>\n      </div>\n      <div class=\"right\">\n          <p>Do you have a product in mind?<br><a [routerLink]=\"['/contact']\">Get in touch</a>.</p>\n      </div>\n    </div>\n  </div>\n<div class=\"slider-container\">\n  <ul>\n    <li>\n      <div class=\"slide-section\">\n        <div class=\"slide-description-container\">\n          <div class=\"transition-rectangle\">\n\n          </div>\n          <div class=\"slide-description\">\n            <p>Inspired by building technologies</p>\n            <h1>From idea to the product</h1>\n            <p>Delian Digital takes a holistic approach to product development. When creating products, we always take into consideration the following factors: business goals, market and user needs, features and unique differentiators. We use proven processes and methods that help us deliver human-centered products that drive value.</p>\n            <!-- <p><a class=\"case-study\" href=\"#\">Case Study -></a></p> -->\n          </div>\n        </div>\n        <div class=\"slide-image\">\n          <img src=\"http://doanarae.com/doanarae/8470-nice-pictures-for-desktop-background_17523.jpg\" />\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n<app-work></app-work>\n<app-testimonials></app-testimonials>\n<app-services></app-services>\n<app-about></app-about>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\n  max-height: 40px;\n}\n#logo:hover {\n  cursor: pointer;\n}\n#logo:focus {\n  outline: none;\n}\n.navbar-container {\n  display: grid;\n  grid-template-columns: 3fr 5fr 1fr;\n  padding: 2em 2em 1em 3em;\n  color: #fff;\n  background-color: rgb(36, 36, 36);\n}\n.login a {\n  color: yellow;\n}\n.navbar-container a {\n  color: #fff;\n}\n.navbar-container {\n  position: absolute;\n  top:0;\n  right:0;\n  left:0;\n  z-index: 5;\n}\n.navbar > a:hover {\n  text-decoration: none;\n  color: rgb(76, 152, 237);\n}\n.left-only {\n  color: yellow;\n}\n.left-only:hover {\n  color: rgb(136, 17, 135);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0FBQ1o7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nbyB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG4jbG9nbzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNsb2dvOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyIDFmcjtcbiAgcGFkZGluZzogMmVtIDJlbSAxZW0gM2VtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xufVxuLmxvZ2luIGEge1xuICBjb2xvcjogeWVsbG93O1xufVxuLm5hdmJhci1jb250YWluZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICByaWdodDowO1xuICBsZWZ0OjA7XG4gIHotaW5kZXg6IDU7XG59XG4ubmF2YmFyID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYig3NiwgMTUyLCAyMzcpO1xufVxuLmxlZnQtb25seSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4ubGVmdC1vbmx5OmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMzYsIDE3LCAxMzUpO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"navbar-container\">\n    <img [routerLink]=\"['/']\" id='logo' src={{logoUrl}} />\n    <nav class=\"navbar\">\n        <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/work']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">Work</a>\n        <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/services']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">Services</a>\n        <!-- <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">Approach</a> -->\n        <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">About</a>\n        <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/contact']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">Contact</a>\n        <a\n        class=\"navbar-item\"\n        [routerLink]=\"['/blog']\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact:true}\">Blog</a>\n    </nav>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from '../../services/auth.service';

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(
    // private authService: AuthService,
    router) {
        this.router = router;
        // logoUrl = 'assets/Delian-Digital--FINALS-W.png';
        this.logoUrl = 'assets/Delian-Digital--FINALS-W.png';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        // this.authService.logout();
        // this.flashMessage.show('You are logged out', {
        //   cssClass: 'alert-success',
        //   timeout: 3000
        // });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from '../../services/auth.service';

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(
    // private authService: AuthService,
    router) {
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //   this.authService.getProfile().subscribe(profile => {
        //     this.user = profile.user;
        //   },
        //   err => {
        //     console.log(err);
        //     return false;
        //   }
        // );
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-section {\n  height: 100%;\n  background-color: rgb(36, 36, 36);\n  padding-top: 5em;\n}\n.__headline:after {\n  position: absolute;\n  margin-top: 1em;\n  content: \"\";\n  width: 60px;\n  height: 5px;\n  background-color: rgb(243, 117, 119);\n}\n.__headline {\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n}\n.__headline h1 {\n  color: #fff;\n  font-weight: bolder;\n}\n.section-header {\n  padding: 5em 3em;\n}\n.section-description {\n  padding-top: 4em;\n  width: 45%;\n  color: #fff;\n  line-height: 1.8em;\n  font-size: 1.2em;\n}\n.services-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 2em;\n  color: #fff;\n  list-style: none;\n}\n.read-more {\n  padding: 3em 1em 2em 1em;\n}\n.btn-action-white {\n  margin: 1em 0;\n  color: #fff;\n  border: 2px solid #fff;\n  background: transparent;\n  padding: .6em;\n  box-shadow: -4px 4px 0 0 #fff;\n  font-weight: bold;\n  letter-spacing: .05em;\n}\n.btn-action-white:hover{\n  cursor: pointer;\n}\n.btn-action-white:focus {\n  outline: none;\n}\n.cta-yellow {\n  margin-top: 5em;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n}\n.cta-right {\n  background-color: rgb(240, 212, 60);\n  padding: 2em;\n}\n.cta-link {\n  font-weight: bold;\n  color: #000;\n}\n.cta-link:hover {\n  text-decoration: none;\n\n}\n.services-breakdown {\n  padding: 1em;\n}\n.services-breakdown li {\n  font-size: .8em;\n  padding: 2px 0;\n  line-height: 2em;\n  letter-spacing: .02em;\n}\n.single-service-container h6 {\n  font-weight: bolder;\n  margin-bottom: 2em;\n}\n.single-service-container p {\n  padding-top: 1em;\n  font-size: .8em;\n  line-height: 2em;\n  letter-spacing: .02em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7O0FBRXZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICBwYWRkaW5nLXRvcDogNWVtO1xufVxuLl9faGVhZGxpbmU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxMTcsIDExOSk7XG59XG4uX19oZWFkbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbn1cbi5fX2hlYWRsaW5lIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiA1ZW0gM2VtO1xufVxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICB3aWR0aDogNDUlO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLnNlcnZpY2VzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yZWFkLW1vcmUge1xuICBwYWRkaW5nOiAzZW0gMWVtIDJlbSAxZW07XG59XG4uYnRuLWFjdGlvbi13aGl0ZSB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogLjZlbTtcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMCAwICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG59XG4uYnRuLWFjdGlvbi13aGl0ZTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1hY3Rpb24td2hpdGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmN0YS15ZWxsb3cge1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS42ZnI7XG59XG4uY3RhLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjEyLCA2MCk7XG4gIHBhZGRpbmc6IDJlbTtcbn1cbi5jdGEtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jdGEtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuLnNlcnZpY2VzLWJyZWFrZG93biB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5zZXJ2aWNlcy1icmVha2Rvd24gbGkge1xuICBmb250LXNpemU6IC44ZW07XG4gIHBhZGRpbmc6IDJweCAwO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjAyZW07XG59XG4uc2luZ2xlLXNlcnZpY2UtY29udGFpbmVyIGg2IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnNpbmdsZS1zZXJ2aWNlLWNvbnRhaW5lciBwIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"services\" class=\"dark-section\">\n  <div class=\"section-header\">\n    <div class=\"__headline\">\n      <h1>Services</h1>\n    </div>\n    <div class=\"section-description\">\n      <p>We help clients to design and develop future-proof, significant and secure digital products that are centered around users’ needs and fulfil clients’ business goals.</p>\n    </div>\n  </div>\n  <div class=\"section-services\">\n      <ul class=\"services-list\">\n        <li>\n          <div class=\"single-service-container\">\n            <h6>01</h6>\n            <h3>Full Cycle Product Development</h3>\n            <p>Delian Digital's seasoned team can help stage<br> your product</p>\n            <ul class=\"services-breakdown\">\n              <li>Prototype development</li>\n              <li>MVP development</li>\n              <li>Product-Market Fit</li>\n              <li>Scaling products</li>\n              <li>Business strategy</li>\n              <li>Product strategy</li>\n            </ul>\n            <button class=\"btn-action-white\">Read More</button>\n          </div>\n        </li>\n        <li>\n            <div class=\"single-service-container\">\n              <h6>02</h6>\n              <h3>Product Design and Development</h3>\n              <p>Clarify your vision, digitise your business or disrupt your industry with Delian Digital. Our tool kit includes:</p>\n              <ul class=\"services-breakdown\">\n                <li>Web Design and Development</li>\n                <li>Mobile App Development</li>\n                <li>Software Development</li>\n                <li>Tech Stack Consulting</li>\n                <li>Infrastructure Architecture</li>\n                <li>Usability Testing</li>\n              </ul>\n              <button class=\"btn-action-white\">Read More</button>\n            </div>\n          </li>\n          <li>\n          <div class=\"single-service-container\">\n            <h6>03</h6>\n            <h3>Digital<br> transformation</h3>\n            <p>Self-organizing scrum teams at Delian Digital<br> deliver:</p>\n            <ul class=\"services-breakdown\">\n              <li>Design Sprints</li>\n              <li>Innovation Workshops</li>\n              <li>User & Market Research</li>\n              <li>Customer Journey Mapping</li>\n              <li>Information Architecture & User Flow</li>\n              <li>Wireframing & Process Flows</li>\n            </ul>\n            <button class=\"btn-action-white\">Read More</button>\n          </div>\n        </li>\n      </ul>\n    </div>\n<app-call-to-action></app-call-to-action>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/technology/technology.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/technology/technology.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/technology/technology.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/technology/technology.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  technology works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/technology/technology.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/technology/technology.component.ts ***!
  \***************************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent() {
    }
    TechnologyComponent.prototype.ngOnInit = function () {
    };
    TechnologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technology',
            template: __webpack_require__(/*! ./technology.component.html */ "./src/app/components/technology/technology.component.html"),
            styles: [__webpack_require__(/*! ./technology.component.css */ "./src/app/components/technology/technology.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".simple-slider-section {\n  background-color: rgb(103, 88, 224);\n  height: 400px;\n  color: #fff;\n}\n.slider-content {\n  width: 50%;\n  margin: auto;\n  padding-top: 2em;\n}\n.left-arrow {\n  float: left;\n  margin-left: 10px;\n}\n.right-arrow {\n  float: right;\n  margin-right: 10px;\n}\n.left-arrow, .right-arrow {\n  padding-top: 150px;\n}\n.left-arrow, .right-arrow:hover {\n  cursor: pointer;\n}\n.slider-logo {\n  width: 250px;\n}\n.slider-content img {\n  padding: 1em;\n  width: 100%;\n}\nh2 {\n  font-weight: bold;\n  padding-top: 1em;\n  text-align: center;\n  font-size: 1.5em;\n  letter-spacing: .05em;\n  line-height: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZS1zbGlkZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDg4LCAyMjQpO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zbGlkZXItY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDJlbTtcbn1cbi5sZWZ0LWFycm93IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnJpZ2h0LWFycm93IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubGVmdC1hcnJvdywgLnJpZ2h0LWFycm93IHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuLmxlZnQtYXJyb3csIC5yaWdodC1hcnJvdzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbGlkZXItbG9nbyB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5zbGlkZXItY29udGVudCBpbWcge1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"simple-slider-section\">\n  <div class=\"left-arrow\"><h1><</h1></div>\n  <div class=\"right-arrow\"><h1>></h1></div>\n  <div class=\"slider-content\">\n    <div class=\"slider-logo\">\n      <img src=\"http://badgerblinds.com/wp-content/uploads/2017/10/cropped-badger2png1.png\" />\n    </div>\n    <h2>\"Delian Digital great and very prompt on keeping ahead of things. They have helped tremendously with my marketing and website. Great work!!!\"</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/components/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.css */ "./src/app/components/testimonials/testimonials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/components/work/work.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/work/work.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0;\n  margin: 0;\n}\n.work-section {\n  background-color: rgb(240, 240, 240);\n  padding: 8em 3em 3em 3em;\n}\n.description {\n  padding-top: 3em;\n  max-width: 50%;\n  padding-right: 2em;\n}\n.__headline:after {\n  position: absolute;\n  margin-top: 1em;\n  content: \"\";\n  width: 60px;\n  height: 3px;\n  background-color: #000;\n}\n.__headline {\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n}\n.__headline h1 {\n  font-weight: bolder;\n}\n.description p {\n  font-size: 1.2em;\n  letter-spacing: .05em;\n  line-height: 1.4em;\n}\n.work-boxes {\n  padding-top: 3em;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 3em;\n}\n.work-container {\n  position: relative;\n  height: 400px;\n  background-color: #fff;\n  cursor: pointer;\n  height: 450px;\n}\n.work-container:focus {\n  outline: none;\n}\n.work-picture {\n  width: 100%;\n}\n.work-picture img {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-work-content {\n  position: absolute;\n  bottom: 0;\n  padding: 1.5em;\n}\n.box-work-content h5 {\n  line-height: 1.3;\n  font-weight: bold;\n  padding-top: .5em;\n}\n.tech-used {\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1em;\n  padding-top: 4em;\n}\n.tech-used > li {\n  font-size: .8em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi53b3JrLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIHBhZGRpbmc6IDhlbSAzZW0gM2VtIDNlbTtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIG1heC13aWR0aDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG59XG4uX19oZWFkbGluZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uX19oZWFkbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbn1cbi5fX2hlYWRsaW5lIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG4ud29yay1ib3hlcyB7XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAzZW07XG59XG4ud29yay1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cbi53b3JrLWNvbnRhaW5lcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ud29yay1waWN0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud29yay1waWN0dXJlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5ib3gtd29yay1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuLmJveC13b3JrLWNvbnRlbnQgaDUge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IC41ZW07XG59XG4udGVjaC11c2VkIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAgcGFkZGluZy10b3A6IDRlbTtcbn1cbi50ZWNoLXVzZWQgPiBsaSB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/work/work.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/work/work.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"work-section\">\n  <div class=\"__headline\">\n      <h1>Work</h1>\n  </div>\n  <div class=\"description\">\n    <p>At Delian Digital, we don’t just talk about great products. We make them with our clients. Read our case studies and find out how we’ve helped them bring great products to market:</p>\n  </div>\n  <div class=\"work-boxes\">\n    <div class=\"work-container\" *ngFor=\"let project of projects\" [routerLink]=\"['/work/' + project.id]\">\n      <div class=\"work-picture\">\n        <img src={{project.image}} />\n      </div>\n      <div class=\"box-work-content\">\n        <div class=\"__headline\">\n          <h5>{{project.name}}</h5>\n        </div>\n        <ul class=\"tech-used\">\n          <li>#{{project.technologiesUsed[0].text}}</li>\n          <li>#{{project.technologiesUsed[1].text}}</li>\n          <li>#{{project.technologiesUsed[2].text}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/projects.service */ "./src/app/services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkComponent = /** @class */ (function () {
    function WorkComponent(projectService) {
        this.projectService = projectService;
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getAllProjects().slice(0, 6);
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/components/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/components/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/projects */ "./src/app/api/projects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
    }
    ProjectsService.prototype.getAllProjects = function () {
        return _api_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectsAPI"].projects;
    };
    ProjectsService.prototype.getPorject = function (id) {
        var projectToReturn;
        _api_projects__WEBPACK_IMPORTED_MODULE_1__["ProjectsAPI"].projects.filter(function (project) {
            if (project.id == id) {
                projectToReturn = project;
            }
        });
        return projectToReturn;
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andriikost/Desktop/Angular/deliandigital/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map