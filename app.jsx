<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ShieldUnhack Studio</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');
:root{
  --bg:#06070e;--surf:#0d0e1a;--card:#121320;--brd:#1e1f35;
  --acc:#ff3d3d;--acc2:#ff7070;--grn:#1fdb72;--warn:#f59e0b;--blue:#3d8eff;
  --txt:#f0eeff;--dim:#6b6b90;--dim2:#1c1d32;
}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{height:100%;overflow:hidden;background:var(--bg);color:var(--txt);font-family:'Inter',sans-serif;font-size:13px;}
body{display:flex;flex-direction:column;}

/* TOP BAR */
.bar{height:50px;min-height:50px;background:var(--surf);border-bottom:1px solid var(--brd);
  display:flex;align-items:center;padding:0 14px;gap:10px;flex-shrink:0;}
.logo{font-family:'Space Grotesk',sans-serif;font-size:15px;font-weight:700;
  background:linear-gradient(135deg,#ff3d3d,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap;}
.logo-sub{font-size:11px;color:var(--dim);white-space:nowrap;}
.sp{flex:1;}
.tabs{display:flex;background:var(--dim2);border-radius:8px;padding:2px;gap:2px;}
.tab{padding:5px 11px;border-radius:6px;font-size:12px;cursor:pointer;color:var(--dim);
  border:none;background:transparent;font-family:'Inter',sans-serif;transition:all .15s;white-space:nowrap;}
.tab.on{background:var(--acc);color:#fff;font-weight:600;}
.sbar{font-size:11px;color:var(--warn);text-align:right;line-height:1.3;min-width:180px;max-width:340px;}

/* LAYOUT */
.main{display:flex;flex:1;overflow:hidden;}

/* LEFT */
.L{width:262px;min-width:262px;background:var(--surf);border-right:1px solid var(--brd);
  display:flex;flex-direction:column;overflow-y:auto;padding:11px 10px;gap:8px;}
.L::-webkit-scrollbar{width:3px;}
.L::-webkit-scrollbar-thumb{background:var(--dim2);border-radius:3px;}
.lbl{font-size:10px;font-weight:600;letter-spacing:.1em;color:var(--dim);text-transform:uppercase;margin-bottom:3px;}
.fld{display:flex;flex-direction:column;gap:3px;}
input[type=text],select,textarea{width:100%;background:var(--card);border:1px solid var(--brd);color:var(--txt);
  font-family:'Inter',sans-serif;font-size:12px;padding:7px 9px;border-radius:7px;outline:none;
  transition:border-color .15s;resize:none;appearance:none;}
input:focus,select:focus,textarea:focus{border-color:var(--acc);}
textarea{min-height:44px;}
select{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236b6b90'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 9px center;}
.hr{height:1px;background:var(--brd);flex-shrink:0;}
.row2{display:flex;gap:5px;}
.row2>button{flex:1;}
.btn-main{width:100%;padding:10px;border-radius:9px;border:none;
  background:linear-gradient(135deg,#ff3d3d,#ff7b00);color:#fff;
  font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:opacity .15s;}
.btn-main:hover:not(:disabled){opacity:.85;}
.btn-main:disabled{opacity:.28;cursor:not-allowed;}
.btn{padding:8px 10px;border-radius:7px;border:1px solid var(--brd);background:var(--card);
  color:var(--txt);font-family:'Inter',sans-serif;font-size:12px;cursor:pointer;transition:all .15s;}
.btn:hover:not(:disabled){border-color:var(--acc);color:var(--acc2);}
.btn:disabled{opacity:.28;cursor:not-allowed;}
.btn-g{border-color:var(--grn)!important;color:var(--grn)!important;font-weight:500;}
.btn-r{border-color:var(--acc)!important;color:var(--acc)!important;}
.trow{display:flex;gap:4px;}
.tog{flex:1;padding:6px 4px;border-radius:7px;border:1px solid var(--brd);background:var(--card);
  color:var(--dim);cursor:pointer;text-align:center;font-size:11px;font-family:'Inter',sans-serif;transition:all .15s;white-space:nowrap;}
.tog.on{border-color:var(--acc);background:rgba(255,61,61,.15);color:var(--acc2);font-weight:500;}
.pgwrap{height:3px;background:var(--brd);border-radius:3px;overflow:hidden;}
.pgfill{height:100%;background:linear-gradient(90deg,var(--acc),#ff8c00);width:0%;transition:width .4s;}
.infobox{font-size:10.5px;color:var(--dim);line-height:1.6;padding:7px 9px;
  background:var(--card);border-radius:7px;border:1px solid var(--brd);}
.infobox b{color:var(--txt);}
.hidden{display:none!important;}

/* CENTER */
.C{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:12px;}
.phone{position:relative;width:232px;height:412px;background:#000;border-radius:30px;
  box-shadow:0 0 0 7px #0e0e20,0 0 0 8.5px var(--brd),0 32px 64px rgba(0,0,0,.9);overflow:hidden;flex-shrink:0;}
.phone::before{content:'';position:absolute;top:6px;left:50%;transform:translateX(-50%);
  width:50px;height:11px;background:#0e0e20;border-radius:0 0 8px 8px;z-index:30;}
#rc{width:232px;height:412px;display:block;}
.gpill{position:absolute;top:17px;left:9px;z-index:20;display:none;align-items:center;gap:4px;
  background:rgba(255,61,61,.93);padding:3px 8px;border-radius:20px;font-size:9px;font-weight:600;color:#fff;}
.gpill.on{display:flex;}
.gdot{width:5px;height:5px;border-radius:50%;background:#fff;animation:bl .7s infinite;}
@keyframes bl{0%,100%{opacity:1;}50%{opacity:.15;}}
.sdots{display:flex;gap:5px;align-items:center;justify-content:center;flex-wrap:wrap;max-width:232px;min-height:12px;}
.hint{font-size:10px;color:var(--dim);text-align:center;}

/* RIGHT */
.R{width:248px;min-width:248px;background:var(--surf);border-left:1px solid var(--brd);
  display:flex;flex-direction:column;overflow-y:auto;padding:11px 10px;gap:8px;}
.R::-webkit-scrollbar{width:3px;}
.R::-webkit-scrollbar-thumb{background:var(--dim2);border-radius:3px;}
.mc{background:var(--card);border:1px solid var(--brd);border-radius:8px;padding:9px;
  display:flex;flex-direction:column;gap:5px;}
.mv{font-size:11.5px;color:var(--txt);line-height:1.5;max-height:80px;overflow-y:auto;}
.mv::-webkit-scrollbar{width:2px;}
.mcp{font-size:10.5px;color:var(--blue);cursor:pointer;}
.mcp:hover{text-decoration:underline;}
.dl{display:none;padding:8px 10px;border-radius:7px;text-decoration:none;text-align:center;
  font-size:12px;font-weight:500;border:1px solid var(--grn);color:var(--grn);
  background:rgba(31,219,114,.06);transition:opacity .15s;}
.dl:hover{opacity:.8;}
.dl.show{display:block;}
.dl.blue{border-color:var(--blue);color:var(--blue);background:rgba(61,142,255,.08);}
.rph{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;padding:14px;}
.rph p{font-size:12px;line-height:1.6;color:var(--dim);}
.cal-grid{display:flex;flex-direction:column;gap:5px;}
.cal-item{background:var(--card);border:1px solid var(--brd);border-radius:7px;padding:8px 9px;cursor:pointer;transition:border-color .15s;}
.cal-item:hover{border-color:var(--acc);}
.cal-day{font-size:10px;color:var(--acc);font-weight:600;margin-bottom:2px;}
.cal-title{font-size:11.5px;color:var(--txt);line-height:1.4;}
.score-badge{display:inline-block;padding:2px 7px;border-radius:20px;font-size:10px;font-weight:700;margin-left:6px;}
.score-high{background:rgba(31,219,114,.2);color:var(--grn);}
.score-med{background:rgba(245,158,11,.2);color:var(--warn);}
</style>
</head>
<body>

<div class="bar">
  <span class="logo">🛡 ShieldUnhack Studio</span>
  <span class="logo-sub">Cybersecurity · Viral Shorts Generator</span>
  <div class="sp"></div>
  <div class="tabs">
    <button class="tab on" id="tabV" onclick="setTab('video')">⚡ Short (20s)</button>
    <button class="tab" id="tabLV" onclick="setTab('longvideo')">🎬 Long Video (2 min)</button>
    <button class="tab" id="tabC" onclick="setTab('calendar')">📅 30-Day Calendar</button>
    <button class="tab" id="tabT" onclick="setTab('tips')">🎯 Growth Tips</button>
  </div>
  <div class="sp"></div>
  <div class="sbar" id="status">Pick a topic idea or type your own, then Generate.</div>
</div>

<div class="main">

<!-- LEFT PANEL -->
<div class="L">
  <div class="fld">
    <div class="lbl">Topic idea</div>
    <select id="topicSel" onchange="onTopicSel()">
      <option value="">-- Pick a viral topic --</option>
      <optgroup label="🔥 SCARY REAL STORIES (highest views)">
        <option value="WhatsApp scam stole £20000">WhatsApp scam that stole £20,000</option>
        <option value="SIM swap attack emptied bank account">SIM swap attack emptied a bank account</option>
        <option value="fake parcel text message scam">Fake parcel text message scam</option>
        <option value="public WiFi hack at a coffee shop">Public WiFi hack at a coffee shop</option>
        <option value="deepfake voice call scam targeting parents">Deepfake voice call scam targeting parents</option>
        <option value="QR code scam in restaurants">QR code scam in restaurants</option>
        <option value="LinkedIn job offer hacking attack">LinkedIn job offer hacking attack</option>
      </optgroup>
      <optgroup label="⚙️ ONE SETTING THAT SAVES YOU">
        <option value="Gmail setting that blocks 99 percent of hackers">Gmail setting that blocks 99% of hackers</option>
        <option value="iPhone privacy setting most people never turn on">iPhone privacy setting most people never turn on</option>
        <option value="Android setting that stops apps spying on you">Android setting that stops apps spying on you</option>
        <option value="two factor authentication setup">Two-factor authentication — the right way</option>
        <option value="password manager setup in 60 seconds">Password manager setup in 60 seconds</option>
      </optgroup>
      <optgroup label="😱 SHOCKING FACTS">
        <option value="your password is probably already leaked online">Your password is probably already leaked online</option>
        <option value="hackers can clone your fingerprint from a photo">Hackers can clone your fingerprint from a photo</option>
        <option value="your smart TV is recording everything you say">Your smart TV is recording everything you say</option>
        <option value="deleted photos are never really deleted">Deleted photos are never really deleted</option>
        <option value="what hackers can do with just your phone number">What hackers can do with just your phone number</option>
      </optgroup>
      <optgroup label="🛡 PROTECT YOURSELF NOW">
        <option value="check if you have been hacked right now">Check if you have been hacked right now</option>
        <option value="signs your phone has been hacked">Signs your phone has been hacked</option>
        <option value="how to freeze your credit and why you should">How to freeze your credit and why you should</option>
        <option value="secure your home WiFi in 3 steps">Secure your home WiFi in 3 steps</option>
      </optgroup>
    </select>
    <input type="text" id="topicInput" placeholder="Or type your own topic…" style="margin-top:5px;">
  </div>

  <div class="fld">
    <div class="lbl">Background style</div>
    <div class="bg-grid" id="bgGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;"></div>
  </div>

  <div class="fld">
    <div class="lbl">Upload images (optional)</div>
    <input type="file" id="imgUp" accept="image/*" multiple style="font-size:10.5px;color:var(--dim);">
  </div>

  <div class="fld">
    <div class="lbl">Music mood</div>
    <select id="musicSel">
      <option value="tense">Tense / dramatic (best for scam stories)</option>
      <option value="upbeat">Upbeat pulse</option>
      <option value="calm">Calm ambient</option>
      <option value="cinematic">Cinematic swell</option>
    </select>
  </div>

  <div class="fld">
    <div class="lbl">Captions style</div>
    <div class="trow">
      <button class="tog on" id="capBig" onclick="setCap('big')">BIG</button>
      <button class="tog" id="capPop" onclick="setCap('pop')">POP</button>
      <button class="tog" id="capNone" onclick="setCap('none')">None</button>
    </div>
  </div>

  <div class="fld">
    <div class="lbl">Audio in download</div>
    <div class="trow">
      <button class="tog on" id="tMusic" onclick="setAudio('music')">🎵 Music</button>
      <button class="tog" id="tVoice" onclick="setAudio('voice')">🗣 Voice</button>
    </div>
  </div>

  <div class="fld hidden" id="vpW">
    <div class="lbl">Voice</div>
    <select id="vp"></select>
    <button class="btn" style="margin-top:4px;font-size:11px;" onclick="testVoice()">🔊 Test</button>
    <div class="infobox" style="margin-top:4px;">
      Click Download → browser asks for <b>microphone</b> → click Allow → voice is captured into the file. Use headphones for cleanest result.
    </div>
  </div>

  <div class="pgwrap"><div class="pgfill" id="pgFill"></div></div>
  <div class="hr"></div>
  <button class="btn-main" id="genBtn">🛡 Generate ShieldUnhack Reel</button>
  <div class="row2">
    <button class="btn" id="prevBtn" disabled>▶ Preview</button>
    <button class="btn btn-r" id="stopBtn" disabled style="max-width:34px;text-align:center;padding:8px 0;">■</button>
  </div>
  <button class="btn btn-g" id="dlBtn" disabled>⬇ Download Video</button>
  <button class="btn hidden" id="scriptBtn" onclick="exportScript()" style="font-size:11.5px;border-color:#3d8eff;color:#3d8eff;">📋 Copy Voice Script (for TTSMaker)</button>
</div>

<!-- CENTER -->
<div class="C">
  <div class="phone">
    <canvas id="rc" width="720" height="1280"></canvas>
    <div class="gpill" id="gpill"><span class="gdot"></span> GENERATING</div>
  </div>
  <div class="sdots" id="sdots"></div>
  <div class="hint">720×1280 · 9:16 · YouTube Shorts</div>
</div>

<!-- RIGHT -->
<div class="R" id="rightPanel">
  <div class="rph" id="rph">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".3">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
    <p>Pick a topic above and click Generate. Your YouTube title, description, hashtags and download links will appear here.</p>
  </div>
  <div id="rC" style="display:none;flex-direction:column;gap:8px;"></div>
</div>

</div><!-- /main -->

<script>
/* ══ ERRORS ══ */
window.addEventListener('unhandledrejection',e=>ss('Error: '+(e.reason?.message||e.reason)));
window.addEventListener('error',e=>ss('JS: '+e.message));
function ss(m){document.getElementById('status').textContent=m;}
function cp(text,lbl){navigator.clipboard.writeText(text).then(()=>ss(lbl+' copied!')).catch(()=>ss('Select & copy manually.'));}
function setPg(p){document.getElementById('pgFill').style.width=(p<0?0:p)+'%';}

/* ══ TABS ══ */
let currentTab='video';
let isLongVideo=false;
function setTab(t){
  currentTab=t;
  ['tabV','tabLV','tabC','tabT'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove('on');});
  const activeId=t==='video'?'tabV':t==='longvideo'?'tabLV':t==='calendar'?'tabC':'tabT';
  const el=document.getElementById(activeId);if(el)el.classList.add('on');
  if(t==='calendar') showCalendar();
  else if(t==='tips') showTips();
  else if(t==='longvideo') showLongVideoPanel();
  else showVideoPanel();
}
function showLongVideoPanel(){
  isLongVideo=true;
  document.getElementById('rph').style.display='none';
  const rC=document.getElementById('rC');rC.style.display='flex';rC.innerHTML='';
  const info=document.createElement('div');info.className='mc';
  info.innerHTML=`
    <div class="lbl">🎬 Long Video Mode (2 minutes · 16:9 · YouTube)</div>
    <div style="font-size:11.5px;color:var(--dim);line-height:1.6;margin-top:2px;">
      Pick a topic from the dropdown on the left and click <b style="color:var(--txt)">Generate Long Video</b>.<br><br>
      Each of the 8 scenes gets its own auto-matched cybersecurity background — red for threat scenes, matrix for hacker scenes, blue grid for tutorial scenes.<br><br>
      The canvas switches to <b style="color:var(--txt)">16:9 landscape</b> format so you can upload it as a regular YouTube video (not just a Short).<br><br>
      <b style="color:var(--acc)">Tip:</b> After downloading, copy the Voice Script and paste into <a href="https://ttsmaker.com" target="_blank" style="color:#3d8eff;">TTSMaker.com</a> for a professional voiceover, then overlay in CapCut.
    </div>`;
  rC.appendChild(info);
  // update generate button
  const gb=document.getElementById('genBtn');
  if(gb){gb.textContent='🎬 Generate Long Video';gb.style.background='linear-gradient(135deg,#3d8eff,#6c47ff)';}
  // switch canvas to 16:9
  switchCanvasFormat('landscape');
  ss('Long Video mode — pick a topic and click Generate Long Video.');
}
function showVideoPanel(){
  isLongVideo=false;
  document.getElementById('rph').style.display='flex';
  document.getElementById('rC').style.display='none';
  const gb=document.getElementById('genBtn');
  if(gb){gb.textContent='🛡 Generate ShieldUnhack Reel';gb.style.background='linear-gradient(135deg,#ff3d3d,#ff7b00)';}
  switchCanvasFormat('portrait');
}
function showVideoPanel(){
  document.getElementById('rph').style.display='flex';
  document.getElementById('rC').style.display='none';
}

/* ══ TOPIC SELECT ══ */
function onTopicSel(){
  const v=document.getElementById('topicSel').value;
  if(v) document.getElementById('topicInput').value=v;
}

/* ══ CAPTIONS ══ */
let capStyle='big';
function setCap(s){
  capStyle=s;
  ['capBig','capPop','capNone'].forEach(id=>document.getElementById(id).classList.remove('on'));
  document.getElementById(s==='big'?'capBig':s==='pop'?'capPop':'capNone').classList.add('on');
}

/* ══ AUDIO ══ */
let amode='music';
function setAudio(m){
  amode=m;
  document.getElementById('tMusic').classList.toggle('on',m==='music');
  document.getElementById('tVoice').classList.toggle('on',m==='voice');
  document.getElementById('vpW').classList.toggle('hidden',m==='music');
}

/* ══ VOICE PICKER ══ */
function qscore(v){let s=0;if(/aria|guy|jenny|davis|emma|brian|sonia|ryan/i.test(v.name))s+=5;if(/samantha|daniel|karen/i.test(v.name))s+=4;if(/natural|online|neural|enhanced/i.test(v.name))s+=3;if(/google/i.test(v.name))s+=2;if(/^en-(US|GB|AU)/i.test(v.lang))s+=1;return s;}
function svs(){const v=speechSynthesis.getVoices();return[...v.filter(x=>/en/i.test(x.lang)).sort((a,b)=>qscore(b)-qscore(a)),...v.filter(x=>!/en/i.test(x.lang))];}
function getVoice(){return svs()[+document.getElementById('vp').value]||null;}
function fillVP(){const sel=document.getElementById('vp'),pv=sel.value;sel.innerHTML='';svs().forEach((v,i)=>{const o=document.createElement('option');o.value=i;o.textContent=v.name+' ('+v.lang+')';sel.appendChild(o);});sel.value=pv||0;}
function testVoice(){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance('Warning. A hacker just targeted someone exactly like you. Here is how to stop them.');const v=getVoice();if(v)u.voice=v;u.rate=.88;u.pitch=1;speechSynthesis.speak(u);}
if(speechSynthesis.getVoices().length)fillVP();
speechSynthesis.onvoiceschanged=fillVP;

/* ══ IMAGES ══ */
let uploads=[];
document.getElementById('imgUp').addEventListener('change',async e=>{
  uploads=[];
  for(const f of Array.from(e.target.files).slice(0,12)){
    const url=await new Promise(r=>{const rd=new FileReader();rd.onload=()=>r(rd.result);rd.readAsDataURL(f);});
    const img=new Image();img.src=url;await new Promise(r=>img.onload=r);uploads.push(img);
  }
  activeBg='upload';document.querySelectorAll('.bgt').forEach(t=>t.classList.remove('sel'));document.querySelector('.bgt[data-id=upload]')?.classList.add('sel');
  ss(uploads.length+' image(s) loaded.');
});

/* ══ BACKGROUNDS — cybersecurity themed ══ */
const BGS=[
  {id:'matrix',n:'Matrix'},
  {id:'cyber',n:'Cyber'},
  {id:'dark',n:'Dark'},
  {id:'red',n:'Alert'},
  {id:'grid',n:'Grid'},
  {id:'upload',n:'My Pics'},
];
let activeBg='matrix';
const thumbCs={};

function paintBg(c,id,t,si){
  const w=c.width,h=c.height,g=c.getContext('2d');
  if(id==='upload'&&uploads.length){
    const img=uploads[si%uploads.length],sc=Math.max(w/img.width,h/img.height);
    g.drawImage(img,(w-img.width*sc)/2,(h-img.height*sc)/2,img.width*sc,img.height*sc);
    g.fillStyle='rgba(0,0,0,.55)';g.fillRect(0,0,w,h);return;
  }
  if(id==='matrix'){
    g.fillStyle='#000';g.fillRect(0,0,w,h);
    g.font=Math.floor(w/18)+'px monospace';g.fillStyle='rgba(0,255,70,.18)';
    const cols=Math.floor(w/Math.floor(w/18));
    for(let i=0;i<cols*2;i++){
      const x=(i%cols)*Math.floor(w/18);
      const y=((Math.sin(i*0.7+t)*0.5+0.5)*h*1.4)%h;
      g.fillText(Math.random()>0.5?'1':'0',x,y);
    }
    const gd=g.createRadialGradient(w/2,h*.3,0,w/2,h*.3,w*.7);
    gd.addColorStop(0,'rgba(0,255,70,.08)');gd.addColorStop(1,'transparent');
    g.fillStyle=gd;g.fillRect(0,0,w,h);
  }else if(id==='cyber'){
    g.fillStyle='#020410';g.fillRect(0,0,w,h);
    g.strokeStyle='rgba(61,142,255,.2)';g.lineWidth=1;
    const gs=Math.floor(w/10);
    for(let x=0;x<w;x+=gs){g.beginPath();g.moveTo(x,0);g.lineTo(x,h);g.stroke();}
    for(let y=0;y<h;y+=gs){g.beginPath();g.moveTo(0,y);g.lineTo(w,y);g.stroke();}
    [0,1,2,3].forEach(i=>{
      const x=w*(.2+.6*Math.sin(t+i*1.6)),y=h*(.2+.6*Math.cos(t*.8+i*1.2)),r=w*(.3+.12*Math.sin(t+i));
      const gd=g.createRadialGradient(x,y,0,x,y,r);
      gd.addColorStop(0,'rgba(61,142,255,.18)');gd.addColorStop(1,'transparent');
      g.fillStyle=gd;g.fillRect(0,0,w,h);
    });
  }else if(id==='dark'){
    const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#0a0010');gr.addColorStop(1,'#000005');
    g.fillStyle=gr;g.fillRect(0,0,w,h);
    const gd=g.createRadialGradient(w/2,h*.25,0,w/2,h*.25,w*.6);
    gd.addColorStop(0,'rgba(150,0,255,.12)');gd.addColorStop(1,'transparent');
    g.fillStyle=gd;g.fillRect(0,0,w,h);
  }else if(id==='red'){
    g.fillStyle='#0a0002';g.fillRect(0,0,w,h);
    const pulse=Math.sin(t*2)*0.5+0.5;
    const gd=g.createRadialGradient(w/2,h*.3,0,w/2,h*.3,w*.7);
    gd.addColorStop(0,`rgba(255,30,30,${0.08+pulse*0.06})`);gd.addColorStop(1,'transparent');
    g.fillStyle=gd;g.fillRect(0,0,w,h);
    g.strokeStyle=`rgba(255,50,50,${0.15+pulse*0.1})`;g.lineWidth=1;
    const gs=Math.floor(w/12);
    for(let x=0;x<w;x+=gs){g.beginPath();g.moveTo(x,0);g.lineTo(x,h);g.stroke();}
    for(let y2=0;y2<h;y2+=gs){g.beginPath();g.moveTo(0,y2);g.lineTo(w,y2);g.stroke();}
  }else if(id==='grid'){
    g.fillStyle='#03030a';g.fillRect(0,0,w,h);
    g.strokeStyle='rgba(255,61,61,.15)';g.lineWidth=1;
    const gs=Math.floor(w/10);
    for(let x=0;x<w;x+=gs){g.beginPath();g.moveTo(x,0);g.lineTo(x,h);g.stroke();}
    for(let y=0;y<h;y+=gs){g.beginPath();g.moveTo(0,y);g.lineTo(w,y);g.stroke();}
    const gd=g.createRadialGradient(w/2,h*.32,0,w/2,h*.32,w*.6);
    gd.addColorStop(0,'rgba(255,61,61,.2)');gd.addColorStop(1,'transparent');
    g.fillStyle=gd;g.fillRect(0,0,w,h);
  }else{g.fillStyle='#030310';g.fillRect(0,0,w,h);}
}

const bgGrid=document.getElementById('bgGrid');
BGS.forEach(s=>{
  const wrap=document.createElement('div');
  wrap.className='bgt'+(s.id===activeBg?' sel':'');wrap.dataset.id=s.id;
  wrap.style.cssText='height:42px;border-radius:7px;cursor:pointer;border:2px solid transparent;overflow:hidden;position:relative;transition:border-color .15s,transform .1s;';
  wrap.onclick=()=>{activeBg=s.id;document.querySelectorAll('.bgt').forEach(t=>t.style.borderColor='transparent');wrap.style.borderColor='#ff3d3d';};
  if(s.id===activeBg) wrap.style.borderColor='#ff3d3d';
  const tc=document.createElement('canvas');tc.width=80;tc.height=42;
  paintBg(tc,s.id,0,0);thumbCs[s.id]=tc;
  const lb=document.createElement('div');lb.style.cssText='position:absolute;bottom:2px;left:0;right:0;text-align:center;font-size:8px;color:rgba(255,255,255,.9);font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,.9);';lb.textContent=s.n;
  wrap.appendChild(tc);wrap.appendChild(lb);bgGrid.appendChild(wrap);
});
let tT=0;setInterval(()=>{tT+=.025;BGS.forEach(s=>paintBg(thumbCs[s.id],s.id,tT,0));},70);

/* ══ SHIELDUNHACK VIRAL SCRIPT ENGINE ══ */
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function pickN(a,n){const c=[...a],o=[];for(let i=0;i<n&&c.length;i++)o.push(c.splice(Math.floor(Math.random()*c.length),1)[0]);return o;}
function cap(s){return s.split(' ').map(w=>w[0]?.toUpperCase()+w.slice(1)).join(' ');}

// Viral cybersecurity hook formulas (research-backed for max scroll-stop)
const SCARY_HOOKS=[
  t=>`⚠️ A hacker just used ${t} to steal someone's life savings.`,
  t=>`This is how ${t} destroys lives in under 3 minutes.`,
  t=>`Millions of people are vulnerable to ${t} RIGHT NOW.`,
  t=>`I need to warn you about ${t} before it's too late.`,
  t=>`${cap(t)} is happening to people just like you.`,
  t=>`Stop what you are doing. ${cap(t)} can happen to anyone.`,
  t=>`They used ${t} and nobody knew until it was too late.`,
];
const AGITATE=[
  t=>`This is not a drill. Victims of ${t} lose everything and can't get it back.`,
  t=>`The scary part about ${t} is that you won't even know it's happening.`,
  t=>`Cybercriminals behind ${t} target ordinary people on purpose. Not just companies.`,
  t=>`Over 4000 people fall for ${t} every single day in the UK alone.`,
  t=>`${cap(t)} takes less than 60 seconds for a hacker to execute.`,
];
const SOLUTIONS=[
  {tag:'DO THIS NOW',  f:t=>`Here is exactly what you need to do to protect yourself from ${t} right now.`},
  {tag:'THE FIX',      f:t=>`One simple change stops ${t} in its tracks. Most people never make it.`},
  {tag:'PROTECT YOURSELF', f:t=>`Three things to do immediately to protect yourself from ${t}.`},
  {tag:'STAY SAFE',    f:t=>`Share this with everyone you know. ${cap(t)} spreads when people don't know about it.`},
];
const CTAS=[
  '🔔 Follow ShieldUnhack. Your online safety depends on it.',
  '💾 Save this before it happens to you.',
  '⚠️ Share this with someone you care about. Right now.',
  '👇 Comment below if this surprised you.',
  '🛡 Follow for daily cyber safety warnings.',
];

// YouTube-optimised titles for cybersecurity niche
const TITLES=[
  t=>`⚠️ WARNING: ${cap(t)} Is Targeting People Like You`,
  t=>`This ${cap(t)} Scam Will Shock You — Stay Safe`,
  t=>`URGENT: How ${cap(t)} Destroys Lives in Minutes #cybersecurity`,
  t=>`The ${cap(t)} Hack Nobody Warns You About`,
  t=>`Protect Yourself From ${cap(t)} Before It's Too Late`,
];
const TITLES_LOOP=[
  t=>`How to Protect Yourself From ${cap(t)} — Full Guide`,
  t=>`${cap(t)} Explained — Everything You NEED to Know`,
  t=>`The Complete Guide to Staying Safe From ${cap(t)}`,
];

function buildScenes(topic){
  const t=topic||'cyber attacks';
  return[
    {type:'hook',   text:pick(SCARY_HOOKS)(t),        tag:'⚠️ ALERT',         dur:3200},
    {type:'point',  text:pick(AGITATE)(t),             tag:'THE DANGER',       dur:3500},
    {type:'point',  text:pick(SOLUTIONS).f(t),         tag:'DO THIS NOW',      dur:3500},
    {type:'cta',    text:pick(CTAS),                   tag:'STAY SAFE',        dur:3000},
  ];
}

function buildLongScenes(topic){
  const t=topic||'cyber attacks';
  const sol=pickN(SOLUTIONS,3);
  return[
    {type:'hook',  text:pick(SCARY_HOOKS)(t),       tag:'⚠️ ALERT',       dur:3000},
    {type:'point', text:pick(AGITATE)(t),            tag:'THE REALITY',    dur:3500},
    {type:'point', text:'Here is how it works step by step. First: '+pick(AGITATE)(t), tag:'HOW IT WORKS', dur:4000},
    {type:'point', text:sol[0].f(t),                 tag:sol[0].tag,       dur:3500},
    {type:'point', text:sol[1]?sol[1].f(t):'Check your settings now.', tag:sol[1]?sol[1].tag:'STEP 2', dur:3500},
    {type:'point', text:'Most importantly: '+sol[2]?sol[2].f(t):'Share this warning.', tag:'MOST IMPORTANT', dur:3500},
    {type:'cta',   text:pick(CTAS),                  tag:'STAY SAFE',      dur:3500},
  ];
}


/* ══ LONG VIDEO SCENES (2 min, 8 scenes, per-scene backgrounds) ══ */
const LV_SCENES_TEMPLATE=[
  {type:'hook',   tag:'⚠️ ALERT',        bgStyle:'red',    durSec:12,
   f:t=>`Warning. A hacker just used ${t} to steal someone's entire digital life. This is exactly how it happened — and how you can stop it happening to you.`},
  {type:'point',  tag:'THE REAL THREAT',  bgStyle:'matrix', durSec:16,
   f:t=>`Most people think ${t} only targets big companies. That is exactly what hackers want you to believe. The truth is they specifically target ordinary people because ordinary people are easier. You are the target.`},
  {type:'point',  tag:'HOW IT WORKS',     bgStyle:'cyber',  durSec:18,
   f:t=>`Here is exactly how ${t} works step by step. First the hacker identifies a victim. Then they exploit one small vulnerability — usually something the victim did not even know was a risk. The whole attack takes less than three minutes.`},
  {type:'point',  tag:'RED FLAGS',        bgStyle:'red',    durSec:16,
   f:t=>`These are the warning signs that ${t} is targeting you right now. Number one: unexpected login alerts on your accounts. Number two: contacts receiving messages you did not send. Number three: your device behaving strangely. If any of these sound familiar, act now.`},
  {type:'point',  tag:'STEP 1: DO THIS',  bgStyle:'grid',   durSec:18,
   f:t=>`The first thing you must do to protect yourself from ${t} is check your accounts. Go to every important account and look for logins you do not recognise. If you find any, change your password immediately and enable two-factor authentication right now.`},
  {type:'point',  tag:'STEP 2: SETTINGS', bgStyle:'cyber',  durSec:18,
   f:t=>`Second step: update your security settings today. For ${t} specifically, the single most effective protection is a strong unique password for every account combined with an authenticator app. Not SMS codes. A real authenticator app.`},
  {type:'point',  tag:'STEP 3: SHARE',    bgStyle:'dark',   durSec:14,
   f:t=>`Third and most importantly: warn the people around you. ${t} spreads because people do not talk about it. Your parents, your friends, your colleagues are all potential victims. Sharing this video could genuinely protect someone you care about.`},
  {type:'cta',    tag:'STAY SAFE',        bgStyle:'matrix', durSec:12,
   f:t=>`Subscribe to ShieldUnhack for daily cyber safety warnings. New threats emerge every single day. The people who stay safe are the ones who stay informed. Hit subscribe now. Your online safety depends on it.`},
];

function buildLongVideoScenes(topic){
  const t=topic||'cyber attacks';
  return LV_SCENES_TEMPLATE.map(s=>({
    type:s.type,
    text:s.f(t),
    tag:s.tag,
    bgStyle:s.bgStyle,
    dur:s.durSec*1000,
    perSceneBg:true,
  }));
}

function buildLongMeta(topic){
  const t=topic||'cyber attacks';
  return{
    title:`⚠️ ${t.charAt(0).toUpperCase()+t.slice(1)} EXPOSED: Full Guide to Protecting Yourself | ShieldUnhack`,
    desc:`FULL GUIDE: How to protect yourself from ${t}.

In this video we expose exactly how ${t} works, who it targets, the red flags to watch for, and the exact steps you must take to protect yourself and your family today.

📌 Timestamps:
0:00 The Warning
0:12 The Real Threat
0:28 How It Works
0:46 Red Flags to Watch For
1:02 Step 1 — Check Your Accounts
1:20 Step 2 — Security Settings
1:38 Step 3 — Warn Others
1:52 Stay Safe

🔔 SUBSCRIBE to ShieldUnhack for daily cyber safety content.
👇 Comment below: have you or someone you know been affected by ${t}?

#cybersecurity #cybersafety #${t.replace(/\s+/g,'')} #hackersexposed #scamalert #staysafe #ShieldUnhack #onlinesafety #hacker`,
    tags:'#cybersecurity #cybersafety #hackersexposed #scamalert #staysafe #ShieldUnhack #onlinesafety #hacker #phishing #datasecurity #cyberattack #protectyourself',
  };
}

/* Voice script export */
function exportScript(){
  if(!scenes||!scenes.length){ss('Generate a video first.');return;}
  const lines=scenes.map((s,i)=>'SCENE '+(i+1)+' -- '+(s.tag||s.type.toUpperCase())+'\n'+s.text);
  const full=lines.join('\n\n---\n\n');
  navigator.clipboard.writeText(full)
    .then(()=>ss('Voice script copied! Paste into TTSMaker.com, choose a voice, download MP3, then add to your video in CapCut.'))
    .catch(()=>ss('Copy failed. Try selecting and copying manually.'));
  const b=document.getElementById('scriptBtn');
  if(b){b.textContent='Copied! Paste into TTSMaker.com';setTimeout(()=>{if(b)b.textContent='Copy Voice Script (for TTSMaker)';},3000);}
}


function buildMeta(topic,mode){
  const t=topic||'cyber attacks';
  const title=pick(mode==='long'?TITLES_LOOP:TITLES)(t);
  const desc=mode==='short'
    ?`⚠️ CYBER SAFETY WARNING: ${t}\n\nProtect yourself and your family from ${t}. ShieldUnhack posts daily cyber safety warnings so you stay one step ahead of hackers.\n\n🔔 SUBSCRIBE for daily cyber safety tips.\n\n#cybersecurity #cybersafety #hackersexposed #scamalert #staysafe #shorts #ShieldUnhack`
    :` ⚠️ FULL GUIDE: Protect yourself from ${t}\n\nIn this video we break down exactly how ${t} works, who it targets, and the exact steps you need to take to protect yourself and your family.\n\n📌 Timestamps:\n0:00 The Warning\n0:20 Why This Is Dangerous\n0:45 How It Works\n1:10 Step-by-Step Protection\n2:00 Most Important Step\n2:30 Stay Safe\n\n🔔 Subscribe to ShieldUnhack for daily cyber safety content.\n👇 Comment if this helped you or share it with someone you care about.\n\n#cybersecurity #cybersafety #hackersexposed #scamalert #staysafe #ShieldUnhack #onlinesafety`;
  const tags='#cybersecurity #cybersafety #hackersexposed #scamalert #staysafe #ShieldUnhack #onlinesafety #hacker #phishing #datasecurity #internetscam #protectyourself #shorts #viral';
  return{title,desc,tags};
}

/* ══ CANVAS ══ */
const canvas=document.getElementById('rc');
const ctx=canvas.getContext('2d');
let canvasFormat='portrait';
function getCW(){return canvas.width;}
function getCH(){return canvas.height;} // portrait=9:16, landscape=16:9

function switchCanvasFormat(fmt){
  canvasFormat=fmt;
  if(fmt==='landscape'){
    canvas.width=1280;canvas.height=720;
    canvas.style.width='412px';canvas.style.height='232px';
    const ph=document.querySelector('.phone');
    if(ph){ph.style.width='412px';ph.style.height='232px';ph.style.borderRadius='14px';}
  } else {
    canvas.width=720;canvas.height=1280;
    canvas.style.width='232px';canvas.style.height='412px';
    const ph=document.querySelector('.phone');
    if(ph){ph.style.width='232px';ph.style.height='412px';ph.style.borderRadius='30px';}
  }
}
let animT=0,scenes=[],curSI=0,sceneStart=0,estDurs=[],playing=false,idleIdx=0;
// word-by-word caption state
let captionWords=[],captionWordIdx=0,captionSceneStart=0;

function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function wrapL(text,maxW,sz){
  ctx.font='700 '+sz+'px Space Grotesk,Inter,sans-serif';
  const words=text.split(' '),lines=[];let line='';
  for(const w of words){const t=line?line+' '+w:w;if(ctx.measureText(t).width>maxW&&line){lines.push(line);line=w;}else line=t;}
  if(line)lines.push(line);return lines;
}

function drawShieldBadge(t){
  // animated shield logo top-left
  const pulse=Math.sin(t*2)*0.15+0.85;
  ctx.save();ctx.translate(48,90);ctx.scale(pulse,pulse);
  ctx.fillStyle='rgba(255,61,61,0.9)';
  ctx.beginPath();ctx.moveTo(0,-38);ctx.lineTo(32,-20);ctx.lineTo(32,10);ctx.quadraticCurveTo(32,38,0,50);ctx.quadraticCurveTo(-32,38,-32,10);ctx.lineTo(-32,-20);ctx.closePath();
  ctx.fill();
  ctx.fillStyle='#fff';ctx.font='700 28px Space Grotesk,sans-serif';ctx.textAlign='center';
  ctx.fillText('🛡',0,11);ctx.textAlign='left';
  ctx.restore();
  ctx.fillStyle='rgba(255,255,255,.85)';ctx.font='600 22px Inter,sans-serif';
  ctx.fillText('ShieldUnhack',90,98);
}

function drawCaption(si,elapsed){
  if(capStyle==='none')return;
  const s=scenes[si];if(!s)return;
  const words=s.text.split(' ');
  const dur=estDurs[si]||3000;
  const wordsPerMs=words.length/dur;
  const wordIdx=Math.min(words.length-1,Math.floor(elapsed*wordsPerMs));
  // show 3 words at a time centered
  const start=Math.max(0,wordIdx-1);
  const chunk=words.slice(start,start+3).join(' ');
  if(capStyle==='big'){
    ctx.font='700 72px Space Grotesk,sans-serif';
    ctx.textAlign='center';
    ctx.shadowColor='rgba(0,0,0,1)';ctx.shadowBlur=16;ctx.shadowOffsetY=2;
    ctx.fillStyle='#fff';
    // yellow highlight on current word
    ctx.fillText(chunk,getCW()/2,getCH()*0.92);
    ctx.shadowBlur=0;ctx.shadowOffsetY=0;ctx.textAlign='left';
  }else if(capStyle==='pop'){
    const fw=ctx.measureText(chunk).width+32;
    const fx=(getCW()-fw)/2,fy=getCH()*0.89;
    ctx.fillStyle='rgba(255,61,61,0.93)';rr(fx,fy-52,fw,62,10);ctx.fill();
    ctx.font='700 56px Space Grotesk,sans-serif';
    ctx.textAlign='center';ctx.fillStyle='#fff';
    ctx.fillText(chunk,getCW()/2,fy);ctx.textAlign='left';
  }
}

function drawAvatar(type,t){
  const bob=Math.sin(t*2.2)*5,cx=getCW()-140,cy=280+bob;
  const e={hook:{es:1.3,m:'O',b:'up'},point:{es:1,m:'-',b:'flat'},cta:{es:1.1,m:'U',b:'flat'}}[type]||{es:1,m:'-',b:'flat'};
  ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=18;
  ctx.fillStyle='#1a0a0a';rr(cx-64,cy+64,128,115,17);ctx.fill();
  ctx.fillStyle='#cc2200';ctx.beginPath();ctx.ellipse(cx,cy+104,38,54,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#e8c49a';ctx.fillRect(cx-14,cy+50,28,26);
  ctx.fillStyle='#f5d09a';ctx.beginPath();ctx.ellipse(cx,cy,62,66,0,0,Math.PI*2);ctx.fill();
  ctx.shadowBlur=0;ctx.fillStyle='#2a1505';
  ctx.beginPath();ctx.ellipse(cx,cy-42,53,30,0,Math.PI,0);ctx.fill();
  ctx.beginPath();ctx.arc(cx-47,cy-14,14,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(cx+47,cy-14,14,0,Math.PI*2);ctx.fill();
  const es=e.es;
  ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(cx-22,cy-5,12*es,10*es,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(cx+22,cy-5,12*es,10*es,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#1a1a2e';ctx.beginPath();ctx.arc(cx-22,cy-5,5.5*es,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(cx+22,cy-5,5.5*es,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(cx-18,cy-8,2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(cx+26,cy-8,2,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#2a1505';ctx.lineWidth=4;ctx.lineCap='round';
  const by=e.b==='up'?cy-38:cy-22,boff=e.b==='up'?13:5;
  ctx.beginPath();ctx.moveTo(cx-35,by);ctx.quadraticCurveTo(cx-22,by-boff,cx-8,by);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx+8,by);ctx.quadraticCurveTo(cx+22,by-boff,cx+35,by);ctx.stroke();
  ctx.lineWidth=5;
  if(e.m==='O'){ctx.fillStyle='#2a1505';ctx.beginPath();ctx.ellipse(cx,cy+22,11,16,0,0,Math.PI*2);ctx.fill();}
  else if(e.m==='U'){ctx.beginPath();ctx.moveTo(cx-18,cy+17);ctx.quadraticCurveTo(cx,cy+36,cx+18,cy+17);ctx.stroke();}
  else{ctx.beginPath();ctx.moveTo(cx-14,cy+21);ctx.lineTo(cx+14,cy+21);ctx.stroke();}
  if(type==='cta'){const wave=Math.sin(t*3)*.3;ctx.save();ctx.translate(cx+64,cy+64);ctx.rotate(-0.45+wave);ctx.fillStyle='#f5d09a';ctx.beginPath();ctx.ellipse(0,0,15,38,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(0,-42,14,0,Math.PI*2);ctx.fill();ctx.restore();}
}

function drawScene(si,frac,t){
  const s=scenes[si];if(!s)return;
  // use per-scene background if set (long video mode), else global
  const bgId=s.perSceneBg&&s.bgStyle?s.bgStyle:activeBg;
  paintBg(canvas,bgId,t,si);
  drawShieldBadge(t);
  drawAvatar(s.type,t);
  // gradient panel
  const panY=getCH()*0.42;
  const pan=ctx.createLinearGradient(0,panY,0,getCH()*(capStyle==='none'?1:0.86));
  pan.addColorStop(0,'rgba(0,0,0,0)');pan.addColorStop(.18,'rgba(0,0,0,.88)');pan.addColorStop(1,'rgba(0,0,0,.97)');
  ctx.fillStyle=pan;ctx.fillRect(0,panY,getCW(),getCH()-panY);
  // tag pill — red for ShieldUnhack brand
  const PFS=26,PPAD=32,PH=PFS+18;
  let ty=Math.round(getCH()*.565);
  if(s.tag){
    ctx.font='600 '+PFS+'px Inter,sans-serif';
    const pw=ctx.measureText(s.tag).width+PPAD*2,px=(getCW()-pw)/2;
    ctx.fillStyle=s.type==='cta'?'rgba(31,219,114,.92)':'rgba(220,30,30,.92)';
    rr(px,ty,pw,PH,PH/2);ctx.fill();
    ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText(s.tag,getCW()/2,ty+PH*.69);ctx.textAlign='left';
    ty+=PH+14;
  }
  // headline
  const fsz=s.type==='hook'?78:62,lh=fsz*1.12;
  const lines=wrapL(s.text,getCW()-92,fsz);
  const maxB=capStyle==='none'?getCH()-60:getCH()*0.84;
  const blkH=lines.length*lh;
  if(ty+blkH>maxB)ty=Math.max(Math.round(getCH()*.52),maxB-blkH);
  lines.forEach(line=>{
    ctx.shadowColor='rgba(0,0,0,.95)';ctx.shadowBlur=20;ctx.shadowOffsetY=3;
    ctx.fillStyle=s.type==='cta'?'#1fdb72':'#fff';
    ctx.font='700 '+fsz+'px Space Grotesk,Inter,sans-serif';
    ctx.fillText(line,46,ty);ctx.shadowBlur=0;ctx.shadowOffsetY=0;ty+=lh;
  });
  // animated captions
  const elapsed=performance.now()-sceneStart;
  if(playing) drawCaption(si,elapsed);
  // scene dots
  const dY=capStyle==='none'?getCH()-38:getCH()-20,dR=7,dG=Math.min(22,Math.floor((getCW()-80)/Math.max(scenes.length,1)));
  const dW=(scenes.length-1)*dG,dX=(getCW()-dW)/2;
  scenes.forEach((_,i)=>{ctx.beginPath();ctx.arc(dX+i*dG,dY,i===si?dR:dR*.5,0,Math.PI*2);ctx.fillStyle=i===si?'#fff':'rgba(255,255,255,.27)';ctx.fill();});
  if(frac>0&&frac<1){ctx.beginPath();ctx.arc(dX+si*dG,dY,dR,-Math.PI/2,-Math.PI/2+Math.PI*2*frac);ctx.strokeStyle='#ff3d3d';ctx.lineWidth=3;ctx.stroke();}
}

function idleLoop(){if(!playing)drawScene(idleIdx,0,animT);requestAnimationFrame(idleLoop);}
requestAnimationFrame(idleLoop);
function updateDots(){const d=document.getElementById('sdots');d.innerHTML='';for(let i=0;i<Math.min(scenes.length,20);i++){const dot=document.createElement('div');dot.style.cssText=`width:${i===curSI?8:5}px;height:${i===curSI?8:5}px;border-radius:50%;background:${i===curSI?'#ff7070':'rgba(255,255,255,.24)'};transition:all .2s;flex-shrink:0`;d.appendChild(dot);}}
function renderLoop(){if(!playing)return;animT+=.016;const el=performance.now()-sceneStart,est=estDurs[curSI]||3000;drawScene(curSI,Math.min(1,el/est),animT);updateDots();requestAnimationFrame(renderLoop);}

/* ══ MUSIC — tense/dramatic for cybersecurity ══ */
let previewAC=null,previewNodes=null;
function makeMusic(AC,dest,style,vol){
  const P={
    tense:{notes:[130.8,155.6,174.6,196],wave:'sawtooth',arp:[261.6,233,196,174.6],ms:380,lv:.028},
    upbeat:{notes:[261.6,329.6,392,523.25],wave:'triangle',arp:[523,659,784,659],ms:255,lv:.042},
    calm:{notes:[220,277,330,392],wave:'sine',arp:[440,523,440,330],ms:700,lv:.048},
    cinematic:{notes:[196,233,294,349],wave:'sine',arp:[392,466,392,330],ms:920,lv:.052},
  }[style]||{notes:[130.8,155.6,174.6,196],wave:'sawtooth',arp:[261.6,233,196,174.6],ms:380,lv:.028};
  const master=AC.createGain();master.gain.value=0;master.connect(AC.destination);if(dest)master.connect(dest);
  master.gain.linearRampToValueAtTime((vol??1)*.05,AC.currentTime+1.0);
  const oscs=[];
  P.notes.forEach((freq,i)=>{const osc=AC.createOscillator();osc.type=P.wave;osc.frequency.value=freq;const g=AC.createGain();g.gain.value=P.lv/(i*.5+1);osc.connect(g).connect(master);osc.start();oscs.push(osc);});
  let step=0;const ag=AC.createGain();ag.gain.value=P.lv*.7;ag.connect(master);const ao=AC.createOscillator();ao.type='triangle';ao.frequency.value=P.arp[0];ao.connect(ag);ao.start();oscs.push(ao);
  const iv=setInterval(()=>{step=(step+1)%P.arp.length;ao.frequency.setTargetAtTime(P.arp[step],AC.currentTime,.04);},P.ms);
  const allOscs=[...oscs,{stop:()=>clearInterval(iv)}];
  return{master,oscs:allOscs};
}
function stopNodes(n){if(n&&n.oscs)n.oscs.forEach(o=>{try{o.stop();}catch(e){}});}
function stopPreview(){speechSynthesis.cancel();if(previewNodes)stopNodes(previewNodes);previewNodes=null;if(previewAC){try{previewAC.close();}catch(e){}previewAC=null;}}

/* ══ VOICE ══ */
function speakScenes(onStart,onDone){
  speechSynthesis.cancel();let i=0;const voice=getVoice();
  const next=()=>{
    if(i>=scenes.length){setTimeout(()=>onDone&&onDone(),300);return;}
    const u=new SpeechSynthesisUtterance(scenes[i].text.replace(/[⚠️🔔💾👇🛡]/g,''));
    if(voice)u.voice=voice;u.rate=.88;u.pitch=.95;u.volume=1;
    u.onstart=()=>onStart&&onStart(i);
    u.onend=()=>{i++;next();};
    u.onerror=e=>{if(e.error!=='interrupted'){i++;next();}};
    speechSynthesis.speak(u);
  };
  next();
}

/* ══ GENERATE ══ */
let vmode='short';
document.getElementById('genBtn').addEventListener('click',async()=>{
  const raw=document.getElementById('topicInput').value.trim()||document.getElementById('topicSel').value||'cybersecurity scams';
  const btn=document.getElementById('genBtn');btn.disabled=true;
  ss(isLongVideo?'Building 2-minute video script…':'Building viral script…');
  try{
    scenes=isLongVideo?buildLongVideoScenes(raw):buildScenes(raw);
    estDurs=scenes.map(s=>s.dur||3200);
    const tot=Math.round(estDurs.reduce((a,b)=>a+b,0)/1000);
    const meta=isLongVideo?buildLongMeta(raw):buildMeta(raw,'short');
    // Show right panel
    document.getElementById('rph').style.display='none';
    const rC=document.getElementById('rC');rC.style.display='flex';rC.innerHTML='';
    const addCard=(lbl,val,copyVal)=>{
      const d=document.createElement('div');d.className='mc';
      d.innerHTML=`<div class="lbl">${lbl}</div><div class="mv">${val}</div><span class="mcp" >Copy</span>`;
      d.querySelector('.mcp').onclick=()=>cp(copyVal||val,lbl);
      rC.appendChild(d);
    };
    const hookScore=isLongVideo?null:scoreHook(scenes[0].text);
    if(hookScore!==null){
      const scoreEl='<span class="score-badge '+(hookScore>=9.5?'score-high':'score-med')+'">'+hookScore+'/10 hook</span>';
      addCard('Hook Score',scoreEl+' — scored on fear trigger, specificity and urgency.',scenes[0].text);
    }
    // For long video, show scene breakdown
    if(isLongVideo){
      const scDiv=document.createElement('div');scDiv.className='mc';
      scDiv.innerHTML='<div class="lbl">8 Scenes — auto background per scene</div>';
      const ul=document.createElement('div');ul.style.cssText='display:flex;flex-direction:column;gap:4px;margin-top:4px;';
      scenes.forEach((s,i)=>{
        const bgColors={'red':'rgba(255,61,61,.15)','matrix':'rgba(0,255,70,.1)','cyber':'rgba(61,142,255,.15)','grid':'rgba(255,61,61,.1)','dark':'rgba(150,0,255,.12)'};
        const row=document.createElement('div');
        row.style.cssText='font-size:11px;padding:5px 7px;border-radius:6px;color:var(--txt);background:'+(bgColors[s.bgStyle]||'rgba(255,255,255,.05)')+';line-height:1.4;';
        row.innerHTML='<span style="color:var(--dim);font-size:10px;">Scene '+(i+1)+' · '+s.tag+'</span><br>'+s.text.substring(0,60)+'…';
        ul.appendChild(row);
      });
      scDiv.appendChild(ul);rC.appendChild(scDiv);
      const hr2=document.createElement('div');hr2.className='hr';rC.appendChild(hr2);
    }
    addCard('YouTube Title',meta.title,meta.title);
    addCard('Description',meta.desc,meta.desc);
    addCard('Hashtags',meta.tags,meta.tags);
    const hr=document.createElement('div');hr.className='hr';rC.appendChild(hr);
    const dlLbl=document.createElement('div');dlLbl.className='lbl';dlLbl.textContent='Downloads';rC.appendChild(dlLbl);
    const dlA=document.createElement('a');dlA.id='dlWebm';dlA.className='dl';dlA.href='#';dlA.download='shieldunhack_reel.webm';dlA.textContent='⬇ Download .webm';rC.appendChild(dlA);
    const mp4B=document.createElement('button');mp4B.id='mp4Btn';mp4B.className='btn hidden';mp4B.style.fontSize='11.5px';mp4B.textContent='Convert → .mp4 (YouTube)';mp4B.onclick=doMP4;rC.appendChild(mp4B);
    const dlMp4=document.createElement('a');dlMp4.id='dlMp4';dlMp4.className='dl blue hidden';dlMp4.href='#';dlMp4.download='shieldunhack_reel.mp4';dlMp4.textContent='⬇ Download .mp4';rC.appendChild(dlMp4);
    idleIdx=0;curSI=0;sceneStart=performance.now();updateDots();setPg(0);
    document.getElementById('prevBtn').disabled=false;
    document.getElementById('dlBtn').disabled=false;
    const sb=document.getElementById('scriptBtn');if(sb)sb.classList.remove('hidden');
    ss(isLongVideo?'Long video ready — ~'+tot+'s · '+scenes.length+' scenes. Preview or Download.':'Ready — ~'+tot+'s · Hook score: '+hookScore+'/10 · Preview or Download.');
  }catch(err){console.error(err);ss('Error: '+err.message);}
  finally{btn.disabled=false;}
});

// Hook scorer based on what actually works for cybersecurity viral videos
function scoreHook(text){
  let score=5;
  if(/warn|alert|danger|steal|hack|scam|stolen|lost|empty|destroy|victim|attack/i.test(text))score+=1.5;
  if(/you|your|someone like you|people like you/i.test(text))score+=1;
  if(/right now|today|just|already|minutes|seconds/i.test(text))score+=1;
  if(/million|thousand|billions|4000|thousands/i.test(text))score+=0.5;
  if(/⚠️|stop|warning|urgent/i.test(text))score+=0.5;
  if(text.length<80)score+=0.5; // short hooks perform better
  return Math.min(10,Math.round(score*10)/10);
}

/* ══ PREVIEW ══ */
document.getElementById('prevBtn').addEventListener('click',()=>{
  if(!scenes.length)return;
  document.getElementById('prevBtn').disabled=true;document.getElementById('dlBtn').disabled=true;document.getElementById('stopBtn').disabled=false;
  stopPreview();playing=true;animT=0;curSI=0;sceneStart=performance.now();
  if(amode==='music'){previewAC=new(window.AudioContext||window.webkitAudioContext)();previewNodes=makeMusic(previewAC,null,document.getElementById('musicSel').value,1);}
  renderLoop();
  const done=()=>{stopPreview();playing=false;idleIdx=scenes.length-1;document.getElementById('prevBtn').disabled=false;document.getElementById('dlBtn').disabled=false;document.getElementById('stopBtn').disabled=true;ss('Preview done.');};
  if(amode==='voice'){speakScenes(i=>{curSI=i;sceneStart=performance.now();},done);}
  else{let i=0;const adv=()=>{if(i>=scenes.length){done();return;}curSI=i;sceneStart=performance.now();const d=estDurs[i];i++;setTimeout(adv,d);};adv();}
});

/* ══ STOP ══ */
document.getElementById('stopBtn').addEventListener('click',()=>{
  stopPreview();playing=false;const mr=window.__mr;if(mr&&mr.state!=='inactive')mr.stop();
  document.getElementById('prevBtn').disabled=!scenes.length;document.getElementById('dlBtn').disabled=!scenes.length;document.getElementById('stopBtn').disabled=true;setPg(0);ss('Stopped.');
});

/* ══ DOWNLOAD ══ */
let recBlob=null;
document.getElementById('dlBtn').addEventListener('click',async()=>{
  if(!scenes.length)return;
  document.getElementById('dlBtn').disabled=true;document.getElementById('prevBtn').disabled=true;document.getElementById('stopBtn').disabled=false;
  document.getElementById('gpill').classList.add('on');setPg(0);
  try{
    if(typeof canvas.captureStream!=='function')throw new Error('Use Chrome or Edge.');
    if(typeof MediaRecorder==='undefined')throw new Error('MediaRecorder not supported. Use Chrome or Edge.');
    const mimeType=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm','video/mp4'].find(m=>{try{return MediaRecorder.isTypeSupported(m);}catch(e){return false;}});
    if(!mimeType)throw new Error('No supported format. Use Chrome or Edge.');
    const recAC=new(window.AudioContext||window.webkitAudioContext)();
    const recDest=recAC.createMediaStreamDestination();
    const style=document.getElementById('musicSel').value;
    let audioTracks=recDest.stream.getAudioTracks();
    let musicN=null;
    if(amode==='music'){
      musicN=makeMusic(recAC,recDest,style,1);audioTracks=recDest.stream.getAudioTracks();ss('Generating with music…');
    }else{
      musicN=makeMusic(recAC,recDest,style,0.25);
      ss('Requesting mic to capture voice — click Allow…');
      try{
        const micStream=await navigator.mediaDevices.getUserMedia({audio:{
          echoCancellation:true,
          noiseSuppression:true,
          autoGainControl:true,
          channelCount:1,
          sampleRate:44100
        }});
        const src=recAC.createMediaStreamSource(micStream);
        // High-pass filter to cut low-frequency rumble (fans, AC, desk vibration)
        const hpf=recAC.createBiquadFilter();
        hpf.type='highpass';hpf.frequency.value=120;hpf.Q.value=0.7;
        // Low-pass filter to cut high-frequency hiss
        const lpf=recAC.createBiquadFilter();
        lpf.type='lowpass';lpf.frequency.value=8000;lpf.Q.value=0.7;
        // Compressor to even out voice volume vs noise
        const comp=recAC.createDynamicsCompressor();
        comp.threshold.value=-24;comp.knee.value=8;
        comp.ratio.value=6;comp.attack.value=0.003;comp.release.value=0.15;
        // Gain boost so voice stays loud after filtering
        const g=recAC.createGain();g.gain.value=3.0;
        src.connect(hpf);hpf.connect(lpf);lpf.connect(comp);comp.connect(g);g.connect(recDest);
        audioTracks=recDest.stream.getAudioTracks();
        ss('Mic connected with noise filtering — voice captured in file!');
      }catch(err){audioTracks=recDest.stream.getAudioTracks();ss('Mic denied — file has music only. Allow mic next time for voice.');}
    }
    const combined=new MediaStream([...canvas.captureStream(30).getVideoTracks(),...audioTracks]);
    const chunks=[];
    const mr=new MediaRecorder(combined,{mimeType,videoBitsPerSecond:4500000});
    window.__mr=mr;
    mr.ondataavailable=e=>{if(e.data&&e.data.size>0)chunks.push(e.data);};
    mr.onerror=e=>ss('Error: '+(e.error?.message||'?'));
    mr.onstop=()=>{
      if(musicN)stopNodes(musicN);speechSynthesis.cancel();recDest.stream.getTracks().forEach(t=>t.stop());try{recAC.close();}catch(e){}
      document.getElementById('gpill').classList.remove('on');document.getElementById('dlBtn').disabled=false;document.getElementById('prevBtn').disabled=false;document.getElementById('stopBtn').disabled=true;
      playing=false;setPg(100);setTimeout(()=>setPg(0),1500);
      const sz=chunks.reduce((a,c)=>a+c.size,0);
      if(sz===0){ss('No data — retry in Chrome/Edge.');return;}
      const ext=mimeType.includes('mp4')?'mp4':'webm';
      recBlob=new Blob(chunks,{type:mimeType});
      const url=URL.createObjectURL(recBlob);
      const topic=(document.getElementById('topicInput').value||'shieldunhack').trim().replace(/\s+/g,'_');
      const fname=topic+(isLongVideo?'_longvideo':'_short')+'_reel.'+ext;
      const wa=document.getElementById('dlWebm');
      if(wa){wa.href=url;wa.download=fname;wa.textContent='⬇ Download '+fname;wa.classList.add('show');}
      const mb=document.getElementById('mp4Btn');if(mb)mb.classList.remove('hidden');
      ss('✓ Video ready! Download from the right panel →');
    };
    mr.start(100);playing=true;animT=0;curSI=0;sceneStart=performance.now();renderLoop();
    const stopRec=()=>setTimeout(()=>{if(mr.state!=='inactive')mr.stop();},600);
    if(amode==='voice'){speakScenes(i=>{curSI=i;sceneStart=performance.now();setPg(Math.round(i/scenes.length*100));},stopRec);}
    else{let i=0;const adv=()=>{if(i>=scenes.length){stopRec();return;}curSI=i;sceneStart=performance.now();setPg(Math.round(i/scenes.length*100));const d=estDurs[i];i++;setTimeout(adv,d);};adv();}
  }catch(err){
    console.error(err);ss('Error: '+err.message);
    document.getElementById('gpill').classList.remove('on');document.getElementById('dlBtn').disabled=false;document.getElementById('prevBtn').disabled=false;document.getElementById('stopBtn').disabled=true;playing=false;setPg(0);
  }
});

/* ══ MP4 ══ */
async function doMP4(){
  const btn=document.getElementById('mp4Btn');if(!btn||!recBlob){ss('Generate first.');return;}
  btn.disabled=true;btn.textContent='Loading…';
  try{
    if(!window._ffL){ss('Loading converter (one-time ~10MB, needs internet)…');await lscript('https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.js');await lscript('https://unpkg.com/@ffmpeg/util@0.12.1/dist/umd/index.js');window._ffL=true;}
    if(!window._ff){
      const FF=window.FFmpegWASM?.FFmpeg,fu=window.FFmpegUtil?.fetchFile;
      if(!FF||!fu)throw new Error('FFmpeg not found.');
      const ff=new FF();ss('Initializing (one-time ~15s)…');
      await ff.load({coreURL:'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js',wasmURL:'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm'});
      window._ff=ff;window._fu=fu;
    }
    btn.textContent='Converting…';ss('Converting to MP4…');
    const ff=window._ff;await ff.writeFile('in.webm',await window._fu(recBlob));
    await ff.exec(['-i','in.webm','-c:v','libx264','-preset','ultrafast','-c:a','aac','-pix_fmt','yuv420p','-movflags','+faststart','out.mp4']);
    const out=await ff.readFile('out.mp4');
    const url=URL.createObjectURL(new Blob([out.buffer],{type:'video/mp4'}));
    const a=document.getElementById('dlMp4');
    if(a){a.href=url;a.download='shieldunhack_reel.mp4';a.textContent='⬇ Download .mp4';a.classList.remove('hidden');a.classList.add('show');a.style.display='block';}
    ss('✓ MP4 ready — upload to YouTube!');
  }catch(err){
    console.error(err);
    ss(err.message?.includes('SharedArrayBuffer')
      ?'MP4 needs a local server. In VS Code: right-click file → Open with Live Server. Or run: python -m http.server 8080'
      :'MP4 error: '+err.message+'. Upload .webm directly to YouTube instead.');
  }finally{if(btn){btn.disabled=false;btn.textContent='Convert → .mp4';}}
}
function lscript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error('Failed: '+src));document.head.appendChild(s);});}

/* ═══════════════════════════════════════════
   30-DAY CONTENT CALENDAR
   Research-backed topics for cybersecurity
   Shorts that target everyday people
═══════════════════════════════════════════ */
const CALENDAR=[
  {day:1, hook:'Your password is already on the dark web — check NOW', score:9.5, tag:'SHOCKING FACT'},
  {day:2, hook:'A WhatsApp message stole £40,000 from a family. Here is how.', score:9.8, tag:'REAL STORY'},
  {day:3, hook:'Turn off this iPhone setting immediately — hackers use it', score:9.2, tag:'ONE SETTING'},
  {day:4, hook:'Signs your phone has been hacked RIGHT NOW', score:9.6, tag:'CHECK YOURSELF'},
  {day:5, hook:'The fake parcel text scam is targeting your area this week', score:9.4, tag:'TRENDING SCAM'},
  {day:6, hook:'Hackers can drain your bank account with just your phone number', score:9.7, tag:'SCARY FACT'},
  {day:7, hook:'Your smart TV is recording everything you say in your home', score:9.3, tag:'SHOCKING FACT'},
  {day:8, hook:'The Gmail setting that stops 99% of hackers — enable it now', score:9.1, tag:'ONE SETTING'},
  {day:9, hook:'SIM swap attack: they took everything in 4 minutes', score:9.8, tag:'REAL STORY'},
  {day:10,hook:'Never use public WiFi without doing this one thing first', score:8.9, tag:'PROTECT YOURSELF'},
  {day:11,hook:'Deepfake voice call scam is now targeting UK families', score:9.5, tag:'NEW THREAT'},
  {day:12,hook:'Deleted photos on your phone are NOT gone — here is proof', score:9.0, tag:'SHOCKING FACT'},
  {day:13,hook:'The Instagram DM that installs spyware on your phone', score:9.3, tag:'TRENDING SCAM'},
  {day:14,hook:'How to set up two-factor authentication the right way', score:8.7, tag:'TUTORIAL'},
  {day:15,hook:'QR codes in restaurants are being used to steal bank details', score:9.4, tag:'TRENDING SCAM'},
  {day:16,hook:'Check if you have been hacked: do this on your phone right now', score:9.6, tag:'CHECK YOURSELF'},
  {day:17,hook:'The LinkedIn job scam stealing CVs and bank details', score:9.2, tag:'REAL STORY'},
  {day:18,hook:'Every password you have ever used is probably leaked online', score:9.7, tag:'SHOCKING FACT'},
  {day:19,hook:'Secure your home WiFi in 3 steps — most people skip step 2', score:8.8, tag:'HOW TO'},
  {day:20,hook:'Fake bank call scam: they knew everything about my account', score:9.9, tag:'REAL STORY'},
  {day:21,hook:'How hackers get into your email without needing your password', score:9.4, tag:'HOW IT WORKS'},
  {day:22,hook:'The Amazon text scam that emptied someone\'s account this week', score:9.5, tag:'TRENDING SCAM'},
  {day:23,hook:'Android settings you must change today to stop hackers', score:9.0, tag:'ONE SETTING'},
  {day:24,hook:'Your old phone number is being used by scammers right now', score:9.3, tag:'SHOCKING FACT'},
  {day:25,hook:'Romance scammer stole £60,000 — this is exactly how they did it', score:9.8, tag:'REAL STORY'},
  {day:26,hook:'Free password manager setup in 60 seconds — no excuses', score:8.6, tag:'TUTORIAL'},
  {day:27,hook:'Crypto scam new method: even experts are falling for this', score:9.4, tag:'NEW THREAT'},
  {day:28,hook:'How to check if someone else is logged into your accounts', score:9.1, tag:'CHECK YOURSELF'},
  {day:29,hook:'The phone call that gave hackers full access to a bank account', score:9.7, tag:'REAL STORY'},
  {day:30,hook:'31 days of cyber safety. Here is everything you need to know.', score:9.2, tag:'RECAP'},
];

function showCalendar(){
  document.getElementById('rph').style.display='none';
  const rC=document.getElementById('rC');rC.style.display='flex';rC.innerHTML='';
  const h=document.createElement('div');h.className='lbl';h.style.marginBottom='4px';h.textContent='30-Day ShieldUnhack Content Calendar — Click any day to auto-fill and generate';rC.appendChild(h);
  const grid=document.createElement('div');grid.className='cal-grid';
  CALENDAR.forEach(item=>{
    const d=document.createElement('div');d.className='cal-item';
    const scoreClass=item.score>=9.5?'score-high':'score-med';
    d.innerHTML=`<div class="cal-day">Day ${item.day} · ${item.tag} <span class="score-badge ${scoreClass}">${item.score}/10</span></div><div class="cal-title">${item.hook}</div>`;
    d.onclick=()=>{
      document.getElementById('topicInput').value=item.hook;
      setTab('video');
      setTimeout(()=>document.getElementById('genBtn').click(),100);
    };
    grid.appendChild(d);
  });
  rC.appendChild(grid);
  ss('Click any day to instantly generate that video.');
}

/* ═══════════════════════════════════════════
   GROWTH TIPS PANEL
═══════════════════════════════════════════ */
function showTips(){
  document.getElementById('rph').style.display='none';
  const rC=document.getElementById('rC');rC.style.display='flex';rC.innerHTML='';
  const tips=[
    {icon:'🎯',title:'The 1.5 second rule',body:'You have 1.5 seconds before someone swipes away. Your hook must appear as large text on screen immediately. Never start with your channel name or a welcome.'},
    {icon:'😱',title:'Fear + You = Views',body:'Cybersecurity videos that mention "you" and "your" in the hook perform 3x better. Make it personal and immediate. "Your phone" not "phones in general".'},
    {icon:'📅',title:'Post every day for 30 days',body:'The algorithm needs data. 60 views means it has barely seen you. Post daily for 30 days without missing. Volume gives the algorithm enough signal to push you.'},
    {icon:'🔁',title:'Create loop-worthy endings',body:'End every Short with a question or cliffhanger. If the last frame loops back to the first, YouTube counts replays as extra views. "Did you check yours yet?" at the end works.'},
    {icon:'🔤',title:'Captions are not optional',body:'68% of people watch Shorts on mute. If your captions are not on screen, you are invisible to most of your audience. Use the BIG or POP style in this app.'},
    {icon:'📌',title:'Pin a comment immediately',body:'Post your video, then immediately comment "Have you checked if your data is leaked? Reply below" and pin it. Comments in the first hour signal engagement to the algorithm.'},
    {icon:'🔗',title:'Cross-post to TikTok same day',body:'The same video on TikTok gets different algorithm exposure. Same content, different audience. Use the .webm file — TikTok accepts it. Double your reach, same effort.'},
    {icon:'📊',title:'Watch your retention graph',body:'In YouTube Studio, check the retention graph for each video. Where people drop off is where your hook or content lost them. Fix that specific moment in your next video.'},
    {icon:'🏷️',title:'Title formula for ShieldUnhack',body:'[WARNING/ALERT]: + [Specific Scary Thing] + [Targeting You]. Example: "⚠️ WARNING: This WhatsApp Scam Is Targeting UK Families Right Now"'},
    {icon:'💰',title:'The path to monetisation',body:'You need 1,000 subscribers + 10M Shorts views OR 4,000 watch hours from long videos. Mix daily Shorts (discovery) with 1 long video per week (watch hours). Both together is the fastest path.'},
  ];
  tips.forEach(tip=>{
    const d=document.createElement('div');d.className='mc';
    d.innerHTML=`<div style="font-size:13px;font-weight:600;color:var(--txt);margin-bottom:4px;">${tip.icon} ${tip.title}</div><div style="font-size:11.5px;color:var(--dim);line-height:1.6;">${tip.body}</div>`;
    rC.appendChild(d);
  });
  ss('10 proven strategies for ShieldUnhack growth.');
}
</script>
</body>
</html>
