// =============================================
// BALLOON TD 6 - GAME DATA
// =============================================
// ---------- DIFFICULTIES ----------
const DIFFICULTIES = {
  easy:       { name:'Easy',       cash:650, lives:200, hpMul:0.75, speedMul:0.9,  cashMul:1.15, reward:1.0, endRound:40,  color:'#2ecc71', desc:'Relaxed. Weaker bloons, more starting lives. Ends round 40.' },
  normal:     { name:'Medium',     cash:650, lives:150, hpMul:1.0,  speedMul:1.0,  cashMul:1.0,  reward:1.5, endRound:60,  color:'#3498db', desc:'The standard challenge. Ends round 60.' },
  hard:       { name:'Hard',       cash:600, lives:100, hpMul:1.35, speedMul:1.12, cashMul:0.9,  reward:2.5, endRound:80,  color:'#e67e22', desc:'Tougher bloons, fewer lives, less cash. Ends round 80.' },
  impossible: { name:'Impossible', cash:500, lives:1,   hpMul:1.8,  speedMul:1.3,  cashMul:0.8,  reward:5.0, endRound:100, color:'#e74c3c', desc:'One life. Brutal bloons. Only for masters. Ends round 100.' },
  sandbox:    { name:'Sandbox',    cash:9999999, lives:999999, hpMul:1.0, speedMul:1.0, cashMul:1.0, reward:0, endRound:99999, color:'#ff4da6', desc:'Free play & testing.' },
};

// ---------- MAPS (with 3D line-of-sight obstacles) ----------
// obstacles: {x,y,r} in normalized (0-1) coords, block projectile line-of-sight
const MAPS = {
  monkey_meadow: {
    name: 'Monkey Meadow', difficulty:'Beginner', bg:'#1f3d1f', pathColor:'#5a3d2b',
    path: [[-0.03,0.2],[0.15,0.2],[0.15,0.7],[0.35,0.7],[0.35,0.3],[0.55,0.3],[0.55,0.75],[0.75,0.75],[0.75,0.15],[1.03,0.15]],
    obstacles: [],
  },
  logs: {
    name: 'Logs', difficulty:'Beginner', bg:'#25301a', pathColor:'#4a3520',
    path: [[-0.03,0.5],[0.25,0.5],[0.25,0.2],[0.5,0.2],[0.5,0.8],[0.75,0.8],[0.75,0.4],[1.03,0.4]],
    obstacles: [{x:0.62,y:0.55,r:0.06,type:'log'}],
  },
  winding_way: {
    name: 'Winding Way', difficulty:'Intermediate', bg:'#1a2e35', pathColor:'#40352a',
    path: [[-0.03,0.15],[0.85,0.15],[0.85,0.4],[0.15,0.4],[0.15,0.65],[0.85,0.65],[0.85,0.88],[-0.03,0.88]],
    obstacles: [{x:0.5,y:0.28,r:0.05,type:'tree'},{x:0.5,y:0.52,r:0.05,type:'tree'}],
  },
  spiral: {
    name: 'Spiral', difficulty:'Intermediate', bg:'#2e1a35', pathColor:'#3a2a40',
    path: [[-0.03,0.1],[0.9,0.1],[0.9,0.9],[0.1,0.9],[0.1,0.3],[0.7,0.3],[0.7,0.7],[0.35,0.7],[0.35,0.5],[1.03,0.5]],
    obstacles: [{x:0.5,y:0.5,r:0.07,type:'boulder'}],
  },
  crossroads: {
    name: 'Cross Roads', difficulty:'Advanced', bg:'#33251a', pathColor:'#4a3520',
    path: [[0.5,-0.03],[0.5,0.35],[0.15,0.35],[0.15,0.65],[0.85,0.65],[0.85,0.35],[0.5,0.35],[0.5,1.03]],
    obstacles: [{x:0.3,y:0.5,r:0.05,type:'boulder'},{x:0.7,y:0.5,r:0.05,type:'boulder'}],
  },
  volcano: {
    name: 'Volcano', difficulty:'Expert', bg:'#301515', pathColor:'#4a2520',
    path: [[-0.03,0.5],[0.2,0.5],[0.2,0.15],[0.5,0.15],[0.5,0.85],[0.8,0.85],[0.8,0.5],[0.5,0.5],[0.5,0.35],[1.03,0.35]],
    obstacles: [{x:0.35,y:0.5,r:0.06,type:'boulder'},{x:0.65,y:0.35,r:0.05,type:'boulder'},{x:0.5,y:0.65,r:0.05,type:'tree'}],
  },
};

// ---------- HEROES ----------
const HERO_DEFS = [
  {
    id:'quincy', name:'Quincy', icon:'🏹', color:'#2ecc71', hero:true, cost:540,
    desc:'Affordable starter hero. Reliable long-range camo-popping arrows.',
    range:170, fireRate:1.1, damage:1, projectileSpeed:420, projectileRadius:5, pierce:2, camo:false,
    levelUps:[ // stats gained per level (1->20)
      {fireRate:0.06,damage:0,pierce:0.1,range:2},
    ],
    special:'At lvl 3 gains camo detection. Arrows pierce more each level.',
    ability:{ name:'Storm of Arrows', lvl:7, cooldown:20, desc:'Fires a huge volley across the screen.' },
    heroKind:'quincy',
  },
  {
    id:'gwendolin', name:'Gwendolin', icon:'🔥', color:'#e67e22', hero:true, cost:750,
    desc:'Fire specialist. Clears huge groups and buffs nearby towers with heat.',
    range:150, fireRate:1.3, damage:2, projectileSpeed:340, projectileRadius:7, pierce:3, camo:false,
    special:'Attacks deal burning DoT. Nearby towers gain +attack speed. Pops lead at lvl 5.',
    ability:{ name:'Cocktail of Fire', lvl:7, cooldown:22, desc:'Douses the track in flames, burning all bloons.' },
    heroKind:'gwendolin', dot:1, dotInterval:0.5, buffAllies:true,
  },
  {
    id:'obyn', name:'Obyn Greenfoot', icon:'🌲', color:'#27ae60', hero:true, cost:650,
    desc:'Nature hero. Heavily boosts Magic towers, especially top-path Druids.',
    range:160, fireRate:1.0, damage:2, projectileSpeed:330, projectileRadius:8, pierce:4, camo:true,
    special:'Buffs all Magic-class towers (+pierce, +range). Spawns Spirit of the Forest wolves.',
    ability:{ name:'Wall of Trees', lvl:7, cooldown:25, desc:'Summons trees that block & pop bloons.' },
    heroKind:'obyn', buffMagic:true,
  },
  {
    id:'benjamin', name:'Benjamin', icon:'💻', color:'#9b59b6', hero:true, cost:1200,
    desc:'Code Monkey. Hacks the economy for massive passive cash & bonus lives.',
    range:120, fireRate:0.5, damage:0, projectileSpeed:300, projectileRadius:4, pierce:1, camo:false,
    special:'Generates cash every round (scales with level). Adds lives. Cannot attack early.',
    ability:{ name:'Syphon Funding', lvl:7, cooldown:30, desc:'Instantly generates a large cash sum.' },
    heroKind:'benjamin', roundIncome:200, extraLives:1,
  },
  {
    id:'ezili', name:'Ezili', icon:'🔮', color:'#8e44ad', hero:true, cost:600,
    desc:'Voodoo Monkey. Hexes MOAB-class and pops all bloon types.',
    range:150, fireRate:0.9, damage:2, projectileSpeed:320, projectileRadius:7, pierce:2, camo:true,
    special:'Deals bonus damage to MOAB-class. Pops lead & purple. Applies hex DoT.',
    ability:{ name:'MOAB Hex', lvl:7, cooldown:26, desc:'Instantly destroys a MOAB-class bloon over time.' },
    heroKind:'ezili', moabDamage:3, dot:1, dotInterval:0.4,
  },
  {
    id:'sauda', name:'Sauda', icon:'⚔️', color:'#e74c3c', hero:true, cost:600,
    desc:'Swordmaster. Excels at close-range damage and solos early rounds easily.',
    range:110, fireRate:3.0, damage:2, projectileSpeed:9999, projectileRadius:0, pierce:5, camo:true,
    special:'Instant melee slashes hit all bloons in range. Devastating early game.',
    ability:{ name:'Leaping Sword', lvl:7, cooldown:18, desc:'Leaps and slices all bloons on screen.' },
    heroKind:'sauda', melee:true,
  },
  {
    id:'geraldo', name:'Geraldo', icon:'🎩', color:'#d4a017', hero:true, cost:745,
    desc:'Merchant hero. Access a unique item shop for highly versatile strategies.',
    range:150, fireRate:1.1, damage:1, projectileSpeed:350, projectileRadius:6, pierce:2, camo:false,
    special:'Sells consumable items (in his upgrade panel): sharpening stones, glue, etc. Generates cash.',
    ability:{ name:'Fantastic Saloon', lvl:7, cooldown:1, desc:'Restock the item shop.' },
    heroKind:'geraldo', roundIncome:80, itemShop:true,
  },
  {
    id:'adora', name:'Adora', icon:'☀️', color:'#f1c40f', hero:true, cost:1000,
    desc:'High Priestess. Sacrifice other towers to rapidly increase her huge damage.',
    range:165, fireRate:1.4, damage:3, projectileSpeed:400, projectileRadius:7, pierce:3, camo:false,
    special:'Very high base damage. Use ability to sacrifice a nearby tower and gain permanent XP/damage.',
    ability:{ name:'Blood Sacrifice', lvl:3, cooldown:15, desc:'Sacrifice the weakest nearby tower for big permanent damage.' },
    heroKind:'adora',
  },
  {
    id:'etienne', name:'Etienne', icon:'🛰️', color:'#1abc9c', hero:true, cost:800,
    desc:'Drone commander. Provides map-wide camo detection to ALL towers at level 8.',
    range:180, fireRate:2.0, damage:1, projectileSpeed:450, projectileRadius:4, pierce:2, camo:true,
    special:'Commands drones. At lvl 8 grants global camo detection to every tower you own.',
    ability:{ name:'UCAV', lvl:7, cooldown:24, desc:'Deploys an attack drone that strafes bloons.' },
    heroKind:'etienne', globalCamoLvl:8,
  },
];

