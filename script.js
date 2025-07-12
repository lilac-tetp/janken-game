let userScore = 0;
let computerScore = 0;
let drawCount = 0;

const btnSound = new Audio('btn.mp3');
const winSound = new Audio('win.mp3');
const loseSound = new Audio('lose.mp3');
const drawSound = new Audio('draw.mp3');

function play(userHand) {
  btnSound.currentTime = 0;
  btnSound.play();

  const hands = ['ぐー', 'ちょき', 'ぱー'];
  const computerHand = hands[Math.floor(Math.random() * 3)];

  let result = '';
  if (userHand === computerHand) {
  result = 'あいこだよ！';
  drawCount++; // ← あいこの回数を1増やす
  drawSound.currentTime = 0;
  drawSound.play();
} else if (
  (userHand === 'ぐー' && computerHand === 'ちょき') ||
  (userHand === 'ちょき' && computerHand === 'ぱー') ||
  (userHand === 'ぱー' && computerHand === 'ぐー')
) {
  result = 'あなたの勝ち！';
  userScore++; // ← 勝ち数を増やす
  winSound.currentTime = 0;
  winSound.play();
} else {
  result = 'あなたの負け…';
  computerScore++; // ← 負け数を増やす
  loseSound.currentTime = 0;
  loseSound.play();
}


document.getElementById('result').innerHTML =
  `あなた：${userHand}<br>コンピューター：${computerHand}<br><strong>${result}</strong>`;

document.getElementById('score').innerHTML =
  `🎉 スコア 🎉<br>あなた：${userScore}勝<br>コンピューター：${computerScore}勝<br>あいこ：${drawCount}回`;
}
