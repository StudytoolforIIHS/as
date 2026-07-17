// =============================================
// BALLOON TD 6 - GAME ENGINE
// =============================================

// ---------- PERSISTENT PROFILE ----------
const SAVE_KEY = 'btd6_profile';
let profile = { monkeyMoney: 0, upgrades: {} };

function loadProfile() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) profile = Object.assign(profile, JSON.parse(raw));
  } catch(e) {}
  if (!profile.upgrades) profile.upgrades = {};
  refreshMenuMM();
}
function saveProfile() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(profile)); } catch(e) {}
  refreshMenuMM();
}
function refreshMenuMM() {
  const el = document.getElementById('menu-mm');
  if (el) el.textContent = Math.floor(profile.monkeyMoney).toLocaleString();
}
function upLevel(id) { return profile.upgrades[id] || 0; }
function upValue(id) {
  const def = SHOP_UPGRADES.find(u => u.id === id);
  return def ? upLevel(id) * def.per : 0;
}

// ---------- GAME STATE ----------
let G = null;
let PATH_POINTS = [];
let OBSTACLES = [];
let canvasW = 0, canvasH = 0;
let animFrameId = null;
let lastTime = 0;
let nextId = 1;
const uid = () => nextId++;

let pendingDifficulty = 'normal';
let pendingMap = 'monkey_meadow';
let pendingHero = null;

// ---------- PATH HELPERS ----------
function buildPath(mapKey, w, h) {
  const map = MAPS[mapKey];
  return map.path.map(p => ({x: p[0]*w, y: p[1]*h}));
}
function buildObstacles(mapKey, w, h) {
  const map = MAPS[mapKey];
  return (map.obstacles||[]).map(o => ({x:o.x*w, y:o.y*h, r:o.r*Math.min(w,h), type:o.type}));
}
function getTotalPathLen(pts) {
  let len = 0;
  for (let i=0;i<pts.length-1;i++){ const dx=pts[i+1].x-pts[i].x, dy=pts[i+1].y-pts[i].y; len+=Math.sqrt(dx*dx+dy*dy); }
  return len;
}
function getPathPos(t, pts) {
  const segs = [];
  for (let i=0;i<pts.length-1;i++){ const dx=pts[i+1].x-pts[i].x, dy=pts[i+1].y-pts[i].y; segs.push(Math.sqrt(dx*dx+dy*dy)); }
  const total = segs.reduce((a,b)=>a+b,0);
  let dist = t*total;
  for (let i=0;i<segs.length;i++){
    if (dist<=segs[i]){ const f=dist/segs[i]; return {x:pts[i].x+f*(pts[i+1].x-pts[i].x), y:pts[i].y+f*(pts[i+1].y-pts[i].y)}; }
    dist-=segs[i];
  }
  const last = pts[pts.length-1];
  return {x:last.x, y:last.y};
}

// 3D Line-of-sight: does the segment from (x1,y1)->(x2,y2) pass through an obstacle?
function lineBlocked(x1,y1,x2,y2) {
  for (const o of OBSTACLES) {
    // distance from circle center to segment
    const dx = x2-x1, dy = y2-y1;
    const len2 = dx*dx+dy*dy;
    let t = len2 === 0 ? 0 : ((o.x-x1)*dx + (o.y-y1)*dy)/len2;
    t = Math.max(0, Math.min(1, t));
    const px = x1+t*dx, py = y1+t*dy;
    const ddx = o.x-px, ddy = o.y-py;
    if (ddx*ddx+ddy*ddy < o.r*o.r) return true;
  }
  return false;
}

// ---------- SCREEN NAV ----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToDifficulty() {
  buildDifficultyGrid();
  showScreen('difficulty-screen');
}

function buildDifficultyGrid() {
  const grid = document.getElementById('difficulty-grid');
  grid.innerHTML = '';
  ['easy','normal','hard','impossible'].forEach(key => {
    const d = DIFFICULTIES[key];
    const card = document.createElement('div');
    card.className = 'sel-card';
    card.innerHTML = `
      <div class="difficulty-badge" style="background:${d.color};color:#000;">${d.name.toUpperCase()}</div>
      <span class="sel-icon" style="margin-top:1rem;">${key==='easy'?'🟢':key==='normal'?'🔵':key==='hard'?'🟠':'🔴'}</span>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <p style="margin-top:0.4rem;color:${d.color};">Reward x${d.reward}</p>`;
    card.onclick = () => { pendingDifficulty = key; buildMapGrid(false); showScreen('map-screen'); };
    grid.appendChild(card);
  });
}

function buildMapGrid(sandbox) {
  const grid = document.getElementById(sandbox ? 'sandbox-map-grid' : 'map-grid');
  grid.innerHTML = '';
  Object.keys(MAPS).forEach(key => {
    const m = MAPS[key];
    const card = document.createElement('div');
    card.className = 'sel-card';
    card.innerHTML = `
      <canvas class="map-preview" width="200" height="90" id="prev-${sandbox?'sb-':''}${key}"></canvas>
      <h3>${m.name}</h3>
      <p>${m.difficulty}${m.obstacles.length? ' · '+m.obstacles.length+' obstacle(s)':''}</p>`;
    card.onclick = () => {
      pendingMap = key;
      if (sandbox) { pendingDifficulty='sandbox'; pendingHero=null; startGame(); }
      else { buildHeroGrid(); showScreen('hero-screen'); }
    };
    grid.appendChild(card);
    setTimeout(()=>drawMapPreview(`prev-${sandbox?'sb-':''}${key}`, m), 0);
  });
}

function drawMapPreview(canvasId, m) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.fillStyle = m.bg; ctx.fillRect(0,0,c.width,c.height);
  ctx.strokeStyle = m.pathColor; ctx.lineWidth = 8; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath();
  m.path.forEach((p,i)=>{ const x=p[0]*c.width, y=p[1]*c.height; i?ctx.lineTo(x,y):ctx.moveTo(x,y); });
  ctx.stroke();
  (m.obstacles||[]).forEach(o=>{
    ctx.fillStyle = o.type==='tree'?'#1e5631':o.type==='log'?'#5a3a20':'#555';
    ctx.beginPath(); ctx.arc(o.x*c.width, o.y*c.height, o.r*Math.min(c.width,c.height), 0, Math.PI*2); ctx.fill();
  });
}

let selectedHeroId = null;
function buildHeroGrid() {
  const grid = document.getElementById('hero-grid');
  grid.innerHTML = '';
  selectedHeroId = null;
  // "No hero" option
  const noneCard = document.createElement('div');
  noneCard.className = 'sel-card';
  noneCard.innerHTML = `<span class="sel-icon">🚫</span><h3>No Hero</h3><p>Play without a hero this game.</p>`;
  noneCard.onclick = () => selectHeroCard(null, noneCard);
  grid.appendChild(noneCard);

  HERO_DEFS.forEach(h => {
    const card = document.createElement('div');
    card.className = 'sel-card';
    card.innerHTML = `
      <div class="price-tag">$${h.cost}</div>
      <span class="sel-icon" style="color:${h.color};">${h.icon}</span>
      <h3 style="color:${h.color};">${h.name}</h3>
      <p>${h.desc}</p>
      <p style="margin-top:0.3rem;color:var(--hero);font-size:0.66rem;">✦ ${h.special}</p>`;
    card.onclick = () => selectHeroCard(h.id, card);
    grid.appendChild(card);
  });
}
function selectHeroCard(id, card) {
  document.querySelectorAll('#hero-grid .sel-card').forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  selectedHeroId = id;
}
function confirmHeroAndStart() {
  pendingHero = selectedHeroId;
  startGame();
}

// ---------- START / QUIT ----------
function createGameState() {
  const d = DIFFICULTIES[pendingDifficulty];
  const startCash = d.cash + (pendingDifficulty==='sandbox'?0:upValue('startCash'));
  const startLives = d.lives + (pendingDifficulty==='sandbox'?0:upValue('startLives'));
  return {
    difficulty: pendingDifficulty, diff: d,
    mapKey: pendingMap,
    heroId: pendingHero,
    heroPlaced: false,
    round: 1, lives: startLives, cash: startCash,
    towers: [], enemies: [], projectiles: [], visuals: [],
    spawnQueue: [], spawnTimer: 0, spawnInterval: 0.35,
    waveActive: false, waveComplete: false, gameOver: false, won: false,
    speed: 1, selectedTower: null, placingTower: null,
    totalKills: 0, cashEarned: 0,
    autostart: false,
    sandbox: pendingDifficulty === 'sandbox',
    aceAngle: 0,
    mmEarnedThis: 0,
  };
}