// ---------- TOWERS (full BTD6 roster) ----------
const TOWER_DEFS = [
  // ===== PRIMARY =====
  { id:'dart', name:'Dart Monkey', icon:'🐒', color:'#8B6914', cost:200, category:'PRIMARY', desc:'Basic tower. Throws darts at bloons.', range:140, fireRate:1.2, damage:1, projectileSpeed:320, projectileRadius:5, pierce:2,
    upgrades:[
      {name:'Sharp Shots',levels:[{name:'Sharp Shots',cost:140,desc:'Pop 2 bloons',effect:{pierce:3}},{name:'Razor Sharp Shots',cost:170,desc:'Pop 4 bloons',effect:{pierce:5}},{name:'Spike-o-pult',cost:400,desc:'Large spike balls',effect:{pierce:18,damage:2,projectileRadius:10}},{name:'Juggernaut',cost:1800,desc:'Massive spike balls',effect:{pierce:100,damage:5,projectileRadius:16,lead:true}},{name:'Ultra-Juggernaut',cost:32000,desc:'Godly spike balls',effect:{pierce:300,damage:10,projectileRadius:22,lead:true}}]},
      {name:'Quick Shots',levels:[{name:'Quick Shots',cost:100,desc:'Faster attack',effect:{fireRateMul:1.33}},{name:'Very Quick Shots',cost:190,desc:'Even faster',effect:{fireRateMul:1.43}},{name:'Triple Shot',cost:500,desc:'3 darts at once',effect:{numProjectiles:3}},{name:'Super Monkey Fan Club',cost:9000,desc:'Rapid darts',effect:{numProjectiles:5,fireRateMul:2}},{name:'Plasma Monkey Fan Club',cost:18000,desc:'Plasma darts',effect:{numProjectiles:7,fireRateMul:2.5,damage:3}}]},
      {name:'Long Range',levels:[{name:'Long Range Darts',cost:100,desc:'More range',effect:{rangeMul:1.2}},{name:'Enhanced Eyesight',cost:130,desc:'Range + camo',effect:{rangeMul:1.3,camo:true}},{name:'Crossbow',cost:650,desc:'Faster longer darts',effect:{rangeMul:1.4,fireRateMul:1.5,damage:2}},{name:'Sharp Shooter',cost:1200,desc:'Crit hits',effect:{rangeMul:1.6,camo:true,fireRateMul:1.8}},{name:'Crossbow Master',cost:35000,desc:'Incredible speed',effect:{rangeMul:2,fireRateMul:5,damage:8,pierce:20}}]}
    ]},
  { id:'boomerang', name:'Boomerang Monkey', icon:'🪃', color:'#c0392b', cost:325, category:'PRIMARY', desc:'Boomerangs curve through multiple bloons.', range:150, fireRate:0.8, damage:1, projectileSpeed:300, projectileRadius:7, pierce:6,
    upgrades:[
      {name:'Improved Rangs',levels:[{name:'Improved Rangs',cost:150,desc:'More pierce',effect:{pierce:8}},{name:'Glaives',cost:200,desc:'Faster',effect:{fireRateMul:1.33}},{name:'Glaive Ricochet',cost:1000,desc:'Bounces',effect:{lead:true,pierce:16,damage:2}},{name:'MOAB Press',cost:2500,desc:'Stuns MOABs',effect:{moabDmg:5,pierce:20,damage:3}},{name:'MOAB Domination',cost:45000,desc:'Dominates MOABs',effect:{moabDmg:50,pierce:60,damage:10,fireRateMul:2}}]},
      {name:'Multiple Rangs',levels:[{name:'Multi-Target',cost:300,desc:'Throws 2',effect:{numProjectiles:2}},{name:'Bionic Boomerang',cost:800,desc:'Faster',effect:{numProjectiles:2,fireRateMul:2}},{name:'Turbo Charge',cost:1200,desc:'Ability rangs',effect:{numProjectiles:3,fireRateMul:2.5,damage:2}},{name:'Perma Charge',cost:9000,desc:'Always charged',effect:{numProjectiles:4,fireRateMul:3,damage:3,pierce:12}},{name:'Glaive Lord',cost:45000,desc:'Orbiting glaives',effect:{numProjectiles:6,fireRateMul:2,damage:15,pierce:100}}]},
      {name:'Long Range Rangs',levels:[{name:'Long Range Rangs',cost:200,desc:'Longer range',effect:{rangeMul:1.3}},{name:'Red Hot Rangs',cost:300,desc:'Pops lead',effect:{lead:true,damage:2}},{name:'Kylie Boomerang',cost:1200,desc:'Returns fast',effect:{pierce:20,damage:2,numProjectiles:2}},{name:'Glaive Ricochet',cost:5000,desc:'Bounces around',effect:{damage:5,pierce:40,numProjectiles:3}},{name:'Glaive Lord',cost:35000,desc:'Ultimate',effect:{damage:15,pierce:100,numProjectiles:4,fireRateMul:2}}]}
    ]},
  { id:'bomb', name:'Bomb Shooter', icon:'💣', color:'#2c3e50', cost:500, category:'PRIMARY', desc:'Explodes on impact. Great for clusters & Leads.', range:160, fireRate:0.6, damage:1, projectileSpeed:200, projectileRadius:8, explodeRadius:30, isExplosive:true, pierce:20,
    upgrades:[
      {name:'Bigger Bombs',levels:[{name:'Bigger Bombs',cost:350,desc:'Bigger blasts',effect:{explodeRadiusMul:1.4}},{name:'Heavy Bombs',cost:550,desc:'+damage',effect:{explodeRadiusMul:1.6,damage:2}},{name:'Really Big Bombs',cost:1200,desc:'Massive',effect:{explodeRadiusMul:2,damage:3}},{name:'Bloon Impact',cost:3000,desc:'Stuns',effect:{explodeRadiusMul:2.2,damage:4,stun:1}},{name:'Bloon Crush',cost:35000,desc:'Crushes MOABs',effect:{explodeRadiusMul:3,damage:12,moabDmg:20}}]},
      {name:'Faster Reload',levels:[{name:'Faster Reload',cost:250,desc:'Reload faster',effect:{fireRateMul:1.33}},{name:'Missile Launcher',cost:350,desc:'Faster',effect:{fireRateMul:1.5}},{name:'MOAB Mauler',cost:900,desc:'MOAB damage',effect:{fireRateMul:1.6,moabDmg:5,damage:2}},{name:'MOAB Assassin',cost:3600,desc:'Assassinates',effect:{fireRateMul:2,moabDmg:100,damage:4}},{name:'MOAB Eliminator',cost:26000,desc:'Eliminates',effect:{fireRateMul:3,moabDmg:1000,damage:10}}]},
      {name:'Extra Range',levels:[{name:'Extra Range',cost:150,desc:'More range',effect:{rangeMul:1.2}},{name:'Frag Bombs',cost:300,desc:'Fragments',effect:{rangeMul:1.3,pierce:30}},{name:'Cluster Bombs',cost:750,desc:'Clusters',effect:{rangeMul:1.4,damage:2}},{name:'Recursive Cluster',cost:2200,desc:'Chain clusters',effect:{rangeMul:1.6,damage:3,explodeRadiusMul:1.5}},{name:'Bomb Blitz',cost:45000,desc:'Blitz',effect:{rangeMul:2,damage:10,explodeRadiusMul:2,fireRateMul:2}}]}
    ]},
  { id:'tack', name:'Tack Shooter', icon:'📌', color:'#c0392b', cost:360, category:'PRIMARY', desc:'Shoots tacks in all directions.', range:100, fireRate:0.9, damage:1, projectileSpeed:280, projectileRadius:4, multiTarget:true, numProjectiles:8,
    upgrades:[
      {name:'Faster Shooting',levels:[{name:'Faster Shooting',cost:200,desc:'Faster',effect:{fireRateMul:1.33}},{name:'Even Faster',cost:200,desc:'Faster',effect:{fireRateMul:1.43}},{name:'Hot Shots',cost:600,desc:'Fire tacks',effect:{damage:2,fireRateMul:1.5,lead:true}},{name:'Ring of Fire',cost:3500,desc:'Fire ring',effect:{damage:5,fireRateMul:4,pierce:50,lead:true}},{name:'Inferno Ring',cost:45000,desc:'Inferno',effect:{damage:20,fireRateMul:6,pierce:200,lead:true}}]},
      {name:'Extra Range',levels:[{name:'Extra Range Tacks',cost:100,desc:'Range',effect:{rangeMul:1.15}},{name:'Super Range',cost:150,desc:'Range',effect:{rangeMul:1.3}},{name:'Blade Shooter',cost:900,desc:'Blades',effect:{rangeMul:1.4,pierce:8,damage:2}},{name:'Blade Maelstrom',cost:3000,desc:'Blade storm',effect:{rangeMul:1.6,pierce:20,damage:5,fireRateMul:2}},{name:'Super Maelstrom',cost:30000,desc:'Ultimate',effect:{rangeMul:1.8,pierce:40,damage:12,fireRateMul:4}}]},
      {name:'More Tacks',levels:[{name:'More Tacks',cost:150,desc:'10 tacks',effect:{numProjectiles:10}},{name:'Even More Tacks',cost:200,desc:'12 tacks',effect:{numProjectiles:12}},{name:'Tack Sprayer',cost:400,desc:'16 tacks',effect:{numProjectiles:16}},{name:'Overdrive',cost:2200,desc:'Overdrive',effect:{numProjectiles:20,fireRateMul:2}},{name:'The Tack Zone',cost:25000,desc:'Tack Zone',effect:{numProjectiles:32,fireRateMul:3,damage:3}}]}
    ]},
  { id:'iceP', name:'Ice Monkey', icon:'🧊', color:'#5dade2', cost:500, category:'PRIMARY', desc:'Freezes bloons in range.', range:110, fireRate:0.35, damage:0, freezeDuration:1.5, freezeRadius:110, isFreeze:true, projectileSpeed:999, projectileRadius:0,
    upgrades:[
      {name:'Permafrost',levels:[{name:'Permafrost',cost:200,desc:'Slows after',effect:{}},{name:'Cold Snap',cost:300,desc:'More power',effect:{}},{name:'Ice Shards',cost:1000,desc:'Shards',effect:{freezeRadiusMul:1.2}},{name:'Embrittlement',cost:2000,desc:'Vulnerable',effect:{freezeDurationMul:1.5,damage:1}},{name:'Super Brittle',cost:25000,desc:'Massive',effect:{freezeDurationMul:3,freezeRadiusMul:1.5,damage:3}}]},
      {name:'Enhanced Freeze',levels:[{name:'Enhanced Freeze',cost:200,desc:'Longer',effect:{freezeDurationMul:1.5}},{name:'Deep Freeze',cost:300,desc:'Longer',effect:{freezeDurationMul:2}},{name:'Arctic Wind',cost:1500,desc:'Slow aura',effect:{freezeRadiusMul:1.4}},{name:'Snowstorm',cost:3000,desc:'Screen freeze',effect:{freezeDurationMul:2.5,freezeRadiusMul:1.6}},{name:'Absolute Zero',cost:26000,desc:'Global',effect:{freezeDurationMul:4,freezeRadiusMul:2}}]},
      {name:'Larger Radius',levels:[{name:'Larger Radius',cost:100,desc:'Bigger',effect:{freezeRadiusMul:1.2}},{name:'Re-Freeze',cost:150,desc:'Refreeze',effect:{}},{name:'Cryo Cannon',cost:400,desc:'Larger',effect:{freezeRadiusMul:1.5}},{name:'Icicles',cost:1200,desc:'Icicles',effect:{freezeRadiusMul:1.8,damage:2}},{name:'Icicle Impale',cost:2500,desc:'Impale',effect:{freezeRadiusMul:2,damage:5}}]}
    ]},
  { id:'glue', name:'Glue Gunner', icon:'🫙', color:'#e67e22', cost:275, category:'PRIMARY', desc:'Slows bloons with sticky glue.', range:145, fireRate:0.7, damage:0, slowFactor:0.5, slowDuration:3.0, isGlue:true, projectileSpeed:280, projectileRadius:6, pierce:1,
    upgrades:[
      {name:'Glue Soak',levels:[{name:'Glue Soak',cost:170,desc:'Soaks layers',effect:{pierce:2}},{name:'Corrosive Glue',cost:300,desc:'Acid',effect:{dot:1,dotInterval:1}},{name:'Bloon Dissolver',cost:1400,desc:'Dissolves',effect:{dot:2,dotInterval:0.5}},{name:'Bloon Liquefier',cost:3500,desc:'Liquefies',effect:{dot:5,dotInterval:0.3}},{name:'The Bloon Solver',cost:30000,desc:'Solver',effect:{dot:12,dotInterval:0.1,pierce:999}}]},
      {name:'Bigger Globs',levels:[{name:'Bigger Globs',cost:200,desc:'More hits',effect:{pierce:3}},{name:'Glue Splatter',cost:500,desc:'Splatter',effect:{pierce:6,explodeRadius:20}},{name:'Glue Hose',cost:1600,desc:'Fast',effect:{fireRateMul:3,pierce:15}},{name:'Glue Strike',cost:4000,desc:'MOAB glue',effect:{fireRateMul:3,pierce:20,moabDmg:2}},{name:'Glue Storm',cost:15000,desc:'Storm',effect:{fireRateMul:5,pierce:40,explodeRadius:40}}]},
      {name:'Stronger Glue',levels:[{name:'Stickier Glue',cost:100,desc:'Lasts',effect:{slowDurationMul:1.5}},{name:'Slow-Setting',cost:200,desc:'Lasts more',effect:{slowDurationMul:2}},{name:'Relentless Glue',cost:500,desc:'Reapplies',effect:{slowDurationMul:3}},{name:'Super Glue',cost:1800,desc:'Stops bloons',effect:{slowFactor:0.1,slowDurationMul:4}},{name:'Bloon Glue',cost:22000,desc:'Permanent',effect:{slowFactor:0.05,dot:5,dotInterval:0.2}}]}
    ]},
  // ===== MILITARY =====
  { id:'sniper', name:'Sniper Monkey', icon:'🎯', color:'#27ae60', cost:350, category:'MILITARY', desc:'Infinite range. High damage priority sniping.', range:9999, fireRate:0.4, damage:2, projectileSpeed:9999, projectileRadius:4, pierce:1,
    upgrades:[
      {name:'Full Metal Jacket',levels:[{name:'Full Metal Jacket',cost:350,desc:'Pops lead',effect:{damage:4,lead:true}},{name:'Large Calibre',cost:400,desc:'+dmg',effect:{damage:6}},{name:'Deadly Precision',cost:1000,desc:'MOAB dmg',effect:{damage:10,moabDmg:3}},{name:'Maim MOAB',cost:3000,desc:'Slows MOABs',effect:{damage:14,moabDmg:5,stun:0.5}},{name:'Cripple MOAB',cost:32000,desc:'Cripples',effect:{damage:40,moabDmg:15,stun:2}}]},
      {name:'Night Vision',levels:[{name:'Night Vision Goggles',cost:250,desc:'Camo',effect:{camo:true}},{name:'Shrapnel Shot',cost:350,desc:'Shrapnel',effect:{pierce:3}},{name:'Bouncing Bullet',cost:1000,desc:'Bounces',effect:{pierce:5}},{name:'Supply Drop',cost:8500,desc:'Cash drops',effect:{pierce:6,roundIncome:300}},{name:'Elite Sniper',cost:14000,desc:'Elite',effect:{fireRateMul:3,damage:20,pierce:10}}]},
      {name:'Semi-Automatic',levels:[{name:'Faster Firing',cost:200,desc:'Faster',effect:{fireRateMul:1.3}},{name:'Even Faster',cost:300,desc:'Faster',effect:{fireRateMul:1.5}},{name:'Semi-Automatic',cost:1500,desc:'Semi-auto',effect:{fireRateMul:2.5}},{name:'Full Auto Rifle',cost:5000,desc:'Full auto',effect:{fireRateMul:4}},{name:'Elite Defender',cost:15000,desc:'Elite defense',effect:{fireRateMul:8,damage:10}}]}
    ]},
  { id:'sub', name:'Monkey Sub', icon:'🚤', color:'#2980b9', cost:325, category:'MILITARY', desc:'Reveals camo, decimates MOABs.', range:160, fireRate:1.4, damage:1, projectileSpeed:340, projectileRadius:5, pierce:2,
    upgrades:[
      {name:'Barbed Darts',levels:[{name:'Longer Range',cost:100,desc:'Range',effect:{rangeMul:1.2}},{name:'Advanced Intel',cost:500,desc:'Screen range',effect:{rangeMul:5,camo:true}},{name:'Barbed Darts',cost:800,desc:'Pierce',effect:{pierce:6,damage:2}},{name:'Heat-tipped Darts',cost:1500,desc:'Lead',effect:{lead:true,damage:3,pierce:8}},{name:'Submerge & Support',cost:6000,desc:'Support',effect:{fireRateMul:2,damage:5}}]},
      {name:'Ballistic Missile',levels:[{name:'Twin Guns',cost:400,desc:'Twin',effect:{fireRateMul:1.5,numProjectiles:2}},{name:'Airburst Darts',cost:550,desc:'Airburst',effect:{fireRateMul:1.7,pierce:6}},{name:'Ballistic Missile',cost:1200,desc:'Missiles',effect:{damage:3,explodeRadius:25,isExplosive:true}},{name:'First Strike',cost:18000,desc:'First strike',effect:{moabDmg:1000,damage:10}},{name:'Nautic Siege',cost:45000,desc:'Siege',effect:{fireRateMul:3,damage:15,pierce:20}}]},
      {name:'Bloontonium',levels:[{name:'Bloontonium Reactor',cost:300,desc:'Aura dmg',effect:{camo:true}},{name:'Energizer',cost:900,desc:'Reactor',effect:{damage:2,pierce:5}},{name:'Reactor',cost:2500,desc:'Meltdown',effect:{damage:4,pierce:10}},{name:'Sub Commander',cost:4000,desc:'Commands',effect:{camo:true,rangeMul:2,fireRateMul:1.5}},{name:'Pre-Emptive Strike',cost:32000,desc:'Pre-emptive',effect:{fireRateMul:2,damage:8,pierce:15,moabDmg:5}}]}
    ]},
  { id:'buccaneer', name:'Monkey Buccaneer', icon:'⚓', color:'#16a085', cost:500, category:'MILITARY', desc:'Powerful ship w/ darts & grapes. Can make cash.', range:170, fireRate:1.0, damage:1, projectileSpeed:300, projectileRadius:5, pierce:2,
    upgrades:[
      {name:'Grape Shot',levels:[{name:'Faster Shooting',cost:250,desc:'Faster',effect:{fireRateMul:1.33}},{name:'Grape Shot',cost:350,desc:'Grapes',effect:{numProjectiles:5,pierce:3}},{name:'Cannon Ship',cost:1500,desc:'Cannon',effect:{damage:3,explodeRadius:20,isExplosive:true}},{name:'Monkey Pirates',cost:7000,desc:'Hook MOABs',effect:{damage:5,moabDmg:10,pierce:8}},{name:'Pirate Lord',cost:22000,desc:'Pirate Lord',effect:{damage:12,moabDmg:50,pierce:30}}]},
      {name:'Destroyer',levels:[{name:'Long Range',cost:100,desc:'Range',effect:{rangeMul:1.2}},{name:'Double Shot',cost:500,desc:'Double',effect:{fireRateMul:1.5,numProjectiles:2}},{name:'Destroyer',cost:2500,desc:'Rapid',effect:{fireRateMul:3,damage:2}},{name:'Aircraft Carrier',cost:6500,desc:'Planes',effect:{fireRateMul:4,damage:3,pierce:5}},{name:'Carrier Flagship',cost:30000,desc:'Flagship',effect:{fireRateMul:5,damage:8,pierce:15}}]},
      {name:'Merchantman',levels:[{name:'Crow\'s Nest',cost:350,desc:'Camo',effect:{camo:true,rangeMul:1.3}},{name:'Merchantman',cost:2700,desc:'+$ per round',effect:{roundIncome:200}},{name:'Favored Trades',cost:6500,desc:'+$$$',effect:{roundIncome:400,rangeMul:1.5}},{name:'Trade Empire',cost:20000,desc:'Empire',effect:{roundIncome:800,damage:5,fireRateMul:2}},{name:'Navarch of the Seas',cost:65000,desc:'Navarch',effect:{roundIncome:1500,damage:15,fireRateMul:3,pierce:20}}]}
    ]},
  { id:'ace', name:'Monkey Ace', icon:'✈️', color:'#8e44ad', cost:800, category:'MILITARY', desc:'Circles the map shredding bloons from the sky.', range:9999, fireRate:1.0, damage:1, projectileSpeed:360, projectileRadius:5, pierce:2, multiTarget:true, numProjectiles:8,
    upgrades:[
      {name:'Rapid Fire',levels:[{name:'Rapid Fire',cost:400,desc:'Faster',effect:{fireRateMul:1.5}},{name:'Lots More Darts',cost:350,desc:'+darts',effect:{numProjectiles:10}},{name:'Fighter Plane',cost:1700,desc:'Fighter',effect:{fireRateMul:2,damage:2}},{name:'Operation Dart Storm',cost:7500,desc:'Storm',effect:{fireRateMul:3,numProjectiles:16,damage:3}},{name:'Sky Shredder',cost:25000,desc:'Shredder',effect:{fireRateMul:5,numProjectiles:24,damage:6}}]},
      {name:'Neva-Miss',levels:[{name:'Exploding Pineapple',cost:200,desc:'Bombs',effect:{explodeRadius:25,isExplosive:true}},{name:'Spy Plane',cost:500,desc:'Camo',effect:{camo:true}},{name:'Bomber Ace',cost:2000,desc:'Bomber',effect:{damage:3,explodeRadius:40,isExplosive:true}},{name:'Ground Zero',cost:24000,desc:'Nuke',effect:{damage:10,explodeRadius:80,moabDmg:20}},{name:'Tsar Bomba',cost:100000,desc:'Tsar Bomba',effect:{damage:25,explodeRadius:120,moabDmg:100,pierce:30}}]},
      {name:'Spectre',levels:[{name:'Sharper Darts',cost:350,desc:'Pierce',effect:{pierce:4}},{name:'Centered Path',cost:250,desc:'Faster',effect:{fireRateMul:1.3}},{name:'Neva-Miss Targeting',cost:2000,desc:'Homing',effect:{pierce:6,damage:2}},{name:'Spectre',cost:24000,desc:'Gunship',effect:{fireRateMul:2,damage:5,pierce:8,numProjectiles:20}},{name:'Flying Fortress',cost:100000,desc:'Fortress',effect:{fireRateMul:4,damage:15,pierce:30,numProjectiles:30}}]}
    ]},
  { id:'heli', name:'Heli Pilot', icon:'🚁', color:'#d35400', cost:1600, category:'MILITARY', desc:'Highly mobile. Follows cursor or locks in place.', range:200, fireRate:1.2, damage:1, projectileSpeed:320, projectileRadius:5, pierce:2, numProjectiles:2,
    upgrades:[
      {name:'Quad Darts',levels:[{name:'Quad Darts',cost:700,desc:'4 darts',effect:{numProjectiles:4}},{name:'Pursuit',cost:500,desc:'Faster',effect:{fireRateMul:1.3}},{name:'Razor Rotors',cost:2500,desc:'Rotors',effect:{damage:3,pierce:6}},{name:'Apache Dartship',cost:12000,desc:'Apache',effect:{fireRateMul:2,damage:5,numProjectiles:6}},{name:'Apache Prime',cost:45000,desc:'Prime',effect:{fireRateMul:4,damage:12,numProjectiles:8,pierce:8}}]},
      {name:'Bigger Jets',levels:[{name:'Bigger Jets',cost:350,desc:'Faster',effect:{fireRateMul:1.2}},{name:'IFR',cost:450,desc:'Camo',effect:{camo:true}},{name:'Downdraft',cost:2000,desc:'Push',effect:{fireRateMul:1.5,damage:2}},{name:'Support Chinook',cost:8000,desc:'Support',effect:{fireRateMul:2,damage:4,roundIncome:200}},{name:'Special Poperations',cost:35000,desc:'Special ops',effect:{fireRateMul:3,damage:10,numProjectiles:6}}]},
      {name:'Comanche',levels:[{name:'Lots of Guns',cost:500,desc:'Guns',effect:{damage:2}},{name:'MOAB Shove',cost:600,desc:'Push MOABs',effect:{damage:2,moabDmg:2}},{name:'Comanche Defense',cost:6000,desc:'Mini helis',effect:{fireRateMul:2,damage:4}},{name:'Comanche Commander',cost:35000,desc:'Commander',effect:{fireRateMul:3,damage:8,numProjectiles:10}},{name:'Comanche Fortress',cost:70000,desc:'Fortress',effect:{damage:15,pierce:20,fireRateMul:3,numProjectiles:12}}]}
    ]},
  { id:'mortar', name:'Mortar Monkey', icon:'🧨', color:'#7f8c8d', cost:750, category:'MILITARY', desc:'Blasts targeted areas. Great for crowded lanes.', range:9999, fireRate:0.5, damage:1, projectileSpeed:250, projectileRadius:8, explodeRadius:40, isExplosive:true, pierce:30,
    upgrades:[
      {name:'Bigger Blast',levels:[{name:'Bigger Blast',cost:350,desc:'Bigger',effect:{explodeRadiusMul:1.3}},{name:'Bloon Buster',cost:500,desc:'+dmg',effect:{damage:2,explodeRadiusMul:1.5}},{name:'Shell Shock',cost:1000,desc:'Stun',effect:{stun:1,damage:3}},{name:'The Big One',cost:5000,desc:'Big One',effect:{explodeRadiusMul:2,damage:6,pierce:60}},{name:'The Biggest One',cost:35000,desc:'Biggest',effect:{explodeRadiusMul:3,damage:20,pierce:200}}]},
      {name:'Rapid Reload',levels:[{name:'Faster Reload',cost:250,desc:'Faster',effect:{fireRateMul:1.33}},{name:'Rapid Reload',cost:300,desc:'Faster',effect:{fireRateMul:1.6}},{name:'Heavy Shells',cost:1000,desc:'Heavy',effect:{damage:3,fireRateMul:1.8}},{name:'Artillery Battery',cost:5000,desc:'Rapid',effect:{fireRateMul:3,damage:4}},{name:'Pop and Awe',cost:35000,desc:'Pop&Awe',effect:{fireRateMul:6,damage:8,explodeRadiusMul:2,stun:2}}]},
      {name:'Burny Stuff',levels:[{name:'Burny Stuff',cost:300,desc:'Burn',effect:{dot:1,dotInterval:0.5}},{name:'Bloon Buster',cost:500,desc:'Burn',effect:{dot:2,dotInterval:0.4}},{name:'Signal Flare',cost:750,desc:'Camo',effect:{camo:true,dot:2}},{name:'Shattering Shells',cost:4500,desc:'Shatter',effect:{damage:5,dot:4,pierce:50}},{name:'Blooncineration',cost:45000,desc:'Incinerate',effect:{damage:10,dot:8,dotInterval:0.1,explodeRadiusMul:2.5}}]}
    ]},
  { id:'dartling', name:'Dartling Gunner', icon:'🔫', color:'#c0392b', cost:850, category:'MILITARY', desc:'Rapid-fire gunner aimed at cursor.', range:9999, fireRate:3.0, damage:1, projectileSpeed:500, projectileRadius:4, pierce:2, aimCursor:true,
    upgrades:[
      {name:'Focused Firing',levels:[{name:'Focused Firing',cost:300,desc:'Accurate',effect:{fireRateMul:1.2}},{name:'Laser Cannon',cost:1000,desc:'Laser',effect:{damage:2,pierce:4,lead:true}},{name:'Plasma Accelerator',cost:4500,desc:'Plasma',effect:{damage:3,pierce:8}},{name:'Ray of Doom',cost:45000,desc:'Ray',effect:{damage:8,pierce:999,fireRateMul:2}},{name:'Ray of Doom Prime',cost:200000,desc:'Prime',effect:{damage:25,pierce:999,fireRateMul:4}}]},
      {name:'Hydra Rockets',levels:[{name:'Faster Barrel Spin',cost:450,desc:'Faster',effect:{fireRateMul:1.4}},{name:'Hydra Rocket Pods',cost:2500,desc:'Rockets',effect:{damage:2,explodeRadius:25,isExplosive:true,pierce:10}},{name:'Rocket Storm',cost:6000,desc:'Barrage',effect:{fireRateMul:2,damage:3,explodeRadius:35}},{name:'M.A.D.',cost:20000,desc:'MAD',effect:{fireRateMul:3,damage:6,moabDmg:20,explodeRadius:40}},{name:'M.A.D. Prime',cost:95000,desc:'Prime',effect:{fireRateMul:5,damage:12,moabDmg:200,explodeRadius:60}}]},
      {name:'Buckshot',levels:[{name:'Faster Swivel',cost:150,desc:'Faster',effect:{fireRateMul:1.15}},{name:'Powerful Darts',cost:600,desc:'Pierce',effect:{pierce:5}},{name:'Buckshot',cost:1500,desc:'Spread',effect:{numProjectiles:5,damage:2}},{name:'BADS',cost:11000,desc:'Area denial',effect:{numProjectiles:8,damage:4,pierce:10}},{name:'BADS Prime',cost:60000,desc:'Prime',effect:{numProjectiles:12,damage:15,pierce:25,moabDmg:50}}]}
    ]},
  // ===== MAGIC =====
  { id:'wizard', name:'Wizard Monkey', icon:'🧙', color:'#9b59b6', cost:450, category:'MAGIC', desc:'Arcane magic. Fireballs & strips Camo.', range:155, fireRate:0.9, damage:1, projectileSpeed:300, projectileRadius:7, pierce:2,
    upgrades:[
      {name:'Fireball',levels:[{name:'Guided Magic',cost:200,desc:'Homing',effect:{pierce:3}},{name:'Fireball',cost:400,desc:'Fireballs',effect:{damage:2,explodeRadius:20,dot:1,dotInterval:0.5}},{name:'Wall of Fire',cost:1300,desc:'Fire wall',effect:{damage:4,dot:3,dotInterval:0.3}},{name:'Dragon\'s Breath',cost:3500,desc:'Dragon',effect:{damage:6,dot:5,dotInterval:0.2,pierce:8}},{name:'Summon Phoenix',cost:30000,desc:'Phoenix',effect:{damage:15,dot:8,dotInterval:0.1,pierce:15}}]},
      {name:'Arcane Blast',levels:[{name:'Intense Magic',cost:200,desc:'Faster',effect:{fireRateMul:1.3,damage:2}},{name:'Arcane Blast',cost:1100,desc:'Blast',effect:{damage:4,pierce:5}},{name:'Arcane Mastery',cost:4000,desc:'Mastery',effect:{damage:7,pierce:8,fireRateMul:1.5}},{name:'Arcane Spike',cost:12000,desc:'Spike',effect:{damage:25,pierce:20,fireRateMul:2}},{name:'Archmage',cost:32000,desc:'Archmage',effect:{damage:50,pierce:40,fireRateMul:2.5}}]},
      {name:'Necromancer',levels:[{name:'Monkey Sense',cost:650,desc:'Camo',effect:{camo:true}},{name:'Shimmer',cost:500,desc:'Reveals',effect:{camo:true,rangeMul:1.3}},{name:'Necromancer',cost:5000,desc:'Undead',effect:{damage:3,pierce:6,rangeMul:1.5}},{name:'Prince of Darkness',cost:35000,desc:'Prince',effect:{damage:8,pierce:15,rangeMul:2,fireRateMul:1.5}},{name:'Wizard Lord',cost:120000,desc:'Wizard Lord',effect:{damage:25,pierce:40,rangeMul:2,fireRateMul:3}}]}
    ]},
  { id:'super', name:'Super Monkey', icon:'🦸', color:'#f39c12', cost:2500, category:'MAGIC', desc:'Blazing dart speed. Upgrades to Sun God & more.', range:160, fireRate:10.0, damage:1, projectileSpeed:400, projectileRadius:4, pierce:1,
    upgrades:[
      {name:'Sun Avatar',levels:[{name:'Laser Blasts',cost:2500,desc:'Lasers',effect:{damage:2,lead:true,pierce:2}},{name:'Plasma Blasts',cost:4000,desc:'Plasma',effect:{damage:4,pierce:3}},{name:'Sun Avatar',cost:20000,desc:'Sun Avatar',effect:{damage:8,pierce:6,fireRateMul:1.5,rangeMul:1.2}},{name:'Sun Temple',cost:100000,desc:'Sun Temple',effect:{damage:20,pierce:15,fireRateMul:2}},{name:'True Sun God',cost:300000,desc:'True Sun God',effect:{damage:60,pierce:40,fireRateMul:3,rangeMul:1.5}}]},
      {name:'Robo Monkey',levels:[{name:'Super Range',cost:1500,desc:'Range',effect:{rangeMul:1.2}},{name:'Epic Range',cost:2500,desc:'Range',effect:{rangeMul:1.5}},{name:'Robo Monkey',cost:8000,desc:'Robo',effect:{numProjectiles:2,fireRateMul:1.5}},{name:'Tech Terror',cost:15000,desc:'Tech',effect:{damage:5,numProjectiles:3,pierce:5}},{name:'The Anti-Bloon',cost:60000,desc:'Anti-Bloon',effect:{damage:20,numProjectiles:4,pierce:12,rangeMul:1.3}}]},
      {name:'Dark Knight',levels:[{name:'Knockback',cost:2000,desc:'Push',effect:{damage:2,pierce:2}},{name:'Ultravision',cost:1200,desc:'Camo',effect:{camo:true}},{name:'Dark Knight',cost:5000,desc:'Dark',effect:{damage:4,pierce:4,rangeMul:1.3}},{name:'Dark Champion',cost:50000,desc:'Champion',effect:{damage:12,pierce:10,rangeMul:1.5,fireRateMul:1.5}},{name:'Legend of the Night',cost:200000,desc:'Legend',effect:{damage:40,pierce:30,rangeMul:2,fireRateMul:2,camo:true}}]}
    ]},
  { id:'ninja', name:'Ninja Monkey', icon:'🥷', color:'#2c3e50', cost:500, category:'MAGIC', desc:'Fast-tracking shurikens. Sees camo.', range:145, fireRate:1.8, damage:1, projectileSpeed:350, projectileRadius:5, pierce:1, camo:true,
    upgrades:[
      {name:'Bloonjitsu',levels:[{name:'Ninja Discipline',cost:200,desc:'Faster',effect:{fireRateMul:1.33}},{name:'Sharp Shurikens',cost:300,desc:'Pierce',effect:{pierce:3}},{name:'Double Shot',cost:1200,desc:'Double',effect:{numProjectiles:2,fireRateMul:1.3}},{name:'Bloonjitsu',cost:3000,desc:'5 shurikens',effect:{numProjectiles:5,fireRateMul:1.5}},{name:'Grandmaster Ninja',cost:24000,desc:'Grandmaster',effect:{numProjectiles:10,fireRateMul:2.5,damage:4}}]},
      {name:'Flash Bomb',levels:[{name:'Distraction',cost:250,desc:'Knockback',effect:{damage:2}},{name:'Counter-Espionage',cost:400,desc:'Camo',effect:{camo:true,pierce:2}},{name:'Flash Bomb',cost:1200,desc:'Stun',effect:{stun:0.5,damage:2,explodeRadius:25}},{name:'Sticky Bomb',cost:4500,desc:'MOAB bombs',effect:{damage:5,moabDmg:60}},{name:'Master Bomber',cost:30000,desc:'Master',effect:{damage:12,pierce:20,stun:1,explodeRadius:50}}]},
      {name:'Grand Saboteur',levels:[{name:'Seeking Shuriken',cost:400,desc:'Seek',effect:{pierce:3}},{name:'Caltrops',cost:500,desc:'Caltrops',effect:{pierce:4,damage:2}},{name:'Shinobi Tactics',cost:900,desc:'Buff ninjas',effect:{fireRateMul:1.5,damage:2}},{name:'Bloon Sabotage',cost:6000,desc:'Sabotage',effect:{moabDmg:5,damage:5}},{name:'Grand Saboteur',cost:32000,desc:'Grand',effect:{moabDmg:20,damage:10,pierce:15}}]}
    ]},
  { id:'alchemist', name:'Alchemist', icon:'⚗️', color:'#e74c3c', cost:550, category:'MAGIC', desc:'Brews potions to buff monkeys or melt bloons.', range:150, fireRate:0.7, damage:2, projectileSpeed:260, projectileRadius:8, isGlue:true, slowFactor:0.7, slowDuration:2.0, pierce:3,
    upgrades:[
      {name:'Berserker Brew',levels:[{name:'Larger Potions',cost:200,desc:'Bigger',effect:{explodeRadius:20,pierce:5}},{name:'Acidic Mixture',cost:300,desc:'Acid',effect:{dot:2,dotInterval:0.5}},{name:'Berserker Brew',cost:1200,desc:'Buff allies',effect:{fireRateMul:1.3,damage:3,buffAllies:true}},{name:'Stronger Stimulant',cost:3500,desc:'Stronger',effect:{fireRateMul:1.6,damage:5,buffAllies:true}},{name:'Permanent Brew',cost:45000,desc:'Permanent',effect:{fireRateMul:2,damage:8,buffAllies:true}}]},
      {name:'Unstable Concoction',levels:[{name:'Stronger Acid',cost:300,desc:'Acid',effect:{dot:3,dotInterval:0.4}},{name:'Perishing Potions',cost:600,desc:'Explode',effect:{explodeRadius:25,dot:4}},{name:'Unstable Concoction',cost:2500,desc:'Unstable',effect:{damage:4,explodeRadius:40,dot:5}},{name:'Transforming Tonic',cost:7000,desc:'Beast',effect:{damage:8,pierce:10,dot:6}},{name:'Total Transformation',cost:45000,desc:'Total',effect:{damage:20,pierce:25,dot:10,dotInterval:0.1}}]},
      {name:'Bloon Master',levels:[{name:'Faster Throwing',cost:300,desc:'Faster',effect:{fireRateMul:1.4}},{name:'Acid Pool',cost:400,desc:'Pool',effect:{pierce:8,explodeRadius:15}},{name:'Lead to Gold',cost:1000,desc:'Lead',effect:{lead:true,damage:3}},{name:'Rubber to Gold',cost:3000,desc:'Gold',effect:{lead:true,damage:5,pierce:10,roundIncome:100}},{name:'Bloon Master Alchemist',cost:35000,desc:'Master',effect:{damage:10,pierce:20,lead:true,moabDmg:50}}]}
    ]},
  { id:'druid', name:'Druid', icon:'🌿', color:'#27ae60', cost:425, category:'MAGIC', desc:'Nature power: lightning, thorns & storms.', range:150, fireRate:1.1, damage:1, projectileSpeed:300, projectileRadius:6, pierce:2,
    upgrades:[
      {name:'Druid of Storm',levels:[{name:'Hard Thorns',cost:200,desc:'Pierce',effect:{pierce:4,damage:2}},{name:'Heart of Thunder',cost:800,desc:'Lightning',effect:{damage:3,pierce:6,dot:1,dotInterval:0.5}},{name:'Druid of the Storm',cost:2500,desc:'Storm',effect:{damage:5,rangeMul:1.4,fireRateMul:1.5}},{name:'Ball Lightning',cost:5000,desc:'Ball',effect:{damage:8,pierce:15,dot:3}},{name:'Superstorm',cost:60000,desc:'Superstorm',effect:{damage:20,pierce:30,dot:8,dotInterval:0.2,rangeMul:1.5}}]},
      {name:'Druid of the Jungle',levels:[{name:'Thorn Swarm',cost:350,desc:'Thorns',effect:{numProjectiles:4,pierce:5}},{name:'Druid of the Jungle',cost:500,desc:'Vines',effect:{isGlue:true,slowFactor:0.6,slowDuration:2}},{name:'Jungle\'s Bounty',cost:2000,desc:'Cash',effect:{damage:4,roundIncome:150}},{name:'Spirit of the Forest',cost:6000,desc:'Spirit',effect:{damage:7,pierce:12,dot:2}},{name:'Avatar of Wrath',cost:40000,desc:'Wrath',effect:{damage:18,pierce:30,fireRateMul:3,rangeMul:1.8}}]},
      {name:'Druid of the Plains',levels:[{name:'Druid of the Plains',cost:300,desc:'Camo',effect:{camo:true,damage:2}},{name:'Savage Strikes',cost:500,desc:'Strikes',effect:{damage:3,pierce:4}},{name:'Poplust',cost:2000,desc:'Buff',effect:{damage:5,pierce:8,buffAllies:true}},{name:'Bumbling Brew',cost:6000,desc:'Brew',effect:{damage:7,pierce:12,dot:2}},{name:'Avatar of the Wild',cost:30000,desc:'Wild',effect:{damage:15,pierce:25,dot:6,fireRateMul:2}}]}
    ]},
  { id:'mermonkey', name:'Mermonkey', icon:'🧜', color:'#1abc9c', cost:600, category:'MAGIC', desc:'Aquatic magic: water blasts & sonic waves.', range:165, fireRate:1.0, damage:2, projectileSpeed:300, projectileRadius:7, pierce:3,
    upgrades:[
      {name:'Sonic Blast',levels:[{name:'Sonic Blast',cost:350,desc:'Shockwave',effect:{damage:3,explodeRadius:25,pierce:5}},{name:'Deep Resonance',cost:600,desc:'Deep',effect:{damage:4,explodeRadius:35,pierce:8}},{name:'Depth Charge',cost:2000,desc:'Charge',effect:{damage:6,explodeRadius:50,pierce:15,moabDmg:5}},{name:'Tidal Surge',cost:6000,desc:'Tidal',effect:{damage:10,explodeRadius:70,pierce:25,moabDmg:12}},{name:'Leviathan',cost:35000,desc:'Leviathan',effect:{damage:25,explodeRadius:100,pierce:60,moabDmg:30}}]},
      {name:'Aqua Magic',levels:[{name:'Aqua Magic',cost:400,desc:'Camo',effect:{damage:3,pierce:5,camo:true}},{name:'Hydro Blast',cost:700,desc:'Blast',effect:{damage:5,pierce:8,fireRateMul:1.3}},{name:'Whirlpool',cost:2500,desc:'Whirlpool',effect:{damage:7,pierce:12,isGlue:true,slowFactor:0.5,slowDuration:2}},{name:'Maelstrom',cost:7000,desc:'Maelstrom',effect:{damage:12,pierce:20,fireRateMul:1.8,dot:3}},{name:'Poseidon',cost:40000,desc:'Poseidon',effect:{damage:30,pierce:50,fireRateMul:3,dot:8,dotInterval:0.1}}]},
      {name:'Amphibious',levels:[{name:'Amphibious',cost:250,desc:'Range',effect:{rangeMul:1.2,damage:2}},{name:'Tide Turner',cost:450,desc:'Turn tide',effect:{rangeMul:1.4,damage:3,fireRateMul:1.2}},{name:'Siren Song',cost:1800,desc:'Lure',effect:{rangeMul:1.6,damage:5,isGlue:true,slowFactor:0.4}},{name:'Coral\'s Wrath',cost:5000,desc:'Coral',effect:{rangeMul:1.8,damage:8,pierce:10,dot:4}},{name:'Atlantis',cost:35000,desc:'Atlantis',effect:{rangeMul:2.5,damage:20,pierce:40,camo:true,lead:true,moabDmg:15}}]}
    ]},
  // ===== SUPPORT =====
  { id:'farm', name:'Banana Farm', icon:'🍌', color:'#f1c40f', cost:1250, category:'SUPPORT', desc:'Generates cash every round. Essential economy.', range:0, fireRate:0.01, damage:0, projectileSpeed:1, projectileRadius:1, pierce:0, isFarm:true, roundIncome:80,
    upgrades:[
      {name:'Banana Plantation',levels:[{name:'Increased Production',cost:300,desc:'+$120/rnd',effect:{roundIncome:120}},{name:'Greater Production',cost:500,desc:'+$300/rnd',effect:{roundIncome:300}},{name:'Banana Plantation',cost:1500,desc:'+$700/rnd',effect:{roundIncome:700}},{name:'Banana Research',cost:8000,desc:'+$2000/rnd',effect:{roundIncome:2000}},{name:'Banana Central',cost:50000,desc:'+$6000/rnd',effect:{roundIncome:6000}}]},
      {name:'Monkey Bank',levels:[{name:'Long Life Bananas',cost:400,desc:'+$150/rnd',effect:{roundIncome:150}},{name:'Valuable Bananas',cost:700,desc:'+$450/rnd',effect:{roundIncome:450}},{name:'Monkey Bank',cost:2500,desc:'+$1000/rnd',effect:{roundIncome:1000}},{name:'IMF Loan',cost:6000,desc:'+$2000/rnd',effect:{roundIncome:2000}},{name:'Monkey-Nomics',cost:50000,desc:'+$7000/rnd',effect:{roundIncome:7000}}]},
      {name:'Marketplace',levels:[{name:'EZ Collect',cost:500,desc:'+$200/rnd',effect:{roundIncome:200}},{name:'Marketplace',cost:3000,desc:'+$800/rnd',effect:{roundIncome:800}},{name:'Central Market',cost:10000,desc:'+$2500/rnd',effect:{roundIncome:2500}},{name:'Monkey Wall Street',cost:30000,desc:'+$6000/rnd',effect:{roundIncome:6000}},{name:'Monkeyopolis',cost:100000,desc:'+$15000/rnd',effect:{roundIncome:15000}}]}
    ]},
  { id:'spike', name:'Spike Factory', icon:'🦔', color:'#e67e22', cost:1000, category:'SUPPORT', desc:'Lays spikes at track. Last line of defense.', range:80, fireRate:0.5, damage:1, projectileSpeed:80, projectileRadius:5, pierce:8, isSpike:true,
    upgrades:[
      {name:'Bigger Stacks',levels:[{name:'Bigger Stacks',cost:300,desc:'More spikes',effect:{pierce:12}},{name:'White Hot Spikes',cost:350,desc:'Lead',effect:{lead:true,pierce:14}},{name:'Spiked Balls',cost:1000,desc:'Big spikes',effect:{pierce:20,damage:2}},{name:'Spiked Mines',cost:4000,desc:'Mines',effect:{pierce:50,damage:5,explodeRadius:30}},{name:'Super Mines',cost:55000,desc:'Super',effect:{pierce:200,damage:20,explodeRadius:80}}]},
      {name:'MOAB Shredder',levels:[{name:'Faster Production',cost:200,desc:'Faster',effect:{fireRateMul:1.5}},{name:'Even Faster',cost:300,desc:'Faster',effect:{fireRateMul:2}},{name:'MOAB Shredder',cost:2500,desc:'MOAB',effect:{fireRateMul:3,moabDmg:5,damage:3}},{name:'Spike Storm',cost:5500,desc:'Storm',effect:{fireRateMul:5,pierce:30,damage:5}},{name:'Carpet of Spikes',cost:40000,desc:'Carpet',effect:{fireRateMul:8,pierce:100,damage:10}}]},
      {name:'Perma-Spike',levels:[{name:'Long Reach',cost:200,desc:'Range',effect:{rangeMul:1.3}},{name:'Long Life Spikes',cost:350,desc:'Coverage',effect:{rangeMul:1.6,pierce:12}},{name:'Perma-Spike',cost:2000,desc:'Permanent',effect:{rangeMul:2,pierce:25}},{name:'Deadly Spikes',cost:4000,desc:'Deadly',effect:{rangeMul:2.2,damage:4,pierce:40}},{name:'Perma-Spike Ultra',cost:30000,desc:'Ultra',effect:{rangeMul:3,damage:8,pierce:80}}]}
    ]},
  { id:'village', name:'Monkey Village', icon:'🏘️', color:'#8e44ad', cost:1200, category:'SUPPORT', desc:'Buffs all nearby towers: range, speed, detection.', range:200, fireRate:0.01, damage:0, projectileSpeed:1, projectileRadius:1, pierce:0, isVillage:true,
    upgrades:[
      {name:'Bigger Radius',levels:[{name:'Bigger Radius',cost:300,desc:'+range',effect:{rangeMul:1.2}},{name:'Jungle Drums',cost:700,desc:'+speed',effect:{rangeMul:1.3,villageSpeed:1.15}},{name:'Primary Training',cost:800,desc:'Primary buff',effect:{rangeMul:1.4}},{name:'Primary Mentoring',cost:2500,desc:'Mentoring',effect:{rangeMul:1.6,villageSpeed:1.2}},{name:'Primary Expertise',cost:20000,desc:'Expertise',effect:{rangeMul:2,villageSpeed:1.3}}]},
      {name:'Monkey Intelligence',levels:[{name:'Grow Blocker',cost:600,desc:'Anti-regrow',effect:{rangeMul:1.2}},{name:'Radar Scanner',cost:700,desc:'Camo aura',effect:{camo:true,villageCamo:true,rangeMul:1.3}},{name:'MIB',cost:8000,desc:'Pop all',effect:{lead:true,villageLead:true,rangeMul:1.5}},{name:'Call to Arms',cost:22000,desc:'Speed boost',effect:{villageSpeed:1.5,rangeMul:1.6}},{name:'Homeland Defense',cost:55000,desc:'Defense',effect:{villageSpeed:2,rangeMul:2}}]},
      {name:'Monkey Economy',levels:[{name:'Monkey Business',cost:500,desc:'Discount',effect:{rangeMul:1.1}},{name:'Monkey Commerce',cost:500,desc:'Cash',effect:{rangeMul:1.2,roundIncome:100}},{name:'Monkey Town',cost:3000,desc:'Cash+',effect:{rangeMul:1.3,roundIncome:300}},{name:'Monkey City',cost:10000,desc:'City',effect:{rangeMul:1.5,roundIncome:800}},{name:'Monkeyopolis',cost:50000,desc:'Opolis',effect:{rangeMul:2,roundIncome:2000}}]}
    ]},
  { id:'engineer', name:'Engineer Monkey', icon:'🔧', color:'#e67e22', cost:450, category:'SUPPORT', desc:'Builds sentries & overclocks other towers.', range:140, fireRate:0.9, damage:1, projectileSpeed:310, projectileRadius:5, pierce:1,
    upgrades:[
      {name:'Sentry Champion',levels:[{name:'Sentry Gun',cost:700,desc:'Sentries',effect:{damage:2,pierce:2}},{name:'Faster Engineering',cost:400,desc:'Faster',effect:{fireRateMul:1.4}},{name:'Sprockets',cost:350,desc:'Sprockets',effect:{damage:2,pierce:3,fireRateMul:1.5}},{name:'Sentry Expert',cost:2500,desc:'Expert',effect:{damage:4,pierce:5,fireRateMul:2}},{name:'Sentry Champion',cost:23500,desc:'Champion',effect:{damage:8,pierce:12,fireRateMul:3}}]},
      {name:'Overclock',levels:[{name:'Larger Service Area',cost:200,desc:'Range',effect:{rangeMul:1.2}},{name:'Deconstruction',cost:400,desc:'MOAB',effect:{moabDmg:5,rangeMul:1.3}},{name:'Overclock',cost:7000,desc:'Overclock',effect:{fireRateMul:1.5,rangeMul:1.5,buffAllies:true}},{name:'Ultraboost',cost:32000,desc:'Ultra',effect:{fireRateMul:2,rangeMul:1.8,damage:5,buffAllies:true}},{name:'XXXL Trap',cost:90000,desc:'Trap',effect:{fireRateMul:4,damage:15,pierce:20,rangeMul:2}}]},
      {name:'Cleansing Foam',levels:[{name:'Faster Nails',cost:200,desc:'Faster',effect:{fireRateMul:1.3}},{name:'Pin',cost:300,desc:'Pin',effect:{numProjectiles:3,pierce:3,stun:0.3}},{name:'Double Gun',cost:1500,desc:'Double',effect:{numProjectiles:5,damage:2,pierce:5}},{name:'Cleansing Foam',cost:2000,desc:'Foam',effect:{dot:3,dotInterval:0.3,pierce:8}},{name:'Bloon Trap',cost:15000,desc:'Trap',effect:{damage:8,pierce:20,dot:4,dotInterval:0.2}}]}
    ]},
  { id:'beast', name:'Beast Handler', icon:'🦖', color:'#e74c3c', cost:700, category:'SUPPORT', desc:'Unleashes birds, sharks & dinosaurs.', range:180, fireRate:0.7, damage:3, projectileSpeed:280, projectileRadius:9, pierce:3,
    upgrades:[
      {name:'Bird Path',levels:[{name:'Lil\' Sharpnel',cost:350,desc:'Bird',effect:{fireRateMul:1.3,damage:3,pierce:4}},{name:'Soaring Eagle',cost:600,desc:'Eagle',effect:{fireRateMul:1.5,damage:5,pierce:6}},{name:'Condor',cost:2000,desc:'Condor',effect:{fireRateMul:2,damage:8,pierce:10}},{name:'Giant Condor',cost:7000,desc:'Giant',effect:{fireRateMul:2.5,damage:12,pierce:18}},{name:'Pouakai',cost:30000,desc:'Pouakai',effect:{fireRateMul:4,damage:25,pierce:40,camo:true}}]},
      {name:'Shark Path',levels:[{name:'Piranha',cost:400,desc:'Piranha',effect:{damage:4,pierce:5}},{name:'Barracuda',cost:700,desc:'Barracuda',effect:{damage:6,pierce:8,fireRateMul:1.4}},{name:'Great White',cost:2500,desc:'Great White',effect:{damage:10,pierce:14,fireRateMul:1.8}},{name:'Orca',cost:8000,desc:'Orca',effect:{damage:15,pierce:25,fireRateMul:2.2}},{name:'Megalodon',cost:35000,desc:'Megalodon',effect:{damage:40,pierce:60,fireRateMul:3,moabDmg:8}}]},
      {name:'Dino Path',levels:[{name:'Microraptor',cost:350,desc:'Raptor',effect:{damage:4,pierce:5}},{name:'Velociraptor',cost:650,desc:'Velociraptor',effect:{damage:6,pierce:8,fireRateMul:1.5}},{name:'Triceratops',cost:2200,desc:'Triceratops',effect:{damage:9,pierce:12,fireRateMul:1.8}},{name:'T-Rex',cost:8500,desc:'T-Rex',effect:{damage:18,pierce:28,fireRateMul:2,rangeMul:1.3}},{name:'Apex Predator',cost:40000,desc:'Apex',effect:{damage:45,pierce:75,fireRateMul:3.5,camo:true,moabDmg:10}}]}
    ]},
];

