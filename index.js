import{S as c,a as d,i as n}from"./assets/vendor-B4VFN8au.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l={galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function u({webformatURL:o,largeImageURL:t,tags:i,likes:a,views:e,comments:r,downloads:s}){return`<li class="gallery-container">
  <a href="${t}" class="gallery-container-a">
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
      <p class="description-text">${r}</p>
    </li>
    <li class="img-description">
      <h3 class="description-headerline">Downloads</h3>
      <p class="description-text">${s}</p>
    </li>
  </ul>
</li>`}let m=new c(".gallery-container-a ",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(o){const t=o.map(i=>u(i)).join("");l.galleryContainer.insertAdjacentHTML("beforeend",t),m.refresh()}function g(){l.galleryContainer.innerHTML=""}function f(){l.loader.style.display="block"}function h(o){return d.get("https://pixabay.com/api/",{params:{key:"53618010-1b89e63a15719169e29158a57",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const y={form:document.querySelector(".form"),loader:document.querySelector(".loader")};y.form.addEventListener("submit",o=>{o.preventDefault(),g();const t=o.target.elements["search-text"].value.trim();if(t===""){n.error({message:"Please enter a search query",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"topRight",timeout:2e3});return}f(),h(t).then(i=>{if(i.hits.length===0){n.error({message:"No images found. Please try again.",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"topRight",timeout:2e3});return}p(i.hits)}).catch(()=>{n.error({message:"Something went wrong",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"topRight",timeout:2e3})})});
//# sourceMappingURL=index.js.map
