"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[400],{3905:(e,i,n)=>{n.d(i,{Zo:()=>c,kt:()=>h});var t=n(7294);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),d=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},c=function(e){var i=d(e.components);return t.createElement(s.Provider,{value:i},e.children)},p="mdxType",I={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||I[u]||o;return n?t.createElement(h,a(a({ref:i},c),{},{components:n})):t.createElement(h,a({ref:i},c))}));function h(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3706:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>I,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(7462),r=(n(7294),n(3905));const o={title:"Een exercise maken",sidebar_position:2},a=void 0,l={unversionedId:"exercises/flow",id:"exercises/flow",title:"Een exercise maken",description:"Soorten exercises",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/exercises/flow.md",sourceDirName:"exercises",slug:"/exercises/flow",permalink:"/nl/docs/exercises/flow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Een exercise maken",sidebar_position:2},sidebar:"sidebar",previous:{title:"Exercise",permalink:"/nl/docs/exercises/introduction"},next:{title:"Reviews",permalink:"/nl/docs/exercises/reviews"}},s={},d=[{value:"Soorten exercises",id:"soorten-exercises",level:2},{value:"Een exercise inleveren",id:"een-exercise-inleveren",level:2},{value:"File upload",id:"file-upload",level:3},{value:"Git",id:"git",level:3},{value:"Inleveren van de exercise",id:"inleveren-van-de-exercise",level:4},{value:"Exercise flow",id:"exercise-flow",level:2},{value:"Inleveren van de exercise",id:"inleveren-van-de-exercise-1",level:4},{value:"Review",id:"review",level:4},{value:"Exercise heropend",id:"exercise-heropend",level:4},{value:"Vooruit werken",id:"vooruit-werken",level:2}],c={toc:d},p="wrapper";function I(e){let{components:i,...o}=e;return(0,r.kt)(p,(0,t.Z)({},c,o,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"soorten-exercises"},"Soorten exercises"),(0,r.kt)("p",null,"We hebben 3 verschillende soorten exercises:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction"},"Theorie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction"},"Praktijk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"introduction#self-diagnostic"},"Self diagnostic"))),(0,r.kt)("p",null,"Deze pagina is alleen van toepassing op de ",(0,r.kt)("a",{parentName:"p",href:"introduction"},"praktijk")," oefeningen, aangezien dit niet van toepassing is op\nde ",(0,r.kt)("a",{parentName:"p",href:"introduction"},"theorie")," oefeningen en ",(0,r.kt)("a",{parentName:"p",href:"introduction#self-diagnostic"},"Self diagnostics"),"."),(0,r.kt)("h2",{id:"een-exercise-inleveren"},"Een exercise inleveren"),(0,r.kt)("p",null,"Het inleveren van een exercise kan op een van de volgende manieren: ",(0,r.kt)("a",{parentName:"p",href:"#file-upload"},"file upload")," of ",(0,r.kt)("a",{parentName:"p",href:"#git"},"Git"),". Welke\nvan\ndeze wordt gebruikt, wordt gedefinieerd in de oefening."),(0,r.kt)("h3",{id:"file-upload"},"File upload"),(0,r.kt)("p",null,"Bij het inleveren van een opgave via file upload wordt er gevraagd om de benodigde bestanden aan te leveren."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Zorg ervoor dat de bestandsnamen van de vereiste bestanden en de bestanden die u aanlevert hetzelfde zijn."),(0,r.kt)("p",{parentName:"admonition"},"Ook hoofdletters en niet-hoofdletters, spaties, onderstrepingstekens, regels en bestandsextensies."),(0,r.kt)("p",{parentName:"admonition"},"Als het gewenste bestand niet is gevonden, wordt het weergegeven onder het gedeelte 'Extra bestanden'. Als dit gebeurt,\ncontroleer dan nogmaals\nde bestandsnaam en bestandsextensie en upload het opnieuw.")),(0,r.kt)("admonition",{title:"Let op",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Voor Windows worden bestandsextensies niet standaard weergegeven. Maar deze kun je wel handmatig\n",(0,r.kt)("a",{parentName:"p",href:"https://www.google.com/search?channel=fs&client=ubuntu-sn&q=windows+enable+file+extensions"},"aanzetten"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"File upload zonder bestanden",src:n(5818).Z,width:"623",height:"571"})),(0,r.kt)("h3",{id:"git"},"Git"),(0,r.kt)("p",null,"Deze sectie is slechts een kleine verwijzing naar het gebruik van ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". Wil je hier meer\ninformatie over,\noverweeg om de Git-module in het universum te bekijken."),(0,r.kt)("p",null,"Als je ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," gebruikt, moet je eerst ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," op je systeem hebben\nge\xefnstalleerd.\nHierna kunt u de repository klonen. De stappen voor het klonen staan bovenaan\nde oefening met de titel 'Hoe begin ik aan deze oefening?'."),(0,r.kt)("p",null,"Kortom, u kloont de repository van de oefening door de kloon-URL te kopi\xebren en de volgende opdracht uit te voeren in\neen\ndirectory waar u het wilt klonen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone <REPLACE_THIS_WITH_YOUR_CLONE_URL>\n")),(0,r.kt)("p",null,"Na het klonen van de repository heb je een nieuwe map met de exercise naam en kun je beginnen met het maken van de\nexercise."),(0,r.kt)("h4",{id:"inleveren-van-de-exercise"},"Inleveren van de exercise"),(0,r.kt)("p",null,"Als je klaar bent en de exercise in wilt leveren, moet je eerst alle gewijzigde bestanden stagen, hierna kun je de\ngestagede wijzigingen committen, als laatste push je de commit. Jarvis zal het commando laten zien als dit\ninstelling is ingeschakeld voor uw locatie."),(0,r.kt)("p",null,"Hierna kun je op de inleverknop op Jarvis drukken."),(0,r.kt)("h2",{id:"exercise-flow"},"Exercise flow"),(0,r.kt)("p",null,"Dit is de flow die een exercise doorloopt om te worden voltooid. Onder het flow schema staat een beschrijving van\nelke\nstap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exercise flow schema",src:n(778).Z,width:"453",height:"543"})),(0,r.kt)("h4",{id:"inleveren-van-de-exercise-1"},"Inleveren van de exercise"),(0,r.kt)("p",null,"Als er een review nodig is bij de oefening, wordt daar een review voor gemaakt die zowel een student of een coach kan\noppakken."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goed om te weten:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soms is een review gemarkeerd als een review die alleen voor de coach is, in dit geval kan het alleen door een coach\nworden gereviewd.")),(0,r.kt)("h4",{id:"review"},"Review"),(0,r.kt)("p",null,"Als een ",(0,r.kt)("a",{parentName:"p",href:"reviews"},"review")," wordt geaccepteerd dan wordt de exercise voltooid, als hij geweigerd wordt, wordt de exercise\nheropend."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exercise wacht op review",src:n(3140).Z,width:"1108",height:"79"})),(0,r.kt)("h4",{id:"exercise-heropend"},"Exercise heropend"),(0,r.kt)("p",null,"Als de exercise is heropend vanwege een ",(0,r.kt)("a",{parentName:"p",href:"reviews"},"geweigerde review")," of een ",(0,r.kt)("a",{parentName:"p",href:"reviews#review-samples"},"geweigerde review steekproef"),", worden de problemen van de reviewer boven de exercise\nweergegeven.\nU kunt deze problemen dan oplossen en de exercise opnieuw inleveren."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exercise open voor verbeteringen",src:n(1613).Z,width:"1108",height:"79"})),(0,r.kt)("h2",{id:"vooruit-werken"},"Vooruit werken"),(0,r.kt)("p",null,"Je kunt standaard 7 exercises in een module in review hebben staan. De beheerder van de module kan dit echter wel\nverander."),(0,r.kt)("p",null,"Als je bijvoorbeeld net een exercise hebt ",(0,r.kt)("a",{parentName:"p",href:"#inleveren-van-de-exercise"},"ingeleverd"),", wordt deze gemarkeerd\nals '",(0,r.kt)("a",{parentName:"p",href:"#review"},"Wachten op review"),"'. Je kunt hierna nog door naar de volgende exercise en deze ook inleveren. Standaard kan je dit maximaal 7 keer doen, tenzij de\nbeheerder van de module dit heeft gewijzigd."))}I.isMDXComponent=!0},778:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/exercise-flow-nl.drawio-e9f59d5f63094fcf8cd88d52f3148168.png"},5818:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/file-upload-no-files-22806962b9bf423e3953279b1f2619a9.png"},1613:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/open-for-improvements-5c90b4dac6a4a7b09086d18075efa05b.png"},3140:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABFQAAABPCAYAAADFo5EbAAAd5UlEQVR4Xu3dB1ca29sF8P+3fL9OAE2TAUQsqNgQUAS7Biv2LmgUKyXGGKM3MYlJrhqF/c4AUkYwkhjiDfu31rNWgGHOFF3Xs++Zc/4HIiIiIiIiIiLKyf/kbxARERERERER0e0YqBARERERERER5YiBChERERERERFRjm4EKldXVzg9PcWHDx9YLBaLxWKxWCwWi8VisQqypGxEykiySQtUpA2lL52dnaW+TURERERERERUUKRsRMpIsoUqaYGKlL5IX/B6vSgqKsKjR49SPyYiIiIiIiIiKhhSRiJlJZmkBSpS8iK5DlMYqBARERERERFRIbvOSuQyBirXYQoDFSIiIiIiIiIqZAxUiIiIiIiIiIhyxECFiIiIiIiIiChHDFSIiIiIiIiIiHLEQIWIiIiIiIiIKEcMVIiIiIiIiIiIcsRAhYiIiIiIiIgoRwxUiIiIiIiIiIhyxECFiIiIiIiIiChHDFSIiIiIiIiIiHLEQIWIiIiIiIiIKEcMVIiIiIiIiIiIcsRAhYiIiIiIiIgoRwxUiIiIiIiIiIhyVMCByncEerVQqKoxcRxJef8rVlueQvG8Db5/U96+F2G8G6uEStuPV2H5Z/9FYbwdr8aT4lL07JzLP/zPCL8ZQpky+bOtavbgW9oWEZzM1EKV+PlXombqPVJ/apKusNX+BI9UFnjv/eeHiIiIiOh2FxcXOD4+xt7eHl69esViFUxJP/PSz770O5AvBRyoiN3k9zMwFSmg7Q3g+/V7xxMwqpQoHzkQu8b37aEGKmFcfv+Oq8wJwS3CeD1QCqXiGdp8Z/IPf074Et+/XyKvl+ffd9hZX8Payxk4ShUZAhXxP0zvA1hfE7dZ6kGlkoEKERERET08UkeSQQqr0Ev6HchXqFLQgQpwhs12NRRPrPB+kV5fwN+jgfKJBZ7TzN3lX/MAA5XwW4xVFeOR4jm6dn8mQrrE+dn3LOFCbiIni2h6qsCjIhtW/8SAl8g/mDAqMwYqCV+XYVYxUCEiIiKih0f6v/PyziWLVYgl/S7kQ4EHKkD40I1KpQrVE8cIn3pgeaJEaX8oMWIlus2pH+N2IzSPVSh6qoOpcx5vEgMyYh1opX4Q+9chyb9eWDJ2urMFKhF8nKtLPlJS1IKVd2vorRVQrChC6/r10Vzhw8YgLOUlKFYVo6S8GQPr73GZuqsfiuBLYAJ2o4DHKhWeaAQIpmFs7r3Bh8Q5XeCdtxcN+mcoEttRV1gxvHmSHLETPsRohTL586CswvhR+plebbShSKlH3+Is2irE/RQ9Q3nrDPbTgpIzvJnvQK32KVSqx1ALalT1vsSr1//gW+a0Ik3kaBxVxTWY/hBB5NM86lUK6Af3xat8gfXWx9C59mIjXcKn8I+3okp4DJV4HPqGHiwfZkhs7iVQCSPUr4HiiQObud0YIiIiIqJfwtEpLFaspN+FfCj4QAX4glXbUyh1vZgfroKquB6zJyld5atDjFcXo0jfgjGvD+tLg2hUK/HMsoyP0c1yCVQi+Bqch3t6J/7dpO8fXmHDt47pVrEzrqqDxVqBekcPXrwYhPcwtuOL0AuUqUpQ71rE5u4WPAN1eK4qRX8wh+FMX7ywPlXB0LWK/eNjvPa0Q68sgXMjOZziq88JQfkMtX3zWNtYxZSzAsUqAwb2roOdcxwHNuDz+bDSb4QyW6CieAxD2xS29t/iladDPHYlDMMHicd5znc6xXa0sC+8wtHxG6z3V6HoiRlLnzJHFTecrcJWrMWLvTCugn3QPi7GU+sKziInmDEVo37uk3jFr3A4Xo3ip0Z0z65jZ2cVbosGKnUb1r/K9ncvgUoEn+brUVzpxruHMgqJiIiIiAqCvFPJYhVy5QMDFdHl6wHolQooFAoIndtIHbtw6e+BWqlBTyA5ZuXbihWPlVUYi4YIuQQqPxLG29FyKBUatG/Ku/T/4mXLExQ1LSH6dJIkcozxKiWetPnSjvk2V/5ulCj1GLw+2KsQ+gQlSgdex4KOyEfM1augqp9DIte4eoOhMiWeZmjnTLwWqqyBig6u1/F2Ih8wXauEqmEen6ObhnEwbIDyaQe240Nfwu/GUKl8ivbrN34k/Ar92sew+y5wumhGRZsDtRXDOPi+B1fpM7RvXUo3ED1qFYwTx8l78WUJTSoVGhY+p9+fewlUxHPf7YK29eWNa0VERERE9DvJO5QsViFXPjBQkUQ+YqGxOP7oSuqwAml1FxNUKhNmUkathF+7oFMUwR59FOc3BCqZ5hAJx0KNR8oiFBcXJ0qleARlzRTe37GhyPtp1BYVo27iEOeRCM72R1EtvjYvncaO9WoXXc8VeN61mzIp7zd4mlVQVtwcdXFroKIsw9Cb6y98xZJZlXasX71SMFWBgdA3hCMXOJ5twlOVUbbq0i3iI1HqZt8j2F+GluVVdAitePnFh7YnFRg9DIubzKBWJV6jouQ1Ky4ugvKRAqUD0uNBqfu7n0BFmuy4ffRNfifWJSIiIqKCJ+9QsliFXPnAQCUqPu/FYwc20wZH/KlApRVrqZO4RD+KBSqPbUs4Fu+HdE+u6+TzWQ6d90scLbVCp3oEhVIJheIpKto9OL6e7yOPgQrCJ1jvKkfxIwWU0gih4lLYZt7kMLLjEhuOp9APbGKhuQJDr48wWVuFkc0Z1D1uhuebNDBmGrUqFeonD9Ku2YcPJ/j0TTbJyT0FKkREREREf4K8Q8liFXLlAwOVqGyBym2P/FQmHvnxd5dA8awD2/FNIp/n0fBTne5bAhWxi79qewxlxQjeJmeHxXv/No5ubHuLsyCGahswGPiAzx8/4vRcdsL3+cjPDwKVy7fTaKrtxvo/n/Hx5DP+zXkS1zAOhgx4ah9Aj8EK77fv2HAIaHH1okzTi6B0ape76CpRQtPjR2KmmcgpQltvcGOh53sJVCL48sYH79oePt3xySUiIiIiovsg71CyWIVc+cBAJSp7oCJNSjtmLIpOSuv2rGNtcSA2KW3z9aS0wJcVK54oilHumMDS8gxcjmpoFLd1um9Kn5S2Bq6XPvh8G9g6+JLYx7m/F6XKIuhtI1hc8WLW1QSt6gmal+OP69xB+HAUFSotrCOzWFxcxNLSMlZ8ARx9Sw49+brugDo6Ke0cXq6vYNJRjmJVGVyvskxKq9DBMbsePd7g+1hs8eNAJYLP8w0oKmnAi5kF8ViWxGvnxdrOW5zmEKx8WWpCcVk5ystceB2O4N2YEWXlBjxJtHOFg9Eq8Vg0aBqYg9e7gJGWMhQXVWPy+tGisyP4N8TrvT4HZ6kCyqo+eMVz822E8CF+yt8/hMT7I77n6UWVUgl9+xzWxdcb/qP0YOYqgF61QvwdeYw2Xw6TBRMRERER/SJ5h5LFKuTKBwYqUbcEKtKnn3cx1loF4bEKquiyyXPYTy6KE310Za23FkKxCk/0FkxszqD51lEMcrJlk1PqWedOyqM3l/jgG4K1Qo1isVP/WDDCPhHEl7s1EhM5gcdaAoWsHcVzMxYSz+Jc4NCTXDa5pMKKoduWTU5U8px/HKhIb22hUyeFD+n7eVIzjoM7hirSBLDPFY+gMi9BWrTnYr0VxeI+iu3ryaWvw5/hH7ejWvMEKmXsfFKXgQ6/GUKZUn4uYqnqMBtNzaRHv2oz3h+lYRgHadPu/IO5hmdQPamCO3HuRERERES/n7xDyWIVcuUDA5WCEsE/M3V4Vj+Lk0RfP4KL42nUF6lgmjm5YwB0DyKnWGlRo3L4AInsJHKJj54WPEsLYoiIiIiI6C7kHUoWq5ArHx5YoHKO/QkbrO69m/NbRJ1hz22FbWL/xlwedBdX2O16DqW2FXOBtzg6OsLRu31sz7RCpyxB+1Yer2r4AMMGJZ43jWH7zbvosbw7CGCpsxxFj5uxfJq3aIeIiIiI6K8g71DmVEEPuisF1PSvIpT2WRCe7koIDcPYCGX43q/W5ggaBQF1Az5Zu5kqiDmHHkKNCy9/x7Gw7lT+hU5UarSo7vUgmOHzh1L58IACFSlMqcczhbj/IiPGD2+OUAgfjsFYJH6ueIZ6hio/JfxxC8Mt1dA9L4ZSoYCy+Bm0VWb0zL/OPhHrbxHB1+AknKYylDxWQaFQouipgPKGDkwGPuewahERERH9GRF8WnuBVpsNtoYyPNVUwyr92z6N19f/IY+cYsmshtUrPZgrE36NQUMZBhIbpxC/t9DcAm/qI9bZ3NbGbTK1cbEBp2DCdOL55J8UPsCI2YVXGU7t3togykDeocypQi/hqhVQ0bUs6yQHMe8sg2AZx678O/dRDFT+c+WfsUOvVsPQsYBAhs8fSuXDAwlUUsIUlR4d6x+zdKjD+LjeAb2KoQoRERHRQxF+50a1Yz35GG+K8MUZLjL/YYfL8/OM38kYdtzitjayythGBN/PLlLmr/tJV3sYqM8SqNxXG0QZyDuUudUmRhoF6B1zskAlgOlWLXT22d/Tec4lUAltwd2sZaDyxyuEwK4fgQd+D/LhAQQqqSNTytDp+5QlTLkWxidfJ8o4UoWIiIjoQcgUqHzbHYOzzY5GQ0XaKJTwwTw6HW1oa2tBtbYZy9cDS8IneNlVh5omO7pcbnTU2uJhRwQna31oaXGi3dmG1rZBbMSXWszWxlWgF9XWQYyPDqCrpQWurfiKiFnbuMTrmXbxmJpRoevAdmracb6P2XYLrK122KydWHwXO8vIpw0M2FvhcLTC3NyDl9EJ6sJ4t9QNR1sjDCVlaGwTz9PRg+Uj6bPsbUROtzHUaoFdvC62Vpd4frf/NUyUjbxDmVv5MWkVoGmZQiC4hM5yNYTqPqwEdzHWrIGhYzEZtIS2sThgh6lcB0EQoK9sQufEWsbAZWd5EPa6cujE7bSGGrQMLmMndZvrQKV/CkM2o7idBmU1drhfBpLbBOfgKFOjpKTkRqkrurAcTNlfcBNz/TbUGLTisZWistEJt9efflzxNk09bvSbKzO3mUsF1jHVbYaxTCO2qUdVUwfGVtPbDK25UCu2aR6cgctihF6jgb7ahoHl3Zv7+1GlXQ8Bxp4FLLosqNIJ8XuWsu3OMobsJpRLn+nKYbIPYmk7lPw8sIAOg4BS+wz8iTZ2MG6RgqsXKcFVEPPtBqgT115A0+jWzWMTy7/qRntjJUrj99zWN4uNlGPaHG2CprILHvE9/6QNGnUp7LPitQ/Ow2nQwT7zk/dBVvnwhwOV1DDFgK6NH4Up18L4tNEFA0MVIiIioj8uU6AS/wShF/UYzPRYj7QCoNWaCFSkEKSm148L6UX4GBOmeNgR+YwFcxPm4iEKLs5xnva0zM02pH3VuvZio0D+9aKlcQYnkVvauBY5wnh9Z0rYEcHxZBMca/EHo78d4eAkvo7g+Qk+fI0dyIXPibqxd8m/Y8Ovs49QudHGBba6GjC8H7t64UM3Gtp9/NuWfoq8Q5lbBTHbVgrB7Mb25iiaxM6woLVhcncDww0aVPetJAKVgEf8XTKY4Bwcx8zMBFwtlRCEGvSvpnTUxQr5RmAWO/L6una4RkfhctZBL5SJHeaUECEabqhRVm1Bu8sN94ADNTo1hPpBrF935kNb8M5OYWpK7KjXCFBXtGJoUnot1txqSkATxMqLWmh0NXAMTmJ2dhx9ZgOEshZMbqWca7zN0hoHhuc88M4PwmKQtXnn8mOhUzx/bTXsrnFMTQyh3SReR4MdM9vJ7WKBihqGhi64573wLrrhrNFAbXBizi/f5w/q+nqMd8Ek3qdKsxmmmma0dXSiyzWLzcR182HErIOmqgWu8VnMTrrQUiVA1ziccp4BLLRL18iBuUD8Pf8UWnTy+XRC2PbORq/55LAdlUKWQGV7Cq0GAQZzL9wzs5geFu+nViPuy5v4+QnOtUGva8VMQLxffdXQanSxEUq742jWGNHrDd7c709UPvzBQCU9TOne/JzjCjNhfN7sZqhCRERE9IfdR6DyzWNFw/WKg7LHcc7fejHY6YSz3Yn23hmE4kFGzM02rgJ9qB8+iAUcV9vorB/HUeT2NqJuhB1X2Oqozrj6YPjjNsb6etD/woX+lioYr9uLfphDoBL5B5M1ejR29aCnR6xuO8ztnmgARJQreYcytwpiuasiFiosdKCithnm8mr0eFbwQuz41w+mP5ITDCQ7vaF1V7Rjb3Zvp+1P6iwL2maMJYKFHXgXPNhOHUERHy2S7LwHsdhhgFpjw+SNoGEbbrOQ/ZGfwBycYme+5sXL5LFuxcKhxpGN5HvxNmtda4k2PV2VEDK2+YPanYBVK6C6NxkYhNYHUCdrMzFCxZ0MIfyzbdCr9WiTRmfI93uX8k/CKpRAMLmweh2GpFTQ2wujUIHOxeT+/dOt0AnV6FtN3r/AnBMGoRwdi7H3osclbbOSOdiQzk+63zcDlRB8Qw0QSlsxnbiO0v0sh2Box0L8vodW+1GjacTwhh9TLRWw2c0wOObgl66R1gx3ShD1K5UPfzZQGf+VQCWSHqiMM1AhIiIi+hPuI1BJGz0ihQyJ0SMX+HB0gvi4EHzz2tA4Gw9Fom62kS1Qyd5GnDzskEaoTDTCsRbf6OIIe4fSv8N4PWBEx1bsqK52umGSBSqDdw1UoiNUmjFxHN/44j0O/uFftfRz5B3K3CqE1f4aCDV9mB1qRJndjaEmHSzuOXRXamB27yS3DW5gtt+OhuoKGPR6lOo0EEoENA6nhBav/JiwClDHH+242V68bsyhEsLLF+JxCGLHeke+/e2BSsgnBRkl4nc10GiuS9y+RJ0+2W5Obd5eQU8PqsR9WcZTRt0EZmDXqmFoX0iGLPFApXksuV1wpQ/V0eBl88Z+71TRQEVAVXfm1XZ2x5qj5y4kroVY4vYlJbrYIzaJ/czBYbjeTwALHQYIxl54s9y37IFKbJSTWi2ktSkIapSkXtvdcVi0RvR4vOg3NcA13gVj41A0yDMYnJjP0m6ulQ9/MFCRpIcqXRt3Xd0ljM+pj/wwTCEiIiL6YzIFKt/84+hwOtBkKEG5WRpZsox3aX/opQcqafObDI4l5zeJnMI/1o4Wezs6Opxotbvgu55DJUsb2QKVrG2IR74/2wmn04LKklI0OJzonNmLhTjn+5hut8Bmt8NmcWLmTeyvzvO9SXH7fgy7xzAx2QdLnROe4+uY5wt8PWZYne1wtvfBE59DJVsbkc/bGG6ziecmzdPSjun9s/h+iHIj71DmViFsDDdAqOxEv8MAk2tV7FhXoKrzBdoMWrROX3fAY6MQNIIRjnEP1jc2sLHcF+1g//FAJT4ypMElHtf6ekr54NtOCRByavP2Cnq6fz5Q8d5PoGJMGR2TWtFARahG11zqtRDL58NW2kgcP2bbysTr2o/VQGz5bGNP5n1K9aNARTC0YXJN3uYm/Nf3LLiIDkMp7FOTsFe0YXbDDXO5E9NuC7QmF9Yy3NufqXz4w4GKJDVU+YlJaRmmEBEREf0HSYGKDcvx6UmI6NfJO5S5ln/cAkFvRrNJD/uMH5sjTdA2NqNJa0D7wvXjHwHM2nUQUiaDvX7kJz1QST7y407MXxLA6uwMVndT2s0p3Ni5NVB5FZhFm16AwTmXnGA1tImFGU/6ks85tfmDyvGRn4ah5KNTOxNW6H75kZ/sgUos7NHBOp7yKNbuMmYWN1PuU6xij/nUwTXdhxqhCt2ezI/7SJU9UAnBN1gnXscGDPmS8+n4V2Yx50vZX8iHwTotGrs6YapzYT2wiM7KRnR1mqCzTaZMjvtrlQ8PIFCRpIQquSybzDCFiIiI6D8l8n4VL6S5UJxtMNsmcJD5jz4i+gnyDmWuFZi1R1e80Wpr4XoZQnCxAwat9JiIET2JiULj4YPGhN7FDexsrWKyS5psVkB1+zi8W8mOtDQpbZNODb3JAdfIKAa6mmAQO/jmkZT5WHIKN/yYbpXCnGyT0gbg6ZO+a0BT1xDc7mH0WKvE44+dT2I/ObX5o/JjoeN6UtoxTI0PwhmflHY6w6S05aZWdA644R7sRINBDbXBgdlc521Jm5RWDYPNhUnpWkwvYD11X6F1DDfqoNbXwelyY2y0H/Ya8fpVdmFZPueKfwZ2vYCKygrx8+4Mo4puTkpb7XRHX08v+ZJh0uYEbGVqaKvteDE6BrfLiTpxv2X2mZRQK4DpFh3KjUYYxPcDoU2MNBlgNBpQmfpo1i9WPjyQQEWSOlLFiPHDm/91DR+Ow8iRKURERERERDfIO5S5VnCxE+XqEpRo45OKRoMH8bVgwsB6SiDh92DQVh0NUbSGOrSPL2PKYYRW0KBlKnW0hdgJX0oum6wpq4G1fx5bqaNLcgw3/B4XmgyaxPK9N5dN3ogum1wbXTZZg7LqZvTMJDv8P9PmD0taNrnLDKM+tmxyZWMH3FmWTW4eWcBIq3jtNAJKjVa4llLmprlrZVtGWn6fpNpexqC9DhXSssnRZaQ7MPZStox0tPyYtpeK11U230yi5MsmJyu6MlTKtv4VadnkqujPh6CrQF3bMDypo5KkSYB7qqLz7sQmEA5GVxpS35iH59cqHx5QoCKRVv6xwjL6CqnzgyX9i1ejFli5og8REREREVEaeYeS9XAq0xwqrN9b+fDAAhUiIiIiIiL6GfIOJevhFAOV/Fc+MFAhIiIiIiL6C8g7lKyHUwxU8l/5wECFiIiIiIjoLyDvULJYhVz5UNiBSvg1ho1lqKprRGNjI+prTbAM+HByJd8wV2G8n7PAtnCSZbUiyQU2e+owup9tiwg+eewwmNx4nWWT8ME46gwtWDq53uAu7RIRERER0d9I3qFksQq58oGBSq0d3tNI/PVnrLYb0bVxhvg7P+kOwUbkK162m24JVMS9fH2H0P5HXGQ7mMuPOHh1iK+JXdyhXSIiIiIi+ivJO5QsViFXPjBQSQ1UEMbbsXqYZ/8R/xXG0VInrBYzag11GHnpRb/FhOpqG+aOwkDkAocrg3C02GCzWmCxD8OXGNqSHmyEvwYx1mLF4M4nhCNfsTnYAoulWdyvDlUN4nctYrW44T+XjiOCT+svYJPeq69CWfsa/k0JVCKffXDZ4t8Rj6e8ahCvsgQqae0md0FERER0L/5vVFNQ5fu4/6CLSN6hZLEKufKBgUpqoHL5Hov2avTunCdHqERO4WmtgsW9g4+X129K71/g/ZujxOiQc/8LmPp2cBF9lQw2Lj6so8/SiqnX39JHvUT+xVr7bY/8SIc3DJMsUElz4UNndeZAJWu7RERERPdEHjj87SUPMB5aEck7lCxWIVc+MFAxGmBsaEJTUxMaGy3omPDjNDXjkAIVex3cb+TBxyXeb02gv7sHPb296GmrQ7ljFV+j6UUs2GjsGURblR7mmeObI0R+Y6Bya7tERERE90QeOPztJQ8wHloRyTuULFYhVz4wUEl75CeDaKDSiInD9Ggi8mkZ9vohvIpPcBI+GEO9MzVQaUaFdQp7x5voq7di+vB72vd/X6Dyg3aJiIiI7ok8cPjbSx5gPLQi2tvbu9GpZLEKsaTfhXxgoPKTgUr4ZAHW+jEcRKdNucJHT9uNESqxuUwiuNgfh7l+AP7YhzGRc/g6f0eg8oN2iYiIiIjor3R8fHyjY8liFWJJvwv5wEAla6ASxtFyN1psFpgMehibbLDZWtC5eBh7jCbyFaHJtuhjQrZWBwaXljFoboBjXvpcvtqO+HqpDSbnChIrHIvvnax2w2JpEdsQ9906hsD1pLS+Adil9xqroCs3wSL+2z60iS/yw7w1UIm/vtEuERERERH9jS4uLjhKhVXwJf0OSL8L+VDYgcp/3YUPXbXD2GNYQkREREREiIUq0v+dZ7DCKrSSfualn/18hSkSBir/Nd9DmLDHRsu02MywDO7gm3zkChERERERERH9VgxUiIiIiIiIiIhyxECFiIiIiIiIiChHDFSIiIiIiIiIiHLEQIWIiIiIiIiIKEcMVIiIiIiIiIiIcsRAhYiIiIiIiIgoRwxUiIiIiIiIiIhyxECFiIiIiIiIiChHDFSIiIiIiIiIiHLEQIWIiIiIiIiIKEcMVIiIiIiIiIiIcsRAhYiIiIiIiIgoRwxUiIiIiIiIiIhylFOgUlRUxECFiIiIiIiIiArenQKV09NTnJ2dwev1JkIVIiIiIiIiIqJCJGUkUlaSSVqgcnV1FU1epC8QERERERERERUqKRuRMhIpK8kkLVCRSBtK6Yv0JRaLxWKxWCwWi8VisVisQiwpG8kWpkhuBCpERERERERERHQ7BipERERERERERDlioEJERERERERElKP/B2KSIxo2LV0VAAAAAElFTkSuQmCC"}}]);