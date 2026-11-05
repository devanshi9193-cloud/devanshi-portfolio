const RESUME="https://drive.google.com/file/d/1Kz1SUTlPRnIHAFQyjetjlW_0Zu9djsOA/view?usp=sharing";
const EMAIL="devanshi9193@gmail.com";

/* Project thumbnails (from the previous portfolio) */
const THUMB_RUNWAY="assets/images/thumb-runway.jpg";
const THUMB_TOP_BRASS="assets/images/thumb-top-brass.jpg";
const THUMB_VERITAS_RESEARCH="assets/images/thumb-veritas-research.jpg";
const THUMB_NAVSTAR="assets/images/thumb-navstar.jpg";
const THUMB_VAULT="assets/images/thumb-vault.jpg";
const THUMB_AWB="assets/images/thumb-awb.jpg";
const PROJECTS=[
 {img:THUMB_RUNWAY,name:"Runway",line:"Research synthesis to final UI.",kind:"web",bg:"#e4ebe0",ac:"#7f9b7a",url:"https://www.figma.com/proto/shbnTI7CjzTks3PYA5WuaC/Case-Study?node-id=18-26103&viewport=-30%2C265%2C0.26&t=p9tf1Bqnwc6Unyb0-1&scaling=scale-down-width&content-scaling=fixed&page-id=17%3A423",featured:true},
 {img:THUMB_TOP_BRASS,name:"Top Brass",line:"A clear, confident product experience.",kind:"mobile",bg:"#f3e9dc",ac:"#c99b6d",url:"https://www.figma.com/proto/shbnTI7CjzTks3PYA5WuaC/Case-Study---Top-Brass?node-id=8-1038&viewport=275%2C283%2C0.04&t=R0ETUvIOAq97g7IW-1&scaling=min-zoom&content-scaling=fixed&page-id=8%3A178",featured:true},
 {img:THUMB_VERITAS_RESEARCH,name:"Veritas Research",line:"Dense research data, made readable.",kind:"dash",bg:"#ece8f6",ac:"#8f80c9",url:"https://www.figma.com/proto/KfNsoV9MnCYPkGO8w3L33U/Veritas-Research?node-id=877-200656&viewport=660%2C426%2C0.04&t=I2jSdbvsvdfr9XOs-1&scaling=scale-down-width&content-scaling=fixed&page-id=618%3A88314",featured:true},
 {img:THUMB_NAVSTAR,name:"Navstar",line:"An AI travel planner without the tab chaos.",kind:"mobile",bg:"#e3eef2",ac:"#6f9db0",url:"https://www.figma.com/proto/ZFHkIu2gDVVyH2KSpL3Mvg/navstar--AI-travel-application?node-id=420-30775&viewport=304%2C472%2C0.15&t=NGlJmzCJWhhzdw1T-1&scaling=scale-down-width&content-scaling=fixed&page-id=264%3A155"},
 {img:THUMB_VAULT,name:"Vault",line:"Property management, simplified.",kind:"dash",bg:"#f4e4e0",ac:"#c98a7c",url:"https://www.figma.com/proto/xKqpw2nk5UkcsZUxn9nPmg/Vault--Manage-Property-Smartly?node-id=226-11606&viewport=-1033%2C-886%2C0.57&t=CW3L3rqSZ4wllqun-1&scaling=min-zoom&content-scaling=fixed&page-id=220%3A790"},
 {img:THUMB_AWB,name:"Approval Workflow Builder",line:"Complex approvals, set up in five calm steps.",kind:"flow",bg:"#e6ecf8",ac:"#4F75E8"}
];
/* Case study mockup images for the rotating cards (6 slots). */
/* Rotating mockups (built from Devanshi's Figma screens): Navstar, Runway, Vault, Veritas, Top Brass, Approval Workflow Builder */
/* About canvas: personal photos scattered around a draggable canvas.
   img:"" shows an empty "Your photo" slot. x/y = position in % of the canvas, w = width in px (desktop), r = tilt. */
const PHOTOS=[
 {img:"assets/images/life-night-out.jpg",note:"hi, it's me",x:6,y:9,w:180,r:-6,pos:"50% 30%"},
 {img:"assets/images/life-coffee-award.jpg",note:"officially can't function w/o coffee",x:13,y:55,w:170,r:5,pos:"45% 22%"},
 {img:"assets/images/life-cafe-view.jpg",note:"coffee with a view",x:22,y:27,w:155,r:-4,pos:"62% 50%"},
 {img:"assets/images/drawing-4.jpg",note:"pink skies only",x:40,y:7,w:150,r:-3},
 {img:"assets/images/life-laughing.jpg",note:"laughing at my own jokes",x:74,y:8,w:175,r:6,pos:"50% 35%"},
 {img:"assets/images/life-hills.jpg",note:"chasing clouds in the hills",x:79,y:52,w:175,r:-4,pos:"50% 62%"},
 {img:"assets/images/life-my-people.jpg",note:"my people",x:55,y:60,w:170,r:4,pos:"50% 40%"}
];
const POSTS=[
 {slug:"job-hunt-tracking",t:"The Job Hunt Has a Tracking Problem",cat:"Concept",d:"A smarter job hunt space to track applications, recruiter outreach, and follow-ups in one place.",tint:"#e4ebe0",body:[
  ["h","The problem"],
  ["p","This is a problem I personally experienced while being on a job hunt."],
  ["p","As I started applying to more and more opportunities, I noticed that the challenge wasn't just finding jobs or applying to them — it was keeping track of everything that happened afterwards."],
  ["p","Some applications went through LinkedIn or company career pages, while others happened through cold emails to recruiters and hiring managers. After a while, I found myself struggling to remember which companies I had contacted, which role I had applied for, who I had emailed, whether they had replied, and when I should follow up."],
  ["p","Like many job seekers, I ended up relying on spreadsheets, emails, and my own memory. But as the number of applications increased, this became difficult to manage and easy to lose track of."],
  ["p","That made me think:"],
  ["q","What if the job search itself could be tracked automatically?"],
  ["h","The solution"],
  ["p","I explored the idea of a job-hunt assistant that connects the entire application journey in one place."],
  ["p","Instead of manually entering every application, the product could connect with Gmail and recognize job-related emails — identifying the company, role, recruiter, and date automatically. Applications from job portals or company websites could also be added to the tracker."],
  ["p","The product could then help users:"],
  ["ul",["Track applications and cold outreach in one place","Detect duplicate applications or emails","Automatically identify recruiter responses","Move applications through stages such as Applied → Replied → Interview → Offer","Remind users when it's time to follow up","Draft personalised follow-up emails for approval","Show insights into which job-search methods are generating more responses"]],
  ["p","The idea isn't just to build another job tracker. It's about reducing the mental effort of managing a job search, so people can spend more time finding the right opportunities and less time remembering what they already did."]]},
 {slug:"blinkit-room",t:"What if Blinkit had a room for roommates?",cat:"Redesign",d:"A shared Blinkit space where flatmates can shop together and split the bill automatically.",tint:"#f3e9dc",body:[
  ["h","The problem"],
  ["p","Living with flatmates often means shared grocery orders, but the process isn't really shared."],
  ["p","Someone asks on WhatsApp, “Anyone wants anything from Blinkit?” Everyone replies at different times, one person places the order, and then comes the difficult part - figuring out who owes what."],
  ["p","The grocery order might take five minutes, but tracking everyone's items and settling the bill later can turn into another task altogether."],
  ["h","The solution"],
  ["p","What if Blinkit had a shared Room for people living together?"],
  ["p","A user could create a room for their flat, invite their flatmates, and start a shared order directly from the Blinkit homepage. Everyone could add their own items to the group bag, see what others are ordering, or simply respond with “I'm good.”"],
  ["p","Once the order is ready, Blinkit could automatically calculate each person's share based on the items they added. Instead of one person paying the entire bill and settling it later through Splitwise, everyone pays their own share at checkout."],
  ["q","One room. One order. One less thing to split later."]]},
 {slug:"good-vs-addictive-ux",t:"When Does Good UX Become Addictive UX?",cat:"Essay",d:"Exploring the fine line between creating helpful experiences and designing for addiction, engagement, and attention.",tint:"#ece8f6",body:[
  ["lead","Good UX is designed to help. Addictive UX is designed to keep you coming back. But where do we draw the line?"],
  ["p","Engagement is often treated as the definition of a successful product, but that's worth questioning: what are we actually designing for? More clicks, longer sessions, and frequent returns can look like signs of great UX, but engagement alone doesn't mean an experience is good for the user."],
  ["p","Good UX should make things easier, clearer, more accessible, and more meaningful. It should help users accomplish what they came to do while giving them a sense of control."],
  ["p","Addictive UX takes a different approach: it uses psychological triggers like endless scrolling, notifications, social validation, streaks, and FOMO to keep people coming back."],
  ["p","The line isn't always obvious. The same design pattern can build a healthy habit, or turn into something that keeps users engaged longer than they intended."],
  ["q","I don't think good UX should avoid engagement. I think it should earn it."],
  ["p","As designers, we have the ability to influence behavior through the experiences we create. That makes me believe we should look beyond “How do we make users stay?” and ask “Why should users want to stay?”"],
  ["p","If someone returns to a product because it genuinely helps them, solves a problem, or brings value to their life, that's meaningful engagement."],
  ["p","But if they return because they're afraid of missing something, breaking a streak, or simply because the product has been designed to capture their attention, I think it's worth questioning."],
  ["p","For me, good UX isn't about holding someone's attention for as long as possible. It's about respecting their attention while making every interaction worth it."],
  ["q","Engagement is a metric. Trust is a relationship. Good UX should protect both."]]},
 {slug:"feature-trap",t:"The Feature Trap",cat:"Essay",d:"More features don't always create more value. Sometimes, the best product experience comes from knowing what not to add.",tint:"#e3eef2",body:[
  ["h","When more becomes too much"],
  ["p","When a product starts growing, there's always something new to add. A user asks for something. A competitor launches something. A new trend appears. The team discovers another opportunity."],
  ["p","So we add. And then we add again. Eventually, a product can become a collection of features rather than a clear solution to a problem."],
  ["p","Think about a travel app. It might begin with a simple purpose: find places, plan a trip, build an itinerary. Then come AI recommendations, social sharing, saved posts, travel deals, weather alerts, currency conversion, packing lists, loyalty points, and more."],
  ["p","Individually, these features might be useful. But together, they can make the original task harder. The product can do more, while the user becomes less certain about what to do next."],
  ["p","That's the hidden cost of features. A feature isn't just another button. It introduces more choices, more states, more edge cases, and more cognitive load."],
  ["p","So before asking \"What should we add?\", I think we should ask: \"What problem are we actually solving?\" And then: \"Does solving it make the core experience better?\""],
  ["p","Not every user request needs to become a feature. Not every competitor feature needs to be copied. And not every good idea needs to make it into the product. Sometimes, the most useful answer is simply no."],
  ["h","The value of less"],
  ["p","Good product design isn't about giving users everything. It's about giving them what they need without making them work to find it."],
  ["p","There is a certain confidence in a product that knows what it doesn't need."],
  ["ul",["Removing an unnecessary step.","Simplifying a navigation.","Hiding an option until it's relevant.","Getting rid of a feature that creates more confusion than value."]],
  ["p","These decisions might not look impressive on a feature list, but they can make a much bigger difference to the actual experience."],
  ["q","Simplicity isn't the absence of functionality. It's the presence of clarity."],
  ["p","For me, the real measure of a feature isn't whether we can build it. It's whether the experience is better because it exists."],
  ["p","A product doesn't become more valuable simply because it can do more. It becomes more valuable when it helps users do what matters with less friction, less confusion, and more confidence."],
  ["p","As designers, we're often encouraged to think about what's next. But I think we should also be willing to look at what's already there and ask: Does this still need to exist?"],
  ["p","Sometimes, the best feature is the one we choose not to add. And sometimes, the best design decision is knowing what to leave out."]]}
];
const POSTMAP=Object.fromEntries(POSTS.map(p=>[p.slug,p]));
/* Testimonials: placeholders until the real quotes arrive. Edit name, role and quote. */
const TESTIMONIALS=[
 {name:"Paras Rawat",role:"Group Principal, Product Design · managed Devanshi",quote:"I would hire her again onto any team I run. When a brief changed midway, she simply adjusted and kept going, and if she needed a new skill, she learned it and came back with the work done.",initials:"PR",tint:"#D5EBF7"},
 {name:"Neel Suman Raj",role:"Lead Product Designer · mentor",quote:"On a research product with multiple personas and portals, she was open to feedback, picked things up quickly and grew more confident every month. Thoughtful, detail-minded and easy to collaborate with.",initials:"NR",tint:"#ece8f6"},
 {name:"Ayush Jaiswal",role:"Product Owner · same team",quote:"What stood out was her curiosity and commitment. She asks the right questions, takes feedback well and works to get better every day. Any team would be fortunate to have her.",initials:"AJ",tint:"#e3eef2"},
 {name:"Navin Sah",role:"Senior Product Designer, Jasper Colin",quote:"Her research background gives her an analytical edge in UX. On a complex research platform, she kept turning intricate workflows into intuitive designs.",initials:"NS",tint:"#f3e9dc"},
 {name:"Suraj Rawat",role:"Product Designer · same team",quote:"Creative, dedicated and always positive. Running a workshop together was a highlight; she brings meaningful ideas and a user-first approach to every project.",initials:"SR",tint:"#e4ebe0"},
 {name:"Pradyume Kumar",role:"Assistant Project Manager, Jasper Colin · managed Devanshi",quote:"Hard-working and really creative, and always on the lookout to help someone.",initials:"PK",tint:"#f4e4e0"}
];
const STEPS=[["Discover","Understand people, context and the real problem."],["Define","Shape priorities, flows and structure."],["Design","Wireframes, UI and systems that feel clear."],["Test & refine","Validate, iterate, hand off with care."]];
const WORDS=["RESEARCH","EMPATHY","DEFINE","SKETCH","WIREFRAME","PROTOTYPE","TEST","ITERATE","SIMPLIFY","DESIGN","LEARN","BUILD","THINK","LISTEN","REFINE","SHIP"];
/* Sketchbook: placeholder doodles; set img to a scan of each drawing to replace them. */
/* Real images (embedded) */
const IMG_PORTRAIT="assets/images/portrait.jpg";
const IMG_AVATAR="assets/images/avatar.jpg";
const IMG_DRAW1="assets/images/drawing-1.jpg";
const IMG_DRAW2="assets/images/drawing-2.jpg";
const IMG_DRAW3="assets/images/drawing-3.jpg";
const IMG_DRAW4="assets/images/drawing-4.jpg";
const IMG_DRAW5="assets/images/drawing-5.jpg";
/* Sketchbook wall: a wire grid with paintings, polaroids, quotes and charms pinned to it.
   t: d = painting, p = polaroid (img:"" shows an empty "Your photo" slot), q = quote card, c = charm, claw = hair clip.
   x/y/w = desktop position and width in % of the wall, r = tilt. m = [x,y,w] on phones, or null to hide it there. */
