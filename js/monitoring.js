var pcs = [];
for (var i = 1; i <= 20; i++) {
  pcs.push('PC-' + String(i).padStart(2, '0'));
}

var lastSeen = {};
var prevStatus = {};
var chartData = [];
var canvas = document.getElementById('chartCanvas');
var ctx = canvas ? canvas.getContext('2d') : null;

function resizeCanvas() {
  if (!canvas) return;
  var rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width - 40;
  canvas.height = 100;
}

function randomStatus() {
  return Math.random() > 0.25;
}

function formatTime(d) {
  var h = String(d.getHours()).padStart(2, '0');
  var m = String(d.getMinutes()).padStart(2, '0');
  var s = String(d.getSeconds()).padStart(2, '0');
  return h + ':' + m + ':' + s;
}

function drawChart() {
  if (!ctx) return;
  resizeCanvas();
  var w = canvas.width;
  var h = canvas.height;
  var pad = { top: 8, bottom: 20, left: 8, right: 8 };
  var chartW = w - pad.left - pad.right;
  var chartH = h - pad.top - pad.bottom;

  ctx.clearRect(0, 0, w, h);

  if (chartData.length < 2) {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim() || '#999';
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Menunggu data...', w / 2, h / 2 + 5);
    return;
  }

  var maxVal = 20;
  var stepX = chartW / (chartData.length - 1);

  // Online line
  ctx.beginPath();
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00c853';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';

  chartData.forEach(function(d, i) {
    var x = pad.left + i * stepX;
    var y = pad.top + chartH - (d.online / maxVal) * chartH;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Offline line
  ctx.beginPath();
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-danger').trim() || '#d50000';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';

  chartData.forEach(function(d, i) {
    var x = pad.left + i * stepX;
    var y = pad.top + chartH - (d.offline / maxVal) * chartH;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Labels
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim() || '#999';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('0', pad.left, h - 4);
  ctx.fillText(maxVal, pad.left, pad.top + 10);

  // Legend
  ctx.fillRect(w - 80, 4, 10, 10);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00c853';
  ctx.fillRect(w - 80, 4, 10, 10);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim() || '#999';
  ctx.textAlign = 'left';
  ctx.fillText('Online', w - 66, 13);

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-danger').trim() || '#d50000';
  ctx.fillRect(w - 80, 20, 10, 10);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim() || '#999';
  ctx.fillText('Offline', w - 66, 29);
}

function updateMonitoring() {
  var html = '';
  var onlineCount = 0;
  var offlineCount = 0;

  pcs.forEach(function(pc) {
    var online = randomStatus();
    if (online) onlineCount++; else offlineCount++;

    if (!lastSeen[pc]) lastSeen[pc] = new Date();
    if (online) lastSeen[pc] = new Date();

    var statusClass = online ? 'online' : 'offline';
    var statusText = online ? 'Online' : 'Offline';
    var lastText = lastSeen[pc] ? formatTime(lastSeen[pc]) : '—';
    var flashClass = '';

    if (prevStatus[pc] !== undefined && prevStatus[pc] !== online) {
      flashClass = 'status-flash' + (online ? '' : ' offline-flash');
    }
    prevStatus[pc] = online;

    html += '<div class="card pc-card ' + flashClass + '">' +
      '<span class="pc-name">' + pc + '</span>' +
      '<span class="pc-status">' +
        '<span class="status-dot ' + statusClass + ' pulse"></span>' +
        '<span class="status-label ' + statusClass + '">' + statusText + '</span>' +
      '</span>' +
      '<span class="pc-lastseen">Terakhir: <span>' + lastText + '</span></span>' +
    '</div>';
  });

  document.getElementById('status').innerHTML = html;
  document.getElementById('totalOnline').textContent = onlineCount;
  document.getElementById('totalOffline').textContent = offlineCount;
  document.getElementById('totalAll').textContent = pcs.length;

  // Push chart data
  chartData.push({ online: onlineCount, offline: offlineCount });
  if (chartData.length > 30) chartData.shift();
  drawChart();
}

// Handle theme changes for chart colors
var observer = new MutationObserver(function() { if (chartData.length) drawChart(); });
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

updateMonitoring();
setInterval(updateMonitoring, 5000);
