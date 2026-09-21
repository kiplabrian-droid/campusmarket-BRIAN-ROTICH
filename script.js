// Week 2: Filtering Logic
const filter = document.getElementById('filter');
const items = document.querySelectorAll('.item');

filter.addEventListener('change', () => {
  const value = filter.value;
  items.forEach(item => {
    item.style.display = value === 'all' || item.classList.contains(value)
      ? 'block'
      : 'none';
  });
});

// Week 3: Form Validation and Dynamic Addition
document.getElementById('addItemForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('itemName').value.trim();
  const price = document.getElementById('itemPrice').value.trim();
  const category = document.getElementById('itemCategory').value;
  const email = document.getElementById('sellerEmail').value.trim();

  // Validation
  if (!name || !price || !category || !email) {
    alert('All fields are required!');
    return;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Create new item dynamically
  const newItem = document.createElement('div');
  newItem.classList.add('item', category);
  newItem.innerHTML = `
    <img src="images/default.jpg" alt="${name}">
    <h3>${name}</h3>
    <p>Price: KSh ${price}</p>
  `;
  document.querySelector('.catalog').appendChild(newItem);

  alert('Item added successfully!');
  e.target.reset();
});

