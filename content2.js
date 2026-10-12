// Expansion: teachers, lessons 7-11, full inventory, loved-ones intercession.
(function(){
const S=window.STUDY;
const DP={
 s86:{n:"Derek Prince — Cult and Occult: Satan's Snares Disclosed",u:"https://www.derekprince.com/sermons/86"},
 s80:{n:"Derek Prince — Curses: Cure, Part 2",u:"https://www.derekprince.com/sermons/80"},
 s207:{n:"Derek Prince — How To Be Delivered",u:"https://www.derekprince.com/sermons/207"},
 s297:{n:"Derek Prince — Overcoming the Barriers to Healing",u:"https://www.derekprince.com/sermons/297"},
 s24:{n:"Derek Prince — How to Identify the Enemy",u:"https://www.derekprince.com/sermons/24"},
 r34:{n:"Derek Prince — When Deliverance Doesn't Happen",u:"https://www.derekprince.com/radio/34"},
 r209:{n:"Derek Prince — The Process of Release",u:"https://www.derekprince.com/radio/209"},
 na:{n:"Neil T. Anderson — The Steps to Freedom in Christ, Step 1",u:"https://static1.squarespace.com/static/5a65e35ebff200b621e3dc84/t/68ee9dee8fe06c49fc5803ec/1779906028177/Seven+Steps+to+Freedom+Neil+Anderson+Lesson+6.pdf"},
 ficm:{n:"Freedom in Christ Ministries — Neil Anderson on the Steps to Freedom",u:"https://www.ficm.org/steps-to-freedom-in-christ/neil-andersons-the-origin-theology-rationale-of-the-steps-to-freedom-in-christ/"},
 gaia:{n:"Gaia — All Series catalog",u:"https://www.gaia.com/all-series/series"}
};
Object.assign(S.sources,DP);

S.teachers=[
 {who:"Derek Prince",about:"Bible teacher and author, Derek Prince Ministries",quotes:[
  {q:"There are many ways into the supernatural. But there's only one way that leads into God's supernatural. That is Jesus.",s:"s207"},
  {q:"The New Age is a kind of catalog of the occult. It is not new. They all go back for thousands of years.",s:"s207"},
  {q:"The fact that a fortune teller can tell you truth does not mean it comes from God.",s:"s207"},
  {q:"The occult is breaking the first commandment, it's having some other god than the true living God.",s:"s80"},
  {q:"Witchcraft is the attempt to control people and make them do what you want by a power other than the Holy Spirit.",s:"s86"},
  {q:"I believe basically all forms of spiritual deception are demonic.",s:"s24"},
  {q:"People who have been in the occult almost always have a problem with confusion.",s:"s24"},
  {q:"You confess, you renounce and you break every contact.",s:"s86"},
  {q:"You cannot come to God with your right hand, with your left hand still held out towards Satan.",s:"s297"},
  {q:"I make it a principle, I don't want to keep in my house anything that dishonors Jesus Christ or honors Satan.",s:"r34"},
  {q:"Recognize, repent, renounce, resist.",s:"s80"}
 ]},
 {who:"Neil T. Anderson",about:"Founder, Freedom in Christ Ministries; author of The Bondage Breaker",quotes:[
  {q:"The first Step to freedom in Christ is to renounce your previous or current involvement with satanically-inspired occult practices and false cults and religions.",s:"na"},
  {q:"You need to renounce any activity or group that denies Jesus Christ, offers guidance through any source other than the absolute authority of the written Word of God or requires secret initiations, ceremonies or covenants.",s:"na"},
  {q:"Even if you innocently participated in something or observed it, you should write it on your list to renounce, just in case you unknowingly gave Satan a foothold.",s:"na"},
  {q:"In making a public profession of faith, the early church would stand, face the west and say, \"I renounce you Satan and all your works and all your ways.\"",s:"ficm"},
  {q:"Truth sets people free. Therefore we must have an uncompromising commitment to the Word of God.",s:"ficm"}
 ]}
];

// Opening prayers drawn from the teachers' own words
S.opening=[
 {t:"Praise and Worship", r:"Psalm 33:6", p:"Lord, by Your word the heavens were made, and all the host of them by the breath of Your mouth. You alone are God, and I worship You."},
 {t:"Ask God to Reveal", r:"Psalm 51:6", p:"Dear Heavenly Father, I ask you to guard my heart and my mind and reveal to me any and all involvement I have had, either knowingly or unknowingly, with cults or occult practices, false religions or false teachers. In Jesus' name, I pray, amen.", by:"Prayer by Neil T. Anderson", s:"na"},
 {t:"Confess Your Faith in Christ", r:"Romans 10:9-10", p:"Lord Jesus Christ, I believe that you are the Son of God, that you died on the cross for my sin and rose again from the dead.", by:"Confession given by Derek Prince", s:"s207"},
 {t:"Confession of Sin", r:"Proverbs 28:13", p:"Father, I confess my sins and the sins of my ancestors. I will not cover them. I confess and forsake them, and I ask for Your mercy, in Jesus' name."},
 {t:"Forgive Others", r:"Colossians 1:13-14", p:"Lord, as You have forgiven me, I choose to forgive every person who led me into these things. I release them to You."},
 {t:"Invite the Holy Spirit", r:"John 8:31-32", p:"Holy Spirit, lead me into all truth. Show me every door I need to close."}
];

const NEW=[
{id:"l7",num:7,title:"The Spirit of Antichrist",tag:"Who denies that Jesus is the Christ?",icon:"x",diagram:"test",
 intro:"John gives the test plainly. Any spirit, teacher, religion or program that denies Jesus is the Christ, come in the flesh, carries the spirit of antichrist.",
 scripture:["1 John 2:18-23","1 John 4:1-3","2 John 1:7-11","Matthew 24:4-5","Matthew 24:24","2 Peter 2:1","2 Thessalonians 2:3-12"],
 key:"The test is Jesus Christ: His Sonship, His coming in the flesh, His death, His resurrection, and His Lordship.",
 levels:{simple:"If a teacher says Jesus is not God's Son, that teacher is not from God.",teen:"Some programs call Jesus \"a master,\" \"an ascended being,\" or \"a teacher like Buddha.\" 1 John 2:22 calls that denial.",adult:"1 John 4:3 says every spirit that \"confesseth not that Jesus Christ is come in the flesh is not of God.\" Use this as the first test of every teacher, book or series.",deep:"2 Thessalonians 2 links the coming lawless one with \"all deceivableness of unrighteousness\" and \"strong delusion\" for those who \"received not the love of the truth.\" The safeguard is loving the truth (2 Thessalonians 2:10)."},
 check:{q:"According to 1 John 2:22, who is antichrist?",opts:["Anyone who misses church","He that denieth the Father and the Son","Anyone who reads history","Anyone who is sick"],ans:1,why:"\"He is antichrist, that denieth the Father and the Son.\" (1 John 2:22)"},
 apply:"Think of one teacher, show or book you followed. What did it say about Jesus Christ?",
 prayer:"Lord Jesus Christ, I confess that You are the Christ, the Son of the living God, come in the flesh. I reject every spirit that denies You.",
 decl:"Jesus Christ is come in the flesh. He is the Son of God. Every spirit that denies Him is not of God."},
{id:"l8",num:8,title:"What God Forbids: The Occult",tag:"Deuteronomy 18 names them all",icon:"ban",
 intro:"Derek Prince said of Deuteronomy 18:10-11, \"That's a pretty comprehensive list. I think every kind of occult practice is included.\"",
 introSrc:"s25",
 scripture:["Deuteronomy 18:10-12","Leviticus 19:31","Leviticus 20:6","Leviticus 20:27","1 Chronicles 10:13-14","2 Kings 21:6","Micah 5:12","1 Samuel 15:23","Acts 16:16-18","Acts 8:9-13","Acts 8:18-23","Acts 13:6-12","Galatians 5:19-21","Revelation 21:8","Revelation 22:15"],
 key:"God calls these practices abomination. He hates the practice, and He loves the person and calls them to come out.",
 levels:{simple:"God says: do not ask spirits, do not tell fortunes, do not use magic. Ask God.",teen:"Tarot apps, horoscopes, Ouija games and spell videos are not harmless fun. King Saul died for asking counsel \"of one that had a familiar spirit\" (1 Chronicles 10:13).",adult:"Acts 16 shows a girl with \"a spirit of divination\" who spoke true words about Paul, yet Paul cast the spirit out. As Derek Prince taught, true information does not prove a godly source.",deep:"Acts 8 (Simon) and Acts 13 (Elymas) show sorcery confronting the gospel. Simon was told his heart was \"not right in the sight of God\" and that he was \"in the gall of bitterness, and in the bond of iniquity.\" Repentance and prayer were the remedy."},
 check:{q:"Why did King Saul die, according to 1 Chronicles 10:13?",opts:["He lost a battle by chance","He asked counsel of one that had a familiar spirit","He was too old","He built a temple"],ans:1,why:"\"...and also for asking counsel of one that had a familiar spirit, to enquire of it.\""},
 apply:"Which of these have you or your family used, even \"for fun\"?",
 prayer:"Lord, I confess that I have participated in these things, and I renounce them. Thank You that in Christ I am forgiven.",
 decl:"I will not seek familiar spirits. I seek the Lord my God."},
{id:"l9",num:9,title:"Eastern Religions and Other Gods",tag:"\"They be replenished from the east\"",icon:"om",
 intro:"Isaiah warned Israel that they were \"replenished from the east\" and worshipped the work of their own hands. Derek Prince, who tried to become a yogi before he was saved, warned against \"oriental cults and philosophies.\"",
 introSrc:["s86","s207"],
 scripture:["Isaiah 2:6-8","Exodus 20:3-5","Deuteronomy 32:16-17","Psalm 96:5","Psalm 106:35-38","1 Corinthians 10:19-21","Jeremiah 10:2-5","Matthew 6:7","Hebrews 9:27","1 Kings 18:21","Acts 17:22-31","Acts 4:12","John 14:6","Joshua 24:15"],
 key:"There is none other name under heaven given among men, whereby we must be saved (Acts 4:12).",
 levels:{simple:"Some people bow to statues or chant to other gods. The Bible says those gods cannot save. Only Jesus saves.",teen:"Yoga, mantras, Buddha statues and \"good vibes\" spirituality are sold as wellness. 1 Corinthians 10:20 says what is offered to idols is offered \"to devils.\"",adult:"Matthew 6:7 warns against \"vain repetitions\" — the opposite of mantra repetition. Hebrews 9:27 closes the door on reincarnation and karma cycles. Acts 17 shows Paul lovingly preaching Christ to a city \"wholly given to idolatry.\"",deep:"Deuteronomy 32:17 and Psalm 106:37 identify sacrifice to idols as sacrifice \"unto devils.\" This study names religions so that people can renounce their own participation. It is not a call to hate any person; Paul reasoned with the Athenians and preached the resurrection to them."},
 check:{q:"In 1 Corinthians 10:20, to whom are idol sacrifices really offered?",opts:["To nobody","To devils, and not to God","To ancestors","To the universe"],ans:1,why:"\"...the things which the Gentiles sacrifice, they sacrifice to devils, and not to God.\""},
 apply:"Is there a statue, image, mantra, or practice from another religion still in your home or routine?",
 prayer:"Lord, I renounce every other god and every practice of the religions of the nations that I took part in. Jesus Christ is my only Lord and Saviour.",
 decl:"As for me and my house, we will serve the LORD."},
{id:"l10",num:10,title:"Secret Societies, Oaths and False Religions",tag:"Break every vow made outside of Christ",icon:"lock",
 intro:"Derek Prince taught believers to \"renounce all contact with the occult of secret societies, by yourself or your ancestors.\" Neil T. Anderson's list includes groups that require \"secret initiations, ceremonies or covenants.\"",
 introSrc:"r209",
 scripture:["Matthew 5:34-37","James 5:12","John 18:20","Ephesians 5:11-12","Galatians 1:8-9","2 Corinthians 11:13-15"],
 key:"Jesus said, \"in secret have I said nothing.\" Oaths and initiations made in darkness must be renounced in the light.",
 levels:{simple:"Some clubs make people promise secret things. Jesus says do not swear. Tell God you take back those promises.",teen:"If a family member was in a lodge, a secret order, or a group with oaths, you can renounce its influence over your life.",adult:"Matthew 5:34 — \"Swear not at all.\" James 5:12 repeats it \"lest ye fall into condemnation.\" Renounce every oath, title, degree and rite by name.",deep:"Galatians 1:8-9 pronounces a curse on any other gospel, even from \"an angel from heaven.\" Groups that teach salvation by works, new revelation that replaces Scripture, or a different Jesus fall under this warning."},
 check:{q:"What did Jesus say in Matthew 5:34 about oaths?",opts:["Swear by heaven only","Swear not at all","Swear in secret","Swear once a year"],ans:1,why:"\"But I say unto you, Swear not at all.\""},
 apply:"Did you or anyone in your family line take oaths in a lodge or secret group?",
 prayer:"Lord, I renounce every oath, vow, initiation and covenant made by me or my ancestors in any secret society or false religion. I belong to Jesus Christ alone.",
 decl:"Let my yea be yea, and my nay, nay. I am bound by no oath but my covenant with Christ."},
{id:"l11",num:11,title:"Family Lines and Curses",tag:"Christ hath redeemed us from the curse",icon:"tree",
 intro:"Derek Prince said, \"The basic root cause of curses is occult involvement,\" and taught that family involvement can affect later generations (Exodus 20:5). The remedy is confession, repentance and the cross.",
 introSrc:"s80",
 scripture:["Exodus 20:5-6","Leviticus 26:40-42","Proverbs 28:13","Galatians 3:13-14","Deuteronomy 7:25-26","Colossians 1:13-14","Revelation 12:11"],
 key:"Jesus was made a curse for us so that the blessing of Abraham might come on us (Galatians 3:13-14).",
 levels:{simple:"Sometimes trouble comes from what grandparents did. Jesus can break it.",teen:"You are not guilty for your ancestors' sins, but you can confess them and stand free in Christ.",adult:"Leviticus 26:40 — \"If they shall confess their iniquity, and the iniquity of their fathers...\" then God remembers His covenant. Confess, repent, renounce, resist.",deep:"Derek Prince taught four steps: recognize, repent, renounce and resist. The legal basis for release is Galatians 3:13 — the exchange at the cross."},
 check:{q:"Galatians 3:13 says Christ hath redeemed us from what?",opts:["From work","From the curse of the law","From history","From family"],ans:1,why:"\"Christ hath redeemed us from the curse of the law, being made a curse for us.\""},
 apply:"Write any occult or false-religion involvement you know of in your family line.",
 prayer:"Father, I confess my iniquity and the iniquity of my fathers. Thank You that Christ was made a curse for me. I receive the blessing in His name.",
 decl:"Christ hath redeemed me from the curse. The blessing of Abraham is mine through Jesus Christ."}
];
S.lessons=S.lessons.concat(NEW);
const extraPrayer=[
 {t:"Renouncing the Spirit of Antichrist",lines:["I confess that Jesus Christ is come in the flesh.","I confess that Jesus is the Christ, the Son of the living God.","I renounce every teacher, program and spirit that denied the Father and the Son.","I renounce every teaching that made Jesus only a master, a prophet, or an ascended being."]},
 {t:"Renouncing the Occult",lines:["I renounce divination, astrology and every kind of fortune-telling.","I renounce every medium, psychic, channel and familiar spirit I consulted.","I renounce witchcraft, sorcery, spells, charms and enchantments.","I renounce every attempt to speak with the dead.","I renounce every game, app and object I used to contact spirits."]},
 {t:"Renouncing Other Gods",lines:["I renounce every other god I bowed to, chanted to, or honoured.","I renounce every mantra, every idol and every offering to the gods of the nations.","I renounce reincarnation and karma. It is appointed unto men once to die, and after this the judgment.","I renounce yoga, Eastern meditation and every practice that opened my mind to other spirits.","There is none other name under heaven given among men, whereby we must be saved, but the name of Jesus."]},
 {t:"Renouncing Secret Oaths and False Religions",lines:["I renounce every oath, vow, degree and initiation in any secret society, by me or by my ancestors.","I renounce every covenant made in darkness.","I renounce every false religion and every other gospel.","Let my yea be yea, and my nay, nay. I am bound only by my covenant with Jesus Christ."]},
 {t:"Breaking Family-Line Curses",lines:["Father, I confess my iniquity and the iniquity of my fathers.","I renounce every occult practice and false worship in my family line, on my father's side and my mother's side.","Christ hath redeemed me from the curse of the law, being made a curse for me.","I receive the blessing of Abraham through Jesus Christ."]}
];
const di=S.deliverance.findIndex(d=>d.t==="Breaking Ties");
S.deliverance.splice(di,0,...extraPrayer);

S.sources.s25={n:"Derek Prince — How to Expel the Enemy",u:"https://www.derekprince.com/sermons/25"};

// ---------- Inventory ----------
const G=(window.GAIA||[]).map(x=>x[1]);
S.checklist=[
 {g:"Gaia programs I watched",src:"gaia",search:true,items:G.concat(["The Monroe Institute Experience","Gaia yoga classes","Gaia guided meditations"])},
 {g:"Atlantis, star beings and \"higher gods\"",items:["Matias De Stefano teachings","Atlantis, Lemuria or Mu as a spiritual past","Belief that I lived in Atlantis or on another star","Belief that I am a god or divine","\"God is in my DNA or blood\" teachings","Arcturians","Pleiadians","Sirians","Orion beings","Anunnaki / Aasir","\"Sofia\" / Sophia as a divine being","Starseed or \"star family\" identity","Ascended masters and light-beings","Bashar or other channelled extraterrestrials","Ancient-aliens / ancient-astronaut teachings","Sun, moon, star or Earth worship","\"Mother Earth\" / Gaia worship"]},
 {g:"Occult practices (Neil T. Anderson's inventory)",src:"na",items:["Astral-projection","Ouija board","Table or body lifting","Dungeons and Dragons","Speaking in trance","Automatic writing","Magic Eight Ball","Telepathy","Using spells or curses","Seance","Materialization","Clairvoyance","Spirit guides","Fortune-telling","Tarot cards","Palm reading","Astrology","Rod/pendulum (dousing)","Self-hypnosis","Mind swapping","Black and white magic","New Age medicine","Blood pacts","Self Mutilation","Fetishism","Object worship","Crystals, charms","Incubi and succubus"]},
 {g:"Occult practices named by Derek Prince",src:"s86",items:["ESP","Mediums","Meditation (Eastern or emptying the mind)","Reincarnation teaching","Horoscopes","Hypnosis","Grapho-analysis / handwriting analysis","Reading books about Edgar Cayce or Jeane Dixon","Charms, images and relics of superstition","Horseshoes and lucky charms","Science fiction and \"the whole realm of the spooky\""]},
 {g:"Other divination and spirit contact",items:["Akashic record readings (received or given)","Psychic readings or psychic hotlines","Channeling or channelled messages","Angel cards or oracle cards","Numerology","I Ching","Runes","Tea-leaf or coffee-ground reading","Crystal ball gazing","Remote viewing","Bloody Mary or other spirit games","Calling on the dead or ancestors","Dream interpretation from psychics or New Age sources","Lucid dreaming or out-of-body practice","Past-life regression","Near-death or \"other side\" spirit teachings","Ghost hunting and spirit boxes"]},
 {g:"Witchcraft, sorcery and magic",items:["Witchcraft or Wicca","Spell videos, spell books or \"WitchTok\"","Love spells or potions","Sigils and chaos magic","Voodoo / Vodou","Santería","Obeah","Juju","Root work or hoodoo","Necromancy","Satanism","Luciferianism","Kabbalah used for mystical power","Alchemy and Hermetic teaching","Evil-eye charms and amulets","Talismans and protection charms","Smudging to cleanse spirits"]},
 {g:"New Age and energy practices",items:["New Age movement","Reiki or Reiki attunements","Energy healing","Chakra activation or balancing","Kundalini awakening","Third-eye activation","Law of attraction / manifestation","Human Design","Gene Keys","Sacred geometry and Flower of Life","Sound baths and singing bowls for spiritual energy","Crystal healing","Ascension and \"light body\" activation","Psychedelic or plant-medicine ceremonies (ayahuasca, psilocybin)","Shamanism and spirit animals","Sweat lodge or vision quest","Silva Mind Control","The Forum (EST)","Science of the Mind"]},
 {g:"Eastern religions and practices",items:["Hinduism (worship of Hindu deities)","Buddhism","Tibetan Buddhism","Zen","Taoism","Jainism","Shinto","Hare Krishna","Transcendental Meditation","Yoga","Mantra chanting or \"Om\"","Mindfulness rooted in Buddhist meditation","Vipassana retreats","Tai chi or qigong for spiritual energy","Ayurveda as a spiritual system","Feng shui","Falun Gong","Teachings of Ram Dass","Osho / Rajneesh","Sai Baba","Self-Realization Fellowship (Yogananda)","Eckankar","Religion of martial arts","Buddha statues, Hindu idols or prayer flags","Japa or mala beads for mantras","Guru initiation or a received mantra"]},
 {g:"False religions and cults (Anderson and Prince)",src:"na",items:["Christian Science","Unity Church","The Way International","Unification Church","Mormonism","Church of the Living Word","Jehovah's Witnesses","Children Of God","Church of New Jerusalem","Spirit worship","Bahaism","Rosicrucianism","Roy Masters","Father Divine","Theosophical Society","Islam","Black Muslim (Nation of Islam)","Humanism","Scientology","Gnosticism","All religions that teach salvation by works"]},
 {g:"Secret societies and oaths",src:"r209",items:["Freemasonry (Masons)","Order of the Eastern Star","Shriners","DeMolay","Job's Daughters or Rainbow Girls","Other lodges or secret orders","Knights Templar orders","Secret oaths, vows or blood oaths","Initiations or degrees","Masonic rings, aprons or regalia in my home"]},
 {g:"Objects in my home",src:"r34",items:["Occult or New Age books","Tarot or oracle decks","Ouija board","Horoscope books or apps","Crystals or crystal grids","Dreamcatchers","Statues of other gods","Incense or candles used for spirits","Flower of Life or sacred-geometry art","Amulets, charms or fetishes","Recorded meditations or hypnosis audio","Saved videos, playlists or subscriptions"]},
 {g:"Vows, covenants and dedications",src:"na",items:["A vow, covenant or pact with any person or group other than God","A dedication to another god or spirit","Satanic ritual worship in any form","A spirit marriage or spirit spouse","Being hypnotized","Attending a New Age or parapsychology seminar","Consulting a medium, spiritist or channeler","An imaginary friend or spirit guide offering guidance"]}
];


// ---------- Added groups (appended to keep saved ticks stable) ----------
Object.assign(S.sources,{
 criOprah:{n:"Christian Research Institute — Kate Maver, \"Oprah Winfrey and Her Self-Help Saviors: Making the New Age Normal\"",u:"https://www.equip.org/articles/oprah-winfrey-and-her-self-help-saviors/"},
 probeOprah:{n:"Probe Ministries — \"Oprah: America's Beloved False Teacher\"",u:"https://probe.org/oprah-americas-beloved-false-teacher/"},
 watchSecret:{n:"Watchman Fellowship — The Secret profile",u:"https://www.watchman.org/profiles/pdf/secretprofile.pdf"},
 watchVP:{n:"Watchman Fellowship — James Van Praagh profile",u:"https://www.watchman.org/profiles/pdf/vanpraaghprofile.pdf"},
 bpOprah:{n:"Baptist Press — \"Oprah's 'Jesus'\"",u:"https://www.baptistpress.com/resource-library/news/oprahs-jesus/"},
 criTolle:{n:"Christian Research Institute — \"Paradise Still Lost in Eckhart Tolle's A New Earth\"",u:"https://www.equip.org/articles/paradise-still-lost-in-eckhart-tolles-a-new-earth/"},
 wolOprah:{n:"Way of Life Literature — \"Oprah Winfrey, The New Age High Priestess\"",u:"https://www.wayoflife.org/reports/oprah_winfrey_new_age_priestess.html"},
 probeDead:{n:"Probe Ministries — \"Communicating with the Dead\"",u:"https://probe.org/communicating-with-the-dead/"}
});
S.checklist.push(
 {g:"Channelled teachings and \"spirit\" books",src:"bpOprah",items:["A Course in Miracles (said to be dictated by an \"inner voice\")","Abraham-Hicks / Esther Hicks (\"Abraham\" spirits)","Ramtha (JZ Knight)","The Seth Material (Jane Roberts)","Kryon","The Law of One / Ra Material","Conversations with God (Neale Donald Walsch)","Channelled \"Jesus\" or \"Christ-consciousness\" messages","Channelled angel or archangel messages","Messages from \"the Pleiadians\" or other star channels","Receiving messages through my own \"inner voice\" or higher self","Teaching others to channel"]},
 {g:"Oprah Winfrey programs: self as god and mediums",src:"criOprah",items:["The Secret (Rhonda Byrne) episodes on The Oprah Winfrey Show (2007)","Law of attraction and \"thoughts become things\"","Esther Hicks channelling \"Abraham\" on Oprah & Friends radio (2007)","A Course in Miracles year-long lessons with Marianne Williamson on Oprah & Friends radio (2008)","A Return to Love (Marianne Williamson)","A New Earth online class with Eckhart Tolle (2008)","The Power of Now (Eckhart Tolle)","Super Soul Sunday (OWN)","SuperSoul Conversations podcast","Oprah's Lifeclass","Oprah and Deepak Chopra 21-Day Meditation Experiences","The Seat of the Soul (Gary Zukav)","Iyanla Vanzant spiritual teachings","Caroline Myss teachings (Anatomy of the Spirit, chakras)","Shirley MacLaine and reincarnation interviews","Raymond Moody and contact with the dead","Psychic medium John Edward on Oprah","Psychic medium James Van Praagh on Oprah","Psychic medium Lisa Williams on Oprah","\"Remembering Your Spirit\" segments","\"There are many paths to God\" teaching","\"God is within me\" / higher-self teaching","\"Christ-consciousness\" in place of Jesus Christ","Oprah's Book Club New Age selections","Oprah.com \"Spirit\" articles and tools"]},
 {g:"TV psychic and medium shows",src:"probeDead",items:["Crossing Over with John Edward","Beyond with James Van Praagh","Long Island Medium","Hollywood Medium with Tyler Henry","Psychic Kids","Medium (TV drama)","Ghost Whisperer","Psychic readings on talk shows (Dr. Phil, Dr. Oz, The View)","Psychic hotline infomercials","Ghost-hunting and paranormal reality shows","Witch and occult-themed series watched for spiritual \"inspiration\"","YouTube and TikTok psychics, tarot readers and mediums"]},
 {g:"Shamanism, spiritism and traditional spirit worship",items:["Shamanic journeys and drumming journeys","Medicine men and the medicine wheel","Totems and spirit animals","Witch doctors and native doctors","Ancestral shrines","Pouring libations to the ancestors","River, sea and family gods","Marine spirits and water spirits","Orisha / Ifá worship","Candomblé","Umbanda","Palo Mayombe","Espiritismo (spiritism)","Curanderismo","Brujería","Herbal baths and spiritual washes from a spiritist","Incisions, tribal marks or protective cuts","Spiritual rings, powders, oils or soaps from a spiritist","Fetish priests and priestesses","Dedication to a family or village deity"]}
);
const extra2={t:"Renouncing Self-Worship, Channeling and Mediums",lines:["I renounce the lie that I am my own god, or that God is only my higher self.","I renounce \"many paths to God.\" Jesus said, I am the way, the truth, and the life: no man cometh unto the Father, but by me.","I renounce every channelled book, voice and teaching, and every spirit that spoke through them.","I renounce every medium and psychic I watched, consulted, or believed, on television or in person.","I renounce every shrine, libation, totem and traditional spirit, and every dedication made over my family."]};
const di2=S.deliverance.findIndex(d=>d.t==="Breaking Family-Line Curses");S.deliverance.splice(di2,0,extra2);


S.sources.britAfr={n:"Encyclopaedia Britannica — African religions",u:"https://www.britannica.com/topic/African-religions"};
S.checklist.push({g:"African traditional spiritual practices",src:"britAfr",items:[
 "Consulting a traditional or shrine priest (okomfo)",
 "Akan shrines and lesser gods (abosom)",
 "Asking a shrine or god for protection, children, money or a spouse",
 "Trokosi or ritual servitude to a shrine",
 "Swearing an oath by a god or shrine",
 "Invoking a curse on someone through a shrine",
 "Drinking a ritual concoction or oath-taking drink",
 "Ritual sacrifice of fowls, goats, sheep or cattle",
 "Blood sacrifice for blessing or protection",
 "Ancestral stools and stool rites",
 "Rituals to gods at traditional festivals",
 "Libation or spirit rites at an outdooring (naming) ceremony",
 "Funeral rites to send off or appease the spirit of the dead",
 "Widowhood rites involving the spirit of the dead",
 "Burying the placenta or umbilical cord with spiritual rites",
 "Akuaba dolls or carvings for fertility",
 "Twin rituals and twin carvings (Ibeji)",
 "Ogbanje or abiku (spirit-child) rituals",
 "Worship of named orishas (Sango, Ogun, Osun, Esu, Yemoja)",
 "Babalawo (Ifá priest) consultations",
 "Ori (head) rituals",
 "Egungun masquerade rites",
 "Masquerade societies (Mmanwu, Ekpe and others)",
 "Ogboni society",
 "Poro or Sande societies",
 "Dibia (Igbo native doctor) consultations",
 "Ikenga or Ofo shrines",
 "Osu dedication of a person to a deity",
 "Spirit possession trance or being \"mounted\" by a spirit",
 "Mami Wata worship",
 "Spiritual cleansing at a river, sea or crossroads",
 "Offerings at crossroads, trees, rivers or rocks",
 "Sacred trees, groves or rocks",
 "Rainmaker rituals",
 "Sangoma or inyanga consultations",
 "Throwing bones for divination",
 "Muthi (muti) for protection, luck or harm",
 "Ukuthwasa (initiation as a traditional healer) or an \"ancestral calling\"",
 "Mganga (East African witch doctor) consultations",
 "Zar spirit-possession ceremonies",
 "Nkisi or nkondi power figures",
 "Bwiti and iboga ceremonies",
 "Marabout or mallam charms, talismans and gris-gris",
 "Waist beads or strings worn for spiritual protection or attraction",
 "Love charms to bind a spouse",
 "Charms for court cases, business, exams or travel",
 "Sakawa or money rituals for wealth",
 "\"Blood money\" or ritual wealth practices",
 "Spiritual rites at enstoolment, enskinment or chieftaincy",
 "Healers or \"prophets\" who prescribe candles, perfumes, sand or charms for protection"
]});
S.deliverance.splice(S.deliverance.findIndex(d=>d.t==="Breaking Family-Line Curses"),0,{t:"Renouncing African Traditional Spirits",lines:[
 "I renounce every shrine, small god and ancestral spirit that my family or I served.",
 "I renounce every sacrifice of blood, every libation and every offering made for me or over me.",
 "I renounce every oath sworn by a god or shrine, and every curse invoked through them.",
 "I renounce every charm, talisman, waist bead, ring, powder and concoction given to me for protection, love or money.",
 "I renounce every masquerade, secret society and initiation of my family and my village.",
 "I renounce every dedication of my name, my womb, my children and my destiny to any god.",
 "They sacrificed unto devils, not to God; to gods whom they knew not. But I belong to the LORD Jesus Christ."
]});

// Kingdom of Darkness / Light (Neil T. Anderson)
S.kingdom=[
 ["I renounce ever signing my name over to Satan or having had my name signed over to Satan.","I announce that my name is now written in the Lamb's Book of Life."],
 ["I renounce any ceremony where I might have been wed to Satan.","I announce that I am a child of God and a member and part of the body of Christ."],
 ["I renounce any and all covenants that I made with Satan.","I announce that I am a partaker of the New Covenant with Christ."],
 ["I renounce all satanic assignments for my life, including duties, marriage and children.","I announce and commit myself to know and do only the will of God and accept only His guidance."],
 ["I renounce all spirit guides assigned to me.","I announce and accept only the leading of the Holy Spirit."],
 ["I renounce ever giving of my blood in the service of Satan.","I trust only in the shed blood of my Lord Jesus Christ."],
 ["I renounce ever eating of flesh or drinking of blood for satanic worship.","By faith I take Holy Communion which represents the body and the blood of the Lord Jesus Christ."],
 ["I renounce any and all guardians and Satanist parents who were assigned to me.","I announce that God is my Father and the Holy Spirit is my Guardian by which I am sealed."],
 ["I renounce any baptism in blood or urine whereby I am identified with Satan.","I announce that I have been baptized into Christ Jesus and my identity is now in Christ."],
 ["I renounce any and all sacrifices that were made on my behalf by which Satan may claim ownership of me.","I announce that only the sacrifice of Christ has any hold on me. I belong to Him. I have been purchased by the blood of the Lamb."]
];

// Loved ones intercession — built on KJV Scriptures
S.loved={
 refs:["1 Timothy 2:1-4","2 Corinthians 4:3-6","2 Timothy 2:24-26","Acts 26:18","Luke 22:31-32","Colossians 1:9-13","Ephesians 1:17-18","Isaiah 49:24-25","Matthew 18:18-19","Ezekiel 22:30","Jude 1:22-23","James 5:19-20"],
 still:(n,list)=>[
  `Father, I stand in the gap for ${n}, as it is written in Ezekiel 22:30.`,
  `I make supplications, prayers and intercessions for ${n}, for You will have all men to be saved, and to come unto the knowledge of the truth.`,
  list?`I bring before You ${n}'s involvement in ${list}.`:"",
  `If the gospel be hid from ${n}, it is hid by the god of this world, who hath blinded the minds of them which believe not. Lord, let the light of the glorious gospel of Christ shine unto ${n}.`,
  `Open ${n}'s eyes, and turn ${n} from darkness to light, and from the power of Satan unto God, that ${n} may receive forgiveness of sins.`,
  `God, give ${n} repentance to the acknowledging of the truth, that ${n} may recover out of the snare of the devil, who has taken ${n} captive at his will.`,
  `Lord, the captives of the mighty shall be taken away, and the prey of the terrible shall be delivered. Contend with them that contend with ${n}, and save ${n}'s children.`,
  `In the name of Jesus, what we bind on earth is bound in heaven, and what we loose on earth is loosed in heaven. I bind every spirit of deception over ${n}, and I loose ${n} to hear the truth.`,
  `Lord Jesus, as You prayed for Peter, I pray for ${n}: that ${n}'s faith fail not.`,
  `Send labourers to ${n} with gentleness and meekness. Pull ${n} out of the fire, in Jesus' name. Amen.`
 ].filter(Boolean),
 past:(n,list)=>[
  `Father, I thank You for ${n}. I lift ${n} up before You, as it is written in 1 Timothy 2:1.`,
  list?`${n} was involved in ${list}. I ask You to heal every wound and close every door that was opened.`:"",
  `You have delivered ${n} from the power of darkness, and translated ${n} into the kingdom of Your dear Son, in whom we have redemption through His blood, even the forgiveness of sins.`,
  `Fill ${n} with the knowledge of Your will in all wisdom and spiritual understanding, that ${n} might walk worthy of the Lord unto all pleasing.`,
  `Give unto ${n} the spirit of wisdom and revelation in the knowledge of Jesus, and enlighten the eyes of ${n}'s understanding.`,
  `Strengthen ${n} with all might, according to Your glorious power. Let ${n}'s faith fail not.`,
  `Guard ${n}'s mind against every return of deception. In Jesus' name. Amen.`
 ].filter(Boolean)
};

S.declarations=S.declarations.concat([
 "Jesus Christ is come in the flesh. He is the Son of God, and I confess Him as Lord.",
 "I will not seek familiar spirits, fortune-tellers or mediums. I seek the Lord my God.",
 "Every other god is an idol. The LORD made the heavens.",
 "I am bound by no oath, vow or initiation but my covenant with Jesus Christ.",
 "Christ hath redeemed me from the curse, being made a curse for me.",
 "I overcome by the blood of the Lamb and by the word of my testimony.",
 "As for me and my house, we will serve the LORD."
]);
S.flashcards=S.flashcards.concat([
 {f:"What is the test of every spirit in 1 John 4:2?",b:"Whether it confesses that Jesus Christ is come in the flesh."},
 {f:"Who is antichrist, according to 1 John 2:22?",b:"He that denieth the Father and the Son."},
 {f:"Name the four steps Derek Prince taught.",b:"Recognize, repent, renounce, resist."},
 {f:"Neil T. Anderson's renunciation prayer begins…",b:"\"Lord, I confess that I have participated in ___, and I renounce ___.\""},
 {f:"What did the girl in Acts 16 have?",b:"A spirit of divination."},
 {f:"What did Jesus say about oaths (Matthew 5:34)?",b:"\"Swear not at all.\""},
 {f:"Acts 4:12 — how many names bring salvation?",b:"One. \"None other name under heaven.\""},
 {f:"Galatians 3:13 — what did Christ become for us?",b:"A curse, to redeem us from the curse of the law."}
]);
S.quiz=S.quiz.concat([
 {q:"Which verse lists divination, observer of times, enchanter, witch, charmer, consulter with familiar spirits, wizard and necromancer?",o:["Deuteronomy 18:10-11","Psalm 23:1","John 3:16","Genesis 1:1"],a:0,w:"Deuteronomy 18:10-11 — Derek Prince called it \"a pretty comprehensive list.\""},
 {q:"Derek Prince said the New Age is…",o:["A new revelation","A kind of catalog of the occult","Harmless","A Christian movement"],a:1,w:"\"The New Age is a kind of catalog of the occult. It is not new.\""},
 {q:"Fill in Neil T. Anderson's prayer: \"Lord, I confess that I have participated in ___, and I ___ ___.\"",o:["forget it","renounce it","enjoy it","keep it"],a:1,w:"\"...and I renounce ___. Thank you that in Christ I am forgiven.\""},
 {q:"Matthew 6:7 warns against…",o:["Praying at all","Vain repetitions, as the heathen do","Reading Scripture","Fasting"],a:1,w:"\"But when ye pray, use not vain repetitions, as the heathen do.\""}
]);
S.discussion=S.discussion.concat(["Which Gaia programs or practices were most common in our family or circle?","Who are we standing in the gap for, and what Scripture will we pray over them this week?"]);
S.glossary=S.glossary.concat([
 {w:"Antichrist",d:"Anyone or anything that denies the Father and the Son, or denies that Jesus Christ came in the flesh (1 John 2:22; 4:3)."},
 {w:"Divination",d:"Seeking hidden knowledge or the future through spirits, signs or tools."},
 {w:"Necromancer",d:"A person who seeks to speak with the dead (Deuteronomy 18:11)."},
 {w:"Mantra",d:"A word or sound repeated in Eastern meditation. Compare Matthew 6:7."},
 {w:"Reiki",d:"A Japanese energy-healing practice that uses \"attunements\" from a master."},
 {w:"Stand in the gap",d:"To pray on behalf of someone else (Ezekiel 22:30)."}
]);
})();
