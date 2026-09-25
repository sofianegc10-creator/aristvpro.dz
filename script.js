const CONFIG = {
  brand: "ARIS IPTV",
  whatsapp: "213777400102",
  email: "gcsforce.iptv@gmail.com",
  // Set this when your backend API is ready:
  apiBaseUrl: "https://aris-iptv.onrender.com"
};

const plans = [
  {id:"1m", title:"1 MOIS", price:"Prix sur demande", featured:false},
  {id:"3m", title:"3 MOIS", price:"Prix sur demande", featured:true},
  {id:"6m", title:"6 MOIS", price:"Prix sur demande", featured:false},
  {id:"12m", title:"12 MOIS", price:"Prix sur demande", featured:false}
];

const wa = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function renderPlans(){
  const box=document.querySelector("#plans");
  const select=document.querySelector("#duration");
  plans.forEach(p=>{
    box.insertAdjacentHTML("beforeend", `
      <article class="plan ${p.featured ? "featured":""}">
        ${p.featured ? '<div class="pill">POPULAIRE</div>' : ''}
        <h3>${p.title}</h3>
        <div class="price">${p.price}</div>
        <ul>
          <li>Activation sur appareil compatible</li>
          <li>Support WhatsApp</li>
          <li>Accès selon l'offre choisie</li>
          <li>Conditions communiquées avant activation</li>
        </ul>
        <a class="btn btn-gold" style="width:100%" target="_blank" rel="noopener"
           href="${wa(`Bonjour ARIS IPTV, je souhaite commander l'offre ${p.title}. Merci de me communiquer les détails.`)}">Commander →</a>
      </article>`);
    select.insertAdjacentHTML("beforeend", `<option value="${p.title}">${p.title}</option>`);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  renderPlans();
  const defaultText="Bonjour ARIS IPTV, je souhaite demander un code test 12H. Merci de m'indiquer les conditions.";
  ["navWhatsapp","testWhatsapp","contactWhatsapp"].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.href=wa(defaultText);
  });
  document.getElementById("year").textContent=new Date().getFullYear();

  document.getElementById("leadForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const duration=document.getElementById("duration").value;
    const message=document.getElementById("message").value.trim();
    window.open(wa(`Bonjour ARIS IPTV,\nNom: ${name}\nOffre: ${duration}\nMessage: ${message || "Je souhaite plus d'informations."}`),"_blank");
  });
});