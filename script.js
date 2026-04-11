const year = new Date().getFullYear();
const y = s => {
  const n = Math.max(1, year - s);
  return n === 1 ? '1 año' : n + ' años';
};
const di = name => `<i class="devicon-${name}"></i>`;
const si = name => `<img src="https://cdn.simpleicons.org/${name}" width="30" height="30">`;
const li = name => `<img src="icons/${name}" width="30" height="30" class="icon-local">`;

const cubos = lv => {
  let html = '<div class="cubos">';
  for (let i = 1; i <= 4; i++) {
    html += `<div class="cubo ${i <= lv ? 'lleno' : 'vacio'}"></div>`;
  }
  return html + '</div>';
};

const cats = [
  { title:'// Código', items:[
    { icon: di('html5-plain'), start:2023, lv:4 },
    { icon: di('css3-plain'), start:2023, lv:4 },
    { icon: di('javascript-plain'), start:2023, lv:3 },
    { icon: di('csharp-plain'), start:2021, lv:4 },
    { icon: di('cplusplus-plain'), start:2022, lv:2 },
    { icon: di('python-plain'), start:2025, lv:1 },
  ]},
  { title:'// Motores', items:[
    { icon: si('construct3'), start:2020, lv:4 },
    { icon: si('gamemaker'), start:2022, lv:2 },
    { icon: di('unity-plain'), start:2021, lv:4 },
    { icon: di('unrealengine-plain'), start:2023, lv:3 },
    { icon: si('playcanvas'), start:2025, lv:1 },
  ]},
  { title:'// Google', items:[
    { icon: si('googleforms'), start:2023, lv:4 },
    { icon: si('googlesheets'), start:2021, lv:4 },
    { icon: si('googledrive'), start:2019, lv:4 },
    { icon: si('googledocs'), start:2019, lv:4 },
    { icon: si('googleslides'), start:2020, lv:4 },
  ]},
  { title:'// Diseño', items:[
    { icon: li('canva.png'), start:2021, lv:4 },
    { icon: di('figma-plain'), start:2023, lv:4 },
    { icon: si('notion'), start:2022, lv:4 },
    { icon: li('pureref.png'), start:2024, lv:2 },
    { icon: li('3dmax.png'), start:2022, lv:1 },
  ]},
  { title:'// Microsoft', items:[
    { icon: li('word.png'), start:2017, lv:4 },
    { icon: li('excel.png'), start:2019, lv:4 },
    { icon: li('powerpoint.png'), start:2018, lv:4 },
  ]},
  { title:'// Adobe', items:[
    { icon: di('photoshop-plain'), start:2022, lv:1 },
    { icon: di('illustrator-plain'), start:2021, lv:2 },
    { icon: di('premierepro-plain'), start:2022, lv:3 },
  ]},
  { title:'// Repositorios', items:[
    { icon: di('github-original'), start:2021, lv:3 },
    { icon: si('sourcetree'), start:2024, lv:1 },
  ]},
  { title:'// Producción', items:[
    { icon: si('miro'), start:2025, lv:2 },
    { icon: li('slack.png'), start:2018, lv:3 },
    { icon: si('jira'), start:2023, lv:2 },
    { icon: si('clickup'), start:2025, lv:3 },
  ]},
];

const grid = document.getElementById('sw-grid');
cats.forEach(cat => {
  const div = document.createElement('div');
  div.className = 'sw-category';
  div.innerHTML = `<div class="sw-cat-title">${cat.title}</div>` +
    cat.items.map(p => `
      <div class="sw-program">
        <span class="line-left"></span>
        <span class="line-right"></span>
        <span class="line-top-right"></span>
        <span class="line-bot-left"></span>
        <div class="sw-icon">${p.icon}</div>
        <span class="sw-years">${y(p.start)}</span>
        ${cubos(p.lv)}
      </div>`).join('');
  grid.appendChild(div);
});

// Estela del cursor en línea
/*
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
let lastMove = 0;

document.addEventListener('mousemove', (e) => {
  points.push({ x: e.clientX, y: e.clientY });
  if (points.length > MAX_POINTS) points.shift();
  lastMove = Date.now();
});

function drawTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const elapsed = Date.now() - lastMove;

  if (elapsed < 300 && points.length > 1) {
    const fade = Math.max(0, 1 - elapsed / 300);

    for (let i = 1; i < points.length; i++) {
      const t = i / points.length;
      ctx.beginPath();
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = `rgba(255, 0, 170, ${t * 0.8 * fade})`;
      ctx.lineWidth = t * 3;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  requestAnimationFrame(drawTrail);
}

drawTrail();
*/


