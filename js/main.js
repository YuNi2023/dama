import { applyHunterAttack, useSkill, applySurvivorSpecial } from '../logic/damageCalculator.js'; import characters from '../data/characters.json' assert { type: 'json' };

const state = { hunters: JSON.parse(JSON.stringify(characters.hunters)), survivors: {}, polarity: {} };

// 初期HP設定 Object.entries(characters.survivors).forEach(([id, data]) => { state.survivors[id] = { hp: data.maxHealth, special: data.special }; });

// ボタン操作 document.querySelectorAll('.attack-btn').forEach(btn => { btn.addEventListener('click', e => { const hunterId = e.target.dataset.hunter; const targetId = prompt('ターゲットのIDを入力'); // 後でセレクト式に変更 applyHunterAttack(hunterId, targetId, state); updateUI(); }); });

function updateUI() { // 状態表示更新 }
