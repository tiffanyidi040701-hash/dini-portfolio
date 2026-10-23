/* ===================== 作品数据 ===================== */
const WORKS = [
  {
    id:'danqing',
    title:'AI短片《丹青游》',
    en:'AI Short Film · Danqing Journey',
    cat:'AI影像', tag:'ai', year:'2025.07',
    cover:'assets/works/danqing/5.jpg',
    imgs:['1','2','3','4','5'].map(n=>`assets/works/danqing/${n}.jpg`),
    card:'以「水」串联山水、舟楫、饮茶与乞巧，用 AI 影像讲述中国文化的包容与诗意。8 小时极限创作。',
    facts:[
      ['时长','2分35秒'],
      ['工具','GPT-4 · 即梦 · 可灵'],
      ['分工','分镜撰写、图像生成、视频生成、剪辑（全流程独立）'],
      ['奖项','智媒果 AI 创作挑战赛 二等奖']
    ],
    award:'浙江大学 × 浙江广电集团「智媒果」AI 创作活动 · 8 小时挑战赛 二等奖',
    detail:[
      '《丹青游》是一部全流程 AI 生成的文化短片，讲述一个外国小男孩无意间闯入中国古画世界，循着「水」的踪迹游历山水、泛舟、饮茶、共度乞巧节的故事。',
      '本片创作于「智媒果」8 小时极限挑战赛中，从分镜到成片全程独立完成。以东方水墨美学为视觉基调，技术上使用 GPT-4 辅助分镜与文案撰写，即梦生成关键帧画面，可灵完成动态视频生成，最终剪辑合成。',
      '作品探索 AI 工具在跨文化叙事中的表达边界，最终从众多作品中脱颖而出获二等奖。'
    ],
    link:'https://weixin.qq.com/sph/AF5dKiT9d5',
    linkText:'微信视频号观看完整影片 ↗'
  },
  {
    id:'yizi',
    title:'AI短片《椅子》',
    en:'AI Short Film · The Chair',
    cat:'AI影像', tag:'ai', year:'2026.03',
    cover:'assets/works/yizi/4.jpg',
    imgs:['1','2','3','4','5'].map(n=>`assets/works/yizi/${n}.jpg`),
    card:'改编自《子不语·官癖》，以一把「官椅」叩问权力对人的异化。获香港国际 AIGC 大赛一等奖。',
    facts:[
      ['时长','4分21秒'],
      ['工具','即梦 AI 图片 3.0/4.5 · Seedance 2.0'],
      ['分工','分镜撰写、图像风格定调、图像生成、视频生成'],
      ['奖项','香港国际 AIGC 文化数字内容创作大赛 一等奖']
    ],
    award:'第二届香港国际 AIGC 文化数字内容创作大赛 · 一等奖',
    detail:[
      '《椅子》改编自清代袁枚志怪小说《子不语·官癖》，以一把「官椅」为核心意象，叩问权力对人的异化。',
      '老太守卒于任上，魂魄不散，每至黎明必端坐于太守椅。新太守到任，不信邪祟，强行坐椅以证官威。人与鬼影日复一日对峙，新太守渐被椅子吞噬心神——模仿其举止、荒废政务，百姓诉状无人理。最终心力交瘁倒在椅前，老太守虚影依旧端坐，官椅空悬，下一任太守将至，执念循环不止。',
      '官位本应为百姓谋福，若眼中只剩位置，责任便成虚妄。活人与鬼魂的争夺，实则是权力惯性对人格的绞杀——将存在感系于椅子，便已甘愿为鬼。本片使用即梦 AI 图片完成画面生成与风格定调，Seedance 2.0 实现动态视频，从分镜到生成全流程独立完成。'
    ],
    link:'https://www.bilibili.com/video/BV1JVApz9Etn/',
    linkText:'B 站观看完整影片 ↗'
  },
  {
    id:'yuanni',
    title:'广告片《愿你》',
    en:'Brand Film · Wish You',
    cat:'品牌广告', tag:'ad', year:'2024.06',
    cover:'assets/works/yuanni/3.jpg',
    imgs:['3','2','1','4','5'].map(n=>`assets/works/yuanni/${n}.jpg`),
    card:'为朗圣药业打造的品牌广告，以女书「生而自由，爱而无惧」为线索，致敬女性的生育与人生选择权。',
    facts:[
      ['时长','1分27秒'],
      ['规格','4K（3840×2160）'],
      ['品牌','朗圣药业'],
      ['分工','导演、拍摄']
    ],
    award:null,
    detail:[
      '《愿你》是一部为朗圣药业创作的品牌概念广告片，以国家级非物质文化遗产「女书」——世界上唯一由女性创造并使用的文字——为视觉与精神线索，书写下「生而自由，爱而无惧」的祝愿。',
      '影片采用意识流叙事与概念化视觉表达，将自然智慧、女性力量、生育自由等主题巧妙融合：生命如自然生长，女性有权决定自己的身体与人生。品牌主张「随心所育」，寓意为每一位女性的绽放提供无惧选择的底气。',
      '全片以 4K 规格拍摄，本人担任导演与摄影，主导视觉风格定调、镜头设计与现场拍摄。'
    ],
    link:null,
    linkText:null
  },
  {
    id:'fenbei',
    title:'纪录片《分贝》',
    en:'Documentary · Decibels',
    cat:'纪录片', tag:'doc', year:'2024.08',
    cover:'assets/works/fenbei/1.jpg',
    imgs:['1','2','3','4','5'].map(n=>`assets/works/fenbei/${n}.jpg`),
    card:'聋哑篮球运动员与咖啡师的真实故事，记录无声世界里的热爱与坚持。发布于澎湃新闻。',
    facts:[
      ['时长','11分08秒'],
      ['发布','澎湃新闻 ·「复旦学子的生活观察」'],
      ['分工','导演、拍摄、剪辑']
    ],
    award:'主流媒体发布 · 澎湃新闻「复旦学子的生活观察」系列',
    detail:[
      '《分贝》是一部关注聋哑人群体的人文纪录片，通过一位聋哑篮球运动员和一位聋哑咖啡师的真实故事，带观众走进无声却丰富多彩的世界。',
      '影片以细腻的镜头语言记录他们的日常训练、工作与追梦历程，打破大众对聋哑群体的刻板印象——即使身处无声世界，依然可以有声有色地生活，勇敢追逐梦想。',
      '本片作为「复旦学子的生活观察」系列作品，于 2024 年 8 月发布于澎湃新闻。本人担任导演、拍摄与剪辑，全流程把控叙事节奏与视觉表达。'
    ],
    link:'https://m.thepaper.cn/newsDetail_forward_28359255',
    linkText:'澎湃新闻观看完整纪录片 ↗'
  },
  {
    id:'noschool',
    title:'微综艺《今天不上学》',
    en:'Micro Variety · No School Today',
    cat:'综艺策划', tag:'show', year:'2025.05',
    cover:'assets/works/noschool/6.jpg',
    imgs:['6','4','3','2','5','1'].map(n=>`assets/works/noschool/${n}.jpg`),
    card:'职业体验类微综艺，喊出「今天不上学」穿越平行宇宙，体验调酒师、猫咖店员等多元职业。像素游戏风包装。',
    facts:[
      ['规格','全季 5 期 · 单期 20 分钟 · 竖屏'],
      ['类型','职业体验类微综艺'],
      ['分工','导演、拍摄、剪辑（兼策划/场地/后期包装）']
    ],
    award:null,
    detail:[
      '《今天不上学》是一档职业体验类微综艺节目，以当代大学生普遍的学业与职业焦虑为切入点——当两位大学生喊出「今天不上学」时，便穿越到平行宇宙，化身各行业的「打工人」，完成为期一天的职业体验与任务挑战。',
      '节目选取调酒师、潮牌店店员、剧本杀 DM、街头海娜师、调香师、猫咖店员、咖啡屋男执事等多元职业，鼓励嘉宾尝试被贴上「性别标签」的领域，以女性主义视角打破传统职业分工。',
      '视觉上采用「像素游戏风」后期包装，营造穿越至赛博游戏世界的沉浸感；机制上引入「鲶鱼嘉宾」制造竞争张力。全季 5 期，单期 20 分钟，以「小而美」的制作模式实现高质量内容输出。本人担任导演、拍摄与剪辑，全程参与策划、场地对接与后期包装。'
    ],
    link:'https://weixin.qq.com/sph/AAcGuNTEgf',
    linkText:'微信视频号观看节目 ↗'
  },
  {
    id:'interview',
    title:'校园随机街采',
    en:'Campus Street Interview',
    cat:'短视频', tag:'short', year:'2024.05',
    cover:'assets/works/interview/2.jpg',
    imgs:['2','1','3','4','5'].map(n=>`assets/works/interview/${n}.jpg`),
    card:'独立策划/拍摄/剪辑的复旦校园街采，用镜头捕捉最真实有趣的即兴反应。视频号播放 1.3w。',
    facts:[
      ['时长','1分37秒 · 竖屏'],
      ['分工','策划、拍摄、剪辑（全流程独立）'],
      ['数据','微信视频号播放 1.3w · 获赞 300']
    ],
    award:null,
    detail:[
      '一支独立完成策划、拍摄、剪辑的校园随机街采。走进复旦校园，在操场、食堂、校道上对同学发起即时提问，用镜头捕捉最真实、有趣的即兴反应，记录当代大学生鲜活松弛的日常切片。',
      '竖屏短视频形式贴合社交媒体传播节奏，单条视频在微信视频号取得播放量 1.3w、获赞 300 的成绩。'
    ],
    link:'https://weixin.qq.com/sph/AvxgghYVT9',
    linkText:'微信视频号观看 ↗'
  },
  {
    id:'mashup',
    title:'《背着善宰跑》影视二创',
    en:'Fan Edit · Lovely Runner',
    cat:'短视频', tag:'short', year:'2024.08',
    cover:'assets/works/mashup/1.jpg',
    imgs:['1','2','3','4'].map(n=>`assets/works/mashup/${n}.jpg`),
    card:'韩剧《背着善宰跑》音乐卡点二创混剪，11 秒重组名场面，铺陈浪漫氛围叙事。B站获赞收藏 800。',
    facts:[
      ['时长','11.8秒'],
      ['素材','韩剧《背着善宰跑》'],
      ['分工','选曲、剪辑、节奏点设计'],
      ['数据','B 站播放 4k · 获赞收藏 800']
    ],
    award:null,
    detail:[
      '以韩剧《背着善宰跑》为素材的音乐卡点二创混剪，在 11 秒内重组泳池、雨夜、水下分屏等名场面，配合节奏点快速切换，铺陈出一段浪漫氛围感叙事，展现对影像节奏与情绪的把控力。',
      '作品在 B 站取得播放量 4k、获赞收藏 800 的反馈。'
    ],
    link:'https://www.bilibili.com/video/BV1uzaregEQu/',
    linkText:'B 站观看二创 ↗'
  }
];

