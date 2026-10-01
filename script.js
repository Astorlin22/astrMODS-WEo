const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const T={
en:{tag:"Community mods · Free downloads",h1:"Upload, share and download game mods.",sub:"Skins, maps, packs and scripts for CS 1.6, Minecraft and GTA San Andreas, made by players.",browse:"Browse mods",upload:"Upload a mod",search:"Search mods...",all:"All",login:"Log in",signup:"Sign up",logout:"Log out",import:"+ Import",name:"Your name",email:"Email",pass:"Password",cancel:"Cancel",close:"Close",download:"Download",none:"No mods yet.",cover:"Click to add a cover image",modfile:"Click to choose the mod file (.zip, .rar, .mp3...)",title:"Mod title",version:"Version (e.g. 1.0)",desc:"Describe your mod",publish:"Publish mod",need:"Please log in first.",bad:"Wrong email or password.",exists:"This email is already registered.",fill:"Fill in all fields (password: 6+ characters).",done:"Mod published!",welcome:"Welcome, ",bye:"Logged out.",lang:"Language",nofile:"Choose a mod file and enter a title.",by:"by",full:"Storage is full, use a smaller cover.",demo:"Demo file downloaded."},
uz:{tag:"Jamoa modlari · Bepul yuklab olish",h1:"O'yin modlarini yuklang, ulashing va yuklab oling.",sub:"CS 1.6, Minecraft va GTA San Andreas uchun skinlar, xaritalar, paketlar va skriptlar, o'yinchilar tomonidan yaratilgan.",browse:"Modlarni ko'rish",upload:"Mod joylash",search:"Modlarni qidirish...",all:"Hammasi",login:"Kirish",signup:"Ro'yxatdan o'tish",logout:"Chiqish",import:"+ Import",name:"Ismingiz",email:"Email",pass:"Parol",cancel:"Bekor qilish",close:"Yopish",download:"Yuklab olish",none:"Hozircha modlar yo'q.",cover:"Rasm qo'shish uchun bosing",modfile:"Mod faylini tanlash uchun bosing (.zip, .rar, .mp3...)",title:"Mod nomi",version:"Versiya (masalan 1.0)",desc:"Modingiz haqida yozing",publish:"Modni joylash",need:"Avval tizimga kiring.",bad:"Email yoki parol noto'g'ri.",exists:"Bu email allaqachon ro'yxatdan o'tgan.",fill:"Hamma maydonni to'ldiring (parol: kamida 6 belgi).",done:"Mod joylandi!",welcome:"Xush kelibsiz, ",bye:"Chiqdingiz.",lang:"Til",nofile:"Mod faylini tanlang va nom yozing.",by:"muallif:",full:"Xotira to'ldi, kichikroq rasm tanlang.",demo:"Demo fayl yuklandi."},
ru:{tag:"Моды сообщества · Бесплатно",h1:"Загружайте, делитесь и скачивайте игровые моды.",sub:"Скины, карты, паки и скрипты для CS 1.6, Minecraft и GTA San Andreas от игроков.",browse:"Смотреть моды",upload:"Загрузить мод",search:"Поиск модов...",all:"Все",login:"Войти",signup:"Регистрация",logout:"Выйти",import:"+ Импорт",name:"Ваше имя",email:"Email",pass:"Пароль",cancel:"Отмена",close:"Закрыть",download:"Скачать",none:"Модов пока нет.",cover:"Нажмите, чтобы добавить фото",modfile:"Нажмите, чтобы выбрать файл мода (.zip, .rar, .mp3...)",title:"Название мода",version:"Версия (например 1.0)",desc:"Опишите ваш мод",publish:"Опубликовать",need:"Сначала войдите в аккаунт.",bad:"Неверный email или пароль.",exists:"Этот email уже зарегистрирован.",fill:"Заполните все поля (пароль: от 6 символов).",done:"Мод опубликован!",welcome:"Добро пожаловать, ",bye:"Вы вышли.",lang:"Язык",nofile:"Выберите файл мода и введите название.",by:"автор:",full:"Память заполнена, выберите фото поменьше.",demo:"Демо-файл скачан."}
};
Object.assign(T.en,{menu:"Menu",myprofile:"My profile",sort_new:"Newest",sort_pop:"Most popular",category:"Category",c_mods:"Mods",c_skins:"Skins",c_textures:"Textures",c_maps:"Maps",c_seeds:"Seeds",c_shaders:"Shaders",c_sounds:"Sounds",c_sprays:"Sprays",c_plugins:"Plugins",c_cars:"Cars",c_scripts:"Scripts",nick:"Nickname",fullname:"Full name",oldpass:"Old password",newpass:"New password",repass:"Repeat new",avatar:"Avatar (60x60)",coverp:"Cover (870x155)",youtube:"YouTube channel",discord:"Discord",telegram:"Telegram",birthday:"Birthday",about:"About me",save:"Save changes",group:"Group",users:"Users",registered:"Registered",online:"Online",justnow:"Just now",pub:"Publications",comments:"Comments",addcom:"Write a comment...",post:"Post",saved:"Profile saved.",donation:"ASTRmods Donation",donationText:"Please support us with a donation.",badold:"Old password is wrong.",passmis:"New passwords must match (6+ characters).",nocom:"Nothing here yet."});
Object.assign(T.uz,{menu:"Menyu",myprofile:"Mening profilim",sort_new:"Yangilari",sort_pop:"Mashhurlari",category:"Kategoriya",c_mods:"Modlar",c_skins:"Skinlar",c_textures:"Teksturalar",c_maps:"Xaritalar",c_seeds:"Seedlar",c_shaders:"Shaderlar",c_sounds:"Ovozlar",c_sprays:"Spreylar",c_plugins:"Plaginlar",c_cars:"Mashinalar",c_scripts:"Skriptlar",nick:"Nik",fullname:"To'liq ism",oldpass:"Eski parol",newpass:"Yangi parol",repass:"Takrorlang",avatar:"Avatar (60x60)",coverp:"Muqova (870x155)",youtube:"YouTube kanal",discord:"Discord",telegram:"Telegram",birthday:"Tug'ilgan kun",about:"Men haqimda",save:"Saqlash",group:"Guruh",users:"Foydalanuvchilar",registered:"Ro'yxatdan o'tgan",online:"Onlayn",justnow:"Hozirgina",pub:"Nashrlar",comments:"Izohlar",addcom:"Izoh yozing...",post:"Yuborish",saved:"Profil saqlandi.",donation:"ASTRmods Donation",donationText:"Iltimos, bizni qo‘llab-quvvatlash uchun donnat qiling.",badold:"Eski parol noto'g'ri.",passmis:"Yangi parollar bir xil bo'lsin (kamida 6 belgi).",nocom:"Hozircha bo'sh."});
Object.assign(T.ru,{menu:"Меню",myprofile:"Мой профиль",sort_new:"Новые",sort_pop:"Популярные",category:"Категория",c_mods:"Моды",c_skins:"Скины",c_textures:"Текстуры",c_maps:"Карты",c_seeds:"Сиды",c_shaders:"Шейдеры",c_sounds:"Звуки",c_sprays:"Спреи",c_plugins:"Плагины",c_cars:"Машины",c_scripts:"Скрипты",nick:"Ник",fullname:"Полное имя",oldpass:"Старый пароль",newpass:"Новый пароль",repass:"Повторите",avatar:"Аватар (60x60)",coverp:"Обложка (870x155)",youtube:"Канал YouTube",discord:"Discord",telegram:"Telegram",birthday:"День рождения",about:"О себе",save:"Сохранить",group:"Группа",users:"Пользователи",registered:"Регистрация",online:"Онлайн",justnow:"Только что",pub:"Публикации",comments:"Комментарии",addcom:"Напишите комментарий...",post:"Отправить",saved:"Профиль сохранён.",donation:"ASTRmods Donation",donationText:"Пожалуйста, поддержите нас донатом.",badold:"Старый пароль неверный.",passmis:"Новые пароли должны совпадать (от 6 символов).",nocom:"Пока пусто."});