const WALL=[
 {t:"claw",x:84,y:-6.5,w:10,r:-14,m:[68,-2.4,22]},
 {t:"c",c:"star",x:3,y:2.5,w:6,r:5,m:[58,31,11]},
 {t:"d",img:IMG_DRAW2,x:11,y:10,w:10,r:-9,m:[74,29,22]},
 {t:"q",q:1,x:24,y:4,w:13,r:7,m:[10,25,40]},
 {t:"p",img:"assets/images/portrait.jpg",note:"hi, it's me",x:41,y:14,w:11,r:-6,m:[54,5,38]},
 {t:"d",img:IMG_DRAW1,x:54,y:3,w:13,r:10,m:[4,3,44]},
 {t:"c",c:"heart",x:70,y:2.5,w:5.5,r:-4,m:null},
 {t:"d",img:IMG_DRAW3,x:77,y:12,w:9.5,r:-8,m:[9,75,26]},
 {t:"p",img:"assets/images/life-dinner-mirror.jpg",note:"dressed up for dinner",x:2,y:52,w:11,r:-10,m:null},
 {t:"d",img:IMG_DRAW4,x:16,y:45,w:14,r:6,m:[50,49,42]},
 {t:"q",q:2,x:33,y:56,w:12,r:-7,m:[5,50,40]},
 {t:"p",img:"assets/images/life-tiny-mirror.jpg",note:"tiny mirror, big mood",x:48,y:44,w:11,r:9,m:null},
 {t:"d",img:IMG_DRAW5,x:62,y:40,w:14,r:-5,m:[40,73,40]},
 {t:"c",c:"tag",x:80,y:48,w:8,r:4,m:[84,72,13]},
 {t:"c",c:"cloud",x:91,y:40,w:5.5,r:-3,m:null}
];
const QUOTES={
 1:`<span class="gw-q-a">people<br>first,</span><span class="gw-q-b">pixels<br>next</span><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3 L23 16 L36 20 L23 24 L20 37 L17 24 L4 20 L17 16Z"/></svg>`,
 2:`<span class="gw-q-a">make it</span><span class="gw-q-b">simple.</span><span class="gw-q-a">make it</span><span class="gw-q-b">kind.</span>`
};
const PINS=["#AFC5E4","#FBE6B0","#F3C9D3","#FFFDF8"];
const PIN=c=>`<span class="gw-pin" aria-hidden="true"><svg viewBox="0 0 14 34"><rect x="1" y="1" width="12" height="32" rx="3" fill="${c}" stroke="#26334D" stroke-width="1.6"/><path d="M7 3v28" stroke="#26334D" stroke-width="1.1"/><circle cx="7" cy="13" r="2" fill="#fff" stroke="#26334D" stroke-width="1.1"/></svg></span>`;
const CHARMS={
 star:`<svg viewBox="0 0 60 170"><circle cx="30" cy="11" r="8" fill="none" stroke="#26334D" stroke-width="2.6"/><rect x="25" y="18" width="10" height="20" rx="5" fill="#E1EAF6" stroke="#26334D" stroke-width="1.8"/><path d="M30 38 V100" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="50" r="5" fill="#F3C9D3" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="63" r="6" fill="#fff" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="76" r="5" fill="#AFC5E4" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="89" r="4" fill="#fff" stroke="#26334D" stroke-width="1.6"/><path d="M30 99 L37.6 118 L58 119.5 L42.3 132.5 L47.6 152.5 L30 141.3 L12.4 152.5 L17.7 132.5 L2 119.5 L22.4 118Z" fill="#FBE6B0" stroke="#26334D" stroke-width="2" stroke-linejoin="round"/><circle cx="25" cy="127" r="1.8" fill="#26334D"/><circle cx="35" cy="127" r="1.8" fill="#26334D"/><path d="M26 133 Q30 137 34 133" fill="none" stroke="#26334D" stroke-width="1.6" stroke-linecap="round"/></svg>`,
 heart:`<svg viewBox="0 0 60 170"><circle cx="30" cy="11" r="8" fill="none" stroke="#26334D" stroke-width="2.6"/><rect x="25" y="18" width="10" height="20" rx="5" fill="#E1EAF6" stroke="#26334D" stroke-width="1.8"/><path d="M30 38 V100" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="50" r="5" fill="#fff" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="62" r="5" fill="#fff" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="74" r="5" fill="#fff" stroke="#26334D" stroke-width="1.6"/><path d="M22 92 L30 98 L38 92 L38 104 L30 98 L22 104Z" fill="#F3C9D3" stroke="#26334D" stroke-width="1.6" stroke-linejoin="round"/><path d="M30 156 C8 140 4 126 10 117 C16 108 26 110 30 119 C34 110 44 108 50 117 C56 126 52 140 30 156Z" fill="#AFC5E4" stroke="#26334D" stroke-width="2" stroke-linejoin="round"/><path d="M15 122 C16 118 19 116 22 117" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`,
 cloud:`<svg viewBox="0 0 60 150"><circle cx="30" cy="11" r="8" fill="none" stroke="#26334D" stroke-width="2.6"/><rect x="25" y="18" width="10" height="20" rx="5" fill="#E1EAF6" stroke="#26334D" stroke-width="1.8"/><path d="M30 38 V100" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="50" r="5" fill="#FBE6B0" stroke="#26334D" stroke-width="1.6"/><circle cx="30" cy="63" r="5" fill="#fff" stroke="#26334D" stroke-width="1.6"/><path d="M14 132 C5 132 4 119 13 117 C12 106 26 102 31 110 C36 101 51 105 49 117 C58 118 57 132 47 132Z" fill="#fff" stroke="#26334D" stroke-width="2" stroke-linejoin="round"/><circle cx="25" cy="123" r="1.6" fill="#26334D"/><circle cx="35" cy="123" r="1.6" fill="#26334D"/><path d="M27 127 Q30 130 33 127" fill="none" stroke="#26334D" stroke-width="1.5" stroke-linecap="round"/></svg>`,
 tag:`<svg viewBox="0 0 80 190"><circle cx="40" cy="11" r="8" fill="none" stroke="#26334D" stroke-width="2.6"/><rect x="31" y="18" width="18" height="50" rx="4" fill="#4A6FA5" stroke="#26334D" stroke-width="1.8"/><path d="M35 24 V62 M45 24 V62" stroke="#AFC5E4" stroke-width="1.2" stroke-dasharray="3 3"/><rect x="6" y="62" width="68" height="122" rx="14" fill="#26334D" stroke="#26334D" stroke-width="2"/><rect x="14" y="72" width="52" height="42" rx="7" fill="#E1EAF6"/><text x="40" y="99" text-anchor="middle" font-family="Caveat, cursive" font-size="17" fill="#26334D">devanshi</text><path d="M40 128 L43 142 L56 146 L43 150 L40 164 L37 150 L24 146 L37 142Z" fill="#FBE6B0"/></svg>`
};
const CLAW=`<svg viewBox="0 0 100 70" aria-hidden="true"><g fill="none" stroke-linecap="round">${[14,26,38,50,62,74,86].map((x,i)=>`<path d="M${x} 30 C${x-4} 42 ${x-2} 54 ${x+3} 64" stroke="#26334D" stroke-width="9"/><path d="M${x} 30 C${x-4} 42 ${x-2} 54 ${x+3} 64" stroke="#8FB0DE" stroke-width="5.4"/>`).join("")}</g><path d="M10 34 C14 8 86 8 90 34" fill="none" stroke="#26334D" stroke-width="12" stroke-linecap="round"/><path d="M10 34 C14 8 86 8 90 34" fill="none" stroke="#7FA3D8" stroke-width="8" stroke-linecap="round"/><rect x="6" y="26" width="88" height="12" rx="6" fill="#AFC5E4" stroke="#26334D" stroke-width="2"/><path d="M24 15 C34 10 46 9 56 10" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`;

