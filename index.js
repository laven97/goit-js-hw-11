import{S as c,a as d,i as l}from"./assets/vendor-B4VFN8au.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n={galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function u({webformatURL:o,largeImageURL:r,tags:i,likes:a,views:e,comments:t,downloads:s}){return`<li class="gallery-container">
  <a href="${r}" class="gallery-container-a">
    <img class="gallery-container-img" src="${o}" alt="${i}">
  </a>
  <ul class="img-info-list">
    <li class="img-description">
      <h3 class="description-headerline">Likes</h3>
      <p class="description-text">${a}</p>
    </li>
    <li class="img-description">
      <h3 class="description-headerline">Views</h3>
      <p class="description-text">${e}</p>
    </li>
    <li class="img-description">
      <h3 class="description-headerline">Comments</h3>
      <p class="description-text">${t}</p>
    </li>
    <li class="img-description">
      <h3 class="description-headerline">Downloads</h3>
      <p class="description-text">${s}</p>
    </li>
  </ul>
</li>`}let m=new c(".gallery-container-a ",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(o){const r=o.map(i=>u(i)).join("");n.galleryContainer.insertAdjacentHTML("beforeend",r),m.refresh()}function g(){n.galleryContainer.innerHTML=""}function f(){n.loader.style.display="block"}function h(){n.loader.style.display="none"}function y(o){return d.get("https://pixabay.com/api/",{params:{key:"53618010-1b89e63a15719169e29158a57",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>r)}const b={form:document.querySelector(".form"),loader:document.querySelector(".loader")};b.form.addEventListener("submit",o=>{o.preventDefault(),g();const r=o.target.elements["search-text"].value.trim();if(r===""){l.error({message:"Please enter a search query",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3});return}f(),y(r).then(i=>{if(i.hits.length===0){l.error({message:"No images found. Please try again.",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3});return}p(i.hits)}).catch(()=>{l.error({message:"Something went wrong",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3})}).finally(()=>h())});
//# sourceMappingURL=index.js.map