function startGame() {
  G = createGameState();
  showScreen('game-screen');
  initCanvas();
  buildShop();
  document.getElementById('hud-mode').textContent = G.diff.name.toUpperCase();
  document.getElementById('hud-mode').style.color = G.diff.color;
  document.getElementById('sandbox-toggle-btn').style.display = G.sandbox ? 'inline-block' : 'none';
  if (G.sandbox) buildSandboxButtons();
  document.getElementById('gameover-overlay').classList.remove('show');
  updateHUD();
  lastTime = performance.now();
  if (animFrameId) cancelAnimationFrame(animFrameId);
  loop();
}

function quitGame() {
  if (animFrameId) { cancelAnimationFrame(animFrameId); animFrameId = null; }
  G = null;
  document.getElementById('sandbox-panel').classList.remove('show');
  showScreen('menu-screen');
}

function initCanvas() {
  const canvas = document.getElementById('game-canvas');
  const wrap = document.getElementById('canvas-wrap');
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight;
  canvasW = canvas.width; canvasH = canvas.height;
  PATH_POINTS = buildPath(G.mapKey, canvasW, canvasH);
  OBSTACLES = buildObstacles(G.mapKey, canvasW, canvasH);
  if (!canvas._bound) {
    canvas.addEventListener('click', onCanvasClick);
    canvas.addEventListener('mousemove', onCanvasMouseMove);
    canvas.addEventListener('contextmenu', e => { e.preventDefault(); if (G) { G.placingTower=null; deselectTower(); } });
    canvas._bound = true;
  }
}

// ---------- TOWERS ----------
function getAllDefs() { return TOWER_DEFS; }
function getDefById(id) {
  return TOWER_DEFS.find(d=>d.id===id) || HERO_DEFS.find(h=>h.id===id);
}

function towerCost(def) {
  if (def.hero) return def.cost;
  const disc = G.sandbox ? 0 : upValue('discount');
  return Math.round(def.cost * (1 - disc));
}

function createTower(def, x, y, isHero=false) {
  const t = {
    id: uid(), defId: def.id, def, x, y, isHero,
    upgradeLevels: [0,0,0],
    totalCost: isHero ? def.cost : towerCost(def),
    fireTimer: 0, target: null, targeting: 'first',
    heroLevel: isHero ? 1 : 0, heroXP: 0, heroAbilityCd: 0,
    sacBonus: 0, // adora
  };
  recomputeTowerStats(t);
  return t;
}

function recomputeTowerStats(t) {
  const def = t.def;
  t.range = def.range; t.fireRate = def.fireRate; t.damage = def.damage;
  t.pierce = def.pierce||1; t.numProjectiles = def.numProjectiles||1;
  t.explodeRadius = def.explodeRadius||0; t.freezeRadius = def.freezeRadius||def.range;
  t.freezeDuration = def.freezeDuration||0; t.slowDuration = def.slowDuration||0;
  t.slowFactor = def.slowFactor||1; t.camo = def.camo||false; t.lead = def.lead||false;
  t.moabDamage = def.moabDamage||1; t.dot = def.dot||0; t.dotInterval = def.dotInterval||1;
  t.roundIncome = def.roundIncome||0; t.buffAllies = def.buffAllies||false;
  t.isExplosive = def.isExplosive||false; t.isFreeze = def.isFreeze||false;
  t.isGlue = def.isGlue||false; t.isFarm = def.isFarm||false; t.isVillage = def.isVillage||false;
  t.isSpike = def.isSpike||false; t.multiTarget = def.multiTarget||false;
  t.stun = 0;
  t.villageSpeed = 1; t.villageCamo=false; t.villageLead=false;
  t.projectileSpeed = def.projectileSpeed; t.projectileRadius = def.projectileRadius;

  let rangeMul=1, frMul=1, expMul=1, fRadMul=1, fDurMul=1, slowDurMul=1;

  if (!t.isHero && def.upgrades) {
    for (let pi=0; pi<def.upgrades.length; pi++) {
      const lv = t.upgradeLevels[pi];
      for (let li=0; li<lv; li++) {
        const e = def.upgrades[pi].levels[li].effect;
        if (e.pierce!==undefined) t.pierce = e.pierce;
        if (e.damage!==undefined) t.damage = e.damage;
        if (e.rangeMul!==undefined) rangeMul*=e.rangeMul;
        if (e.fireRateMul!==undefined) frMul*=e.fireRateMul;
        if (e.numProjectiles!==undefined) t.numProjectiles = e.numProjectiles;
        if (e.explodeRadiusMul!==undefined) expMul*=e.explodeRadiusMul;
        if (e.freezeRadiusMul!==undefined) fRadMul*=e.freezeRadiusMul;
        if (e.freezeDurationMul!==undefined) fDurMul*=e.freezeDurationMul;
        if (e.slowDurationMul!==undefined) slowDurMul*=e.slowDurationMul;
        if (e.camo) t.camo=true;
        if (e.lead) t.lead=true;
        if (e.moabDmg!==undefined) t.moabDamage=e.moabDmg;
        if (e.slowFactor!==undefined) t.slowFactor=e.slowFactor;
        if (e.dot!==undefined) t.dot=e.dot;
        if (e.dotInterval!==undefined) t.dotInterval=e.dotInterval;
        if (e.explodeRadius!==undefined) { t.explodeRadius=e.explodeRadius; t.isExplosive=true; }
        if (e.roundIncome!==undefined) t.roundIncome=e.roundIncome;
        if (e.buffAllies) t.buffAllies=true;
        if (e.stun!==undefined) t.stun=e.stun;
        if (e.isGlue) t.isGlue=true;
        if (e.villageSpeed!==undefined) t.villageSpeed=e.villageSpeed;
        if (e.villageCamo) t.villageCamo=true;
        if (e.villageLead) t.villageLead=true;
        if (e.slowDuration!==undefined) t.slowDuration=e.slowDuration;
      }
    }
  }

  // Hero level scaling
  if (t.isHero) {
    const L = t.heroLevel;
    frMul *= (1 + (L-1)*0.05);
    t.damage = def.damage + Math.floor((L-1)/3);
    t.pierce = (def.pierce||1) + Math.floor((L-1)/2);
    rangeMul *= (1 + (L-1)*0.02);
    t.roundIncome = (def.roundIncome||0) * (1 + (L-1)*0.4);
    if (def.heroKind==='quincy' && L>=3) t.camo=true;
    if (def.heroKind==='gwendolin' && L>=5) t.lead=true;
    if (def.heroKind==='ezili') { t.lead=true; }
    if (def.heroKind==='adora') { t.damage += t.sacBonus; }
    if (def.heroKind==='etienne' && L>=def.globalCamoLvl) t.camo=true;
  }

  // Global permanent upgrades
  if (!t.isHero || true) {
    const gDmg = G && !G.sandbox ? upValue('towerDmg') : 0;
    const gSpd = G && !G.sandbox ? upValue('towerSpeed') : 0;
    t.damage = Math.max(t.damage, 0) * (1 + gDmg);
    frMul *= (1 + gSpd);
  }

  t.range = def.range * rangeMul;
  t.fireRate = def.fireRate * frMul;
  t.explodeRadius = (def.explodeRadius||t.explodeRadius||30) * expMul;
  t.freezeRadius = (def.freezeRadius||def.range) * fRadMul;
  t.freezeDuration = (def.freezeDuration||0) * fDurMul;
  t.slowDuration = (def.slowDuration||t.slowDuration||0) * slowDurMul;
}

// Apply village + alchemist buffs each frame (recompute buff layer)
function applyBuffs() {
  // reset buff multipliers
  for (const t of G.towers) { t._buffSpd = 1; t._buffCamo = false; t._buffLead=false; t._buffRange=1; t._buffDmg=0; }
  for (const src of G.towers) {
    if (src.isVillage) {
      for (const t of G.towers) {
        if (t === src) continue;
        const dx=t.x-src.x, dy=t.y-src.y;
        if (Math.sqrt(dx*dx+dy*dy) <= src.range) {
          t._buffSpd = Math.max(t._buffSpd, src.villageSpeed);
          if (src.villageCamo) t._buffCamo = true;
          if (src.villageLead) t._buffLead = true;
        }
      }
    }
    if (src.buffAllies) {
      for (const t of G.towers) {
        if (t === src) continue;
        const dx=t.x-src.x, dy=t.y-src.y;
        if (Math.sqrt(dx*dx+dy*dy) <= (src.range||150)) {
          t._buffSpd = Math.max(t._buffSpd, 1.3);
          t._buffDmg = Math.max(t._buffDmg, 1);
        }
      }
    }
    // Obyn buffs magic towers globally
    if (src.isHero && src.def.heroKind==='obyn') {
      for (const t of G.towers) {
        if (t.def.category === 'MAGIC') { t._buffRange = Math.max(t._buffRange, 1.15); t._buffDmg = Math.max(t._buffDmg, 1); }
      }
    }
    // Etienne global camo at level threshold
    if (src.isHero && src.def.heroKind==='etienne' && src.heroLevel>=src.def.globalCamoLvl) {
      for (const t of G.towers) t._buffCamo = true;
    }
  }
}