function art(p){
  const a=p.ac, ink="#2b2c27"; let ui="";
  if(p.kind==="mobile"){
    const phone=(x,y,r,inner)=>`<g transform="translate(${x} ${y}) rotate(${r})"><rect width="170" height="340" rx="28" fill="#fff" stroke="#e3e1d9"/><rect x="62" y="12" width="46" height="8" rx="4" fill="#ecebe5"/>${inner}</g>`;
    ui=phone(160,50,-5,`<rect x="16" y="40" width="138" height="86" rx="14" fill="${a}" opacity=".85"/><rect x="16" y="140" width="90" height="10" rx="5" fill="${ink}" opacity=".8"/><rect x="16" y="158" width="120" height="8" rx="4" fill="${ink}" opacity=".25"/><rect x="16" y="184" width="138" height="48" rx="12" fill="#f2f1ec"/><rect x="16" y="240" width="138" height="48" rx="12" fill="#f2f1ec"/>`)+
       phone(320,70,5,`<circle cx="85" cy="100" r="44" fill="none" stroke="#efeee8" stroke-width="12"/><circle cx="85" cy="100" r="44" fill="none" stroke="${a}" stroke-width="12" stroke-dasharray="190 300" stroke-linecap="round"/><rect x="24" y="170" width="122" height="10" rx="5" fill="${ink}" opacity=".8"/><rect x="24" y="188" width="80" height="8" rx="4" fill="${ink}" opacity=".25"/><rect x="24" y="270" width="122" height="36" rx="18" fill="${ink}"/>`);
  }else if(p.kind==="flow"){
    const lvl=(y,t,who,c)=>`<rect x="252" y="${y}" width="190" height="64" rx="12" fill="#fff" stroke="#e3e1d9"/><rect x="266" y="${y+14}" width="74" height="9" rx="4.5" fill="${ink}" opacity=".75"/><rect x="266" y="${y+32}" width="${who}" height="18" rx="9" fill="${c}" opacity=".9"/><rect x="${266+who+8}" y="${y+32}" width="60" height="18" rx="9" fill="#f2f1ec"/>`;
    ui=`<rect x="60" y="40" width="520" height="340" rx="20" fill="#fff" stroke="#e3e1d9"/><rect x="61" y="41" width="150" height="338" rx="19" fill="#f7f6f2"/>${["Basics","Purpose","Roles","Rules","Review"].map((t,i)=>`<circle cx="86" cy="${80+i*36}" r="9" fill="${i<3?a:'#fff'}" stroke="${i<3?a:'#cfcdc4'}"/><rect x="104" y="${76+i*36}" width="${i===3?78:58}" height="8" rx="4" fill="${ink}" opacity="${i===3?.8:.25}"/>`).join("")}<rect x="232" y="62" width="150" height="12" rx="6" fill="${ink}" opacity=".85"/><rect x="232" y="82" width="210" height="8" rx="4" fill="${ink}" opacity=".22"/>${lvl(110,"L1",50,a)}<path d="M347 176 v18" stroke="#cfcdc4" stroke-width="2" stroke-dasharray="3 4"/>${lvl(196,"L2",70,"#28A879")}<rect x="252" y="278" width="190" height="34" rx="10" fill="none" stroke="#cfcdc4" stroke-dasharray="4 4"/><rect x="306" y="291" width="82" height="8" rx="4" fill="${ink}" opacity=".3"/><rect x="462" y="62" width="100" height="250" rx="14" fill="${p.bg}"/>${[0,1,2,3].map(i=>`<circle cx="512" cy="${96+i*54}" r="10" fill="${i===3?'#28A879':i===0?'#fff':a}" stroke="${i===0?a:'none'}" stroke-width="2"/>${i<3?`<path d="M512 ${108+i*54} v30" stroke="${a}" stroke-width="2" opacity=".5"/>`:""}`).join("")}<rect x="232" y="330" width="96" height="30" rx="15" fill="#f2f1ec"/><rect x="456" y="330" width="106" height="30" rx="15" fill="${ink}"/>`;
  }else if(p.kind==="dash"){
    const bars=[70,110,86,140,118,170,132].map((v,i)=>`<rect x="${238+i*44}" y="${350-v}" width="24" height="${v}" rx="6" fill="${a}" opacity="${i===5?1:.35}"/>`).join("");
    ui=`<rect x="60" y="40" width="520" height="340" rx="20" fill="#fff" stroke="#e3e1d9"/><rect x="61" y="41" width="140" height="338" rx="19" fill="#f7f6f2"/><rect x="82" y="66" width="70" height="10" rx="5" fill="${ink}" opacity=".8"/>${[100,124,148,172].map((y,i)=>`<rect x="82" y="${y}" width="${i===1?96:80}" height="8" rx="4" fill="${i===1?a:ink}" opacity="${i===1?1:.22}"/>`).join("")}<rect x="224" y="62" width="160" height="60" rx="12" fill="#f2f1ec"/><rect x="398" y="62" width="160" height="60" rx="12" fill="#f2f1ec"/><rect x="240" y="80" width="60" height="10" rx="5" fill="${ink}" opacity=".6"/><rect x="240" y="98" width="90" height="12" rx="6" fill="${a}"/><rect x="414" y="80" width="60" height="10" rx="5" fill="${ink}" opacity=".6"/><rect x="414" y="98" width="70" height="12" rx="6" fill="${ink}" opacity=".2"/>${bars}`;
  }else{
    ui=`<rect x="60" y="40" width="520" height="340" rx="20" fill="#fff" stroke="#e3e1d9"/><circle cx="86" cy="64" r="5" fill="#ecebe5"/><circle cx="102" cy="64" r="5" fill="#ecebe5"/><circle cx="118" cy="64" r="5" fill="#ecebe5"/><rect x="96" y="112" width="230" height="22" rx="6" fill="${ink}" opacity=".85"/><rect x="96" y="142" width="170" height="22" rx="6" fill="${a}"/><rect x="96" y="180" width="200" height="9" rx="4.5" fill="${ink}" opacity=".22"/><rect x="96" y="196" width="160" height="9" rx="4.5" fill="${ink}" opacity=".22"/><rect x="96" y="228" width="110" height="34" rx="17" fill="${ink}"/><rect x="356" y="100" width="190" height="200" rx="16" fill="${p.bg}"/><circle cx="451" cy="180" r="44" fill="${a}" opacity=".75"/><rect x="390" y="248" width="122" height="10" rx="5" fill="${ink}" opacity=".25"/><rect x="96" y="296" width="110" height="56" rx="12" fill="#f2f1ec"/><rect x="216" y="296" width="110" height="56" rx="12" fill="#f2f1ec"/>`;
  }
  return `<svg viewBox="0 0 640 400" role="img" aria-label="${p.name} interface preview">${ui}</svg>`;
}
const FD={heart:`<svg viewBox="0 0 40 40"><path d="M20 34 C6 24 4 16 8 11 C12 6 18 8 20 13 C22 8 28 6 32 11 C36 16 34 24 20 34Z" fill="#AFC5E4" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`,spark:`<svg viewBox="0 0 40 40"><path d="M20 3 L23 16 L36 20 L23 24 L20 37 L17 24 L4 20 L17 16Z" fill="#FBE6B0" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`,coffee:`<svg viewBox="0 0 40 40"><path d="M15 10 C13 8 17 6 15 3 M22 10 C20 8 24 6 22 3" fill="none" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><path d="M29 19 C35 19 35 28 29 28" fill="none" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><path d="M8 15 H30 V26 C30 32 26 36 20 36 H18 C12 36 8 32 8 26 Z" fill="#ebdcc9" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><ellipse cx="19" cy="15" rx="11" ry="2.6" fill="#7a4e3a" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`,pencil:`<svg viewBox="0 0 40 40"><g transform="rotate(-40 20 20)"><rect x="4" y="15.5" width="5" height="9" rx="1.5" fill="#d98e86" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><rect x="9" y="15.5" width="18" height="9" fill="#ebdcc9" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><path d="M27 15.5 L36 20 L27 24.5 Z" fill="#f3e6d6" stroke="#1f201c" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><path d="M32.5 18.25 L36 20 L32.5 21.75 Z" fill="#3b261c"/></g></svg>`};
const PORTRAIT=`<svg viewBox="0 0 300 300" aria-hidden="true"><rect width="300" height="300" fill="#e4ebe0"/><circle cx="235" cy="70" r="46" fill="#cdc4ea" opacity=".55"/><g fill="none" stroke="#1f201c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M88 300 C88 248 112 228 150 228 C188 228 212 248 212 300"/><path d="M104 132 C96 82 128 60 154 62 C190 64 204 100 196 146 C192 168 186 188 176 200"/><path d="M104 132 C100 162 112 188 142 202 C156 208 168 206 176 200"/><path d="M104 132 C126 122 156 102 168 80"/><path d="M126 150 Q131 145 136 150"/><path d="M158 150 Q163 145 168 150"/><path d="M146 162 C144 168 147 172 152 170"/><path d="M138 184 Q148 191 158 184"/><path d="M138 204 L136 228 M162 204 L164 228"/></g><circle cx="124" cy="170" r="7" fill="#f1c7ac"/><circle cx="172" cy="170" r="7" fill="#f1c7ac"/></svg>`;
const inlineSketch=s=>s.replace(/class="s"/g,'fill="none" stroke="#2b2a26" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"').replace(/class="t"/g,'opacity=".6"');
const slugOf=n=>n.toLowerCase().replace(/[^a-z]+/g,"-");
const IMGICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>';
const slot=(src,alt,hint="Cover image")=>src?`<img src="${src}" alt="${alt}" loading="lazy">`:`<div class="slot" role="img" aria-label="${alt}"><i>${IMGICON}${hint}</i></div>`;
const pcard=p=>`<a class="pcard reveal" href="#${slugOf(p.name)}"><div class="art">${slot(p.img,p.name+" cover")}</div><div class="meta"><h3>${p.name}</h3><span class="go" aria-hidden="true">↗</span></div></a>`;
const jcard=p=>`<a class="jcard reveal" href="#${p.slug}"><span class="label">${p.cat}</span><h3>${p.t}</h3><p class="jd">${p.d}</p><span class="go">Read · ${readTime(p)} min ↗</span></a>`;
const readTime=p=>Math.max(1,Math.round(p.body.map(b=>Array.isArray(b[1])?b[1].join(" "):b[1]).join(" ").split(/\s+/).length/200));
const tcard=t=>`<article class="tcard reveal" style="--tint:${t.tint}"><blockquote>“${t.quote}”</blockquote><div class="who"><span class="avatar">${t.initials}</span><div><b>${t.name}</b><span>${t.role}</span></div></div></article>`;
const head=(label,title,right)=>`<div class="sec-head"><div><span class="label tape-label">${label}</span><h2 class="h2">${title}<svg class="squiggle" viewBox="0 0 200 14" aria-hidden="true"><path d="M3 9 C30 2 45 13 70 7 S115 2 140 8 S180 12 197 5"/></svg></h2></div>${right?`<div class="sec-aside">${right}</div>`:""}</div>`;