const G={cs:"CS 1.6",mc:"Minecraft",gta:"GTA San Andreas"};

/* Live game-version catalog. Minecraft versions are refreshed from Mojang; Fabric/Forge are refreshed from their public metadata endpoints. */
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
const VERSION_CACHE_KEY="am_versions_v3";
const VERSION_FALLBACK={
  mc:["26.3","26.2","26.1","25.3","25.2","25.1","1.21.11","1.21.10","1.21.9","1.21.8","1.21.7","1.21.6","1.21.5","1.21.4","1.21.3","1.21.2","1.21.1","1.21","1.20.6","1.20.4","1.20.2","1.20.1","1.19.4","1.19.3","1.19.2","1.18.2","1.16.5","1.12.2","1.8.9"],
  cs:["Steam / Current","Protocol 48 • Build 8245","Protocol 48 • Build 4554"],
  gta:["PC 1.0","PC 1.01","Steam / Definitive Edition"]
};
let versionCatalog=ld(VERSION_CACHE_KEY,VERSION_FALLBACK);
const adminLogin="@adminMODlogin";
function versionLabel(v){return typeof v==="string"?v:(v?.label||v?.version||"")}
async function refreshVersions(){
  const next={mc:[],cs:VERSION_FALLBACK.cs,gta:VERSION_FALLBACK.gta};
  try{
    const r=await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json",{cache:"no-store"});
    const j=await r.json(); next.mc=(j.versions||[]).filter(x=>x.type==="release").map(x=>x.id);
  }catch(e){next.mc=VERSION_FALLBACK.mc}
  if(!next.mc.length)next.mc=VERSION_FALLBACK.mc;
  try{
    const r=await fetch("https://meta.fabricmc.net/v2/versions/loader",{cache:"no-store"});
    const j=await r.json();
    next.fabric=(j||[]).slice(0,25).map(x=>x.version);
  }catch(e){next.fabric=["0.19.5","0.19.4","0.19.3"]}
  try{
    const r=await fetch("https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json",{cache:"no-store"});
    const j=await r.json();
    const vals=Object.entries(j.promos||{}).filter(([k])=>k.endsWith("-latest")||k.endsWith("-recommended")).map(([k,v])=>({label:`${k.replace(/-(latest|recommended)$/i,"")} • Forge ${v}`,version:v}));
    next.forge=vals.length?vals:[{label:"1.21.11 • Forge 61.2.1",version:"61.2.1"},{label:"1.21.10 • Forge 60.1.15",version:"60.1.15"},{label:"1.21.8 • Forge 58.1.22",version:"58.1.22"},{label:"1.21.5 • Forge 55.1.14",version:"55.1.14"},{label:"1.21.1 • Forge 52.1.16",version:"52.1.16"}];
  }catch(e){next.forge=[{label:"1.21.11 • Forge 61.2.1",version:"61.2.1"},{label:"1.21.10 • Forge 60.1.15",version:"60.1.15"},{label:"1.21.8 • Forge 58.1.22",version:"58.1.22"},{label:"1.21.5 • Forge 55.1.14",version:"55.1.14"},{label:"1.21.1 • Forge 52.1.16",version:"52.1.16"}]
  }
  versionCatalog=next;sv(VERSION_CACHE_KEY,next);fillVersionPicker();
}
function fillVersionPicker(){
 const el=$("#mv"); if(!el)return; const g=$("#mg")?.value||"mc"; const old=el.value;
 let opts=[];
 if(g==="mc"){
   opts.push(`<optgroup label="Minecraft Java — Vanilla">${(versionCatalog.mc||VERSION_FALLBACK.mc).map(v=>`<option value="Vanilla|${esc(v)}">${esc(v)} • Vanilla</option>`).join("")}</optgroup>`);
   if(versionCatalog.forge?.length)opts.push(`<optgroup label="Forge">${versionCatalog.forge.map(x=>`<option value="Forge|${esc(x.label||x.version)}">${esc(x.label||x.version)}</option>`).join("")}</optgroup>`);
   if(versionCatalog.fabric?.length)opts.push(`<optgroup label="Fabric Loader">${versionCatalog.fabric.map(v=>`<option value="Fabric|${esc(v)}">Fabric Loader ${esc(v)}</option>`).join("")}</optgroup>`);
 }else opts=(versionCatalog[g]||VERSION_FALLBACK[g]||[]).map(v=>`<option value="Base|${esc(versionLabel(v))}">${esc(versionLabel(v))}</option>`);
 el.innerHTML=`<option value="">Versiyani tanlang...</option>`+opts.join("");
 if([...el.options].some(o=>o.value===old))el.value=old; else if(el.options.length>1)el.selectedIndex=1;
}
const CATS={mc:["mods","skins","textures","maps","seeds","shaders"],cs:["skins","maps","sounds","sprays","plugins"],gta:["cars","skins","scripts","maps"]};
const ICON={mods:"🧩",skins:"👕",textures:"🖼️",maps:"🗺️",seeds:"🌱",shaders:"✨",sounds:"🔊",sprays:"🎨",plugins:"🔌",cars:"🚗",scripts:"📜"};
/* ===== CUSTOM GAMES (saved on server, visible to everyone) ===== */
const BASE_G={cs:"CS 1.6",mc:"Minecraft",gta:"GTA San Andreas"},DEF_CATS=["mods","skins","maps","textures","shaders"];
let customGames=[],adminToken=sessionStorage.getItem("am_atoken")||"";
const logoOf=k=>{const g=customGames.find(x=>x.id==k);return g?g.logo:`logo-${k}.png`};
function applyGames(list){
 customGames=list;
 Object.keys(G).forEach(k=>{if(!BASE_G[k])delete G[k]});Object.keys(CATS).forEach(k=>{if(!BASE_G[k])delete CATS[k]});
 list.forEach(g=>{G[g.id]=g.name;CATS[g.id]=DEF_CATS});
 if(list.length||$("#nav").dataset.dyn){$("#nav").dataset.dyn=1;$("#nav").innerHTML=Object.entries(G).map(([k,v])=>`<a href="#mods" data-g="${k}"><img src="${esc(logoOf(k))}" alt="">${k=="cs"?"CS 1.6 Skins":esc(v)}</a>`).join("")}
 $$(".bgs [data-custom]").forEach(d=>d.remove());
 list.forEach(g=>{const d=document.createElement("div");d.dataset.bg=g.id;d.dataset.custom=1;d.style.backgroundImage=`url("${g.bg}")`;$(".bgs").appendChild(d)});
 const opts=Object.entries(G).map(([k,v])=>`<option value="${k}">${esc(v)}</option>`).join("");
 ["#mg","#ordGame"].forEach(s=>{const e=$(s),o=e.value;e.innerHTML=opts;if(G[o])e.value=o});
 if(!G[gf])gf="all";
 fillCat();drawChips();drawGrid();
}
async function loadGames(){try{const r=await fetch("/api/games",{cache:"no-store"});if(r.ok)applyGames(await r.json())}catch(e){}}
let lang=ld("am_lang","en"),users=ld("am_users",{}),me=ld("am_me",null),mine=ld("am_mods",[]),cms=ld("am_cm",{}),views=ld("am_views",{}),orders=ld("am_orders",[]),gf="all",cat="all",mode="login",mem={},tab="pub",cur=null,cf=null;
if(me&&!users[me])me=null;
const seed=(typeof MODS!=="undefined"?MODS:[]);
const all=()=>mine.concat(seed);
const own=()=>mine.filter(m=>m.o==me);
const t=k=>T[lang][k]||T.en[k]||k;
const toast=m=>{const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(toast.h);toast.h=setTimeout(()=>e.classList.remove("show"),2600)};
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const nm=e=>users[e]?(users[e].nick||users[e].name):e;

