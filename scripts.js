function viewportSize() {
  return `${innerWidth} × ${innerHeight}px`;
}
function screenSize() {
  return `${window.screen.width * window.devicePixelRatio} × ${
    window.screen.height * window.devicePixelRatio
  }px`;
}

function atualizarTela() {
  document.querySelector("#viewport-size").textContent = viewportSize();
  document.querySelector("#screen-size").textContent = screenSize();
  document.querySelector("#device-pixel-ratio").textContent = devicePixelRatio;
  document.querySelector("#user-agent").textContent = navigator.userAgent;
}

window.onload = () => {
  atualizarTela();
};

window.onchange = () => {
  atualizarTela();
};