/* ---------- case studies (copy taken from Devanshi's Figma case studies) ---------- */
const CASES={
"runway":{year:"2025",kicker:"Internal platform · Jasper Colin Research",title:"One place for", grey:"every workday.",
 intro:"An internal employee-management platform that brings attendance, leave, referrals and HR communications into one connected workspace.",
 meta:[["Company","Jasper Colin Research"],["Role","UI/UX Designer"],["Product","Employee-management platform"],["Scale","500+ employees"]],
 chips:["Attendance","Referral tracker","HR hub"],
 overview:["A broad HR platform had grown into a set of separate tasks.",`<span class="grey">The goal was to turn it into a connected daily workspace.</span>`],
 problem:{h:"Many employee needs. One coherent experience.",items:[["No clear starting point","A broad HR platform needs clear routes into both frequent and occasional tasks."],["Invisible request status","Referrals and leave requests needed visible progress, not just a submit button."],["Action and information mixed","Payroll, events and newsletters needed a home without competing with daily tasks."]]},
 blocks:[{type:"steps",side:["Opportunity","Orient, act, follow through."],items:[["Orient","A shared dashboard collects attendance, requests and updates in one starting point."],["Act","Focused task spaces keep forms and context close to the task."],["Follow through","Every submission links to a clear status and detail view."]]},
  {type:"tree",side:["Information architecture","One starting point. Clear paths from there."],root:"Employee dashboard",groups:[["Daily work",["Attendance","Leave management","Payroll access"]],["Requests & progress",["Employee referrals","Request history","Performance appraisal","Resignation requests"]],["Company information",["HR announcements","Events & newsletters"]]]}],
 process:[["Read the visual language","Keep the original login artwork and translate its depth, contrast and rounded controls."],["Organise around intent","Group daily work, requests and company info into legible task spaces."],["Connect states to details","Show submission status next to the record that created it."],["Adapt the story","Reflow dense views from desktop to mobile without losing hierarchy."]],
 decisions:{h:"Four spaces. One consistent shell.",items:[["Unified dashboard","A workday starts with orientation: daily status first, then requests and company news."],["Referral tracker","A referral is a journey, not a form. A timeline names, dates and orders each stage."],["HR communication hub","Newsletters, events and payroll live together without the noise."],["Everyday HR workflows","Leave balance before the form; attendance pairs check-in with a monthly calendar."]]},
 system:{colors:[["Canvas","#050505"],["Graphite","#1D1E25"],["Coral","#FF4558"],["Support","#B4B3C8"]],type:"Restrained sans-serif",note:"Original brand artwork reused, not redrawn. Coral is the primary action colour."},
 stats:[["500+","Employees in one workspace"],["25%","Less admin work for referral and leave requests"],["End-to-end","Referral progress, no chasing outside the platform"]],
 learnings:[["A shared shell scales","Early navigation, card and status conventions kept every task space consistent."],["Status is the product","What happens after submission matters as much as the submission."],["Brand restraint builds trust","Reusing the original artwork kept the visual language honest."]],
 quote:"Scope shapes structure more than style does."},

"top-brass":{year:"2025",kicker:"Enterprise SaaS · Research operations",title:"A unified report builder", grey:"for enterprise research.",
 intro:"How I simplified complex research workflows with one scalable reporting experience across many research methodologies.",
 meta:[["Role","UI/UX Designer"],["Timeline","6 months"],["Platform","Enterprise SaaS"],["Domain","Research & analytics"]],
 chips:["Fullscreen modal","Recent studies","Batch select"],
 overview:["The platform had grown.",`<span class="grey">The reporting experience hadn't.</span>`],
 problem:{h:"One mental model for very different research.",items:[["Many artifact types","Sessions, activities, responses, polls, recordings, clips and collections all needed a place in reports."],["Nested dialogs","Researchers clicked through layers of small popups before finding the data they needed."],["Different methods","The challenge was one mental model that works across fundamentally different research methods."]]},
 blocks:[{type:"converge",side:["The ecosystem","One report. Many sources."],from:["Survey","User interview","FGD","Diary study","Usability testing","Prototype test"],to:"One report"},
  {type:"compare",side:["Before & after","One modern modal, replacing many tiny popups."],old:["Small floating popup","Nested dialogs","Project-first navigation","Many clicks to add data"],nw:["Large fullscreen modal","Recent studies up front","Search and project filter","Dynamic data panel with batch selection"]}],
 process:[["Discovery","Mapped study types, artifacts and existing pain points."],["Data model","Unified fragmented data models into one structure."],["Interaction design","Designed the fullscreen modal and selection patterns."],["Edge cases","Empty states, mixed data types and very large studies."],["Developer collaboration","Paired on feasibility, tokens and component behaviour."],["Accessibility & UAT","Keyboard flows, focus, contrast, then validation with researchers."]],
 decisions:{h:"The rules behind every decision.",items:[["One mental model","Every study behaves differently behind the scenes but should feel familiar."],["Recognition over recall","Recent studies reduce navigation and help users continue where they left off."],["Consistent across methods","Different study types expose different data with one shared interaction pattern."],["Reduce interaction cost","Batch selection, fewer steps and contextual metadata."]]},
 learnings:[],
 quote:"The hardest part wasn't designing reports. It was designing a workflow flexible enough for every research method, and still predictable."},

"veritas-research":{year:"2026",kicker:"Market research & technology",title:"From research questions", grey:"to better decisions.",
 intro:"A clearer research experience that helps enterprise product and marketing teams discover, understand and choose the right research approach.",
 meta:[["Timeline","Sept 2025 – Jun 2026"],["Role","UX research, UX strategy, UI"],["Platform","Web platform"],["Industry","Market research"]],
 chips:["Decision-first","4 research modes","Dashboard"],
 overview:["Not every research buyer needs the same thing.",`<span class="grey">The interface had to answer: what kind of research do I actually need?</span>`],
 problem:{h:"Many approaches under one roof felt confusing.",items:[["Different needs","Some teams need weekly tracking, others deep strategy, fast answers or low-cost validation."],["Catalogue thinking","Listing everything side by side made the product feel like a catalogue."],["Hidden tradeoffs","Users needed to compare approaches and understand tradeoffs before committing."]]},
 blocks:[{type:"modes",side:["The solution","A decision-first research experience."],items:[["Tracker","Continuous monitoring of markets, customers and competitors.","Weekly data updates"],["Research","Deep strategic insight with custom cohorts and analytics.","Detailed report"],["Quick Research","Fast directional insight for urgent loops and copy tests.","24–72 hour turnaround"],["Omnibus","Shared-sample studies that split cost but keep targeting.","Cost-effective"]]}],
 process:[["Discover","Market and competitor analysis, user research."],["Define","Identify key issues and set clear design goals."],["Develop","Idea generation, wireframes and prototypes."],["Deliver","UI kit and refined UX/UI."]],
 decisions:{h:"Two screens that do the heavy lifting.",items:[["Main screen","Clear hierarchy and navigation help users discover research and pick an approach."],["Research modes","Each mode states its purpose, turnaround and output so tradeoffs are visible."],["Dashboard","A clear overview of research activity with quick access to every insight."],["Industry context","Research grouped by industry so teams find what is relevant faster."]]},
 system:{colors:[["Light grey","#F4F5F7"],["Blue","#2F37F5"],["Grey","#65676B"],["Black","#303237"],["White","#FFFFFF"]],type:"Inter",note:"Built for clean organisation and precise quantitative data, without extra ornament."},
 learnings:[],
 quote:"Research shouldn't feel like a catalogue. It should feel like a guided choice."},

"navstar":{year:"2026",kicker:"AI product · Travel",title:"Your trip starts", grey:"with a feeling.",
 intro:"An AI travel companion that understands how you want to travel before asking where, personalised from saved Reels, vibe and preferences.",
 meta:[["Role","Product Designer"],["Timeline","4 days"],["Platform","iOS mobile app"],["Tools","Figma · Claude"]],
 chips:["92% match","AI itinerary","Group trips"],
 overview:["The trip isn't the problem.",`<span class="grey">Planning it is. Travellers jump between 7+ apps for a single trip.</span>`],
 problem:{h:"Where the friction lives.",items:[["Destination uncertainty","People know the feeling they want, not the place."],["Decision overload","Hotels, transport and plans in a row cause analysis paralysis."],["Fragmented tools","Bouncing between apps just to finish one booking."],["Group coordination","Budgets, styles and dates rarely live in one place."],["Rigid itineraries","Plans are dry PDFs or too hard to change on the go."]]},
 blocks:[{type:"flow",side:["Key insight","Flip the first question."],lanes:[["Old way",["Destination","Search","Compare","Book","Plan","Coordinate"],false],["Navstar",["Understand","Recommend","Personalise","Generate","Experience"],true]],qOld:"“Where do you want to go?”",qNew:"“What kind of trip do you want?”"},
  {type:"persona",side:["Persona","Meet Pradyum."],initials:"PK",name:"Pradyum Kumar, 28 · Delhi",text:"Planning a 5-day mountain trip with 4 friends on ₹30,000 per person. He knows the kind of trip he wants but not where, where to stay, or what to do.",quote:"He knows the vibe, but hates the coordination."}],
 process:[["Discover","Travellers, planning habits and the decisions that make trips hard."],["Define","A focused problem statement and opportunity framework."],["Ideate","Simpler, collaborative ways to discover, book and plan."],["Design","A connected mobile interface, design system and AI journey."]],
 decisions:{h:"From blank trip to ready-to-live.",items:[["Preference-first onboarding","Trip type, travellers, interests, pace and budget before any destination."],["Matched destinations","Recommendations with a match score, budget per person and fit for trip length."],["AI itinerary","Uses saved Reels, budget and duration; tweak it by chatting."],["Live trip mode","Today's plan, completed places and auto check-ins while travelling."]]},
 learnings:[],
 quote:"Navstar makes travel planning feel less like a task and more like the start of the journey."},

"vault":{year:"2026",kicker:"Mobile · Property management",title:"Property health,", grey:"made simple.",
 intro:"A mobile property management experience for multi-property owners in India that turns scattered records into a clear view of property health.",
 meta:[["Role","UI/UX Designer"],["Timeline","3 days"],["Platform","Mobile app"],["Focus","IA, UX, design system"]],
 chips:["Healthy","Needs attention","At risk"],
 overview:["Users had the information, but not the context.",`<span class="grey">Vault shifts from document-first storage to property-first health.</span>`],
 problem:{h:"The challenge.",items:[["Fragmented information","Records were spread out with little context around them."],["Document-first thinking","Finding a document didn't tell owners if the property was okay."],["Hidden health","Important status information sat too deep in the experience."],["Issues without actions","Information without a next step created uncertainty."],["Many properties","Rich context had to stay calm across multiple properties."]]},
 blocks:[{type:"health",side:["Core direction","Property health as the home experience."],items:[["Healthy","#3F735F","Green Park Residence","Delhi · Apartment · checked today"],["Needs attention","#C58A32","Noida Heights","Tax receipt needs updating"],["At risk","#B85C5C","Family Land","EC verification is outdated"]]}],
 process:[["Understand","User context and the existing experience."],["Explore","Information architecture and product directions."],["Define","Property health as the core experience."],["Design","UI system and the core mobile experience."]],
 decisions:{h:"Principles that guided the solution.",items:[["Status before detail","Show overall property health the second the app opens."],["Context before complexity","Connect documents to their property, ownership and history."],["Explain before asking","When something is wrong, explain why it matters."],["Action over anxiety","Every issue routes to a clear, single-tap next step, with AI guidance."]]},
 system:{colors:[["Primary","#0064DD"],["Primary light","#E8F1FF"],["Healthy","#3F735F"],["Warning","#C58A32"],["Error","#B85C5C"],["Text","#18252B"]],type:"Inter",note:"Semantic colours show property and document states without relying on colour alone."},
 stats:[["6+","Key product experiences"],["3","Home concepts explored"],["1","Reusable design system"]],
 learnings:[],
 quote:"Vault isn't a digital filing cabinet. It's a property companion."},

"approval-workflow-builder":{year:"2026",kicker:"Design assignment · YoekiSoft",title:"A simpler way to configure", grey:"complex approval workflows.",
 intro:"A UX/UI assignment for YoekiSoft: a builder that lets an office admin decide who approves a visit, and in what order, without any technical knowledge.",
 meta:[["Role","UI/UX Designer"],["Timeline","5 days"],["Platform","Desktop web"],["Tools","Figma + AI assistance"]],
 chips:["Plain-language AND/OR","Live preview","Save Draft anywhere"],
 overview:["How might we make it obvious who approves, and when?",`<span class="grey">Rules that make sense to a non-developer, and workflows that are right the first time.</span>`],
 problem:{h:"Four friction points in today's approval setup.",items:[["Complex approval logic","AND/OR conditions and approval levels are hard to set up, and easy to get wrong."],["Missing context","Approvers may not understand what they are meant to verify."],["Delayed approvals","Busy or unavailable approvers can block time-sensitive visits."],["Workflow interruptions","Setup often waits on other teams, and closing the builder can lose work."]]},
 blocks:[{type:"persona",side:["Who it's for","Meet Priya."],initials:"PN",name:"Priya Nair, 34 · Office Administrator",text:"Runs the front office: visitor passes, meeting rooms and now visit approvals. Comfortable with email and Excel, but words like “condition” or “AND/OR” make her pause. She won't ask for help, so every screen has to explain itself. (A hypothetical persona, built from the brief and desk research.)",quote:"If I close this, will I lose everything?"},
  {type:"logic",side:["Approval logic","AND/OR is who. Levels are when."],levels:[["Level 01 · HR","Any one can approve",["HR Manager","HR Executive"],"or"],["Level 02 · Finance","Everyone must approve",["Finance Manager","Finance Lead"],"and"]]},
  {type:"options",side:["Ideation","Three directions, one chosen."],items:[["Separate pages","Six screens, easy to lose your place.",false],["One long form","Everything at once, hard to scan.",false],["Large multi-step modal","Five guided steps without leaving the dashboard.",true]]},
  {type:"insights",side:["Synthesis","Insights into decisions."],items:[["Who vs when gets confusing","Conditions live inside each level"],["Rules are invisible until something breaks","A live preview of the approval path"],["Setup gets interrupted","Save Draft on every step"],["People guess instead of asking","Plain words, and a Review step"]]}],
 process:[["Research","Desk review of Jotform, Kissflow, ServiceNow and monday.com."],["Ideate & flows","One main path, with safe exits along the way."],["Paper wireframes","Sketched by hand first to try ideas quickly."],["UI & prototype","High-fidelity screens, edge states and a clickable prototype."]],
 decisions:{h:"Five short steps in one focused modal.",items:[["Basics → Purpose → Roles → Rules → Review","The same modal shell for every step; only the middle changes."],["Plain-language cards","“Everyone must approve” and “Any one can approve” instead of a technical dropdown."],["Live workflow preview","Updates with every change and repeats on Review, so nothing is a surprise."],["Safe exits","Save Draft anywhere, a warning before closing, and errors pinned to the exact level."]]},
 system:{colors:[["Primary","#4F75E8"],["Ink","#202638"],["Muted","#7B8496"],["Tint","#EDF3FF"],["Success","#28A879"],["Error","#DC6B70"]],type:"Inter",note:"Contrast was checked as part of the work; a few low-contrast pairs are listed as fixes for the next pass."},
 stats:[["5","Days, solo"],["28","Screens and states designed"],["4","Usability tasks planned: build, predict, fix, resume"]],
 learnings:[["Plain words beat AND/OR","Cards that read like sentences did more than any logic control."],["Design the unhappy paths","Drafts, unsaved-change warnings and pinpointed errors matter as much as the main flow."],["Not tested yet","A short test plan is ready; next up are the approver side and templates."]],
 quote:"Next time, I'd talk to users on day one."}
};
const projBySlug=slug=>PROJECTS.find(p=>slugOf(p.name)===slug);
function caseBlock(b,p){
  const side=`<div class="side"><span class="label">${b.side[0]}</span><h2>${b.side[1]}</h2></div>`;
  let body="";
  if(b.type==="steps") body=`<div class="cs-steps" style="--acc:${p.ac}">${b.items.map(i=>`<div class="cs-step"><h3>${i[0]}</h3><p>${i[1]}</p></div>`).join("")}</div>`;
  if(b.type==="tree") body=`<div class="tree"><span class="root">${b.root}</span><div class="groups">${b.groups.map(g=>`<div class="g"><b>${g[0]}</b>${g[1].map(x=>`<span>${x}</span>`).join("")}</div>`).join("")}</div></div>`;
  if(b.type==="converge") body=`<div class="chipset">${b.from.map(x=>`<span>${x}</span>`).join("")}<span class="to">→</span><span class="one">${b.to}</span></div>`;
  if(b.type==="compare") body=`<div class="compare" style="--tint:${p.bg}"><div class="old"><span class="label">Before</span><ul>${b.old.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="new"><span class="label" style="color:var(--muted)">After</span><ul>${b.nw.map(x=>`<li>${x}</li>`).join("")}</ul></div></div>`;
  if(b.type==="modes") body=`<div class="modes">${b.items.map((m,i)=>`<div class="mode" style="--tint:${["#ece8f6","#e4ebe0","#f3e9dc","#e3eef2"][i%4]}"><b>${m[0]}</b><p>${m[1]}</p><em>${m[2]}</em></div>`).join("")}</div>`;
  if(b.type==="flow") body=`<div class="compare" style="--tint:${p.bg}"><div class="old"><span class="label">Old way</span><span class="q">${b.qOld}</span></div><div class="new"><span class="label" style="color:var(--muted)">New way</span><span class="q">${b.qNew}</span></div></div><div class="flow" style="--tint:${p.bg}">${b.lanes.map(l=>`<div class="lane${l[2]?" hi":""}"><span>${l[0]}</span>${l[1].map(x=>`<span class="st">${x}</span>`).join('<span class="ar">→</span>')}</div>`).join("")}</div>`;
  if(b.type==="persona") body=`<div class="persona" style="--tint:${p.bg}"><span class="av">${b.initials}</span><div><b>${b.name}</b><p>${b.text}</p><q>${b.quote}</q></div></div>`;
  if(b.type==="logic") body=`<div class="logic" style="--tint:${p.bg};--acc:${p.ac}"><span class="node">Visit request</span>${b.levels.map(l=>`<span class="ar">→</span><div class="lv"><span class="label">${l[0]}</span><b>${l[1]}</b><div class="who">${l[2].map(x=>`<span>${x}</span>`).join(`<i>${l[3]}</i>`)}</div></div>`).join("")}<span class="ar">→</span><span class="node ok">Approved</span></div><p class="cs-body-p">Approvers inside a level work in parallel; levels run one after another.</p>`;
  if(b.type==="options") body=`<div class="options">${b.items.map(o=>`<div class="opt${o[2]?" on":""}" style="--tint:${p.bg}">${o[2]?'<span class="pick">★ Chosen</span>':""}<b>${o[0]}</b><p>${o[1]}</p></div>`).join("")}</div>`;
  if(b.type==="insights") body=`<div class="insights">${b.items.map((x,i)=>`<div class="ins"><span class="label">I${i+1}</span><span>${x[0]}</span><span class="ar">→</span><b>${x[1]}</b></div>`).join("")}</div>`;
  if(b.type==="health") body=`<div class="health">${b.items.map(h=>`<div class="hcard"><span class="st" style="color:${h[1]}"><i style="background:${h[1]}"></i>${h[0]}</span><b>${h[2]}</b><span>${h[3]}</span></div>`).join("")}</div>`;
  if(b.type==="scope") body=`<div class="scope" style="--tint:${p.bg}"><div class="built"><h3>What I built</h3>${b.built.map(x=>`<p><b>${x[0]}</b>${x[1]}</p>`).join("")}</div><div class="later"><h3>What I didn't (yet)</h3>${b.later.map(x=>`<p><b>${x[0]}</b>${x[1]}</p>`).join("")}</div></div>`;
  return `<section class="wrap cs-sec reveal" style="padding-top:clamp(56px,7vw,96px)">${side}<div class="body">${body}</div></section>`;
}
/* Case study screens (from Devanshi's Figma files) */
const SCREENS={
 "runway": [
  "assets/images/screen-runway-1.jpg",
  "assets/images/screen-runway-2.jpg",
  "assets/images/screen-runway-3.jpg",
  "assets/images/screen-runway-4.jpg"
 ],
 "top-brass": [
  "assets/images/screen-top-brass-1.jpg",
  "assets/images/screen-top-brass-2.jpg",
  "assets/images/screen-top-brass-3.jpg",
  "assets/images/screen-top-brass-4.jpg",
  "assets/images/screen-top-brass-5.jpg"
 ],
 "veritas-research": [
  "assets/images/screen-veritas-research-1.jpg",
  "assets/images/screen-veritas-research-2.jpg",
  "assets/images/screen-veritas-research-3.jpg",
  "assets/images/screen-veritas-research-4.jpg"
 ],
 "navstar": [
  "assets/images/screen-navstar-1.jpg",
  "assets/images/screen-navstar-2.jpg",
  "assets/images/screen-navstar-3.jpg",
  "assets/images/screen-navstar-4.jpg"
 ],
 "vault": [
  "assets/images/screen-vault-1.jpg",
  "assets/images/screen-vault-2.jpg"
 ],
 "approval-workflow-builder": [
  "assets/images/screen-approval-workflow-builder-1.jpg",
  "assets/images/screen-approval-workflow-builder-2.jpg",
  "assets/images/screen-approval-workflow-builder-3.jpg",
  "assets/images/screen-approval-workflow-builder-4.jpg",
  "assets/images/screen-approval-workflow-builder-5.jpg"
 ]
};
Object.keys(SCREENS).forEach(k=>{ if(CASES[k]) CASES[k].screens=SCREENS[k]; });
/* Screens: 5 full-width images spread evenly between sections, stacked vertically. Add images to CASES[slug].screens. */
function interleave(c,p,parts){
  const sc=(c.screens&&c.screens.length?c.screens:Array(5).fill("")).slice(0,5);
  const secs=parts.filter(Boolean); let k=0, out="";
  const G=secs.length-1, n=sc.length, at=new Set();
  if(n>=G){ for(let g=0;g<G;g++) at.add(g); } else { for(let j=0;j<n;j++) at.add(n===1?0:Math.round(j*(G-1)/(n-1))); }
  secs.forEach((h,i)=>{ out+=h; if(k<sc.length&&at.has(i)){ out+=`<div class="wrap shot-wrap reveal"><figure class="shot">${slot(sc[k],p.name+" screen "+(k+1),"Screen "+String(k+1).padStart(2,"0"))}</figure></div>`; k++; } });
  while(k<sc.length){ out+=`<div class="wrap shot-wrap reveal"><figure class="shot">${slot(sc[k],p.name+" screen "+(k+1),"Screen "+String(k+1).padStart(2,"0"))}</figure></div>`; k++; }
  return out;
}
function renderCase(slug){
  const c=CASES[slug], p=projBySlug(slug), slugs=Object.keys(CASES), nx=slugs[(slugs.indexOf(slug)+1)%slugs.length], np=projBySlug(nx);
  const sec=(label,h,body)=>`<section class="wrap cs-sec reveal">${`<div class="side"><span class="label">${label}</span><h2>${h}</h2></div>`}<div class="body">${body}</div></section>`;
  return `<div class="page" style="--acc:${p.ac}">
<div class="wrap cs-top"><a class="link-arrow" href="#work"><span style="transform:none">←</span> All projects</a><span class="label">Case study · ${c.year}</span></div>
<section class="wrap cs-hero" style="padding-top:clamp(24px,3vw,40px)">
  <div><span class="label">${c.kicker}</span><h1>${c.title} <span class="grey">${c.grey}</span></h1><p>${c.intro}</p></div>
  <div class="cs-meta">${c.meta.map(m=>`<div><span class="label">${m[0]}</span><span>${m[1]}</span></div>`).join("")}</div>
</section>
<div class="wrap"><div class="cs-cover" id="cover"><div class="art" data-depth="1">${slot(p.img,p.name+" cover")}</div>${c.chips.map((x,i)=>`<span class="chip-f c${i+1}" data-depth="${2+i*.6}">${x}</span>`).join("")}</div></div>
${interleave(c,p,[sec("Overview",p.name,`<p class="cs-lead">${c.overview[0]} ${c.overview[1]}</p>`),
sec("The problem",c.problem.h,`<div class="cs-cards" style="--cols:${c.problem.items.length===4?2:3}">${c.problem.items.map((it,i)=>`<div class="cs-card"><span class="n">0${i+1}</span><h3>${it[0]}</h3><p>${it[1]}</p></div>`).join("")}</div>`),
c.blocks.map(b=>caseBlock(b,p)).join(""),
sec("Process","How I got there.",`<div class="cs-steps" style="--acc:${p.ac}">${c.process.map((s,i)=>`<div class="cs-step"><span class="label">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>`),
sec("Design decisions",c.decisions.h,`<div class="cs-cards" style="--cols:${c.decisions.items.length===4?2:3}">${c.decisions.items.map((it,i)=>`<div class="cs-card" style="background:${i%2?"var(--card)":p.bg}"><span class="n">0${i+1}</span><h3>${it[0]}</h3><p>${it[1]}</p></div>`).join("")}</div>`),
c.system?sec("Design system","A visual language with restraint.",`<div class="swatches">${c.system.colors.map(x=>`<div class="sw"><i style="background:${x[1]}"></i>${x[0]}<span>${x[1]}</span></div>`).join("")}</div><div class="type-row"><b>Aa</b><span class="muted">${c.system.type}</span></div><p class="cs-body-p">${c.system.note}</p>`):"",
c.stats?sec("Outcomes","What changed.",`<div class="cs-stats" style="--acc:${p.ac}">${c.stats.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`):"",
c.learnings&&c.learnings.length?sec("Learnings","What I'd carry forward.",`<div class="cs-cards">${c.learnings.map(it=>`<div class="cs-card"><h3>${it[0]}</h3><p>${it[1]}</p></div>`).join("")}</div>`):""])}
<div class="wrap cs-quote reveal"><q>${c.quote}</q></div>
<div class="wrap" style="padding-bottom:24px"><a class="cs-next reveal" href="#${nx}"><div><span class="label">Next project</span><h2>${np.name}</h2><p class="muted" style="margin-top:8px">${np.line}</p></div><div class="mini">${slot(np.img,np.name+" cover","")}</div><span class="arr" aria-hidden="true">→</span></a></div>
</div>`;
}

const PAGES={
home:()=>{
  let k=0; const words=s=>s.split(" ").map(w=>`<span class="w" style="animation-delay:${(k++)*.05}s">${w}</span>`).join(" ");
  const NOTES=["#FFFDF8","#E1EAF6","#F6F1E6","#EAF0F8"];
  return `<div class="page">
