(function(){
const S=window.STUDY, K=window.KJV;
const $=s=>document.querySelector(s);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get(k,d){try{return JSON.parse(localStorage.getItem("o1g_"+k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem("o1g_"+k,JSON.stringify(v))}catch(e){}}};

/* ---------- screens ---------- */
const L=p=>S.lessons.filter(l=>l.part===p&&l.id!=="l6").map(l=>({id:l.id,t:`Lesson ${l.num}: ${l.title}`,short:l.title,lesson:l,part:p}));
const L6=S.lessons.find(l=>l.id==="l6");
const SCREENS=[
 {id:"home",t:"Home"},
 {id:"open",t:"Before We Begin: Opening Prayer",short:"Opening Prayer",part:1},
 {id:"steps",t:"How Deliverance Works",short:"How Deliverance Works",part:1},
 {id:"teach",t:"What the Deliverance Teachers Say",short:"The Teachers",part:1},
 ...L(2),
 ...L(3),
 {id:"index",t:"Index of Non-Christian Practices",short:"Practices Index",part:3},
 {id:"prep",t:"Steps 1–5: Prepare Your Heart",short:"Steps 1–5: Prepare Your Heart",part:4},
 {id:L6.id,t:`Lesson ${L6.num}: ${L6.title}`,short:"Step 6: "+L6.title,lesson:L6,part:4},
 {id:"check",t:"Step 6: My Renunciation Checklist",short:"Step 6: Renunciation Checklist",part:4},
 {id:"pray",t:"Steps 6–9: Repeat-After-Me Deliverance Prayer",short:"Steps 6–9: Deliverance Prayer",part:4},
 {id:"declare",t:"Fiery Declarations",short:"Declarations",part:5},
 {id:"loved",t:"Pray for My Loved Ones",short:"Loved Ones",part:5},
 {id:"practice",t:"Practice: Flashcards, Quiz and Scenarios",short:"Practice",part:5},
 {id:"review",t:"Review and Aftercare",short:"Review and Aftercare",part:5},
 {id:"gloss",t:"Plain-Language Glossary",short:"Glossary",part:0},
 {id:"src",t:"Sources",short:"Sources",part:0}
];
const PART=n=>S.parts.find(p=>p.n===n);
const BYO={};S.checklist.forEach(g=>BYO[g.o]=g);
let cur=0;
const done=new Set(store.get("done",[]));

function scr(ref){
 const v=K[ref]; if(!v) return `<div class="scr"><div class="ref">${esc(ref)}</div></div>`;
 const txt=v.map(x=>`<sup>${x.v}</sup>${esc(x.t)}`).join(" ");
 const plain=v.map(x=>x.t).join(" ");
 return `<figure class="scr"><figcaption><span class="ref">${esc(ref)}</span><button class="mini" data-say="${esc(ref.replace(/:/," chapter ").replace("-"," to ")+". "+plain)}" aria-label="Read ${esc(ref)} aloud">🔊 Listen</button></figcaption><blockquote>${txt}</blockquote></figure>`;
}
function srcLink(k){const s=S.sources[k];return s&&s.u&&s.u!="#"?`<a class="srcl" href="${s.u}" target="_blank" rel="noopener">${esc(s.n)} ↗</a>`:""}
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
 const tile=(s)=>{const i=SCREENS.indexOf(s);return `<button class="tile ${done.has(s.id)?"done":""}" data-go="${i}"><span class="tn">${s.lesson?s.lesson.num:"•"}</span><span class="tt">${esc(s.short||s.t)}</span>${done.has(s.id)?'<span class="tick">✓</span>':""}</button>`};
 const tiles=S.parts.map(p=>`<div class="partb"><p class="eyebrow">${p.n?"Part "+p.n:"Reference"}</p><h3 class="ptitle">${esc(p.t)}</h3><p class="small">${esc(p.d)}</p><div class="tiles">${SCREENS.filter(s=>s.part===p.n).map(tile).join("")}</div></div>`).join("");
  return `<section class="hero"><div class="hero-mark">${LOGO}</div><p class="eyebrow">Christian deliverance study</p><h1>${esc(S.title)}</h1><p class="sub">${esc(S.subtitle)}</p></section>
 <div class="card intro"><h2 class="h2" style="margin-top:0">📋 Contents: what this manual covers</h2>
 <p>This study helps you recognize non-Christian practices and religions, break with them, and stay free in Jesus Christ. It answers every practice with the full King James Bible and the exact words of two well-known deliverance teachers, Derek Prince and Neil T. Anderson. It covers ${TOTAL} practices, religions, programs, societies, objects and vows.</p>
 ${S.parts.map(p=>`<div class="toc"><h3>${p.n?"Part "+p.n+" · ":""}${esc(p.t)}</h3><p class="small">${esc(p.d)}</p><ol class="tocl">${SCREENS.filter(x=>x.part===p.n).map(x=>`<li><a href="#${x.id}" data-go="${SCREENS.indexOf(x)}">${esc(x.t)}</a></li>`).join("")}</ol></div>`).join("")}
 <div class="toc"><h3>Practices and religions covered (${TOTAL})</h3><ol class="tocl cats">${Object.keys(S.cats).map(k=>{const gs=S.checklist.filter(g=>g.cat===k);return `<li><b>${esc(S.cats[k].t)}</b> <span class="small">(${gs.reduce((n,g)=>n+g.items.length,0)} items · ${esc(S.cats[k].l)})</span><br><span class="small">${gs.map(g=>esc(g.g)).join(" · ")}</span></li>`}).join("")}</ol></div>
 <p><b>How to use it:</b> tap 🔊 Play on any section to listen, or use hands-free to hear the whole study. Switch 💡 Day / 🌙 Night at the top. Your progress, checklist, answers and loved ones are saved only on this phone. Nothing is sent anywhere.</p></div>
 <div class="hf card"><label class="sw"><input type="checkbox" id="hfree" ${store.get("hf",false)?"checked":""}><span></span></label><div><b>Hands-free mode</b><br><span class="small">When a section finishes playing, the next section starts by itself.</span></div></div>
 <button class="big hfgo" id="hfgo">🎧 Listen hands-free to the whole study</button>
 <h2 class="h2">Choose a section</h2>${tiles}
 `;
}
function rOpen(){
 return audioBar("open","Listen and pray along")+S.opening.map((o,i)=>`<div class="card step"><div class="stepn">${i+1}</div><h3>${esc(o.t)}</h3>${scr(o.r)}<div class="praycard"><span class="lbl">🙏🏽 PRAY</span><p>${esc(o.p)}</p>${o.by?`<p class="by">— ${esc(o.by)}</p>${srcLink(o.s)}`:""}</div></div>`).join("");
}
function rSteps(){
 let h=audioBar("steps","🔊 Listen to how deliverance works");
 h+=`<div class="card"><h3>Derek Prince's nine steps</h3><p class="small">"So there are nine conditions that I find people have to make in order to be delivered."</p><ol class="ladder nine">${S.nine.map((n,i)=>`<li data-line="nine_${i}"><span>${i+1}</span><div><b>${esc(n[0])}</b><br><small>In this app: ${esc(n[1])}</small></div></li>`).join("")}</ol>${srcLink("s443")}</div>`;
 h+=`<div class="card"><h3>Four words for breaking a curse</h3><p class="chips">${S.fourRE.map(w=>`<span class="chip">${w}</span>`).join("")}</p><blockquote class="tq">"Recognize, repent, renounce, resist."<cite>— Derek Prince</cite></blockquote>${srcLink("s80")}</div>`;
 h+=`<div class="card"><h3>Where the occult fits</h3><blockquote class="tq">"The first Step to freedom in Christ is to renounce your previous or current involvement with satanically-inspired occult practices and false cults and religions."<cite>— Neil T. Anderson</cite></blockquote>${srcLink("na")}<p>That is why this study teaches the truth first, then helps you recognize each counterfeit, and then leads you to renounce them one by one.</p></div>`;
 h+=`<h3 class="h3">📖 Read it — full KJV</h3>`+refsInline(["James 4:7","Mark 16:17","John 8:36"]);
 return h;
}
function rPrep(){
 return audioBar("prep","🙏🏽 Pray Steps 1 to 5")+S.prep.map((o,i)=>`<div class="card step"><div class="stepn">${i+1}</div><h3>${esc(o.t)}</h3><blockquote class="tq">"${esc(o.q)}"<cite>— Derek Prince</cite></blockquote>${srcLink(o.s)}${scr(o.r)}${o.r2?scr(o.r2):""}<div class="praycard"><span class="lbl">🙏🏽 PRAY — repeat after me</span><p data-line="prep_${i}">${esc(o.p)}</p>${o.by?`<p class="by">— ${esc(o.by)}</p>${srcLink(o.ps)}`:""}</div></div>`).join("");
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
 h+=`<p class="tagline">${esc(l.tag)}</p><p class="lead">${esc(l.intro)}</p>`;if(l.introSrc)h+=[].concat(l.introSrc).map(srcLink).join("<br>");
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
 const sel=new Set(store.get("sel2",[]));
 let h=`<p class="lead">Tick it even if you only watched or took part "for fun."</p>`;
 h+=`<blockquote class="tq">"Even if you innocently participated in something or observed it, you should write it on your list to renounce, just in case you unknowingly gave Satan a foothold."<cite>— Neil T. Anderson</cite></blockquote>${srcLink("na")}`;
 h+=`<p class="small" id="ckcount"></p>`;
 h+=S.checklist.map((g,gi)=>{const n=g.items.filter((_,ii)=>sel.has(g.o+"_"+ii)).length;return catHead(g,gi)+`<details class="card grp" ${gi===0?"":""}><summary><span class="gt">${esc(g.g)}</span><span class="gc" data-gc="${gi}">${n?n+" ticked · ":""}${g.items.length} items</span></summary>${about(g)}${g.src?`<p class="small">Source: ${srcLink(g.src)}</p>`:""}${g.search?`<input class="srch" type="search" data-srch="${gi}" placeholder="Search ${g.items.length} programs" autocomplete="off" autocapitalize="off" spellcheck="false">`:""}<div class="cks" data-g="${gi}">${g.items.map((it,ii)=>{const k=g.o+"_"+ii;return `<label class="ck" data-t="${esc(it.toLowerCase())}"><input type="checkbox" data-ck="${k}" ${sel.has(k)?"checked":""}><span>${esc(it)}</span></label>`}).join("")}</div></details>`}).join("");
 h+=`<div class="card"><label class="fl" for="extra">Anything not listed: teachers, readers, books, apps, groups (optional)</label><textarea id="extra" rows="2" placeholder="Separate with commas">${esc(store.get("extra",""))}</textarea></div>`;
 h+=`<h3 class="h3">🙏🏽 My personal renunciation</h3><p class="small">Prayer format from Neil T. Anderson's Steps to Freedom in Christ, with Derek Prince's confession of faith.</p>`+audioBar("check","🗣️ Pray your list aloud")+`<div id="myprayer" class="praycard big-p"></div>`;
 h+=`<details class="card"><summary><b>Special renunciations: Kingdom of Darkness → Kingdom of Light</b><br><span class="small">For anyone who was in satanic ritual or heavy occult activity (Neil T. Anderson)</span></summary>${audioBar("kg","🗣️ Renounce and announce")}${S.kingdom.map((r,i)=>`<div class="kg"><p class="kd" data-line="kg_${i}a">${esc(r[0])}</p><p class="kl" data-line="kg_${i}b">${esc(r[1])}</p></div>`).join("")}${srcLink("na")}</details>`;
 h+=`<button class="ab" id="clearck">Clear my checklist</button>`;
 return h;
}
function catHead(g,gi){const p=S.checklist[gi-1];if(p&&p.cat===g.cat)return "";const c=S.cats[g.cat];return `<h3 class="cathead"><span class="eyebrow">${esc(c.l)}</span>${esc(c.t)}</h3>`}
function about(g){return g.about?`<div class="about"><p><b>What it is:</b> ${esc(g.about)}</p><details class="rc"><summary>📖 What the Bible says (KJV)</summary>${refsInline(g.refs)}</details></div>`:""}
function selItems(){const sel=store.get("sel2",[]);return sel.map(k=>{const[g,i]=k.split("_").map(Number);const G=BYO[g];if(!G||!G.items[i])return null;return G.search?`watching the Gaia program "${G.items[i]}"`:lc(G.items[i])}).filter(Boolean)}
function myPrayerLines(){
 const ex=(store.get("extra","")||"").split(",").map(s=>s.trim()).filter(Boolean);
 const items=selItems().concat(ex);
 if(!items.length) return ["Tick the items that apply to you, and your prayer will appear here."];
 return ["Lord Jesus Christ, I believe that you are the Son of God, that you died on the cross for my sin and rose again from the dead.",...items.map(i=>`Lord, I confess that I have participated in ${i}, and I renounce ${i}. Thank you that in Christ I am forgiven.`),"I break every contact, and I will get rid of every object connected with these things.","Holy Spirit, fill every place that was given to them. I belong to Jesus Christ alone. Amen."];
}
const PROPER=/^("?)(Matias|Atlantis|Arcturians|Pleiadians|Sirians|Orion|Anunnaki|Bashar|Ouija|Dungeons|Magic|Tarot|ESP|Akashic|I|Bloody|Voodoo|Santería|Obeah|Juju|Satanism|Luciferianism|Kabbalah|Hermetic|Reiki|Kundalini|Human|Gene|Silva|The|Science|Hinduism|Buddhism|Tibetan|Zen|Taoism|Jainism|Shinto|Hare|Transcendental|Falun|Osho|Sai|Self-Realization|Eckankar|Christian|Unity|Unification|Mormonism|Church|Jehovah's|Children|Bahaism|Rosicrucianism|Roy|Father|Theosophical|Islam|Black|Humanism|Scientology|Gnosticism|Freemasonry|Order|Shriners|DeMolay|Job's|Knights|Masonic|Japa|Buddha|Ayurveda|New|God|Sofia|Mother|Gaia|Edgar|Wicca|Mindfulness|A Course|A Return|A New|Abraham-Hicks|Ramtha|The|Kryon|Conversations|Channelled|Messages|Oprah|Oprah's|Esther|Super|SuperSoul|Iyanla|Caroline|Shirley|Raymond|Psychic|Crossing|Beyond|Long|Hollywood|Medium|Ghost|YouTube|Orisha|Candomblé|Umbanda|Palo|Espiritismo|Curanderismo|Brujería|Marine|River|Akan|Trokosi|Ancestral|Akuaba|Twin|Ogbanje|Babalawo|Ori|Egungun|Ogboni|Poro|Dibia|Ikenga|Osu|Mami|Sangoma|Muthi|Ukuthwasa|Mganga|Zar|Nkisi|Bwiti|Marabout|Sakawa)\b/;
function lc(i){if(PROPER.test(i))return i;return i.charAt(0)==='"'?'"'+i.charAt(1).toLowerCase()+i.slice(2):i.charAt(0).toLowerCase()+i.slice(1)}
const TOTAL=S.checklist.reduce((n,g)=>n+g.items.length,0);
function rIndex(){
 const sel=new Set(store.get("sel2",[]));const nonGaia=S.checklist.filter(g=>!g.search).reduce((n,g)=>n+g.items.length,0);
 let h=`<p class="lead">This is every non-Christian practice, program, religion, society, object and vow in this tool. Tap a group to see every item, or jump straight to it in your checklist.</p>`;
 h+=`<div class="card tot"><div class="totn">${TOTAL}</div><div><b>items in all</b><br><span class="small">${nonGaia} practices, religions, groups, objects and vows<br>+ ${S.checklist.find(g=>g.search).items.length} Gaia programs</span><br><span class="small">Also: ${S.kingdom.length} special Kingdom of Darkness renunciations</span></div></div>`;
 h+=`<table class="itab"><thead><tr><th>#</th><th>Group</th><th>Items</th></tr></thead><tbody>${S.checklist.map((g,i)=>`${!S.checklist[i-1]||S.checklist[i-1].cat!==g.cat?`<tr class="catr"><td colspan="3">${esc(S.cats[g.cat].t)}</td></tr>`:""}<tr><td>${i+1}</td><td>${esc(g.g)}</td><td>${g.items.length}</td></tr>`).join("")}<tr class="sum"><td></td><td>Total</td><td>${TOTAL}</td></tr></tbody></table>`;
 h+=S.checklist.map((g,gi)=>catHead(g,gi)+`<details class="card grp ix"><summary><span class="gt">${gi+1}. ${esc(g.g)}</span><span class="gc">${g.items.length} items${g.src?" · source: "+esc(S.sources[g.src].n.split(" — ")[0]):""}</span></summary>${about(g)}<ol class="ixl">${g.items.map((it,ii)=>`<li class="${sel.has(g.o+"_"+ii)?"tk":""}">${esc(it)}</li>`).join("")}</ol><button class="ab" data-jump="${gi}">Go to this group in my checklist ▶</button></details>`).join("");
 h+=`<details class="card grp ix"><summary><span class="gt">Special: Kingdom of Darkness → Light</span><span class="gc">${S.kingdom.length} renunciations · Neil T. Anderson</span></summary><ol class="ixl">${S.kingdom.map(k=>`<li>${esc(k[0])}</li>`).join("")}</ol></details>`;
 return h;
}
function rTeach(){
 return audioBar("teach","🔊 Hear the teachers' words")+`<p class="lead">These are the exact words of two well-known deliverance teachers. Tap a link to read or hear the full teaching.</p>`+S.teachers.map(t=>`<div class="card"><h3>${esc(t.who)}</h3><p class="small">${esc(t.about)}</p>${t.quotes.map((q,i)=>`<blockquote class="tq" data-line="tq_${esc(t.who)}_${i}">"${esc(q.q)}"</blockquote>${srcLink(q.s)}`).join("")}</div>`).join("");
}
const AREAS=["Gaia programs","Atlantis and star-being teachings","Akashic records","occult practices","divination and psychics","witchcraft","New Age practices","Eastern religions","false religions and cults","secret societies and oaths","family-line curses","channelled teachings","Oprah and TV spirituality","psychics and mediums","shamanism and traditional spirit worship","African traditional spiritual practices"];
function lovedLines(p){const ar=(p.areas||[]).concat((p.other||"").split(",").map(s=>s.trim()).filter(Boolean));const list=ar.length>1?ar.slice(0,-1).join(", ")+" and "+ar[ar.length-1]:ar[0]||"";return (p.st==="past"?S.loved.past:S.loved.still)(p.n,list)}
function rLoved(){
 const L=store.get("loved",[]);
 let h=`<p class="lead">Stand in the gap for family and friends who were in these things, or who are still in them. Their names stay only on this phone.</p>`;
 h+=`<details class="card"><summary><b>📖 Scriptures for intercession</b> <span class="hint">Tap to open</span></summary>${refsInline(S.loved.refs)}</details>`;
 h+=`<div class="card addp"><h3>Add a loved one</h3><label class="fl" for="lvn">Name</label><input id="lvn" class="tin" type="text" placeholder="First name" autocomplete="off" autocapitalize="words" spellcheck="false"><p class="fl">Where are they now?</p><label class="ck"><input type="radio" name="lvst" value="still" checked><span>Still in it</span></label><label class="ck"><input type="radio" name="lvst" value="past"><span>Came out of it / experienced it before</span></label><p class="fl">What were they involved in? (optional)</p><div class="chips">${AREAS.map((x,i)=>`<label class="chip"><input type="checkbox" data-area="${i}"><span>${esc(x)}</span></label>`).join("")}</div><label class="fl" for="lvo">Anything else (optional)</label><input id="lvo" class="tin" type="text" placeholder="e.g. a guru, a lodge, a psychic" autocomplete="off"><button class="big" id="lvadd">Add and build prayer</button></div>`;
 if(!L.length)h+=`<p class="small">No names yet. Add someone above to begin.</p>`;
 h+=L.map((p,i)=>`<div class="card lvp ${p.ans?"ans":""}"><div class="lvh"><h3>${esc(p.n)}</h3><span class="tagp">${p.st==="past"?"Came out":"Still in it"}</span></div>${audioBar("lv"+i,"🙏🏽 Pray for "+esc(p.n))}<div class="praycard">${lovedLines(p).map((l,j)=>`<p data-line="lv${i}_${j}">${esc(l)}</p>`).join("")}</div><label class="fl" for="jr${i}">My prayer journal for ${esc(p.n)}</label><textarea id="jr${i}" data-lvj="${i}" rows="2" placeholder="Write a prayer, a date, or what God showed you"></textarea><button class="ab" data-lvsave="${i}">Save entry</button><ul class="jl">${(p.j||[]).map(e=>`<li><b>${esc(e.d)}</b> — ${esc(e.t)}</li>`).join("")}</ul><div class="lvb"><button class="ab" data-lvans="${i}">${p.ans?"✓ Answered — thank You, Lord":"Mark prayer answered"}</button><button class="ab del" data-lvdel="${i}">Remove</button></div></div>`).join("");
 return h;
}
function rPray(){
 let h=`<p class="lead">Read or listen to each line, then say it out loud. When you press Play, each line is spoken and then there is a pause for you to repeat it.</p>`;
 h+=`<div class="card"><label class="fl" for="gap">Repeat pause length</label><select id="gap"><option value="1">Short</option><option value="1.6" selected>Normal</option><option value="2.4">Long</option></select></div>`;
 h+=S.deliverance.map((d,i)=>`<div class="card psec">${d.step&&(!S.deliverance[i-1]||S.deliverance[i-1].step!==d.step)?`<p class="stepbadge">${esc(d.step)}</p>`:""}<h3><span class="pn">${i+1}</span>${esc(d.t)}</h3>${d.note?`<blockquote class="tq">"${esc(d.note.q)}"<cite>— Derek Prince</cite></blockquote>${srcLink(d.note.s)}`:""}${audioBar("p"+i,"🗣️ Repeat after me")}<ol class="lines">${d.lines.map((x,j)=>`<li data-line="p${i}_${j}">${esc(x)}</li>`).join("")}</ol></div>`).join("");
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
 const s=S.sources;return `<p class="lead">Scripture is from the King James Version. Created prayers, declarations, and scenarios in this study are teaching aids, not quotations.</p><ul class="srcs">${Object.keys(s).filter(k=>s[k].u&&s[k].u!="#").map(k=>`<li><a href="${s[k].u}" target="_blank" rel="noopener">${esc(s[k].n)} ↗</a></li>`).join("")}</ul>`;
}

/* ---------- navigation ---------- */
function render(i,auto){
 stopAudio();
 cur=Math.max(0,Math.min(SCREENS.length-1,i));
 const s=SCREENS[cur];let body;
 if(s.id==="home")body=rHome();else if(s.id==="open")body=rOpen();else if(s.id==="steps")body=rSteps();else if(s.id==="prep")body=rPrep();else if(s.id==="teach")body=rTeach();else if(s.id==="index")body=rIndex();else if(s.id==="loved")body=rLoved();else if(s.lesson)body=rLesson(s.lesson);else if(s.id==="check")body=rCheck();else if(s.id==="pray")body=rPray();else if(s.id==="declare")body=rDeclare();else if(s.id==="practice")body=rPractice();else if(s.id==="review")body=rReview();else if(s.id==="gloss")body=rGloss();else body=rSrc();
 $("#main").innerHTML=(s.id==="home"?"":`<header class="ph"><p class="eyebrow">${s.part?"Part "+s.part+" · "+esc(PART(s.part).t):"Reference"} · ${cur} of ${SCREENS.length-1}</p><h1>${esc(s.t)}</h1></header>${S.intro[s.id]?`<div class="card sintro"><span class="lbl">💡 ABOUT THIS SECTION</span><p>${esc(S.intro[s.id])}</p></div>`:""}`)+body;
 $("#prev").disabled=cur===0;$("#next").disabled=cur===SCREENS.length-1;
 $("#next").textContent=cur===0?"Start ▶":"Next ▶";
 window.scrollTo(0,0);
 if(s.id==="check"){updPrayer();updCounts()}
 if(s.id==="practice")initFC();
 if(s.id==="review")updComplete();
 if(s.id!=="home"&&!s.lesson&&!["practice","check"].includes(s.id)){done.add(s.id);(store.set("done",[...done]),updProg())}
 history.replaceState(null,"","#"+s.id);updProg();
 if(auto){const b=document.querySelector(".abar .play");if(b)setTimeout(()=>playSec(b.dataset.sec),400)}
}
function updProg(){const t=SCREENS.length-1;const n=SCREENS.slice(1).filter(s=>done.has(s.id)).length;const p=Math.round(n/t*100);$("#pfill").style.width=p+"%";$("#ptext").textContent=`${n} of ${t} sections · ${p}%`;$("#pbar").setAttribute("aria-valuenow",p)}
function updComplete(){const n=done.size,t=SCREENS.length-1;$("#complete").innerHTML=n>=t-1?`<div class="trophy">🏆</div><h3>Study complete</h3><p>"If the Son therefore shall make you free, ye shall be free indeed." — John 8:36</p>`:`<p class="small">You have completed ${n} of ${t} sections. Mark each lesson complete to finish the study.</p>`}

/* ---------- audio ---------- */
const synth=window.speechSynthesis;let A={sec:null,q:[],i:0,paused:false,timer:null,token:0};
function voice(){const vs=synth?synth.getVoices():[];return vs.find(v=>/en[-_](US|GB)/i.test(v.lang)&&/Samantha|Daniel|Google|Natural|Aria|Karen/i.test(v.name))||vs.find(v=>/^en/i.test(v.lang))}
function queueFor(sec){
 const root=document.querySelector(`.abar[data-sec="${sec}"]`);const gap=+(($("#gap")||{}).value||1.6);
 if(sec==="open")return [{t:S.intro.open}].concat(S.opening.flatMap(o=>[{t:o.t},{t:refText(o.r)},{t:"Let us pray. "+o.p}]));
 if(sec==="steps")return [{t:S.intro.steps},{t:"Derek Prince taught nine steps."}].concat(S.nine.map((n,i)=>({t:"Step "+(i+1)+". "+n[0],hl:"nine_"+i})),[{t:"Four words for breaking a curse: recognize, repent, renounce, resist."},{t:refText("James 4:7")},{t:refText("Mark 16:17")},{t:refText("John 8:36")}]);
 if(sec==="prep")return [{t:S.intro.prep}].concat(S.prep.flatMap((o,i)=>[{t:o.t.replace(" · ",". ")},{t:"Derek Prince said: "+o.q},{t:refText(o.r)}].concat(o.r2?[{t:refText(o.r2)}]:[],[{t:"Repeat after me."},{t:o.p,rep:gap,hl:"prep_"+i}])));
 if(sec==="check")return myPrayerLines().map(t=>({t,rep:gap}));
 if(sec==="kg")return S.kingdom.flatMap((r,i)=>[{t:r[0],rep:gap,hl:"kg_"+i+"a"},{t:r[1],rep:gap,hl:"kg_"+i+"b"}]);
 if(sec==="teach")return S.teachers.flatMap(t=>[{t:t.who+" said:"}].concat(t.quotes.map((q,i)=>({t:q.q,hl:"tq_"+t.who+"_"+i}))));
 if(/^lv\d+$/.test(sec)){const p=store.get("loved",[])[+sec.slice(2)];return p?[{t:"Let us pray for "+p.n+"."}].concat(lovedLines(p).map((t,j)=>({t,hl:sec+"_"+j}))):[]}
 if(sec==="declare")return S.declarations.map((t,i)=>({t,rep:gap,hl:"declare_"+i}));
 if(sec==="review")return [...document.querySelectorAll("#main .three li, #main .after li")].map(e=>({t:e.textContent})).concat([{t:document.querySelector("#main .praycard p").textContent}]);
 if(/^p\d+$/.test(sec)){const d=S.deliverance[+sec.slice(1)];return [{t:(d.step?d.step+". ":"")+d.t}].concat(d.lines.map((t,j)=>({t,rep:gap,hl:sec+"_"+j})))}
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
 if(cur<SCREENS.length-1){let n=cur+1;while(n<SCREENS.length&&["practice","gloss","src"].includes(SCREENS[n].id))n++;if(n<SCREENS.length&&SCREENS[n].id!=="src")setTimeout(()=>render(n,true),900)}
}
function sayOnce(t){if(!synth)return;stopAudio();const u=new SpeechSynthesisUtterance(t);const v=voice();if(v)u.voice=v;u.rate=.92;synth.speak(u);$("#now").hidden=false;$("#nowt").textContent="Playing…";u.onend=()=>{$("#now").hidden=true}}

/* ---------- flashcards ---------- */
let fc={o:[],i:0,b:false};
function initFC(){fc.o=S.flashcards.map((_,i)=>i);fc.i=0;fc.b=false;drawFC()}
function drawFC(){const c=S.flashcards[fc.o[fc.i]];const el=$("#fc");el.classList.toggle("back",fc.b);el.querySelector(".fcf").innerHTML=`<small>${fc.b?"ANSWER":"QUESTION"}</small>${esc(fc.b?c.b:c.f)}`;$("#fcn").textContent=`${fc.i+1} / ${fc.o.length}`}

/* ---------- prayer gen ---------- */
function updCounts(){const sel=new Set(store.get("sel2",[]));S.checklist.forEach((g,gi)=>{const el=document.querySelector(`[data-gc="${gi}"]`);if(!el)return;const n=g.items.filter((_,ii)=>sel.has(g.o+"_"+ii)).length;el.textContent=(n?n+" ticked · ":"")+g.items.length+" items"});const c=$("#ckcount");if(c)c.textContent=sel.size?`You have ticked ${sel.size} item${sel.size>1?"s":""}.`:""}
function updPrayer(){$("#myprayer").innerHTML=`<span class="lbl">🙏🏽 PRAY — repeat after me</span>`+myPrayerLines().map(l=>`<p>${esc(l)}</p>`).join("")}

/* ---------- events ---------- */
document.addEventListener("click",e=>{
 const t=e.target.closest("button,[data-go]");if(!t)return;
 if(t.dataset.go){render(+t.dataset.go);return}
 if(t.dataset.act){const s=t.dataset.sec;if(t.dataset.act==="play")playSec(s);else if(t.dataset.act==="pause")pauseAudio();else stopAudio();return}
 if(t.dataset.say){sayOnce(t.dataset.say);return}
 if(t.id==="prev")return render(cur-1);if(t.id==="next")return render(cur+1);if(t.id==="homeb")return render(0);
 if(t.id==="nowstop")return stopAudio();
 if(t.id==="theme"){const d=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=d;store.set("theme",d);t.setAttribute("aria-label",d==="dark"?"Switch to day mode":"Switch to night mode");t.textContent=d==="dark"?"💡 Day":"🌙 Night";return}
 if(t.classList.contains("ltab")){const w=t.closest(".levels");w.querySelectorAll(".ltab").forEach(x=>x.classList.toggle("on",x===t));w.querySelectorAll(".lv").forEach(x=>x.classList.toggle("on",x.dataset.lv===t.dataset.lv));return}
 if(t.classList.contains("opt")){const m=t.closest(".mcq");if(m.classList.contains("answered"))return;m.classList.add("answered");const ok=+t.dataset.i===+m.dataset.ans;m.querySelectorAll(".opt").forEach(o=>{if(+o.dataset.i===+m.dataset.ans)o.classList.add("right")});if(!ok)t.classList.add("wrong");const fb=m.querySelector(".fb");fb.hidden=false;fb.querySelector(".fbt").textContent=ok?"✅ Correct":"❌ Not quite — here is why";m.dataset.ok=ok?1:0;
  const qs=document.querySelectorAll('.mcq[data-id^="qz"]');const an=[...qs].filter(x=>x.classList.contains("answered"));if(qs.length&&an.length===qs.length){const sc=an.filter(x=>x.dataset.ok==1).length;$("#score").innerHTML=`<b>Your score: ${sc} / ${qs.length}</b> ${sc===qs.length?"— excellent!":"— review the explanations and try again later."}`;done.add("practice");(store.set("done",[...done]),updProg())}return}
 if(t.dataset.done){done.add(t.dataset.done);(store.set("done",[...done]),updProg());t.textContent="✓ Lesson complete";return}
 if(t.id==="fc"){fc.b=!fc.b;drawFC();return}
 if(t.id==="fcx"){fc.i=(fc.i+1)%fc.o.length;fc.b=false;drawFC();return}
 if(t.id==="fcp"){fc.i=(fc.i-1+fc.o.length)%fc.o.length;fc.b=false;drawFC();return}
 if(t.id==="fcr"){fc.o.sort(()=>Math.random()-.5);fc.i=0;fc.b=false;drawFC();return}
 if(t.id==="clearck"){store.set("sel2",[]);store.set("extra","");render(cur);return}
 if(t.dataset.jump){const g=+t.dataset.jump;render(SCREENS.findIndex(s=>s.id==="check"));const d=document.querySelectorAll("details.grp")[g];if(d){d.open=true;d.scrollIntoView({block:"start"})}return}
 if(t.id==="resetb"){$("#resetdlg").hidden=false;return}
 if(t.id==="rs_cancel"){$("#resetdlg").hidden=true;return}
 if(t.id==="rs_prog"||t.id==="rs_all"){done.clear();store.set("done",[]);if(t.id==="rs_all"){["sel2","extra","loved","hf"].forEach(k=>store.set(k,k==="sel2"||k==="loved"?[]:k==="hf"?false:""));S.lessons.forEach(l=>store.set("apply_"+l.id,""))}$("#resetdlg").hidden=true;render(0);return}
 if(t.id==="hfgo"){store.set("hf",true);render(1,true);return}
 if(t.id==="lvadd"){const n=$("#lvn").value.trim();if(!n){$("#lvn").focus();$("#lvn").placeholder="Please type a name";return}const st=document.querySelector('input[name=lvst]:checked').value;const areas=[...document.querySelectorAll("[data-area]:checked")].map(x=>AREAS[+x.dataset.area]);const L=store.get("loved",[]);L.push({n,st,areas,other:$("#lvo").value.trim(),j:[],ans:false});store.set("loved",L);done.add("loved");(store.set("done",[...done]),updProg());render(cur);setTimeout(()=>{const c=document.querySelectorAll(".lvp");c[c.length-1]&&c[c.length-1].scrollIntoView({block:"start"})},50);return}
 if(t.dataset.lvsave){const i=+t.dataset.lvsave;const ta=document.querySelector(`[data-lvj="${i}"]`);const v=ta.value.trim();if(!v)return;const L=store.get("loved",[]);(L[i].j=L[i].j||[]).unshift({d:new Date().toLocaleDateString(),t:v});store.set("loved",L);render(cur);document.querySelectorAll(".lvp")[i].scrollIntoView({block:"start"});return}
 if(t.dataset.lvans){const i=+t.dataset.lvans;const L=store.get("loved",[]);L[i].ans=!L[i].ans;store.set("loved",L);render(cur);document.querySelectorAll(".lvp")[i].scrollIntoView({block:"start"});return}
 if(t.dataset.lvdel){const i=+t.dataset.lvdel;const L=store.get("loved",[]);if(!confirm("Remove "+L[i].n+" and their journal from this phone?"))return;L.splice(i,1);store.set("loved",L);render(cur);return}
});
document.addEventListener("change",e=>{
 const t=e.target;
 if(t.id==="hfree"){store.set("hf",t.checked);return}
 if(t.dataset.ck){const s=new Set(store.get("sel2",[]));t.checked?s.add(t.dataset.ck):s.delete(t.dataset.ck);store.set("sel2",[...s]);updPrayer();updCounts();if(s.size){done.add("check");(store.set("done",[...done]),updProg())}}
});
document.addEventListener("input",e=>{const t=e.target;if(t.dataset.srch){const q=t.value.toLowerCase().trim();document.querySelectorAll(`.cks[data-g="${t.dataset.srch}"] .ck`).forEach(l=>{l.hidden=q&&!l.dataset.t.includes(q)})}if(t.id==="extra"){store.set("extra",t.value);updPrayer()}if(t.dataset.k)store.set(t.dataset.k,t.value)});

const LOGO=`<svg viewBox="0 0 64 64" width="64" height="64" aria-label="Deliverance study mark" fill="none"><circle cx="32" cy="32" r="29" stroke="currentColor" stroke-width="3"/><path d="M32 12v40M20 24h24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="32" r="6" fill="currentColor" opacity=".25"/></svg>`;

const th=store.get("theme",null)||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=th;$("#theme").textContent=th==="dark"?"💡 Day":"🌙 Night";
if(synth&&synth.onvoiceschanged!==undefined)synth.onvoiceschanged=()=>{};
const h=location.hash.slice(1);const si=SCREENS.findIndex(s=>s.id===h);render(si>0?si:0);
window.__T={render,SCREENS,queueFor,A:()=>A};
})();
