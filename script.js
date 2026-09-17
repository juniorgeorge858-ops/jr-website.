
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle) menuToggle.addEventListener("click",()=>navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("show")));
const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
const form=document.getElementById("contactForm");
if(form){
 form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const msg=document.getElementById("message").value.trim();
  const out=document.getElementById("formMsg");
  if(!name||!email||!msg){out.textContent="Please complete all required fields.";out.style.color="#b33";return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){out.textContent="Please enter a valid email address.";out.style.color="#b33";return;}
  out.textContent=`Thank you, ${name}. Your request has been received.`;
  out.style.color="#2f7d4b"; form.reset();
 });
}