<section class="wrap hero"><div class="hero-card hx" id="heroCard">
  <div class="hx-grid">
    <div class="hx-copy">
      <span class="hx-eyebrow">UI/UX designer · Noida, India</span>
      <h1 class="hx-title">${words("Hii, I'm Devanshi. I make")} <em>${words("complex products")}</em> ${words("feel")} <em>${words("calm &amp; simple.")}</em></h1>
      <p class="hx-sub">Research-driven designer with 4+ years across SaaS, dashboards and mobile. People first, pixels next.</p>
      <div class="row hx-btns"><a class="btn hx-ghost" href="${RESUME}" target="_blank" rel="noopener">Resume ↗</a><a class="btn dark" href="#work">See my work →</a></div>
      <span class="status tape-label"><i></i>available for work</span>
    </div>
    <div class="hx-art" aria-hidden="true">
      <div class="hx-env" data-depth="0.9"><svg viewBox="0 0 200 132"><rect x="3" y="3" width="194" height="126" rx="6" fill="#FFFDF8" stroke="#D9CFBE" stroke-width="2"/><path d="M5 8 L100 78 L195 8" fill="none" stroke="#D9CFBE" stroke-width="2" stroke-linejoin="round"/><circle cx="100" cy="78" r="17" fill="#4A6FA5"/><circle cx="100" cy="78" r="12.5" fill="none" stroke="#AFC5E4" stroke-width="1.6"/><path d="M100 70 L102 76 L108 78 L102 80 L100 86 L98 80 L92 78 L98 76Z" fill="#E1EAF6"/></svg></div>
      <figure class="hx-photo" data-depth="0.35"><img src="assets/images/hero-selfie.jpg" alt=""></figure>
      <div class="hx-stamp" data-depth="1.3"><div class="stamp"><svg viewBox="0 0 40 40"><path d="M20 4 L23 16 L35 20 L23 24 L20 36 L17 24 L5 20 L17 16Z"/></svg><span>Devanshi</span></div><svg class="hx-cancel" viewBox="0 0 120 40"><path d="M2 8 C22 2 38 14 58 8 S98 2 118 8 M2 20 C22 14 38 26 58 20 S98 14 118 20 M2 32 C22 26 38 38 58 32 S98 26 118 32"/></svg></div>
      <span class="fd hx-spark" data-depth="2">${FD.spark}</span>
    </div>
  </div>
