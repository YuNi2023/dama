export function applyHunterAttack(hunterId, targetId, state) {
  const hunter = state.hunters[hunterId];
  const target = state.survivors[targetId];
  let dmg = hunter.baseDamage;

  // 隠者のシェア処理
  if (hunterId === 'hermit' && state.polarity[targetId]) {
    const peers = Object.keys(state.polarity).filter(
      id => state.polarity[id] === state.polarity[targetId]
    );
    const share = dmg / peers.length;
    peers.forEach(id => { state.survivors[id].hp -= share; });
    peers.forEach(id => { delete state.polarity[id]; });
    return;
  }

  // 通常ダメージ適用
  target.hp -= dmg;
}

export function useSkill(hunterId, skill, state) {
  if (hunterId === 'joseph') {
    // 写真世界開始ロジック
    state.photoWorldActive = true;
    state.photoWorldTimer = Date.now();
  } else if (hunterId === 'hermit') {
    // 極性付与・切替ロジック
    // 実装詳細...
  }
}

export function applySurvivorSpecial(id, action, state) {
  const spec = state.survivors[id].special;
  if (id === 'doctor' && action === 'useMedSyringe') {
    state.survivors[id].hp -= spec.medSyringe.selfCost;
    // 対象回復は呼び出し元で実装
  }
  // 他のサバイバー特殊処理もここに追加
}
