(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports=a(43)},22:function(t,e,a){},23:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(22),a(10)),l=a(11),s=a(14),u=a(12),p=a(15),d=(a(23),a(13)),m=a.n(d),h=function(){return m.a.get("https://cat-fact.herokuapp.com/facts")};var b=function(){var t={container:{backgroundColor:"white",borderRadius:"7px",padding:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginBottom:"10px",width:"80%"},title:{color:"black"},subtitle:{color:"grey"}};return r.a.createElement("div",{style:t.container},r.a.createElement("h1",{style:t.title},"Welcome to KnightHacks"),r.a.createElement("p",{style:t.subtitle},"How are you today"))};var f=function(t){var e={container:{backgroundColor:"white",borderRadius:"7px",padding:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginBottom:"10px",width:"80%"},title:{color:"black"},subtitle:{color:"grey"}};return r.a.createElement("div",{style:e.container},r.a.createElement("h1",{style:e.title},"Cat Fact #",t.factNumber),r.a.createElement("p",{style:e.subtitle},t.fact))},w=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={facts:[]},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;h().then(function(e){return t.setState({facts:e.data.all})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,null),this.state.facts.map(function(t,e){return r.a.createElement(f,{key:e,factNumber:e,fact:t.text})})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.39b109a5.chunk.js.map