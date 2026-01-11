import{S as g,a as y,i as h}from"./assets/vendor-BkVuWn-o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b=new g(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".gallery"),L=document.querySelector(".js-button"),m=document.querySelector(".loader");function x(a){const r=a.map(o=>{const{downloads:s,webformatURL:e,largeImageURL:t,tags:l,likes:d,views:f,comments:p}=o;return`<li class="gallery-item">
        <a class="gallery-link" href="${t}" target="_blank" rel="noopener noreferrer">
          <img
            class="gallery-image"
            src="${e}"
            data-source="${t}"
            alt="${l}"
          />
        </a>
        <ul class="number-list">
          <li class="numder-item">
            <p class="umber-text">Likes</p>
            <p class="umber-text">${d}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Views</p>
            <p class="umber-text">${f}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Comments</p>
            <p class="umber-text">${p}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Downloads</p>
            <p class="umber-text">${s}</p>
          </li>
        </ul>
      </li>`}).join("");i.insertAdjacentHTML("beforeend",r),b.refresh(),i.addEventListener("click",o=>{o.preventDefault();const s=o.target;if(!s)return;const e=s.dataset.source;if(s.nodeName!=="IMG")return;basicLightbox.create(`<img class="modal" src="${e}">`).show()})}L.addEventListener("click",S);function S(){i.innerHTML=""}function $(){m.classList.remove("hidden")}function q(){m.classList.add("hidden")}const c=document.querySelector(".form");c.querySelector('[name="search-text"]');const w=document.querySelector(".gallery");let n=null;c.addEventListener("submit",a=>{a.preventDefault(),n=a.target.elements["search-text"].value.trim(),n!==""&&(w.innerHTML="",v(n),c.reset())});const u={params:{key:"54150142-86526a32bbcea3c4d6b3084a1",image_type:"photo",orientation:"horizontal",safesearch:!0}};function v(a){u.params.q=a,y.get("https://pixabay.com/api/",u).then(r=>{if($(),!r.data.hits||r.data.hits.length===0){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(r.data.hits),x(r.data.hits)}).catch(r=>{console.log(r)}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
