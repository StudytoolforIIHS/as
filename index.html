<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Balloon Tower Defense 6</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;800&display=swap');

  :root {
    --bg: #0a0e1a;
    --panel: #111827;
    --panel2: #1a2540;
    --border: #2a3a5c;
    --accent: #00d4ff;
    --accent2: #ff6b00;
    --accent3: #00ff88;
    --danger: #ff2244;
    --text: #e2eaff;
    --text-dim: #7a90c0;
    --gold: #ffd700;
    --hero: #ff4da6;
    --shadow: 0 0 20px rgba(0,212,255,0.15);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Exo 2', sans-serif;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  .screen { display: none; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
  .screen.active { display: flex; }

  /* ===== MENU ===== */
  #menu-screen {
    flex-direction: column; align-items: center; justify-content: center;
    background: radial-gradient(ellipse at 30% 20%, #0d1f3a 0%, #0a0e1a 60%);
  }
  .menu-title {
    font-family: 'Orbitron', sans-serif; font-size: 3.5rem; font-weight: 900;
    color: var(--accent);
    text-shadow: 0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2);
    letter-spacing: 0.05em; margin-bottom: 0.1em;
    animation: pulse-title 3s ease-in-out infinite;
  }
  .menu-subtitle { font-size: 1.1rem; color: var(--text-dim); letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 1rem; }
  .mm-display {
    font-family:'Orbitron',sans-serif; color:var(--gold); font-size:1.1rem; margin-bottom:2rem;
    display:flex; align-items:center; gap:0.5rem;
  }
  @keyframes pulse-title {
    0%,100% { text-shadow: 0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2); }
    50% { text-shadow: 0 0 60px rgba(0,212,255,0.8), 0 0 100px rgba(0,212,255,0.4); }
  }
  .menu-buttons { display: flex; flex-direction: column; gap: 0.9rem; width: 320px; z-index: 1; }

  .btn {
    padding: 0.85rem 2rem; border: 2px solid var(--accent);
    background: rgba(0,212,255,0.08); color: var(--accent);
    font-family: 'Orbitron', sans-serif; font-size: 0.9rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s; clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  }
  .btn:hover { background: rgba(0,212,255,0.2); box-shadow: 0 0 20px rgba(0,212,255,0.4); transform: translateY(-2px); }
  .btn.btn-orange { border-color: var(--accent2); background: rgba(255,107,0,0.08); color: var(--accent2); }
  .btn.btn-orange:hover { background: rgba(255,107,0,0.2); box-shadow: 0 0 20px rgba(255,107,0,0.4); }
  .btn.btn-green { border-color: var(--accent3); background: rgba(0,255,136,0.08); color: var(--accent3); }
  .btn.btn-green:hover { background: rgba(0,255,136,0.2); box-shadow: 0 0 20px rgba(0,255,136,0.4); }
  .btn.btn-red { border-color: var(--danger); background: rgba(255,34,68,0.08); color: var(--danger); }
  .btn.btn-red:hover { background: rgba(255,34,68,0.2); box-shadow: 0 0 20px rgba(255,34,68,0.4); }
  .btn.btn-gold { border-color: var(--gold); background: rgba(255,215,0,0.08); color: var(--gold); }
  .btn.btn-gold:hover { background: rgba(255,215,0,0.2); box-shadow: 0 0 20px rgba(255,215,0,0.4); }
  .btn.btn-hero { border-color: var(--hero); background: rgba(255,77,166,0.08); color: var(--hero); }
  .btn.btn-hero:hover { background: rgba(255,77,166,0.2); box-shadow: 0 0 20px rgba(255,77,166,0.4); }
  .btn.btn-small { padding: 0.5rem 1rem; font-size: 0.75rem; }
  .btn.btn-full { width: 100%; }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

  /* ===== GENERIC SELECT SCREENS ===== */
  .center-screen {
    flex-direction:column; align-items:center; justify-content:center; gap:1.2rem;
    background: radial-gradient(ellipse at 70% 80%, #1a0d3a 0%, #0a0e1a 60%);
    overflow-y:auto; padding:2rem;
  }
  .screen-title { font-family:'Orbitron',sans-serif; font-size:2rem; color:var(--accent); margin-bottom:0.5rem; letter-spacing:0.05em; }
  .card-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:1rem; width:min(1100px,92vw); }
  .sel-card {
    background:var(--panel); border:1px solid var(--border); padding:1rem; cursor:pointer;
    transition:all 0.2s; position:relative;
  }
  .sel-card:hover { border-color:var(--accent); box-shadow:0 0 18px rgba(0,212,255,0.25); transform:translateY(-3px); }
  .sel-card.locked { opacity:0.55; cursor:not-allowed; }
  .sel-card.selected { border-color:var(--gold); box-shadow:0 0 18px rgba(255,215,0,0.4); }
  .sel-card h3 { font-family:'Orbitron',sans-serif; font-size:0.95rem; margin-bottom:0.4rem; color:var(--text); }
  .sel-card p { font-size:0.72rem; color:var(--text-dim); line-height:1.4; }
  .sel-card .price-tag { position:absolute; top:0.5rem; right:0.6rem; font-family:'Orbitron'; color:var(--gold); font-size:0.75rem; }
  .sel-icon { font-size:2rem; margin-bottom:0.4rem; display:block; }
  .map-preview { width:100%; height:90px; border-radius:4px; margin-bottom:0.5rem; background:#1a2a1a; }

  /* ===== GAME ===== */
  #game-screen { flex-direction: column; background: var(--bg); }
  #game-layout { display: flex; flex: 1; overflow: hidden; height: 100%; }
  #canvas-wrap { flex: 1; position: relative; overflow: hidden; }
  #game-canvas { display: block; width: 100%; height: 100%; }

  #hud-top {
    display: flex; align-items: center; gap: 1.2rem; padding: 0.5rem 1rem;
    background: var(--panel); border-bottom: 1px solid var(--border); font-size: 0.85rem;
    flex-shrink: 0; position: relative; z-index: 10;
  }
  .hud-stat { display: flex; align-items: center; gap: 0.4rem; font-family: 'Orbitron', sans-serif; }
  .hud-label { color: var(--text-dim); font-size: 0.6rem; letter-spacing: 0.1em; }
  .hud-val { color: var(--text); font-size: 0.95rem; font-weight: 700; }
  .hud-val.gold { color: var(--gold); }
  .hud-val.red { color: var(--danger); }
  .hud-val.green { color: var(--accent3); }
  .hud-sep { width: 1px; height: 30px; background: var(--border); }
  .hud-right { margin-left: auto; display: flex; gap: 0.4rem; align-items: center; }

  #right-panel { width: 232px; background: var(--panel); border-left: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; flex-shrink: 0; }
  #panel-content { flex: 1; overflow-y: auto; padding: 0.7rem; }

  .tower-card { background: var(--panel2); border: 1px solid var(--border); padding: 0.55rem; margin-bottom: 0.5rem; cursor: pointer; transition: all 0.2s; }
  .tower-card:hover { border-color: var(--accent); background: rgba(0,212,255,0.08); }
  .tower-card.selected { border-color: var(--accent); box-shadow: 0 0 10px rgba(0,212,255,0.3); }
  .tower-card.cant-afford { opacity: 0.5; cursor: not-allowed; }
  .tower-card.hero-card { border-color: var(--hero); }
  .tower-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; }
  .tower-name { font-weight: 700; font-size: 0.78rem; color: var(--text); }
  .tower-cost { font-family: 'Orbitron', sans-serif; font-size: 0.72rem; color: var(--gold); }
  .tower-desc { font-size: 0.62rem; color: var(--text-dim); line-height: 1.35; }

  #upgrade-panel { padding: 0.7rem; flex: 1; overflow-y: auto; display: none; }
  #upgrade-panel.visible { display: block; }
  .upgrade-tower-name { font-family: 'Orbitron', sans-serif; font-size: 0.9rem; color: var(--accent); margin-bottom: 0.3rem; }
  .upgrade-tower-stats { font-size: 0.68rem; color: var(--text-dim); margin-bottom: 0.7rem; line-height: 1.6; }
  .upgrade-path { margin-bottom: 0.7rem; }
  .upgrade-path-label { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.35rem; font-family: 'Orbitron', sans-serif; }
  .upgrade-btn {
    display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0.5rem;
    background: var(--bg); border: 1px solid var(--border); color: var(--text); cursor: pointer;
    font-size: 0.68rem; margin-bottom: 0.3rem; transition: all 0.15s; width: 100%; text-align: left;
  }
  .upgrade-btn:hover:not(:disabled) { border-color: var(--accent3); background: rgba(0,255,136,0.08); }
  .upgrade-btn.maxed { border-color: var(--gold); color: var(--gold); cursor: default; }
  .upgrade-btn.locked-tier { border-color:var(--danger); color:var(--text-dim); cursor:not-allowed; opacity:0.6; }
  .upgrade-btn:disabled:not(.maxed):not(.locked-tier) { opacity: 0.4; cursor: not-allowed; }
  .upgrade-btn-cost { font-family: 'Orbitron', sans-serif; color: var(--gold); font-size: 0.62rem; }
  .sell-btn { width: 100%; padding: 0.5rem; background: rgba(255,34,68,0.15); border: 1px solid var(--danger); color: var(--danger); cursor: pointer; font-size: 0.72rem; font-family: 'Orbitron', sans-serif; margin-top: 0.5rem; transition: all 0.15s; }
  .sell-btn:hover { background: rgba(255,34,68,0.3); }
  .target-btn { width:100%; padding:0.4rem; background:var(--panel2); border:1px solid var(--border); color:var(--accent); cursor:pointer; font-size:0.68rem; margin-top:0.4rem; font-family:'Orbitron',sans-serif; }
  .target-btn:hover { border-color:var(--accent); }
  .ability-btn { width:100%; padding:0.5rem; background:rgba(255,77,166,0.15); border:1px solid var(--hero); color:var(--hero); cursor:pointer; font-size:0.7rem; font-family:'Orbitron',sans-serif; margin-top:0.5rem; }
  .ability-btn:disabled { opacity:0.4; cursor:not-allowed; }
  .deselect-btn { width: 100%; padding: 0.4rem; background: transparent; border: 1px solid var(--border); color: var(--text-dim); cursor: pointer; font-size: 0.7rem; margin-top: 0.3rem; }
  .deselect-btn:hover { border-color: var(--text-dim); }

  #wave-msg {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0);
    font-family: 'Orbitron', sans-serif; font-size: 2.2rem; font-weight: 900; color: var(--accent);
    text-shadow: 0 0 30px rgba(0,212,255,0.7); pointer-events: none; z-index: 100;
    transition: transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275); white-space: nowrap; text-align:center;
  }
  #wave-msg.show { transform: translate(-50%, -50%) scale(1); }

  #gameover-overlay { display: none; position: absolute; inset: 0; background: rgba(0,0,0,0.88); z-index: 200; flex-direction: column; align-items: center; justify-content: center; gap: 1.3rem; }
  #gameover-overlay.show { display: flex; }
  .gameover-title { font-family: 'Orbitron', sans-serif; font-size: 3rem; font-weight: 900; color: var(--danger); text-shadow: 0 0 40px rgba(255,34,68,0.6); }
  .victory-title { color: var(--gold) !important; text-shadow: 0 0 40px rgba(255,215,0,0.6) !important; }

  .speed-btn { padding: 0.3rem 0.6rem; border: 1px solid var(--border); background: transparent; color: var(--text-dim); font-size: 0.75rem; cursor: pointer; transition: all 0.15s; }
  .speed-btn.active { border-color: var(--accent); color: var(--accent); background: rgba(0,212,255,0.1); }
  .speed-btn:hover { border-color: var(--accent); color: var(--accent); }
  .toggle-btn { padding: 0.35rem 0.7rem; border:1px solid var(--border); background:transparent; color:var(--text-dim); font-size:0.7rem; cursor:pointer; font-family:'Orbitron',sans-serif; }
  .toggle-btn.on { border-color:var(--accent3); color:var(--accent3); background:rgba(0,255,136,0.1); }

  .float-text { position: absolute; font-family: 'Orbitron', sans-serif; font-size: 0.75rem; font-weight: 700; pointer-events: none; animation: float-up 0.9s ease-out forwards; z-index: 50; }
  @keyframes float-up { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-40px); } }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  #panel-content, #upgrade-panel { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }

  .section-title { font-family: 'Orbitron', sans-serif; font-size: 0.62rem; color: var(--text-dim); letter-spacing: 0.15em; text-transform: uppercase; margin: 0.6rem 0 0.5rem; padding-bottom: 0.3rem; border-bottom: 1px solid var(--border); }

  /* Modal */
  .modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:1000; align-items:center; justify-content:center; }
  .modal.show { display:flex; }
  .modal-box { background:var(--panel); border:1px solid var(--border); padding:1.5rem; width:520px; max-width:95vw; max-height:90vh; overflow-y:auto; box-shadow:0 0 40px rgba(0,212,255,0.2); }
  .modal-title { font-family:'Orbitron',sans-serif; font-size:1rem; color:var(--accent); margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center; }
  .modal-close { background:transparent; border:none; color:var(--text-dim); cursor:pointer; font-size:1.2rem; }
  textarea.code-box { width:100%; height:90px; background:var(--bg); border:1px solid var(--border); color:var(--accent3); font-family:monospace; font-size:0.7rem; padding:0.5rem; resize:none; word-break:break-all; }

  /* Sandbox admin panel */
  #sandbox-panel { position:absolute; top:60px; left:10px; background:rgba(10,14,26,0.95); border:1px solid var(--hero); padding:0.8rem; width:220px; z-index:60; display:none; max-height:80%; overflow-y:auto; }
  #sandbox-panel.show { display:block; }
  #sandbox-panel h4 { font-family:'Orbitron'; font-size:0.75rem; color:var(--hero); margin-bottom:0.6rem; }
  .sb-btn { display:block; width:100%; padding:0.35rem; margin-bottom:0.3rem; background:var(--panel2); border:1px solid var(--border); color:var(--text); cursor:pointer; font-size:0.68rem; text-align:left; }
  .sb-btn:hover { border-color:var(--hero); }
  .sb-input { width:100%; padding:0.3rem; background:var(--bg); border:1px solid var(--border); color:var(--text); margin-bottom:0.4rem; font-size:0.7rem; }

  /* Shop upgrades (persistent) */
  .up-item { background:var(--panel2); border:1px solid var(--border); padding:0.7rem; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; }
  .up-item h4 { font-size:0.82rem; margin-bottom:0.2rem; }
  .up-item p { font-size:0.68rem; color:var(--text-dim); }
  .up-buy { font-family:'Orbitron'; }

  .difficulty-badge { position:absolute; top:0.5rem; left:0.6rem; font-size:0.6rem; padding:0.1rem 0.4rem; border-radius:3px; font-family:'Orbitron'; }