</div></section>

<section class="wrap" id="sec-work">
  ${head("Selected work","Projects",`<p class="hand-aside">${PROJECTS.length} case studies,<br>all made with ♡</p>`)}
  <div class="collage">${PROJECTS.map(pcard).join("")}</div>
</section>

<section class="wrap" id="sec-about">
  ${head("About me","A little about me",`<p class="hand-aside">people first,<br>pixels next ✦</p>`)}
  <div class="notebook reveal">
    <div class="nb-page nb-left">
      <p class="intro-line">I start with people, <span class="grey">then design products that are useful, calm and easy to love.</span></p>
      <p class="nb-text">I'm Devanshi, a UX researcher and designer with 4+ years of experience turning user and market insights into simple, intuitive experiences across SaaS, dashboards and mobile. Off the screen, I fill sketchbooks.</p>
    </div>
    <div class="nb-page nb-right">
      <span class="label">What I do</span>
      <div class="chips">${["UX Research","Information Architecture","Interaction Design","Design Systems","Prototyping","Usability Testing"].map((c,i)=>`<span class="chip" style="--r:${[-3,2,-1,3,-2,1][i]}deg">${c}</span>`).join("")}</div>
      <span class="label" style="margin-top:22px">My toolkit</span>
      <ul class="checklist">${["Figma","FigJam","Framer","pen &amp; paper"].map(t=>`<li>${t}</li>`).join("")}</ul>
    </div>
  </div>
  <div class="cv reveal" id="cv" aria-label="Photos of Devanshi's life outside work">
    <div class="cv-world" id="cvWorld">
      <div class="cv-center"><span class="cv-hand">the bits that don't fit on a resume</span><h3>Off the clock</h3></div>
      ${PHOTOS.map(p=>`<figure class="cv-ph" style="left:${p.x}%;top:${p.y}%;--w:${p.w}px;--r:${p.r}deg">${p.img?`<img src="${p.img}" alt="${p.note}" loading="lazy" style="object-position:${p.pos||"50% 50%"}">`:slot("",p.note,"Your photo")}<figcaption>${p.note}</figcaption></figure>`).join("")}
    </div>
    <span class="cv-hint" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>drag to look around</span>
  </div>