// ---------- CASH ----------
function spendCash(amt) { G.cash -= amt; updateHUD(); }
function gainCash(raw) {
  if (G.sandbox) { addFloat(0,0,'',''); return raw; }
  const mult = getIncomeMultiplier(G.round) * G.diff.cashMul;
  const earned = Math.max(1, Math.round(raw * mult));
  G.cash += earned; G.cashEarned += earned;
  updateHUD();
  return earned;
}

// ---------- ENEMIES ----------
let enemyIdCounter = 1;
function spawnEnemy(type, t=0) {
  const def = ENEMY_TYPES[type];
  if (!def) return;
  const pos = getPathPos(t, PATH_POINTS);
  const hpMul = G.sandbox ? 1 : G.diff.hpMul;
  const spMul = G.sandbox ? 1 : G.diff.speedMul;
  G.enemies.push({
    id: enemyIdCounter++, type, def,
    hp: def.hp*hpMul, maxHp: def.hp*hpMul,
    x: pos.x, y: pos.y, t,
    speed: def.speed*spMul, radius: def.radius,
    frozen:0, slowed:0, slowFactor:1, stun:0,
    dot:0, dotTimer:0, dotInterval:1,
  });
}

function startWave() {
  if (!G || G.waveActive || G.gameOver) return;
  doStartWave();
}
function doStartWave() {
  G.waveActive = true; G.waveComplete = false;
  document.getElementById('start-wave-btn').disabled = true;
  document.getElementById('hud-wave-status').textContent = 'ACTIVE';
  G.spawnQueue = getWaveComposition(G.round);
  G.spawnTimer = 0;
  G.spawnInterval = Math.max(0.12, 0.4 - G.round*0.002);
}

function updateWave(dt) {
  if (!G.waveActive) return;
  G.spawnTimer -= dt;
  if (G.spawnTimer<=0 && G.spawnQueue.length>0) {
    spawnEnemy(G.spawnQueue.shift());
    G.spawnTimer = G.spawnInterval;
  }
  if (G.spawnQueue.length===0 && G.enemies.length===0 && !G.waveComplete) endWave();
}

function endWave() {
  G.waveComplete = true; G.waveActive = false;

  // Round bonus + farm/income towers
  const bonus = 100 + G.round;
  if (!G.sandbox) {
    const incBoost = 1 + upValue('income');
    G.cash += Math.round(bonus * G.diff.cashMul * incBoost);
    // tower round income (farms, banks, etc.)
    for (const t of G.towers) {
      if (t.roundIncome > 0) { G.cash += Math.round(t.roundIncome * incBoost); }
      if (t.isHero && t.def.heroKind==='benjamin') { G.lives += (t.def.extraLives||1); }
    }
  }

  const prevRound = G.round;
  G.round++;
  updateHUD();

  // Win condition
  if (!G.sandbox && prevRound >= G.diff.endRound) { triggerWin(); return; }

  document.getElementById('start-wave-btn').disabled = false;
  document.getElementById('hud-wave-status').textContent = 'WAITING';
  const msg = document.getElementById('wave-msg');
  msg.textContent = `ROUND ${prevRound} CLEAR! +$${bonus}`;
  msg.style.color = ''; msg.classList.add('show');
  setTimeout(()=>msg.classList.remove('show'), 1400);

  if (G.autostart && !G.gameOver) setTimeout(()=>{ if (G && !G.waveActive && !G.gameOver) doStartWave(); }, 600);
}

function updateEnemies(dt) {
  const pathLen = getTotalPathLen(PATH_POINTS);
  const remove = [];
  for (const e of G.enemies) {
    if (e.stun>0) { e.stun-=dt; continue; }
    if (e.frozen>0) { e.frozen-=dt; if (e.frozen<0) e.frozen=0; continue; }
    const sf = e.slowed>0 ? e.slowFactor : 1;
    if (e.slowed>0) e.slowed-=dt;
    if (e.dot>0) {
      e.dotTimer-=dt;
      if (e.dotTimer<=0) { e.hp-=e.dot; e.dotTimer=e.dotInterval||1; if (e.hp<=0){ killEnemy(e); remove.push(e); continue; } }
    }
    e.t += (e.speed*sf*dt)/pathLen;
    if (e.t>=1) {
      G.lives -= Math.ceil(e.def.hp/5) * (e.def.isMoab?2:1);
      remove.push(e);
      if (G.lives<=0 && !G.gameOver) triggerGameOver();
    } else {
      const pos = getPathPos(e.t, PATH_POINTS);
      e.x=pos.x; e.y=pos.y;
    }
  }
  if (remove.length) G.enemies = G.enemies.filter(e=>!remove.includes(e));
  updateHUD();
}

function killEnemy(enemy, award=true) {
  if (enemy._dead) return;
  enemy._dead = true;
  G.enemies = G.enemies.filter(e=>e!==enemy);
  const def = enemy.def;
  if (def.spawnOn) {
    const num = def.numSpawn||1;
    for (let i=0;i<num;i++){ const off=(i-(num-1)/2)*0.003; spawnEnemy(def.spawnOn, Math.max(0, enemy.t+off)); }
  }
  if (award && !G.sandbox) {
    const earned = gainCash(def.cash);
    addFloat(enemy.x, enemy.y, '+$'+earned, '#ffd700');
  }
  G.totalKills++;
}

// ---------- TARGETING ----------
function pickTarget(tower, list) {
  if (list.length===0) return null;
  switch(tower.targeting) {
    case 'last': return list.reduce((a,b)=>a.t<b.t?a:b);
    case 'strong': return list.reduce((a,b)=>a.hp>b.hp?a:b);
    case 'close': {
      let best=list[0], bd=Infinity;
      for (const e of list){ const dx=e.x-tower.x,dy=e.y-tower.y,d=dx*dx+dy*dy; if(d<bd){bd=d;best=e;} }
      return best;
    }
    default: return list.reduce((a,b)=>a.t>b.t?a:b); // first
  }
}

function canHit(tower, e) {
  const camoOK = tower.camo || tower._buffCamo || !e.def.camo;
  if (!camoOK) return false;
  const leadOK = tower.lead || tower._buffLead || tower.isExplosive || !e.def.isLead;
  if (!leadOK) return false;
  // purple immune to magic/energy unless special (simplified: alchemist/druid/wizard can't unless lead)
  if (e.def.isPurple && tower.def && tower.def.category==='MAGIC' && !tower.lead) return false;
  return true;
}

function updateTowers(dt) {
  applyBuffs();
  for (const tower of G.towers) {
    const spdMul = (tower._buffSpd||1) * (tower.villageSpeed>1?1:1);
    tower.fireTimer -= dt * spdMul;
    if (tower.heroAbilityCd>0) tower.heroAbilityCd -= dt;
    if (tower.isFarm || tower.isVillage) continue;
    if (tower.fireTimer>0) continue;

    const effRange = tower.range * (tower._buffRange||1);

    // Freeze tower
    if (tower.isFreeze) {
      let froze=false;
      for (const e of G.enemies) {
        const dx=e.x-tower.x, dy=e.y-tower.y;
        if (Math.sqrt(dx*dx+dy*dy)<=tower.freezeRadius && canHit(tower,e) && !e.def.isMoab) {
          e.frozen=tower.freezeDuration; froze=true;
          if (tower.damage>0) e.hp-=tower.damage;
        }
      }
      if (froze){ tower.fireTimer=1/tower.fireRate; addFloat(tower.x,tower.y-20,'❄','#5dade2'); }
      continue;
    }

    // Hero melee (Sauda) - instant slash all in range
    if (tower.isHero && tower.def.melee) {
      const inRange = G.enemies.filter(e => {
        const dx=e.x-tower.x,dy=e.y-tower.y; return Math.sqrt(dx*dx+dy*dy)<=effRange && canHit(tower,e);
      });
      if (inRange.length) {
        tower.fireTimer = 1/tower.fireRate;
        let cnt=0;
        for (const e of inRange) {
          if (cnt++ >= tower.pierce) break;
          e.hp -= dmgTo(tower,e);
          G.visuals.push({type:'slash', x:e.x, y:e.y, life:0.15});
          if (e.hp<=0) killEnemy(e);
        }
      }
      continue;
    }

    // Determine target list (respecting line of sight)
    const targets = G.enemies.filter(e => {
      if (tower.def.range >= 9999 && !tower.aimCursor) {
        // infinite range towers (sniper/ace/mortar/dartling handled below)
      }
      const dx=e.x-tower.x, dy=e.y-tower.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if (dist>effRange) return false;
      if (!canHit(tower,e)) return false;
      if (lineBlocked(tower.x,tower.y,e.x,e.y)) return false; // 3D LoS
      return true;
    });
    if (targets.length===0) continue;

    tower.fireTimer = 1/tower.fireRate;
    const target = pickTarget(tower, targets);

    // Glue / slow towers
    if (tower.isGlue && tower.slowDuration>0) {
      target.slowed=tower.slowDuration; target.slowFactor=tower.slowFactor;
      if (tower.dot>0){ target.dot=tower.dot; target.dotInterval=tower.dotInterval; target.dotTimer=tower.dotInterval; }
      if (tower.damage>0) { target.hp-=tower.damage; if(target.hp<=0) killEnemy(target); }
      addFloat(target.x,target.y-10,'SLOW','#e67e22');
      continue;
    }

    // Fire projectiles
    fireProjectiles(tower, target);
  }
}

