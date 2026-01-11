import{S as f,a as y,i as g}from"./assets/vendor-D01kJzYd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery");document.querySelector(".js-button");const u=document.querySelector(".loader");function b(o){const r=o.map(s=>{const{downloads:l,webformatURL:e,largeImageURL:t,tags:a,likes:m,views:d,comments:p}=s;return`<li class="gallery-item">
        <a class="gallery-link" href="${t}" target="_blank" rel="noopener noreferrer">
          <img
            class="gallery-image"
            src="${e}"
            data-source="${t}"
            alt="${a}"
          />
        </a>
        <ul class="number-list">
          <li class="numder-item">
            <p class=" ">Likes</p>
            <p class="umber-text">${m}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Views</p>
            <p class="umber-text">${d}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Comments</p>
            <p class="umber-text">${p}</p>
          </li>
          <li class="numder-item">
            <p class="umber-text">Downloads</p>
            <p class="umber-text">${l}</p>
          </li>
        </ul>
      </li>`}).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function q(){u.classList.remove("hidden")}function x(){u.classList.add("hidden")}const S=document.querySelector(".form");S.querySelector('[name="search-text"]');document.querySelector(".gallery");const n={params:{key:"54150142-86526a32bbcea3c4d6b3084a1",image_type:"photo",orientation:"horizontal",safesearch:!0}};function $(o){return n.params.q=o,y.get("https://pixabay.com/api/",n)}const i=document.querySelector(".form");document.querySelector(".js-button");document.querySelector(".gallery");i.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(L(),q(),$(r).then(s=>{if(s.data.hits.length===0){g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.data.hits)}).catch(s=>{console.log(s)}).finally(()=>{x()}),i.reset())});
//# sourceMappingURL=index.js.map
