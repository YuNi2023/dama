export function applyHunterAttack(hunterId, targetId, state) { const hunter = state.hunters[hunterId]; const target = state.survivors[targetId]; let dmg = hunter.baseDamage;

// 隠者のシェア処理 if (hunterId === 'hermit' && state.polarity[targetId]) { // 分配ロジック const peers = Object.keys(state.polarity).filter(id => state.polarity[id] === state.polarity[targetId]); const share = dmg / peers.length; peers.forEach(id => state.survivors[id].hp -= share); // 極性解除 peers.forEach(id => delete state.polarity[id]); return; }

// ダメージ適用 target.hp -= dmg;

// ジョゼフの写真世界反映は別関数で処理 }

export function useSkill(hunterId, skill, state) { // 写真世界開始や電荷付与、切替などの処理 }

export function applySurvivorSpecial(id, action, state) { const spec = state.survivors[id].special; // 医師の鎮静剤やバーメイドの回復処理など }
