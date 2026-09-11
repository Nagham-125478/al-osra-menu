// افتراض سعر موحد مبدئياً لجميع العناصر (مثلاً 2.00 د.أ) بما أنه لا يوجد أسعار بالمنيو الأصلي
const DEFAULT_PRICE = 2.00;

const menuItems = [
    // الرئيسي
    { id: 1, name: "حمص", category: "main", price: DEFAULT_PRICE },
    { id: 2, name: "حمص بيروتي", category: "main", price: DEFAULT_PRICE },
    { id: 3, name: "فول", category: "main", price: DEFAULT_PRICE },
    { id: 4, name: "مسبحة", category: "main", price: DEFAULT_PRICE },
    { id: 5, name: "متّبل", category: "main", price: DEFAULT_PRICE },
    { id: 6, name: "القاسمية", category: "main", price: DEFAULT_PRICE },
    { id: 7, name: "قدسية", category: "main", price: DEFAULT_PRICE },
    { id: 8, name: "جبنة حلوم مشوي", category: "main", price: DEFAULT_PRICE },
    { id: 9, name: "جبنة حلوم", category: "main", price: DEFAULT_PRICE },
    { id: 10, name: "لبنة", category: "main", price: DEFAULT_PRICE },
    { id: 11, name: "مقدوس بالجوز", category: "main", price: DEFAULT_PRICE },
    { id: 12, name: "جبنة قشقوان", category: "main", price: DEFAULT_PRICE },
    { id: 13, name: "فلفل عادي 5 حبات", category: "main", price: DEFAULT_PRICE },
    { id: 14, name: "فلفل محشي الحبة", category: "main", price: DEFAULT_PRICE },

    // الساخن
    { id: 15, name: "لحمة ع حمص", category: "hot", price: DEFAULT_PRICE },
    { id: 16, name: "كبدة دجاج", category: "hot", price: DEFAULT_PRICE },
    { id: 17, name: "كبدة غنم", category: "hot", price: DEFAULT_PRICE },
    { id: 18, name: "قلاية سادة", category: "hot", price: DEFAULT_PRICE },
    { id: 19, name: "قلاية باللحمة", category: "hot", price: DEFAULT_PRICE },
    { id: 20, name: "قلاية رأس عصفور", category: "hot", price: DEFAULT_PRICE },
    { id: 21, name: "مفركة", category: "hot", price: DEFAULT_PRICE },
    { id: 22, name: "بيض عجة", category: "hot", price: DEFAULT_PRICE },
    { id: 23, name: "بيض عيون", category: "hot", price: DEFAULT_PRICE },
    { id: 24, name: "بيض حسب الطلب", category: "hot", price: DEFAULT_PRICE },
    { id: 25, name: "سجق بلدي", category: "hot", price: DEFAULT_PRICE },
    { id: 26, name: "سجق مع بيض", category: "hot", price: DEFAULT_PRICE },
    { id: 27, name: "صاجية لحمة", category: "hot", price: DEFAULT_PRICE },
    { id: 28, name: "فهيتا", category: "hot", price: DEFAULT_PRICE },
    { id: 29, name: "دجاج بالكريما", category: "hot", price: DEFAULT_PRICE },
    { id: 30, name: "كفتة طحينية", category: "hot", price: DEFAULT_PRICE },
    { id: 31, name: "كفتة بندورة", category: "hot", price: DEFAULT_PRICE },
    { id: 32, name: "بطاطا حارة", category: "hot", price: DEFAULT_PRICE },
    { id: 33, name: "بطاطا قلي", category: "hot", price: DEFAULT_PRICE },
    { id: 34, name: "نقانق مع خضار", category: "hot", price: DEFAULT_PRICE },
    { id: 35, name: "نقانق مع بيض", category: "hot", price: DEFAULT_PRICE },
    { id: 36, name: "فريكة مع الكريمة", category: "hot", price: DEFAULT_PRICE },
    { id: 37, name: "فريكة مع الدجاج المشوي", category: "hot", price: DEFAULT_PRICE },

    // المشاوي
    { id: 38, name: "وجبة مشكل", category: "grill", price: DEFAULT_PRICE },
    { id: 39, name: "وجبة كباب", category: "grill", price: DEFAULT_PRICE },
    { id: 40, name: "وجبة شيش طاووق", category: "grill", price: DEFAULT_PRICE },
    { id: 41, name: "دجاج مشوي على الفحم", category: "grill", price: DEFAULT_PRICE },
    { id: 42, name: "سجق مشوي على الفحم", category: "grill", price: DEFAULT_PRICE },

    // السندويشات
    { id: 43, name: "حمص وفلافل", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 44, name: "حمص باللحمة", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 45, name: "كبده دجاج", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 46, name: "كبده غنم", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 47, name: "مفركة", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 48, name: "غمغوط", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 49, name: "نقانق", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 50, name: "بيض", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 51, name: "قشقوان", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 52, name: "لبنه مع سنيورة", category: "sandwiches", price: DEFAULT_PRICE },
    { id: 53, name: "سنيورة مع مخلل", category: "sandwiches", price: DEFAULT_PRICE },

    // السلطات
    { id: 54, name: "تبولة", category: "salads", price: DEFAULT_PRICE },
    { id: 55, name: "جرجير", category: "salads", price: DEFAULT_PRICE },
    { id: 56, name: "فتوش", category: "salads", price: DEFAULT_PRICE },
    { id: 57, name: "سلطة بطحينية", category: "salads", price: DEFAULT_PRICE },
    { id: 58, name: "سلطة فلاحية", category: "salads", price: DEFAULT_PRICE },
    { id: 59, name: "بابا غنوج", category: "salads", price: DEFAULT_PRICE },

    // المشروبات
    { id: 60, name: "عصير برتقال طبيعي", category: "drinks", price: DEFAULT_PRICE },
    { id: 61, name: "عصير ليمون", category: "drinks", price: DEFAULT_PRICE },
    { id: 62, name: "عصير ليمون مع نعنع", category: "drinks", price: DEFAULT_PRICE },
    { id: 63, name: "عيران", category: "drinks", price: DEFAULT_PRICE },
    { id: 64, name: "مياه معدنية", category: "drinks", price: DEFAULT_PRICE },
    { id: 65, name: "مشروبات غازية", category: "drinks", price: DEFAULT_PRICE },
    { id: 66, name: "قهوة", category: "drinks", price: DEFAULT_PRICE },

    // الإضافات
    { id: 67, name: "تتبيلة", category: "extras", price: DEFAULT_PRICE },
    { id: 68, name: "شطة", category: "extras", price: DEFAULT_PRICE },
    { id: 69, name: "زيت زيتون", category: "extras", price: DEFAULT_PRICE },
    { id: 70, name: "فلافل", category: "extras", price: DEFAULT_PRICE },
    { id: 71, name: "كبة", category: "extras", price: DEFAULT_PRICE },
    { id: 72, name: "فلافل محشي", category: "extras", price: DEFAULT_PRICE },
    { id: 73, name: "سمبوسك جبنة", category: "extras", price: DEFAULT_PRICE },
    { id: 74, name: "سمبوسك لحمة", category: "extras", price: DEFAULT_PRICE }
];

