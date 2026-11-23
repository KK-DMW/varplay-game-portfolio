const games = [
  {
    id: 'jambus', url: 'games/jam-bus-player/', title: '挪车倒沙', category: '车辆调度 · 玩法复现',
    description: '安排巴士出场的顺序，让不同颜色的车辆收走对应的沙粒。',
  },
  {
    id: 'jlyj', title: '超不过我吧', category: '解谜 · 玩法原型',
    description: '观察箭头的朝向和阻挡关系，找到顺序，清空整张棋盘。',
  },
  {
    id: 'unique-fusion', title: '一环又一环', category: '圆环解谜 · 玩法重制',
    description: '观察圆环之间的卡位关系，逐步解开相互牵制的圆环。',
  },
  {
    id: 'xrq', title: '沙化消除', category: '颜色匹配 · 工程复现',
    description: '按颜色派出沙桶，收集对应的沙粒，逐步清空沙画。',
  },
  {
    id: 'zdhjy-gitee', title: '解压插花', category: '花束整理 · 玩法重制',
    description: '从花池挑选花材，将同类花朵凑成花束，完成订单。',
  },
  {
    id: 'piano-wave', url: 'games/piano-wave-player/', title: '钢琴音浪', category: '音乐节奏 · 钢琴键',
    description: '选一首曲目，跟着旋律点击落下的琴键，挑战更高分数。',
  },
  {
    id: 'perfect-rhythm', url: 'games/perfect-rhythm-player/', title: '完美节奏', category: '音乐节奏 · 判定线',
    description: '跟上节拍，点击、长按或滑动音符，完成整首曲目。',
  },
];

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

const catalog = document.querySelector('#games');
if (catalog) {
  for (const game of games) {
    const card = makeElement('a', `card card-${game.id}`);
    card.href = game.url ?? `play.html?game=${game.id}`;
    card.setAttribute('aria-labelledby', `title-${game.id}`);

    const cover = makeElement('div', 'cover');
    const image = makeElement('img');
    image.src = `covers/${game.id}.webp`;
    image.alt = '';
    image.width = 480;
    image.height = 900;
    image.decoding = 'async';
    cover.append(image);

    const details = makeElement('div', 'details');
    const title = makeElement('h2', '', game.title);
    title.id = `title-${game.id}`;
    details.append(makeElement('p', 'category', game.category), title, makeElement('p', 'description', game.description));

    const action = makeElement('span', 'try', '开始试玩');
    action.setAttribute('aria-hidden', 'true');
    details.append(action);
    card.append(cover, details);
    catalog.append(card);
  }
}

const player = document.querySelector('#player');
if (player) {
  const game = games.find(({ id }) => id === new URLSearchParams(location.search).get('game'));
  const message = document.querySelector('#player-message');
  if (!game) {
    message.textContent = '请返回合集并选择一款游戏。';
  } else if (game.url) {
    location.replace(game.url);
  } else {
    document.title = `${game.title} · 游戏作品集`;
    document.querySelector('#game-title').textContent = game.title;

    const frame = makeElement('iframe', 'game-frame');
    frame.src = `games/${game.id}/index.html`;
    frame.title = `${game.title}试玩`;
    frame.allow = 'autoplay; fullscreen';
    frame.addEventListener('load', () => message.remove(), { once: true });
    player.append(frame);

    const fullscreen = document.querySelector('#fullscreen');
    if (document.fullscreenEnabled && player.requestFullscreen) {
      fullscreen.hidden = false;
      fullscreen.addEventListener('click', () => {
        player.requestFullscreen().catch(() => {
          fullscreen.hidden = true;
        });
      });
    }
  }
}