/* language + pages */
function applyLang(){
 document.documentElement.lang=lang;
 $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 $$("[data-ph]").forEach(e=>e.placeholder=t(e.dataset.ph));
 const f=$("#mf").files[0];$("#ftxt").textContent=f?f.name:t("modfile");
 setMode(mode);fillCat();drawChips();drawMenu();drawGrid();if(document.body.classList.contains("prof"))drawProfile();
}
function setLang(l){lang=l;sv("am_lang",l);applyLang()}
function showPage(p){
 document.body.classList.toggle("prof",p=="profile"||p=="analytics"||p=="orders");
 document.body.dataset.page=p;
 document.querySelectorAll(".pg").forEach(x=>x.style.display="none");
 const el=document.getElementById(p=="home"?"mods":p); if(el)el.style.display=p=="home"?"block":"block";
 if(p=="profile")drawProfile(); if(p=="analytics")drawAnalytics(); if(p=="orders")drawOrders(); scrollTo(0,0);
}
$("#brand").onclick=()=>{showPage("home");setG("all")};

/* profile menu */
function drawMenu(){
 let h="";
 if(me)h+=`<div class="who">${esc(nm(me))}<br>${esc(me)}</div>`;
 else h+=`<button data-a="login">${t("login")}</button><button class="pri" data-a="signup">${t("signup")}</button>`;
 h+=`<hr><div class="who">${t("lang")}</div><div class="langs">${["en","uz","ru"].map(l=>`<button data-l="${l}" class="${l==lang?"on":""}">${{en:"English",uz:"O'zbek",ru:"Русский"}[l]}</button>`).join("")}</div><hr>`;
 if(me)h+=`<button data-a="profile">👤 ${t("myprofile")}</button><button data-a="analytics">📊 Ko‘rishlar analitikasi</button><button data-a="orders">📦 Zakaz modlar</button>${me===adminLogin?`<button data-a="admin">🛡 Admin panel</button>`:""}<button class="pri" data-a="import">${t("import")}</button><button data-a="logout">${t("logout")}</button>`;
 $("#menu").innerHTML=h;
 const u=users[me];
 $("#pav").innerHTML=me?(u.avatar?`<img src="${u.avatar}" alt="">`:esc(nm(me)[0].toUpperCase())):'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>';
}
$("#menu").onclick=e=>{
 const b=e.target.closest("button");if(!b)return;
 if(b.dataset.l)return setLang(b.dataset.l);
 const a=b.dataset.a;$("#menu").classList.remove("open");
 if(a=="login"||a=="signup"){setMode(a);$("#auth").showModal()}
 if(a=="import")openImport();
 if(a=="profile")showPage("profile");
 if(a=="analytics")showPage("analytics");
 if(a=="orders")showPage("orders");
 if(a=="admin")openAdmin();
 if(a=="logout"){me=null;sv("am_me",null);drawMenu();showPage("home");toast(t("bye"))}
};
$("#pb").onclick=e=>{e.stopPropagation();$("#menu").classList.toggle("open")};
document.addEventListener("click",e=>{if(!e.target.closest(".prof"))$("#menu").classList.remove("open")});
$$("[data-close]").forEach(b=>b.onclick=()=>b.closest("dialog").close());

