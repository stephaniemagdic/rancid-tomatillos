(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(23),a=n.n(r),o=(n(31),n(18)),s=n(13),A=n(9),j=n(10),d=n(12),v=n(11),l=(n(32),n(33),n(34),n(4)),O=n(0),h=function(e){var t=e.id,n=e.img,i=e.title,c=e.rating;return Object(O.jsx)(l.b,{to:"/movies/".concat(t),children:Object(O.jsxs)("article",{className:"Card",id:t,children:[Object(O.jsx)("img",{src:n,alt:i}),Object(O.jsx)("p",{children:"\u2605 ".concat(c.toFixed(1),"/10")})]},t)})},u=n.p+"static/media/electronics.c98b4ad0.png",x=(n(43),n(26)),b=n.n(x),g=function(e){var t=e.hasMovieBanner;return Object(O.jsxs)("header",{className:"Header",children:[Object(O.jsxs)("div",{className:"nav-container",children:[Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("h1",{children:"RANCID TOMATILLOS"})}),Object(O.jsxs)("div",{id:"linkContainer",children:[Object(O.jsx)(l.c,{exact:!0,to:"/",activeStyle:{fontWeight:"bolder",textDecoration:"underline",textDecorationColor:"#AB2300"},children:Object(O.jsx)("h3",{className:"headerLink",children:"Home"})}),Object(O.jsx)(l.c,{exact:!0,to:"/Favorites",activeStyle:{fontWeight:"bolder",textDecoration:"underline",textDecorationColor:"#AB2300"},children:Object(O.jsx)("h3",{className:"headerLink",children:"Favorites"})})]})]}),t&&Object(O.jsx)("div",{className:"banner",children:Object(O.jsx)(b.a,{url:"https://www.youtube.com/watch?v=aETz_dRDEys",className:"react-player",width:"100%",height:"100%",controls:!1,muted:!0,playing:!0,loop:!0,config:{youtube:{playerVars:{disablekb:1,fs:0,iv_load_policy:3,modestbranding:1}}}})})]})},B=function(e){var t=e.movies,n=e.hasMovieBanner,i=t.map((function(e){return Object(O.jsx)(h,{id:e.id,img:e.poster_path,title:e.title,rating:e.average_rating},e.id)}));return Object(O.jsxs)("section",{children:[Object(O.jsx)(g,{hasMovieBanner:n}),Object(O.jsxs)("section",{className:"CardContainer",children:[!i.length&&Object(O.jsxs)("div",{id:"noFavs",children:[Object(O.jsx)("p",{className:"noFavoritesMessage",children:"It looks like you haven't chosen any favorites yet!"}),Object(O.jsx)("img",{src:u,alt:"television icon"}),Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("button",{id:"findFavBtn",children:"take me home to choose a favorite"})})]}),i]})]})},f=(n(62),n(63),function(e){return Object(O.jsxs)("article",{className:"movieDetail",children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h2",{children:e.details.title}),Object(O.jsx)("p",{children:e.details.release_date})]}),Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("p",{children:"Tagline: ".concat(e.details.tagline)}),Object(O.jsx)("p",{children:"Runtime: ".concat(e.details.runtime)}),Object(O.jsx)("p",{children:"Budget: ".concat(e.details.budget)})]}),Object(O.jsx)("p",{children:"Overview: ".concat(e.details.overview)})]})}),m=function(e){return fetch(e).then((function(e){return w(e)})).then((function(e){return e}))},w=function(e){if(e.ok)return e.json();throw new Error(e.status)},F=(n(64),n.p+"static/media/browser.77b269e1.png"),C=function(e){var t=e.errorMessage,n="",i=null;return t?n="Server Error":t||(n="Page Not Found",i=Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("button",{children:"TAKE ME TO RANCID TOMATILLOS"})})),Object(O.jsx)("main",{children:Object(O.jsxs)("section",{className:"errorDisplay",children:[Object(O.jsx)("h2",{children:n}),i,Object(O.jsx)("img",{src:F,alt:"error icon"})]})})},z=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(A.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){m("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(i.params.id)).then((function(e){return function(e){for(var t in e)e[t]||(e[t]="-");return e}(e.movie)})).then((function(e){return i.setState({selectedMovie:e,isLoading:!1})})).then((function(){i.props.checkFavorites(i.state.selectedMovie.id)&&i.setState({isFavorite:!0})})).catch((function(e){return i.setState({err:e,isLoading:!1})}))},i.addToFavorites=function(){var e;(e=i.state.selectedMovie,fetch("http://localhost:3002/api/v1/favoritesList",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){return e}))).then((function(){return i.props.getFavorites()}))},i.removeFromFavorites=function(){var e;(e=i.state.selectedMovie.id,fetch("http://localhost:3002/api/v1/favoritesList",{method:"DELETE",body:JSON.stringify({id:e}),headers:{"Content-type":"application/json"}})).then((function(){return i.props.getFavorites()}))},i.params=e.params,i.state={selectedMovie:{},isFavorite:!1,isLoading:!0,err:null},i}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=Object(O.jsxs)("section",{className:"MovieDisplay",children:[Object(O.jsxs)("div",{className:"buttonContainer",children:[!this.state.isFavorite&&Object(O.jsx)("button",{onClick:function(){e.addToFavorites(),e.setState({isFavorite:!0})},children:"+ add to favorites"}),this.state.isFavorite&&Object(O.jsx)("button",{id:"removeFav",onClick:function(){e.removeFromFavorites(),e.setState({isFavorite:!1})},children:"- remove from favorites"}),Object(O.jsx)(l.b,{to:"/",children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"rewind",id:"rewind"})})]}),Object(O.jsx)("div",{className:"imageContainer",children:Object(O.jsx)("img",{src:this.state.selectedMovie.backdrop_path,alt:this.state.selectedMovie.title})}),Object(O.jsx)(f,{details:this.state.selectedMovie})]});return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),this.state.isLoading&&Object(O.jsx)("p",{children:"loading, please wait"}),!this.state.isLoading&&!this.state.err&&t,this.state.err&&Object(O.jsx)(C,{errorMessage:this.state.err})]})}}]),n}(i.Component),p=(n(65),function(e){var t=e.favorites;return Object(O.jsx)("div",{children:Object(O.jsx)(B,{movies:t,hasMovieBanner:!1})})}),M=n(2),D=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(A.a)(this,n),(e=t.call(this)).componentDidMount=function(){m("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(t){e.setState({movies:[].concat(Object(s.a)(e.state.movies),Object(s.a)(t.movies))})})).catch((function(t){return e.setState({error:t.message})})),e.getFavorites()},e.checkFavorites=function(t){return e.state.favorites.find((function(e){return e.id===t}))},e.getFavorites=function(){m("http://localhost:3002/api/v1/favoritesList").then((function(t){return e.setState({favorites:Object(s.a)(t)})})).catch((function(t){return e.setState({error:t.message})}))},e.state={movies:[],favorites:[],error:null},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("main",{children:Object(O.jsxs)(M.c,{children:[Object(O.jsx)(M.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(B,{movies:e.state.movies,hasMovieBanner:!0})}}),Object(O.jsx)(M.a,{exact:!0,path:"/movies/:id",render:function(t){var n=t.match;return Object(O.jsx)(z,Object(o.a)(Object(o.a)({},n),{},{getFavorites:e.getFavorites,checkFavorites:e.checkFavorites}))}}),Object(O.jsx)(M.a,{exact:!0,path:"/Favorites",render:function(){return Object(O.jsx)(p,{favorites:e.state.favorites})}}),Object(O.jsx)(M.a,{render:function(){return Object(O.jsx)(C,{errorMessage:e.state.error})}})]})})}}]),n}(i.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(O.jsx)(l.a,{children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(D,{})})}),document.getElementById("root")),R()}},[[66,1,2]]]);
//# sourceMappingURL=main.80e7c6b0.chunk.js.map