// Vector SVG Graphic Fallbacks (used if an image file path is not found)
const visualFallbacks = {
  calculator: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%230f172a'/><rect x='130' y='30' width='140' height='200' rx='10' fill='%23334155'/><rect x='145' y='45' width='110' height='40' fill='%23a7f3d0'/><text x='155' y='70' font-family='monospace' font-size='18' fill='%23065f46'>cos(X)dx=1</text><circle cx='155' cy='105' r='6' fill='%23cbd5e1'/><circle cx='175' cy='105' r='6' fill='%23cbd5e1'/><circle cx='195' cy='105' r='6' fill='%23cbd5e1'/><rect x='145' y='125' width='20' height='15' fill='%2394a3b8'/><rect x='175' y='125' width='20' height='15' fill='%2394a3b8'/><rect x='205' y='125' width='20' height='15' fill='%2394a3b8'/><rect x='235' y='125' width='20' height='15' fill='%23ef4444'/><rect x='145' y='150' width='20' height='15' fill='%23cbd5e1'/><rect x='175' y='150' width='20' height='15' fill='%23cbd5e1'/><rect x='205' y='150' width='20' height='15' fill='%23cbd5e1'/><rect x='235' y='150' width='20' height='15' fill='%23cbd5e1'/><rect x='145' y='175' width='20' height='15' fill='%23cbd5e1'/><rect x='175' y='175' width='20' height='15' fill='%23cbd5e1'/><rect x='205' y='175' width='20' height='15' fill='%23cbd5e1'/><rect x='235' y='175' width='20' height='15' fill='%2310b981'/><text x='200' y='245' font-family='sans-serif' font-size='12' fill='%2394a3b8' text-anchor='middle'>CASIO FX-991</text></svg>",
  laptop: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%231e293b'/><rect x='90' y='40' width='220' height='140' rx='8' fill='%23334155' stroke='%2364748b' stroke-width='3'/><rect x='100' y='50' width='200' height='120' fill='%230f172a'/><circle cx='200' cy='100' r='20' fill='%232563eb'/><text x='200' y='106' font-family='sans-serif' font-weight='bold' font-size='16' fill='white' text-anchor='middle'>hp</text><text x='200' y='135' font-family='sans-serif' font-size='11' fill='%2394a3b8' text-anchor='middle'>ProBook</text><path d='M60 180 L340 180 L360 205 L40 205 Z' fill='%23475569'/><rect x='170' y='185' width='60' height='12' rx='2' fill='%2364748b'/></svg>",
  phone: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%23f1f5f9'/><rect x='140' y='20' width='120' height='220' rx='18' fill='%231e293b'/><rect x='146' y='26' width='108' height='208' rx='14' fill='%230f172a'/><circle cx='200' cy='40' r='4' fill='%23334155'/><text x='200' y='120' font-family='sans-serif' font-weight='bold' font-size='14' fill='%2338bdf8' text-anchor='middle'>Galaxy A14</text><circle cx='180' cy='200' r='8' fill='%232563eb'/><circle cx='220' cy='200' r='8' fill='%2310b981'/></svg>",
  book: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%23064e3b'/><path d='M0 0 L400 260' stroke='%23047857' stroke-width='40'/><rect x='80' y='20' width='240' height='220' rx='4' fill='%2315803d'/><text x='100' y='60' font-family='sans-serif' font-weight='bold' font-size='18' fill='%23fef08a'>O'REILLY</text><text x='100' y='110' font-family='sans-serif' font-weight='bold' font-size='24' fill='white'>Learning</text><text x='100' y='140' font-family='sans-serif' font-weight='bold' font-size='24' fill='white'>Web Design</text><text x='100' y='170' font-family='sans-serif' font-size='10' fill='%23bbf7d0'>HTML, CSS, JAVASCRIPT & GRAPHICS</text></svg>",
  clothes: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%231e1b4b'/><path d='M130 50 L170 80 L230 80 L270 50 L310 90 L270 120 L270 230 L130 230 L130 120 L90 90 Z' fill='%23312e81'/><text x='200' y='160' font-family='sans-serif' font-weight='bold' font-size='60' fill='%23818cf8' text-anchor='middle'>Z</text></svg>",
  apples: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='100%' height='100%' fill='%23450a0a'/><circle cx='150' cy='120' r='55' fill='%23dc2626'/><circle cx='240' cy='140' r='50' fill='%23b91c1c'/><circle cx='190' cy='170' r='45' fill='%23ef4444'/><path d='M150 65 Q160 40 170 50' stroke='%2315803d' stroke-width='5' fill='none'/></svg>"
};

