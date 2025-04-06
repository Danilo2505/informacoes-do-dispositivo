function viewportSize() {
  return `${innerWidth} × ${innerHeight}px`;
}

function screenSize() {
  return `${window.screen.width * window.devicePixelRatio} × ${
    window.screen.height * window.devicePixelRatio
  }px`;
}

function getOrientation() {
  return window.innerWidth > window.innerHeight ? "Paisagem" : "Retrato";
}

function getDeviceType() {
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile|iphone|android/.test(ua)) return "Mobile";
  if (/tablet|ipad/.test(ua)) return "Tablet";
  return "Desktop";
}

function getOS() {
  const ua = navigator.userAgent;
  if (ua.indexOf("Win") !== -1) return "Windows";
  if (ua.indexOf("Mac") !== -1) return "macOS";
  if (ua.indexOf("Linux") !== -1) return "Linux";
  if (ua.indexOf("Android") !== -1) return "Android";
  if (ua.indexOf("like Mac") !== -1) return "iOS";
  return "Desconhecido";
}

function atualizarTela() {
  document.querySelector("#viewport-size").textContent = viewportSize();
  document.querySelector("#screen-size").textContent = screenSize();
  document.querySelector("#device-pixel-ratio").textContent = devicePixelRatio;
  document.querySelector("#orientation").textContent = getOrientation();
  document.querySelector("#device-type").textContent = getDeviceType();
  document.querySelector("#os").textContent = getOS();
  document.querySelector("#platform").textContent = navigator.platform;
  document.querySelector("#user-agent").textContent = navigator.userAgent;
}

window.onload = atualizarTela;
window.onresize = atualizarTela;
