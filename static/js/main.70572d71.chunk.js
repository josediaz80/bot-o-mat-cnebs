(window["webpackJsonpbot-o-mat-cnebs"]=window["webpackJsonpbot-o-mat-cnebs"]||[]).push([[0],{15:function(e,a){e.exports={tasks:[{description:"do the dishes",eta:1e3},{description:"sweep the house",eta:3e3},{description:"do the laundry",eta:1e4},{description:"take out the recycling",eta:4e3},{description:"make a sammich",eta:7e3},{description:"mow the lawn",eta:2e4},{description:"rake the leaves",eta:18e3},{description:"give the dog a bath",eta:14500},{description:"bake some cookies",eta:8e3},{description:"wash the car",eta:2e4}],types:{UNIPEDAL:"Unipedal",BIPEDAL:"Bipedal",QUADRUPEDAL:"Quadrupedal",ARACHNID:"Arachnid",RADIAL:"Radial",AERONAUTICAL:"Aeronautical"}}},28:function(e,a,t){e.exports=t(55)},33:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(21),l=t.n(r),i=(t(33),t(22)),c=t(23),s=t(26),d=t(24),m=t(10),u=t(27),h=t(15),p=t.n(h),b=t(7),E=t.n(b),y=function(e){return o.a.createElement(E.a.Group,{controlId:"roboForm.nameInput"},o.a.createElement(E.a.Label,null,"Robot Name"),o.a.createElement(E.a.Control,{type:"text",placeholder:"Roy Batty",onChange:e.handleNameUpdate}))},v=function(e){var a=e.data.types,t=Object.keys(a);return o.a.createElement(E.a.Group,{controlId:"roboForm.typeInput"},o.a.createElement(E.a.Label,null,"Robot Type"),o.a.createElement(E.a.Control,{as:"select",onChange:e.handleTypeChoice},t.map(function(e,n){return o.a.createElement("option",{key:n},a[t[n]])})))},k=t(12),f=t.n(k),N=function(e){var a=e.handleNameUpdate,t=e.handleBuildABot,n=e.handleTypeChoice;return o.a.createElement(E.a,null,o.a.createElement(y,{handleNameUpdate:a}),o.a.createElement(v,{handleTypeChoice:n,data:e.data}),o.a.createElement(f.a,{variant:"primary",onClick:t},"Build a Bot!"))},A=t(16),B=t.n(A),T=function(e){return o.a.createElement(B.a,null,e.tasks.map(function(a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B.a.Item,null,a.description),o.a.createElement(f.a,{variant:"primary"},"Make ",e.roboName," ",a.description,"!"))}))},w=t(8),C=t.n(w),g=t(11),U=t.n(g),I=function(e){var a=e.robots;return o.a.createElement(C.a,null,a.map(function(e){return o.a.createElement(C.a,null,o.a.createElement(U.a,null,e.roboName," the ",e.roboType,"'s Tasks:"),o.a.createElement(U.a,null,o.a.createElement(T,{tasks:e.tasks,roboName:e.roboName})))}))},O=t(25),j=t.n(O),R=function(e){return e.sort(function(){return.5-Math.random()}).slice(0,5)},L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={robots:[],roboName:"",roboType:""},t.handleNameUpdate=t.handleNameUpdate.bind(Object(m.a)(t)),t.handleTypeChoice=t.handleTypeChoice.bind(Object(m.a)(t)),t.handleBuildABot=t.handleBuildABot.bind(Object(m.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleNameUpdate",value:function(e){var a=e.target.value;this.setState({roboName:a})}},{key:"handleTypeChoice",value:function(e){var a=e.target.value;this.setState({roboType:a})}},{key:"handleBuildABot",value:function(){var e=p.a.tasks,a=R(e);if(""===this.state.roboName||""===this.state.roboType)alert("Please give your poor robot a name & type!");else{var t=this.state.robots,n={};n.roboName=this.state.roboName,n.roboType=this.state.roboType,n.tasks=a,t.push(n),this.setState({robots:t})}}},{key:"render",value:function(){var e=this.state.robots;return o.a.createElement("div",{className:"App"},o.a.createElement(j.a,null,o.a.createElement(C.a,{md:4}),o.a.createElement(C.a,{md:4},o.a.createElement(U.a,null,o.a.createElement(N,{handleNameUpdate:this.handleNameUpdate,handleTypeChoice:this.handleTypeChoice,handleBuildABot:this.handleBuildABot,data:p.a})),o.a.createElement(U.a,null,e.length?o.a.createElement(I,{robots:e}):o.a.createElement(o.a.Fragment,null))),o.a.createElement(C.a,{md:4})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.70572d71.chunk.js.map