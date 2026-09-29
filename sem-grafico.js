(() => {
  const CHAVE = 'pp-sem-grafico';
  let ativo = false;
  try {
    ativo = localStorage.getItem(CHAVE) === '1';
  } catch (e) {
    ativo = false;
  }

  const mapa = () =>
    window.SceneManager && window.SceneManager._scene
      ? window.SceneManager._scene._spriteset
      : null;

  // Cada cena nova (cidade, cacada) cria o seu proprio spriteset, entao a escolha
  // e reaplicada de tempos em tempos em vez de uma vez so.
  const aplicar = () => {
    const sp = mapa();
    if (sp && ativo && sp.visible) sp.visible = false;
  };
  setInterval(aplicar, 500);

  const aviso = (texto) => {
    const caixa = document.createElement('div');
    caixa.textContent = texto;
    caixa.style.cssText =
      'position:fixed;left:50%;top:18px;transform:translateX(-50%);z-index:2147483647;' +
      'background:#11151dEE;color:#e6e9ef;font:13px system-ui,sans-serif;padding:8px 14px;' +
      'border:1px solid #3a4152;border-radius:8px;pointer-events:none';
    document.body.appendChild(caixa);
    setTimeout(() => caixa.remove(), 1400);
  };

  addEventListener(
    'keydown',
    (e) => {
      if (!e.altKey || e.ctrlKey || e.shiftKey || e.key.toLowerCase() !== 'g') return;
      e.preventDefault();
      e.stopPropagation();
      ativo = !ativo;
      try {
        localStorage.setItem(CHAVE, ativo ? '1' : '0');
      } catch (err) {
        /* janela sem armazenamento: vale so para esta sessao */
      }
      const sp = mapa();
      if (sp) sp.visible = !ativo;
      aviso(ativo ? 'Grafico do mapa desligado (Alt+G)' : 'Grafico do mapa ligado (Alt+G)');
    },
    true,
  );
})();
