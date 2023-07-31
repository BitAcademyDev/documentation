"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),k=n,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Tracks",sidebar_position:7},i="Tracks",l={unversionedId:"tracks",id:"tracks",title:"Tracks",description:"|                       |                        |",source:"@site/docs/tracks.md",sourceDirName:".",slug:"/tracks",permalink:"/docs/tracks",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Tracks",sidebar_position:7},sidebar:"sidebar",previous:{title:"1-on-1's",permalink:"/docs/on-1/"},next:{title:"Dashboard",permalink:"/docs/coach-dashboard/dashboard"}},c={},s=[{value:"Description",id:"description",level:3},{value:"Orbiting track moons",id:"orbiting-track-moons",level:2},{value:"Selecting a track",id:"selecting-a-track",level:2},{value:"Certificate",id:"certificate",level:2},{value:"Role specific details",id:"role-specific-details",level:2},{value:"Coach",id:"coach",level:3},{value:"Editor",id:"editor",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tracks"},"Tracks"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Optional")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Default")),(0,n.kt)("td",{parentName:"tr",align:null},"On")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Feature Toggle")),(0,n.kt)("td",{parentName:"tr",align:null},"Tracks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Can be enabled by")),(0,n.kt)("td",{parentName:"tr",align:null},"Location Administrator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Settings")),(0,n.kt)("td",{parentName:"tr",align:null},"Off, On")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"A track is a sequence of modules that can be started at the first module, and when the entire sequence is completed, the\ntrack is also completed."),(0,n.kt)("p",null,"Tracks are used to emphasize a certain course or education."),(0,n.kt)("p",null,"For example, in this universe you need to first complete ",(0,n.kt)("inlineCode",{parentName:"p"},"PHP - Beginner")," to start the track. After this you need to\ncomplete the modules: ",(0,n.kt)("inlineCode",{parentName:"p"},"HTML / CSS - Beginner"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HTML / CSS - Advanced"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"JavaScript - Beginner"),"\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"JavaScript - Advanced")," to complete the track."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Frontend track",src:a(7694).Z,width:"740",height:"472"})),(0,n.kt)("h2",{id:"orbiting-track-moons"},"Orbiting track moons"),(0,n.kt)("p",null,"In order to indicate where a track starts in the universe, there are moons orbiting around the module where the track can be started."),(0,n.kt)("p",null,"For example, from this module ",(0,n.kt)("inlineCode",{parentName:"p"},"PHP - Beginner")," you can start 3 tracks."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Module with track moons",src:a(6437).Z,width:"326",height:"356"})),(0,n.kt)("p",null,"You can click on one of the moons in order to see what tracks can be started from that module."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tracks that can be started from module",src:a(4699).Z,width:"1036",height:"975"})),(0,n.kt)("h2",{id:"selecting-a-track"},"Selecting a track"),(0,n.kt)("p",null,"Once you have completed a module where a track can be started, you will be prompted to choose a track (You can always change this later).\nAfter choosing a track, the required modules will glow in yellow."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Picking a track",src:a(5589).Z,width:"1036",height:"975"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Good to know:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can always change the track you are working on, by selecting the track using the drop down menu in the top right of the universe.")),(0,n.kt)("h2",{id:"certificate"},"Certificate"),(0,n.kt)("p",null,"Once you have completed a track, you will be prompted to select a new one.\nHere you can also download a certificate for the previously completed track.\nYou can also download the certificate by opening the user menu in the top right, en selecting 'Certificates'."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User menu certificate",src:a(1451).Z,width:"224",height:"319"})),(0,n.kt)("h2",{id:"role-specific-details"},"Role specific details"),(0,n.kt)("h3",{id:"coach"},"Coach"),(0,n.kt)("p",null,"As a coach you can see the track that the student is currently working on. You can find this by going to the student, and going to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Progress")," tab.\nHere you will see the universe that the student sees, this will also display the track."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Student currently active track",src:a(4330).Z,width:"374",height:"591"})),(0,n.kt)("h3",{id:"editor"},"Editor"),(0,n.kt)("p",null,"As an editor you have the ability to create and edit tracks."),(0,n.kt)("div",{class:"flex space-between"},"To start the track editor, you first need to enable edit mode. After this you need to select/create a track from the dropdown menu in the top right. This will show a new universe toolbar on the left called 'Track', here you will find all the controls for editing a track. To add modules to a track you need to select the pencil, and click on the required modules, once you are satisfied you can press the glowing save button to save the track.",(0,n.kt)("img",{alt:"Track pencil toolbar",className:"margin-left-small",src:"/img/docs/tracks/tools-track-edit-track.png"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Track editor",src:a(6246).Z,width:"600",height:"288"})),(0,n.kt)("div",{className:"flex space-between"},"To edit the start module, name or image of the track, you can press the pencil with lines. This will open a dialog where you can change the track settings and details.",(0,n.kt)("img",{alt:"Track pencil with lines toolbar",className:"margin-left-small",src:"/img/docs/tracks/tools-track-edit-details.png"})),(0,n.kt)("div",{className:"flex space-between margin-top-small"},"To delete a track, you can press the delete icon. This will ask you if you are certain you want to delete it.",(0,n.kt)("img",{alt:"Track pencil with lines toolbar",className:"margin-left-small",src:"/img/docs/tracks/tools-track-delete.png"})))}u.isMDXComponent=!0},6437:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/module-track-moons-d6b5dbf03af7ba289b52568f804d82a5.png"},4330:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/student-track-coach-showcase-85576f9e195eb977717901ebf447d5df.png"},6246:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/track-editor-61d54ce19532a989a1c902c345763fad.gif"},5589:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/track-picker-dialog-2-36af8b276550f8c60b49640142817932.png"},4699:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/track-picker-dialog-0453b4fe11e8706b3b97008064183a4c.png"},7694:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/track-2910e1dbaf75ae07767b2d120c675c90.png"},1451:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-menu-certificate-d545daa0192c3763b4a26c137f7081d9.png"}}]);