# Balloon Tower Defense 6

A single-player, browser-based Bloons TD 6–inspired tower defense game built with pure HTML, CSS, and vanilla JavaScript on an HTML5 Canvas. No frameworks, no backend — everything runs client-side.

## 🎮 How to Play
1. Open `index.html`.
2. Press **Play**, choose a **difficulty**, a **map**, and (optionally) a **hero**.
3. Buy monkeys from the right-hand shop and place them on the map (not on the track or obstacles).
4. Press **▶ START** (or the spacebar) to send a round of bloons. Survive to the mode's final round to win.
5. Earn **Monkey Money** each game and spend it in the **Upgrade Shop** for permanent bonuses.

## ✅ Completed Features

### Core Gameplay
- **Canvas-rendered tower defense** with a curving track, projectiles, and layered bloons.
- **24 towers** across 4 classes (Primary, Military, Magic, Support), each with **3 upgrade paths × 5 tiers** and authentic BTD6 crosspathing rules (max 2 paths, only one path above tier 2).
- **17 bloon types** including Red→Pink, White/Black/Purple, Lead, Zebra, Rainbow, Ceramic, and MOAB-class (MOAB, BFB, DDT, ZOMG, BAD) that split into children when popped.
- **Targeting priorities**: First / Last / Close / Strong per tower.
- **Speed controls** (1x / 2x / 3x) and an **Autostart** toggle that auto-launches the next round.

### 8+ Heroes (9 total, one placeable per game)
| Hero | Role |
|------|------|
| **Quincy** | Affordable starter; reliable long-range camo-popping arrows (camo at Lv3). |
| **Gwendolin** | Fire clears groups, burns bloons, buffs nearby towers, pops lead at Lv5. |
| **Obyn Greenfoot** | Heavily boosts all Magic towers (range/damage). |
| **Benjamin** | Hacks the economy: passive cash + bonus lives each round. |
| **Ezili** | Hexes and shreds MOAB-class; pops all bloon types. |
| **Sauda** | Instant melee slashes; solos early rounds. |
| **Geraldo** | Merchant; generates cash + ability cash injection. |
| **Adora** | Sacrifice nearby towers for permanent damage growth. |
| **Etienne** | Grants **map-wide camo detection to ALL towers at Lv8**. |

Heroes gain XP automatically and level up (to 20), unlocking a signature **activated ability**.

### Difficulty Modes
- **Easy** (ends R40), **Medium** (R60), **Hard** (R80), **Impossible** (1 life, R100). Each scales bloon HP/speed, starting cash/lives, and Monkey-Money reward multiplier.

### Maps (6) with 3D Line-of-Sight
- Monkey Meadow, Logs, Winding Way, Spiral, Cross Roads, Volcano.
- Maps include **trees, logs, and boulders** rendered with pseudo-3D shading. These **obstacles block a tower's line of sight** — projectiles cannot pass through them, so placement matters.

### Economy & Progression
- **Monkey Money** earned per game (scaled by round reached, cash earned, and difficulty).
- **Permanent Upgrade Shop** (8 upgrades): Starting Cash, Starting Lives, Global Income, Sharper Monkeys (damage), Faster Monkeys (speed), Better Resale, Bulk Discount, Money Magnet.
- Progress is auto-saved to `localStorage` and can be exported/imported via a **base64 save code** (includes monkey money, permanent upgrades, and the in-progress run).

### Sandbox Mode + Admin Panel
- Unlimited cash & lives, free towers.
- **Admin panel** to spawn any bloon (incl. MOAB-class), set the round, spawn a full wave, add cash, refill lives, and clear all bloons.

### Removed (per request)
- Multiplayer, the INFO tab, and the player-Level system have been removed.

## 🗂 Project Structure
```
index.html      Main page: screens (menu, difficulty, map, hero, sandbox, game), modals, styles
js/data.js      Static data: difficulties, maps, heroes, towers, bloons, waves, shop upgrades
js/game.js      Engine: state, pathing, 3D LoS, towers, projectiles, heroes, save/load, UI
```

## 🔗 Functional Entry Points (client-side, no server routes)
- `index.html` — the entire app (SPA-style screen switching).
- Key JS entry functions: `startGame()`, `startWave()`, `openUpgradeShop()`, `showSaveModal()`, `toggleSandboxPanel()`.

## 💾 Data Model & Storage
- **Storage**: browser `localStorage` key `btd6_profile` → `{ monkeyMoney, upgrades }`.
- **Save codes**: base64-encoded JSON `{ v, mm, ups, game:{ diff, map, hero, round, cash, lives, towers[] } }`.
- No external database or API is used.

## 🚧 Not Yet Implemented / Possible Next Steps
- Hero-specific projectile visuals and Geraldo's full item shop UI (currently an ability-based cash boost).
- Distinct per-tower attack animations/models and true 3D rendering.
- Special bloon properties beyond the current set (e.g., Fortified, Regrow behavior is simplified).
- Achievements, daily challenges, and additional maps/heroes.

## 🚀 Deployment
To publish this game online, use the **Publish tab**, which handles deployment automatically and provides a live URL.