const FILTERS=[
  {key:'all',label:'全部'},
  {key:'ai',label:'AI 影像'},
  {key:'doc',label:'纪录片'},
  {key:'show',label:'综艺策划'},
  {key:'ad',label:'品牌广告'},
  {key:'short',label:'短视频'}
];

/* ===================== 渲染筛选 & 卡片 ===================== */
const grid=document.getElementById('worksGrid');
const filterBar=document.getElementById('filters');

FILTERS.forEach((f,i)=>{
  const b=document.createElement('button');
  b.className='filter-chip'+(i===0?' active':'');
  b.textContent=f.label;
  b.dataset.filter=f.key;
  b.addEventListener('click',()=>{
    filterBar.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const k=b.dataset.filter;
    grid.querySelectorAll('.work-card').forEach(card=>{
      const show = k==='all' || card.dataset.tag===k;
      card.classList.toggle('hide',!show);
    });
  });
  filterBar.appendChild(b);
});

WORKS.forEach((w,idx)=>{
  const card=document.createElement('article');
  card.className='work-card reveal';
  card.dataset.tag=w.tag;
  card.style.transitionDelay=(idx%3*0.08)+'s';
  card.innerHTML=`
    ${w.award?`<span class="wc-badge"><svg viewBox="0 0 24 24"><use href="#ic-trophy"/></svg>获奖</span>`:''}
    <div class="polaroid">
      <span class="tape ${idx%2?'tape-pink':'tape-green'}"></span>
      <div class="work-cover">
        <img src="${w.cover}" alt="${w.title}" loading="lazy">
        <span class="work-play"><svg viewBox="0 0 24 24"><use href="#ic-play"/></svg></span>
      </div>
      <div class="work-caption">
        <h3>${w.title}<span class="wc-en">${w.en}</span></h3>
        <div class="wc-meta"><span class="wc-cat">${w.cat}</span><span class="wc-year">${w.year}</span></div>
      </div>
    </div>`;
  card.addEventListener('click',()=>openModal(w));
  grid.appendChild(card);
});