/* auth */
const hash=async s=>[...new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode("mf"+s)))].map(x=>x.toString(16).padStart(2,"0")).join("");
function setMode(m){
 mode=m;$$("#auth .tabs button").forEach(b=>b.classList.toggle("on",b.dataset.m==m));
 $("#an").style.display=m=="signup"?"block":"none";
 $("#asub").textContent=t(m);$("#aerr").textContent="";
 $("#ap").autocomplete=m=="signup"?"new-password":"current-password";
}
$$("#auth .tabs button").forEach(b=>b.onclick=()=>setMode(b.dataset.m));
$("#asub").onclick=async()=>{
 const e=$("#ae").value.trim(),p=$("#ap").value,n=$("#an").value.trim(),er=$("#aerr");
 if(mode==="login" && e===adminLogin){
   try{const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:p})});
     if(!r.ok)return er.textContent=t("bad");
     adminToken=(await r.json()).token;sessionStorage.setItem("am_atoken",adminToken);
   }catch(x){return er.textContent="Server ishlamayapti: node server.js ni ishga tushiring."}
   me=adminLogin; users[adminLogin]=users[adminLogin]||{name:"Administrator",nick:"Administrator",h:"server",created:Date.now()}; users[adminLogin].role="admin"; sv("am_users",users); sv("am_me",me); $("#auth").close(); drawMenu(); showPage("home"); toast("Admin rejimiga kirdingiz"); return;
 }
 const normalized=e.toLowerCase();
 if(!normalized.includes("@")||p.length<6||(mode==="signup"&&!n))return er.textContent=t("fill");
 const h=await hash(p);
 if(mode=="signup"){
  if(users[normalized])return er.textContent=t("exists");
  users[normalized]={name:n,nick:n,h,created:Date.now()};sv("am_users",users);
 }else if(!users[normalized]||users[normalized].h!=h)return er.textContent=t("bad");
 me=normalized;sv("am_me",me);$("#auth").close();drawMenu();drawGrid();
 $("#ap").value="";toast(t("welcome")+nm(e));
};

/* filters + sidebar */
function setG(g){gf=g;cat="all";drawChips();drawGrid()}
function drawChips(){
 $("#chips").innerHTML=[["all",t("all")],...Object.entries(G)].map(([k,v])=>`<button data-g="${k}" class="${k==gf?"on":""}">${v}</button>`).join("");
 $$("nav a").forEach(a=>a.classList.toggle("on",a.dataset.g==gf));
 $$(".bgs div").forEach(d=>d.classList.toggle("on",d.dataset.bg==gf));
 document.body.dataset.g=gf;
 const cg=customGames.find(x=>x.id==gf),ft=$(".footer");
 $("#footerGame").textContent=cg?cg.footer:"Game mods • Skins • Maps • Shaders";
 ft.style.backgroundImage=cg?`linear-gradient(rgba(10,10,12,.82),rgba(10,10,12,.92)),url("${cg.bg}")`:"";ft.style.backgroundSize="cover";ft.style.borderTopColor=cg?cg.accent:"";
 $("#side").innerHTML=gf=="all"
  ?`<h3>${t("menu")}</h3>`+Object.entries(G).map(([k,v])=>`<button data-g="${k}"><img src="${esc(logoOf(k))}" alt="">${esc(v)}</button>`).join("")
  :`<h3>${G[gf]}</h3><button data-c="all" class="${cat=="all"?"on":""}">📁 ${t("all")}</button>`+CATS[gf].map(c=>`<button data-c="${c}" class="${cat==c?"on":""}">${ICON[c]} ${t("c_"+c)}</button>`).join("");
}
$("#chips").onclick=e=>{const b=e.target.closest("button");if(b)setG(b.dataset.g)};
$("#side").onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.g)setG(b.dataset.g);else{cat=b.dataset.c;drawChips();drawGrid()}};
$("#nav").onclick=e=>{const a=e.target.closest("a");if(!a)return;showPage("home");setG(gf==a.dataset.g?"all":a.dataset.g)};
$("#q").oninput=drawGrid;$("#sort").onchange=drawGrid;

/* cards */
function cover(m){
 const bg=m.img?`url(${m.img})`:m.c2||"linear-gradient(135deg,#ff7a2f,#1a0d04)";
 return `<div class="cov" style="background-image:${bg}"><em>${(G[m.g]||m.g)} · ${t("c_"+(m.c||"mods"))}</em></div>`;
}
const card=m=>`<div class="card" data-id="${m.id}">${cover(m)}<div class="cb"><h3>${esc(m.t)}</h3><small>${t("by")} ${esc(m.a)} · v${esc(m.v)}</small><div class="row"><small>👁 ${(views[m.id]?.total||m.views||0).toLocaleString()} &nbsp; · &nbsp; ⬇ ${(m.dl||0).toLocaleString()}</small><button class="btn" data-dl="${m.id}">${t("download")}</button></div></div></div>`;
function drawGrid(){
 const q=$("#q").value.toLowerCase();
 let l=all().filter(m=>(gf=="all"||m.g==gf)&&(cat=="all"||(m.c||"mods")==cat)&&(m.t+m.a+(m.d||"")).toLowerCase().includes(q));
 if($("#sort").value=="pop")l=l.slice().sort((a,b)=>(b.dl||0)-(a.dl||0));
 $("#grid").innerHTML=l.length?l.map(card).join(""):`<p class="empty">${t("none")}</p>`;
}
function download(id){
 const m=all().find(x=>x.id==id);if(!m)return;
 let href,name;
 if(mem[id]){href=URL.createObjectURL(mem[id]);name=mem[id].name}
 else if(m.file){href=m.file;name=m.fname||""}
 else{href=URL.createObjectURL(new Blob(["astr_mods: "+m.t]));name=m.t.replace(/\W+/g,"_")+".txt";toast(t("demo"))}
 const a=document.createElement("a");a.href=href;a.download=name;a.click();
 m.dl=(m.dl||0)+1;if(String(m.id)[0]=="u")sv("am_mods",mine);drawGrid();
}
function recordView(id){
 const m=all().find(x=>x.id==id); if(!m)return;
 const day=new Date().toISOString().slice(0,10);
 views[id]=views[id]||{total:0,days:{},users:{}};
 views[id].total=(views[id].total||0)+1;
 views[id].days[day]=(views[id].days[day]||0)+1;
 const who=me?(users[me]?.nick||users[me]?.name||me):"Guest";
 views[id].users[who]=(views[id].users[who]||0)+1;
 sv("am_views",views);
}
function openMod(id){
 const m=all().find(x=>x.id==id);if(!m)return;cur=id;recordView(id);
 const l=cms[id]||[];
 $("#vbody").innerHTML=`${cover(m)}<div class="cb"><h2>${esc(m.t)}</h2><small>${t("by")} ${esc(m.a)} · v${esc(m.v)} · 👁 ${(views[m.id]?.total||0).toLocaleString()} · ⬇ ${(m.dl||0).toLocaleString()}</small><p>${esc(m.d)}</p><button class="btn w" data-dl="${m.id}" style="width:100%">${t("download")}</button><h4>${t("comments")} (${l.length})</h4>${l.map(c=>`<div class="cmt"><b>${esc(nm(c.o))}</b> <small>${new Date(c.ts).toLocaleDateString()}</small><br>${esc(c.x)}</div>`).join("")}<textarea rows="2" id="ct" placeholder="${t("addcom")}"></textarea><button class="btn" id="cp">${t("post")}</button></div>`;
 if(!$("#view").open)$("#view").showModal();
}
function gridClick(e){
 const d=e.target.closest("[data-dl]");if(d){e.stopPropagation();return download(d.dataset.dl)}
 const c=e.target.closest(".card");if(c)openMod(c.dataset.id);
}
$("#grid").onclick=gridClick;$("#pbody").onclick=gridClick;
$("#vbody").onclick=e=>{
 const d=e.target.closest("[data-dl]");if(d)return download(d.dataset.dl);
 if(e.target.id=="cp"){
  const x=$("#ct").value.trim();if(!x)return;
  if(!me){$("#view").close();toast(t("need"));setMode("login");return $("#auth").showModal()}
  (cms[cur]=cms[cur]||[]).push({o:me,x,ts:Date.now()});sv("am_cm",cms);openMod(cur);
 }
};