// Initial Catalog Data linking to supplements/images/
const initialProducts = [
  {
    id: 1,
    title: "Casio FX-991 Scientific Calculator",
    category: "electronics",
    price: 2200,
    image: "supplements/images/casio fx991 calculator.jpg",
    fallback: visualFallbacks.calculator,
    phone: "+254712345678",
    description: "Ideal for Engineering & Business Math students. Original Casio in pristine condition."
  },
  {
    id: 2,
    title: "HP ProBook Laptop (Core i5, 8GB RAM)",
    category: "electronics",
    price: 24500,
    image: "supplements/images/l1.webp",
    fallback: visualFallbacks.laptop,
    phone: "+254722000111",
    description: "256GB SSD, long battery life, fast booting. Ideal for programming and coursework."
  },
  {
    id: 3,
    title: "Samsung Galaxy A14 (64GB)",
    category: "electronics",
    price: 13800,
    image: "supplements/images/samsung A14.jpeg",
    fallback: visualFallbacks.phone,
    phone: "+254755443322",
    description: "Dual SIM, crisp display, clean back cover included. Battery in excellent state."
  },
  {
    id: 4,
    title: "Learning Web Design Textbook (5th Edition)",
    category: "stationery",
    price: 1500,
    image: "supplements/images/web design book.webp",
    fallback: visualFallbacks.book,
    phone: "+254711223344",
    description: "A Beginner's Guide to HTML, CSS, JavaScript by Jennifer Robbins. Great for Computer Science students."
  },
  {
    id: 5,
    title: "Navy Blue Hoodie & Tracksuit Set (Size L)",
    category: "clothes",
    price: 1800,
    image: "supplements/images/cl22.jpg",
    fallback: visualFallbacks.clothes,
    phone: "+254733999888",
    description: "Comfortable navy blue hoodie set, warm fleece material for cool campus weather."
  },
  {
    id: 6,
    title: "Fresh Farm Red Apples (Pack of 6)",
    category: "fruits-vegetables",
    price: 180,
    image: "supplements/images/f7 - Copy.jpeg",
    fallback: visualFallbacks.apples,
    phone: "+254700123123",
    description: "Crisp red apples delivered near the Hostel 4 courtyard."
  }
];

// App State Management
let products = JSON.parse(localStorage.getItem('mmu_products_v4')) || initialProducts;
let currentUser = JSON.parse(localStorage.getItem('mmu_user')) || null;
let activeCategory = 'all';
let slideIndex = 0;
let uploadedBase64Image = "";

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  checkAuthUI();
  startCarouselTimer();
});

