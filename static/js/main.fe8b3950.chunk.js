(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var i,r,o,c,a,s,l,d,u,j,b,f,p,h,x=t(0),m=t.n(x),O=t(14),g=t.n(O),v=t(15),w=t(5),y=t(3),C=t(2),k=C.default.div(i||(i=Object(y.a)(["\n    background-color: ",";\n    margin: 0 auto;\n"])),(function(e){return e.theme.color.mercury})),P=C.default.h1(r||(r=Object(y.a)(["\n    font-size: 24px;\n    color: ",";\n    line-height: 40px;\n    flex-wrap: nowrap; \n    @media (max-width: ","px) {\n    font-size: 16px;\n    line-height: 20px;\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.breakpoint.mobile})),z=C.default.img(o||(o=Object(y.a)(["\n    width: 34px;\n    @media (max-width: ","px) {\n        width: 20px;\n"])),(function(e){return e.theme.breakpoint.mobile})),E=C.default.div(c||(c=Object(y.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-basis: 50%;\nflex-wrap: nowrap;\n@media (max-width: ","px) {\n    flex-basis: 100%;\n"])),(function(e){return e.theme.breakpoint.mobile})),F=t.p+"static/media/camera.b470e4d1.svg",L=t(1),M=function(){return Object(L.jsxs)(E,{children:[Object(L.jsx)(z,{src:F,alt:""}),"\xa0",Object(L.jsx)(P,{children:"Movies Browser"})]})},S=C.default.img(a||(a=Object(y.a)(["\n    margin: 10px 20px;\n"]))),I=C.default.div(s||(s=Object(y.a)(["\nborder-radius: 33px;\nbackground-color: ",";\ndisplay: flex;\nmax-height: 48px;\nmax-width: 432px;\nborder: 1px solid;\nmargin-top: 10px;\nmargin-bottom: 10px;\n"])),(function(e){return e.theme.color.white})),_=C.default.input(l||(l=Object(y.a)([" \nwidth: 90vw;\nborder-radius: 33px;\nborder: none;\n&::placeholder {\n    font-size: 16px;\n    color: ",";\n}\n"])),(function(e){return e.theme.color.darkGrey})),G=t.p+"static/media/search.d40a7fee.svg",B=function(){return Object(L.jsxs)(I,{children:[Object(L.jsx)(S,{src:G,alt:""}),Object(L.jsx)(_,{placeholder:"Search for movies..."})]})},D=C.default.ul(d||(d=Object(y.a)(["\n    display: flex;\n    list-style: none;\n    margin: 0;\n    align-items: center;\n    flex-basis: 50%;\n"]))),T="active",U=Object(C.default)(v.b).attrs((function(){return{activeClassName:T}}))(u||(u=Object(y.a)(["\n  \n  color: ",";\n  text-decoration: none;\n  border-radius: 33px;\n  padding: 10px;\n  \n  &."," {\n    border: 1px solid ",";\n  }\n  \n  &:hover {\n  }\n"])),(function(e){return e.theme.color.white}),T,(function(e){return e.theme.color.white})),A=C.default.li(j||(j=Object(y.a)(["\n    margin: 20px;\n    text-transform: uppercase;\n    text-decoration: none;\n"]))),J=C.default.div(b||(b=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 90%;\n"]))),N=C.default.nav(f||(f=Object(y.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n"]))),R=C.default.div(p||(p=Object(y.a)(["\n    color: ",";\n    background: ",";\n    min-height: 94px;\n    padding: 15px;\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black})),H=function(e){e.moviesPath,e.peoplePath;return Object(L.jsx)(R,{children:Object(L.jsx)(N,{children:Object(L.jsxs)(J,{children:[Object(L.jsxs)(D,{children:[Object(L.jsx)(M,{}),Object(L.jsx)(A,{children:Object(L.jsx)(U,{to:"/movies",children:"Movies"})}),Object(L.jsx)(A,{children:Object(L.jsx)(U,{to:"/people",children:"People"})})]}),Object(L.jsx)(B,{})]})})})},Y=t(9),Z=t(16),q=Object(Z.b)({name:"movies",initialState:{movies:[],genres:[],state:"loading"},reducers:{fetchPopularMovies:function(){},setMovies:function(e,n){var t=n.payload;e.movies=t},setMoviesState:function(e,n){var t=n.payload;e.state=t},setGenres:function(e,n){var t=n.payload;e.genres=t}}}),K=q.actions,Q=(K.fetchPopularMovies,K.setMovies),V=K.setMoviesState,W=K.setGenres,X=function(e){return e.movies},$=function(e){return e.movies.state},ee=function(e){return e.movies.genres},ne=q.reducer,te=["title","titleId"];function ie(){return(ie=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function re(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function oe(e,n){var t=e.title,i=e.titleId,r=re(e,te);return x.createElement("svg",ie({width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),t?x.createElement("title",{id:i},t):null,h||(h=x.createElement("path",{d:"M23.1451 8.04083L16.0641 7.01183L12.9011 0.599825C12.8092 0.443683 12.6781 0.314249 12.5207 0.224324C12.3634 0.134399 12.1853 0.0870972 12.0041 0.0870972C11.8229 0.0870972 11.6449 0.134399 11.4875 0.224324C11.3302 0.314249 11.1991 0.443683 11.1071 0.599825L7.93814 7.01183L0.857139 8.04083C0.672479 8.06748 0.498959 8.14526 0.356195 8.26538C0.213431 8.3855 0.107117 8.54316 0.0492738 8.72054C-0.00856983 8.89792 -0.0156366 9.08794 0.0288724 9.26913C0.0733813 9.45032 0.167691 9.61544 0.301139 9.74583L5.42614 14.7398L4.21714 21.7928C4.18563 21.9767 4.2062 22.1658 4.27652 22.3386C4.34684 22.5114 4.46411 22.6611 4.61507 22.7708C4.76603 22.8804 4.94465 22.9457 5.13075 22.9591C5.31685 22.9725 5.50299 22.9337 5.66814 22.8468L12.0011 19.5178L18.3341 22.8468C18.4993 22.9337 18.6854 22.9725 18.8715 22.9591C19.0576 22.9457 19.2362 22.8804 19.3872 22.7708C19.5382 22.6611 19.6554 22.5114 19.7258 22.3386C19.7961 22.1658 19.8166 21.9767 19.7851 21.7928L18.5761 14.7398L23.7011 9.74583C23.8345 9.61557 23.9289 9.45061 23.9735 9.26957C24.0181 9.08853 24.0112 8.89862 23.9536 8.72129C23.896 8.54396 23.7899 8.38628 23.6474 8.26603C23.5049 8.14579 23.3316 8.06779 23.1471 8.04083H23.1451Z",fill:"#FCD420"})))}var ce,ae,se,le,de,ue,je,be,fe,pe,he,xe,me,Oe,ge,ve,we,ye,Ce=x.forwardRef(oe),ke=(t.p,function(){return Object(L.jsx)(Ce,{})}),Pe=C.default.div(ce||(ce=Object(y.a)(["\n    background-color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    padding: 40px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-gap: 40px;\n"])),(function(e){return e.theme.color.white})),ze=C.default.img(ae||(ae=Object(y.a)(["\n    width: 312px;\n    height: 464px;\n"]))),Ee=C.default.header(se||(se=Object(y.a)(["\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 1.2;\n    margin-top: 8px;\n"]))),Fe=C.default.div(le||(le=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),Le=C.default.span(de||(de=Object(y.a)(["\n    font-weight: 400; \n    font-size: 22px;\n    line-height: 1.2;\n    margin: 24px 0px;\n"]))),Me=C.default.div(ue||(ue=Object(y.a)(["\n    display: flex;\n"]))),Se=C.default.span(je||(je=Object(y.a)(["\n    font-size: 18px;\n    line-height: 1.2;\n    color: ",";\n"])),(function(e){return e.theme.color.stormGrey})),Ie=C.default.span(be||(be=Object(y.a)(["\n    font-size: 18px;\n    line-height: 1.2;\n    margin-left: 10px;\n"]))),_e=C.default.div(fe||(fe=Object(y.a)(["\n    display: flex;\n"]))),Ge=C.default.span(pe||(pe=Object(y.a)(["\n    padding: 8px 16px;\n    margin: 24px 16px 24px 0px;\n    font-size: 14px;\n    border-radius: 5px;\n    background-color: ",";\n    color: ",";\n"])),(function(e){return e.theme.color.mystic}),(function(e){return e.theme.color.woodsmoke})),Be=C.default.div(he||(he=Object(y.a)(["\n    display: flex;\n"]))),De=C.default.span(xe||(xe=Object(y.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 1.3;\n    margin-left: 8px;\n"]))),Te=C.default.span(me||(me=Object(y.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 8px;\n    align-self: flex-end;\n"]))),Ue=C.default.span(Oe||(Oe=Object(y.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 12px;\n    align-self: flex-end;\n"]))),Ae=C.default.p(ge||(ge=Object(y.a)(["\n    font-size: 20px;\n    line-height: 1.6;\n    margin: 24px 0px;\n    font-weight: 400;\n"]))),Je=function(e){var n=e.title,t=e.subtitle,i=e.posterUrl,r=e.releaseDate,o=e.genreIds,c=e.rating,a=e.votes,s=e.overview,l=Object(Y.c)(ee);return Object(L.jsxs)(Pe,{children:[Object(L.jsx)(ze,{src:i,alt:"movie poster"}),Object(L.jsxs)(Fe,{children:[Object(L.jsx)(Ee,{children:n}),Object(L.jsx)(Le,{children:t}),Object(L.jsxs)(Me,{children:[Object(L.jsx)(Se,{children:"Production: "}),Object(L.jsx)(Ie,{children:"China, United States of America"})]}),Object(L.jsxs)(Me,{children:[Object(L.jsx)(Se,{children:"Release date: "}),Object(L.jsx)(Ie,{children:r})]}),Object(L.jsx)(_e,{children:o.map((function(e){return Object(L.jsx)(Ge,{children:l.genres[l.genres.findIndex((function(n){return n.id===e}))].name},e)}))}),Object(L.jsxs)(Be,{children:[Object(L.jsx)(ke,{}),Object(L.jsx)(De,{children:c}),Object(L.jsx)(Te,{children:"/ 10"}),Object(L.jsxs)(Ue,{children:[a," votes"]})]}),Object(L.jsx)(Ae,{children:s})]})]})},Ne=C.default.div(ve||(ve=Object(y.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 24px;\n"]))),Re=C.default.div(we||(we=Object(y.a)([""]))),He=function(){return Object(L.jsx)(Re,{children:"LoadingPage"})},Ye=C.default.div(ye||(ye=Object(y.a)([""]))),Ze=function(){return Object(L.jsx)(Ye,{children:"Error page"})},qe=function(){!function(){var e=Object(Y.b)();Object(x.useEffect)((function(){setTimeout((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7").then((function(e){return e.json()})).then((function(n){return e(Q(n.results))})).then((function(){return e(V("success"))}))}),2e3)}),[])}(),function(){var e=Object(Y.b)();Object(x.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=768f7875782193f5e4797762314da0b7").then((function(e){return e.json()})).then((function(n){return e(W(n))}))}),[])}();var e=Object(Y.c)($),n=Object(Y.c)(X);Object(Y.c)(ee);return Object(L.jsx)(Ne,{title:"Movies",children:"loading"===e?Object(L.jsx)(He,{}):"Error"===e?Object(L.jsx)(Ze,{}):n.movies.map((function(e,t){return Object(L.jsx)(Je,{title:n.movies[t].title,subtitle:new Date(Date.parse(n.movies[t].release_date)).getFullYear(),releaseDate:n.movies[t].release_date,genreIds:n.movies[t].genre_ids,rating:n.movies[t].vote_average,votes:n.movies[t].vote_count,overview:n.movies[t].overview,posterUrl:"https://image.tmdb.org/t/p/w500".concat(n.movies[t].poster_path)},n.movies[t].id)}))})},Ke=function(){return Object(L.jsx)("div",{title:"People",children:"People page"})};var Qe,Ve=function(){return Object(L.jsx)(v.a,{children:Object(L.jsxs)(k,{children:[Object(L.jsx)(H,{moviesPath:"/movies",peoplePath:"/people"}),Object(L.jsxs)(w.d,{children:[Object(L.jsx)(w.b,{path:"/movies",children:Object(L.jsx)(qe,{})}),Object(L.jsx)(w.b,{path:"/people",children:Object(L.jsx)(Ke,{})}),Object(L.jsx)(w.b,{path:"/",children:Object(L.jsx)(w.a,{to:"/movies"})})]})]})})},We=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))},Xe=t(25),$e=Object(C.createGlobalStyle)(Qe||(Qe=Object(y.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: "Poppins", sans-serif;\n  }\n    \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n']))),en=Object(Z.a)({reducer:{movies:ne}});g.a.render(Object(L.jsx)(m.a.StrictMode,{children:Object(L.jsx)(Y.a,{store:en,children:Object(L.jsxs)(C.ThemeProvider,{theme:{color:{white:"#FFFFFF",mystic:"#E4E6F0",mercury:"#E5E5E5",woodsmoke:"#18181B",stormGrey:"#74788B",darkGrey:"#7E839A",black:"#000000"},breakpoint:{mobile:"767"}},children:[Object(L.jsx)(Xe.Normalize,{}),Object(L.jsx)($e,{}),Object(L.jsx)(Ve,{})]})})}),document.getElementById("root")),We()}},[[37,1,2]]]);
//# sourceMappingURL=main.fe8b3950.chunk.js.map