/* profile */
const fit=(f,w,h)=>new Promise(r=>{const i=new Image();i.onload=()=>{const c=document.createElement("canvas");c.width=w;c.height=h;const s=Math.max(w/i.width,h/i.height);c.getContext("2d").drawImage(i,(w-i.width*s)/2,(h-i.height*s)/2,i.width*s,i.height*s);r(c.toDataURL("image/jpeg",.85))};i.src=URL.createObjectURL(f)});
function myComments(){const r=[];for(const id in cms)cms[id].forEach(c=>{if(c.o==me){const m=all().find(x=>x.id==id);r.push({t:m?m.t:id,x:c.x,ts:c.ts})}});return r}
function drawProfile(){
 const u=users[me];if(!u){showPage("home");return}
 $("#pcov").style.backgroundImage=u.cover?`url(${u.cover})`:"";
 $("#pavbig").innerHTML=u.avatar?`<img src="${u.avatar}" alt="">`:esc(nm(me)[0].toUpperCase());
 $("#pnick").textContent=nm(me);
 $("#pmeta").textContent=`${t("group")}: ${t("users")} · ${t("registered")}: ${new Date(u.created||Date.now()).toLocaleDateString()} · ${t("online")}: ${t("justnow")}`;
 const v={pn:u.nick||u.name,pf:u.name,pe:me,pyt:u.yt,pdc:u.dc,ptg:u.tg,pbd:u.bd,pab:u.about};
 for(const k in v)$("#"+k).value=v[k]||"";
 const sk=own().filter(m=>m.c=="skins"),cm=myComments();
 $$("#ptabs button").forEach(b=>{const k=b.dataset.t;b.classList.toggle("on",k==tab);b.textContent=`${k=="pub"?t("pub"):k=="skins"?t("c_skins"):t("comments")} (${k=="pub"?own().length:k=="skins"?sk.length:cm.length})`});
 const list=tab=="pub"?own():sk;
 $("#pbody").innerHTML=tab=="com"?(cm.length?cm.map(c=>`<div class="cmt"><b>${esc(c.t)}</b> <small>${new Date(c.ts).toLocaleDateString()}</small><br>${esc(c.x)}</div>`).join(""):`<p class="empty">${t("nocom")}</p>`):`<div class="grid">${list.length?list.map(card).join(""):`<p class="empty">${t("nocom")}</p>`}</div>`;
}
$$("#ptabs button").forEach(b=>b.onclick=()=>{tab=b.dataset.t;drawProfile()});
$("#psave").onclick=async()=>{
 const u=users[me],er=$("#perr"),ne=$("#pe").value.trim().toLowerCase();er.textContent="";
 if(!ne.includes("@"))return er.textContent=t("fill");
 if(ne!=me&&users[ne])return er.textContent=t("exists");
 const op=$("#po").value,np=$("#pn2").value,rp=$("#pr").value;
 if(op||np||rp){
  if(await hash(op)!=u.h)return er.textContent=t("badold");
  if(np.length<6||np!=rp)return er.textContent=t("passmis");
  u.h=await hash(np);
 }
 u.nick=$("#pn").value.trim()||u.name;u.name=$("#pf").value.trim()||u.name;
 u.yt=$("#pyt").value.trim();u.dc=$("#pdc").value.trim();u.tg=$("#ptg").value.trim();u.bd=$("#pbd").value;u.about=$("#pab").value;
 if($("#pavf").files[0])u.avatar=await fit($("#pavf").files[0],128,128);
 if($("#pcovf").files[0])u.cover=await fit($("#pcovf").files[0],870,155);
 if(ne!=me){
  users[ne]=u;delete users[me];
  mine.forEach(m=>{if(m.o==me)m.o=ne});
  for(const id in cms)cms[id].forEach(c=>{if(c.o==me)c.o=ne});
  me=ne;sv("am_me",me);
 }
 mine.forEach(m=>{if(m.o==me)m.a=u.nick});
 if(!(sv("am_users",users)&&sv("am_mods",mine)&&sv("am_cm",cms)))return er.textContent=t("full");
 ["#po","#pn2","#pr","#pavf","#pcovf"].forEach(s=>$(s).value="");
 drawMenu();drawProfile();toast(t("saved"));
};

