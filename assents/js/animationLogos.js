const container = document.getElementById('logos_clientes');
const content = document.getElementById('logos');
const speed = 0.5; // pixels por frame
let pos = 0;
const extraGap = 100; // espaçamento extra em pixels para reaparecer mais atrás

function animate() {
  pos += speed;

  const firstItemWidth = content.children[0].offsetWidth;
  const firstItemMargin = parseInt(getComputedStyle(content.children[0]).marginRight);
  
  if (pos >= firstItemWidth + firstItemMargin + extraGap) {
    // Move o primeiro item para o final e compensa o deslocamento
    const first = content.children[0];
    content.appendChild(first);
    pos -= firstItemWidth + firstItemMargin + extraGap;
  }

  content.style.transform = `translateX(${-pos}px)`;
  requestAnimationFrame(animate);
}

animate();