// Render Catalog Grid Items
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const searchVal = document.getElementById('searchInput').value.toLowerCase();

  const filtered = products.filter(p => {
    const matchesCategory = (activeCategory === 'all') || (p.category === activeCategory);
    const matchesSearch = p.title.toLowerCase().includes(searchVal) ||
                          p.description.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  document.getElementById('itemCount').innerText = `${filtered.length} Items`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #64748b;">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.5rem;"></i>
        <p>No products found matching your search filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const fallbackSrc = p.fallback || visualFallbacks.calculator;
    return `
      <div class="product-card">
        <div class="product-img-wrapper">
          <span class="category-badge">${p.category.replace('-', ' ')}</span>
          <img src="${p.image}" 
               alt="${p.title}" 
               class="product-img" 
               onerror="this.onerror=null; this.src='${fallbackSrc}';">
        </div>
        <div class="product-info">
          <div class="product-price">KSh ${p.price.toLocaleString()}</div>
          <h4 class="product-title">${p.title}</h4>
          <p class="product-desc">${p.description}</p>
          <a href="https://wa.me/${p.phone ? p.phone.replace(/[^0-9]/g, '') : ''}?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(p.title)}%20on%20MMU%20Market" 
             target="_blank" class="whatsapp-btn">
             <i class="fa-brands fa-whatsapp"></i> Chat with Seller
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Category Hypertext Link Filtering
function showCategory(category) {
  activeCategory = category;

  const links = document.querySelectorAll('.category-link');
  links.forEach(link => {
    if (link.getAttribute('onclick').includes(`'${category}'`)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const titleMap = {
    'all': 'All Published Campus Items',
    'clothes': 'Clothes & Fashion Wear',
    'stationery': 'Stationery & Academic Supplies',
    'electronics': 'Electronics (Phones, Laptops & Calculators)',
    'fruits-vegetables': 'Fresh Fruits & Vegetables'
  };
  document.getElementById('categoryHeading').innerText = titleMap[category] || 'Campus Listings';

  renderProducts();
}

function filterProducts() {
  renderProducts();
}

// Carousel Controls
function setSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');

  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  slides.forEach(s => s.classList.remove('active'));
  indicators.forEach(i => i.classList.remove('active'));

  slides[slideIndex].classList.add('active');
  indicators[slideIndex].classList.add('active');
}

function moveSlide(direction) {
  setSlide(slideIndex + direction);
}

function startCarouselTimer() {
  setInterval(() => {
    moveSlide(1);
  }, 6000);
}

function scrollToMarket() {
  document.getElementById('marketSection').scrollIntoView({ behavior: 'smooth' });
}

// Modal Controllers
function openModal(id) {
  if (id === 'postModal' && !currentUser) {
    alert('Please login or register first before posting an item!');
    openModal('authModal');
    return;
  }
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function openAuth(type) {
  openModal('authModal');
  toggleAuthTab(type);
}

function toggleAuthTab(type) {
  const loginF = document.getElementById('loginForm');
  const regF = document.getElementById('registerForm');
  const tabL = document.getElementById('tabLogin');
  const tabR = document.getElementById('tabRegister');

  if (type === 'login') {
    loginF.style.display = 'block';
    regF.style.display = 'none';
    tabL.classList.add('active');
    tabR.classList.remove('active');
  } else {
    loginF.style.display = 'none';
    regF.style.display = 'block';
    tabL.classList.remove('active');
    tabR.classList.add('active');
  }
}

// File Reader Preview
function previewSelectedImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedBase64Image = e.target.result;
      const imgPreview = document.getElementById('imagePreview');
      const container = document.getElementById('imagePreviewContainer');
      imgPreview.src = uploadedBase64Image;
      container.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// Authentication Handlers
function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;

  currentUser = { name, email };
  localStorage.setItem('mmu_user', JSON.stringify(currentUser));

  checkAuthUI();
  closeModal('authModal');
  alert(`Registration successful! Welcome to MMU Market, ${name}.`);
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const name = email.split('@')[0].toUpperCase();

  currentUser = { name, email };
  localStorage.setItem('mmu_user', JSON.stringify(currentUser));

  checkAuthUI();
  closeModal('authModal');
  alert('Logged in successfully!');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('mmu_user');
  checkAuthUI();
  alert('You have logged out.');
}

function checkAuthUI() {
  const guestBox = document.getElementById('guestButtons');
  const userBox = document.getElementById('userProfileBar');
  const nameDisplay = document.getElementById('userNameDisplay');

  if (currentUser) {
    guestBox.style.display = 'none';
    userBox.style.display = 'flex';
    nameDisplay.innerText = currentUser.name;
  } else {
    guestBox.style.display = 'flex';
    userBox.style.display = 'none';
  }
}

// Item Listing Form Submission
function handlePostItem(e) {
  e.preventDefault();

  let textPath = document.getElementById('itemImageText').value.trim();
  const cat = document.getElementById('itemCategory').value;
  
  if (textPath && !textPath.startsWith('supplements/images/') && !textPath.startsWith('http')) {
    textPath = 'supplements/images/' + textPath;
  }

  // Determine final image priority (Uploaded Base64 File > URL/Path > Fallback SVG)
  let finalImage = uploadedBase64Image || textPath;
  if (!finalImage) {
    if (cat === 'electronics') finalImage = visualFallbacks.calculator;
    else if (cat === 'stationery') finalImage = visualFallbacks.book;
    else if (cat === 'clothes') finalImage = visualFallbacks.clothes;
    else finalImage = visualFallbacks.apples;
  }

  const newItem = {
    id: Date.now(),
    title: document.getElementById('itemTitle').value,
    category: cat,
    price: Number(document.getElementById('itemPrice').value),
    image: finalImage,
    fallback: visualFallbacks.calculator,
    phone: document.getElementById('itemPhone').value,
    description: document.getElementById('itemDesc').value
  };

  products.unshift(newItem);
  localStorage.setItem('mmu_products_v4', JSON.stringify(products));

  renderProducts();
  closeModal('postModal');
  document.getElementById('postForm').reset();
  document.getElementById('imagePreviewContainer').style.display = 'none';
  uploadedBase64Image = "";
  alert('Your item has been published to the MMU Campus Market!');
}