/* import */
function fillCat(){const g=$("#mg").value,v=$("#mcat").value;$("#mcat").innerHTML=CATS[g].map(c=>`<option value="${c}">${ICON[c]} ${t("c_"+c)}</option>`).join("");if(CATS[g].includes(v))$("#mcat").value=v;fillVersionPicker()}
$("#mg").onchange=fillCat;
function openImport(){if(!me){toast(t("need"));setMode("login");return $("#auth").showModal()}$("#ierr").textContent="";if(gf!="all"){$("#mg").value=gf;fillCat()}$("#imp").showModal()}
$("#up1").onclick=openImport;
$("#mc").onchange=e=>{
 cf=e.target.files[0];if(!cf)return;
 $("#cprev").style.display="block";$("#cprev").src=URL.createObjectURL(cf);$("#ctxt").textContent=cf.name;
};
$("#mf").onchange=e=>$("#ftxt").textContent=e.target.files[0]?.name||t("modfile");
const rd=f=>new Promise(r=>{const x=new FileReader();x.onload=()=>r(x.result);x.readAsDataURL(f)});
$("#isub").onclick=async()=>{
 const f=$("#mf").files[0],ti=$("#mt").value.trim();
 if(!f||!ti)return $("#ierr").textContent=t("nofile");
 const id="u"+Date.now(),m={id,o:me,g:$("#mg").value,c:$("#mcat").value,t:ti,a:nm(me),v:$("#mv").value||"",d:$("#md").value,dl:0};
 mem[id]=f;
 if(f.size<1.2e6){m.file=await rd(f);m.fname=f.name}
 if(cf)m.img=await fit(cf,640,360);
 mine.unshift(m);
 if(!sv("am_mods",mine)){mine.shift();return $("#ierr").textContent=t("full")}
 $("#imp").close();["#mt","#mv","#md","#mf"].forEach(s=>$(s).value="");cf=null;
 $("#cprev").style.display="none";$("#ctxt").textContent=t("cover");$("#ftxt").textContent=t("modfile");
 showPage("home");setG(m.g);cat=m.c;drawChips();drawGrid();toast(t("done"));location.hash="mods";
};



/* ===== ADMIN PANEL ===== */
let adminTab="dashboard";
function openAdmin(){
 if(me!==adminLogin){toast("Admin panel faqat administrator uchun");return}
 renderAdmin(); $("#adminDlg").showModal();
}
function adminData(){
 const list=all(); const totalViews=list.reduce((n,m)=>n+(views[m.id]?.total||m.views||0),0); const totalDl=list.reduce((n,m)=>n+(m.dl||0),0);
 return {mods:list,users:Object.entries(users),orders,views:totalViews,downloads:totalDl};
}
function renderAdmin(){
 const d=adminData();
 if(adminTab==="dashboard")$("#adminBody").innerHTML=`<div class="admin-content"><div class="admin-grid"><div class="admin-stat">🧩<b>${d.mods.length}</b><small>Jami mod</small></div><div class="admin-stat">👤<b>${d.users.length}</b><small>Userlar</small></div><div class="admin-stat">👁<b>${d.views}</b><small>Ko‘rishlar</small></div><div class="admin-stat">⬇<b>${d.downloads}</b><small>Downloadlar</small></div></div><div class="chart-card" style="margin-top:16px"><div class="chart-top"><div><h3>Platforma holati</h3><small>Admin dashboard</small></div></div><div class="admin-grid"><div class="admin-stat">Minecraft <b>${d.mods.filter(m=>m.g==='mc').length}</b><small>mod</small></div><div class="admin-stat">CS 1.6 <b>${d.mods.filter(m=>m.g==='cs').length}</b><small>mod</small></div><div class="admin-stat">GTA SA <b>${d.mods.filter(m=>m.g==='gta').length}</b><small>mod</small></div><div class="admin-stat">Zakazlar <b>${d.orders.length}</b><small>jami</small></div></div></div></div>`;
 if(adminTab==="mods")$("#adminBody").innerHTML=`<div class="admin-content"><div class="admin-table">${d.mods.map(m=>`<div class="admin-row"><div><b>${esc(m.t)}</b><small>${(G[m.g]||m.g)} · ${esc(m.v||'Versiya tanlanmagan')}</small></div><div>👁 ${(views[m.id]?.total||m.views||0)} · ⬇ ${m.dl||0}</div><div>${esc(m.a)}</div><div>${new Date(m.ts||Date.now()).toLocaleDateString()}</div><div class="admin-actions">${String(m.id).startsWith('u')?`<button class="danger" data-admin-delmod="${m.id}">O‘chirish</button>`:`<span>Seed</span>`}</div></div>`).join('')}</div></div>`;
 if(adminTab==="users")$("#adminBody").innerHTML=`<div class="admin-content"><div class="admin-table">${d.users.map(([email,u])=>`<div class="admin-row"><div><b>${esc(u.nick||u.name||email)}</b><small>${esc(email)}</small></div><div>${u.role==='admin'?'🛡 Admin':'👤 User'}</div><div>${new Date(u.created||Date.now()).toLocaleDateString()}</div><div>Mods: ${mine.filter(m=>m.o===email).length}</div><div></div></div>`).join('')}</div></div>`;
 if(adminTab==="orders")$("#adminBody").innerHTML=`<div class="admin-content"><div class="admin-table">${d.orders.length?d.orders.map(o=>`<div class="admin-row"><div><b>${esc(o.title)}</b><small>${G[o.g]}</small></div><div>${esc(o.by)}</div><div><select data-admin-status="${o.id}"><option value="pending" ${o.status==='pending'?'selected':''}>Kutilmoqda</option><option value="progress" ${o.status==='progress'?'selected':''}>Jarayonda</option><option value="done" ${o.status==='done'?'selected':''}>Bajarildi</option></select></div><div><input data-admin-worker="${o.id}" value="${esc(o.worker||'')}" placeholder="Bajaruvchi"></div><div class="admin-actions"><button data-admin-saveorder="${o.id}">Saqlash</button></div></div>`).join(''):`<div class="empty">Zakazlar yo‘q.</div>`}</div></div>`;
 if(adminTab==="games")$("#adminBody").innerHTML=`<div class="admin-content"><button class="btn w" id="addGameBtn">+ O‘yin qo‘shish</button><div class="admin-table" style="margin-top:14px">${customGames.length?customGames.map(g=>`<div class="admin-row"><div><b>${esc(g.name)}</b><small>${esc(g.footer)}</small></div><div><img src="${esc(g.logo)}" alt="" style="width:40px;height:40px;border-radius:8px;object-fit:cover"></div><div><img src="${esc(g.bg)}" alt="" style="width:90px;height:50px;border-radius:8px;object-fit:cover"></div><div></div><div class="admin-actions"><button class="danger" data-admin-delgame="${g.id}">O‘chirish</button></div></div>`).join(""):`<div class="empty">Hali o‘yin qo‘shilmagan.</div>`}</div></div>`;
 if(adminTab==="versions")$("#adminBody").innerHTML=`<div class="admin-content"><div class="admin-version"><div class="version-box"><h3>🎮 Minecraft Vanilla</h3><div class="version-list">${(versionCatalog.mc||[]).map(v=>`<span>${esc(v)}</span>`).join('')}</div></div><div class="version-box"><h3>🔧 Forge</h3><div class="version-list">${(versionCatalog.forge||[]).map(v=>`<span>${esc(v.label||v.version)}</span>`).join('')}</div></div><div class="version-box"><h3>🧵 Fabric Loader</h3><div class="version-list">${(versionCatalog.fabric||[]).map(v=>`<span>${esc(v)}</span>`).join('')}</div></div><div class="version-box"><h3>Counter-Strike / GTA</h3><div class="version-list">${[...(versionCatalog.cs||[]),...(versionCatalog.gta||[])].map(v=>`<span>${esc(v)}</span>`).join('')}</div></div></div><button class="btn w" style="margin-top:14px" id="adminRefreshVersions">↻ Versiyalarni yangilash</button></div>`;
 $$(".admin-tabs button").forEach(b=>b.classList.toggle('on',b.dataset.at===adminTab));
}
$(".admin-tabs").onclick=e=>{const b=e.target.closest('[data-at]');if(b){adminTab=b.dataset.at;renderAdmin()}};
$("#adminBody").onclick=e=>{
 const d=e.target.closest('[data-admin-delmod]');if(d){if(confirm('Bu modni o‘chirishni tasdiqlaysizmi?')){mine=mine.filter(m=>m.id!==d.dataset.adminDelmod);sv('am_mods',mine);drawGrid();renderAdmin();toast('Mod o‘chirildi')}}
 const so=e.target.closest('[data-admin-saveorder]');if(so){const o=orders.find(x=>x.id===so.dataset.adminSaveorder);if(o){o.status=$(`[data-admin-status="${o.id}"]`).value;o.worker=$( `[data-admin-worker="${o.id}"]`).value.trim();sv('am_orders',orders);drawOrders();renderAdmin();toast('Zakaz yangilandi')}}
 if(e.target.id==='addGameBtn'){$("#gerr").textContent="";$("#gameDlg").showModal()}
 const dg=e.target.closest('[data-admin-delgame]');if(dg&&confirm('Bu o‘yinni o‘chirasizmi?')){fetch('/api/games/'+dg.dataset.adminDelgame,{method:'DELETE',headers:{Authorization:'Bearer '+adminToken}}).then(async r=>{if(!r.ok)return toast('Xatolik / sessiya tugagan');applyGames(await r.json());renderAdmin();toast('O‘yin o‘chirildi')})}
 if(e.target.id==='adminRefreshVersions'){refreshVersions();toast('Versiyalar yangilanmoqda...')}
};

