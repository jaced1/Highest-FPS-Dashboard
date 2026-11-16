/**
 * Discord Bot Dashboard Logic Engine
 * @author Veqris (For JulesFX)
 * @license GPL-3.0
 */

document.addEventListener('DOMContentLoaded', () => {
    applyConfigData();
    initCounterAnimations();
    renderFeatures();
    renderCommands('all');
    renderFaq();
    initSearchFilter();
    initCategoryTabs();
    simulatePingMetric();
});

// --- Apply Config Data ---
function applyConfigData() {
    if (typeof CONFIG === 'undefined') return;

    // Bot Identity
    setText('nav-bot-name', CONFIG.botName);
    setText('hero-bot-name', CONFIG.botName);
    setText('footer-bot-name', CONFIG.botName);
    setText('hero-tagline', CONFIG.botTagline);
    setText('hero-bot-desc', CONFIG.botDescription);

    // Bot Avatar
    if (CONFIG.botAvatar) {
        const avatarEl = document.getElementById('nav-bot-avatar');
        if (avatarEl) avatarEl.src = CONFIG.botAvatar;
    }

    // Links
    setHref('nav-invite-btn', CONFIG.inviteLink);
    setHref('hero-invite-btn', CONFIG.inviteLink);
    setHref('hero-support-btn', CONFIG.supportServerLink);
    setHref('footer-invite', CONFIG.inviteLink);
    setHref('footer-support', CONFIG.supportServerLink);
    setHref('footer-website', CONFIG.websiteLink);

    // Set Data Target for Counter Animations
    if (CONFIG.stats) {
        setCounterTarget('stat-servers', CONFIG.stats.servers);
        setCounterTarget('stat-users', CONFIG.stats.users);
        setCounterTarget('stat-commands', CONFIG.stats.commands);
        setText('stat-uptime', CONFIG.stats.uptime);
    }
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
}

function setHref(id, link) {
    const el = document.getElementById(id);
    if (el && link) {
        el.href = link;
        el.addEventListener('click', (e) => {
            if (link === '#' || link.includes('YOUR_CLIENT_ID')) {
                e.preventDefault();
                showToast("Please update the CONFIG.inviteLink setting in config.js!", "info");
            }
        });
    }
}

function setCounterTarget(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.setAttribute('data-target', val);
}

// --- Animated Counter Statistics ---
function initCounterAnimations() {
    const statCards = document.querySelectorAll('.stat-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => observer.observe(card));
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString() + "+";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// --- Render Features Grid ---
function renderFeatures() {
    const container = document.getElementById('features-container');
    if (!container || !CONFIG.features) return;
    
    container.innerHTML = '';
    CONFIG.features.forEach(feat => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <div class="feature-icon-box">
                <i class="fa-solid ${feat.icon}"></i>
            </div>
            <div class="feature-info">
                <h3>${feat.title}</h3>
                <p>${feat.desc}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Render Commands & Category Filter ---
function renderCommands(categoryFilter = 'all', searchQuery = '') {
    const container = document.getElementById('commands-container');
    if (!container || !CONFIG.commands) return;

    container.innerHTML = '';
    const query = searchQuery.toLowerCase().trim();

    const filtered = CONFIG.commands.filter(cmd => {
        const matchesCat = (categoryFilter === 'all' || cmd.category === categoryFilter);
        const matchesQuery = (cmd.name.toLowerCase().includes(query) || cmd.desc.toLowerCase().includes(query));
        return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:3rem; color:var(--text-secondary);">
                <i class="fa-solid fa-ghost" style="font-size:2rem; margin-bottom:1rem;"></i>
                <p>No commands found matching your criteria.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(cmd => {
        const card = document.createElement('div');
        card.className = 'command-card';
        card.innerHTML = `
            <div class="command-left">
                <span class="cmd-badge">${cmd.name}</span>
                <span class="cmd-desc">${cmd.desc}</span>
            </div>
            <span class="cmd-cat-tag">${cmd.category}</span>
        `;
        container.appendChild(card);
    });
}

function initCategoryTabs() {
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-cat');
            const searchInput = document.getElementById('command-search');
            renderCommands(category, searchInput ? searchInput.value : '');
        });
    });
}

function initSearchFilter() {
    const searchInput = document.getElementById('command-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const activeBtn = document.querySelector('.cat-btn.active');
        const activeCat = activeBtn ? activeBtn.getAttribute('data-cat') : 'all';
        renderCommands(activeCat, e.target.value);
    });
}

// --- FAQ Accordion ---
function renderFaq() {
    const container = document.getElementById('faq-container');
    if (!container || !CONFIG.faqs) return;

    container.innerHTML = '';
    CONFIG.faqs.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `faq-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <div class="faq-question">
                <span>${item.question}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                ${item.answer}
            </div>
        `;
        div.querySelector('.faq-question').addEventListener('click', () => {
            div.classList.toggle('active');
        });
        container.appendChild(div);
    });
}

// --- Simulate Live Ping Metric ---
function simulatePingMetric() {
    const pingEl = document.getElementById('ping-metric');
    if (!pingEl) return;
    setInterval(() => {
        const ping = Math.floor(Math.random() * 8) + 20; // 20ms - 28ms range
        pingEl.textContent = `${ping}ms`;
    }, 4000);
}

// --- Toast Notification helper ---
function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-info text-accent"></i>
        <span>${msg}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}
