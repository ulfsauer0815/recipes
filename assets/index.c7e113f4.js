import{d,o as r,c as u,a,b as h,w as y,u as c,R as $,e as I,F as m,r as b,f as g,t as p,g as D,h as B,i as f,j as v,k,l as R,v as K,m as q,p as w,n as x,q as T,s as C,x as Z,y as P,z}from"./vendor.2f26b077.js";const M=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};M();var F="/assets/cook-book-5025.ab3a9542.svg";const O=a("img",{alt:"Logo",class:"logo",src:F,width:"125",height:"125"},null,-1),A=d({setup(e){return(i,o)=>(r(),u(m,null,[a("header",null,[h(c($),{to:"/"},{default:y(()=>[O]),_:1})]),h(c(I))],64))}});var _=(e,i)=>{const o=e.__vccOpts||e;for(const[n,t]of i)o[n]=t;return o};const E={class:"list-item"},H={class:"list-image"},N=["src"],V={key:0,class:"list-wip"},Q={class:"list-description"},G={class:"short-description"},U=d({props:{name:{type:String,required:!0},wip:{type:Boolean},slug:{type:String,required:!0},link:{type:String},listImage:{type:String},shortDescription:{type:String}},setup(e){return(i,o)=>{const n=b("router-link");return r(),u("div",E,[a("div",H,[a("img",{src:e.listImage},null,8,N),e.wip?(r(),u("span",V,"\u{1F6A7}")):g("",!0)]),a("div",Q,[h(n,{to:"/recipe/"+e.slug},{default:y(()=>[a("h3",null,p(e.name),1)]),_:1},8,["to"]),a("div",G,p(e.shortDescription),1)])])}}});var j=_(U,[["__scopeId","data-v-f1a6ebb2"]]),J=[{name:"Spaghetti Bolognese",wip:!0,slug:"spaghetti-bolognese",listImage:"https://via.placeholder.com/150x150",image:"https://via.placeholder.com/800x600",shortDescription:"Bolo is the best!",description:"Bolognese mit viel Spielraum f\xFCr Kreativit\xE4t.",defaultServings:6,baseServings:5,ingredients:[{name:"Spaghetti",quantity:800,unit:"g"},{name:"Hackfleisch",quantity:300,unit:"g"},{name:"Karotten",quantity:3},{name:"Zucchini",quantity:1.5},{name:"Tomaten (gest\xFCckelt)",quantity:800,unit:"g"},{name:"Tomaten (passiert)",quantity:400,unit:"g"},{name:"Zwiebel",quantity:1},{name:"Knoblauch",quantity:1,unit:"Zehen"},{name:"Thymian",quantity:2.5,unit:"Zehen"},{name:"Mayoran",quantity:1,unit:"TL"},{name:"Pfeffer"},{name:"Salz"}],steps:[{description:"Gem\xFCse waschen"},{description:"Schnibbeln"},{description:"Zucchinis d\xFCnsten"},{description:"Hackfleisch anbraten"},{description:"Spaghetti kochen"}]},{name:"K\xFCrbissuppe",slug:"kokos-kurbissuppe",listImage:"https://via.placeholder.com/150x150",image:"https://via.placeholder.com/800x600",shortDescription:"mit Kokosmilch",description:"Die leckerste K\xFCrbissuppe!",defaultServings:6,baseServings:6,tips:"6 Portionen passen sehr gut f\xFCr einen gro\xDFen Topf!",ingredients:[{name:"K\xFCrbis",quantity:800,unit:"g"},{name:"Karotten",quantity:600,unit:"g"},{name:"Kokosmilch",quantity:300,unit:"ml"},{name:"Gem\xFCsebr\xFChe",quantity:1,unit:"l"},{name:"Zwiebeln",quantity:1.5},{name:"Ingwer",quantity:15,unit:"g"},{name:"Zitrone",quantity:.5,unit:"g"},{name:"Butter",quantity:2,unit:"EL"},{name:"Sojasauce",quantity:2,unit:"EL"},{name:"Muskatnuss"},{name:"Pfeffer"},{name:"Salz"}],steps:[{description:"K\xFCrbis, M\xF6hren, Ingwer und Zwiebeln schneiden und w\xFCrfeln"},{description:"Zwiebeln in viel Butter and\xFCnsten"},{description:"Den Rest Gem\xFCse dazugeben und etwas and\xFCnsten"},{description:"Mit Br\xFChe aufgie\xDFen und ca. 20 min weichkochen"},{description:"Alles p\xFCrieren und mit restlichen Zutaten abschmecken"}]},{name:"T\xFCrkische Hack-Quiche",wip:!0,slug:"tuerkische-hack-quiche",listImage:"https://via.placeholder.com/150x150",image:"https://via.placeholder.com/800x600",shortDescription:"mit Minze & Spitzpaprika",description:"Unglaublich w\xFCrzig-leckere Quiche!",defaultServings:6,baseServings:6,tips:"6 Portionen f\xFCr eine Quiche-Form. Den Quiche-Teig selbst vorbereiten oder fertig kaufen. Ein guter Selbstgemachter macht allerdings einen gr0\xDFen Unterschied!",ingredients:[{name:"Hackfleisch",quantity:500,unit:"g"},{name:"Spitzpaprika (gr\xFCn)",quantity:4.5},{name:"Zwiebeln",quantity:2},{name:"Knoblauch",quantity:1,unit:"Zehe"},{name:"Petersilie",quantity:.5,unit:"Bund"},{name:"Minze",quantity:8,unit:"St\xE4ngel"},{name:"Feta",quantity:120,unit:"g"},{name:"Tomatenmark",quantity:4,unit:"EL"},{name:"Pul Biber",quantity:1,unit:"TL"},{name:"Eier",quantity:2},{name:"Joghurt",quantity:200,unit:"g"},{name:"Oregano",quantity:1,unit:"TL"},{name:"Pfeffer"},{name:"Salz"},{name:"Oliven\xF6l"}]},{name:"Masur Dal",wip:!0,slug:"masul-dal",listImage:"https://via.placeholder.com/150x150",image:"https://via.placeholder.com/800x600",shortDescription:"Rote Linsen Kokos Dal",description:"Hier gibt's Details",ingredients:[{name:"Rote Linsen",quantity:200,unit:"g"},{name:"Kokosmilch",quantity:400,unit:"ml"}]}];const L=D({id:"recipe-store",state:()=>({list:J}),getters:{recipes:e=>e.list,queryBy:e=>i=>{if(i){i=i.toLowerCase();const o=i.split(" ");return e.list.filter(t=>[t.name,t.description,t.shortDescription].map(s=>s.toLowerCase()).some(s=>o.every(l=>s.indexOf(l||"")>-1)))}return e.list},getBySlug:e=>i=>e.list.filter(o=>o.slug===i)[0]},actions:{}});const W={class:"recipes"},X=d({props:{searchQuery:String},setup(e){const i=e,o=L(),n=B(()=>o.queryBy(i.searchQuery));return(t,s)=>(r(),u("div",W,[(r(!0),u(m,null,f(c(n),l=>(r(),v(j,{key:l.name,name:l.name,wip:l.wip,slug:l.slug,listImage:l.listImage,shortDescription:l.shortDescription},null,8,["name","wip","slug","listImage","shortDescription"]))),128))]))}});var Y=_(X,[["__scopeId","data-v-adf6764c"]]);const ee={class:"recipe-searchbar"},te=["value"],ne=d({setup(e){const i=k();return(o,n)=>(r(),u(m,null,[a("div",ee,[a("input",{type:"text",placeholder:"Suche..",value:i.value,onInput:n[0]||(n[0]=t=>i.value=t.target.value)},null,40,te)]),h(Y,{searchQuery:i.value},null,8,["searchQuery"])],64))}});const ie={class:"servings-input"},se=q(" Portionen "),ae={class:"ingredients"},re={key:0,class:"ingredient-amount"},oe={key:1,class:"ingredient-amount"},ue={class:"ingredient-name"},ce=d({props:{ingredients:null,baseServings:null,defaultServings:null},setup(e){const o=k(e.defaultServings||1);return(n,t)=>(r(),u(m,null,[a("div",ie,[se,R(a("input",{type:"number",min:"1","onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s)},null,512),[[K,o.value]])]),a("div",ae,[(r(!0),u(m,null,f(e.ingredients,s=>(r(),u("div",{class:"ingredient",key:s.name},[s.quantity?(r(),u("span",re,p((s.quantity/(e.baseServings||1)*o.value).toLocaleString())+" "+p(s.unit),1)):(r(),u("span",oe)),a("span",ue,p(s.name),1)]))),128))])],64))}});var le=_(ce,[["__scopeId","data-v-20c0f6d7"]]);const pe=e=>(w("data-v-00363831"),e=e(),x(),e),de=pe(()=>a("h3",null,"Schritte",-1)),me={class:"steps"},ge={class:"step-description"},he=d({props:{steps:null},setup(e){return(i,o)=>(r(),u(m,null,[de,a("div",me,[(r(!0),u(m,null,f(e.steps,n=>(r(),u("div",{class:"step",key:n.description},[a("span",ge,p(n.description),1)]))),128))])],64))}});var _e=_(he,[["__scopeId","data-v-00363831"]]);const ve=e=>(w("data-v-7bf96d40"),e=e(),x(),e),ye={class:"item-details"},fe={class:"item-details-title"},Se={key:0},be={key:1},ke=["textContent"],qe={class:"item-details-image"},we=["src"],xe=["textContent"],Le={key:1,class:"item-details-tips center"},$e=ve(()=>a("h3",null,"Hinweise & Tips",-1)),Ie=["textContent"],De=d({props:{name:null,wip:{type:Boolean},image:null,shortDescription:null,description:null,tips:null,ingredients:null,defaultServings:null,baseServings:null,steps:null},setup(e){const i=T();return(o,n)=>{const t=b("RouterLink");return r(),u("div",ye,[h(t,{to:c(i)},{default:y(()=>[a("h1",fe,[e.wip?(r(),u("span",Se,"\u{1F6A7}")):g("",!0),q(" "+p(e.name)+" ",1),e.wip?(r(),u("span",be,"\u{1F6A7}")):g("",!0)])]),_:1},8,["to"]),a("div",{textContent:p(e.shortDescription),class:"item-details-short-description"},null,8,ke),e.ingredients?(r(),v(le,{key:0,ingredients:e.ingredients,defaultServings:e.defaultServings,baseServings:e.baseServings},null,8,["ingredients","defaultServings","baseServings"])):g("",!0),a("div",qe,[a("img",{src:e.image},null,8,we)]),a("div",{textContent:p(e.description),class:"item-details-description center"},null,8,xe),e.tips?(r(),u("div",Le,[$e,a("div",{textContent:p(e.tips),class:""},null,8,Ie)])):g("",!0),e.steps?(r(),v(_e,{key:2,steps:e.steps},null,8,["steps"])):g("",!0)])}}});var Be=_(De,[["__scopeId","data-v-7bf96d40"]]);const Re={class:"recipe-details"},Ke=d({props:{slug:{type:String,required:!0}},setup(e){const i=e,n=L().getBySlug(i.slug);return(t,s)=>(r(),u("div",Re,[h(Be,{name:c(n).name,wip:c(n).wip,image:c(n).image,shortDescription:c(n).shortDescription,description:c(n).description,tips:c(n).tips,ingredients:c(n).ingredients,defaultServings:c(n).defaultServings,baseServings:c(n).baseServings,steps:c(n).steps},null,8,["name","wip","image","shortDescription","description","tips","ingredients","defaultServings","baseServings","steps"])]))}}),Te=C({history:Z("/"),routes:[{path:"/",name:"recipes",component:ne},{path:"/recipe/:slug",name:"recipe",props:!0,component:Ke}]}),S=P(A);S.use(z());S.use(Te);S.mount("#app");
