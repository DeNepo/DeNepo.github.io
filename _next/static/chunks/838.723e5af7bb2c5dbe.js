"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{1838:function(t,e,a){a.r(e),a.d(e,{diagram:function(){return c}});var r=a(244),i=a(9373),n=a(2494),d=a(5625),l=a(3090),o=a(5971);a(7484),a(7967),a(7856);let s={},p=function(t){let e=Object.entries(s).find(e=>e[1].label===t);if(e)return e[0]},g=function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},c={parser:r.p,db:r.d,renderer:{draw:function(t,e,a,r){let c;let h=(0,l.c)().class;s={},l.l.info("Rendering diagram "+t);let f=(0,l.c)().securityLevel;"sandbox"===f&&(c=(0,i.Ys)("#i"+e));let u="sandbox"===f?(0,i.Ys)(c.nodes()[0].contentDocument.body):(0,i.Ys)("body"),x=u.select(`[id='${e}']`);g(x);let y=new d.k({multigraph:!0});y.setGraph({isMultiGraph:!0}),y.setDefaultEdgeLabel(function(){return{}});let b=r.db.getClasses(),m=Object.keys(b);for(let t of m){let e=b[t],a=o.s.drawClass(x,e,h,r);s[a.id]=a,y.setNode(a.id,a),l.l.info("Org height: "+a.height)}let w=r.db.getRelations();w.forEach(function(t){l.l.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),y.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")});let k=r.db.getNotes();k.forEach(function(t){l.l.debug(`Adding note: ${JSON.stringify(t)}`);let e=o.s.drawNote(x,t,h,r);s[e.id]=e,y.setNode(e.id,e),t.class&&t.class in b&&y.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,n.bK)(y),y.nodes().forEach(function(t){void 0!==t&&void 0!==y.node(t)&&(l.l.debug("Node "+t+": "+JSON.stringify(y.node(t))),u.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(y.node(t).x-y.node(t).width/2)+","+(y.node(t).y-y.node(t).height/2)+" )"))}),y.edges().forEach(function(t){void 0!==t&&void 0!==y.edge(t)&&(l.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(y.edge(t))),o.s.drawEdge(x,y.edge(t),y.edge(t).relation,h,r))});let E=x.node().getBBox(),L=E.width+40,v=E.height+40;(0,l.i)(x,v,L,h.useMaxWidth);let N=`${E.x-20} ${E.y-20} ${L} ${v}`;l.l.debug(`viewBox ${N}`),x.attr("viewBox",N)}},styles:r.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}},5971:function(t,e,a){a.d(e,{p:function(){return l},s:function(){return p}});var r=a(9373),i=a(3090);let n=0,d=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},l=function(t){let e="",a="",r="",n="",d=t.substring(0,1),l=t.substring(t.length-1,t.length);d.match(/[#+~-]/)&&(n=d);let o=/[\s\w)~]/;l.match(o)||(a=s(l));let p=""===n?0:1,g=""===a?t.length:t.length-1;t=t.substring(p,g);let c=t.indexOf("("),h=t.indexOf(")"),f=c>1&&h>c&&h<=t.length;if(f){let d=t.substring(0,c).trim(),l=t.substring(c+1,h);if(e=n+d+"("+(0,i.x)(l.trim())+")",h<t.length){let n=t.substring(h+1,h+2);""!==a||n.match(o)?r=t.substring(h+1).trim():(a=s(n),r=t.substring(h+2).trim()),""!==r&&(":"===r.charAt(0)&&(r=r.substring(1).trim()),e+=r=" : "+(0,i.x)(r))}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:a}},o=function(t,e,a,r){let i=l(e),n=t.append("tspan").attr("x",r.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),a||n.attr("dy",r.textHeight)},s=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},p={getClassTitleString:d,drawClass:function(t,e,a,r){let n;i.l.debug("Rendering class ",e,a);let l=e.id,s={id:l,label:e.id,width:0,height:0},p=t.append("g").attr("id",r.db.lookUpDomId(l)).attr("class","classGroup");n=e.link?p.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):p.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let g=!0;e.annotations.forEach(function(t){let e=n.append("tspan").text("\xab"+t+"\xbb");g||e.attr("dy",a.textHeight),g=!1});let c=d(e),h=n.append("tspan").text(c).attr("class","title");g||h.attr("dy",a.textHeight);let f=n.node().getBBox().height,u=p.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin/2).attr("y2",a.padding+f+a.dividerMargin/2),x=p.append("text").attr("x",a.padding).attr("y",f+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");g=!0,e.members.forEach(function(t){o(x,t,g,a),g=!1});let y=x.node().getBBox(),b=p.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin+y.height).attr("y2",a.padding+f+a.dividerMargin+y.height),m=p.append("text").attr("x",a.padding).attr("y",f+2*a.dividerMargin+y.height+a.textHeight).attr("fill","white").attr("class","classText");g=!0,e.methods.forEach(function(t){o(m,t,g,a),g=!1});let w=p.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));let E=p.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*a.padding).attr("height",w.height+a.padding+.5*a.dividerMargin).attr("class",k),L=E.node().getBBox().width;return n.node().childNodes.forEach(function(t){t.setAttribute("x",(L-t.getBBox().width)/2)}),e.tooltip&&n.insert("title").text(e.tooltip),u.attr("x2",L),b.attr("x2",L),s.width=L,s.height=w.height+a.padding+.5*a.dividerMargin,s},drawEdge:function(t,e,a,d,l){let o,s,p,g,c,h;let f=function(t){switch(t){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(t=>!Number.isNaN(t.y));let u=e.points,x=(0,r.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(r.$0Z),y=t.append("path").attr("d",x(u)).attr("id","edge"+n).attr("class","relation"),b="";d.arrowMarkerAbsolute&&(b=(b=(b=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&y.attr("class","relation dashed-line"),10==a.relation.lineType&&y.attr("class","relation dotted-line"),"none"!==a.relation.type1&&y.attr("marker-start","url("+b+"#"+f(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&y.attr("marker-end","url("+b+"#"+f(a.relation.type2)+"End)");let m=e.points.length,w=i.u.calcLabelPosition(e.points);if(o=w.x,s=w.y,m%2!=0&&m>1){let t=i.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[m-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(r)),p=t.x,g=t.y,c=r.x,h=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),r=e.append("text").attr("class","label").attr("x",o).attr("y",s).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=r;let i=r.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-d.padding/2).attr("y",i.y-d.padding/2).attr("width",i.width+d.padding).attr("height",i.height+d.padding)}if(i.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type1").attr("x",p).attr("y",g).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){let e=t.append("g").attr("class","cardinality");e.append("text").attr("class","type2").attr("x",c).attr("y",h).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}n++},drawNote:function(t,e,a,r){i.l.debug("Rendering note ",e,a);let n=e.id,d={id:n,text:e.text,width:0,height:0},l=t.append("g").attr("id",n).attr("class","classGroup"),o=l.append("text").attr("y",a.textHeight+a.padding).attr("x",0),s=JSON.parse(`"${e.text}"`).split("\n");s.forEach(function(t){i.l.debug(`Adding line: ${t}`),o.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)});let p=l.node().getBBox(),g=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin),c=g.node().getBBox().width;return o.node().childNodes.forEach(function(t){t.setAttribute("x",(c-t.getBBox().width)/2)}),d.width=c,d.height=p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin,d},parseMember:l}}}]);