import { applyHunterAttack, useSkill } from '../logic/damageCalculator.js';
import characters from '../data/characters.json' assert { type: 'json' };

const state = {
  hunters: JSON.parse(JSON.stringify(characters.hunters)),
  survivors: {},
  polarity: {}
};

document.addEventListener('DOMContentLoaded', () => {
  initSelection();
  initStatus();
  attachEvents();
});

function initSelection() { /* サバイバー選択UI生成 */ }
function initStatus() { /* サバイバー状況UI生成 */ }
function attachEvents() { /* イベント設定 */ }
function updateStatus(id) { /* HP更新とダウン判定 */ }
function logAction(message) { /* ログ出力 */ }