// ---------- ENEMIES (BLOONS) ----------
const ENEMY_TYPES = {
  red:    { name:'Red',    color:'#e74c3c', hp:1,   speed:60,  radius:8,  cash:1,  spawnOn:null },
  blue:   { name:'Blue',   color:'#3498db', hp:2,   speed:80,  radius:8,  cash:2,  spawnOn:'red'   },
  green:  { name:'Green',  color:'#27ae60', hp:3,   speed:100, radius:8,  cash:3,  spawnOn:'blue'  },
  yellow: { name:'Yellow', color:'#f1c40f', hp:4,   speed:140, radius:8,  cash:4,  spawnOn:'green' },
  pink:   { name:'Pink',   color:'#e91e63', hp:5,   speed:170, radius:8,  cash:5,  spawnOn:'yellow'},
  white:  { name:'White',  color:'#ecf0f1', hp:11,  speed:110, radius:9,  cash:8,  spawnOn:'pink', outline:'#aaa'  },
  black:  { name:'Black',  color:'#2c3e50', hp:11,  speed:110, radius:9,  cash:8,  spawnOn:'pink'  },
  purple: { name:'Purple', color:'#8e44ad', hp:11,  speed:100, radius:9,  cash:9,  spawnOn:'pink', isPurple:true },
  lead:   { name:'Lead',   color:'#7f8c8d', hp:23,  speed:60,  radius:10, cash:23, spawnOn:'black', isLead:true },
  zebra:  { name:'Zebra',  color:'#8e44ad', hp:23,  speed:90,  radius:10, cash:23, spawnOn:'white', stripColor:'#fff' },
  rainbow:{ name:'Rainbow',color:'#e74c3c', hp:47,  speed:110, radius:11, cash:47, spawnOn:'zebra', isRainbow:true },
  ceramic:{ name:'Ceramic',color:'#d35400', hp:200, speed:55,  radius:11, cash:100, spawnOn:'rainbow', isCeramic:true },
  moab:   { name:'MOAB',   color:'#2980b9', hp:600, speed:25,  radius:28, cash:381, spawnOn:'ceramic', isMoab:true, numSpawn:4 },
  bfb:    { name:'BFB',    color:'#e74c3c', hp:3000,speed:12,  radius:42, cash:1000, spawnOn:'moab', isMoab:true, numSpawn:4 },
  zomg:   { name:'ZOMG',   color:'#8e44ad', hp:20000,speed:8,  radius:56, cash:4000, spawnOn:'bfb', isMoab:true, numSpawn:4 },
  ddt:    { name:'DDT',    color:'#1a1a1a', hp:8000, speed:60, radius:34, cash:2500, spawnOn:'ceramic', isMoab:true, camo:true, isLead:true, numSpawn:4, outline:'#e74c3c' },
  bad:    { name:'BAD',    color:'#c0392b', hp:65000,speed:6,  radius:64, cash:10000, spawnOn:'zomg', isMoab:true, numSpawn:3 },
};

