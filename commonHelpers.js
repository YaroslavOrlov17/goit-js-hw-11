(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelector(".form"),l=document.querySelector(".input"),a=document.querySelector(".gallery");function u(c){c.preventDefault();const o=l.value.trim();console.log(o!==""?o:"Заполните форму!");const n=new URLSearchParams({key:"16437496-6d56e114a2cb1088922bcb1d6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(r=>r.json()).then(r=>{if(r.hits.length===0)console.log("Sorry, there are no images matching your search query. Please try again!");else{console.log(r.hits);const e=r.hits.map(t=>`<li><img src="${t.hits.webformatURL}" alt="${t.hits.tags}"></li>`).join("");a.insertAdjacentHTML("beforeend",e)}}).catch(r=>console.log(r)),i.reset()}i.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