</style>
</head>
<body>

<!-- ============ MENU ============ -->
<div id="menu-screen" class="screen active">
  <div class="menu-title">BALLOON TD 6</div>
  <div class="menu-subtitle">Tower Defense</div>
  <div class="mm-display">💰 <span id="menu-mm">0</span> Monkey Money</div>
  <div class="menu-buttons">
    <button class="btn" onclick="goToDifficulty('normal')">⚔ Play</button>
    <button class="btn btn-hero" onclick="showScreen('sandbox-select-screen')">🧪 Sandbox</button>
    <button class="btn btn-gold" onclick="openUpgradeShop()">⬆ Upgrade Shop</button>
    <button class="btn btn-green" onclick="showLoadFromMenu()">📂 Load Save</button>
  </div>
</div>

<!-- ============ DIFFICULTY SELECT ============ -->
<div id="difficulty-screen" class="screen center-screen">
  <div class="screen-title">SELECT DIFFICULTY</div>
  <div class="card-grid" id="difficulty-grid" style="grid-template-columns:repeat(auto-fill,minmax(230px,1fr));"></div>
  <button class="btn btn-red btn-small" onclick="showScreen('menu-screen')">← BACK</button>
</div>

<!-- ============ MAP SELECT ============ -->
<div id="map-screen" class="screen center-screen">
  <div class="screen-title">SELECT MAP</div>
  <div class="card-grid" id="map-grid"></div>
  <button class="btn btn-red btn-small" onclick="showScreen('difficulty-screen')">← BACK</button>
