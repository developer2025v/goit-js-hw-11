import{a as g,S as y,i as l}from"./assets/vendor-C3lJ7lpQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="51776456-27ec020609b15dc1d566099b7";async function b(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:i}=await g.get(p,{params:r});return i}const d=document.getElementById("gallery"),u=document.getElementById("loader");let a=null;function v(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <div><b>Likes</b>${t}</div>
          <div><b>Views</b>${s}</div>
          <div><b>Comments</b>${f}</div>
          <div><b>Downloads</b>${m}</div>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){d.innerHTML="",a&&a.refresh()}function E(){u.classList.add("is-visible")}function c(){u.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){l.error({title:"Error",message:"Please enter a search term!"});return}L(),E();try{const i=await b(r);if(c(),!i.hits.length){l.info({title:"No results",message:"Sorry, no images found!"});return}v(i.hits)}catch{c(),l.error({title:"Error",message:"Something went wrong"})}});
//# sourceMappingURL=index.js.map
