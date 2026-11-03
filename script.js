const GENRES = {
  act:{name:'Hành động',emoji:'⚔️',color:'#ff5252',
    desc:'Bạn thích tốc độ, phản xạ nhanh và adrenaline tăng vọt! Chiến đấu nảy lửa và những pha combo mãn nhãn là thứ khiến bạn sống động.',
    games:[['Devil May Cry 5','🗡️','Combo cực phong cách'],['Doom Eternal','🔫','Bắn súng tốc độ cao'],['Hades','🔥','Roguelike đã tay'],['Sekiro','🥷','Đấu kiếm đỉnh cao']]},
  rpg:{name:'Nhập vai (RPG)',emoji:'🧙',color:'#b388ff',
    desc:'Bạn mê cốt truyện, nhân vật và hành trình trưởng thành. Bạn muốn sống trong một thế giới khác và để lại dấu ấn của riêng mình.',
    games:[['The Witcher 3','🐺','Cốt truyện kinh điển'],['Baldur\'s Gate 3','🎲','Tự do lựa chọn'],['Genshin Impact','🌸','Thế giới mở đẹp mắt'],['Elden Ring','🏰','Khám phá và thử thách']]},
  str:{name:'Chiến thuật',emoji:'♟️',color:'#40c4ff',
    desc:'Bạn là bộ óc chỉ huy! Thích lên kế hoạch, tính toán từng bước và chiến thắng nhờ trí tuệ hơn là sức mạnh.',
    games:[['Civilization VI','🌍','Xây dựng đế chế'],['Age of Empires IV','🏹','Chiến thuật thời gian thực'],['XCOM 2','👽','Chiến thuật theo lượt'],['StarCraft II','🚀','Đỉnh cao RTS']]},
  puz:{name:'Phiêu lưu - Giải đố',emoji:'🧩',color:'#ffd54f',
    desc:'Bạn tò mò và thích khám phá bí ẩn. Cảm giác "à, ra là vậy!" khi giải được câu đố là phần thưởng lớn nhất với bạn.',
    games:[['Portal 2','🌀','Giải đố bằng cổng không gian'],['Zelda: Breath of the Wild','🗺️','Phiêu lưu tự do'],['Return of the Obra Dinn','🔍','Phá án độc đáo'],['Unravel','🧶','Nhẹ nhàng, cảm xúc']]},
  sim:{name:'Mô phỏng - Xây dựng',emoji:'🏡',color:'#69f0ae',
    desc:'Bạn thích sáng tạo, vun vén và nhìn thành quả lớn dần theo thời gian. Game là nơi bạn thư giãn và xây nên thế giới của mình.',
    games:[['Stardew Valley','🌾','Làm nông chill chill'],['The Sims 4','🏠','Sống cuộc đời bạn muốn'],['Minecraft','⛏️','Sáng tạo vô tận'],['Cities: Skylines','🏙️','Quy hoạch thành phố']]},
  hor:{name:'Kinh dị - Sinh tồn',emoji:'👻',color:'#ff6e40',
    desc:'Bạn thích cảm giác tim đập thình thịch! Bầu không khí căng thẳng và nỗi sợ khiến bạn phấn khích hơn ai hết.',
    games:[['Resident Evil 4','🧟','Hành động kinh dị'],['Subnautica','🌊','Sinh tồn dưới đại dương'],['Outlast','🔦','Kinh dị tột độ'],['Dead Space','🛸','Kinh dị không gian']]}
};

