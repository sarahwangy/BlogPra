"use strict";(self.webpackChunkjianshu=self.webpackChunkjianshu||[]).push([[811,973],{1811:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var o,i,r,l,c,s,a,d,p,u,h,g,x=e(5671),f=e(3144),m=e(136),b=e(5716),Z=e(2791),j=e(364),v=e(2330),w=e(4569),k=e.n(w),P=function(n){return{type:v.T5,data:n}},y=function(){return function(n){console.log(123),k().get("/api/home.json").then((function(t){var e;n((e=t.data.data,{type:v.ux,data:e})),console.log("res home data",t.data.data)})).catch((function(){console.log("error")}))}},L=function(n){return console.log("click"),function(t){k().get("/api/homeList.json?page="+n).then((function(e){t(function(n,t){return{type:v.Ru,data:n,articleListPage:t}}(e.data.data,n+1)),console.log("get more list_ data",e.data.data)})).catch((function(n){console.log(n)}))}},S=e(1973),C=e(3504),T=e(168),U=e(6031),E=U.ZP.div(o||(o=(0,T.Z)(["\n    width: 960px;\n    margin: 0 auto;\n    // background: green;\n    overflow: hidden;\n    //  \u5f00\u542foverflow\uff0c\u4f1a\u4f7f\u7236\u7c7b\u611f\u77e5\u5230height \u9ad8\u5ea6\uff0c\u81ea\u52a8\u8c03\u6574\uff0c\u56e0\u4e3a\u4f1a\u89e6\u53d1BIC\n"]))),N=U.ZP.div(i||(i=(0,T.Z)(["\n    float: left;\n    padding-top: 30px;\n    margin-left: 15px;\n    width: 625px;\n    // background: red;\n    .banner-img {\n        width:625px;\n        height: 240px;\n    }\n"]))),O=U.ZP.div(r||(r=(0,T.Z)(["\n    float: right;\n    width:280px;\n    // background: lightpink;\n    // border:1px solid black;\n    box-shadow:10px 5px 5px 5px #ddd;\n}\n\n"]))),z=U.ZP.div(l||(l=(0,T.Z)(["\n   padding: 20px 0 10px 0;\n    //    background: purple;\n    overflow:hidden;\n    margin-left:-18px;\n    border-bottom: 1px solid #dcdcdc;\n\n"]))),$=U.ZP.div(c||(c=(0,T.Z)(["\n    float: left;\n    background: #f7f7f7;\n    height:32px;\n    padding-right:10px;\n    margin-left: 18px;\n    line-height:32px;\n    font-size:14px;\n    color:#000;\n    border: 1px solid #dcdcdc;\n    border-radius:4px;\n     margin-bottom: 18px;\n    .topic-img{\n        height:32px;\n        width:32px;\n        display:block;\n        float:left;\n        margin-right:10px;\n       \n    }\n"]))),M=U.ZP.div(s||(s=(0,T.Z)(["\n    padding: 20px 0;\n    overflow:hidden;\n    border-bottom: 1px solid #dcdcdc;\n    \n    .list-img{\n        display: block;\n        width:125px;\n        height:100px;\n        float:right;\n        border-radius: 10px;\n    }\n\n"]))),J=U.ZP.div(a||(a=(0,T.Z)(["\n    width: 500px;\n    float: left;\n    .list-title {\n        line-height:27px;\n        font-size: 18px;\n        font-weight: bold;\n        color: #333;\n\n    }\n    .list-desc{\n        line-height: 24px;\n        font-size:13px;\n        color:#999;\n    }\n"]))),W=U.ZP.div(d||(d=(0,T.Z)(["\n    margin: 30px 0;\n    width: 280px;\n    // border: 1px solid red;\n"]))),_=U.ZP.div(p||(p=(0,T.Z)(["\n    width: 280px;\n    height: 50px;\n    background: url(",");\n    margin-bottom: 12px;\n    background-size: contain;\n    // background-repeat: no-repeat;\n    \n"])),(function(n){return n.imgUrl})),A=U.ZP.div(u||(u=(0,T.Z)(["\n    width:278px;\n    border: 1px solid #dcdcdc;\n    border-radius: 3px;\n    height: 100px;\n    line-height: 100px;\n    text-align:center;\n    // border: 1px solid black;\n    background: lightblue;\n \n  \n"]))),H=U.ZP.div(h||(h=(0,T.Z)(["\n    width:100%,\n    height:40px;\n    line-height: 40px;\n    background: #a5a5a5;\n    text-align: center;\n    border-radius: 2px;\n    color: #fff;\n    cursor: pointer;\n"]))),I=U.ZP.div(g||(g=(0,T.Z)([" \n    position: fixed;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    border: 1px solid #ccc;\n    background: lightgray;\n    right:100px;\n    bottom: 100px;\n    font-size:15px;\n    padding:5px;\n\n"]))),R=e(184),B=function(n){(0,m.Z)(e,n);var t=(0,b.Z)(e);function e(){return(0,x.Z)(this,e),t.apply(this,arguments)}return(0,f.Z)(e,[{key:"render",value:function(){var n=this;return console.log("home list props:",this.props),(0,R.jsxs)("div",{children:[this.props.articleList.map((function(n,t){return console.log("articleObj.title,",n.title),console.log(JSON.stringify(n)),(0,R.jsx)(C.rU,{to:"/detail/".concat(n.id),children:(0,R.jsxs)(M,{children:[(0,R.jsx)("img",{className:"list-img",src:n.imgUrl,alt:"120"}),(0,R.jsxs)(J,{children:[(0,R.jsx)("h3",{className:"list-title",children:n.title}),(0,R.jsx)("p",{className:"list-desc",children:n.desc})]})]})},t)})),(0,R.jsx)(H,{onClick:function(){return n.props.getMoreList(n.props.articleListPage)},children:" \u52a0\u8f7d\u66f4\u591a"})]})}}]),e}(Z.PureComponent),D=(0,j.$j)((function(n){return console.log("mapToPropsState ---\x3e"),console.log(JSON.stringify(n.home.articleListPage)),{articleList:n.home.articleList,articleListPage:n.home.articleListPage}}),(function(n){return{getMoreList:function(t){n(L(t))}}}))(B),F=function(n){(0,m.Z)(e,n);var t=(0,b.Z)(e);function e(){return(0,x.Z)(this,e),t.apply(this,arguments)}return(0,f.Z)(e,[{key:"render",value:function(){return console.log("recommend list",this.props),(0,R.jsx)(W,{children:this.props.recommendList.map((function(n){return(0,R.jsx)(_,{imgUrl:n.imgUrl},n.id)}))})}}]),e}(Z.PureComponent),V=(0,j.$j)((function(n){return{recommendList:n.home.recommendList}}),null)(F),Y=function(n){(0,m.Z)(e,n);var t=(0,b.Z)(e);function e(){return(0,x.Z)(this,e),t.apply(this,arguments)}return(0,f.Z)(e,[{key:"render",value:function(){return console.log("topic",this.props),(0,R.jsx)(z,{children:this.props.topicLists.map((function(n){return console.log("topicListObj"),console.log(JSON.stringify(n)),console.log(n.id),(0,R.jsxs)($,{children:[(0,R.jsx)("img",{className:"topic-img",src:n.imgUrl}),n.title]},n.id)}))})}}]),e}(Z.PureComponent),q=(0,j.$j)((function(n){return{topicLists:n.home.topicList}}),null)(Y),G=function(n){(0,m.Z)(e,n);var t=(0,b.Z)(e);function e(){var n;(0,x.Z)(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))).handleScrollTop=function(){window.scrollTo(0,0)},n.bindEvent=function(){window.addEventListener("scroll",n.props.changeShowSroll)},n}return(0,f.Z)(e,[{key:"componentDidMount",value:function(){this.bindEvent(),this.props.changeHomeList()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeShowSroll)}},{key:"render",value:function(){return(0,R.jsxs)(E,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)("img",{className:"banner-img",src:"https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",alt:"540"}),(0,R.jsx)(q,{}),(0,R.jsx)(D,{})]}),(0,R.jsxs)(O,{children:[(0,R.jsx)(V,{}),(0,R.jsx)(A,{children:(0,R.jsx)(S.default,{})})]}),this.props.showScroll?(0,R.jsx)(I,{onClick:this.handleScrollTop,children:"\u56de\u5230\u9876\u90e8"}):null]})}}]),e}(Z.PureComponent),K=(0,j.$j)((function(n){return{showScroll:n.home.showScroll}}),(function(n){return{changeHomeList:function(){return n(y())},changeShowSroll:function(){console.log("scrolll---\x3e",document.documentElement.scrollTop),console.log(document.documentElement.scrollTop>400),document.documentElement.scrollTop>400?n(P(!0)):n(P(!1))}}}))(G)},1973:function(n,t,e){e.r(t);var o=e(5671),i=e(3144),r=e(136),l=e(5716),c=e(2791),s=e(6871),a=e(364),d=e(3504),p=e(184),u=function(n){(0,r.Z)(e,n);var t=(0,l.Z)(e);function e(){return(0,o.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"render",value:function(){return this.props.login?(0,p.jsx)("div",{children:(0,p.jsx)(d.rU,{to:"/write",children:(0,p.jsx)("b",{children:"YOU can WRITE here!"})})}):(0,p.jsx)(s.Z5,{children:(0,p.jsx)(s.AW,{path:"",element:(0,p.jsx)(s.Fg,{to:"/login"})})})}}]),e}(c.PureComponent);t.default=(0,a.$j)((function(n){return{login:n.login.login}}),null)(u)}}]);
//# sourceMappingURL=811.1ebed0d4.chunk.js.map