function dmgTo(tower, e) {
  let dmg = tower.damage + (tower._buffDmg||0);
  if (e.def.isMoab) dmg *= (tower.moabDamage||1);
  return dmg;
}

function fireProjectiles(tower, target) {
  const num = tower.numProjectiles||1;
  let baseAngle = Math.atan2(target.y-tower.y, target.x-tower.x);
  // Dartling aims at cursor
  if (tower.aimCursor && G.mouseX!==undefined) baseAngle = Math.atan2(G.mouseY-tower.y, G.mouseX-tower.x);
  for (let p=0;p<num;p++) {
    let angle;
    if (tower.multiTarget) angle = (p/num)*Math.PI*2 + G.aceAngle;
    else angle = baseAngle + (num>1 ? (p-(num-1)/2)*(Math.PI/14) : 0);
    G.projectiles.push({
      id:uid(), x:tower.x, y:tower.y,
      vx:Math.cos(angle)*tower.projectileSpeed, vy:Math.sin(angle)*tower.projectileSpeed,
      radius:tower.projectileRadius, damage:dmgTo(tower,target)/(tower.def.isMoab?1:1),
      rawDamage:tower.damage+(tower._buffDmg||0), moabDamage:tower.moabDamage||1,
      pierce:tower.pierce, tower, hit:new Set(),
      isExplosive:tower.isExplosive, explodeRadius:tower.explodeRadius,
      dot:tower.dot, dotInterval:tower.dotInterval, stun:tower.stun||0,
      slow:tower.isGlue?tower.slowFactor:0, slowDur:tower.slowDuration,
      color:tower.def.color, life:2.2,
    });
  }
}

function updateProjectiles(dt) {
  const remove = [];
  for (const p of G.projectiles) {
    p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=dt;
    if (p.x<-60||p.x>canvasW+60||p.y<-60||p.y>canvasH+60||p.life<=0){ remove.push(p); continue; }
    for (const e of [...G.enemies]) {
      if (p.hit.has(e.id)) continue;
      const dx=e.x-p.x, dy=e.y-p.y;
      if (Math.sqrt(dx*dx+dy*dy) < p.radius+e.radius) {
        p.hit.add(e.id);
        let dmg = p.rawDamage; if (e.def.isMoab) dmg *= p.moabDamage;
        e.hp -= dmg;
        if (p.stun>0 && e.def.isMoab) e.stun = Math.max(e.stun, p.stun*0.5);
        else if (p.stun>0) e.stun = Math.max(e.stun, p.stun);
        if (p.dot>0){ e.dot=Math.max(e.dot,p.dot); e.dotInterval=p.dotInterval; e.dotTimer=p.dotInterval; }
        if (p.slow>0){ e.slowed=p.slowDur; e.slowFactor=p.slow; }

        if (p.isExplosive) {
          G.visuals.push({type:'explosion', x:p.x, y:p.y, r:p.explodeRadius, life:0.25});
          for (const e2 of [...G.enemies]) {
            if (p.hit.has(e2.id)) continue;
            const d2x=e2.x-p.x, d2y=e2.y-p.y;
            if (Math.sqrt(d2x*d2x+d2y*d2y) < p.explodeRadius) {
              p.hit.add(e2.id);
              let dmg2=p.rawDamage; if(e2.def.isMoab) dmg2*=p.moabDamage;
              e2.hp-=dmg2;
              if (p.stun>0) e2.stun=Math.max(e2.stun, e2.def.isMoab?p.stun*0.5:p.stun);
              if (e2.hp<=0) killEnemy(e2);
            }
          }
          if (e.hp<=0) killEnemy(e);
          remove.push(p); break;
        }
        if (e.hp<=0) killEnemy(e);
        p.pierce--;
        if (p.pierce<=0){ remove.push(p); break; }
      }
    }
  }
  if (remove.length) G.projectiles = G.projectiles.filter(p=>!remove.includes(p));
}

function updateVisuals(dt) {
  for (const v of G.visuals) v.life -= dt;
  G.visuals = G.visuals.filter(v=>v.life>0);
}

// ---------- HERO ABILITY ----------
function useHeroAbility() {
  const t = G.selectedTower;
  if (!t || !t.isHero) return;
  const ab = t.def.ability;
  if (t.heroLevel < ab.lvl) return;
  if (t.heroAbilityCd > 0) return;
  t.heroAbilityCd = ab.cooldown;

  const kind = t.def.heroKind;
  if (kind==='quincy' || kind==='etienne') {
    // volley: damage many bloons
    G.enemies.slice().sort((a,b)=>b.t-a.t).slice(0,30).forEach(e=>{ e.hp -= 15*t.heroLevel/3; G.visuals.push({type:'slash',x:e.x,y:e.y,life:0.2}); if(e.hp<=0) killEnemy(e); });
  } else if (kind==='gwendolin') {
    G.enemies.forEach(e=>{ if(canHit(t,e)){ e.dot=5; e.dotInterval=0.3; e.dotTimer=0.3; }});
    addFloat(t.x,t.y-20,'🔥 FIRE!','#e67e22');
  } else if (kind==='sauda') {
    G.enemies.forEach(e=>{ e.hp -= 8*t.heroLevel/2; G.visuals.push({type:'slash',x:e.x,y:e.y,life:0.15}); if(e.hp<=0) killEnemy(e); });
  } else if (kind==='benjamin' || kind==='geraldo') {
    const amt = 500 + t.heroLevel*200;
    if (!G.sandbox) G.cash += amt;
    addFloat(t.x,t.y-20,'+$'+amt,'#ffd700');
  } else if (kind==='ezili') {
    // hex the strongest moab
    const moab = G.enemies.filter(e=>e.def.isMoab).sort((a,b)=>b.hp-a.hp)[0];
    if (moab){ moab.dot=moab.maxHp/5; moab.dotInterval=1; moab.dotTimer=1; addFloat(moab.x,moab.y,'HEXED','#8e44ad'); }
  } else if (kind==='obyn') {
    // wall of trees: damage front bloons
    G.enemies.slice().sort((a,b)=>b.t-a.t).slice(0,10).forEach(e=>{ e.hp-=50; if(e.hp<=0) killEnemy(e); });
    addFloat(t.x,t.y-20,'🌲 WALL','#27ae60');
  } else if (kind==='adora') {
    // sacrifice weakest nearby tower
    let weakest=null, wc=Infinity;
    for (const o of G.towers) {
      if (o===t || o.isHero) continue;
      const dx=o.x-t.x, dy=o.y-t.y;
      if (Math.sqrt(dx*dx+dy*dy) <= t.range*1.5 && o.totalCost<wc){ wc=o.totalCost; weakest=o; }
    }
    if (weakest) {
      G.towers = G.towers.filter(x=>x!==weakest);
      t.sacBonus += 3; t.heroXP += 200;
      recomputeTowerStats(t);
      addFloat(t.x,t.y-20,'SACRIFICE! +DMG','#f1c40f');
    } else {
      addFloat(t.x,t.y-20,'No tower nearby','#ff2244');
      t.heroAbilityCd = 2;
    }
  }
  showUpgradePanel(t);
}

