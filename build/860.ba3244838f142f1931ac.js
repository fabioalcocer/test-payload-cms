"use strict";(self.webpackChunkpayload_template_js_blank=self.webpackChunkpayload_template_js_blank||[]).push([[860],{63860:(e,l,t)=>{t.r(l),t.d(l,{default:()=>E});var a=t(67294),o=t(9980),n=t(28630),s=t(75091),i=t(2143),r=t(16550),c=t(28584),d=t(77329);t(86456);const m="card",u=e=>{const{id:l,title:t,actions:o,onClick:n}=e,s=[m,l,n&&`${m}--has-onclick`].filter(Boolean).join(" ");return a.createElement("div",{className:s,id:l},a.createElement("h5",null,t),o&&a.createElement("div",{className:`${m}__actions`},o),n&&a.createElement(d.Z,{className:`${m}__click`,buttonStyle:"none",onClick:n}))};var p=t(69850),v=t(1763);t(75634);const b="dashboard",y=e=>{const{collections:l,globals:t,permissions:n}=e,{push:s}=(0,r.k6)(),{routes:{admin:i},admin:{components:{afterDashboard:m,beforeDashboard:y}}}=(0,o.Z)(),[E,h]=(0,a.useState)([]);return(0,a.useEffect)((()=>{h((0,v.V)([...l.map((e=>({type:v.p.collection,entity:e}))),...t.map((e=>({type:v.p.global,entity:e})))],n))}),[l,t,n]),a.createElement("div",{className:b},a.createElement(c.Z,null),a.createElement(p.T,{className:"dashboard__wrap"},Array.isArray(y)&&y.map(((e,l)=>a.createElement(e,{key:l}))),E.map((({label:e,entities:l},t)=>a.createElement(a.Fragment,{key:t},a.createElement("h2",{className:"dashboard__label"},e),a.createElement("ul",{className:"dashboard__card-list"},l.map((({entity:e,type:l},t)=>{var o,r,c;let m,p,b,y;return l===v.p.collection&&(m=e.labels.plural,b=()=>s({pathname:`${i}/collections/${e.slug}`}),p=`${i}/collections/${e.slug}/create`,y=null===(c=null===(r=null===(o=null==n?void 0:n.collections)||void 0===o?void 0:o[e.slug])||void 0===r?void 0:r.create)||void 0===c?void 0:c.permission),l===v.p.global&&(m=e.label,b=()=>s({pathname:`${i}/globals/${e.slug}`})),a.createElement("li",{key:t},a.createElement(u,{title:m,id:`card-${e.slug}`,onClick:b,actions:y&&l===v.p.collection?a.createElement(d.Z,{el:"link",to:p,icon:"plus",round:!0,buttonStyle:"icon-label",iconStyle:"with-border"}):void 0}))})))))),Array.isArray(m)&&m.map(((e,l)=>a.createElement(e,{key:l})))))},E=()=>{const{permissions:e}=(0,n.a)(),{setStepNav:l}=(0,s.FP)(),[t,r]=(0,a.useState)([]),{collections:c,globals:d,admin:{components:{views:{Dashboard:m}={Dashboard:void 0}}={}}={}}=(0,o.Z)();return(0,a.useEffect)((()=>{r(d.filter((l=>{var t,a,o;return null===(o=null===(a=null===(t=null==e?void 0:e.globals)||void 0===t?void 0:t[l.slug])||void 0===a?void 0:a.read)||void 0===o?void 0:o.permission})))}),[e,d]),(0,a.useEffect)((()=>{l([])}),[l]),a.createElement(i.Z,{DefaultComponent:y,CustomComponent:m,componentProps:{globals:t,collections:c.filter((l=>{var t,a,o;return null===(o=null===(a=null===(t=null==e?void 0:e.collections)||void 0===t?void 0:t[l.slug])||void 0===a?void 0:a.read)||void 0===o?void 0:o.permission})),permissions:e}})}}}]);