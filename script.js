// Care4yoursoul - Core Application JavaScript Database and UI Interaction Controllers

// 1. Production Seed Data Models (Engineered to reflect affordable target ceilings)
const PRODUCT_CATALOG = [
    { id: 'c1', name: 'Hydrating Amino Cleanser', concern: 'eczema', step: 'Cleanse', price: 8.50, volume: '150ml' },
    { id: 'c2', name: 'Salicylic Acid Balancing Wash', concern: 'pimple', step: 'Cleanse', price: 9.00, volume: '120ml' },
    { id: 'c3', name: 'Gentle Brightening Rice Cleanser', concern: 'hyperpigmentation', step: 'Cleanse', price: 9.50, volume: '150ml' },
    
    { id: 't1', name: 'Colloidal Oatmeal Calming Serum', concern: 'eczema', step: 'Treat', price: 11.00, volume: '30ml' },
    { id: 't2', name: 'Zinc PCA Oil-Control Serum', concern: 'pimple', step: 'Treat', price: 10.50, volume: '30ml' },
    { id: 't3', name: 'Pure Niacinamide 5% Dark Spot Serum', concern: 'hyperpigmentation', step: 'Treat', price: 12.00, volume: '30ml' },
    
    { id: 'm1', name: 'Ceramide Barrier Restoring Cream', concern: 'eczema', step: 'Moisturize', price: 10.00, volume: '75ml' },
    { id: 'm2', name: 'Ultra-Lightweight Squalane Gel', concern: 'pimple', step: 'Moisturize', price: 9.50, volume: '50ml' },
    { id: 'm3', name: 'Vitamin C Infused Radiant Moisturizer', concern: 'hyperpigmentation', step: 'Moisturize', price: 11.50, volume: '50ml' }
];

const KNOWLEDGE_BASE_DATA = [
    {
        question: "How do I care for my skin when dealing with severe eczema flare-ups on a tight budget?",
        answer: "Focus strictly on lipid barrier restoration. Eliminate expensive exfoliants or scents. Use a low-pH, non-foaming cleanser followed immediately by a thick ceramide or colloidal oatmeal barrier cream on damp skin. This traps hydration effectively at a fraction of premium retail margins.",
        tags: ["eczema", "dryness", "barrier"]
    },
    {
        question: "Will affordable skincare products trigger more pimples and breakouts?",
        answer: "No. Price does not correlate with performance. Breakouts are mitigated by active molecules like Salicylic Acid (BHA) and Zinc PCA which clear sebum channels. Look for transparent, fragrance-free formulations rather than high luxury price tags.",
        tags: ["pimple", "acne", "oil"]
    },
    {
        question: "What is the cheapest way to clear hyperpigmentation and persistent dark spots safely?",
        answer: "Niacinamide (Vitamin B3) at 5% concentration is highly affordable and exceptionally reliable for halting pigment transfer. Combine this with daily zinc-based mineral sun protection to prevent the UV loops that darken spot profiles.",
        tags: ["hyperpigmentation", "dark spots"]
    },
    {
        question: "Can I mix acne treatments with eczema-prone dry skin?",
        answer: "Exercise extreme caution. Harsh spot treatments can exacerbate eczema patches. Use spot applications of gentle BHA only to active acne zones, while protecting your surrounding face matrix with nourishing ceramides.",
        tags: ["pimple", "eczema", "dryness"]
    }
];

// 2. Application Logic Event Listeners Initializer
document.addEventListener('DOMContentLoaded', () => {
    initializeBudgetSlider();
    initializeRoutineBuilder();
    initializeKnowledgeBase();
    renderMarketplaceCatalog();
});

// 3. Dynamic Budget Slider Text Synchronizer
function initializeBudgetSlider() {
    const slider = document.getElementById('budget-range');
    const displayVal = document.getElementById('budget-val');
    
    if (slider && displayVal) {
        slider.addEventListener('input', (e) => {
            displayVal.textContent = e.target.value;
        });
    }
}