</div>

<!-- ============ HERO SELECT ============ -->
<div id="hero-screen" class="screen center-screen">
  <div class="screen-title">SELECT YOUR HERO</div>
  <div style="font-size:0.8rem;color:var(--text-dim);">One hero can be placed per game. Choose wisely!</div>
  <div class="card-grid" id="hero-grid"></div>
  <button class="btn btn-green" id="hero-confirm-btn" onclick="confirmHeroAndStart()">▶ START GAME</button>
  <button class="btn btn-red btn-small" onclick="showScreen('map-screen')">← BACK</button>
</div>

<!-- ============ SANDBOX SETUP ============ -->
<div id="sandbox-select-screen" class="screen center-screen">
  <div class="screen-title">SANDBOX MODE</div>
  <div style="font-size:0.85rem;color:var(--text-dim);max-width:500px;text-align:center;">
    Unlimited cash & lives. Open the Admin Panel in-game to spawn any bloon, set round, and test any tower for free.
  </div>
  <div class="card-grid" id="sandbox-map-grid"></div>
  <button class="btn btn-red btn-small" onclick="showScreen('menu-screen')">← BACK</button>
</div>

<!-- ============ GAME ============ -->
<div id="game-screen" class="screen" style="flex-direction:column;">
  <div id="hud-top">
    <div class="hud-stat"><div><div class="hud-label">ROUND</div><div class="hud-val" id="hud-round">1</div></div></div>
    <div class="hud-sep"></div>
    <div class="hud-stat"><div><div class="hud-label">CASH</div><div class="hud-val gold" id="hud-cash">$650</div></div></div>
    <div class="hud-sep"></div>
    <div class="hud-stat"><div><div class="hud-label">LIVES</div><div class="hud-val red" id="hud-lives">150</div></div></div>
    <div class="hud-sep"></div>
    <div class="hud-stat"><div><div class="hud-label">INCOME</div><div class="hud-val green" id="hud-income">100%</div></div></div>
    <div class="hud-sep"></div>
    <div class="hud-stat"><div><div class="hud-label">WAVE</div><div class="hud-val" id="hud-wave-status">WAITING</div></div></div>
    <div class="hud-sep"></div>
    <div class="hud-stat"><div><div class="hud-label">MODE</div><div class="hud-val" id="hud-mode" style="color:var(--accent2);">NORMAL</div></div></div>
    <div class="hud-right">
      <button class="toggle-btn" id="autostart-btn" onclick="toggleAutostart()">AUTO ▶</button>
      <button class="speed-btn active" id="spd1" onclick="setSpeed(1)">1x</button>
      <button class="speed-btn" id="spd2" onclick="setSpeed(2)">2x</button>
      <button class="speed-btn" id="spd3" onclick="setSpeed(3)">3x</button>
      <div class="hud-sep"></div>
      <button class="btn btn-hero btn-small" id="sandbox-toggle-btn" style="display:none;" onclick="toggleSandboxPanel()">🧪 ADMIN</button>
      <button class="btn btn-green btn-small" id="start-wave-btn" onclick="startWave()">▶ START</button>
      <button class="btn btn-gold btn-small" onclick="showSaveModal()">💾 SAVE</button>
      <button class="btn btn-red btn-small" onclick="quitGame()">✕ QUIT</button>
    </div>
  </div>

  <div id="game-layout">
    <div id="canvas-wrap">
      <canvas id="game-canvas"></canvas>
      <div id="wave-msg">WAVE COMPLETE!</div>
      <div id="sandbox-panel">
        <h4>🧪 ADMIN PANEL</h4>
        <div style="font-size:0.65rem;color:var(--text-dim);margin-bottom:0.4rem;">Spawn Bloon:</div>
        <div id="sb-bloon-buttons"></div>
        <div style="font-size:0.65rem;color:var(--text-dim);margin:0.5rem 0 0.3rem;">Set Round:</div>
        <input class="sb-input" id="sb-round-input" type="number" min="1" value="1">
        <button class="sb-btn" onclick="sandboxSetRound()">Apply Round</button>
        <button class="sb-btn" onclick="sandboxSpawnWave()">Spawn Current Wave</button>
        <button class="sb-btn" onclick="sandboxAddCash()">+ $100,000</button>
        <button class="sb-btn" onclick="sandboxClearBloons()">Clear All Bloons</button>
        <button class="sb-btn" onclick="sandboxMaxLives()">Refill Lives</button>
      </div>
      <div id="gameover-overlay">
        <div id="gameover-title" class="gameover-title">GAME OVER</div>
        <div id="gameover-info" style="color:var(--text-dim);font-size:0.9rem;text-align:center;"></div>
        <div id="gameover-reward" style="color:var(--gold);font-family:'Orbitron';font-size:1rem;"></div>
        <button class="btn" onclick="quitGame()">MAIN MENU</button>
      </div>
    </div>

    <div id="right-panel">
      <div id="panel-content"></div>
      <div id="upgrade-panel">
        <button class="deselect-btn" onclick="deselectTower()">← BACK TO SHOP</button>
        <div style="margin:0.5rem 0;">
          <div class="upgrade-tower-name" id="upg-name">Tower</div>
          <div class="upgrade-tower-stats" id="upg-stats"></div>
        </div>
        <div id="upg-paths"></div>
        <button class="target-btn" id="target-btn" onclick="cycleTargeting()">TARGET: FIRST</button>
        <button class="ability-btn" id="ability-btn" style="display:none;" onclick="useHeroAbility()">ABILITY</button>
        <button class="sell-btn" id="sell-btn" onclick="sellSelectedTower()">SELL</button>
      </div>
    </div>
  </div>
