(function(){
const S=window.STUDY, K=window.KJV;
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get(k,d){try{return JSON.parse(localStorage.getItem("o1g_"+k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem("o1g_"+k,JSON.stringify(v))}catch(e){}}};

/* ---------- screens ---------- */
const SCREENS=[
 {id:"home",t:"Home"},
 {id:"open",t:"Before We Begin",short:"Begin"},
 ...S.lessons.map(l=>({id:l.id,t:`Lesson ${l.num}: ${l.title}`,short:l.title,lesson:l})),
 {id:"check",t:"My Renunciation Checklist",short:"Checklist"},
 {id:"pray",t:"Repeat-After-Me Deliverance Prayer",short:"Deliverance Prayer"},
 {id:"declare",t:"Fiery Declarations",short:"Declarations"},
 {id:"practice",t:"Practice: Flashcards, Quiz and Scenarios",short:"Practice"},
 {id:"review",t:"Review and Aftercare",short:"Review"},
 {id:"gloss",t:"Plain-Language Glossary",short:"Glossary"},
 {id:"src",t:"Sources",short:"Sources"}
];
let cur=0;
const done=new Set(store.get("done",[]));

function scr(ref){
 const v=K[ref]; if(!v) return `<div class="scr"><div class="ref">${esc(ref)}</div></div>`;
 const txt=v.map(x=>`<sup>${x.v}</sup>${esc(x.t)}`).join(" ");
 const plain=v.map(x=>x.t).join(" ");
 return `<figure class="scr"><figcaption><span class="ref">${esc(ref)}</span><button class="mini" data-say="${esc(ref.replace(/:/," chapter ").replace("-"," to ")+". "+plain)}" aria-label="Read ${esc(ref)} aloud">🔊 Listen</button></figcaption><blockquote>${txt}</blockquote></figure>`;
}
function refsInline(refs){return refs.map(scr).join("")}
function audioBar(id,label){return `<div class="abar" data-sec="${id}"><span class="alabel">${label||"Listen to this section"}</span><div class="abtns"><button class="ab play" data-act="play" data-sec="${id}">▶ Play</button><button class="ab" data-act="pause" data-sec="${id}">❚❚ Pause</button><button class="ab" data-act="stop" data-sec="${id}">■ Stop</button></div></div>`}

/* ---------- diagrams ---------- */
const DIA={
creator:`<svg viewBox="0 0 340 250" role="img" aria-label="Diagram: God the Creator spoke, and creation was made. Creation is not a piece of God.">
<rect x="95" y="10" width="150" height="54" rx="12" class="d-gold"/><text x="170" y="34" class="dt b">GOD (Elohim)</text><text x="170" y="53" class="dt s">The one LORD</text>
<line x1="170" y1="66" x2="170" y2="150" class="d-line" marker-end="url(#ar)"/><text x="180" y="100" class="dt s l">"He spake,</text><text x="180" y="118" class="dt s l">and it was done"</text>
<rect x="40" y="152" width="260" height="56" rx="12" class="d-soft"/><text x="170" y="176" class="dt b">CREATION</text><text x="170" y="196" class="dt s">sun · moon · stars · angels · people</text>
<text x="170" y="236" class="dt s red">✗ Not "pieces" or "projections" of God</text>
<defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="d-arrow"/></marker></defs></svg>`,
exchange:`<svg viewBox="0 0 340 230" role="img" aria-label="Diagram from Romans 1:25: people exchanged the truth for a lie and worshipped the creature instead of the Creator.">
<text x="170" y="22" class="dt b">THE GREAT EXCHANGE · Romans 1:25</text>
<rect x="14" y="40" width="130" height="64" rx="12" class="d-gold"/><text x="79" y="68" class="dt b">TRUTH</text><text x="79" y="88" class="dt s">of God</text>
<rect x="196" y="40" width="130" height="64" rx="12" class="d-red"/><text x="261" y="68" class="dt b w">A LIE</text><text x="261" y="88" class="dt s w">"ye shall be as gods"</text>
<rect x="14" y="126" width="130" height="64" rx="12" class="d-gold"/><text x="79" y="154" class="dt b">CREATOR</text><text x="79" y="174" class="dt s">worshipped</text>
<rect x="196" y="126" width="130" height="64" rx="12" class="d-red"/><text x="261" y="154" class="dt b w">CREATURE</text><text x="261" y="174" class="dt s w">stars · beings · self</text>
<path d="M148 72H188" class="d-line" marker-end="url(#ar2)"/><path d="M148 158H188" class="d-line" marker-end="url(#ar2)"/>
<text x="170" y="218" class="dt s">Jesus reverses the exchange: back to the Creator</text>
<defs><marker id="ar2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="d-arrow"/></marker></defs></svg>`,
books:`<div class="cmp"><div class="cmp-col bad"><h4>"Akashic records"</h4><ul><li>Opened by a medium or reader</li><li>Messages from guides and ancestors</li><li>Teaches past lives</li><li>Costs money per session</li><li>Source: Theosophy, Cayce</li></ul></div><div class="cmp-col good"><h4>Book of Life</h4><ul><li>Opened by God alone</li><li>Revealed by His Word</li><li>Once to die, then judgment</li><li>Names written by grace</li><li>Source: Revelation 20:12</li></ul></div></div>`,
test:`<ol class="tests"><li><b>Does it confess Jesus Christ</b> as Lord and the only Mediator?</li><li><b>Does it accept or invite worship</b> for itself? (True angels refuse.)</li><li><b>Does it bring another gospel</b> or secret knowledge?</li><li><b>Does it say you are divine?</b> That is the serpent's voice.</li></ol><p class="note">If any answer fails, the spirit is not from God (1 John 4:1; Galatians 1:8).</p>`
};

/* ---------- renderers ---------- */
function rHome(){
 const tiles=SCREENS.slice(1).map((s,i)=>`<button class="tile ${done.has(s.id)?"done":""}" data-go="${i+1}"><span class="tn">${s.lesson?s.lesson.num:"•"}</span><span class="tt">${esc(s.short||s.t)}</span>${done.has(s.id)?'<span class="tick">✓</span>':""}</button>`).join("");
 const pct=Math.round(done.size/(SCREENS.length-1)*100);
 return `<section class="hero"><div class="hero-mark">${LOGO}</div><p class="eyebrow">Christian deliverance study</p><h1>Only One God</h1><p class="sub">Freedom from Atlantis myths, the Akashic records, and "higher gods" teachings</p></section>
 <div class="card"><p><b>What this is:</b> a phone study that answers two Gaia videos featuring Matias De Stefano with the full KJV Scripture, then walks you through repentance, renunciation, and deliverance prayer.</p><p class="small">Your checklist and progress are saved only on this phone. Nothing is sent anywhere.</p></div>
 <div class="prog"><div class="prog-bar"><span style="width:${pct}%"></span></div><span>${pct}% complete</span></div>
 <div class="hf card"><label class="sw"><input type="checkbox" id="hfree" ${store.get("hf",false)?"checked":""}><span></span></label><div><b>Hands-free mode</b><br><span class="small">When a section finishes playing, the next section starts by itself.</span></div></div>
 <h2 class="h2">Choose a section</h2><div class="tiles">${tiles}</div>
 <div class="card warn"><p><b>Watching the videos is not required.</b> Each lesson summarises what they claim, so you can learn the truth without reopening the door.</p></div>`;
}
function rOpen(){
 return audioBar("open","Listen and pray along")+`<p class="lead">Before teaching, we follow a simple order: praise, confession, forgiveness, and inviting the Holy Spirit.</p>`+
 S.opening.map((o,i)=>`<div class="card step"><div class="stepn">${i+1}</div><h3>${esc(o.t)}</h3>${scr(o.r)}<div class="praycard"><span class="lbl">🙏🏽 PRAY</span><p>${esc(o.p)}</p></div></div>`).join("");
}
function levelTabs(l){
 const L=l.levels;const keys=[["simple","👦🏽 Simple"],["teen","🧑🏽 Teen"],["adult","👩🏽 Adult"],["deep","🎓 Deeper Study"]];
 return `<div class="levels" data-l="${l.id}"><div class="ltabs" role="tablist">${keys.map((k,i)=>`<button role="tab" class="ltab ${i==0?"on":""}" data-lv="${k[0]}">${k[1]}</button>`).join("")}</div><div class="lbody">${keys.map((k,i)=>`<p class="lv ${i==0?"on":""}" data-lv="${k[0]}">${esc(L[k[0]])}</p>`).join("")}</div></div>`;
}
function mcq(id,q,opts,ans,why){
 return `<div class="mcq" data-id="${id}" data-ans="${ans}"><p class="q">${esc(q)}</p>${opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}<div class="fb" hidden><p class="fbt"></p><p>${esc(why)}</p></div></div>`;
}
function rLesson(l){
 let h=audioBar(l.id,"🔊 Listen to this lesson");
 h+=`<p class="tagline">${esc(l.tag)}</p><p class="lead">${esc(l.intro)}</p>`;
 if(l.claims){
  h+=`<h3 class="h3">👀 Claim vs. Truth <span class="hint">Tap each card</span></h3>`;
  h+=l.claims.map((c,i)=>`<details class="claim"><summary><span class="cl-lbl">The video claims</span><span>${esc(c.c)}</span><span class="tap">Tap for God's Word ▾</span></summary><div class="truth"><span class="tr-lbl">What God says</span><p>${esc(c.a)}</p>${refsInline(c.refs)}</div></details>`).join("");
 }
 if(l.facts){
  h+=`<h3 class="h3">💡 Know the facts</h3>`+l.facts.map(f=>`<div class="card fact"><h4>${esc(f.t)}</h4><p>${esc(f.d)}</p>${S.sources[f.src]&&S.sources[f.src].u!="#"?`<a class="srcl" href="${S.sources[f.src].u}" target="_blank" rel="noopener">${esc(S.sources[f.src].n)} ↗</a>`:""}</div>`).join("");
 }
 if(l.diagram){h+=`<h3 class="h3">🎨 See it</h3><div class="diagram">${l.diagram==="ladder"?ladder(l.ladder):DIA[l.diagram]}</div>`}
 if(l.scripture){h+=`<h3 class="h3">📖 Read it — full KJV</h3>`+refsInline(l.scripture)}
 h+=`<div class="key"><span class="lbl">🔑 REMEMBER THIS</span><p>${esc(l.key)}</p></div>`;
 h+=`<h3 class="h3">💡 Understand it — choose your level</h3>`+levelTabs(l);
 h+=`<h3 class="h3">❓ Knowledge check</h3>`+mcq(l.id+"q",l.check.q,l.check.opts,l.check.ans,l.check.why);
 h+=`<h3 class="h3">🤔 Apply it</h3><div class="card"><p>${esc(l.apply)}</p><textarea class="jr" data-k="apply_${l.id}" rows="3" placeholder="Write your answer (saved on this phone)">${esc(store.get("apply_"+l.id,""))}</textarea></div>`;
 h+=`<div class="praycard"><span class="lbl">🙏🏽 PRAY</span><p>${esc(l.prayer)}</p></div>`;
 h+=`<div class="declcard"><span class="lbl">🔥 DECLARE — repeat after me</span><p>${esc(l.decl)}</p></div>`;
 h+=`<button class="big done-btn" data-done="${l.id}">${done.has(l.id)?"✓ Lesson complete":"Mark lesson complete"}</button>`;
 return h;
}
function ladder(steps){return `<ol class="ladder">${steps.map((s,i)=>`<li><span>${i+1}</span>${esc(s)}</li>`).join("")}</ol>`}
function rCheck(){
 const sel=new Set(store.get("sel",[]));
 let h=`<p class="lead">Tick only what applies to you. Your private renunciation prayer builds itself below. Nothing leaves this phone.</p>`;
 h+=S.checklist.map((g,gi)=>`<fieldset class="card grp"><legend>${esc(g.g)}</legend>${g.items.map((it,ii)=>{const k=gi+"_"+ii;return `<label class="ck"><input type="checkbox" data-ck="${k}" ${sel.has(k)?"checked":""}><span>${esc(it)}</span></label>`}).join("")}</fieldset>`).join("");
 h+=`<div class="card"><label class="fl" for="extra">Other teachers, readers, books, or practices (optional)</label><textarea id="extra" rows="2" placeholder="Separate with commas">${esc(store.get("extra",""))}</textarea></div>`;
 h+=`<h3 class="h3">🙏🏽 My personal renunciation</h3>`+audioBar("check","Pray your list aloud")+`<div id="myprayer" class="praycard big-p"></div><button class="ab" id="clearck">Clear my checklist</button>`;
 return h;
}
function myPrayerLines(){
 const sel=store.get("sel",[]);const ex=(store.get("extra","")||"").split(",").map(s=>s.trim()).filter(Boolean);
 const items=sel.map(k=>{const[g,i]=k.split("_").map(Number);return S.checklist[g]&&S.checklist[g].items[i]}).filter(Boolean).concat(ex);
 if(!items.length) return ["Tick the items that apply to you, and your prayer will appear here."];
 return ["Lord Jesus Christ, I come to You and I confess my involvement in these things.",...items.map(i=>`I renounce ${lc(i)}, in the name of Jesus Christ.`),"I break every tie, agreement, and influence connected to them, by the blood of Jesus.","Holy Spirit, fill every place that was given to them. I belong to Jesus alone. Amen."];
}
function lc(i){const w=i.split(" ")[0].replace(/^"/,"");return /^(Ancient-aliens|Channelled|Online|Past-life|Asking|Starseed|Light-beings|Belief|Chakra|Sacred|Crystals|Worship|Opening)$/.test(w)?i.charAt(0)==="\""?"\""+i.charAt(1).toLowerCase()+i.slice(2):i.charAt(0).toLowerCase()+i.slice(1):i}
function rPray(){
 let h=`<p class="lead">Read or listen to each line, then say it out loud. When you press Play, each line is spoken and then there is a pause for you to repeat it.</p>`;
 h+=`<div class="card"><label class="fl" for="gap">Repeat pause length</label><select id="gap"><option value="1">Short</option><option value="1.6" selected>Normal</option><option value="2.4">Long</option></select></div>`;
 h+=S.deliverance.map((d,i)=>`<div class="card psec"><h3><span class="pn">${i+1}</span>${esc(d.t)}</h3>${audioBar("p"+i,"🗣️ Repeat after me")}<ol class="lines">${d.lines.map((x,j)=>`<li data-line="p${i}_${j}">${esc(x)}</li>`).join("")}</ol></div>`).join("");
 return h;
}
function rDeclare(){
 return audioBar("declare","🔥 Declare out loud with me")+`<p class="lead">Stand up if you can. Say each declaration with faith.</p><ol class="decls">${S.declarations.map((d,i)=>`<li data-line="declare_${i}">${esc(d)}</li>`).join("")}</ol>`;
}
function rPractice(){
 let h=`<h3 class="h3">🃏 Flashcards <span class="hint">Tap to flip</span></h3><div class="fcwrap"><button class="flip" id="fc"><span class="fcf"></span></button><div class="fcnav"><button class="ab" id="fcp">◀ Back</button><span id="fcn"></span><button class="ab" id="fcx">Next ▶</button></div><button class="ab" id="fcr">🎲 Shuffle</button></div>`;
 h+=`<h3 class="h3">❓ Quiz</h3><div id="score" class="small">Answer all ${S.quiz.length} questions.</div>`+S.quiz.map((q,i)=>mcq("qz"+i,q.q,q.o,q.a,q.w)).join("");
 h+=`<h3 class="h3">🤔 What would you do?</h3>`+S.scenarios.map((s,i)=>mcq("sc"+i,s.s,s.o,s.a,s.w)).join("");
 return h;
}
function rReview(){
 return audioBar("review","🔄 Listen to the review")+`<div class="card"><h3>Three things to remember</h3><ol class="three"><li>The LORD is one God. Elohim is His name in Genesis 1:1, not a group of cosmic beings.</li><li>"Ye shall be as gods" is the serpent's oldest lie, whatever new name it wears.</li><li>God alone holds the books. Seek Him, not records, guides, or star beings.</li></ol></div>
 <div class="card"><h3>🧠 Recall challenge <span class="hint">Think first, then tap</span></h3>${[["Name the verse: \"Should not a people seek unto their God?\"","Isaiah 8:19"],["What do true angels say when someone bows to them?","\"See thou do it not... worship God\" (Revelation 22:9)"],["What three steps make a clean break?","Renounce, remove, and be filled"]].map(r=>`<details class="rc"><summary>${esc(r[0])}</summary><p>${esc(r[1])}</p></details>`).join("")}</div>
 <div class="card"><h3>👨‍👩‍👧‍👦 Discussion</h3><ul>${S.discussion.map(d=>`<li>${esc(d)}</li>`).join("")}</ul></div>
 <div class="card"><h3>🏠 Aftercare this week</h3><ul class="after"><li>Delete or cancel subscriptions, playlists, and saved videos connected to these teachings.</li><li>Remove posters, crystals, and symbols from your home.</li><li>Read one lesson's Scriptures aloud each day.</li><li>Tell your pastor or a mature believer what you renounced.</li><li>If you feel distress, fear, or physical symptoms, pray with your pastor, and see a doctor for any health concern.</li></ul></div>
 <div class="praycard"><span class="lbl">🙏🏽 CLOSING PRAYER</span><p>Father, thank You for delivering me from the power of darkness and translating me into the kingdom of Your dear Son. Keep my mind in Your Word, my heart in Your love, and my feet on the path of truth. In Jesus' name, Amen.</p></div>
 <div class="complete" id="complete"></div>`;
}
function rGloss(){return `<p class="lead">Simple meanings for words in this study.</p>`+S.glossary.map(g=>`<details class="gl"><summary>${esc(g.w)}</summary><p>${esc(g.d)}</p></details>`).join("")}
function rSrc(){
 const s=S.sources;return `<p class="lead">Scripture is from the King James Version. Created prayers, declarations, and scenarios in this study are teaching aids, not quotations.</p><ul class="srcs">${["v1","v2","britannica","anunnaki","theosophical","cri"].map(k=>`<li><a href="${s[k].u}" target="_blank" rel="noopener">${esc(s[k].n)} ↗</a></li>`).join("")}</ul>`;
}

/* ---------- navigation ---------- */
function render(i,auto){
 stopAudio();
 cur=Math.max(0,Math.min(SCREENS.length-1,i));
 const s=SCREENS[cur];let body;
 if(s.id==="home")body=rHome();else if(s.id==="open")body=rOpen();else if(s.lesson)body=rLesson(s.lesson);else if(s.id==="check")body=rCheck();else if(s.id==="pray")body=rPray();else if(s.id==="declare")body=rDeclare();else if(s.id==="practice")body=rPractice();else if(s.id==="review")body=rReview();else if(s.id==="gloss")body=rGloss();else body=rSrc();
 $("#main").innerHTML=(s.id==="home"?"":`<header class="ph"><p class="eyebrow">${cur} of ${SCREENS.length-1}</p><h1>${esc(s.t)}</h1></header>`)+body;
 $("#prev").disabled=cur===0;$("#next").disabled=cur===SCREENS.length-1;
 $("#next").textContent=cur===0?"Start ▶":"Next ▶";
 window.scrollTo(0,0);
 if(s.id==="check")updPrayer();
 if(s.id==="practice")initFC();
 if(s.id==="review")updComplete();
 if(s.id!=="home"&&!s.lesson&&!["practice","check"].includes(s.id)){done.add(s.id);store.set("done",[...done])}
 history.replaceState(null,"","#"+s.id);
 if(auto){const b=document.querySelector(".abar .play");if(b)setTimeout(()=>playSec(b.dataset.sec),400)}
}
function updComplete(){const n=done.size,t=SCREENS.length-1;$("#complete").innerHTML=n>=t-1?`<div class="trophy">🏆</div><h3>Study complete</h3><p>"If the Son therefore shall make you free, ye shall be free indeed." — John 8:36</p>`:`<p class="small">You have completed ${n} of ${t} sections. Mark each lesson complete to finish the study.</p>`}

/* ---------- audio ---------- */
const synth=window.speechSynthesis;let A={sec:null,q:[],i:0,paused:false,timer:null,token:0};
function voice(){const vs=synth?synth.getVoices():[];return vs.find(v=>/en[-_](US|GB)/i.test(v.lang)&&/Samantha|Daniel|Google|Natural|Aria|Karen/i.test(v.name))||vs.find(v=>/^en/i.test(v.lang))}
function queueFor(sec){
 const root=document.querySelector(`.abar[data-sec="${sec}"]`);const gap=+(($("#gap")||{}).value||1.6);
 if(sec==="open")return S.opening.flatMap(o=>[{t:o.t},{t:refText(o.r)},{t:"Let us pray. "+o.p}]);
 if(sec==="check")return myPrayerLines().map(t=>({t,rep:gap}));
 if(sec==="declare")return S.declarations.map((t,i)=>({t,rep:gap,hl:"declare_"+i}));
 if(sec==="review")return [...document.querySelectorAll("#main .three li, #main .after li")].map(e=>({t:e.textContent})).concat([{t:document.querySelector("#main .praycard p").textContent}]);
 if(/^p\d+$/.test(sec)){const d=S.deliverance[+sec.slice(1)];return [{t:d.t}].concat(d.lines.map((t,j)=>({t,rep:gap,hl:sec+"_"+j})))}
 const l=S.lessons.find(x=>x.id===sec);if(!l)return[];
 let q=[{t:`Lesson ${l.num}. ${l.title}. ${l.tag}.`},{t:l.intro}];
 if(l.claims)l.claims.forEach(c=>{q.push({t:"The video claims: "+c.c});q.push({t:"What God says: "+c.a});c.refs.forEach(r=>q.push({t:refText(r)}))});
 if(l.facts)l.facts.forEach(f=>q.push({t:f.t+". "+f.d}));
 if(l.scripture)l.scripture.forEach(r=>q.push({t:refText(r)}));
 q.push({t:"Remember this. "+l.key},{t:l.levels.adult},{t:"Pause and reflect. "+l.apply,pause:3},{t:"Let us pray. "+l.prayer},{t:"Declare it. Repeat after me.",},{t:l.decl,rep:gap});
 return q;
}
function refText(r){const v=K[r];return r.replace(/:/," chapter ").replace("-"," to ")+". "+(v?v.map(x=>x.t).join(" "):"")}
function setBtn(sec,state){document.querySelectorAll(".abar").forEach(b=>{b.classList.toggle("on",b.dataset.sec===sec&&state==="play");b.classList.toggle("ps",b.dataset.sec===sec&&state==="pause")});const n=$("#now");if(state==="stop"||!sec){n.hidden=true}else{n.hidden=false;$("#nowt").textContent=state==="pause"?"Paused":"Playing…"}}
function hl(id){document.querySelectorAll(".speaking").forEach(e=>e.classList.remove("speaking"));if(id){const e=document.querySelector(`[data-line="${id}"]`);if(e){e.classList.add("speaking");e.scrollIntoView({block:"center",behavior:"smooth"})}}}
function playSec(sec){
 if(!synth){alert("Audio is not available in this browser.");return}
 if(A.sec===sec&&A.paused){A.paused=false;setBtn(sec,"play");speakNext();return}
 stopAudio();A={sec,q:queueFor(sec),i:0,paused:false,timer:null,token:Date.now()};setBtn(sec,"play");speakNext();
}
function speakNext(){
 const tok=A.token;if(A.paused)return;
 if(A.i>=A.q.length){const s=A.sec;stopAudio();if(store.get("hf",false))advanceHF(s);return}
 const it=A.q[A.i];hl(it.hl);
 const u=new SpeechSynthesisUtterance(it.t);const v=voice();if(v)u.voice=v;u.rate=.92;u.lang="en-US";
 u.onend=()=>{if(tok!==A.token||A.paused)return;A.i++;const w=it.rep?Math.min(9000,900+it.t.length*55*it.rep):it.pause?it.pause*1000:350;A.timer=setTimeout(()=>{if(tok===A.token)speakNext()},w)};
 u.onerror=()=>{};synth.cancel();synth.speak(u);
}
function pauseAudio(){if(!A.sec)return;A.paused=true;clearTimeout(A.timer);A.token=Date.now();synth.cancel();setBtn(A.sec,"pause")}
function stopAudio(){clearTimeout(A.timer);A.token=Date.now();A.paused=false;const s=A.sec;A.sec=null;if(synth)synth.cancel();hl(null);setBtn(s,"stop")}
function advanceHF(sec){
 const bars=[...document.querySelectorAll(".abar")].map(b=>b.dataset.sec);const k=bars.indexOf(sec);
 if(k>-1&&k<bars.length-1){setTimeout(()=>playSec(bars[k+1]),800);return}
 if(cur<SCREENS.length-1){let n=cur+1;while(n<SCREENS.length&&["check","practice","gloss","src"].includes(SCREENS[n].id))n++;if(n<SCREENS.length&&SCREENS[n].id!=="src")setTimeout(()=>render(n,true),900)}
}
function sayOnce(t){if(!synth)return;stopAudio();const u=new SpeechSynthesisUtterance(t);const v=voice();if(v)u.voice=v;u.rate=.92;synth.speak(u);$("#now").hidden=false;$("#nowt").textContent="Playing…";u.onend=()=>{$("#now").hidden=true}}

/* ---------- flashcards ---------- */
let fc={o:[],i:0,b:false};
function initFC(){fc.o=S.flashcards.map((_,i)=>i);fc.i=0;fc.b=false;drawFC()}
function drawFC(){const c=S.flashcards[fc.o[fc.i]];const el=$("#fc");el.classList.toggle("back",fc.b);el.querySelector(".fcf").innerHTML=`<small>${fc.b?"ANSWER":"QUESTION"}</small>${esc(fc.b?c.b:c.f)}`;$("#fcn").textContent=`${fc.i+1} / ${fc.o.length}`}

/* ---------- prayer gen ---------- */
function updPrayer(){$("#myprayer").innerHTML=`<span class="lbl">🙏🏽 PRAY — repeat after me</span>`+myPrayerLines().map(l=>`<p>${esc(l)}</p>`).join("")}

/* ---------- events ---------- */
document.addEventListener("click",e=>{
 const t=e.target.closest("button,[data-go]");if(!t)return;
 if(t.dataset.go){render(+t.dataset.go);return}
 if(t.dataset.act){const s=t.dataset.sec;if(t.dataset.act==="play")playSec(s);else if(t.dataset.act==="pause")pauseAudio();else stopAudio();return}
 if(t.dataset.say){sayOnce(t.dataset.say);return}
 if(t.id==="prev")return render(cur-1);if(t.id==="next")return render(cur+1);if(t.id==="homeb")return render(0);
 if(t.id==="nowstop")return stopAudio();
 if(t.id==="theme"){const d=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=d;store.set("theme",d);t.setAttribute("aria-label",d==="dark"?"Switch to day mode":"Switch to night mode");t.textContent=d==="dark"?"☀️ Day":"🌙 Night";return}
 if(t.classList.contains("ltab")){const w=t.closest(".levels");w.querySelectorAll(".ltab").forEach(x=>x.classList.toggle("on",x===t));w.querySelectorAll(".lv").forEach(x=>x.classList.toggle("on",x.dataset.lv===t.dataset.lv));return}
 if(t.classList.contains("opt")){const m=t.closest(".mcq");if(m.classList.contains("answered"))return;m.classList.add("answered");const ok=+t.dataset.i===+m.dataset.ans;m.querySelectorAll(".opt").forEach(o=>{if(+o.dataset.i===+m.dataset.ans)o.classList.add("right")});if(!ok)t.classList.add("wrong");const fb=m.querySelector(".fb");fb.hidden=false;fb.querySelector(".fbt").textContent=ok?"✅ Correct":"❌ Not quite — here is why";m.dataset.ok=ok?1:0;
  const qs=document.querySelectorAll('.mcq[data-id^="qz"]');const an=[...qs].filter(x=>x.classList.contains("answered"));if(qs.length&&an.length===qs.length){const sc=an.filter(x=>x.dataset.ok==1).length;$("#score").innerHTML=`<b>Your score: ${sc} / ${qs.length}</b> ${sc===qs.length?"— excellent!":"— review the explanations and try again later."}`;done.add("practice");store.set("done",[...done])}return}
 if(t.dataset.done){done.add(t.dataset.done);store.set("done",[...done]);t.textContent="✓ Lesson complete";return}
 if(t.id==="fc"){fc.b=!fc.b;drawFC();return}
 if(t.id==="fcx"){fc.i=(fc.i+1)%fc.o.length;fc.b=false;drawFC();return}
 if(t.id==="fcp"){fc.i=(fc.i-1+fc.o.length)%fc.o.length;fc.b=false;drawFC();return}
 if(t.id==="fcr"){fc.o.sort(()=>Math.random()-.5);fc.i=0;fc.b=false;drawFC();return}
 if(t.id==="clearck"){store.set("sel",[]);store.set("extra","");render(cur);return}
});
document.addEventListener("change",e=>{
 const t=e.target;
 if(t.id==="hfree"){store.set("hf",t.checked);return}
 if(t.dataset.ck){const s=new Set(store.get("sel",[]));t.checked?s.add(t.dataset.ck):s.delete(t.dataset.ck);store.set("sel",[...s]);updPrayer();if(s.size){done.add("check");store.set("done",[...done])}}
});
document.addEventListener("input",e=>{const t=e.target;if(t.id==="extra"){store.set("extra",t.value);updPrayer()}if(t.dataset.k)store.set(t.dataset.k,t.value)});

const LOGO=`<svg viewBox="0 0 64 64" width="64" height="64" aria-label="Only One God mark" fill="none"><circle cx="32" cy="32" r="29" stroke="currentColor" stroke-width="3"/><path d="M32 12v40M20 24h24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="32" r="6" fill="currentColor" opacity=".25"/></svg>`;

const th=store.get("theme",null)||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=th;$("#theme").textContent=th==="dark"?"☀️ Day":"🌙 Night";
if(synth&&synth.onvoiceschanged!==undefined)synth.onvoiceschanged=()=>{};
const h=location.hash.slice(1);const si=SCREENS.findIndex(s=>s.id===h);render(si>0?si:0);
window.__T={render,SCREENS,queueFor,A:()=>A};
})();
