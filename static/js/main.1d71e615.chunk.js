(this["webpackJsonpslot-machine"]=this["webpackJsonpslot-machine"]||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e),n.d(e,"App",(function(){return b}));var s=n(1),a=n.n(s),r=n(2),i=n(5),c=n(6),u=n(9),o=n(8),d=n(3),p=n.n(d),l=n(7),h=n.n(l),f=n(0),v=function(t){var e=t.embedId;return Object(f.jsx)("div",{className:"video-responsive",children:Object(f.jsx)("iframe",{width:"300",height:"200",src:"https://www.youtube.com/embed/".concat(e),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},b=function(t){Object(u.a)(n,t);var e=Object(o.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).state={vid1:"",vid2:"",vid3:""},s.playlist=[],s.usedNums=[],s}return Object(c.a)(n,[{key:"getPlaylist",value:function(){var t=Object(r.a)(a.a.mark((function t(){var e,n,s,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="",!0,n=0;case 3:if(!(n<2)){t.next=16;break}return t.next=6,fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?"+e+"part=snippet%2CcontentDetails&maxResults=50&playlistId=PLRkzHdPAAz1RjI_nthnx479FwO7lB0VAD&key=AIzaSyCo53bQZ8CNuzgai3-ZB83eh09548lszB8");case 6:return s=t.sent,t.next=9,s.json();case 9:r=t.sent,console.log(r.nextPageToken),e="pageToken="+r.nextPageToken+"&",!1,n++,t.next=3;break;case 16:console.log(this.playlist);case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getRandom",value:function(){var t=Object(r.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=!0,n=-1;e;)n=Math.round(Math.random()*this.playlist.length),e=this.checkUsed(n);return this.usedNums.push(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"checkUsed",value:function(t){var e=!1;return this.usedNums.map((function(n){n==t&&(e=!0)})),e}},{key:"handleChange",value:function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"8888"==e.target.value&&this.getPlaylist();case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"shuffle",value:function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.getRandom();case 3:return t.t1=t.sent,t.t2=this.playlist[t.t1].snippet.resourceId.videoId,t.next=7,this.getRandom();case 7:return t.t3=t.sent,t.t4=this.playlist[t.t3].snippet.resourceId.videoId,t.next=11,this.getRandom();case 11:t.t5=t.sent,t.t6=this.playlist[t.t5].snippet.resourceId.videoId,t.t7={vid1:t.t2,vid2:t.t4,vid3:t.t6},t.t0.setState.call(t.t0,t.t7);case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("input",{type:"password",name:"password",id:"password",onChange:this.handleChange.bind(this)}),Object(f.jsx)(v,{embedId:this.state.vid1}),Object(f.jsx)(v,{embedId:this.state.vid2}),Object(f.jsx)(v,{embedId:this.state.vid3}),Object(f.jsx)("button",{onClick:this.shuffle.bind(this),children:"Shuffle"})]})}},{key:"componentDidMount",value:function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),n}(p.a.Component);h.a.render(Object(f.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1d71e615.chunk.js.map