// 🛒 POS System Logic

let cart = [];
let discountRate = 0;

const DISCOUNT_CODES = {
  'CUTE10': 10,
  'SHOP20': 20,
  'LOVE15': 15,
  'PINK50': 50
};

function addToCart(el){
  const name  = el.dataset.name;
  const price = parseFloat(el.dataset.price);
  const existing = cart.find(i=>i.name===name);
  if(existing){
    existing.qty++;
  } else {
    cart.push({ name, price, qty:1 });
  }
  el.classList.add('selected');
  setTimeout(()=>el.classList.remove('selected'),400);
  renderCart();
  showSnackbar(`✅ เพิ่ม "${name}" แล้ว!`,'success');
}

function changeQty(name, delta){
  const item = cart.find(i=>i.name===name);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i=>i.name!==name);
  renderCart();
}

function removeItem(name){
  cart = cart.filter(i=>i.name!==name);
  renderCart();
  showSnackbar('🗑️ ลบสินค้าออกแล้ว','warning');
}

function clearCart(){
  cart = [];
  discountRate = 0;
  document.getElementById('discount-code').value='';
  renderCart();
  showSnackbar('🗑️ ล้างตะกร้าแล้ว','warning');
}

function renderCart(){
  const container = document.getElementById('cart-items');
  const countLabel = document.getElementById('cart-count-label');
  const totalQty = cart.reduce((s,i)=>s+i.qty,0);
  updateCartBadge(totalQty);
  countLabel.textContent = totalQty + ' รายการ';

  if(cart.length===0){
    container.innerHTML='<p style="text-align:center;color:#9B8AA6;padding:24px;font-size:.9rem">🛒 ยังไม่มีสินค้าในตะกร้า<br/>คลิกสินค้าเพื่อเพิ่ม</p>';
    updateSummary(0,0,0);
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-img">${getEmoji(item.name)}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">฿${item.price} × ${item.qty} = ฿${(item.price*item.qty).toLocaleString()}</div>
      </div>
      <div class="ci-qty">
        <button class="qty-btn qty-btn-minus" onclick="changeQty('${item.name}',-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn qty-btn-plus" onclick="changeQty('${item.name}',1)">+</button>
        <button class="icon-btn icon-btn-del" style="margin-left:4px;width:26px;height:26px;font-size:.8rem" onclick="removeItem('${item.name}')">×</button>
      </div>
    </div>
  `).join('');

  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc = sub * discountRate/100;
  const vat  = (sub-disc)*0.07;
  const grand = (sub-disc)+vat;
  updateSummary(sub,disc,vat,grand);
}

function updateSummary(sub,disc,vat,grand){
  document.getElementById('subtotal').textContent    = '฿'+sub.toFixed(2);
  document.getElementById('discount-amt').textContent = '-฿'+(disc||0).toFixed(2);
  document.getElementById('vat-amt').textContent      = '฿'+(vat||0).toFixed(2);
  document.getElementById('grand-total').textContent  = '฿'+(grand||0).toFixed(2);
  // store for checkout
  localStorage.setItem('posGrand', (grand||0).toFixed(2));
  localStorage.setItem('posCart', JSON.stringify(cart));
  localStorage.setItem('posDisc', disc||0);
  localStorage.setItem('posVat', vat||0);
  localStorage.setItem('posSub', sub||0);
  calcChange();
}

function calcChange(){
  const cash = parseFloat(document.getElementById('cash-input')?.value||0);
  const grand = parseFloat(localStorage.getItem('posGrand')||0);
  const result = document.getElementById('change-result');
  if(!result) return;
  if(cash>=grand && grand>0){
    result.textContent = 'เงินทอน: ฿'+(cash-grand).toFixed(2);
    result.style.color='#2E9E82';
  } else if(cash>0 && cash<grand){
    result.textContent = 'ยังขาดอีก: ฿'+(grand-cash).toFixed(2);
    result.style.color='#E05555';
  } else {
    result.textContent = 'เงินทอน: —';
    result.style.color='#9B8AA6';
  }
}

function applyDiscount(){
  const code = document.getElementById('discount-code').value.trim().toUpperCase();
  if(DISCOUNT_CODES[code]){
    discountRate = DISCOUNT_CODES[code];
    showSnackbar(`🏷️ ใช้โค้ด "${code}" ส่วนลด ${discountRate}% แล้ว!`,'success');
    renderCart();
  } else {
    showSnackbar('❌ โค้ดส่วนลดไม่ถูกต้อง','warning');
    discountRate = 0;
  }
}

function getEmoji(name){
  const map = {
    'ชาไทยเย็น':'🧋','กาแฟลาเต้เย็น':'☕','มัทฉะลาเต้':'🍵','น้ำส้มคั้นสด':'🍹',
    'เค้กสตรอว์เบอร์รี':'🎂','คุกกี้ช็อกโกแลตชิพ':'🍪','มาการองหลากสี':'🧁',
    'สลัดผักสด':'🥗','ครีมบำรุงผิวหน้า':'💄','ลิปสติกนมสตรอว์เบอร์รี':'💋',
    'ข้าวกล่องสุขภาพ':'🍱','สร้อยคอเงินดอกไม้':'📿','กำไลข้อมือเพชร':'💎'
  };
  return map[name]||'🛍️';
}

function checkout(){
  if(cart.length===0){ showSnackbar('⚠️ ตะกร้าว่างเปล่า!','warning'); return; }
  const cash = parseFloat(document.getElementById('cash-input')?.value||0);
  const grand = parseFloat(localStorage.getItem('posGrand')||0);
  if(cash<grand){ showSnackbar('⚠️ รับเงินไม่เพียงพอ!','warning'); return; }
  showSnackbar('✅ ชำระเงินสำเร็จ! กำลังออกใบเสร็จ...','success');
  setTimeout(()=>{ window.location.href='receipt.html'; },1200);
}

// Filter for mini products
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.mini-card').forEach(c=>{
      c.style.display = (!cat||cat==='all'||c.dataset.cat===cat)?'':'none';
    });
  });
});

// restore cart
(function(){
  try{
    const saved = JSON.parse(localStorage.getItem('posCart')||'[]');
    if(saved.length) cart = saved;
    renderCart();
  }catch(e){}
})();

