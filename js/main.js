import { applyHunterAttack, useSkill } from '../logic/damageCalculator.js';
import characters from '../data/characters.json' assert { type: 'json' };

const state = {
hunters: JSON.parse(JSON.stringify(characters.hunters)),
survivors: {},
polarity: {}
};

// 初期化
function init() {
const list = document.getElementById('survivor-list');
Object.entries(characters.survivors).forEach(([id, data]) => {
state.survivors[id] = { hp: data.maxHealth };
const card = document.createElement('div');
card.className = 'survivor-card';
card.id = card-${id};
card.innerHTML =       <strong>${data.name}</strong>
      <div class="hp-bar"><div class="hp-fill" id="hp-${id}"></div></div>
      <span id="hp-text-${id}">${data.maxHealth}/${data.maxHealth}</span>
   ;
list.appendChild(card);
});
attachEvent();
}

// イベント設定
function attachEvent() {
document.querySelectorAll('.attack-btn').forEach(btn => {
btn.addEventListener('click', e => {
const hunter = e.target.dataset.hunter;
const targetId = prompt('ターゲットのIDを入力（例: doctor）');
if (state.survivors[targetId]) {
applyHunterAttack(hunter, targetId, state);
updateUI(targetId, ${characters.hunters[hunter].name} が ${characters.survivors[targetId].name} に攻撃);
} else alert('無効なIDです');
});
});
}

// UI更新 & ログ追加
function updateUI(targetId, message) {
// HPバー更新
const hp = state.survivors[targetId].hp;
const max = characters.survivors[targetId].maxHealth;
const percent = Math.max(0, (hp / max) * 100);
document.getElementById(hp-${targetId}).style.width = percent + '%';
document.getElementById(hp-text-${targetId}).textContent = ${hp.toFixed(1)}/${max};

// ダウン判定
if (hp <= 0) {
message += ' → ダウン';
document.getElementById(card-${targetId}).style.opacity = '0.5';
}

// ログ表示
const li = document.createElement('li');
li.textContent = message;
document.getElementById('action-log').appendChild(li);
}

// 初期化実行
document.addEventListener('DOMContentLoaded', init);