/* ===== PREMIUM + DONATION ===== */
// Saytda hammaga ko‘rsatiladigan donation karta raqami.
// O‘zgartirish kerak bo‘lsa, faqat shu qatorni almashtiring.
const DONATION_CARD_NUMBER = "4413 5976 0786 0895";

function openDonation(){
  const d=$("#donationDlg");
  if(!d) return;
  $("#donCardNumber").textContent=DONATION_CARD_NUMBER;
  if(!d.open)d.showModal();
}
$("#donateBtn")?.addEventListener("click",openDonation);
$("#premiumBtn")?.addEventListener("click",()=>$("#premiumDlg")?.showModal());
$("#premiumDonate")?.addEventListener("click",()=>{ $("#premiumDlg")?.close(); openDonation(); });
$("#donationClose")?.addEventListener("click",()=>$("#donationDlg")?.close());

$("#copyDonCard")?.addEventListener("click",async()=>{
  try{
    await navigator.clipboard.writeText(DONATION_CARD_NUMBER.replace(/\s/g,""));
    toast("Karta raqami nusxalandi.");
  }catch(e){
    toast("Nusxalash brauzer tomonidan bloklandi.");
  }
});

/* intro */
const bars=$("#bars");
for(let i=0;i<14;i++){const e=document.createElement("i");e.style.animationDelay=i*.07+"s,"+i*.4+"s";bars.appendChild(e)}
setTimeout(()=>{$("#intro").classList.add("done");document.body.classList.add("go")},2200);
applyLang();
fillVersionPicker();
refreshVersions();
/* ===== views analytics ===== */
function drawAnalytics(){
 if(!me)return;
 const mineIds=own().map(m=>m.id), allViews=mineIds.map(id=>views[id]||{total:0,days:{},users:{}}), total=allViews.reduce((n,v)=>n+(v.total||0),0);
 const unique=new Set(); allViews.forEach(v=>Object.keys(v.users||{}).forEach(u=>unique.add(u)));
 const downloads=own().reduce((n,m)=>n+(m.dl||0),0);
 $("#stats").innerHTML=`<div class="stat"><span>👁</span><b>${total.toLocaleString()}</b><small>Jami ko‘rish</small></div><div class="stat"><span>👤</span><b>${unique.size.toLocaleString()}</b><small>Noyob viewer</small></div><div class="stat"><span>⬇</span><b>${downloads.toLocaleString()}</b><small>Yuklab olish</small></div><div class="stat"><span>🧩</span><b>${mineIds.length}</b><small>Import qilingan mod</small></div>`;
 const days=+(($("#chartDays")||{}).value||30), labels=[], vals=[];
 for(let i=days-1;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=d.toISOString().slice(0,10);labels.push(k.slice(5));vals.push(allViews.reduce((n,v)=>n+(v.days?.[k]||0),0))}
 $("#chartRange").textContent=`Oxirgi ${days} kun`;
 drawChart(labels,vals);
 const agg={};allViews.forEach(v=>Object.entries(v.users||{}).forEach(([u,n])=>agg[u]=(agg[u]||0)+n));
 const rows=Object.entries(agg).sort((a,b)=>b[1]-a[1]);
 $("#viewerList").innerHTML=rows.length?rows.map(([u,n],i)=>`<div class="viewer-row"><div class="rank">${i+1}</div><div class="avatar-mini">${esc(u[0]?.toUpperCase()||"?")}</div><div class="vname"><b>${esc(u)}</b><small>Ko‘rganlar soni</small></div><strong>${n} ×</strong></div>`).join(""):`<div class="empty">Hozircha ko‘rishlar yo‘q. Modingizni ulashing!</div>`;
}
function drawChart(labels,vals){
 const c=$("#viewsChart"),r=c.getBoundingClientRect(),d=devicePixelRatio||1,w=Math.max(320,r.width),h=300;c.width=w*d;c.height=h*d;const x=c.getContext("2d");x.scale(d,d);x.clearRect(0,0,w,h);
 const max=Math.max(1,...vals), pad={l:42,r:18,t:22,b:42},cw=w-pad.l-pad.r,ch=h-pad.t-pad.b;
 x.strokeStyle="rgba(255,255,255,.1)";x.fillStyle="rgba(255,255,255,.55)";x.font="11px Inter,Arial";
 for(let j=0;j<5;j++){const y=pad.t+ch*j/4;x.beginPath();x.moveTo(pad.l,y);x.lineTo(w-pad.r,y);x.stroke();x.fillText(Math.round(max*(1-j/4)),8,y+4)}
 const pts=vals.map((v,i)=>[pad.l+(vals.length==1?cw/2:i*cw/(vals.length-1)),pad.t+ch-(v/max)*ch]);
 const grad=x.createLinearGradient(0,pad.t,0,h);grad.addColorStop(0,"rgba(255,122,47,.38)");grad.addColorStop(1,"rgba(255,122,47,0)");
 x.beginPath();pts.forEach((p,i)=>i?x.lineTo(...p):x.moveTo(...p));x.lineTo(pts.at(-1)[0],pad.t+ch);x.lineTo(pts[0][0],pad.t+ch);x.closePath();x.fillStyle=grad;x.fill();
 x.beginPath();pts.forEach((p,i)=>i?x.lineTo(...p):x.moveTo(...p));x.strokeStyle="#ff7a2f";x.lineWidth=3;x.stroke();
 pts.forEach((p,i)=>{if(i%Math.ceil(vals.length/7)==0||i==vals.length-1){x.fillStyle="#ffb27a";x.beginPath();x.arc(p[0],p[1],4,0,Math.PI*2);x.fill();x.fillStyle="rgba(255,255,255,.5)";x.fillText(labels[i],p[0]-13,h-14)}})
}
$("#chartDays").onchange=drawAnalytics;
window.addEventListener("resize",()=>document.body.dataset.page=="analytics"&&drawAnalytics());