/* ===================== 作品弹层 ===================== */
const modal=document.getElementById('modal');
const mImg=document.getElementById('mImg');
const mThumbs=document.getElementById('mThumbs');
let lastFocus=null;

function openModal(w){
  lastFocus=document.activeElement;
  document.getElementById('mCat').textContent=w.cat;
  document.getElementById('mYear').textContent=w.year;
  document.getElementById('mTitle').textContent=w.title;
  document.getElementById('mSub').textContent=w.en;
  document.getElementById('mFacts').innerHTML=w.facts
    .map(f=>`<div class="fact"><span class="fk">${f[0]}</span><span class="fv">${f[1]}</span></div>`).join('');
  document.getElementById('mDetail').innerHTML=w.detail.map(p=>`<p>${p}</p>`).join('');
  const awardBox=document.getElementById('mAward');
  if(w.award){awardBox.innerHTML=`<svg viewBox="0 0 24 24"><use href="#ic-trophy"/></svg><span>${w.award}</span>`;awardBox.style.display='flex';}
  else awardBox.style.display='none';
  const link=document.getElementById('mLink');
  if(w.link){link.href=w.link;link.style.display='inline-flex';document.getElementById('mLinkText').textContent=w.linkText||'观看完整作品 ↗';}
  else link.style.display='none';

  // gallery
  mImg.src=w.cover; mImg.alt=w.title;
  mThumbs.innerHTML='';
  const all=[w.cover,...w.imgs.filter(i=>i!==w.cover)];
  all.forEach((src,i)=>{
    const b=document.createElement('button');
    b.className=i===0?'active':'';
    b.innerHTML=`<img src="${src}" alt="">`;
    b.addEventListener('click',()=>{
      mImg.src=src;
      mThumbs.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
    });
    mThumbs.appendChild(b);
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  if(lastFocus)lastFocus.focus();
}
modal.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});

/* ===================== 滚动显现 ===================== */
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
},{threshold:.12});
function observeReveals(){document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));}
observeReveals();

/* ===================== 导航高亮 ===================== */
const navLinks=document.querySelectorAll('[data-nav]');
const sections=[...document.querySelectorAll('section[id]')];
const spy=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const id=en.target.id;
      document.querySelectorAll('.nav-links a').forEach(a=>
        a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    }
  });
},{rootMargin:'-40% 0px -55% 0px'});
sections.forEach(s=>spy.observe(s));

/* ===================== 铅笔光标（桌面端） ===================== */
(function(){
  const cur=document.querySelector('.pencil-cursor');
  if(!cur || window.matchMedia('(hover:none)').matches) return;
  let raf;
  let tx=window.innerWidth/2,ty=window.innerHeight/2,cx=tx,cy=ty;
  document.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;document.body.classList.add('has-pencil');});
  (function loop(){cx+=(tx-cx)*0.18;cy+=(ty-cy)*0.18;cur.style.transform=`translate(${cx}px,${cy}px) rotate(-20deg)`;raf=requestAnimationFrame(loop);})();
})();