</section>

<section class="wrap">
  ${head("Off the screen","From my sketchbook",`<p class="rm-note">pick anything up<br>&amp; move it around<svg viewBox="0 0 60 50" aria-hidden="true"><path d="M6 4 C30 6 46 18 44 42 M36 34 L44 44 L52 34"/></svg></p>`)}
  <div class="gw reveal"><div class="gw-grid" aria-hidden="true"></div>
    ${WALL.map((w,i)=>{
      const st=`--x:${w.x}%;--y:${w.y}%;--w:${w.w}%;--r:${w.r}deg;`+(w.m?`--mx:${w.m[0]}%;--my:${w.m[1]}%;--mw:${w.m[2]}%;`:"");
      const cls=w.m?"":" no-m";
      if(w.t==="claw") return `<span class="gw-it gw-claw${cls}" style="${st}">${CLAW}</span>`;
      if(w.t==="c") return `<span class="gw-it gw-charm${cls}" style="${st}--d:${4+i%3}s" aria-hidden="true">${CHARMS[w.c]}</span>`;
      const pin=PIN(PINS[i%PINS.length]);
      if(w.t==="q") return `<figure class="gw-it gw-q gw-q${w.q}${cls}" style="${st}">${pin}<blockquote>${QUOTES[w.q]}</blockquote></figure>`;
      if(w.t==="p") return `<figure class="gw-it gw-pol${cls}" style="${st}">${pin}${slot(w.img,w.note,"Your photo")}<figcaption>${w.note}</figcaption></figure>`;
      return `<figure class="gw-it gw-print${cls}" style="${st}">${pin}<img src="${w.img}" alt="A painting by Devanshi" loading="lazy" draggable="false"></figure>`;
    }).join("")}
  </div>
</section>