/* ===== orders ===== */
function drawOrders(){
 const list=orders.slice().sort((a,b)=>b.ts-a.ts);
 $("#ordersList").innerHTML=list.length?`<div class="orders-table"><div class="order-head"><span>Sana</span><span>Mod / O‘yin</span><span>Buyurtmachi</span><span>Bajaruvchi / Holat</span></div>${list.map(o=>`<div class="order-row"><span>${new Date(o.ts).toLocaleDateString()}</span><span><b>${esc(o.title)}</b><small>${G[o.g]}</small></span><span>${esc(o.by)}</span><span><b>${esc(o.worker||"—")}</b><small class="status ${o.status||"pending"}">${o.status=="done"?"Bajarildi":"Kutilmoqda"}</small></span></div>`).join("")}</div>`:`<div class="empty">Hozircha zakazlar yo‘q.</div>`;
}
function openOrder(){if(!me){toast(t("need"));setMode("login");return $("#auth").showModal()}$("#ordErr").textContent="";$("#orderDlg").showModal()}
$("#newOrder").onclick=openOrder;$("#footerOrder").onclick=openOrder;
$("#ordSubmit").onclick=()=>{
 const title=$("#ordTitle").value.trim(),desc=$("#ordDesc").value.trim();
 if(!title||!desc)return $("#ordErr").textContent="Mod nomi va talablarni yozing.";
 orders.unshift({id:"o"+Date.now(),ts:Date.now(),title,g:$("#ordGame").value,by:nm(me),o:me,desc,worker:"—",status:"pending"});
 if(!sv("am_orders",orders))return $("#ordErr").textContent=t("full");
 $("#orderDlg").close();$("#ordTitle").value="";$("#ordDesc").value="";drawOrders();toast("Zakaz yuborildi!");
};

/* ===== add game form ===== */
let gLogo="",gBg="";
const fitLogo=f=>new Promise(r=>{const i=new Image();i.onload=()=>{const c=document.createElement("canvas");c.width=c.height=128;const k=Math.min(128/i.width,128/i.height);c.getContext("2d").drawImage(i,(128-i.width*k)/2,(128-i.height*k)/2,i.width*k,i.height*k);r(c.toDataURL("image/png"))};i.src=URL.createObjectURL(f)});
$("#glogo").onchange=async e=>{const f=e.target.files[0];if(!f)return;gLogo=await fitLogo(f);$("#glogoP").src=gLogo;$("#glogoP").style.display="block";$("#glogoT").textContent=f.name};
$("#gbg").onchange=async e=>{const f=e.target.files[0];if(!f)return;gBg=await fit(f,1600,900);$("#gbgP").src=gBg;$("#gbgP").style.display="block";$("#gbgT").textContent=f.name};
$("#gsub").onclick=async()=>{
 const name=$("#gname").value.trim(),er=$("#gerr");
 if(!name||!gLogo||!gBg)return er.textContent="Logo, o‘yin nomi va orqa fon rasmini kiriting.";
 try{
  const r=await fetch("/api/games",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+adminToken},body:JSON.stringify({name,logo:gLogo,bg:gBg,footer:$("#gfoot").value.trim()||name+" • Mods • Skins • Maps",accent:$("#gacc").value})});
  if(r.status==401)return er.textContent="Admin sessiya tugagan, chiqib qayta kiring.";
  if(!r.ok)return er.textContent=(r.status==404||r.status==405||r.status==501)?"Server topilmadi. Terminalda `node server.js` ishga tushiring va http://localhost:3000 orqali oching (Live Server 5500 ishlamaydi).":"Xatolik: "+(await r.text()||r.status);
  applyGames(await r.json());$("#gameDlg").close();gLogo=gBg="";
  ["#gname","#gfoot","#glogo","#gbg"].forEach(x=>$(x).value="");$("#glogoP").style.display=$("#gbgP").style.display="none";$("#glogoT").textContent="Logo rasm tashlash (bosing)";$("#gbgT").textContent="Orqa fon rasmi (Minecraft / CS 1.6 kabi)";
  renderAdmin();toast("O‘yin qo‘shildi — hamma ko‘radi!");
 }catch(x){er.textContent="Server ishlamayapti (node server.js)."}
};
loadGames();
