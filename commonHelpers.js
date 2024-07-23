import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),u=document.querySelector(".input"),a=document.querySelector(".gallery");function d(i){i.preventDefault();const s=u.value.trim();console.log(s!==""?s:"Заполните форму!");const n=new URLSearchParams({key:"16437496-6d56e114a2cb1088922bcb1d6",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21});fetch(`https://pixabay.com/api/?${n}`).then(o=>o.json()).then(o=>{if(o.hits.length===0)c.error({position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"});else{a.innerHTML="";const e=o.hits.map(r=>`<li><a class="gallery-link" href=${r.largeImageURL}><img src="${r.webformatURL}" alt="${r.tags}">
            
            <div>
            <p><span>Likes</span>${r.likes}</p>
            <p><span>Views</span>${r.views}</p>
            <p><span>Comments</span>${r.comments}</p>
            <p><span>Downloads</span>${r.downloads}</p>
            </div>
</a>
            </li>`).join("");a.insertAdjacentHTML("beforeend",e),new p(".gallery a",{captionsData:"alt",captionDelay:250}).on("show.simplelightbox",function(){}),refresh()}}).catch(o=>console.log(o)),l.reset()}l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