// order for sandbox spawn buttons
const BLOON_ORDER = ['red','blue','green','yellow','pink','white','black','purple','lead','zebra','rainbow','ceramic','moab','bfb','ddt','zomg','bad'];

// ---------- WAVE COMPOSITION ----------
function getWaveComposition(round) {
  const base = [];
  const add = (type, n) => { for (let i=0;i<Math.floor(n);i++) base.push(type); };
  if (round <= 5) { add('red', round*10+5); }
  else if (round <= 10) { add('red',15); add('blue',(round-4)*5); }
  else if (round <= 20) { add('blue',10); add('green',(round-8)*6); if(round>15) add('yellow',(round-15)*3); }
  else if (round <= 30) { add('green',20); add('yellow',(round-18)*5); add('pink',(round-22)*2); if(round>26) add('white',(round-26)*2); if(round>28) add('black',(round-28)*2); }
  else if (round <= 40) { add('yellow',20); add('pink',(round-28)*5); add('white',(round-32)*3); add('black',(round-33)*3); if(round>36) add('purple',(round-36)*2); if(round>38) add('lead',(round-38)*2); }
  else if (round <= 50) { add('pink',15); add('white',(round-38)*2); add('black',(round-38)*2); add('lead',(round-40)*2); add('zebra',(round-42)*2); if(round>46) add('rainbow',(round-46)*2); if(round===50) base.push('moab'); }
  else if (round <= 60) { add('black',10); add('zebra',(round-48)*3); add('lead',(round-48)*2); add('rainbow',(round-50)*2); if(round>54) add('ceramic',(round-54)*1); if(round>=58) add('moab',(round-57)); if(round===60){ base.push('bfb'); } }
  else if (round <= 80) { add('zebra',5); add('rainbow',(round-58)*3); add('ceramic',(round-58)*2); add('moab',(round-60)*0.6); if(round>70) add('ddt',(round-70)*0.4); if(round>=75) add('bfb',(round-74)*0.3); }
  else if (round <= 100) { add('ceramic',(round-78)*4); add('moab',(round-78)); add('ddt',(round-80)*0.5); add('bfb',(round-82)*0.4); if(round>=92) add('zomg',(round-91)*0.3); if(round===100){ base.push('zomg'); base.push('bfb'); } }
  else { add('ceramic',(round-98)*3); add('moab',(round-98)); add('bfb',(round-98)*0.5); add('zomg',(round-100)*0.3); add('ddt',(round-100)*0.4); if(round>=120) add('bad',(round-119)*0.15); }
  // shuffle
  for (let i=base.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [base[i],base[j]]=[base[j],base[i]]; }
  return base;
}