<section class="wrap">
  ${head("My approach","An eye for detail. <span class=\"grey\">A mind for people.</span>")}
  <div class="process reveal">
    <div class="wboard"><span class="wb-title">things i keep<br>coming back to</span><ul class="wcloud">${WORDS.map((w,i)=>`<li class="wd s${i%6}" style="--r:${[-4,3,-2,5,-3,2,4,-5,3,-2,6,-3,2,-4,3,-1][i]}deg">${w.toLowerCase()}</li>`).join("")}</ul><span class="wb-doodle a" aria-hidden="true">${FD.spark}</span><span class="wb-doodle b" aria-hidden="true">${FD.heart}</span></div>
    <div class="stickies">${STEPS.map((s,i)=>`<div class="sticky" style="--bg:${NOTES[i]};--r:${[-2.5,2,1.5,-2][i]}deg"><span class="n">step 0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div>
  </div>
</section>

<section class="wrap" id="sec-journal">
  ${head("Notes &amp; ideas","The journal",`<p class="hand-aside">${POSTS.length} entries,<br>written over coffee</p>`)}
  <div class="grid4">${POSTS.map(jcard).join("")}</div>
</section>

<section class="wrap" style="padding-bottom:24px">
  ${head("Recommendations","What people say",`<p class="hand-aside">kind words from<br>people i've worked with</p>`)}
  <div class="tst-row" id="tRow">${TESTIMONIALS.map(tcard).join("")}</div>
</section>
</div>`}
};


function renderPost(slug){
  const p=POSTMAP[slug], i=POSTS.indexOf(p), nx=POSTS[(i+1)%POSTS.length];
  const blk=b=>b[0]==="h"?`<h2>${b[1]}</h2>`:b[0]==="q"?`<blockquote>${b[1]}</blockquote>`:b[0]==="lead"?`<p class="lead">${b[1]}</p>`:b[0]==="ul"?`<ul>${b[1].map(x=>`<li>${x}</li>`).join("")}</ul>`:`<p>${b[1]}</p>`;
  return `<div class="page">
<div class="wrap cs-top"><a class="link-arrow" href="#journal"><span style="transform:none">←</span> Journal</a><span class="label">${p.cat} · ${readTime(p)} min read</span></div>
<article class="wrap post">
  <div class="post-head" style="--tint:${p.tint}"><span class="label">${p.cat}</span><h1>${p.t}</h1><p>${p.d}</p><div class="by"><span class="av"><img src="${IMG_AVATAR}" alt=""></span><span>Devanshi · UI/UX designer</span></div></div>
  <div class="post-body reveal">${p.body.map(blk).join("")}</div>
</article>
<div class="wrap" style="padding-bottom:24px"><a class="cs-next reveal" href="#${nx.slug}" style="background:${nx.tint}"><div><span class="label">Next entry</span><h2 style="font-size:clamp(1.6rem,3.4vw,2.6rem)">${nx.t}</h2><p class="muted" style="margin-top:8px;max-width:52ch">${nx.d}</p></div><span class="arr" aria-hidden="true">→</span></a></div>
</div>`;
}
const app=document.getElementById("app");
let shown="";
function route(){
  const h=(location.hash||"#home").slice(1);
  const secs=["work","about","journal","contact"];
  let view="home";
  if(CASES[h]) view="case:"+h; else if(POSTMAP[h]) view="post:"+h;
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("menuBtn").setAttribute("aria-expanded","false");
  document.querySelectorAll(".links a[data-r]").forEach(a=>a.classList.toggle("active",a.dataset.r===h||(view.startsWith("case")&&a.dataset.r==="work")||(view.startsWith("post")&&a.dataset.r==="journal")));
  if(view!==shown){
    app.innerHTML=view.startsWith("case:")?renderCase(h):view.startsWith("post:")?renderPost(h):PAGES.home();
    shown=view; window.scrollTo({top:0,behavior:"instant"}); wire();
  }
  if(view==="home") setTimeout(spy,60);
  if(view==="home"&&secs.includes(h)){const el=document.getElementById("sec-"+h); if(el) setTimeout(()=>el.scrollIntoView({behavior:shown===view&&document.readyState==="complete"?"smooth":"instant",block:"start"}),30);}
  else if(view==="home"&&h==="home") window.scrollTo({top:0,behavior:"smooth"});
}
addEventListener("hashchange",route);
/* Scroll spy: on the home page, highlight the nav link for the section in view */
let spyTick=false;
function spy(){
  spyTick=false;
  if(shown!=="home") return;
  const line=innerHeight*0.4; let cur="";
  ["work","about","journal","contact"].forEach(id=>{const el=document.getElementById("sec-"+id); if(el&&el.getBoundingClientRect().top<=line) cur=id;});
  if(innerHeight+scrollY>=document.documentElement.scrollHeight-4) cur="contact";
  document.querySelectorAll(".links a[data-r]").forEach(a=>a.classList.toggle("active",a.dataset.r===cur));
}
addEventListener("scroll",()=>{if(!spyTick){spyTick=true;requestAnimationFrame(spy);}},{passive:true});
addEventListener("resize",spy);

let io,raf1=0,raf2=0,raf3=0,raf5=0;const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function wire(){
  if(io) io.disconnect();
  if("IntersectionObserver" in window && !reduce){
    io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove("pre");io.unobserve(e.target)}}),{rootMargin:"0px 0px -6% 0px"});
    document.querySelectorAll("#app .reveal").forEach((el,i)=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add("pre");el.style.transitionDelay=(i%3)*80+"ms";io.observe(el)}});
  }
  cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); cancelAnimationFrame(raf3);
  parallax(); wallDrag(); canvasPan(); fitMega(); coverParallax();
  /* Recommendations: slow continuous auto-scroll (pauses on hover, focus or touch; arrows still step) */
  const tRow=document.getElementById("tRow"); cancelAnimationFrame(raf5);
  if(tRow){
    const n=tRow.children.length; tRow.insertAdjacentHTML("beforeend",tRow.innerHTML);
    [...tRow.children].slice(n).forEach(c=>{c.setAttribute("aria-hidden","true");c.classList.remove("reveal","pre");});
    const step=()=>tRow.querySelector(".tcard").getBoundingClientRect().width+18, half=()=>tRow.scrollWidth/2;
    let paused=false, hold=0, pos=0;
    const nudge=d=>{ if(d<0&&tRow.scrollLeft<step()) tRow.scrollLeft+=half(); hold=performance.now()+1600; tRow.scrollBy({left:d*step(),behavior:"smooth"}); };
    tRow.addEventListener("mouseenter",()=>paused=true); tRow.addEventListener("mouseleave",()=>paused=false);
    tRow.addEventListener("focusin",()=>paused=true); tRow.addEventListener("focusout",()=>paused=false);
    tRow.addEventListener("touchstart",()=>hold=performance.now()+3000,{passive:true});
    tRow.addEventListener("wheel",()=>hold=performance.now()+1600,{passive:true});
    const tick=()=>{ if(shown!=="home"||!tRow.isConnected) return;
      if(paused||performance.now()<hold||reduce){ pos=tRow.scrollLeft; }
      else { pos+=0.35; if(pos>=half()) pos-=half(); tRow.scrollLeft=pos; }
      raf5=requestAnimationFrame(tick); };
    raf5=requestAnimationFrame(tick);
  }
  const ex=document.getElementById("explore");ex.classList.remove("on");
  document.querySelectorAll(".pcard").forEach(c=>{
    c.addEventListener("mouseenter",()=>ex.classList.add("on"));
    c.addEventListener("mouseleave",()=>ex.classList.remove("on"));
    c.addEventListener("mousemove",e=>{ex.style.left=e.clientX+"px";ex.style.top=e.clientY+"px"});
  });
  document.querySelectorAll("#app [data-copy]").forEach(b=>b.addEventListener("click",()=>copyText(b.dataset.copy,b)));
  const f=document.getElementById("reqForm");
  if(f) f.addEventListener("submit",e=>{
    e.preventDefault();
    const d=new FormData(f),err=document.getElementById("formErr");
    const name=(d.get("name")||"").trim(),em=(d.get("email")||"").trim();
    if(!name||!/^\S+@\S+\.\S+$/.test(em)){err.textContent=!name?"Add your name so I know who to reply to.":"Add an email address like name@company.com.";err.hidden=false;(!name?f.elements.name:f.elements.email).focus();return}
    const msg=`Hi Devanshi,\n\nName: ${name}\nEmail: ${em}\nNeeds: ${d.getAll("type").join(", ")||"Not specified"}\n\n${(d.get("msg")||"").trim()||"(No details yet)"}`;
    const box=document.getElementById("formBox");
    box.innerHTML=`<div class="done"><span class="label" style="color:var(--sage)">Almost there</span><h3 style="font-size:1.6rem;line-height:1.15;letter-spacing:-.03em"></h3><p class="muted">Copy it and send it to <span class="sel">${EMAIL}</span>.</p><pre id="reqText"></pre><div class="row"><button class="btn dark" id="copyReq">Copy request</button><button class="btn" id="again">Start over</button></div></div>`;
    box.querySelector("h3").textContent=`Thanks, ${name.split(" ")[0]}! Your request is ready.`;
    document.getElementById("reqText").textContent=msg;
    document.getElementById("copyReq").addEventListener("click",ev=>copyText(msg,ev.currentTarget));
    document.getElementById("again").addEventListener("click",route);
  });
}

/* hero: layers drift toward the cursor at different depths; idle sway otherwise */
function parallax(){
  const card=document.getElementById("heroCard"); if(!card||reduce) return;
  const layers=[...card.querySelectorAll("[data-depth]")].map(el=>({el,d:+el.dataset.depth,tilt:el.hasAttribute("data-tilt")}));
  let tx=0,ty=0,cx=0,cy=0,active=false;
  card.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const r=card.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*2;active=true});
  card.addEventListener("pointerleave",()=>{active=false});
  const tick=t=>{
    if(!active){tx=Math.sin(t/1700)*.35;ty=Math.cos(t/2100)*.3}
    cx+=(tx-cx)*.07; cy+=(ty-cy)*.07;
    for(const l of layers){l.el.style.transform=`translate3d(${(cx*l.d*20).toFixed(2)}px,${(cy*l.d*14).toFixed(2)}px,0)`+(l.tilt?` rotateY(${(cx*12).toFixed(2)}deg) rotateX(${(-cy*9).toFixed(2)}deg)`:"")}
    raf1=requestAnimationFrame(tick)};
  raf1=requestAnimationFrame(tick);
}
function fitMega(){
  const m=document.getElementById("mega"),inner=document.getElementById("megaIn"); if(!m||!inner) return;
  if(innerWidth<=900){m.style.fontSize="";return}
  m.style.fontSize="100px"; const w=inner.getBoundingClientRect().width||1;
  m.style.fontSize=Math.min(170,Math.floor(100*m.clientWidth/w*.99))+"px";
}
/* about canvas: drag anywhere to pan around the photos */
function canvasPan(){
  const cv=document.getElementById("cv"), w=document.getElementById("cvWorld"); if(!cv||!w) return;
  let x=0,y=0,sx=0,sy=0,drag=false,lim={x:0,y:0};
  const fit=()=>{lim={x:Math.max(0,(w.offsetWidth-cv.clientWidth)/2),y:Math.max(0,(w.offsetHeight-cv.clientHeight)/2)}; set(x,y)};
  const set=(nx,ny)=>{x=Math.max(-lim.x,Math.min(lim.x,nx)); y=Math.max(-lim.y,Math.min(lim.y,ny)); w.style.transform=`translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`};
  fit(); addEventListener("resize",fit);
  cv.addEventListener("pointerdown",e=>{drag=true; sx=e.clientX-x; sy=e.clientY-y; cv.setPointerCapture(e.pointerId); cv.classList.add("grabbing")});
  cv.addEventListener("pointermove",e=>{if(drag) set(e.clientX-sx,e.clientY-sy)});
  const end=()=>{drag=false; cv.classList.remove("grabbing")};
  cv.addEventListener("pointerup",end); cv.addEventListener("pointercancel",end);
}
/* sketchbook wall: pick anything up and move it around the grid.
   Mouse and pen drag straight away; on touch, press and hold first so the page still scrolls. */
function wallDrag(){
  const wall=document.querySelector(".gw"); if(!wall) return;
  let top=20;
  wall.querySelectorAll(".gw-it").forEach(el=>{
    let dx=0,dy=0,sx=0,sy=0,tx=0,ty=0,box=null,on=false,timer=0;
    const start=(x,y)=>{
      const w=wall.getBoundingClientRect(), r=el.getBoundingClientRect();
      box={l:w.left-r.left+dx-20,r:w.right-r.right+dx+20,t:Math.min(0,w.top-r.top)+dy-20,b:w.bottom-r.bottom+dy+20};
      sx=x-dx; sy=y-dy; on=true; el.style.zIndex=++top; el.classList.add("lift");
    };
    const move=(x,y)=>{dx=Math.min(box.r,Math.max(box.l,x-sx)); dy=Math.min(box.b,Math.max(box.t,y-sy)); el.style.translate=`${dx}px ${dy}px`};
    const end=()=>{clearTimeout(timer); on=false; el.classList.remove("lift")};
    el.addEventListener("pointerdown",e=>{if(e.pointerType==="touch") return; e.preventDefault(); el.setPointerCapture(e.pointerId); start(e.clientX,e.clientY)});
    el.addEventListener("pointermove",e=>{if(on&&e.pointerType!=="touch") move(e.clientX,e.clientY)});
    el.addEventListener("pointerup",e=>{if(e.pointerType!=="touch") end()});
    el.addEventListener("pointercancel",e=>{if(e.pointerType!=="touch") end()});
    el.addEventListener("touchstart",e=>{const t=e.touches[0]; tx=t.clientX; ty=t.clientY; el.style.zIndex=++top; clearTimeout(timer); timer=setTimeout(()=>{start(tx,ty); if(navigator.vibrate) navigator.vibrate(8)},260)},{passive:true});
    el.addEventListener("touchmove",e=>{const t=e.touches[0]; if(on){e.preventDefault(); move(t.clientX,t.clientY)} else if(Math.hypot(t.clientX-tx,t.clientY-ty)>8) clearTimeout(timer)},{passive:false});
    el.addEventListener("touchend",end); el.addEventListener("touchcancel",end);
    el.addEventListener("contextmenu",e=>e.preventDefault());
  });
}

/* case study: cover layers drift with the cursor */
let raf4=0;
function coverParallax(){
  cancelAnimationFrame(raf4); const card=document.getElementById("cover"); if(!card||reduce) return;
  const layers=[...card.querySelectorAll("[data-depth]")].map(el=>({el,d:+el.dataset.depth}));
  let tx=0,ty=0,cx=0,cy=0,active=false;
  card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*2;active=true});
  card.addEventListener("pointerleave",()=>active=false);
  const tick=t=>{if(!active){tx=Math.sin(t/1900)*.3;ty=Math.cos(t/2300)*.25} cx+=(tx-cx)*.07; cy+=(ty-cy)*.07;
    for(const l of layers) l.el.style.transform=`translate3d(${(cx*l.d*12).toFixed(1)}px,${(cy*l.d*9).toFixed(1)}px,0)`;
    raf4=requestAnimationFrame(tick)};
  raf4=requestAnimationFrame(tick);
}
const prog=document.getElementById("progress");
addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight; prog.style.transform=`scaleX(${h>0&&CASES[(location.hash||"").slice(1)]?Math.min(1,scrollY/h):0})`},{passive:true});
function copyText(t,btn){
  const ok=()=>{ if(btn.classList.contains("copied")) return; btn.classList.add("copied"); btn.setAttribute("aria-label","Copied");
    btn.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    setTimeout(()=>{btn.classList.remove("copied");btn.removeAttribute("aria-label");btn.textContent="Copy";},1600); };
  const sel=()=>{const el=btn.previousElementSibling||document.getElementById("reqText");if(!el)return;const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r)};
  const fallback=()=>{sel(); try{document.execCommand("copy")}catch(e){} ok();};
  try{navigator.clipboard.writeText(t).then(ok).catch(fallback)}catch(e){fallback()}
}
/* footer: wordmark letters + live Noida time */
/* handwritten wordmark, same as the nav logo: sparkle + letters that hop on hover */
document.querySelector(".ft-word").innerHTML=`<svg class="ft-star" viewBox="0 0 24 24"><path d="M12 3c1 4 4 6 8 7-4 1-7 3-8 8-1-5-4-7-8-8 4-1 7-3 8-7z"/></svg>`+"Devanshi".split("").map((c,i)=>`<span style="--r:${[-3,2,-2,3,-1,2,-3,1][i]}deg">${c}</span>`).join("")+`<svg class="ft-squig" viewBox="0 0 300 24" preserveAspectRatio="none"><path d="M4 16 C40 4 70 22 110 12 S180 4 220 14 S280 20 296 8"/></svg>`;
document.querySelectorAll(".ft [data-copy]").forEach(b=>b.addEventListener("click",()=>copyText(b.dataset.copy,b)));
const clock=()=>{try{document.getElementById("clock").textContent=new Intl.DateTimeFormat("en-IN",{hour:"numeric",minute:"2-digit",hour12:true,timeZone:"Asia/Kolkata"}).format(new Date())}catch(e){}};
clock(); setInterval(clock,15000);
document.getElementById("menuBtn").addEventListener("click",e=>{const o=document.getElementById("navLinks").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)});
document.getElementById("toTop").addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
addEventListener("scroll",()=>document.getElementById("hdr").classList.toggle("scrolled",scrollY>10),{passive:true});
addEventListener("resize",fitMega);
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(fitMega);
route();