let cart = [];

// عرض الكروت في الواجهة مع أزرار الإضافة
function displayMenuItems(items) {
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <span class="item-price">${item.price.toFixed(2)} د.أ</span>
            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">إضافة للسلة +</button>
        `;
        container.appendChild(card);
    });
}

// إضافة عنصر للسلة
function addToCart(id) {
    const item = menuItems.find(prod => prod.id === id);
    const cartItem = cart.find(prod => prod.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
}

// التعديل على الكميات
function changeQuantity(id, change) {
    const cartItem = cart.find(prod => prod.id === id);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(prod => prod.id !== id);
        }
    }
    updateCartUI();
}

// تحديث الواجهة للسلة والحساب الإجمالي
function updateCartUI() {
    const cartContainer = document.getElementById("cartItemsContainer");
    const cartCount = document.getElementById("cartCount");
    const totalAmount = document.getElementById("totalAmount");

    cartContainer.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-msg">السلة فارغة حالياً</p>`;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;

            const cartRow = document.createElement("div");
            cartRow.className = "cart-item";
            cartRow.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${itemTotal.toFixed(2)} د.أ</span>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartContainer.appendChild(cartRow);
        });
    }

    cartCount.textContent = count;
    totalAmount.textContent = `${total.toFixed(2)} د.أ`;
}

// إظهار/إخفاء السلة
function toggleCart() {
    const modal = document.getElementById("cartModal");
    modal.classList.toggle("active");
}

// الفلترة والبحث
function filterCategory(category) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenuItems(filtered);
    }
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayMenuItems(filtered);
});

displayMenuItems(menuItems);