function getIncomeMultiplier(round) {
  if (round <= 40) return 1.0;
  if (round <= 60) return 0.7;
  if (round <= 80) return 0.4;
  if (round <= 100) return 0.2;
  return 0.1;
}

// ---------- PERSISTENT UPGRADE SHOP ----------
const SHOP_UPGRADES = [
  { id:'startCash', name:'Starting Cash', desc:'+$150 starting cash per level', baseCost:200, max:8, per:150, unit:'$' },
  { id:'startLives', name:'Starting Lives', desc:'+15 starting lives per level', baseCost:250, max:6, per:15, unit:'lives' },
  { id:'income', name:'Global Income', desc:'+5% end-of-round bonus cash per level', baseCost:300, max:6, per:0.05, unit:'%' },
  { id:'towerDmg', name:'Sharper Monkeys', desc:'+4% all tower damage per level', baseCost:400, max:6, per:0.04, unit:'%' },
  { id:'towerSpeed', name:'Faster Monkeys', desc:'+4% all attack speed per level', baseCost:400, max:6, per:0.04, unit:'%' },
  { id:'sellValue', name:'Better Resale', desc:'+3% sell value per level', baseCost:150, max:5, per:0.03, unit:'%' },
  { id:'discount', name:'Bulk Discount', desc:'-2% tower cost per level', baseCost:500, max:5, per:0.02, unit:'%' },
  { id:'mmBoost', name:'Money Magnet', desc:'+10% monkey money earned per level', baseCost:600, max:5, per:0.1, unit:'%' },
];
