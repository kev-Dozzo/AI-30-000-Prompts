
  let current = 0;
  const total = 7;

  const captions = [
    `⚠️ Tu utilises l'IA mais tu lui poses les mauvaises questions.\n\nLa vraie différence entre ceux qui obtiennent des résultats avec ChatGPT et les autres ?\n\n👉 Ce sont les PROMPTS.\n\nSwipe pour découvrir la solution 👉`,
    `📁 +30 000 prompts IA professionnels dans un seul fichier Excel.\n\n80+ catégories. Tout classé. Tu ouvres, tu copies, tu colles.\n\nCompatible ChatGPT ✅ Claude ✅ Gemini ✅ Copilot ✅\n\nMoins de 10$ — Livraison instantanée sur WhatsApp 📲`,
    `🛒 Pour ton business et tes ventes :\n\n✅ Sales Funnel — 1 068 prompts\n✅ E-Commerce — 1 400+ prompts\n✅ B2B / B2C — 1 000+ prompts\n✅ High Ticket — 519 prompts\n✅ Entrepreneur — 848 prompts\n\nContinue à swiper 👉`,
    `📣 Pour dominer ton marketing digital :\n\n✅ Email Marketing — 1 000+ prompts\n✅ Social Media — 1 000+ prompts\n✅ Copywriting — 315+ prompts\n✅ Facebook Ads — 199 prompts\n✅ Landing Page — 615 prompts\n\nContinue à swiper 👉`,
    `🔍 Pour ta visibilité et ta croissance :\n\n✅ SEO Google N°1 — 608 prompts\n✅ SaaS — 511 prompts\n✅ Service Client — 463 prompts\n✅ No-Code — 310 prompts\n✅ Prompt Engineering — 426 prompts`,
    `💰 Le résumé de l'offre :\n\n📁 +30 000 prompts · 80+ catégories\n💵 Moins de 10$ seulement\n📱 Paiement MTN MoMo ou Orange Money\n⚡ Livraison instantanée sur WhatsApp\n\nDernier slide — l'action à prendre est juste après 👇`,
    `📲 Comment obtenir le fichier maintenant :\n\n1️⃣ Envoie "PROMPTS" en DM ou commente "JE VEUX"\n2️⃣ Paye via MTN MoMo ou Orange Money\n3️⃣ Reçois le fichier sur WhatsApp en moins de 5 min\n\n👇 Commente "JE VEUX" ci-dessous ou envoie-moi un message privé !`
  ];

  function updateCarousel() {
    document.getElementById('slides').style.transform = `translateX(-${current * 100}%)`;
    document.getElementById('counter').textContent = `Slide ${current + 1} sur ${total}`;
    document.getElementById('caption-text').innerHTML = captions[current].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    document.querySelectorAll('.dot-nav').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function nextSlide() { current = (current + 1) % total; updateCarousel(); }
  function prevSlide() { current = (current - 1 + total) % total; updateCarousel(); }

  // Build dots
  const dotsEl = document.getElementById('dots');
  for (let i = 0; i < total; i++) {
    const b = document.createElement('button');
    b.className = 'dot-nav' + (i === 0 ? ' active' : '');
    b.onclick = () => { current = i; updateCarousel(); };
    dotsEl.appendChild(b);
  }
  updateCarousel();

  // Section nav
  function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
  }

  // Copy buttons
  function copyText(id, btn) {
    const el = document.getElementById(id);
    const text = el.innerText || el.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✅ Copié !';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
    });
  }

  // Swipe support
  let startX = 0;
  const wrap = document.querySelector('.slides-wrap');
  wrap.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  wrap.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
  });