const QUESTIONS = [
  {q:'Cuối tuần rảnh rỗi, bạn muốn làm gì nhất?',o:[
    ['🏃','Hoạt động mạnh, đổ mồ hôi',{act:2}],
    ['📚','Đọc truyện, xem phim nhiều tập',{rpg:2}],
    ['🧠','Chơi cờ, lên kế hoạch gì đó',{str:2}],
    ['🏡','Dọn nhà, trồng cây, sáng tạo',{sim:2}]]},
  {q:'Bạn muốn cảm giác gì khi chơi game?',o:[
    ['⚡','Phấn khích, adrenaline dâng trào',{act:2,hor:1}],
    ['😌','Thư giãn, thoải mái',{sim:2,puz:1}],
    ['😱','Hồi hộp, căng thẳng',{hor:2}],
    ['🏆','Tự hào vì mình thông minh',{str:1,puz:2}]]},
  {q:'Gặp một cánh cửa bị khóa, bạn sẽ...',o:[
    ['💥','Đạp tung ra!',{act:2}],
    ['🔎','Tìm manh mối quanh đó',{puz:2}],
    ['🗣️','Hỏi NPC xem có nhiệm vụ không',{rpg:2}],
    ['📝','Lên kế hoạch tìm chìa khóa',{str:2}]]},
  {q:'Bạn thích khung cảnh nào nhất?',o:[
    ['🌌','Thế giới fantasy huyền ảo',{rpg:2,puz:1}],
    ['🏚️','Căn nhà hoang lúc nửa đêm',{hor:2}],
    ['🏙️','Thành phố do mình xây dựng',{sim:2,str:1}],
    ['🔥','Chiến trường rực lửa',{act:2,str:1}]]},
  {q:'Nhân vật bạn muốn trở thành?',o:[
    ['🦸','Chiến binh bất bại',{act:2}],
    ['🧙','Pháp sư với phép thuật mạnh',{rpg:2}],
    ['👑','Chỉ huy dẫn dắt cả đội quân',{str:2}],
    ['🕵️','Nhà thám hiểm tò mò',{puz:2,hor:1}]]},
  {q:'Bạn kiên nhẫn đến mức nào?',o:[
    ['🚀','Mình thích mọi thứ nhanh gọn',{act:2}],
    ['🐢','Từ từ cũng được, miễn vui',{sim:2}],
    ['🧩','Mất cả giờ giải 1 câu đố vẫn ok',{puz:2,str:1}],
    ['🎭','Sẵn sàng đọc hết hội thoại',{rpg:2}]]},
  {q:'Phần thưởng nào khiến bạn sướng nhất?',o:[
    ['🗡️','Vũ khí/trang bị hiếm',{rpg:1,act:1}],
    ['🌟','Sống sót qua đêm kinh hoàng',{hor:2}],
    ['🏗️','Công trình hoàn thiện lộng lẫy',{sim:2}],
    ['🎖️','Thắng nhờ chiến thuật hoàn hảo',{str:2}]]},
  {q:'Khi bị thua một trận, bạn sẽ...',o:[
    ['🔁','Bấm làm lại ngay lập tức!',{act:2}],
    ['📊','Phân tích xem mình sai ở đâu',{str:2}],
    ['☕','Nghỉ chút rồi chơi tiếp cho vui',{sim:2}],
    ['💡','Tìm cách khác để vượt qua',{puz:2,rpg:1}]]},
  {q:'Nhạc nền game bạn thích kiểu nào?',o:[
    ['🎸','Rock/EDM dồn dập',{act:2}],
    ['🎻','Giao hưởng hoành tráng',{rpg:2,str:1}],
    ['🕯️','Âm thanh rùng rợn, ám ảnh',{hor:2}],
    ['🎹','Piano nhẹ nhàng, chill',{sim:2,puz:1}]]},
  {q:'Điều gì khiến bạn cày game thâu đêm?',o:[
    ['👹','Muốn hạ gục con boss cuối',{act:2}],
    ['📖','Muốn biết kết thúc câu chuyện',{rpg:2,hor:1}],
    ['📈','Muốn leo rank, đánh bại đối thủ',{str:2}],
    ['❓','Có bí ẩn chưa giải được',{puz:2,hor:1}]]},
  {q:'Khi chơi game, bạn thường chơi theo kiểu nào?',o:[
    ['🎯','Lao vào đánh liền, tính sau',{act:2}],
    ['🧭','Đi khám phá từng ngóc ngách',{rpg:1,puz:2}],
    ['📊','Tối ưu từng chỉ số, từng nguồn lực',{str:2,sim:1}],
    ['🔦','Rón rén từng bước, cảnh giác cao độ',{hor:2}]]},
  {q:'Một game "đáng đồng tiền" phải có gì?',o:[
    ['🎬','Cốt truyện sâu sắc, nhân vật đáng nhớ',{rpg:2,puz:1}],
    ['🔁','Chơi hoài không chán, tự do sáng tạo',{sim:2}],
    ['🥊','Cảm giác chiến đấu sướng tay',{act:2}],
    ['🧟','Bầu không khí ám ảnh, đáng sợ',{hor:2}]]}
];

const $ = id => document.getElementById(id);
const fx = $('fx'), fc = fx.getContext('2d');
const bg = $('bg'), bc = bg.getContext('2d');
let score, cur, W, H, stars = [], parts = [];

function resize(){W=fx.width=bg.width=innerWidth;H=fx.height=bg.height=innerHeight}
addEventListener('resize',resize);resize();
for(let i=0;i<90;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.5,s:Math.random()*.6+.2});

function loop(){
  bc.clearRect(0,0,W,H);bc.fillStyle='#fff';
  stars.forEach(s=>{s.y+=s.s;if(s.y>H){s.y=0;s.x=Math.random()*W}bc.globalAlpha=.3+s.r/3;bc.beginPath();bc.arc(s.x,s.y,s.r,0,7);bc.fill()});
  fc.clearRect(0,0,W,H);
  parts=parts.filter(p=>p.life>0);
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.rot+=.2;p.life--;
    fc.save();fc.globalAlpha=Math.min(1,p.life/25);fc.translate(p.x,p.y);fc.rotate(p.rot);fc.fillStyle=p.c;fc.fillRect(-p.s/2,-p.s/2,p.s,p.s);fc.restore()});
  requestAnimationFrame(loop);
}
loop();

