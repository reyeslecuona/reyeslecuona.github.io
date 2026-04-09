const year = new Date().getFullYear();
const y = s => {
  const n = Math.max(1, year - s);
  return n === 1 ? '1 año' : n + ' años';
};
const di = name => `<i class="devicon-${name}"></i>`;
const si = name => `<img src="https://cdn.simpleicons.org/${name}" width="30" height="30">`;
const li = name => `<img src="icons/${name}" width="30" height="30" class="icon-local">`;

const cats = [
  { title:'// Google', items:[
    { icon: si('googleforms'), start:2023, d:true },
    { icon: si('googlesheets'), start:2021, d:true },
    { icon: si('googledrive'), start:2019, d:true },
    { icon: si('googledocs'), start:2019, d:true },
    { icon: si('googleslides'), start:2020, d:true },
  ]},
  { title:'// Código', items:[
    { icon: di('html5-plain'), start:2023, d:true },
    { icon: di('css3-plain'), start:2023, d:true },
    { icon: di('javascript-plain'), start:2023, d:true },
    { icon: di('csharp-plain'), start:2021, d:true },
    { icon: di('cplusplus-plain'), start:2022, d:false },
    { icon: di('python-plain'), start:2025, d:false },
  ]},
  { title:'// Motores', items:[
    { icon: si('construct3'), start:2020, d:true },
    { icon: si('gamemaker'), start:2022, d:false },
    { icon: di('unity-plain'), start:2021, d:true },
    { icon: di('unrealengine-plain'), start:2023, d:false },
    { icon: si('playcanvas'), start:2025, d:false },
  ]},
  { title:'// Diseño', items:[
    { icon: li('canva.png'), start:2021, d:true },
    { icon: di('figma-plain'), start:2023, d:true },
    { icon: si('notion'), start:2022, d:true },
    { icon: li('pureref.png'), start:2024, d:false },
    { icon: li('3dmax.png'), start:2022, d:false },
  ]},
  { title:'// Microsoft', items:[
    { icon: li('word.png'), start:2017, d:true },
    { icon: li('excel.png'), start:2019, d:true },
    { icon: li('powerpoint.png'), start:2018, d:true },
  ]},
  { title:'// Adobe', items:[
    { icon: di('photoshop-plain'), start:2022, d:false },
    { icon: di('illustrator-plain'), start:2021, d:true },
    { icon: di('premierepro-plain'), start:2022, d:true },
  ]},
  { title:'// Repositorios', items:[
    { icon: di('github-original'), start:2021, d:false },
    { icon: si('sourcetree'), start:2024, d:false },
  ]},
  { title:'// Producción', items:[
    { icon: si('miro'), start:2025, d:false },
    { icon: li('slack.png'), start:2018, d:true },
    { icon: si('jira'), start:2023, d:false },
    { icon: si('clickup'), start:2025, d:true },
  ]},
];

const grid = document.getElementById('sw-grid');
cats.forEach(cat => {
  const div = document.createElement('div');
  div.className = 'sw-category';
  div.innerHTML = `<div class="sw-cat-title">${cat.title}</div>` +
    cat.items.map(p => `
      <div class="sw-program${p.d?' destacado':''}">
        <div class="sw-icon">${p.icon}</div>
        <span class="sw-years">${y(p.start)}</span>
      </div>`).join('');
  grid.appendChild(div);
});

// Estela del cursor en línea
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const points = [];
const MAX_POINTS = 20;

document.addEventListener('mousemove', (e) => {
  points.push({ x: e.clientX, y: e.clientY, age: 0 });
  if (points.length > MAX_POINTS) points.shift();
});

function drawTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 1; i < points.length; i++) {
    const t = i / points.length;
    ctx.beginPath();
    ctx.moveTo(points[i - 1].x, points[i - 1].y);
    ctx.lineTo(points[i].x, points[i].y);
    ctx.strokeStyle = `rgba(255, 0, 170, ${t * 0.8})`;
    ctx.lineWidth = t * 3;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  requestAnimationFrame(drawTrail);
}

drawTrail();
