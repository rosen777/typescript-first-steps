(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();const h=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor"
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
</svg>`,f=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentcolor"
        d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07zm-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13zm-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87zM19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35zm4.33-2.7l1.15-2.77l2.2 2.54zm1.15-4.96l-1.14-2.78l3.34.24zM9.63 18.93l2.77 1.15l-2.53 2.19z" />
</svg>`,g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#007ACC" d="M0 128v128h256V0H0z"></path><path fill="#FFF" d="m56.612 128.85l-.081 10.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121 10.443Zm149.955-10.742c6.501 1.625 11.459 4.51 16.01 9.224c2.357 2.52 5.851 7.111 6.136 8.208c.08.325-11.053 7.802-17.798 11.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759 3.535-12.718 10.321c0 1.992.284 3.17 1.097 4.795c1.707 3.536 4.876 5.649 14.832 9.956c18.326 7.883 26.168 13.084 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.14 17.879-28.323 20.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163 1.178-.813 2.356-1.504c1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267l1.544 2.276c2.154 3.29 6.867 7.801 9.712 9.305c8.167 4.307 19.383 3.698 24.909-1.26c2.357-2.153 3.332-4.388 3.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76 12.353-21.659 26.25-24.3c4.51-.853 14.994-.528 19.424.569Z"></path></svg>',v='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>',w=`<svg fill="none" height="458" viewBox="0 0 1064 458" width="1064" xmlns="http://www.w3.org/2000/svg">
    <path
        d="m993.708 161.083c-1.475.567-2.641 1.733-3.208 3.208l-21.822 56.738c-1.836 4.774-8.59 4.774-10.426 0l-21.823-56.738c-.567-1.475-1.733-2.641-3.208-3.208l-56.738-21.823c-4.774-1.836-4.774-8.59 0-10.426l56.738-21.822c1.475-.567 2.641-1.733 3.208-3.208l21.823-56.7383c1.836-4.7737 8.59-4.7737 10.426 0l21.822 56.7383c.567 1.475 1.733 2.641 3.208 3.208l56.742 21.822c4.77 1.836 4.77 8.59 0 10.426z"
        fill="#ffbf00" />
    <path
        d="m834.63 86.9817c-1.836 4.7738-8.59 4.7738-10.426 0l-7.859-20.4337c-.567-1.475-1.733-2.6407-3.208-3.208l-20.433-7.8592c-4.774-1.836-4.774-8.59 0-10.426l20.433-7.8591c1.475-.5674 2.641-1.733 3.208-3.2081l7.859-20.4337c1.836-4.77377 8.59-4.77375 10.426 0l7.86 20.4337c.567 1.4751 1.733 2.6407 3.208 3.2081l20.433 7.8591c4.774 1.836 4.774 8.59 0 10.426l-20.433 7.8592c-1.475.5673-2.641 1.733-3.208 3.208z"
        fill="#ff9500" />
    <path
        d="m879.209 230.899c-1.475.568-2.64 1.733-3.208 3.208l-7.859 20.434c-1.836 4.774-8.59 4.774-10.426 0l-7.859-20.434c-.567-1.475-1.733-2.64-3.208-3.208l-20.434-7.859c-4.773-1.836-4.773-8.59 0-10.426l20.434-7.859c1.475-.567 2.641-1.733 3.208-3.208l7.859-20.434c1.836-4.774 8.59-4.774 10.426 0l7.859 20.434c.568 1.475 1.733 2.641 3.208 3.208l20.434 7.859c4.774 1.836 4.774 8.59 0 10.426z"
        fill="#ff9500" />
    <g fill="currentcolor">
        <path
            d="m0 457.995v-282.83h59.1396l3.6208 37.172v245.658zm119.889-75.96c-16.629 0-30.5761-4.175-41.8408-12.525-11.2647-8.62-19.7132-20.876-25.3455-36.768-5.6324-15.892-8.4485-34.748-8.4485-56.566 0-22.088 2.8161-40.943 8.4485-56.566 5.6323-15.893 14.0808-28.014 25.3455-36.364 11.2647-8.62 25.2118-12.93 41.8408-12.93 18.774 0 35.001 4.31 48.679 12.93 13.679 8.35 24.139 20.471 31.38 36.364 7.242 15.623 10.863 34.478 10.863 56.566 0 21.818-3.621 40.674-10.863 56.566-7.241 15.892-17.701 28.148-31.38 36.768-13.678 8.35-29.905 12.525-48.679 12.525zm-16.093-58.182c8.046 0 15.154-2.02 21.323-6.061 6.168-4.04 11.13-9.562 14.885-16.566 3.755-7.272 5.632-15.623 5.632-25.05 0-9.428-1.743-17.643-5.23-24.647-3.486-7.273-8.448-12.929-14.885-16.97-6.169-4.04-13.276-6.06-21.323-6.06-8.0458 0-15.2874 2.02-21.7244 6.06-6.1687 4.041-10.9964 9.697-14.4831 16.97s-5.2301 15.488-5.2301 24.647c0 9.427 1.7434 17.778 5.2301 25.05 3.4867 7.004 8.3144 12.526 14.4831 16.566 6.1688 4.041 13.2763 6.061 21.3224 6.061z" />
        <path
            d="m245.196 377.187v-202.022h62.76v202.022zm31.38-227.881c-9.387 0-17.702-3.502-24.943-10.505-6.974-7.273-10.46-15.623-10.46-25.051 0-9.966 3.486-18.3165 10.46-25.0505 7.241-7.0035 15.556-10.5052 24.943-10.5052 9.655 0 17.97 3.5017 24.943 10.5052 6.973 6.734 10.46 15.0845 10.46 25.0505 0 9.428-3.487 17.778-10.46 25.051-6.973 7.003-15.288 10.505-24.943 10.505z" />
        <path
            d="m452.936 382.035c-21.457 0-40.634-4.444-57.531-13.333-16.629-9.159-29.637-21.684-39.024-37.576-9.387-16.162-14.081-34.479-14.081-54.95 0-20.741 4.694-39.058 14.081-54.95 9.387-15.893 22.261-28.283 38.622-37.172 16.629-9.159 35.671-13.738 57.128-13.738 20.652 0 39.56 5.253 56.726 15.758 17.165 10.505 29.502 25.724 37.012 45.657l-59.542 20.202c-2.95-6.465-7.912-11.717-14.885-15.758-6.705-4.309-14.215-6.464-22.53-6.464-8.314 0-15.69 2.02-22.127 6.06-6.168 3.771-11.13 9.159-14.885 16.162-3.487 7.004-5.23 15.084-5.23 24.243 0 9.158 1.743 17.239 5.23 24.242 3.755 6.734 8.851 12.122 15.288 16.162 6.705 4.041 14.215 6.061 22.529 6.061 8.315 0 15.824-2.155 22.529-6.465 6.706-4.31 11.667-9.966 14.886-16.97l59.542 20.202c-7.778 20.203-20.25 35.691-37.415 46.465-16.897 10.775-35.672 16.162-56.323 16.162z" />
        <path
            d="m672.537 382.035c-21.188 0-39.962-4.444-56.323-13.333-16.093-9.159-28.832-21.684-38.22-37.576-9.119-15.893-13.678-34.209-13.678-54.95s4.559-39.058 13.678-54.95c9.119-15.893 21.725-28.283 37.818-37.172 16.36-9.159 34.866-13.738 55.518-13.738 21.189 0 39.829 4.579 55.922 13.738 16.36 8.889 29.1 21.279 38.219 37.172 9.119 15.892 13.679 34.209 13.679 54.95s-4.56 39.057-13.679 54.95c-9.119 15.892-21.725 28.417-37.817 37.576-15.824 8.889-34.196 13.333-55.117 13.333zm-.402-59.798c8.314 0 15.422-1.886 21.322-5.657 6.169-4.04 10.997-9.428 14.484-16.162 3.486-7.003 5.23-15.084 5.23-24.242 0-9.159-1.878-17.105-5.633-23.839-3.486-7.003-8.314-12.39-14.483-16.162-6.169-4.04-13.276-6.06-21.322-6.06s-15.154 2.02-21.323 6.06c-6.168 3.772-10.996 9.159-14.483 16.162-3.487 6.734-5.23 14.68-5.23 23.839 0 8.889 1.743 16.835 5.23 23.838 3.487 7.004 8.315 12.526 14.483 16.566 6.437 3.771 13.679 5.657 21.725 5.657z" />
    </g>
</svg>`,b=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor"
        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z" />
</svg>`,y=h,$=f,x=g,L=v,E=w,M=b,D=`
<header>
    <hgroup>
        <h1 class=".parkinsans">event me</h1>
        <p>All the events you never knew you needed to attend!</p>
    </hgroup>
    <a href="#" role="toggle" id="theeme"  title="Toggle color scheme" >
        ${$} 
    </a>
</header>
<hr/>
`;function S(){const t=()=>{const e=document.documentElement,s=e.getAttribute("data-theme")==="dark"?"light":"dark";e.setAttribute("data-theme",s)};document.getElementById("theme").addEventListener("click",t)}const d=void 0,I=async()=>{try{return(await fetch(`${d}/events`)).json()}catch(t){console.error(t)}},P=t=>{const e=`rsvp-form-${t.ID}`,n=`modal-event-${t.id}`;return`<dialog id="${n}">
      <article>
        <header>
          <button
            aria-label="Close"
            rel="prev"
            data-target="${n}"
            class="toggle-modal"
          ></button>
          <h3>RSVP to ${t.title}</h3>
        </header>
        <form id="${e}" data-modal="${n}"
            action="${d}/events/${t.id}/rsvp"
            method="POST"
        >
          <label for="rsvp-name">Name:
            <input type="text" class="rsvp-name" name="name" required />
          </label>
          <label for="rsvp-email">Email:
          <input type="email" class="rsvp-email" name="email" required />
          </label>
        
        </form>
        <footer>
          <button
            role="button"
            class="toggle-modal cancel"
            data-target="${n}"
          >Cancel</button>

          <button id="submit-${e}" role="button" form="${e}" type="submit">Submit RSVP</button>

        </footer>
      </article>
    </dialog>`},z=t=>{const e=new Date(t.date),n=e<new Date;return`
<article class="event" >
<header>
    ${t.imageUrl&&`<img src=${t.imageUrl} alt="${t.title} thumbnail" />`}
</header>
    <main>
        <h4>${t.title}</h4>
        <p>${M} ${e.toLocaleDateString()}</p>
        <p>Host: ${t.host?.name||`User ${t.host_id}`}</p>

        ${t.description&&`<p>${t.description}</p>`}
    </main>
    <footer>
        <span>
            ${t.rsvps.length} 
            ${n?"went":"going"}
        </span>
        ${n?"":`
            <button role="button" data-target="modal-event-${t.id}" class="toggle-modal"
            title="RSVP to ${t.title}"
            >
        RSVP
        </button>`}
    </footer>
    ${P(t)}
</article>
    `},i=(t,e)=>`
  <section class='events'>
      <h2>${t} events </h2>
          <div role = "group">
              ${e.map(n=>z(n)).join("")||"No events"}
      </div>
  </section>`,A=await(async()=>{const t=await I(),e=t.filter(s=>new Date(s.date)<new Date),n=t.filter(s=>new Date(s.date)>new Date);return`
    ${i("Upcoming",n)}
    ${i("Past",e)}
`})(),C=`
<main class="container">    
    ${A}
  </main>
`,F=`
<footer>
<p>Built with ${x} + ${L} + ${E} + ${y} at FrontendMasters</p>
<p>© 2024</p>
</footer>
`,m="modal-is-open",p="--pico-scrollbar-width",R=t=>{t.preventDefault();const e=document.getElementById(t.currentTarget.dataset.target);e&&e&&(e.open?V(e):T(e))},T=t=>{const{documentElement:e}=document,n=_();n&&e.style.setProperty(p,`${n}px`),e.classList.add(m),e.dataset.modal=t.id,t.showModal()},V=t=>{const{documentElement:e}=document;e.classlist.remove(m),e.dataset.modal=null,t.close(),e.style.removeProperty(p)},_=()=>window.innerWidth-document.documentElement.clientWidth,B=()=>{const t=document.querySelectorAll(".toggle-modal");for(let e of t)e.addEventListener("click",R)},O=void 0,U=t=>{if(!t)return;const e=t.id.replace("rsvp-form-",""),n=`${O}/events/${e}/rsvp`,s=document.getElementById(`submit-${t.id}`);async function l(o){const c=new FormData(o),a=new URLSearchParams;for(let[r,u]of c.entries)a.append(r,u);try{const r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});r.status===201?(o.dataset.submitted="success",s&&(s.textContent="You're going!",s.setAttribute("disabled",""))):r.status===200&&(o.dataset.submitted="duplicate",s&&(s.textContent="You're already going!",s.setAttribute("disabled","")))}catch(r){o.dataset.submitted="error",console.error(r)}}if(t.addEventListener("submit",o=>{o.preventDefault(),l(t)}),s){const o=t.querySelectorAll("input.rsvp-email");for(let c of o)c.addEventListener("input",()=>{s.textContent.startsWith("Submit")||(s.removeAttribute("disabled"),s.textContent="Submit RSVP")})}},H=()=>{const t=document.querySelectorAll("form");if(t)for(let e of t)U(e)},W={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{VITE_API_URL:q}=W;if(!q)throw new Error("Missing env var VITE_API_URL");const k=t=>{console.log("rendering"),document.querySelector("#app").innerHTML=t,S(),B(),H()};k(`
  ${D}
  ${C}
  ${F}
`);
