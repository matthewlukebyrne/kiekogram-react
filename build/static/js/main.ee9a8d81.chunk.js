(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"KiekoGram"),r.a.createElement("h2",null,"This official catagram gallery for Keiko Burke."),r.a.createElement("h2",{className:"sub"},"No doggies allowed"))},o=a(8),u=a.n(o),m=a(14),f=a(5);a(28),a(22);f.initializeApp({apiKey:"AIzaSyDjF-tYOFKB1zjYt6zcMDKHjNY3qjVEZ8c",authDomain:"reactgram-39f7f.firebaseapp.com",databaseURL:"https://reactgram-39f7f.firebaseio.com",projectId:"reactgram-39f7f",storageBucket:"reactgram-39f7f.appspot.com",messagingSenderId:"392933537",appId:"1:392933537:web:9d205184a2b8b45f1400e0"});var d=f.storage(),p=f.firestore(),g=f.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],f=s[1],b=Object(n.useState)(null),E=Object(i.a)(b,2),v=E[0],j=E[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){f(e)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:v,error:o}},E=a(3),v=function(e){var t=e.file,a=e.setFile,c=b(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(E.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("please select the correct image file!"))}}),r.a.createElement("span",null,"+"),r.a.createElement("p",null,"Add")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"}," ",o," "),a&&r.a.createElement("div",null," ",a.name," "),a&&r.a.createElement(v,{file:a,setFile:c})))},O=a(9),h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},y=function(e){var t=e.setSelectedImg,a=h("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(E.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(E.a.img,{src:e.url,alt:"uploaded_pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(E.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(E.a.img,{src:t,alt:"enlarged_pic",initial:{y:"-100vh"},animate:{y:0}}))};var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(y,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee9a8d81.chunk.js.map