function gainHeroXP(amount) {
  const hero = G.towers.find(t=>t.isHero);
  if (!hero) return;
  hero.heroXP += amount;
  const needed = hero.heroLevel * 180;
  if (hero.heroXP >= needed && hero.heroLevel < 20) {
    hero.heroXP -= needed;
    hero.heroLevel++;
    recomputeTowerStats(hero);
    addFloat(hero.x, hero.y-25, 'LVL '+hero.heroLevel, '#ff4da6');
  }
}

// ---------- GAME OVER / WIN ----------
function computeReward() {
  if (G.sandbox) return 0;
  const base = G.round * 4 + Math.floor(G.cashEarned/100);
  return Math.round(base * G.diff.reward * (1 + upValue('mmBoost')));
}
function triggerGameOver() {
  G.gameOver = true;
  const reward = computeReward();
  profile.monkeyMoney += reward; saveProfile();
  const ov = document.getElementById('gameover-overlay');
  const title = document.getElementById('gameover-title');
  title.className = 'gameover-title'; title.textContent = 'GAME OVER';
  document.getElementById('gameover-info').textContent = `Reached Round ${G.round} on ${G.diff.name} · Kills: ${G.totalKills}`;
  document.getElementById('gameover-reward').textContent = `💰 Earned ${reward} Monkey Money!`;
  ov.classList.add('show');
}
function triggerWin() {
  G.gameOver = true; G.won = true;
  const reward = Math.round(computeReward() * 1.5);
  profile.monkeyMoney += reward; saveProfile();
  const ov = document.getElementById('gameover-overlay');
  const title = document.getElementById('gameover-title');
  title.className = 'gameover-title victory-title'; title.textContent = '🏆 VICTORY!';
  document.getElementById('gameover-info').textContent = `You beat ${G.diff.name} mode! Kills: ${G.totalKills}`;
  document.getElementById('gameover-reward').textContent = `💰 Earned ${reward} Monkey Money!`;
  ov.classList.add('show');
}

// ---------- RENDER ----------
function render() {
  if (!G) return;
  const ctx = document.getElementById('game-canvas').getContext('2d');
  const map = MAPS[G.mapKey];
  ctx.clearRect(0,0,canvasW,canvasH);
  ctx.fillStyle = map.bg; ctx.fillRect(0,0,canvasW,canvasH);

  // grid
  ctx.strokeStyle='rgba(255,255,255,0.03)'; ctx.lineWidth=1;
  for (let x=0;x<canvasW;x+=40){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvasH); ctx.stroke(); }
  for (let y=0;y<canvasH;y+=40){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvasW,y); ctx.stroke(); }

  // path
  ctx.save();
  ctx.shadowColor='rgba(0,0,0,0.5)'; ctx.shadowBlur=10;
  ctx.strokeStyle='#3d2b1f'; ctx.lineWidth=50; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(PATH_POINTS[0].x,PATH_POINTS[0].y);
  for (let i=1;i<PATH_POINTS.length;i++) ctx.lineTo(PATH_POINTS[i].x,PATH_POINTS[i].y);
  ctx.stroke();
  ctx.strokeStyle=map.pathColor; ctx.lineWidth=42; ctx.stroke();
  ctx.setLineDash([8,16]); ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=38; ctx.stroke();
  ctx.setLineDash([]); ctx.restore();

  // obstacles (3D-ish blocks)
  for (const o of OBSTACLES) drawObstacle(ctx, o);

  // selected tower range
  if (G.selectedTower && !G.selectedTower.isFarm) {
    const t=G.selectedTower;
    const r = (t.range||150) * (t._buffRange||1);
    ctx.beginPath(); ctx.arc(t.x,t.y, t.isFreeze?t.freezeRadius:r, 0, Math.PI*2);
    ctx.fillStyle='rgba(0,212,255,0.05)'; ctx.fill();
    ctx.strokeStyle='rgba(0,212,255,0.3)'; ctx.lineWidth=1; ctx.stroke();
  }

  // towers
  for (const tower of G.towers) drawTower(ctx, tower);

  // projectiles
  for (const p of G.projectiles) { ctx.beginPath(); ctx.arc(p.x,p.y,p.radius,0,Math.PI*2); ctx.fillStyle=p.color; ctx.fill(); }

  // visuals
  for (const v of G.visuals) drawVisual(ctx, v);

  // enemies
  for (const e of G.enemies) drawEnemy(ctx, e);

  // placing preview
  if (G.placingTower && G.mouseX!==undefined) drawPlacingPreview(ctx);
}