</div>

<!-- SAVE / LOAD MODAL -->
<div id="save-load-modal" class="modal">
  <div class="modal-box" style="width:480px;">
    <div class="modal-title"><span>💾 SAVE / LOAD</span><button class="modal-close" onclick="hideSaveModal()">✕</button></div>
    <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
      <button id="save-tab" class="btn btn-small" style="flex:1;" onclick="switchSaveTab('save')">SAVE</button>
      <button id="load-tab" class="btn btn-small" style="flex:1;" onclick="switchSaveTab('load')">LOAD</button>
    </div>
    <div id="save-pane">
      <div style="font-size:0.75rem;color:var(--text-dim);margin-bottom:0.5rem;">Copy this code to save your run + monkey money. Auto-saved to this browser too.</div>
      <textarea id="save-code-text" class="code-box" readonly></textarea>
      <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;">
        <button class="btn btn-green btn-small" onclick="copySaveCode()">📋 COPY</button>
        <span id="save-copy-status" style="font-size:0.75rem;color:var(--accent3);"></span>
      </div>
    </div>
    <div id="load-pane" style="display:none;">
      <div style="font-size:0.75rem;color:var(--text-dim);margin-bottom:0.5rem;">Paste a save code to restore a game.</div>
      <textarea id="load-code-input" class="code-box" style="color:var(--text);" placeholder="Paste save code..."></textarea>
      <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;">
        <button class="btn btn-orange btn-small" onclick="doLoadGame()">⬇ LOAD</button>
        <span id="load-status" style="font-size:0.75rem;color:var(--danger);"></span>
      </div>
    </div>
  </div>
</div>

<!-- UPGRADE SHOP MODAL -->
<div id="upgrade-shop-modal" class="modal">
  <div class="modal-box">
    <div class="modal-title"><span>⬆ PERMANENT UPGRADES</span><button class="modal-close" onclick="closeUpgradeShop()">✕</button></div>
    <div style="font-family:'Orbitron';color:var(--gold);margin-bottom:1rem;">💰 <span id="shop-mm">0</span> Monkey Money</div>
    <div id="upgrade-shop-list" style="display:flex;flex-direction:column;gap:0.6rem;"></div>
  </div>
</div>

<script src="js/data.js"></script>
<script src="js/game.js"></script>
</body>
</html>
