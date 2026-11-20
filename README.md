# 🛍️ ShopCute POS — ระบบบริหารจัดการคำสั่งซื้อและคลังสินค้าหน้าร้าน

<div align="center">

![ShopCute POS Banner](https://img.shields.io/badge/ShopCute-POS%20System-FF6B9D?style=for-the-badge&logo=shopify&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**งานที่ 2: Point of Sale and Inventory Management System**  
ระบบสวยงาม น่ารัก ใช้งานง่าย 🌸

[🌐 ดูเว็บไซต์](https://your-username.github.io/pos-shop/) • [📦 สินค้า](inventory.html) • [🛒 ตะกร้า](pos.html) • [📊 รายงาน](report.html)

</div>

---

## 🌟 ภาพรวม

ระบบ **ShopCute POS** คือเว็บแอปพลิเคชันสำหรับจัดการหน้าร้านค้าปลีก ครอบคลุมทุกฟังก์ชันตามโจทย์งานที่ 2 ได้แก่:

- 📦 **Inventory Control** — จัดการสินค้าและสต็อกแบบเรียลไทม์
- 🧮 **Transaction Calculation** — คำนวณราคา VAT 7% และส่วนลด
- 🔄 **Status Control** — เปิด-ปิดการขายแต่ละสินค้าทันที
- 🧾 **Receipt** — ออกใบเสร็จรับเงินย่อ
- 📊 **Report** — รายงานสรุปยอดขายประจำวัน

---

## 📄 หน้าเว็บไซต์ทั้งหมด (7 หน้า)

| หน้า | ไฟล์ | คำอธิบาย |
|------|------|----------|
| 🔑 Login | `login.html` | หน้าเข้าสู่ระบบพร้อม Role (ผู้จัดการ / แคชเชียร์ / สต็อก) |
| 🏠 หน้าหลัก | `index.html` | Hero section, Feature cards, MUI component showcase |
| 📊 Dashboard | `dashboard.html` | KPI cards, Mini chart, Activity timeline, Stock alert |
| 📦 สินค้า | `inventory.html` | Product cards + รูปภาพ, Filter, Switch, LinearProgress |
| 🛒 ตะกร้า | `pos.html` | POS system, Discount Code, VAT 7%, เงินทอน |
| 🧾 ใบเสร็จ | `receipt.html` | ใบเสร็จรับเงิน + Confetti animation |
| 📈 รายงาน | `report.html` | Bar chart ยอดขาย, TOP 5 สินค้าขายดี, ตารางรายการ |

---

## 🎀 หมวดสินค้า (7 หมวด, 20+ รายการ)

| หมวด | สินค้า | ราคา |
|------|--------|------|
| 🧋 เครื่องดื่ม | ชาไทยเย็น, กาแฟลาเต้, มัทฉะลาเต้, น้ำส้ม, สมูทตี้ | ฿35–65 |
| 🍰 ขนม | เค้กสตรอว์เบอร์รี, คุกกี้ช็อก, มาการอง, วาฟเฟิล | ฿25–120 |
| 🥗 อาหารสด | สลัดผักสด, ข้าวกล่องสุขภาพ | ฿65–89 |
| 💄 ความงาม | ครีมบำรุงผิวหน้า, ลิปสติก | ฿199–350 |
| 🎀 เครื่องประดับ | สร้อยคอเงิน, กำไลเพชร | ฿450–890 |
| ✏️ เครื่องเขียน | สมุดโน้ต, ปากกาสีพาสเทล, สติกเกอร์ | ฿35–145 |
| 🧸 ของเล่น | ตุ๊กตาหมี, บล็อคต่อ, ของเล่นเสริมพัฒนาการ | ฿299–520 |

---

## 🧩 MUI Components (ครอบคลุมตามโจทย์)

```
Navigation & Header:  AppBar ✅  Toolbar ✅  Badge 🛒 ✅
Data Presentation:    Card ✅  CardMedia ✅  CardContent ✅  CardActions ✅
                      Table ✅  TableHead ✅  TableRow ✅  TableCell ✅
Inputs & Controls:    Switch ✅  TextField ✅  IconButton ✅
Feedback:             Snackbar ✅  LinearProgress ✅
```

---

## 🎨 Design System

```css
Primary:   Pink  #FF6B9D + Purple #B87FD6
Accent:    Mint  #5ECFB1 + Yellow #FFD166
Font:      Mitr (Headers) + Sarabun (Body) — Google Fonts
Effects:   Floating Particles · Card Hover · Badge Pulse · Confetti
```

---

## 🚀 วิธีใช้งาน

### 1. เปิดใช้งานบนเครื่อง
```bash
# เปิดไฟล์ login.html ในเบราว์เซอร์
# หรือใช้ Live Server ใน VS Code
```

### 2. ข้อมูลเข้าสู่ระบบ
| บัญชี | Username | Password | หน้าที่ไป |
|-------|----------|----------|----------|
| 👑 ผู้จัดการ | `admin` | `1234` | Dashboard |
| 💁‍♀️ แคชเชียร์ | `cashier` | `1234` | POS |
| 📦 สต็อก | `stock` | `1234` | Inventory |

### 3. Discount Codes
| โค้ด | ส่วนลด |
|------|--------|
| `CUTE10` | 10% |
| `SHOP20` | 20% |
| `LOVE15` | 15% |
| `PINK50` | 50% |

---

## 📂 โครงสร้างโปรเจกต์

```
pos-shop/
├── login.html          🔑 หน้า Login
├── index.html          🏠 หน้าหลัก  
├── dashboard.html      📊 Dashboard + KPI
├── inventory.html      📦 จัดการสินค้าและสต็อก
├── pos.html            🛒 ระบบ POS / ตะกร้า
├── receipt.html        🧾 ใบเสร็จรับเงิน
├── report.html         📈 รายงานยอดขาย
├── css/
│   └── style.css       🎨 Global styles (สีชมพู-ม่วง)
└── js/
    ├── main.js         ⚙️ Core logic (particles, switches, filters)
    └── pos.js          🛒 POS logic (cart, VAT, discount, change)
```

---

## 🌸 GitHub Pages

เปิด GitHub Pages ที่ `Settings → Pages → Branch: main → /root`  
แล้วเข้าใช้งานที่ `https://your-username.github.io/pos-shop/login.html`

---

<div align="center">

Made with 💕 by ShopCute POS Team  
🌸 งานที่ 2: ระบบบริหารจัดการคำสั่งซื้อและคลังสินค้าหน้าร้าน 🌸

</div>

