(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),a=document.querySelector(".input"),i=document.querySelector(".gallery");function u(c){c.preventDefault();const r=a.value.trim();console.log(r!==""?r:"Заполните форму!");const n=new URLSearchParams({key:"16437496-6d56e114a2cb1088922bcb1d6",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${n}`).then(o=>o.json()).then(o=>{if(o.hits.length===0)console.log("Sorry, there are no images matching your search query. Please try again!");else{i.innerHTML="",console.log(o.hits);const e=o.hits.map(t=>`<li><img src="${t.webformatURL}" alt="${t.tags}">
            <div>
            <p><span>Likes</span>${t.likes}</p>
            <p><span>Views</span>${t.views}</p>
            <p><span>Comments</span>${t.comments}</p>
            <p><span>Downloads</span>${t.downloads}</p>
            </div>

            </li>`).join("");console.log(e),i.insertAdjacentHTML("beforeend",e)}}).catch(o=>console.log(o)),l.reset()}l.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
