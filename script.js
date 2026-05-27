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
    }
];

// Reactive State Management Container
const AppState = {
    cart: []
};

// 2. Application Logic Event Listeners Initializer
document.addEventListener('DOMContentLoaded', () => {
    initializeCartUI();
    initializeBudgetSlider();
    initializeRoutineBuilder();
    initializeKnowledgeBase();
    renderMarketplaceCatalog();
});

// 3. Floating Interactive Shopping Cart Engine
function initializeCartUI() {
    // Generate and inject the cart icon wrapper into the DOM body dynamically if not present
    if (!document.getElementById('floating-cart-wrapper')) {
        const cartWrapper = document.createElement('div');
        cartWrapper.id = 'floating-cart-wrapper';
        cartWrapper.style.cssText = `
            position: fixed;
            top: 85px;
            right: 25px;
            z-index: 1000;
            font-family: var(--font-stack);
        `;
        
        cartWrapper.innerHTML = `
            <div id="cart-trigger-node" style="background: var(--accent-primary); color: white; padding: 12px 18px; border-radius: 30px; cursor: pointer; box-shadow: var(--shadow-md); display: flex; align-items: center; gap: 8px; font-weight: 600; transition: transform 0.2s;">
                🛒 <span id="cart-counter-display">0</span> Items
            </div>
            <div id="cart-dropdown-panel" class="hidden" style="position: absolute; right: 0; top: 50px; width: 300px; background: white; border: 1px solid var(--border-color); border-radius: 12px; box-shadow: var(--shadow-md); padding: 15px; max-height: 400px; overflow-y: auto;">
                <h4 style="margin: 0 0 10px 0; font-size: 14px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; color: var(--text-primary);">Your Cart Matrix</h4>
                <div id="cart-items-list-container"></div>
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 13px; font-weight: 600;">Total Aggregate:</span>
                    <strong id="cart-aggregate-price" style="color: var(--price-color); font-size: 15px;">$0.00</strong>
                </div>
            </div>
        `;
        document.body.appendChild(cartWrapper);
    }

    // Toggle Dropdown Panel Frame
    const trigger = document.getElementById('cart-trigger-node');
    const panel = document.getElementById('cart-dropdown-panel');
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        panel.classList.add('hidden');
    });

    panel.addEventListener('click', (e) => e.stopPropagation());
}

function addProductToCart(productId) {
    const targetProduct = PRODUCT_CATALOG.find(item => item.id === productId);
    if (!targetProduct) return;

    AppState.var = AppState.cart.push(targetProduct);
    synchronizeCartDOM();
    
    // Tiny micro-interaction feedback pop animation
    const trigger = document.getElementById('cart-trigger-node');
    trigger.style.transform = 'scale(1.1)';
    setTimeout(() => trigger.style.transform = 'scale(1)', 200);
}

function synchronizeCartDOM() {
    const listContainer = document.getElementById('cart-items-list-container');
    const counterDisplay = document.getElementById('cart-counter-display');
    const aggregateDisplay = document.getElementById('cart-aggregate-price');
    
    counterDisplay.textContent = AppState.cart.length;
    listContainer.innerHTML = '';

    if (AppState.cart.length === 0) {
        listContainer.innerHTML = `<p style="font-size: 12px; color: var(--text-secondary); text-align: center; margin: 20px 0;">Cart framework empty.</p>`;
        aggregateDisplay.textContent = '$0.00';
        return;
    }

    let computationSum = 0;
    AppState.cart.forEach((item, index) => {
        computationSum += item.price;
        const itemRow = document.createElement('div');
        itemRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px;';
        itemRow.innerHTML = `
            <div style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <span style="color: var(--accent-primary); font-weight:700;">•</span> ${item.name}
            </div>
            <div style="font-weight: 600; color: var(--price-color); display: flex; align-items: center; gap: 8px;">
                $${item.price.toFixed(2)}
                <span onclick="removeProductFromCart(${index})" style="color: red; cursor: pointer; font-size: 10px;">✕</span>
            </div>
        `;
        listContainer.appendChild(itemRow);
    });

    aggregateDisplay.textContent = `$${computationSum.toFixed(2)}`;
}

