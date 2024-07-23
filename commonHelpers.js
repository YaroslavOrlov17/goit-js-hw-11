import{S as c}from"./assets/vendor-10cb7c31.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.querySelector(".form"),p=document.querySelector(".input"),l=document.querySelector(".gallery");function u(i){i.preventDefault();const n=p.value.trim();console.log(n!==""?n:"Заполните форму!");const s=new URLSearchParams({key:"16437496-6d56e114a2cb1088922bcb1d6",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21});fetch(`https://pixabay.com/api/?${s}`).then(r=>r.json()).then(r=>{if(r.hits.length===0)console.log("Sorry, there are no images matching your search query. Please try again!");else{l.innerHTML="";const e=r.hits.map(o=>`<li><a class="gallery-link" href=${o.largeImageURL}><img src="${o.webformatURL}" alt="${o.tags}">
            
            <div>
            <p><span>Likes</span>${o.likes}</p>
            <p><span>Views</span>${o.views}</p>
            <p><span>Comments</span>${o.comments}</p>
            <p><span>Downloads</span>${o.downloads}</p>
            </div>
</a>
            </li>`).join("");l.insertAdjacentHTML("beforeend",e),new c(".gallery a",{captionsData:"alt",captionDelay:250}).on("show.simplelightbox",function(){})}}).catch(r=>console.log(r)),a.reset()}a.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
