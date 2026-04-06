const year = new Date().getFullYear();
const y = s => Math.max(1, year - s) + ' años';
const di = name => `<i class="devicon-${name}"></i>`;
const si = name => `<img src="https://cdn.simpleicons.org/${name}" width="22" height="22">`;

const cats = [
  { title:'// Google', items:[
    { icon: si('googleforms'), start:2023, d:true },
    { icon: si('googlesheets'), start:2021, d:true },
    { icon: si('googledrive'), start:2019, d:true },
    { icon: si('googledocs'), start:2019, d:true },
    { icon: si('googleslides'), start:2020, d:true },
    { icon: si('google'), start:2024, d:false },
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
    { icon: si('canva'), start:2021, d:true },
    { icon: di('figma-plain'), start:2023, d:true },
    { icon: si('notion'), start:2022, d:true },
    { icon: si('pureref'), start:2024, d:false },
    { icon: si('filmora'), start:2021, d:true },
    { icon: si('autodesk'), start:2022, d:false },
  ]},
  { title:'// Microsoft', items:[
    { icon: si('microsoftword'), start:2017, d:true },
    { icon: si('microsoftexcel'), start:2019, d:true },
    { icon: si('microsoftpowerpoint'), start:2018, d:true },
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
    { icon: si('slack'), start:2024, d:true },
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