function removeProductFromCart(index) {
    AppState.cart.splice(index, 1);
    synchronizeCartDOM();
}

// 4. Dynamic Budget Slider Text Synchronizer
function initializeBudgetSlider() {
    const slider = document.getElementById('budget-range');
    const displayVal = document.getElementById('budget-val');
    
    if (slider && displayVal) {
        slider.addEventListener('input', (e) => {
            displayVal.textContent = e.target.value;
        });
    }
}

// 5. Algorithmic Multi-Step Routine & Budget Constraint Router
function initializeRoutineBuilder() {
    const buildBtn = document.getElementById('build-routine-btn');
    
    if (buildBtn) {
        buildBtn.addEventListener('click', () => {
            const selectedConcern = document.getElementById('skin-concern').value;
            const maxAllowedBudget = parseFloat(document.getElementById('budget-range').value);
            
            let matchingProducts = PRODUCT_CATALOG.filter(item => item.concern === selectedConcern);
            let aggregateCost = matchingProducts.reduce((sum, item) => sum + item.price, 0);
            
            if (aggregateCost > maxAllowedBudget) {
                matchingProducts = matchingProducts.filter(item => item.step !== 'Treat');
                aggregateCost = matchingProducts.reduce((sum, item) => sum + item.price, 0);
            }
            
            displayRoutineOutput(matchingProducts, aggregateCost);
        });
    }
}

function displayRoutineOutput(products, totalCost) {
    const placeholder = document.getElementById('routine-placeholder');
    const resultsContainer = document.getElementById('routine-results');
    const itemsGrid = document.getElementById('routine-items-grid');
    const costDisplay = document.getElementById('total-routine-cost');
    
    placeholder.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    costDisplay.textContent = `$${totalCost.toFixed(2)}`;
    itemsGrid.innerHTML = '';
    
    products.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'routine-item-row';
        itemRow.innerHTML = `
            <div class="item-step-tag">${item.step}</div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-purpose">Optimized for sensitive skin profiles • ${item.volume}</div>
                <button class="btn btn-secondary" style="height: 24px; font-size: 10px; width: auto; margin-top: 5px; padding: 0 8px;" onclick="addProductToCart('${item.id}')">Add step to cart</button>
            </div>
            <div class="item-cost-col">$${item.price.toFixed(2)}</div>
        `;
        itemsGrid.appendChild(itemRow);
    });
}

// 6. Zero-Latency Local Cache + Live Web Search API Router
function initializeKnowledgeBase() {
    const searchInput = document.getElementById('qa-search-input');
    
    if (searchInput) {
        renderKnowledgeCards(KNOWLEDGE_BASE_DATA);
        
        // Debounce timer to prevent rapid, repetitive web endpoint requests
        let queryDebounceTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(queryDebounceTimeout);
            const query = e.target.value.toLowerCase().trim();
            
            if (query === '') {
                renderKnowledgeCards(KNOWLEDGE_BASE_DATA);
                return;
            }
            
            // First pass: Filter fallback local items immediately
            const localFiltered = KNOWLEDGE_BASE_DATA.filter(qa => {
                return qa.question.toLowerCase().includes(query) || 
                       qa.answer.toLowerCase().includes(query) ||
                       qa.tags.some(tag => tag.toLowerCase().includes(query));
            });

            renderKnowledgeCards(localFiltered);

            // Second pass: Schedule global asynchronous live search loop if user stops typing
            queryDebounceTimeout = setTimeout(() => {
                dispatchLiveWebQuery(query, localFiltered);
            }, 750); 
        });
    }
}

