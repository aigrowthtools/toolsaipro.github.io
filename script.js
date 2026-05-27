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

  var NAV_HTML = [
    '<nav id="mainNav">',
    '  <a class="logo" href="/">Tools<span>AI</span><em>Pro</em></a>',
    '  <div class="nav-links" id="desktopNav">',
    '    <a ' + navClass("index.html")    + ' href="/">Home</a>',
    '    <a ' + navClass("about.html")    + ' href="/about.html">About</a>',
    '    <a ' + navClass("tools-hub.html")+ ' href="/tools-hub.html">Tools Hub</a>',
    '    <div class="dropdown" id="guidesDropdown">',
    '      <button class="dropdown-toggle nl" id="guidesToggleBtn">Guides <span class="dropdown-arrow">&#9662;</span></button>',
    '      <div class="dropdown-menu mega-menu">',
    '        <div class="menu-col">',
    '          <div class="menu-label">🛠️ Popular Tools</div>',
    '          <a class="dm-item" href="/pdf-merger.html"><span class="dm-icon">📄</span>Merge PDF</a>',
    '          <a class="dm-item" href="/pdf-compressor.html"><span class="dm-icon">🗜️</span>Compress PDF</a>',
    '          <a class="dm-item" href="/pdf-unlock.html"><span class="dm-icon">🔓</span>Unlock PDF</a>',
    '          <a class="dm-item" href="/pdf-splitter.html"><span class="dm-icon">✂️</span>Split PDF</a>',
    '          <a class="dm-item" href="/pdf-to-jpg.html"><span class="dm-icon">🖼️</span>PDF to JPG</a>',
    '          <a class="dm-item" href="/percentage-calculator.html"><span class="dm-icon">%</span>Percentage Calculator</a>',
    '        </div>',
    '        <div class="menu-col">',
    '          <span class="dm-section-label">📚 Expert Guides</span>',
    '          <a class="dm-item" href="/how-to-merge-pdf-online.html"><span class="dm-icon">📄</span>Merge PDF Guide</a>',
    '          <a class="dm-item" href="/how-to-unlock-pdf-online.html"><span class="dm-icon">🔓</span>Unlock PDF Guide</a>',
    '          <a class="dm-item" href="/blog-percentage-calculator.html"><span class="dm-icon">🔢</span>Percentage Guide</a>',
    '          <div class="dm-divider"></div>',
    '          <a class="dm-all" href="/tools-hub.html">View All Guides &nbsp;&#8594;</a>',
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

  var MOBILE_HTML = [
    '<div class="mobile-menu" id="mobileMenu">',
    '  <a class="nl" href="/">&#127968; Home</a>',
    '  <a class="nl" href="/about.html">&#8505;&#65039; About</a>',
    '  <a class="nl" href="/tools-hub.html">&#128736;&#65039; Tools Hub</a>',
    '  <div class="mobile-accordion">',
    '    <div class="accordion-header" onclick="toggleAcc(this)">🛠️ POPULAR TOOLS <span class="acc-arrow">▼</span></div>',
    '    <div class="accordion-content">',
    '      <a class="dm-item" href="/pdf-merger.html"><span class="dm-icon">📄</span>Merge PDF</a>',
    '      <a class="dm-item" href="/pdf-unlock.html"><span class="dm-icon">🔓</span>Unlock PDF</a>',
    '      <a class="dm-item" href="/percentage-calculator.html"><span class="dm-icon">%</span>Percentage Calculator</a>',
    '    </div>',
    '  </div>',
    '  <a class="nl" href="/contact.html">&#9993;&#65039; Contact</a>',
    '</div>'
  ].join("\n");

  window.toggleAcc = function(el) {
    el.classList.toggle("active");
    var content = el.nextElementSibling;
    content.style.display = (content.style.display === "flex") ? "none" : "flex";
  };

  var existingNav = document.querySelector("nav");
  var wrapper = document.createElement("div");
  wrapper.innerHTML = NAV_HTML + MOBILE_HTML;
  if(existingNav) {
      existingNav.parentNode.replaceChild(wrapper.firstChild, existingNav);
      document.body.insertBefore(wrapper.lastChild, document.body.firstChild);
  } else {
      document.body.insertBefore(wrapper, document.body.firstChild);
  }

  /* ── INJECT NAVBAR CSS ── */
  var style = document.createElement("style");
  style.textContent = `
    #mainNav{position:sticky;top:0;z-index:200;background:rgba(13,13,20,0.97);backdrop-filter:blur(24px);border-bottom:1px solid #2a2a3a;display:flex;align-items:center;justify-content:space-between;padding:0 28px;height:64px;}
    #mainNav .nav-links{display:flex;gap:3px;}
    #mainNav .nl{padding:5px 11px;border-radius:16px;font-size:11px;font-weight:600;color:#6b6b80;text-decoration:none;}
    #mainNav .nl.act{background:#f7971e;color:#fff;}
    #mainNav .mega-menu{display:none;position:absolute;top:100%;right:0;width:400px;background:#16161f;border:1px solid #2a2a3a;border-radius:16px;padding:20px;z-index:300;}
    #mainNav .dropdown.open .mega-menu{display:flex;}
    @media(max-width:850px){ #mainNav .nav-links{display:none;} #mainNav .hamburger{display:flex;} }
  `;
  document.head.appendChild(style);

  document.getElementById("guidesToggleBtn").addEventListener("click", function(e){ e.stopPropagation(); document.getElementById("guidesDropdown").classList.toggle("open"); });
  document.getElementById("hamburgerBtn").addEventListener("click", function(){ document.getElementById("mobileMenu").classList.toggle("open"); });
})();

/* ═══════════════════════════════════════
   TOOLS AUTO-LOADER (Responsive Grid)
═══════════════════════════════════════ */
(function injectTools() {
  var PAGE = window.location.pathname.includes("tools-hub") ? "hub" : (window.location.pathname.includes("index") || window.location.pathname === "/" ? "home" : "tool");
  
  if (typeof ACTIVE_TOOLS === "undefined") return;

  var style = document.createElement("style");
  style.textContent = `
    .oft-grid { 
      display: grid; 
      grid-template-columns: repeat(4, 1fr); 
      gap: 12px; 
    }
    @media(max-width: 1024px) { .oft-grid { grid-template-columns: repeat(3, 1fr); } }
    @media(max-width: 768px) { .oft-grid { grid-template-columns: repeat(2, 1fr); } }
    .oft-tool-card { 
      display: flex; flex-direction: column; align-items: center; 
      padding: 12px; background: rgba(22,22,31,0.9); border: 1px solid #2a2a3a; 
      border-radius: 14px; text-decoration: none; transition: 0.2s;
    }
    .oft-tool-name { font-size: 10px; font-weight: 700; color: #fff; margin-top: 8px; text-align: center; }
  `;
  document.head.appendChild(style);

  var grid = document.getElementById("oftGrid");
  if (grid) {
    grid.innerHTML = ACTIVE_TOOLS.map(function(t) {
      return '<a class="oft-tool-card" href="'+t.link+'"><div class="oft-icon-wrap" style="background:rgba(255,255,255,0.05)">'+t.emoji+'</div><span class="oft-tool-name">'+t.title+'</span></a>';
    }).join("");
  }
})();