// 4. Algorithmic Multi-Step Routine & Budget Constraint Router
function initializeRoutineBuilder() {
    const buildBtn = document.getElementById('build-routine-btn');
    
    if (buildBtn) {
        buildBtn.addEventListener('click', () => {
            const selectedConcern = document.getElementById('skin-concern').value;
            const maxAllowedBudget = parseFloat(document.getElementById('budget-range').value);
            
            // Querying structural data specific to targeted concern vector
            let matchingProducts = PRODUCT_CATALOG.filter(item => item.concern === selectedConcern);
            
            // Calculate baseline aggregate cost
            let aggregateCost = matchingProducts.reduce((sum, item) => sum + item.price, 0);
            
            // Dynamic Budget optimization fallback loop (Human-Centered Engineering safety valve)
            if (aggregateCost > maxAllowedBudget) {
                // If the entire 3-step routine breaches the budget threshold, fallback intelligently
                // We drop the treatment element first to secure foundational Cleanse & Moisturize parameters.
                matchingProducts = matchingProducts.filter(item => item.step !== 'Treat');
                aggregateCost = matchingProducts.reduce((sum, item) => sum + item.price, 0);
            }
            
            displayRoutineOutput(matchingProducts, aggregateCost);
        });
    }
}

// Helper presentation controller for rendering the optimized layout
function displayRoutineOutput(products, totalCost) {
    const placeholder = document.getElementById('routine-placeholder');
    const resultsContainer = document.getElementById('routine-results');
    const itemsGrid = document.getElementById('routine-items-grid');
    const costDisplay = document.getElementById('total-routine-cost');
    
    placeholder.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    costDisplay.textContent = `$${totalCost.toFixed(2)}`;
    itemsGrid.innerHTML = ''; // Purge prior frame DOM tokens
    
    products.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'routine-item-row';
        itemRow.innerHTML = `
            <div class="item-step-tag">${item.step}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-purpose">Optimized for sensitive skin profiles • ${item.volume}</div>
            </div>
            <div class="item-cost-col">$${item.price.toFixed(2)}</div>
        `;
        itemsGrid.appendChild(itemRow);
    });
}

// 5. Zero-Latency Filtering Knowledge Base Engine
function initializeKnowledgeBase() {
    const searchInput = document.getElementById('qa-search-input');
    
    if (searchInput) {
        // Hydrate default state view on empty load buffer
        renderKnowledgeCards(KNOWLEDGE_BASE_DATA);
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query === '') {
                renderKnowledgeCards(KNOWLEDGE_BASE_DATA);
                return;
            }
            
            const filtered = KNOWLEDGE_BASE_DATA.filter(qa => {
                return qa.question.toLowerCase().includes(query) || 
                       qa.answer.toLowerCase().includes(query) ||
                       qa.tags.some(tag => tag.toLowerCase().includes(query));
            });
            
            renderKnowledgeCards(filtered);
        });
    }
}

function renderKnowledgeCards(dataArray) {
    const resultsContainer = document.getElementById('qa-results');
    resultsContainer.innerHTML = '';
    
    if (dataArray.length === 0) {
        resultsContainer.innerHTML = `
            <div class="placeholder-state">
                <p>No explicit Q&A flags matched your search. Try looking for general terms like "eczema", "pimple", "budget", or "hyperpigmentation".</p>
            </div>
        `;
        return;
    }
    
    dataArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'qa-card';
        
        const tagsHTML = item.tags.map(t => `<span class="qa-tag">#${t}</span>`).join(' ');
        
        card.innerHTML = `
            <h4 class="qa-question">🤔 ${item.question}</h4>
            <p class="qa-answer">${item.answer}</p>
            <div style="margin-top:5px;">${tagsHTML}</div>
        `;
        resultsContainer.appendChild(card);
    });
}

// 6. Marketplace Display Hydration Controller
function renderMarketplaceCatalog() {
    const catalogContainer = document.getElementById('shop-catalog');
    if (!catalogContainer) return;
    
    catalogContainer.innerHTML = '';
    
    // Select a beautiful representation set for preview
    const highlightProducts = PRODUCT_CATALOG.slice(0, 3);
    
    highlightProducts.forEach(prod => {
        const productCard = document.createElement('div');
        productCard.className = 'shop-card';
        productCard.innerHTML = `
            <span class="shop-card-badge">Affordable Essential</span>
            <h4>${prod.name}</h4>
            <div class="product-volume">${prod.volume} Base Matrix</div>
            <div class="product-price">$${prod.price.toFixed(2)}</div>
            <button class="btn btn-secondary" onclick="alert('Demo Instance: ${prod.name} added to cart via mock state management.')">Quick Add</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}
