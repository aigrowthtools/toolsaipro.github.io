/* ═══════════════════════════════════════
   NAVBAR AUTO-LOADER v2 (With Mobile Accordion & 5+5 Mega Menu)
   Works on ALL pages automatically.
═══════════════════════════════════════ */
(function injectNavbar() {

  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  if (currentPath === "") currentPath = "index.html";

  function navClass(href) {
    var page = href.split("/").pop();
    return currentPath === page ? 'class="nl act"' : 'class="nl"';
  }

  /* ── Build Navbar HTML (Perfect 5+5 Balanced Layout) ── */
  var NAV_HTML = [
    '<nav id="mainNav">',
    '  <a class="logo" href="/">Tools<span>AI</span><em>Pro</em></a>',
    '  <div class="nav-links" id="desktopNav">',
    '    <a ' + navClass("index.html")    + ' href="/">Home</a>',
    '    <a ' + navClass("about.html")    + ' href="/about.html">About</a>',
    '    <a ' + navClass("tools-hub.html")+ ' href="/tools-hub.html">Tools Hub</a>',
    '    <div class="dropdown" id="guidesDropdown">',
    '      <button class="dropdown-toggle nl" id="guidesToggleBtn">',
    '        Guides <span class="dropdown-arrow">&#9662;</span>',
    '      </button>',
    '      <div class="dropdown-menu mega-menu">',
    '        <div class="menu-col">',
    '          <div class="menu-label">🛠️ Popular Tools</div>',
    '          <a class="dm-item" href="/pdf-merger.html"><span class="dm-icon">📄</span>Merge PDF</a>',
    '          <a class="dm-item" href="/pdf-compressor.html"><span class="dm-icon">🗜️</span>Compress PDF</a>',
    '          <a class="dm-item" href="/pdf-unlock.html"><span class="dm-icon">🔓</span>Unlock PDF</a>',
    '          <a class="dm-item" href="/pdf-splitter.html"><span class="dm-icon">✂️</span>Split PDF</a>',
    '          <a class="dm-item" href="/emi-calculator.html"><span class="dm-icon">🏦</span>EMI Calculator</a>',
    '        </div>',
    '        <div class="menu-col">',
    '          <div class="menu-label">📚 Expert Guides</div>',
    '          <a class="dm-item" href="/blog/how-to-merge-pdf-online.html"><span class="dm-icon">📄</span>Merge PDF Guide</a>',
    '          <a class="dm-item" href="/blog/how-to-unlock-pdf-online.html"><span class="dm-icon">🔓</span>Unlock PDF Guide</a>',
    '          <a class="dm-item" href="/blog/how-to-calculate-percentage.html"><span class="dm-icon">🔢</span>Percentage Guide</a>',
    '          <a class="dm-item" href="/blog/how-to-calculate-emi.html"><span class="dm-icon">📊</span>EMI Loan Guide</a>',
    '          <div class="dm-divider"></div>',
    '          <a class="dm-all" href="/blog.html">View All Guides &nbsp;&#8594;</a>',
    '        </div>',
    '      </div>',
    '    </div>',
    '    <a ' + navClass("contact.html") + ' href="/contact.html">Contact</a>',
    '    <a ' + navClass("privacy.html") + ' href="/privacy.html">Privacy</a>',
    '  </div>',
    '  <button class="hamburger" id="hamburgerBtn" aria-label="Menu">',
    '    <span></span><span></span><span></span>',
    '  </button>',
    '</nav>'
  ].join("\n");

  /* ── Build Mobile Menu HTML (Balanced Accordion Match) ── */
  var MOBILE_HTML = [
    '<div class="mobile-menu" id="mobileMenu">',
    '  <a class="nl" href="/">&#127968; Home</a>',
    '  <a class="nl" href="/about.html">&#8505;&#65039; About</a>',
    '  <a class="nl" href="/tools-hub.html">&#128736;&#65039; Tools Hub</a>',
    '  ',
    '  <div class="mobile-accordion">',
    '    <div class="accordion-header" onclick="toggleAcc(this)">🛠️ POPULAR TOOLS <span class="acc-arrow">▼</span></div>',
    '    <div class="accordion-content">',
    '      <a class="dm-item" href="/pdf-merger.html"><span class="dm-icon">📄</span>Merge PDF</a>',
    '      <a class="dm-item" href="/pdf-compressor.html"><span class="dm-icon">🗜️</span>Compress PDF</a>',
    '      <a class="dm-item" href="/pdf-unlock.html"><span class="dm-icon">🔓</span>Unlock PDF</a>',
    '      <a class="dm-item" href="/pdf-splitter.html"><span class="dm-icon">✂️</span>Split PDF</a>',
    '      <a class="dm-item" href="/emi-calculator.html"><span class="dm-icon">🏦</span>EMI Calculator</a>',
    '    </div>',
    '  </div>',
    '  ',
    '  <div class="mobile-accordion">',
    '    <div class="accordion-header" onclick="toggleAcc(this)">📚 EXPERT GUIDES <span class="acc-arrow">▼</span></div>',
    '    <div class="accordion-content">',
    '      <a class="dm-item" href="/blog/how-to-merge-pdf-online.html"><span class="dm-icon">📄</span>Merge PDF Guide</a>',
    '      <a class="dm-item" href="/blog/how-to-unlock-pdf-online.html"><span class="dm-icon">🔓</span>Unlock PDF Guide</a>',
    '      <a class="dm-item" href="/blog/how-to-calculate-percentage.html"><span class="dm-icon">🔢</span>Percentage Guide</a>',
    '      <a class="dm-item" href="/blog/how-to-calculate-emi.html"><span class="dm-icon">📊</span>EMI Loan Guide</a>',
    '    </div>',
    '  </div>',
    '  ',
    '  <a class="nl" href="/contact.html">&#9993;&#65039; Contact</a>',
    '  <a class="nl" href="/privacy.html">&#128274; Privacy</a>',
    '</div>'
  ].join("\n");

  window.toggleAcc = function(el) {
    el.classList.toggle("active");
    var content = el.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  };

  var placeholder = document.getElementById("navbar-placeholder");
  var existingNav = document.querySelector("nav");

  if (placeholder) {
    placeholder.innerHTML = NAV_HTML + MOBILE_HTML;
  } else if (existingNav) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = NAV_HTML + MOBILE_HTML;
    existingNav.parentNode.insertBefore(wrapper, existingNav);
    existingNav.parentNode.removeChild(existingNav);
    var oldMobile = document.getElementById("mobileMenu");
    if (oldMobile && !wrapper.contains(oldMobile)) {
      oldMobile.parentNode.removeChild(oldMobile);
    }
  } else {
    var wrapper2 = document.createElement("div");
    wrapper2.innerHTML = NAV_HTML + MOBILE_HTML;
    document.body.insertBefore(wrapper2, document.body.firstChild);
  }

  if (!document.getElementById("navbar-auto-css")) {
    var style = document.createElement("style");
    style.id = "navbar-auto-css";
    style.textContent = [
      "/* Navbar Auto CSS */",
      "#mainNav{position:sticky;top:0;z-index:200;background:rgba(13,13,20,0.97);backdrop-filter:blur(24px);border-bottom:1px solid #2a2a3a;display:flex;align-items:center;justify-content:space-between;padding:0 28px;height:64px;}",
      "#mainNav .logo{font-size:19px;font-weight:800;color:#fff;text-decoration:none;flex-shrink:0;}",
      "#mainNav .logo span{color:#6c63ff;}",
      "#mainNav .logo em{color:#ff6584;font-style:normal;}",
      "#mainNav .nav-links{display:flex;align-items:center;gap:3px;}",
      "#mainNav .nl{padding:5px 11px;border-radius:16px;font-size:11px;font-weight:600;color:#6b6b80;text-decoration:none;border:1px solid transparent;transition:all 0.2s;white-space:nowrap;}",
      "#mainNav .nl:hover{color:#f7971e;border-color:rgba(247,151,30,0.3);}",
      "#mainNav .nl.act{background:#f7971e;color:#fff;border-color:#f7971e;}",
      "#mainNav .dropdown{position:relative;}",
      "#mainNav .dropdown-toggle{padding:5px 11px;border-radius:16px;font-size:11px;font-weight:600;color:#6b6b80;background:none;border:1px solid transparent;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:4px;font-family:'Plus Jakarta Sans',sans-serif;}",
      "#mainNav .dropdown-toggle:hover,#mainNav .dropdown.open .dropdown-toggle{color:#a78bfa;border-color:rgba(167,139,250,0.3);}",
      "#mainNav .dropdown-arrow{font-size:9px;transition:transform 0.25s;display:inline-block;}",
      "#mainNav .dropdown.open .dropdown-arrow{transform:rotate(180deg);}",
      "#mainNav .mega-menu{display:none;position:absolute;top:calc(100% + 10px);right:0;width:440px;background:rgba(22,22,35,0.98);backdrop-filter:blur(20px);border:1px solid rgba(167,139,250,0.2);border-radius:16px;padding:20px;box-shadow:0 16px 48px rgba(0,0,0,0.45);gap:20px;z-index:300;}",
      "#mainNav .dropdown.open .mega-menu{display:flex;}",
      "#mainNav .menu-col{flex:1;display:flex;flex-direction:column;gap:5px;}",
      "#mainNav .menu-label{font-size:11px;font-weight:800;color:#a78bfa;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;}",
      "#mainNav .dm-item{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;text-decoration:none;color:#e8e8f0;font-size:12px;font-weight:600;transition:all 0.18s;}",
      "#mainNav .dm-item:hover{background:rgba(167,139,250,0.1);color:#fff;}",
      "#mainNav .dm-icon{font-size:14px;width:20px;text-align:center;}",
      "#mainNav .dm-divider{height:1px;background:#2a2a3a;margin:8px 0;}",
      "#mainNav .dm-all{display:block;text-align:center;padding:10px;background:linear-gradient(135deg,rgba(167,139,250,0.15),rgba(108,99,255,0.1));color:#a78bfa;font-size:11px;font-weight:700;text-decoration:none;border-radius:8px;transition:all 0.2s;}",
      "#mainNav .dm-all:hover{background:rgba(167,139,250,0.25);color:#fff;}",
      "#mainNav .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;border:none;background:none;}",
      "#mainNav .hamburger span{display:block;width:22px;height:2px;background:#6b6b80;border-radius:2px;transition:all 0.3s;}",
      "#mainNav .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}",
      "#mainNav .hamburger.open span:nth-child(2){opacity:0;}",
      "#mainNav .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}",
      
      /* Mobile Menu & Accordion CSS */
      "#mobileMenu{display:none;position:fixed;top:64px;left:0;right:0;background:rgba(13,13,20,0.98);backdrop-filter:blur(20px);border-bottom:1px solid #2a2a3a;padding:16px 20px 20px;z-index:199;flex-direction:column;gap:8px;max-height:calc(100vh - 64px);overflow-y:auto;}",
      "#mobileMenu.open{display:flex;}",
      "#mobileMenu .nl{padding:12px 16px;border-radius:10px;font-size:14px;font-weight:600;border:1px solid #2a2a3a;color:#e8e8f0;text-decoration:none;transition:all 0.2s;}",
      "#mobileMenu .nl:hover{background:rgba(247,151,30,0.08);color:#f7971e;}",
      "#mobileMenu .nl.act{background:#f7971e;color:#fff;border-color:#f7971e;}",
      ".mobile-accordion{border:1px solid #2a2a3a;border-radius:10px;overflow:hidden;}",
      ".accordion-header{padding:14px 16px;font-size:13px;font-weight:700;color:#a78bfa;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:rgba(167,139,250,0.05); transition:background 0.2s;}",
      ".accordion-header:hover{background:rgba(167,139,250,0.1);}",
      ".accordion-header .acc-arrow{font-size:10px;transition:transform 0.3s;}",
      ".accordion-header.active .acc-arrow{transform:rotate(180deg);}",
      ".accordion-content{display:none;flex-direction:column;gap:4px;padding:8px 16px 16px;background:rgba(0,0,0,0.2);}",
      ".accordion-content .dm-item{padding:10px 12px;border-radius:8px;font-size:13px;color:#e8e8f0;text-decoration:none;display:flex;align-items:center;gap:10px;transition:all 0.2s;}",
      ".accordion-content .dm-item:hover{background:rgba(247,151,30,0.1);color:#f7971e;}",
      
      "@media(max-width:850px){",
