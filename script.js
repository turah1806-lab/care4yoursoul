/* Care4yoursoul - Professional Engineering Stylesheet */

:root {
    --bg-main: #fcfbfa;
    --surface-card: #ffffff;
    --text-primary: #2d2a26;
    --text-secondary: #6e6962;
    --accent-primary: #5c746a; /* Forest Sage Accent */
    --accent-hover: #465951;
    --accent-light: #eff3f1;
    --border-color: #e6e2dd;
    --price-color: #bd7a5c; /* Soft Terracotta */
    --shadow-sm: 0 2px 8px rgba(92, 116, 106, 0.06);
    --shadow-md: 0 8px 24px rgba(92, 116, 106, 0.1);
    --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: var(--font-stack);
    background-color: var(--bg-main);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

/* Header & Navigation */
.main-header {
    background-color: var(--surface-card);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 15px 20px;
    display: table;
    width: 100%;
}

.logo {
    display: table-cell;
    vertical-align: middle;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
    color: var(--text-primary);
}

.logo span {
    color: var(--accent-primary);
}

.nav-links {
    display: table-cell;
    text-align: right;
    vertical-align: middle;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 14px;
    margin-left: 25px;
    padding: 6px 0;
    transition: color 0.2s ease;
    display: inline-block;
}

.nav-links a:hover, .nav-links a.active {
    color: var(--accent-primary);
}

/* Main Layout Wrapper */
.app-container {
    max-width: 1140px;
    margin: 40px auto;
    padding: 0 20px;
}

/* Intro Section & UX Framework */
.intro-section {
    margin-bottom: 50px;
}

.badge {
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--accent-primary);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 15px;
}

.intro-section h2 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 15px 0;
    letter-spacing: -0.5px;
}

.intro-section p {
    font-size: 15px;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 0 30px 0;
}

/* UX Blueprint Card Container Layout */
.blueprint-card {
    background: var(--surface-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 25px;
    box-shadow: var(--shadow-sm);
}

.blueprint-card h3 {
    margin: 0 0 20px 0;
    font-size: 16px;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.blueprint-grid {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.blueprint-col {
    display: table-cell;
    width: 33.333%;
    padding-right: 20px;
    vertical-align: top;
}

.blueprint-col:last-child {
    padding-right: 0;
}

.blueprint-col h4 {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: var(--text-primary);
}

.blueprint-col p {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
}

/* Interactive Sections Common Header */
.interactive-section {
    background: var(--surface-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 35px;
    margin-bottom: 40px;
    box-shadow: var(--shadow-sm);
}

.section-title-area {
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 15px;
}

.section-title-area h2 {
    font-size: 20px;
    margin: 0 0 8px 0;
}

.section-title-area p {
    font-size: 14px;
    color: var(--text-secondary);
    margin: 0;
}

/* Module 1 Layout: Routine Builder Multi-Column Design */
.routine-builder-layout {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.control-panel {
    display: table-cell;
    width: 40%;
    padding-right: 35px;
    vertical-align: top;
}

.output-panel {
    display: table-cell;
    width: 60%;
    background-color: var(--bg-main);
    border-radius: 12px;
    padding: 25px;
    vertical-align: top;
    border: 1px dashed var(--border-color);
    min-height: 300px;
}

/* Forms and Inputs styling */
.form-group {
    margin-bottom: 25px;
}

.input-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.form-control {
    width: 100%;
    height: 44px;
    padding: 10px 14px;
    background-color: var(--surface-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 14px;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
}

.form-control:focus {
    border-color: var(--accent-primary);
}

/* Budget Range Slider Styling */
.budget-slider-container {
    padding-top: 10px;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--border-color);
    outline: none;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-primary);
    cursor: pointer;
    transition: transform 0.1s;
}

.slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
}

.slider-labels {
    display: table;
    width: 100%;
    margin-top: 8px;
    font-size: 12px;
    color: var(--text-secondary);
}

.slider-labels span {
    display: table-cell;
}

.slider-labels span:nth-child(2) {
    text-align: center;
}

.slider-labels span:last-child {
    text-align: right;
}

.current-budget-badge {
    font-weight: 700;
    color: var(--accent-primary);
    background-color: var(--accent-light);
    padding: 2px 8px;
    border-radius: 12px;
}

/* Buttons */
.btn {
    display: inline-block;
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s, transform 0.1s;
}

.btn-primary {
    background-color: var(--accent-primary);
    color: #ffffff;
}

.btn-primary:hover {
    background-color: var(--accent-hover);
}

.btn-primary:active {
    transform: scale(0.98);
}

/* Placeholder states */
.placeholder-state {
    text-align: center;
    padding: 60px 20px;
    color: var(--text-secondary);
}

.placeholder-icon {
    font-size: 36px;
    margin-bottom: 15px;
}

.placeholder-state p {
    font-size: 14px;
    max-width: 340px;
    margin: 0 auto;
}

/* Results state rendering style */
.results-header {
    display: table;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 12px;
}

.results-header h3 {
    display: table-cell;
    margin: 0;
    font-size: 16px;
    vertical-align: middle;
}

.total-cost-pill {
    display: table-cell;
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
}

.total-cost-pill strong {
    color: var(--price-color);
    font-size: 16px;
}

/* Items layout */
.items-grid {
    display: block;
}

.routine-item-row {
    background: var(--surface-card);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 12px 15px;
    margin-bottom: 10px;
    display: table;
    width: 100%;
}

.item-step-tag {
    display: table-cell;
    width: 90px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--accent-primary);
    vertical-align: middle;
}

.item-details {
    display: table-cell;
    vertical-align: middle;
}

.item-name {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 2px;
}

.item-purpose {
    font-size: 12px;
    color: var(--text-secondary);
}

.item-cost-col {
    display: table-cell;
    width: 70px;
    text-align: right;
    vertical-align: middle;
    font-weight: 700;
    color: var(--price-color);
    font-size: 14px;
}

/* Module 2: Search UI styling */
.search-container {
    margin-bottom: 25px;
}

.search-input-wrapper {
    position: relative;
    width: 100%;
}

.search-icon {
    position: absolute;
    left: 16px;
    top: 14px;
    font-size: 16px;
    color: var(--text-secondary);
}

#qa-search-input {
    width: 100%;
    height: 48px;
    padding: 10px 15px 10px 45px;
    font-size: 15px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    outline: none;
    background-color: var(--bg-main);
    transition: all 0.2s ease;
}

#qa-search-input:focus {
    border-color: var(--accent-primary);
    background-color: var(--surface-card);
    box-shadow: 0 0 0 3px rgba(92, 116, 106, 0.1);
}

