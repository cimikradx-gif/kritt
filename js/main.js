// 🌸 ShopCute POS - Main JavaScript

// ===== PARTICLES =====
(function createParticles(){
  const container = document.getElementById('particles');
  if(!container) return;
  const colors = ['#FFB3D1','#D9B3FF','#A3EEDA','#FFE4A3','#B3D9FF','#FFB3B3'];
  const count = 18;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*18+8;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
})();

// ===== SNACKBAR =====
function showSnackbar(msg, type='success'){
  let sb = document.getElementById('snackbar');
  if(!sb){
    sb = document.createElement('div');
    sb.id = 'snackbar';
    sb.className = 'snackbar';
    document.body.appendChild(sb);
  }
  sb.textContent = msg;
  sb.className = `snackbar ${type} show`;
  clearTimeout(sb._timer);
  sb._timer = setTimeout(()=>{ sb.classList.remove('show'); }, 2800);
}

// ===== ACTIVE NAV =====
(function markActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
    else a.classList.remove('active');
  });
})();

// ===== CART BADGE =====
function updateCartBadge(n){
  const badges = document.querySelectorAll('#cart-badge, .cart-badge');
  badges.forEach(b=>{ b.textContent = n; });
  localStorage.setItem('cartBadge', n);
}

// Load cart count
(function(){
  const n = parseInt(localStorage.getItem('cartBadge') || '0');
  updateCartBadge(n);
})();

// ===== FILTER BUTTONS =====
function initFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      filterProducts(cat);
    });
  });
}

function filterProducts(cat){
  document.querySelectorAll('.product-card').forEach(card=>{
    if(!cat || cat==='all' || card.dataset.cat===cat){
      card.style.display='';
      card.style.animation='fadeIn .4s ease';
    } else {
      card.style.display='none';
    }
  });
}

// ===== SEARCH =====
function initSearch(){
  const inp = document.getElementById('search-input');
  if(!inp) return;
  inp.addEventListener('input',()=>{
    const q = inp.value.toLowerCase().trim();
    document.querySelectorAll('.product-card').forEach(card=>{
      const name = card.querySelector('.product-name')?.textContent.toLowerCase()||'';
      card.style.display = name.includes(q) ? '' : 'none';
    });
  });
}

// ===== SWITCHES =====
function initSwitches(){
  document.querySelectorAll('.sale-switch').forEach(sw=>{
    sw.addEventListener('change',()=>{
      const card = sw.closest('.product-card');
      const badge = card?.querySelector('.product-badge');
      const addBtn = card?.querySelector('.icon-btn-cart');
      if(sw.checked){
        if(badge){ badge.textContent='🟢 ขายได้'; badge.style.background='#2E9E82'; }
        if(addBtn) addBtn.disabled=false;
        showSnackbar('✅ เปิดการขายสินค้าแล้ว!','success');
      } else {
        if(badge){ badge.textContent='⛔ ปิดขาย'; badge.style.background='#aaa'; }
        if(addBtn) addBtn.disabled=true;
        showSnackbar('⛔ ปิดการขายสินค้าแล้ว','warning');
      }
    });
  });
}

// ===== ADD TO CART (INVENTORY PAGE) =====
function initAddToCart(){
  document.querySelectorAll('.icon-btn-cart').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const card = btn.closest('.product-card');
      const name = card?.querySelector('.product-name')?.textContent || 'สินค้า';
      let n = parseInt(localStorage.getItem('cartBadge')||'0');
      n++;
      updateCartBadge(n);
      showSnackbar(`🛒 เพิ่ม "${name}" ในตะกร้าแล้ว!`,'success');
      btn.style.transform='scale(1.3)';
      setTimeout(()=>btn.style.transform='',300);
    });
  });
}

// ===== LINEAR PROGRESS =====
function animateProgress(){
  document.querySelectorAll('.stock-fill').forEach(bar=>{
    const target = bar.dataset.pct || '100';
    setTimeout(()=>{ bar.style.width = target+'%'; }, 200);
  });
}

// ===== BACK TO TOP =====
window.addEventListener('scroll',()=>{
  const btn = document.getElementById('backTop');
  if(btn) btn.classList.toggle('show', window.scrollY > 300);
});

// ===== MOBILE NAV TOGGLE =====
function initMobileNav(){
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if(!toggle || !mobileNav) return;
  toggle.addEventListener('click',()=>mobileNav.classList.toggle('open'));
  document.addEventListener('click',e=>{
    if(!toggle.contains(e.target) && !mobileNav.contains(e.target))
      mobileNav.classList.remove('open');
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  initFilters();
  initSearch();
  initSwitches();
  initAddToCart();
  animateProgress();
  initMobileNav();
});

