/* Shared atmosphere: a drifting constellation behind the page and a cursor spotlight on panels.
   Decorative only; stops under reduced motion and when the tab is hidden. */
(function(){
  var calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var c = document.createElement("canvas"); c.id = "sky"; c.setAttribute("aria-hidden","true"); document.body.prepend(c);
  var x = c.getContext("2d"), W, H, D = Math.min(devicePixelRatio || 1, 2), pts = [], raf = 0;
  function size(){ W = innerWidth; H = innerHeight; c.width = W * D; c.height = H * D; x.setTransform(D,0,0,D,0,0);
    var n = Math.round(Math.min(70, W * H / 16000)); pts = [];
    for (var i = 0; i < n; i++) pts.push({x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25, r:Math.random()*1.4+.4}); }
  function draw(){
    x.clearRect(0,0,W,H);
    for (var i = 0; i < pts.length; i++) { var p = pts[i];
      p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fillStyle = "rgba(120,200,255,.5)"; x.fill();
      for (var j = i + 1; j < pts.length; j++) { var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx*dx + dy*dy;
        if (d < 16000) { x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.strokeStyle = "rgba(100,170,255," + (.15 * (1 - d / 16000)) + ")"; x.lineWidth = 1; x.stroke(); } }
    }
    if (!calm) raf = requestAnimationFrame(draw);
  }
  size(); draw();
  addEventListener("resize", function(){ cancelAnimationFrame(raf); size(); draw(); });
  document.addEventListener("visibilitychange", function(){ cancelAnimationFrame(raf); if (!document.hidden && !calm) raf = requestAnimationFrame(draw); });
  document.addEventListener("pointermove", function(e){
    var g = e.target.closest && e.target.closest(".glass,.btn,.stub"); if (!g) return;
    var r = g.getBoundingClientRect(); g.style.setProperty("--mx", (e.clientX - r.left) + "px"); g.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, {passive:true});
})();
