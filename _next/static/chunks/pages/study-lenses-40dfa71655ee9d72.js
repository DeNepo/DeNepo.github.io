(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{841:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/study-lenses",function(){return s(365)}])},9369:function(e,n,s){"use strict";var i=s(5893);s(7294);let t={project:{link:"https://github.com/denepo/denepo.github.io"},docsRepositoryBase:"https://github.com/denepo/denepo.github.io",footer:{text:"You can save any page as a PDF by opening it, ctr-p, then opening the document instead of printing it."},sidebar:{defaultMenuCollapseLevel:1},logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/denepo-logo.png",width:"50em",height:"50em"}),(0,i.jsx)("span",{style:{marginLeft:".5em",fontWeight:800},children:"De Nepo: Open Ed"})]}),search:{placeholder:"search this page"},primaryHue:{dark:310,light:252}};n.Z=t},365:function(e,n,s){"use strict";s.r(n);var i=s(5893),t=s(2673),r=s(2703),a=s(9369);s(9966);var o=s(1151);s(5675);let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/study-lenses.mdx",route:"/study-lenses",headings:[{depth:2,value:"Peel-Away Design",id:"peel-away-design"},{depth:2,value:"Accesible Authoring",id:"accesible-authoring"},{depth:2,value:"Implementations",id:"implementations"},{depth:3,value:"For the Browser",id:"for-the-browser"},{depth:3,value:"For VSCode",id:"for-vscode"}],timestamp:1698328635e3,pageMap:[{kind:"Meta",data:{index:"Hello","study-lenses":"Study Lenses","curriculum-design":"Curriculum Design","lesson-materials":{display:"hidden",title:"Lesson Materials"},"awesome-teaching":"Awesome Teaching","De Nepo on GitHub":{href:"https://github.com/DeNepo",newWindow:!0}}},{kind:"MdxPage",name:"awesome-teaching",route:"/awesome-teaching"},{kind:"Folder",name:"curriculum-design",route:"/curriculum-design",children:[{kind:"Meta",data:{"big-picture-diagrams":{display:"hidden",title:"Big Picture Diagrams"},"connections-are-concepts":{display:"hidden",title:"Connections Are Concepts"},"spiderweb-curriculum":{display:"hidden",title:"Spiderweb Curriculum"},"spiral-curriculum":{display:"hidden",title:"Spiral Curriculum"},prismm:"PRISMM","planning-documents":{display:"hidden",title:"Planning Documents"},"defining-task-classes":{display:"hidden",title:"Defining Task Classes"}}},{kind:"MdxPage",name:"big-picture-diagrams",route:"/curriculum-design/big-picture-diagrams"},{kind:"MdxPage",name:"connections-are-concepts",route:"/curriculum-design/connections-are-concepts"},{kind:"MdxPage",name:"defining-task-classes",route:"/curriculum-design/defining-task-classes"},{kind:"MdxPage",name:"planning-documents",route:"/curriculum-design/planning-documents"},{kind:"MdxPage",name:"prismm",route:"/curriculum-design/prismm"},{kind:"MdxPage",name:"spiderweb-curriculum",route:"/curriculum-design/spiderweb-curriculum"},{kind:"MdxPage",name:"spiral-curriculum",route:"/curriculum-design/spiral-curriculum"}]},{kind:"MdxPage",name:"curriculum-design",route:"/curriculum-design"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"lesson-materials",route:"/lesson-materials"},{kind:"MdxPage",name:"study-lenses",route:"/study-lenses"}],flexsearch:{codeblocks:!0},title:"Study Lenses"},pageNextRoute:"/study-lenses",nextraLayout:r.ZP,themeConfig:a.Z};function l(e){let n=Object.assign({blockquote:"blockquote",p:"p",a:"a",ol:"ol",li:"li",h2:"h2",em:"em",ul:"ul",strong:"strong",h3:"h3",code:"code",pre:"pre",span:"span"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Study code, not explanations."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Study Lenses is a design principle for learning environments that prioritizes ",(0,i.jsx)(n.a,{href:"./curriculum-design/prismm",children:"code comprehension and investigation"}),". The reasoning behind Study Lenses goes something like this:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Explicitly teach learners how to study and understand code."}),"\n",(0,i.jsx)(n.li,{children:"Provide tools that support free code investigation."}),"\n",(0,i.jsx)(n.li,{children:"Write level-appropriate programs for your learners to study."}),"\n",(0,i.jsx)(n.li,{children:"Learners explore the code freely, with your study suggestions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Watch this little guide before reading on, the rest of this page will make more sense once you've seen Study Lenses in action:"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)("video",{controls:!0,children:[(0,i.jsx)("source",{src:"/study-lenses-guide.mp4",type:"video/mp4"}),(0,i.jsx)("a",{href:"/study-lenses-guide.mp4",children:"Download the Guide"})]}),"\n",(0,i.jsx)(n.h2,{id:"peel-away-design",children:"Peel-Away Design"}),"\n",(0,i.jsxs)(n.p,{children:["Think if Study Lenses as training wheels one a bike, not as a tricycle. Study Lenses adds layers of support ",(0,i.jsx)(n.em,{children:"on top of"})," existing development environments. As learners progress they should be able to peel away these layers to reveal a full-fledged programming environment."]}),"\n",(0,i.jsx)(n.p,{children:"Lenses add news way of seeing, understand and explore a program. Lenses do not change the way your programming environment or runtime works. As an educator you can configure Study Lenses to suggest to suggest which lenses may be most helpful for a specific program, but learners are always free to ignore your suggestions and either use a lens of their choosing or ignore Study Lenses all together and simply run their code in its native runtime."}),"\n",(0,i.jsx)(n.h2,{id:"accesible-authoring",children:"Accesible Authoring"}),"\n",(0,i.jsx)(n.p,{children:"Three of the most important design constraints behind Study Lenses work together to ensure learners and educators can easily adapt and own their curriuclum:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All code should be content:"})," A learner should be able to open any file of JavaScript code and use Study Lenses to understand it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rely only on web-standard syntax & languages:"})," Programs written and configured to be used with Study Lenses should not rely on any non-standard syntax, every should be valid code or data that can be reused elsewhere."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content curation should use standard develpoment workflows:"})," All Study Lenses content should be hosted, developed, versioned, and distributed as a standard code base. A learner or educator with experience using Git, GitHub and an IDE should already have all the technical skills necessary to curate their own curriculum."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementations",children:"Implementations"}),"\n",(0,i.jsxs)(n.p,{children:["Study Lenses is an idea not an implementation, and because each programming language and each development environment is different, there can never be ",(0,i.jsx)(n.em,{children:"one"})," Study Lenses. You would need to design and build one implementation for each setting. Study Lenses could be implemented as an IDE plugin, as features in an existing learning environment, or as a stand-alone application."]}),"\n",(0,i.jsx)(n.h3,{id:"for-the-browser",children:"For the Browser"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["source: ",(0,i.jsx)(n.a,{href:"https://github.com/DeNepo/study-lenses",children:"DeNepo/study-lenses"})," ",(0,i.jsx)("br",{}),"\ninstall: ",(0,i.jsx)(n.code,{children:"npm i -g study-lenses"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['This implementation is designed for learning JavaScript/HTML/CSS offline, so it is built around a localhost web server and opens code to study in a new browser tab. Learners can explore their code in different lenses by changing the page\'s URL queries (see the demo video at the top of this page). The "home base" lens (called ',(0,i.jsx)(n.code,{children:"study"}),") is simply a code editor; because this implementation was designed for teaching web development, the learner is expected to practice using their browser's devtools to run, trace and debug their JavaScript. This implementation is designed around a plugin system, so developers are not limited to the lenses that ship with Study Lenses."]}),"\n",(0,i.jsxs)(n.p,{children:["You can try the ",(0,i.jsx)(n.a,{href:"https://study-lenses-demo.onrender.com/?--defaults",children:"online Study Lenses demo"})," (this may take a minute to start up if no one has used it in a while). Besides showcasing the Study Lenses learning environment, it also shows different ways you can organize programs for learners to explore."]}),"\n",(0,i.jsxs)(n.p,{children:["Or you can clone the ",(0,i.jsx)(n.a,{href:"https://github.com/colevandersWands/study-lenses-demo",children:"demo repository"})," and try the demo locally to save your changes."]}),"\n",(0,i.jsx)(n.p,{children:"You can also install Study Lenses as a global NPM module and use it to open any folder of JavaScript/HTML/CSS, adding layers of study to any existing code:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$ npm install -g study-lenses"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$ cd <a-folder-of-js-html-css>"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$ study"})})]})}),"\n",(0,i.jsx)(n.h3,{id:"for-vscode",children:"For VSCode"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["source: ",(0,i.jsx)(n.a,{href:"https://github.com/yoshimalaise/Explorotron",children:"yoshimalaise/Explorotron"})," ",(0,i.jsx)("br",{}),"\ninstall: ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=YoshiMalaise.explorotron&ssr=false#qna",children:"VSCode Marketplace"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The extension allows learners to add new perspectives and layers of interactivity on top of existing JavaScript Code. Every lens focuses on a specific aspect of the code that has to be studied. Lenses follow CER best practices such as PRIMM, scaffolding and expertise reversal. For more information on the theory behind the extension we suggest reading our papers on Computing Education [",(0,i.jsx)(n.a,{href:"https://cris.vub.be/ws/portalfiles/portal/94803453/malaise_CSEDU2023.pdf",children:"CSEDU"}),", ",(0,i.jsx)(n.a,{href:"https://wise.vub.ac.be/publication/explorotron-ide-extension-guided-and-independent-code-exploration-and-learning",children:"Koli Calling"}),"]."]})]})}n.default=(0,t.j)(d)}},function(e){e.O(0,[774,555,888,179],function(){return e(e.s=841)}),_N_E=e.O()}]);