// Proyectos
const proyectos = [
  { id:0, src:'https://img.youtube.com/vi/hOsRPem3IS4/mqdefault.jpg', titulo:'Fabrica en UE', tag:'Unreal Engine', desc:'Fabrica hecha en UE para probar cinemáticas, partículas y diseño de niveles. Este proyecto fue una practica personal para tener un mejor dominio del motor, saber colocar objetos algo mas complicados y poder probar las cinematicas usando key-frames', link:null, btnText:null, video:'hOsRPem3IS4' },
  { id:1, src:'https://img.youtube.com/vi/0jvF_cyfhf0/mqdefault.jpg', titulo:'Video Recopilación', tag:'Recopliación', desc:'Recopilación de proyectos de JAMs, cortos y pequeños proyectos creados antes del 2024.', link:null, btnText:null },
  { id:2, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 3', tag:'Game Jam', desc:'Descripción del proyecto 3.', link:null, btnText:null },
  { id:3, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 4', tag:'Diseño', desc:'Descripción del proyecto 4.', link:null, btnText:null },
  { id:4, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 5', tag:'Puzzle', desc:'Descripción del proyecto 5.', link:null, btnText:null },
  { id:5, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 6', tag:'Jam', desc:'Descripción del proyecto 6.', link:null, btnText:null },
  { id:6, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 7', tag:'Construct', desc:'Descripción del proyecto 7.', link:null, btnText:null },
  { id:7, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 8', tag:'Unity', desc:'Descripción del proyecto 8.', link:null, btnText:null },
  { id:8, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 9', tag:'Game Maker', desc:'Descripción del proyecto 9.', link:null, btnText:null },
  { id:9, src:'imagenes/proyecto1.jpg', titulo:'Proyecto 10', tag:'Diseño de mesa', desc:'Descripción del proyecto 10.', link:null, btnText:null },
];

let activeProyecto = null;
const projGrid = document.getElementById('proj-grid');

function renderProyectos() {
  projGrid.innerHTML = '';
  proyectos.forEach((p) => {
    const col = proyectos.indexOf(p) % 5;
    const isActive = activeProyecto === p.id;
    const isRight = col >= 3;

    const item = document.createElement('div');
    item.className = 'proj-item' + (isActive ? ' expanded' : '');
    item.innerHTML = `
      ${isActive && p.video
        ? `<iframe src="https://www.youtube.com/embed/${p.video}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:100%;height:100%;position:absolute;top:0;left:0;"></iframe>`
        : `<img src="${p.src}" alt="${p.titulo}" />`
      }
      ${!isActive ? '<div class="overlay"><div class="overlay-icon">+</div></div>' : ''}
    `;
    item.addEventListener('click', () => {
      activeProyecto = activeProyecto === p.id ? null : p.id;
      renderProyectos();
      if (activeProyecto !== null) {
        setTimeout(() => {
          const info = document.querySelector('.proj-info');
          if (info) info.classList.add('visible');
        }, 50);
      }
    });

    const info = document.createElement('div');
    info.className = 'proj-info';
    info.innerHTML = `
      <button class="proj-close">X</button>
      <div class="proj-tag">[ ${p.tag} ]</div>
      <div class="proj-name">${p.titulo}</div>
      <div class="proj-desc">${p.desc}</div>
      ${p.link && p.btnText ? `<div class="proj-btn-wrap"><a href="${p.link}" target="_blank" class="proj-btn">${p.btnText}</a></div>` : '<div class="proj-btn-wrap"></div>'}
    `;

    if (isActive && isRight) {
      projGrid.appendChild(info);
      projGrid.appendChild(item);
    } else {
      projGrid.appendChild(item);
      if (isActive) projGrid.appendChild(info);
    }
  });

  const closeBtn = document.querySelector('.proj-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeProyecto = null;
      renderProyectos();
    });
  }

  if (activeProyecto !== null) {
    setTimeout(() => {
      const info = document.querySelector('.proj-info');
      if (info) info.classList.add('visible');
    }, 50);
  }
}
renderProyectos();
