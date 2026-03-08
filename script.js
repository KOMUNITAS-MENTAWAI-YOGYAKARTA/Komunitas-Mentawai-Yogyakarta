const iconSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10a10.05 10.05 0 01-5.2-1.46L2 22l1.46-4.8A10.05 10.05 0 012 12zm10-7a7 7 0 00-6.056 10.5l.31.52-.801 2.633 2.633-.8.52.31A7 7 0 1012 5zm3.36 8.72c-.18.51-.87.93-1.22.99-.33.06-.74.09-1.19-.076-.273-.092-.624-.202-1.07-.394-.983-.42-1.613-.898-2.163-1.563-.55-.665-.955-1.407-1.082-2.15-.043-.257.016-.506.08-.69.069-.199.19-.33.344-.45.093-.073.199-.153.312-.144.1.008.219.009.334.264.16.348.408.843.445.904.035.061.057.132.01.212-.046.081-.069.132-.128.205-.06.073-.128.162-.184.22-.062.064-.127.133-.058.267.07.134.311.546.668.887.46.44.847.58.983.64.135.061.216.054.294-.033.074-.082.328-.382.415-.513.086-.133.186-.114.312-.066.126.048.804.38.94.447.136.067.225.1.257.154.033.054.033.553-.147 1.063z"/></svg>';
const divisionsVar = [
  { label: "Divisi Dokumentasi", href: "https://chat.whatsapp.com/Bv1ovKAbe4gFlCiJGkV1XS?mode=gi_t" },
  { label: "Divisi Olahraga", href: " https://chat.whatsapp.com/FkuXfXDd5Aa90nN9WEzEQX?mode=gi_t" },
  { label: "Divisi Kewirausahaan", href: "https://chat.whatsapp.com/H7eEmKoQHwoAmB4AOgpRdD?mode=hqctsha" },
  { label: "Divisi Humas", href: " https://chat.whatsapp.com/Hgbhp3GZV46ErfZ5qv1AZV?mode=gi_t" },
  { label: "Divisi Pendidikan dan Kebudayaan", href: "https://chat.whatsapp.com/EBkoulOv3oP4vrT4vvOEgI?mode=hqctsha" },
  { label: "Divisi Agama", href: "https://chat.whatsapp.com/Ho4xcBIAcgHK223J1DOvxg?mode=gi_t" }
];
const brandName="KOMUNITAS MENTAWAI";
const docPhotoUrl="";
function renderButtons(){
  const c=document.getElementById("buttons");
  c.innerHTML="";
  function sanitizeUrl(raw){
    if(!raw)return null;
    let s=String(raw).trim();
    const m=s.match(/https?:\/\/[^\s]+/i);
    if(m)return m[0];
    const m2=s.match(/^((chat\.whatsapp\.com|wa\.me)\/\S+)/i);
    if(m2)return "https://"+m2[1];
    return null;
  }
  divisionsVar.forEach(d=>{
    const a=document.createElement("a");
    a.className="cta";
    const link=sanitizeUrl(d.href);
    a.innerHTML='<span class="icon">'+iconSvg+'</span><span>'+d.label+'</span>';
    if(link){a.href=link;a.target="_blank";a.rel="noopener"}else{a.href="#";a.classList.add("disabled");a.setAttribute("aria-disabled","true")}
    c.appendChild(a);
  });
}
function populateBrand(){const b=document.getElementById("brandName");if(b)b.textContent=brandName}
document.addEventListener("DOMContentLoaded",function(){renderButtons();populateBrand()});
