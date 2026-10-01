// astr_mods server — no dependencies. Run: node server.js
const http=require("http"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const PORT=process.env.PORT||3000, ROOT=__dirname, DATA=path.join(ROOT,"data","games.json");
const ADMIN_LOGIN=process.env.ADMIN_LOGIN||"@adminMODlogin", ADMIN_PASSWORD=process.env.ADMIN_PASSWORD||"adminpass";
const tokens=new Map(); // token -> expiry
fs.mkdirSync(path.dirname(DATA),{recursive:true});
const load=()=>{try{return JSON.parse(fs.readFileSync(DATA,"utf8"))}catch(e){return[]}};
const save=l=>fs.writeFileSync(DATA,JSON.stringify(l));
const eq=(a,b)=>{const x=crypto.createHash("sha256").update(String(a)).digest(),y=crypto.createHash("sha256").update(String(b)).digest();return crypto.timingSafeEqual(x,y)};
const send=(res,code,obj)=>{res.writeHead(code,{"Content-Type":"application/json"});res.end(typeof obj==="string"?obj:JSON.stringify(obj))};
const body=req=>new Promise((ok,no)=>{let d="";req.on("data",c=>{d+=c;if(d.length>12e6){no();req.destroy()}});req.on("end",()=>{try{ok(JSON.parse(d||"{}"))}catch(e){no(e)}})});
const isAdmin=req=>{const t=(req.headers.authorization||"").replace("Bearer ","");const x=tokens.get(t);return !!x&&x>Date.now()};
const MIME={".html":"text/html",".js":"text/javascript",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".zip":"application/zip"};
http.createServer(async(req,res)=>{
 const url=decodeURIComponent(req.url.split("?")[0]);
 try{
  if(url==="/api/games"&&req.method==="GET")return send(res,200,load());
  if(url==="/api/admin/login"&&req.method==="POST"){
   const b=await body(req);
   if(!eq(b.login,ADMIN_LOGIN)||!eq(b.password,ADMIN_PASSWORD))return send(res,401,{error:"bad"});
   const t=crypto.randomBytes(24).toString("hex");tokens.set(t,Date.now()+12*3600e3);return send(res,200,{token:t});
  }
  if(url==="/api/games"&&req.method==="POST"){
   if(!isAdmin(req))return send(res,401,{error:"auth"});
   const b=await body(req),name=String(b.name||"").trim().slice(0,40);
   if(!name||!/^data:image\//.test(b.logo||"")||!/^data:image\//.test(b.bg||""))return send(res,400,"Noto‘g‘ri ma’lumot");
   const list=load();
   list.push({id:"g"+Date.now().toString(36)+crypto.randomBytes(2).toString("hex"),name,logo:b.logo,bg:b.bg,footer:String(b.footer||name).slice(0,120),accent:/^#[0-9a-f]{6}$/i.test(b.accent)?b.accent:"#ff7a2f",ts:Date.now()});
   save(list);return send(res,200,list);
  }
  if(url.startsWith("/api/games/")&&req.method==="DELETE"){
   if(!isAdmin(req))return send(res,401,{error:"auth"});
   const id=url.split("/").pop(),list=load().filter(g=>g.id!==id);save(list);return send(res,200,list);
  }
  // static files (server code and data are never served)
  let f=path.normalize(path.join(ROOT,url==="/"?"index.html":url));
  if(!f.startsWith(ROOT)||/[\\/](data|node_modules)[\\/]|server\.js$|package\.json$/.test(f)){res.writeHead(403);return res.end("Forbidden")}
  fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end("Not found")}res.writeHead(200,{"Content-Type":MIME[path.extname(f)]||"application/octet-stream"});res.end(d)});
 }catch(e){send(res,400,"Bad request")}
}).listen(PORT,()=>console.log("astr_mods: http://localhost:"+PORT));