/* Dynamic Knowledge cards layout */
.qa-cards-container {
    display: block;
}

.qa-card {
    background-color: var(--bg-main);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 12px;
    transition: border-color 0.2s;
}

.qa-card:hover {
    border-color: var(--accent-primary);
}

.qa-question {
    font-weight: 600;
    font-size: 14px;
    margin: 0 0 8px 0;
    color: var(--text-primary);
}

.qa-answer {
    font-size: 13px;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.qa-tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    background-color: #e2e8f0;
    color: #4a5568;
    padding: 2px 6px;
    border-radius: 4px;
    margin-top: 10px;
}

/* Module 3: Catalog grid layout */
.shop-grid {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 15px;
    margin-left: -15px;
    margin-right: -15px;
}

.shop-card {
    display: table-cell;
    width: 33.333%;
    background: var(--bg-main);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
    vertical-align: top;
    text-align: center;
}

.shop-card-badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    background-color: #feebc8;
    color: #c05621;
    padding: 2px 8px;
    border-radius: 10px;
    margin-bottom: 12px;
}

.shop-card h4 {
    margin: 0 0 6px 0;
    font-size: 15px;
    font-weight: 600;
}

.shop-card .product-volume {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 12px;
}

.shop-card .product-price {
    font-size: 18px;
    font-weight: 700;
    color: var(--price-color);
    margin-bottom: 15px;
}

.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--accent-primary);
    color: var(--accent-primary);
    height: 36px;
    font-size: 12px;
    border-radius: 6px;
}

.btn-secondary:hover {
    background-color: var(--accent-light);
}

/* Footer layout rules */
footer {
    text-align: center;
    padding: 40px 20px;
    font-size: 12px;
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
    margin-top: 60px;
}

/* Helpers */
.hidden {
    display: none !important;
}

/* Micro interaction adjustment */
@media (max-width: 768px) {
    .blueprint-grid, .routine-builder-layout, .shop-grid {
        display: block;
        width: 100%;
    }
    .blueprint-col, .control-panel, .output-panel, .shop-card {
        display: block;
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }
}