// Asynchronous Web Search Routing Frame
async function dispatchLiveWebQuery(queryString, localResults) {
    const resultsContainer = document.getElementById('qa-results');
    
    // Append a micro-state loader indicator badge
    let loaderStatusNode = document.getElementById('live-search-loading-indicator');
    if (!loaderStatusNode) {
        loaderStatusNode = document.createElement('div');
        loaderStatusNode.id = 'live-search-loading-indicator';
        loaderStatusNode.style.cssText = 'font-size: 11px; color: var(--accent-primary); padding: 5px; text-align: center; font-style: italic;';
        resultsContainer.insertBefore(loaderStatusNode, resultsContainer.firstChild);
    }
    loaderStatusNode.textContent = `🔍 Scanning global database for "${queryString}"...`;

    try {
        /* INTEGRATION ARCHITECTURE NOTE:
           Replace the placeholder URL below with your actual live search engine API endpoint 
           (e.g., Google Custom Search, Bing Web Search API, or a custom serverless edge worker).
        */
        const targetSearchEndpoint = `https://api.skincaredatabase.example/search?q=${encodeURIComponent(queryString)}`;
        
        // Timeout protection logic configuration
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        // Mock simulated data fallback for verification out-of-the-box
        // In production, comment out this mock block and uncomment the actual fetch lines below.
        const responseData = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        question: `Live Web Result: Found clinical data for "${queryString}"`,
                        answer: `Recent research updates show that stabilizing the epidermal barrier using non-comedogenic elements provides high relief profiles for users asking about ${queryString}. Formulations with minimalist ingredient lists remain ideal.`,
                        tags: ["web-result", "clinical-data"]
                    }
                ]);
            }, 600);
        });

        /* UNCOMMENT THIS REAL FRAME WHEN API ENDPOINT IS PROVISIONED:
        const response = await fetch(targetSearchEndpoint, { signal: controller.signal });
        clearTimeout(timeoutId);
        const data = await response.json();
        const responseData = data.results.map(item => ({
             question: item.title,
             answer: item.snippet,
             tags: ["live-web"]
        }));
        */

        loaderStatusNode.remove();
        
        // Merge fallback local matches safely with incoming live streams
        const consolidatedDeck = [...localResults, ...responseData];
        
        // De-duplicate any structural collisions matching identically on title text
        const uniformCacheMap = new Map();
        consolidatedDeck.forEach(obj => uniformCacheMap.set(obj.question, obj));
        
        renderKnowledgeCards(Array.from(uniformCacheMap.values()));

    } catch (apiNetworkError) {
        console.warn("Live database connection paused or unavailable:", apiNetworkError);
        if (loaderStatusNode) {
            loaderStatusNode.textContent = "⚠️ Live web sync offline. Displaying local offline records.";
            setTimeout(() => loaderStatusNode.remove(), 2500);
        }
    }
}

function renderKnowledgeCards(dataArray) {
    const resultsContainer = document.getElementById('qa-results');
    
    // Retain loader status token frame during array mutation clears
    const loaderInstance = document.getElementById('live-search-loading-indicator');
    resultsContainer.innerHTML = '';
    if (loaderInstance) resultsContainer.appendChild(loaderInstance);
    
    if (dataArray.length === 0 && !loaderInstance) {
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
        
        const isWebResult = item.tags.includes('web-result');
        const iconSymbol = isWebResult ? "🌐" : "🤔";
        const customCardStyling = isWebResult ? 'border: 1px solid rgba(43,108,176,0.3); background-color: #f7fafc;' : '';
        
        if (customCardStyling) card.style.cssText = customCardStyling;
        
        const tagsHTML = item.tags.map(t => `<span class="qa-tag">#${t}</span>`).join(' ');
        
        card.innerHTML = `
            <h4 class="qa-question">${iconSymbol} ${item.question}</h4>
            <p class="qa-answer">${item.answer}</p>
            <div style="margin-top:5px;">${tagsHTML}</div>
        `;
        resultsContainer.appendChild(card);
    });
}

// 7. Marketplace Display Hydration Controller
function renderMarketplaceCatalog() {
    const catalogContainer = document.getElementById('shop-catalog');
    if (!catalogContainer) return;
    
    catalogContainer.innerHTML = '';
    
    const highlightProducts = PRODUCT_CATALOG.slice(0, 3);
    
    highlightProducts.forEach(prod => {
        const productCard = document.createElement('div');
        productCard.className = 'shop-card';
        productCard.innerHTML = `
            <span class="shop-card-badge">Affordable Essential</span>
            <h4>${prod.name}</h4>
            <div class="product-volume">${prod.volume} Base Matrix</div>
            <div class="product-price">$${prod.price.toFixed(2)}</div>
            <button class="btn btn-secondary" onclick="addProductToCart('${prod.id}')">Quick Add</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}
