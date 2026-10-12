// Reorganization: title, parts that follow Derek Prince's nine steps, topic introductions.
(function(){
const S=window.STUDY;

S.title="Deliverance from Non-Christian Practices and Religions";
S.subtitle="A King James Bible study for freedom in Jesus Christ";

Object.assign(S.sources,{
 s443:{n:"Derek Prince — \"The Purpose of God's Discipline\" (the nine conditions for deliverance)",u:"https://www.derekprince.com/sermons/443"},
 s426:{n:"Derek Prince — \"War on Earth\"",u:"https://www.derekprince.com/sermons/426"},
 s490:{n:"Derek Prince — \"Release From Curses\"",u:"https://www.derekprince.com/sermons/490"},
 r33:{n:"Derek Prince — \"Steps for Deliverance\" (radio)",u:"https://www.derekprince.com/radio/33"},
 r210:{n:"Derek Prince — \"The Prayer of Release\" (radio)",u:"https://www.derekprince.com/radio/210"}
});

/* ---------- The five parts of the study ---------- */
S.parts=[
 {n:1,t:"Begin Here",d:"Open in prayer, learn how deliverance works, and hear the teachers."},
 {n:2,t:"Know the Truth",d:"Build on God's Word first: who God is, the oldest lie, and the spirit of antichrist."},
 {n:3,t:"Recognize the Counterfeits",d:"One category at a time, learn what each non-Christian practice and religion is and what the Bible says about it: the occult, Eastern religions, New Age teachings, false religions and secret societies, and family lines. The Index introduces all 17 groups."},
 {n:4,t:"The Steps to Freedom",d:"Walk through Derek Prince's nine steps: prepare your heart, break with the occult, be released, take your stand, and expel."},
 {n:5,t:"Stay Free",d:"Declare the Word, pray for loved ones, practice, and follow the aftercare."},
 {n:0,t:"Reference",d:"Plain-language meanings and every source used."}
];

/* ---------- Lesson order and numbering ---------- */
const LORDER=[["l2",2],["l3",2],["l7",2],["l8",3],["l9",3],["l1",3],["l4",3],["l5",3],["l10",3],["l11",3],["l6",4]];
S.lessons=LORDER.map(([id,p],i)=>{const l=S.lessons.find(x=>x.id===id);l.num=i+1;l.part=p;return l});
S.lessons.find(l=>l.id==="l6").step="Step 6 teaching";
const lz=id=>S.lessons.find(l=>l.id===id);
lz("l1").title="New Age Teachings: Atlantis and the Gaia Videos";
lz("l2").intro="A popular New Age teaching says the Elohim were many beings who \"formed life in higher dimensions.\" The Bible uses the same word for the one living God. Read what Scripture says about who Elohim really is.";
lz("l3").intro="Many New Age teachings promise that people can become gods and find divine power in their own blood and DNA. The Bible shows us where this idea first came from.";

/* ---------- Opening prayer (Begin Here) and Steps 1-5 (Prepare Your Heart) ---------- */
const op=S.opening;
const pick=t=>op.find(o=>o.t===t);
S.opening=[pick("Praise and Worship"),pick("Ask God to Reveal"),pick("Invite the Holy Spirit")];
S.prep=[
 {t:"Step 1 · Affirm your faith in Christ",r:"Romans 10:9-10",r2:"Hebrews 3:1",
  q:"Personally affirm your faith in Christ. Christ is the High Priest of our confession. No confession, no High Priest.",s:"s443",
  p:"Lord Jesus Christ, I believe that you are the Son of God, that you died on the cross for my sin and rose again from the dead.",by:"Confession given by Derek Prince",ps:"s207"},
 {t:"Step 2 · Humble yourself",r:"James 4:6-10",
  q:"Pride is the greatest barrier to deliverance.",s:"s207",
  p:"Lord, I humble myself before You. I cannot set myself free. I submit myself to You."},
 {t:"Step 3 · Confess any known sin",r:"Proverbs 28:13",r2:"1 John 1:9",
  q:"Don't search for sin, but if the Holy Spirit shows you unconfessed sin, confess it.",s:"s426",
  p:"Father, I confess my sins and the sins of my ancestors. I will not cover them. I confess them and forsake them, and I ask for Your mercy, in Jesus' name."},
 {t:"Step 4 · Repent of all sins",r:"Acts 3:19",
  q:"Without repentance, there is no deliverance.",s:"r33",
  p:"Lord, I repent. I turn away from every sin and every false way, and I turn to You."},
 {t:"Step 5 · Forgive all other people",r:"Mark 11:25-26",
  q:"Forgive all other people. Now this is absolutely essential.",s:"s426",
  p:"Lord, as You have forgiven me, I choose to forgive every person who harmed me or led me into these things. I release them to You."}
];

/* ---------- Deliverance prayer: arranged by Steps 6 to 9 ---------- */
const D=S.deliverance;const dp=t=>D.find(d=>d.t===t);
const stand={t:"Take Your Stand with God",lines:[
 "I take my stand with You, Lord, against all Satan's demons.",
 "I take my stand now against the devil and all his pressures, and everything he wants to do against me.",
 "And in the name of Jesus, I resist him. I refuse to submit any longer to him.",
 "Submit yourselves therefore to God. Resist the devil, and he will flee from you."]};
const ex=dp("Commanding Spirits to Leave");
ex.t="Expel: Commanding Spirits to Leave";
ex.lines=["Now I speak to any demons that have control over me.","I command you to go from me now. In the name of Jesus, I expel you!"].concat(ex.lines);
const ORDER=[
 ["Confession","Steps 1–4"],
 ["Renouncing the Lie","Step 6"],["Renouncing False Elohim","Step 6"],["Renouncing the Spirit of Antichrist","Step 6"],
 ["Renouncing Self-Worship, Channeling and Mediums","Step 6"],["Renouncing the Akashic Records","Step 6"],
 ["Renouncing Star Beings and False Gods","Step 6"],["Renouncing Atlantis Teachings","Step 6"],["Renouncing the Occult","Step 6"],
 ["Renouncing Other Gods","Step 6"],["Renouncing Secret Oaths and False Religions","Step 6"],["Renouncing African Traditional Spirits","Step 6"],
 ["Breaking Ties","Step 6"],
 ["Breaking Family-Line Curses","Step 7"],
 ["Take Your Stand with God","Step 8"],
 ["Expel: Commanding Spirits to Leave","Step 9"],
 ["Closing the Doors","After deliverance"],["Filling and Sealing","After deliverance"]];
const all=D.concat([stand]);
const ordered=ORDER.map(([t,st])=>{const d=all.find(x=>x.t===t);if(d)d.step=st;return d}).filter(Boolean);
all.forEach(d=>{if(!ordered.includes(d)){d.step=d.step||"Step 6";ordered.splice(ordered.findIndex(x=>x.t==="Breaking Ties"),0,d)}});
S.deliverance=ordered;
const exS=S.deliverance.find(d=>d.step==="Step 9");
exS.note={q:"The simplest action to take is to begin to breathe out.",s:"r33"};
S.deliverance.find(d=>d.step==="Step 7").note={q:"Then when you've met those conditions you can release yourself in the name of Jesus.",s:"s327"};
S.sources.s327=S.sources.s327||{n:"Derek Prince — \"Release from the Curse, Part 2\"",u:"https://www.derekprince.com/sermons/327"};

/* ---------- How Deliverance Works ---------- */
S.nine=[
 ["Personally affirm your faith in Christ.","Prepare Your Heart"],
 ["Humble yourself.","Prepare Your Heart"],
 ["Confess any known sin.","Prepare Your Heart"],
 ["Repent of all sins.","Prepare Your Heart"],
 ["Forgive all other people.","Prepare Your Heart"],
 ["Break with the occult and all false religion.","The Clean Break, My Renunciation Checklist, and the Deliverance Prayer"],
 ["Prepare to be released from every curse over your life.","Deliverance Prayer: Breaking Family-Line Curses"],
 ["Take your stand with God.","Deliverance Prayer: Take Your Stand with God"],
 ["Expel!","Deliverance Prayer: Expel"]
];
S.fourRE=["Recognize","Repent","Renounce","Resist"];

/* ---------- Introductions for every screen ---------- */
S.intro={
 open:"Deliverance begins with God, not with the enemy. Before you study, praise the Lord, ask Him to show you every door that was opened, and invite the Holy Spirit to lead.",
 steps:"Deliverance means being set free by Jesus Christ from the power of evil spirits. This study follows the order taught by Derek Prince, who listed nine conditions people must meet to be delivered. Neil T. Anderson's first Step to Freedom, renouncing the occult and false religions, is built into Step 6.",
 teach:"Two well-known deliverance teachers guide this study: Derek Prince, Bible teacher and founder of Derek Prince Ministries, and Neil T. Anderson, founder of Freedom in Christ Ministries. These are their exact words.",
 index:"This is the full list of every non-Christian practice, religion, program, society, object and vow in the tool, arranged in the same order as the lessons. Tap a group to read what it is and see every item.",
 prep:"Steps 1 to 5 prepare your heart. Derek Prince taught that faith, humility, confession, repentance and forgiveness come before breaking with the occult and expelling spirits. Pray each step out loud.",
 check:"This is Step 6: break with the occult and all false religion. Read what each group is, then tick everything you were involved in. Your renunciation prayer builds itself at the bottom.",
 pray:"This prayer covers Steps 6 to 9. Each part is labelled with its step. Say each line out loud after you hear it.",
 declare:"Declarations are spoken statements of faith based on the Word of God. Saying them out loud helps you take your stand and stay free.",
 loved:"Intercession means standing in the gap in prayer for someone else. Add family members and friends who came out of these things, or who are still in them.",
 practice:"Flashcards, a quiz and \"What would you do?\" questions help you remember the truth and use it in daily life.",
 review:"Staying free matters as much as getting free. Review the key truths and follow the aftercare steps this week.",
 gloss:"Simple meanings for the words used in this study.",
 src:"Every teacher's quote, fact and Scripture in this study can be checked here."
};

/* ---------- Checklist: categories in lesson order, with topic introductions ---------- */
S.checklist.forEach((g,i)=>g.o=i);
const INTRO={
 0:{c:"A",a:"Gaia is a paid streaming service of programs on New Age spirituality, ancient aliens, Atlantis, psychic powers, yoga, meditation and channelling. These are the series in its catalog.",r:["2 Corinthians 11:3-4"]},
 1:{c:"A",a:"These are teachings that people came from Atlantis, Lemuria or races from the stars, and that \"higher gods\" such as the Anunnaki, Arcturians or Pleiadians made us or guide us. They replace the Creator with created beings.",r:["Deuteronomy 4:19"]},
 6:{c:"A",a:"The New Age movement teaches that all things are one, that God is an energy, and that every person can awaken a divine \"higher self.\" Energy practices claim to move a life force through the body, crystals or the hands.",r:["Colossians 2:8"]},
 12:{c:"A",a:"Channelling is when a person lets a spirit speak, write or teach through them. Many popular spiritual books claim to have been received this way, from \"guides,\" \"masters\" or an \"inner voice.\"",r:["1 John 4:1"]},
 13:{c:"A",a:"Oprah Winfrey's television, radio and online programs gave a large platform to teachers of the law of attraction, channelled books, the \"higher self\" and \"many paths to God.\" The Christian Research Institute describes this as \"making the New Age normal.\"",r:["John 14:6"]},
 14:{c:"A",a:"These are shows where psychics and mediums claim to speak with the dead. They present consulting the dead as comfort or entertainment, which God forbids.",r:["Leviticus 20:6"]},
 2:{c:"B",a:"\"Occult\" means hidden. It is seeking secret knowledge, power or contact with spirits apart from God. This list follows Neil T. Anderson's Non-Christian Spiritual Checklist from the Steps to Freedom in Christ.",r:["Deuteronomy 18:10-12"]},
 3:{c:"B",a:"These are practices Derek Prince named in his teaching on the occult and curses. He said, \"The occult is breaking the first commandment.\"",r:["Isaiah 8:19-20"]},
 4:{c:"B",a:"Divination is trying to learn the future or hidden things through cards, stars, signs, numbers or spirits. Spirit contact is trying to speak with the dead or with spirits.",r:["Leviticus 19:31"]},
 5:{c:"B",a:"Witchcraft uses spells, rituals and spiritual power to control people or events. Derek Prince defined it as \"the attempt to control people and make them do what you want by a power other than the Holy Spirit.\"",r:["Galatians 5:19-21"]},
 7:{c:"C",a:"These are religions from Asia, such as Hinduism, Buddhism, Taoism and Shinto, and practices drawn from them, such as mantras, chanting and meditation to empty the mind. They bow to other gods or to no god.",r:["Isaiah 2:6-8"]},
 8:{c:"D",a:"These are groups that deny that Jesus Christ is God come in the flesh, add another book or prophet above the Bible, or teach salvation by another way.",r:["Galatians 1:8-9"]},
 9:{c:"D",a:"Secret societies are lodges and orders that require secret initiations, oaths and rituals, such as Freemasonry. Derek Prince called Freemasonry \"a source of the most tremendous demonic problems\" that \"goes from generation to generation.\"",r:["Matthew 5:34-37"]},
 11:{c:"D",a:"A vow, covenant or dedication is a binding promise. These are promises made to a spirit, a god, a group or a person outside of Christ, by you or by someone on your behalf.",r:["James 5:12"]},
 16:{c:"E",a:"Encyclopaedia Britannica explains that in many African religions prayers and sacrifices are directed to lesser divinities and ancestors rather than to the Supreme Being, through priests, diviners and shrines. Many people were dedicated to these as babies, at funerals or at festivals without knowing it.",r:["Jeremiah 2:27-28","Ezekiel 13:18-20"]},
 15:{c:"E",a:"Shamanism is seeking spirits through a spirit-healer, often with drumming or trance. Spiritism is calling on spirits of the dead for guidance or healing. Many folk religions in Africa, the Caribbean and the Americas mix these with the names of saints.",r:["Deuteronomy 32:16-17"]},
 10:{c:"F",a:"These are objects linked to other gods, the occult or superstition, such as idols, charms, crystals, masks and occult books. Derek Prince taught that you must \"get rid of all contact objects.\"",r:["Deuteronomy 7:25-26","Isaiah 30:22"]}
};
S.cats={
 B:{t:"The occult: divination, spirit contact and witchcraft",l:"Lesson 4"},
 C:{t:"Eastern religions",l:"Lesson 5"},
 A:{t:"New Age teachings, channelling and media",l:"Lessons 6 to 8"},
 D:{t:"False religions, cults, secret societies and vows",l:"Lesson 9"},
 E:{t:"Ancestral and traditional spirit worship",l:"Lesson 10"},
 F:{t:"Clean the house: objects",l:"Lesson 11"}
};
const DORDER=[2,3,4,5,7,6,12,1,13,14,0,8,9,11,16,15,10];
S.checklist=DORDER.map(o=>{const g=S.checklist.find(x=>x.o===o);g.about=INTRO[o].a;g.refs=INTRO[o].r;g.cat=INTRO[o].c;return g});
})();
