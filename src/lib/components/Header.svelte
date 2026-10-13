<script lang="ts">
  import { asset } from '$app/paths';
  import { nav, contact } from '../data/site';
  import { i18n, t } from '../i18n.svelte';
  import { lockScroll } from '../scroll';

  function toggleLang() {
    i18n.lang = i18n.lang === 'fr' ? 'en' : 'fr';
    try { localStorage.setItem('abs-lang', i18n.lang); } catch {}
    document.documentElement.lang = i18n.lang;
  }

  let open = $state(false);
  let scrolled = $state(false);

  function close() {
    open = false;
  }
  function onkeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  // Page figée derrière le menu ouvert
  $effect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    lockScroll(open);
  });
</script>

<svelte:window {onkeydown} onscroll={() => (scrolled = scrollY > 40)} />

<header class="header stagger" style="--i: 0" class:scrolled>
  <div class="left">
    <a class="brand" href="#top" aria-label="ABS VIP Consulting, retour en haut">
      <img src={asset('images/abs-medaille.webp')} alt="" width="40" height="40" />
    </a>
    <button class="toggle" aria-expanded={open} aria-controls="drawer" onclick={() => (open = true)}>
      <span class="burger" aria-hidden="true"><i></i><i></i></span>
      <span>{t('menu')}</span>
    </button>
  </div>

  <div class="right">
    <a class="phone" href={contact.phoneHref}>{contact.phone}</a>
    <button class="lang" onclick={toggleLang} aria-label="Language : {t('lang')}">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
      <span class="lang-text">LANG. {t('lang')}</span>
    </button>
    <a class="btn btn--solid cta" href="#adhesion">{t('become')}</a>
  </div>
</header>

<!-- Fond assombri (desktop) : clic pour fermer -->
<button class="backdrop" class:open tabindex="-1" aria-label="Fermer le menu" onclick={close}></button>

<!-- Desktop : tiroir noir depuis la gauche ; mobile : panneau qui descend du haut -->
<aside class="drawer" id="drawer" class:open inert={!open} aria-label="Menu principal">
  <div class="drawer-top">
    <button class="close" onclick={close}>
      <span class="x" aria-hidden="true"><i></i><i></i></span>
      <span>{t('close')}</span>
    </button>
    <a class="btn btn--solid" href="#adhesion" onclick={close}>{t('become')}</a>
  </div>

  <div class="drawer-body" data-lenis-prevent>
    <nav>
      <ul>
        {#each nav as item, i}
          <li>
            <a href={item.href} onclick={close} style="--i: {i}">
              <span class="line">{t(item.key)}</span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>

  </div>
</aside>

<style>
  /* ---------- Barre du haut ---------- */
  .header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 60;
    height: var(--header-h);
    padding-inline: var(--gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid transparent;
    transition: background 0.4s var(--ease), border-color 0.4s var(--ease);
  }
  .header.scrolled {
    background: var(--noir);
    border-color: var(--jaune);
  }

  .left { display: flex; align-items: center; gap: 1.6rem; }
  .brand img { width: 40px; height: 40px; }

  .toggle {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding-left: 1.6rem;
    border-left: 1px solid var(--jaune);
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }
  .burger { display: grid; gap: 5px; width: 18px; }
  .burger i { display: block; height: 1px; background: currentColor; }

  .right { display: flex; align-items: center; gap: clamp(1rem, 2.4vw, 2.6rem); }
  .phone { font-size: 0.85rem; letter-spacing: 0.04em; color: var(--gris); }
  .cta { padding: 0.8em 1.5em; }
  .lang { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; letter-spacing: 0.04em; }

  /* ---------- Fond assombri ---------- */
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 70;
    background: rgba(0, 0, 0, 0.55);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s var(--ease), visibility 0s linear 0.5s;
  }
  .backdrop.open {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }

  /* ---------- Menu (noir) ---------- */
  .drawer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 80;
    width: min(460px, 100vw);
    display: flex;
    flex-direction: column;
    background: var(--noir);
    color: var(--blanc);
    border-right: 1px solid var(--ligne-douce);
    transform: translateX(-100%);
    visibility: hidden;
    transition: transform 0.6s cubic-bezier(0.7, 0, 0.2, 1), visibility 0s linear 0.6s;
  }
  .drawer.open {
    transform: none;
    visibility: visible;
    transition-delay: 0s;
  }

  .drawer-top {
    flex: none;
    height: var(--header-h);
    padding-inline: clamp(22px, 4vw, 40px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close { display: flex; align-items: center; gap: 0.9rem; font-size: 0.85rem; letter-spacing: 0.04em; }
  .x { position: relative; width: 16px; height: 16px; }
  .x i { position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: currentColor; }
  .x i:first-child { transform: rotate(45deg); }
  .x i:last-child { transform: rotate(-45deg); }

  .drawer-body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: clamp(1rem, 3vh, 2rem) clamp(22px, 4vw, 40px) clamp(22px, 4vh, 40px);
    overflow-y: auto;
  }

  /* La navigation occupe toute la hauteur du menu, sans séparateurs */
  nav { flex: 1; min-height: 0; display: flex; }
  nav ul { flex: 1; display: flex; flex-direction: column; justify-content: space-evenly; }
  nav li { display: flex; }
  nav a { display: block; padding-block: 0.3rem; }
  .line {
    display: inline-block;
    font-family: var(--display);
    font-weight: 300;
    font-size: clamp(2.2rem, min(6.2vh, 5vw), 3.6rem);
    line-height: 1.25;
    /* Survol : simple trait dessous */
    border-bottom: 1px solid transparent;
    transition: border-color 0.25s var(--ease);
  }
  nav a:hover .line,
  nav a:focus-visible .line { border-color: var(--blanc); }

  .lang { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; letter-spacing: 0.04em; }

  /* ---------- Mobile ---------- */
  @media (max-width: 760px) {
    .phone, .lang-text { display: none; }
    .toggle { padding-left: 1rem; gap: 0.6rem; }
    .left { gap: 1rem; }
    .cta { padding: 0.65em 1em; font-size: 0.78rem; }

    /* Le menu s'ouvre de haut en bas, plein écran */
    .backdrop { display: none; }
    .drawer {
      right: 0;
      bottom: auto;
      width: 100%;
      height: 100dvh;
      border-right: 0;
      transform: translateY(-100%);
    }
  }
</style>
