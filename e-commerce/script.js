const products = [
    {
        id: 1, title: "Nike SB Dunk Low Jarritos", brand: "Nike", price: 69999, rating: 4.8,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Premium canvas and leather upper", "Tear-away overlays revealing safety orange", "Jarritos jug logo on the heel", "Zoom Air unit in the heel for cushioning"]
    },
    {
        id: 2, title: "Air Jordan 1 Retro High", brand: "Jordan", price: 15499, rating: 4.5,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Classic high-top silhouette", "Full-grain leather upper", "Encapsulated Air-Sole unit", "Solid rubber outsole with deep flex grooves"]
    },
    {
        id: 3, title: "Adidas Yeezy Boost 350", brand: "Adidas", price: 22999, rating: 4.9,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Primeknit upper for adaptive fit", "Full-length BOOST midsole", "Translucent monofilament side stripe", "Sock-like construction"]
    },
    {
        id: 4, title: "New Balance 550 White/Green", brand: "New Balance", price: 11999, rating: 4.6,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Retro 1989 basketball design", "Leather, synthetic, and mesh upper", "Adjustable lace closure", "Rubber outsole for traction"]
    },
    {
        id: 5, title: "Puma RS-X3 Puzzle", brand: "Puma", price: 8999, rating: 4.2,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Bulky 80s RS silhouette", "Mesh upper with suede overlays", "PU midsole for lightweight cushioning", "Rubber outsole for grip"]
    },
    {
        id: 6, title: "Converse Chuck Taylor All Star", brand: "Converse", price: 4999, rating: 4.7,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwcqi9_xnmEPNt-rpYvrwCQghcja-MlTLXTmFppHMTDgpHd90o5h3n3TiWh96orSiUUaO0a3S5D7wL0FcKryZdN5AbctSNBPD-z7oWMO4sGtIOb2fuzfFh",
        features: ["Durable canvas upper", "Classic star ankle patch", "OrthoLite insole for comfort", "Diamond pattern outsole"]
    }
];

let cart = [];
const cartCountBadge = document.getElementById('cart-count');
const toastContainer = document.getElementById('toast-container');
const searchInput = document.getElementById('search-input');

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
};

window.navigate = (viewId) => {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
        view.classList.add('hidden');
    });

    // Show target view
    const targetView = document.getElementById(viewId);
    targetView.classList.remove('hidden');
    targetView.classList.add('active');

    if (viewId === 'collections-view') {
        renderProducts(products, 'product-grid');
        searchInput.value = ''; // clear search
    }
};

const renderProducts = (productsToRender, containerId) => {
    const grid = document.getElementById(containerId);
    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        grid.innerHTML = `<div class="no-results">No sneakers found matching your criteria.</div>`;
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <section class="img-container" onclick="viewDetails(${product.id})">
                <img src="${product.image}" alt="${product.title}">
            </section>
            <section class="info-container">
                <h3 class="product-title" onclick="viewDetails(${product.id})">${product.title}</h3>
                <div class="price-rating-row">
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <span class="rating">${product.rating} ★</span>
                </div>
                <button class="buy-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </section>
        `;
        grid.appendChild(card);
    });
};

window.viewDetails = (productId) => {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    // Build the features list
    let featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="modal-info">
            <h2>${product.title}</h2>
            <h3>${formatPrice(product.price)}</h3>
            <p style="margin-bottom: 10px;"><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Features & Characteristics:</strong></p>
            <ul class="modal-features">
                ${featuresHTML}
            </ul>
            <button class="buy-btn" onclick="addToCart(${product.id}); closeModal();" style="width: 200px;">Add to Cart</button>
        </div>
    `;

    modal.classList.remove('hidden');
};

window.closeModal = () => {
    document.getElementById('product-modal').classList.add('hidden');
};

// Close modal if clicking outside the white box
document.getElementById('product-modal').addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') closeModal();
});

// --- 6. Search & Filters ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Automatically switch to collections view to show search results
    if (document.getElementById('collections-view').classList.contains('hidden')) {
        navigate('collections-view');
    }

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered, 'product-grid');
});

window.filterByBrand = (brandName) => {
    navigate('collections-view');
    const filtered = products.filter(p => p.brand === brandName);
    renderProducts(filtered, 'product-grid');

    // Set search bar to show what we filtered by
    searchInput.value = brandName;
};

// ---Cart & Notifications ---
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    cartCountBadge.innerText = cart.length;

    cartCountBadge.style.transform = 'scale(1.5)';
    setTimeout(() => { cartCountBadge.style.transform = 'scale(1)'; }, 200);

    showToast(`${product.title} added to cart!`);
};

const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `✅ ${message}`;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
};

renderProducts(products.slice(0, 4), 'featured-grid');
document.getElementById('stat-collections').innerText = products.length;