function burst(x,y,n=24,colors=['#00e5ff','#ff3d9a','#ffd54f','#7c4dff'],power=7){
  for(let i=0;i<n;i++){const a=Math.random()*6.28,v=Math.random()*power+2;
    parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.2,s:Math.random()*7+4,rot:0,life:50+Math.random()*30,c:colors[i%colors.length]})}
}
function confetti(){
  for(let i=0;i<160;i++)parts.push({x:Math.random()*W,y:-20-Math.random()*H*.5,vx:Math.random()*4-2,vy:Math.random()*4+2,g:.05,s:Math.random()*9+5,rot:0,life:200+Math.random()*80,c:['#ff5252','#ffd54f','#69f0ae','#40c4ff','#b388ff','#ff3d9a'][i%6]});
}

function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active')}

function start(){
  score={act:0,rpg:0,str:0,puz:0,sim:0,hor:0};cur=0;
  $('xpBar').style.width='0';$('xpTxt').textContent='0 XP';
  show('quiz');render();
}

function render(){
  const q=QUESTIONS[cur];
  $('lvl').textContent=`LV ${cur+1}/${QUESTIONS.length}`;
  $('qText').textContent=q.q;
  const box=$('opts');box.innerHTML='';
  q.o.forEach((o,i)=>{
    const b=document.createElement('button');b.className='opt';b.style.animationDelay=(.15+i*.1)+'s';
    b.innerHTML=`<span class="e">${o[0]}</span><span>${o[1]}</span>`;
    b.onclick=e=>pick(b,o[2],e);box.appendChild(b);
  });
  const c=$('card');c.className='card in';
}

function pick(btn,pts,e){
  document.querySelectorAll('.opt').forEach(o=>o!==btn&&o.classList.add('dim'));
  btn.classList.add('sel');
  for(const k in pts)score[k]+=pts[k];
  const r=btn.getBoundingClientRect(),x=e.clientX||r.left+r.width/2,y=e.clientY||r.top+r.height/2;
  burst(x,y);
  const pop=document.createElement('div');pop.className='xp-pop';pop.textContent='+100 XP';
  pop.style.left=x-30+'px';pop.style.top=y-20+'px';document.body.appendChild(pop);setTimeout(()=>pop.remove(),1000);
  cur++;
  $('xpBar').style.width=(cur/QUESTIONS.length*100)+'%';$('xpTxt').textContent=cur*100+' XP';
  setTimeout(()=>{$('card').className='card out'},700);
  setTimeout(()=>cur<QUESTIONS.length?render():analyze(),1050);
}

function analyze(){
  show('loading');
  const msgs=['Đang phân tích sở thích...','Quét linh hồn game thủ...','Mở khóa class của bạn...'];
  let p=0,i=0;$('loadBar').style.width='0';
  const t=setInterval(()=>{
    p+=Math.random()*14+6;if(p>100)p=100;
    $('loadBar').style.width=p+'%';
    $('loadTxt').textContent=msgs[Math.min(i++%3,2)];
    if(p>=100){clearInterval(t);setTimeout(result,500)}
  },450);
}

function result(){
  const total=Object.values(score).reduce((a,b)=>a+b,0)||1;
  const sorted=Object.entries(score).sort((a,b)=>b[1]-a[1]);
  const g=GENRES[sorted[0][0]];
  document.documentElement.style.setProperty('--glow',g.color);
  show('result');
  $('rEmoji').textContent=g.emoji;
  $('rName').textContent=g.name.toUpperCase();$('rName').style.color=g.color;
  $('rDesc').textContent=g.desc;
  $('bars').innerHTML=sorted.map(([k,v])=>{
    const pc=Math.round(v/total*100);
    return `<div class="bar-row"><b>${GENRES[k].emoji} ${GENRES[k].name.split(' ')[0]}</b><div class="track"><div class="fill" data-w="${pc}" style="background:${GENRES[k].color}"></div></div><span>${pc}%</span></div>`}).join('');
  $('games').innerHTML=g.games.map((x,i)=>`<div class="game" style="animation-delay:${.6+i*.15}s"><div class="e">${x[1]}</div><b>${x[0]}</b><span>${x[2]}</span></div>`).join('');
  setTimeout(()=>document.querySelectorAll('.fill').forEach(f=>f.style.width=f.dataset.w+'%'),200);
  confetti();
  [300,900,1500].forEach(d=>setTimeout(()=>burst(Math.random()*W,Math.random()*H*.5,40,[g.color,'#fff','#ffd54f'],9),d));
}

$('startBtn').onclick=start;
$('again').onclick=()=>{document.documentElement.style.setProperty('--glow','#7c4dff');start()};