function drawObstacle(ctx, o) {
  ctx.save();
  ctx.translate(o.x, o.y);
  // shadow for 3D feel
  ctx.beginPath(); ctx.ellipse(4,6,o.r,o.r*0.5,0,0,Math.PI*2); ctx.fillStyle='rgba(0,0,0,0.35)'; ctx.fill();
  if (o.type==='tree') {
    ctx.fillStyle='#3a2410'; ctx.fillRect(-4,0,8,o.r*0.6);
    ctx.beginPath(); ctx.arc(0,-o.r*0.3,o.r,0,Math.PI*2); ctx.fillStyle='#1e5631'; ctx.fill();
    ctx.beginPath(); ctx.arc(-o.r*0.4,0,o.r*0.7,0,Math.PI*2); ctx.fillStyle='#247a3f'; ctx.fill();
  } else if (o.type==='log') {
    ctx.fillStyle='#5a3a20'; ctx.beginPath(); ctx.ellipse(0,0,o.r,o.r*0.6,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#3a2410'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(0,0,o.r*0.4,0,Math.PI*2); ctx.stroke();
  } else {
    // boulder
    const grad = ctx.createRadialGradient(-o.r*0.3,-o.r*0.3,o.r*0.2, 0,0,o.r);
    grad.addColorStop(0,'#8a8a8a'); grad.addColorStop(1,'#4a4a4a');
    ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
    ctx.strokeStyle='#333'; ctx.lineWidth=2; ctx.stroke();
  }
  ctx.restore();
}

function drawTower(ctx, tower) {
  const sel = G.selectedTower===tower;
  ctx.save(); ctx.translate(tower.x,tower.y);
  ctx.beginPath(); ctx.arc(0,0,tower.isHero?20:18,0,Math.PI*2);
  ctx.fillStyle = sel?'#1a3050':'#1a2a1a';
  ctx.fill();
  ctx.strokeStyle = sel?'#00d4ff':(tower.isHero?'#ff4da6':tower.def.color);
  ctx.lineWidth = sel?3:(tower.isHero?3:2); ctx.stroke();
  ctx.font = tower.isHero?'18px serif':'16px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(tower.def.icon,0,0);
  if (tower.isHero) {
    ctx.fillStyle='#ff4da6'; ctx.font='bold 8px Orbitron,sans-serif';
    ctx.fillText('L'+tower.heroLevel, 0, 26);
  } else {
    for (let i=0;i<3;i++){
      const lvl=tower.upgradeLevels[i];
      if (lvl>0){
        const ax=Math.cos(i*Math.PI*2/3-Math.PI/2)*22, ay=Math.sin(i*Math.PI*2/3-Math.PI/2)*22;
        ctx.beginPath(); ctx.arc(ax,ay,5,0,Math.PI*2);
        ctx.fillStyle=['#00d4ff','#ff6b00','#00ff88'][i]; ctx.fill();
        ctx.fillStyle='#fff'; ctx.font='bold 7px sans-serif'; ctx.fillText(lvl,ax,ay);
      }
    }
  }
  ctx.restore();
}

function drawEnemy(ctx, e) {
  ctx.save(); ctx.translate(e.x,e.y);
  ctx.beginPath(); ctx.ellipse(2,4,e.radius,e.radius*0.4,0,0,Math.PI*2); ctx.fillStyle='rgba(0,0,0,0.3)'; ctx.fill();
  ctx.beginPath(); ctx.arc(0,0,e.radius,0,Math.PI*2);
  ctx.fillStyle = e.frozen>0?'#aaddff':(e.slowed>0?shade(e.def.color):e.def.color); ctx.fill();
  if (e.def.outline){ ctx.strokeStyle=e.def.outline; ctx.lineWidth=2; ctx.stroke(); }
  if (e.def.isRainbow){
    const cs=['#e74c3c','#e67e22','#f1c40f','#27ae60','#3498db','#8e44ad'];
    ctx.fillStyle=cs[Math.floor((Date.now()/100)%cs.length)];
    ctx.beginPath(); ctx.arc(0,0,e.radius*0.6,0,Math.PI*2); ctx.fill();
  }
  if (e.def.camo){ ctx.strokeStyle='rgba(0,255,136,0.7)'; ctx.lineWidth=2; ctx.setLineDash([3,3]); ctx.beginPath(); ctx.arc(0,0,e.radius+2,0,Math.PI*2); ctx.stroke(); ctx.setLineDash([]); }
  if (e.def.isMoab){
    ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.font=`bold ${Math.min(11,e.radius*0.5)}px monospace`;
    ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(e.def.name,0,0);
  }
  if (e.hp<e.maxHp){
    const bw=e.radius*2.5, by=-e.radius-6;
    ctx.fillStyle='#333'; ctx.fillRect(-bw/2,by,bw,3);
    ctx.fillStyle = e.hp/e.maxHp>0.5?'#27ae60':e.hp/e.maxHp>0.25?'#f39c12':'#e74c3c';
    ctx.fillRect(-bw/2,by,bw*(e.hp/e.maxHp),3);
  }
  ctx.restore();
}
function shade(hex){ return hex; }

function drawVisual(ctx, v) {
  if (v.type==='explosion'){
    ctx.beginPath(); ctx.arc(v.x,v.y,v.r*(1-v.life/0.25*0.3),0,Math.PI*2);
    ctx.fillStyle=`rgba(255,140,0,${v.life/0.25*0.5})`; ctx.fill();
  } else if (v.type==='slash'){
    ctx.strokeStyle=`rgba(255,255,255,${v.life/0.15})`; ctx.lineWidth=3;
    ctx.beginPath(); ctx.moveTo(v.x-12,v.y-12); ctx.lineTo(v.x+12,v.y+12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(v.x+12,v.y-12); ctx.lineTo(v.x-12,v.y+12); ctx.stroke();
  }
}

function drawPlacingPreview(ctx) {
  const def=G.placingTower.def;
  const ok = canPlaceAt(G.mouseX,G.mouseY);
  ctx.save(); ctx.globalAlpha=0.75; ctx.translate(G.mouseX,G.mouseY);
  if (def.range>0 && def.range<9999){
    ctx.beginPath(); ctx.arc(0,0,def.range,0,Math.PI*2);
    ctx.fillStyle='rgba(0,212,255,0.1)'; ctx.fill();
    ctx.strokeStyle='rgba(0,212,255,0.4)'; ctx.lineWidth=1; ctx.stroke();
  }
  ctx.beginPath(); ctx.arc(0,0,18,0,Math.PI*2);
  ctx.fillStyle=ok?'rgba(0,255,136,0.3)':'rgba(255,34,68,0.3)'; ctx.fill();
  ctx.strokeStyle=ok?'#00ff88':'#ff2244'; ctx.lineWidth=2; ctx.stroke();
  ctx.font='16px serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(def.icon,0,0);
  ctx.restore();
}

function canPlaceAt(x,y) {
  for (let t=0;t<=1;t+=0.004){ const pos=getPathPos(t,PATH_POINTS); const dx=pos.x-x,dy=pos.y-y; if(Math.sqrt(dx*dx+dy*dy)<35) return false; }
  for (const tower of G.towers){ const dx=tower.x-x,dy=tower.y-y; if(Math.sqrt(dx*dx+dy*dy)<40) return false; }
  for (const o of OBSTACLES){ const dx=o.x-x,dy=o.y-y; if(Math.sqrt(dx*dx+dy*dy)<o.r+18) return false; }
  if (x<10||x>canvasW-10||y<10||y>canvasH-10) return false;
  return true;
}

// ---------- FLOAT TEXT ----------
function addFloat(x,y,text,color) {
  if (!text) return;
  const wrap=document.getElementById('canvas-wrap');
  const el=document.createElement('div');
  el.className='float-text'; el.style.left=x+'px'; el.style.top=y+'px'; el.style.color=color; el.textContent=text;
  wrap.appendChild(el);
  setTimeout(()=>el.remove(),900);
}

// ---------- LOOP ----------
function loop() {
  const now=performance.now();
  const raw=(now-lastTime)/1000; lastTime=now;
  const dt=Math.min(raw,0.05)*(G?G.speed:1);
  if (G && !G.gameOver) {
    G.aceAngle += dt*1.5;
    updateWave(dt);
    updateEnemies(dt);
    updateTowers(dt);
    updateProjectiles(dt);
    updateVisuals(dt);
    // ace/heli/mortar circle motion for infinite range flyers
    moveFlyers(dt);
  }
  render();
  animFrameId=requestAnimationFrame(loop);
}

function moveFlyers(dt) {
  for (const t of G.towers) {
    if (t.def.id==='ace') {
      // circle around center
      t._ang = (t._ang||0) + dt*0.8;
      if (t._cx===undefined){ t._cx=t.x; t._cy=t.y; }
      t.x = t._cx + Math.cos(t._ang)*Math.min(canvasW,canvasH)*0.28;
      t.y = t._cy + Math.sin(t._ang)*Math.min(canvasW,canvasH)*0.28;
    }
  }
}

// ---------- INPUT ----------
function onCanvasClick(e) {
  if (!G || G.gameOver) return;
  const rect=e.target.getBoundingClientRect();
  const x=(e.clientX-rect.left)*(canvasW/rect.width);
  const y=(e.clientY-rect.top)*(canvasH/rect.height);

  if (G.placingTower) {
    if (!canPlaceAt(x,y)) return;
    const def=G.placingTower.def;
    const isHero = !!def.hero;
    const cost = isHero?def.cost:towerCost(def);
    if (!G.sandbox && G.cash<cost){ G.placingTower=null; return; }
    const tower=createTower(def,x,y,isHero);
    if (def.id==='ace'){ tower._cx=x; tower._cy=y; tower._ang=0; }
    G.towers.push(tower);
    if (isHero) G.heroPlaced=true;
    if (!G.sandbox) spendCash(cost);
    G.placingTower=null;
    buildShop();
    return;
  }

  let clicked=null;
  for (const tower of G.towers){ const dx=tower.x-x,dy=tower.y-y; if(Math.sqrt(dx*dx+dy*dy)<22){ clicked=tower; break; } }
  if (clicked){ G.selectedTower=clicked; showUpgradePanel(clicked); }
  else { G.selectedTower=null; showShopPanel(); }
}
function onCanvasMouseMove(e) {
  if (!G) return;
  const rect=e.target.getBoundingClientRect();
  G.mouseX=(e.clientX-rect.left)*(canvasW/rect.width);
  G.mouseY=(e.clientY-rect.top)*(canvasH/rect.height);
  // Heli follows cursor
  for (const t of G.towers){ if (t.def.id==='heli' && t._follow){ t.x=G.mouseX; t.y=G.mouseY; } }
}

// ---------- SHOP UI ----------
function placeTower(def) {
  if (!G || G.gameOver) return;
  const cost = def.hero?def.cost:towerCost(def);
  if (!G.sandbox && G.cash<cost) return;
  if (def.hero && G.heroPlaced) return;
  G.placingTower={def};
  G.selectedTower=null; showShopPanel();
}

function buildShop() {
  const content=document.getElementById('panel-content');
  content.innerHTML='';

  // Hero card
  if (G.heroId && !G.heroPlaced) {
    const h=HERO_DEFS.find(x=>x.id===G.heroId);
    const title=document.createElement('div'); title.className='section-title'; title.style.color='var(--hero)'; title.textContent='HERO'; content.appendChild(title);
    const card=document.createElement('div'); card.className='tower-card hero-card'; card.id='shop-'+h.id;
    card.innerHTML=`<div class="tower-card-header"><span style="font-size:1.2rem;">${h.icon}</span><span class="tower-cost">$${h.cost}</span></div>
      <div class="tower-name" style="color:var(--hero);">${h.name}</div><div class="tower-desc">${h.desc}</div>`;
    card.onclick=()=>{ if(G.sandbox||G.cash>=h.cost) placeTower(h); };
    content.appendChild(card);
  }

  const cats=['PRIMARY','MILITARY','MAGIC','SUPPORT'];
  for (const cat of cats) {
    const defs=TOWER_DEFS.filter(d=>d.category===cat);
    const title=document.createElement('div'); title.className='section-title'; title.textContent=cat; content.appendChild(title);
    for (const def of defs) {
      const cost=towerCost(def);
      const card=document.createElement('div'); card.className='tower-card'; card.id='shop-'+def.id;
      card.innerHTML=`<div class="tower-card-header"><span style="font-size:1.2rem;">${def.icon}</span><span class="tower-cost">$${cost}</span></div>
        <div class="tower-name">${def.name}</div><div class="tower-desc">${def.desc}</div>`;
      card.onclick=()=>{ if(G.sandbox||G.cash>=cost) placeTower(def); };
      content.appendChild(card);
    }
  }
  updateShopAfford();
  showShopPanel();
}

function updateShopAfford() {
  if (!G) return;
  const allDefs=[...TOWER_DEFS, ...HERO_DEFS];
  for (const def of allDefs) {
    const card=document.getElementById('shop-'+def.id);
    if (card) card.classList.toggle('cant-afford', !G.sandbox && G.cash < (def.hero?def.cost:towerCost(def)));
  }
}

function showShopPanel() {
  document.getElementById('panel-content').style.display='block';
  document.getElementById('upgrade-panel').classList.remove('visible');
}

function showUpgradePanel(tower) {
  document.getElementById('panel-content').style.display='none';
  const up=document.getElementById('upgrade-panel'); up.classList.add('visible');
  document.getElementById('upg-name').textContent = tower.def.name + (tower.isHero?` (Lvl ${tower.heroLevel})`:'');

  let stats=`DMG: ${(+tower.damage).toFixed(1)} | RNG: ${Math.round(tower.range)} | SPD: ${tower.fireRate.toFixed(2)}/s<br>Pierce: ${tower.pierce}`;
  if (tower.moabDamage>1) stats+=` | MOAB x${tower.moabDamage}`;
  if (tower.roundIncome>0) stats+=`<br>Income: +$${Math.round(tower.roundIncome)}/round`;
  if (tower.camo) stats+=` | 👁 Camo`;
  stats+=`<br>Invested: $${Math.round(tower.totalCost)}`;
  document.getElementById('upg-stats').innerHTML=stats;

  const paths=document.getElementById('upg-paths'); paths.innerHTML='';
  const abilityBtn=document.getElementById('ability-btn');

  if (tower.isHero) {
    abilityBtn.style.display='block';
    const ab=tower.def.ability;
    const ready = tower.heroLevel>=ab.lvl && tower.heroAbilityCd<=0;
    abilityBtn.disabled = !ready;
    abilityBtn.textContent = tower.heroLevel<ab.lvl ? `${ab.name} (Lvl ${ab.lvl})` : (tower.heroAbilityCd>0 ? `${ab.name} (${Math.ceil(tower.heroAbilityCd)}s)` : `⚡ ${ab.name}`);
    const info=document.createElement('div');
    info.style.cssText='font-size:0.68rem;color:var(--text-dim);line-height:1.5;';
    const need = tower.heroLevel*180;
    info.innerHTML = `<b style="color:var(--hero)">Hero levels up automatically as you play.</b><br>XP: ${Math.floor(tower.heroXP)}/${need}<br><br>✦ ${tower.def.special}<br><br>Ability: <b>${ab.name}</b> — ${ab.desc}`;
    paths.appendChild(info);
  } else {
    abilityBtn.style.display='none';
    const pathColors=['#00d4ff','#ff6b00','#00ff88'];
    // tier restriction: only 2 paths can go past tier 2, only 1 past tier 0? Simplified BTD6 rule: max one path>2, one path>0
    const tiers = tower.upgradeLevels.slice();
    for (let pi=0; pi<tower.def.upgrades.length; pi++) {
      const path=tower.def.upgrades[pi];
      const cur=tower.upgradeLevels[pi];
      const div=document.createElement('div'); div.className='upgrade-path';
      div.innerHTML=`<div class="upgrade-path-label" style="color:${pathColors[pi]};">${path.name} (${cur}/5)</div>`;
      if (cur>=path.levels.length) {
        const b=document.createElement('button'); b.className='upgrade-btn maxed'; b.textContent='✓ MAXED'; div.appendChild(b);
      } else {
        const upg=path.levels[cur];
        const b=document.createElement('button'); b.className='upgrade-btn';
        // check tier restriction
        const restricted = tierRestricted(tiers, pi, cur+1);
        b.innerHTML=`<span>${upg.name}<br><small style="color:var(--text-dim)">${upg.desc}</small></span><span class="upgrade-btn-cost">$${upg.cost}</span>`;
        if (restricted){ b.className='upgrade-btn locked-tier'; b.innerHTML=`<span>🔒 ${upg.name}<br><small>Locked (path rule)</small></span>`; b.disabled=true; }
        else { b.disabled=!G.sandbox && G.cash<upg.cost; b.onclick=()=>buyUpgrade(tower,pi,cur); }
        div.appendChild(b);
      }
      paths.appendChild(div);
    }
  }

  // targeting
  const tgt=document.getElementById('target-btn');
  tgt.style.display = (tower.isFarm||tower.isVillage) ? 'none':'block';
  tgt.textContent='TARGET: '+tower.targeting.toUpperCase();

  const disc = G.sandbox?0.7:(0.7 + upValue('sellValue'));
  document.getElementById('sell-btn').textContent=`SELL ($${Math.round(tower.totalCost*disc)})`;
}

// BTD6 rule: max 2 upgrade paths, and only one path may exceed tier 2 (crosspathing)
function tierRestricted(tiers, pi, targetTier) {
  const others = tiers.filter((_,i)=>i!==pi);
  const pathsStarted = tiers.filter((v,i)=> i!==pi && v>0).length;
  // can't have 3 paths with upgrades
  if (tiers[pi]===0 && pathsStarted>=2) return true;
  // only one path above tier 2
  if (targetTier>=3) {
    const anotherAbove2 = others.some(v=>v>=3);
    if (anotherAbove2) return true;
  }
  return false;
}

function buyUpgrade(tower, pathIndex, levelIndex) {
  const upg=tower.def.upgrades[pathIndex].levels[levelIndex];
  if (!G.sandbox && G.cash<upg.cost) return;
  if (!G.sandbox) { spendCash(upg.cost); }
  tower.totalCost += upg.cost;
  tower.upgradeLevels[pathIndex] = levelIndex+1;
  recomputeTowerStats(tower);
  showUpgradePanel(tower);
  updateShopAfford();
}

function cycleTargeting() {
  const t=G.selectedTower; if(!t) return;
  const modes=['first','last','close','strong'];
  t.targeting=modes[(modes.indexOf(t.targeting)+1)%modes.length];
  document.getElementById('target-btn').textContent='TARGET: '+t.targeting.toUpperCase();
}

function deselectTower() {
  if (!G) return;
  G.selectedTower=null; G.placingTower=null; showShopPanel();
}

function sellSelectedTower() {
  if (!G.selectedTower) return;
  const t=G.selectedTower;
  const disc = G.sandbox?0.7:(0.7+upValue('sellValue'));
  if (!G.sandbox) { G.cash += Math.round(t.totalCost*disc); }
  if (t.isHero) G.heroPlaced=false;
  G.towers=G.towers.filter(x=>x!==t);
  G.selectedTower=null;
  buildShop(); updateHUD();
}

// ---------- HUD ----------
function updateHUD() {
  if (!G) return;
  document.getElementById('hud-round').textContent = G.round;
  document.getElementById('hud-cash').textContent = G.sandbox?'∞':'$'+Math.floor(G.cash);
  document.getElementById('hud-lives').textContent = G.sandbox?'∞':Math.max(0,Math.floor(G.lives));
  document.getElementById('hud-income').textContent = G.sandbox?'—':Math.round(getIncomeMultiplier(G.round)*G.diff.cashMul*100)+'%';
  updateShopAfford();
  if (G.selectedTower) {
    // update affordability of upgrade buttons only
    document.querySelectorAll('#upg-paths .upgrade-btn:not(.maxed):not(.locked-tier)').forEach(b=>{
      const c=b.querySelector('.upgrade-btn-cost'); if(c){ const cost=parseInt(c.textContent.replace('$','')); b.disabled=!G.sandbox && G.cash<cost; }
    });
    if (G.selectedTower.isHero) {
      const ab=G.selectedTower.def.ability;
      const btn=document.getElementById('ability-btn');
      const ready=G.selectedTower.heroLevel>=ab.lvl && G.selectedTower.heroAbilityCd<=0;
      btn.disabled=!ready;
      btn.textContent = G.selectedTower.heroLevel<ab.lvl?`${ab.name} (Lvl ${ab.lvl})`:(G.selectedTower.heroAbilityCd>0?`${ab.name} (${Math.ceil(G.selectedTower.heroAbilityCd)}s)`:`⚡ ${ab.name}`);
    }
  }
}

function setSpeed(s) {
  if (!G) return; G.speed=s;
  [1,2,3].forEach(n=>document.getElementById('spd'+n).classList.toggle('active',n===s));
}

function toggleAutostart() {
  if (!G) return;
  G.autostart=!G.autostart;
  const b=document.getElementById('autostart-btn');
  b.classList.toggle('on',G.autostart);
  b.textContent = G.autostart?'AUTO ✓':'AUTO ▶';
  if (G.autostart && !G.waveActive && !G.gameOver) doStartWave();
}

// Hero XP passively grows each kill via updateHUD loop hook — simpler: grant on kill
const _origKill = killEnemy;

// ---------- SANDBOX ----------
function toggleSandboxPanel() { document.getElementById('sandbox-panel').classList.toggle('show'); }
function buildSandboxButtons() {
  const c=document.getElementById('sb-bloon-buttons'); c.innerHTML='';
  BLOON_ORDER.forEach(type=>{
    const d=ENEMY_TYPES[type];
    const b=document.createElement('button'); b.className='sb-btn';
    b.textContent=`${d.name} (${d.hp}hp)`;
    b.onclick=()=>{ for(let i=0;i<(d.isMoab?1:5);i++) spawnEnemy(type, 0.001*i); };
    c.appendChild(b);
  });
}
function sandboxSetRound() { G.round=Math.max(1,parseInt(document.getElementById('sb-round-input').value)||1); updateHUD(); }
function sandboxSpawnWave() { const comp=getWaveComposition(G.round); comp.forEach((t,i)=>setTimeout(()=>{if(G)spawnEnemy(t)}, i*80)); }
function sandboxAddCash() { G.cash+=100000; updateHUD(); }
function sandboxClearBloons() { G.enemies=[]; }
function sandboxMaxLives() { G.lives=999999; updateHUD(); }

// ---------- SAVE / LOAD (run) ----------
function switchSaveTab(tab) {
  document.getElementById('save-pane').style.display = tab==='save'?'block':'none';
  document.getElementById('load-pane').style.display = tab==='load'?'block':'none';
}
function generateSaveCode() {
  const data={ v:2, mm:profile.monkeyMoney, ups:profile.upgrades, game:null };
  if (G && !G.gameOver) {
    data.game={
      diff:G.difficulty, map:G.mapKey, hero:G.heroId, heroPlaced:G.heroPlaced,
      round:G.round, cash:Math.floor(G.cash), lives:Math.floor(G.lives),
      towers:G.towers.map(t=>({d:t.defId,x:Math.round(t.x),y:Math.round(t.y),u:t.upgradeLevels.slice(),c:Math.round(t.totalCost),h:t.isHero?1:0,hl:t.heroLevel,hx:Math.round(t.heroXP),sb:t.sacBonus,tg:t.targeting}))
    };
  }
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function loadFromSaveCode(code) {
  try { const d=JSON.parse(decodeURIComponent(escape(atob(code.trim())))); return (d && (d.v===1||d.v===2))?d:false; } catch(e){ return false; }
}
function showSaveModal() { document.getElementById('save-code-text').value=generateSaveCode(); switchSaveTab('save'); document.getElementById('save-load-modal').classList.add('show'); }
function hideSaveModal() { document.getElementById('save-load-modal').classList.remove('show'); }
function showLoadFromMenu() { document.getElementById('save-load-modal').classList.add('show'); switchSaveTab('load'); document.getElementById('load-code-input').value=''; document.getElementById('load-status').textContent=''; }
function copySaveCode() {
  const ta=document.getElementById('save-code-text'); ta.select();
  navigator.clipboard.writeText(ta.value).then(()=>{ document.getElementById('save-copy-status').textContent='✓ Copied!'; setTimeout(()=>document.getElementById('save-copy-status').textContent='',2000); });
}
function doLoadGame() {
  const code=document.getElementById('load-code-input').value.trim();
  if (!code){ document.getElementById('load-status').textContent='Enter a code.'; return; }
  const d=loadFromSaveCode(code);
  if (!d){ document.getElementById('load-status').textContent='✗ Invalid code.'; return; }
  // restore monkey money & upgrades
  if (d.mm!==undefined) profile.monkeyMoney=d.mm;
  if (d.ups) profile.upgrades=d.ups;
  saveProfile();

  if (d.game) {
    pendingDifficulty=d.game.diff||'normal'; pendingMap=d.game.map||'monkey_meadow'; pendingHero=d.game.hero||null;
    startGame();
    G.round=d.game.round; G.cash=d.game.cash; G.lives=d.game.lives; G.heroPlaced=!!d.game.heroPlaced;
    G.towers=[];
    for (const td of d.game.towers) {
      const def=getDefById(td.d); if(!def) continue;
      const t=createTower(def, td.x, td.y, !!td.h);
      t.upgradeLevels=td.u||[0,0,0]; t.totalCost=td.c||def.cost;
      t.heroLevel=td.hl||1; t.heroXP=td.hx||0; t.sacBonus=td.sb||0; t.targeting=td.tg||'first';
      if (def.id==='ace'){ t._cx=td.x; t._cy=td.y; t._ang=0; }
      recomputeTowerStats(t);
      G.towers.push(t);
    }
    buildShop(); updateHUD();
    hideSaveModal();
  } else {
    hideSaveModal();
    refreshMenuMM();
    alert('Monkey money & upgrades restored! ('+Math.floor(profile.monkeyMoney)+' MM)');
  }
}

// ---------- PERSISTENT UPGRADE SHOP ----------
function upgradeCost(u) { return Math.round(u.baseCost * Math.pow(1.6, upLevel(u.id))); }
function openUpgradeShop() {
  document.getElementById('shop-mm').textContent=Math.floor(profile.monkeyMoney).toLocaleString();
  const list=document.getElementById('upgrade-shop-list'); list.innerHTML='';
  SHOP_UPGRADES.forEach(u=>{
    const lvl=upLevel(u.id); const maxed=lvl>=u.max; const cost=upgradeCost(u);
    const cur = u.unit==='%'? Math.round(lvl*u.per*100)+'%' : u.unit==='$'? '+$'+(lvl*u.per) : '+'+(lvl*u.per)+' '+u.unit;
    const item=document.createElement('div'); item.className='up-item';
    item.innerHTML=`<div style="flex:1;"><h4>${u.name} <span style="color:var(--text-dim);font-size:0.7rem;">Lv ${lvl}/${u.max}</span></h4><p>${u.desc}</p><p style="color:var(--accent3);">Current: ${cur}</p></div>`;
    const btn=document.createElement('button');
    btn.className='btn btn-small up-buy';
    if (maxed){ btn.textContent='MAX'; btn.disabled=true; }
    else { btn.textContent='$'+cost.toLocaleString(); btn.disabled=profile.monkeyMoney<cost; btn.onclick=()=>buyPermUpgrade(u.id); }
    item.appendChild(btn);
    list.appendChild(item);
  });
}
function buyPermUpgrade(id) {
  const u=SHOP_UPGRADES.find(x=>x.id===id);
  const cost=upgradeCost(u);
  if (profile.monkeyMoney<cost || upLevel(id)>=u.max) return;
  profile.monkeyMoney-=cost; profile.upgrades[id]=upLevel(id)+1;
  saveProfile(); openUpgradeShop();
}
function closeUpgradeShop() { document.getElementById('upgrade-shop-modal').classList.remove('show'); }
// wire openUpgradeShop to show modal
const _openUp = openUpgradeShop;
openUpgradeShop = function(){ document.getElementById('upgrade-shop-modal').classList.add('show'); _openUp(); };

// ---------- RESIZE ----------
window.addEventListener('resize', ()=>{
  if (G) {
    const canvas=document.getElementById('game-canvas'), wrap=document.getElementById('canvas-wrap');
    canvas.width=wrap.clientWidth; canvas.height=wrap.clientHeight;
    canvasW=canvas.width; canvasH=canvas.height;
    PATH_POINTS=buildPath(G.mapKey,canvasW,canvasH);
    OBSTACLES=buildObstacles(G.mapKey,canvasW,canvasH);
  }
});
window.addEventListener('keydown', e=>{
  if (!G) return;
  if (e.key==='Escape'){ G.placingTower=null; if(G.selectedTower) deselectTower(); }
  if (e.key===' '){ e.preventDefault(); if(!G.waveActive && !G.gameOver) startWave(); }
});

// hero xp on kill: patch killEnemy to grant XP
(function(){
  const orig = killEnemy;
  killEnemy = function(enemy, award=true) {
    const wasMoab = enemy && enemy.def && enemy.def.isMoab;
    const cash = enemy && enemy.def ? enemy.def.cash : 0;
    orig(enemy, award);
    if (G) gainHeroXP(Math.max(1, Math.round(cash/3)));
  };
})();

// ---------- INIT ----------
loadProfile();
