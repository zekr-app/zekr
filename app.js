
document.querySelectorAll("[data-counter]").forEach(card=>{
 const max=Number(card.dataset.count||1); let n=0;
 const out=card.querySelector(".counter"), btn=card.querySelector(".repeat-btn");
 btn.addEventListener("click",()=>{if(n<max)n++;out.textContent=n+" / "+max;if(n===max){btn.textContent="✓ تم";btn.disabled=true}});
});
const q=document.querySelector("#search");
if(q){q.addEventListener("input",()=>{
 const term=q.value.trim();document.querySelectorAll("[data-search]").forEach(x=>{
   x.style.display=!term||x.dataset.search.includes(term)?"block":"none";
 });
});}
