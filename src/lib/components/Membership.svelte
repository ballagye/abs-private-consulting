<script lang="ts">
  import { asset } from '$app/paths';
  import { perks, perksEn, images, contact } from '../data/site';
  import { i18n, t } from '../i18n.svelte';

  const list = $derived(i18n.lang === 'en' ? perksEn : perks);
  let flipped = $state(false);
</script>

<section class="section" id="adhesion">
  <div class="title">
    <span class="kicker">{t('memKicker')}</span>
    <h2 class="h2">{t('memTitleA')}<em>{t('memTitleEm')}</em></h2>
  </div>

  <div class="grid">
    <!-- Carte de membre : recto médaille, verso coordonnées -->
    <div class="card-stage">
      <button
        class="card"
        class:flipped
        aria-pressed={flipped}
        aria-label={t('cardFlip')}
        onclick={() => (flipped = !flipped)}
      >
        <span class="face front">
          <img src={asset(images.medal.src)} alt="" width="400" height="400" />
          <span class="wm">VIP Consulting</span>
          <span class="tag">{t('cardTag')}</span>
        </span>
        <span class="face back">
          <span class="who">{t('cardName')}</span>
          <span class="no">{t('cardNo')}</span>
          <span class="meta">{contact.phone}<br />{t('cardAssist')}<br />{contact.email}</span>
        </span>
      </button>
      <p class="hint">{t('cardHint')}</p>
    </div>

    <div class="offer">
      <h3>{t('offerA')} <em>{t('offerEm')}</em> {t('offerB')}</h3>

      <div class="price">
        <span class="kicker">{t('priceLabel')}</span>
        <p><strong>4 999 £</strong> <span>{t('pricePer')}</span></p>
        <p class="lede">{t('priceLede')}</p>
      </div>

      <ul class="perks">
        {#each list as p}
          <li>{p}</li>
        {/each}
      </ul>

      <div class="foot">
        <a class="btn btn--solid" href="#contact">{t('memCta')}</a>
        <small>{t('memNote')}</small>
      </div>
    </div>
  </div>
</section>

<style>
  .title { display: grid; gap: 1.2rem; margin-bottom: clamp(3rem, 7vw, 6rem); }
  .grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(3rem, 7vw, 8rem);
    align-items: center;
  }

  .card-stage { perspective: 1400px; display: grid; justify-items: center; gap: 1.6rem; }
  .card {
    position: relative;
    width: min(100%, 520px);
    aspect-ratio: 856 / 540;
    transform-style: preserve-3d;
    transition: transform 0.9s var(--out);
  }
  .card.flipped { transform: rotateY(180deg); }

  .face {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 0.8rem;
    border-radius: 14px;
    backface-visibility: hidden;
    overflow: hidden;
    border: 1px solid var(--jaune);
  }
  .front { background: var(--noir); }
  .front img { width: 38%; height: auto; }
  .wm { font-size: 0.7rem; letter-spacing: 0.7em; text-transform: uppercase; color: var(--jaune); margin-right: -0.7em; }
  .tag { font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gris); }

  .back {
    transform: rotateY(180deg);
    text-align: center;
    background: var(--jaune);
    color: var(--noir);
  }
  .who { font-family: var(--display); font-style: italic; font-size: clamp(1.4rem, 3vw, 2rem); }
  .no { font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; }
  .meta { font-size: 0.78rem; line-height: 1.9; letter-spacing: 0.12em; }
  .hint { font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gris); }

  .offer { display: grid; gap: clamp(1.6rem, 3vw, 2.6rem); }
  h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(1.9rem, 3.4vw, 3.2rem);
    line-height: 1.1;
    color: var(--jaune);
  }
  h3 em { color: var(--or-clair); }

  .price p:not(.lede) { display: flex; align-items: baseline; gap: 1rem; margin-block: 0.4rem; }
  .price strong {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(3.4rem, 6vw, 5.4rem);
    line-height: 1;
    color: var(--or-clair);
  }
  .price p span { color: var(--gris); font-size: 0.9em; }

  .perks li {
    position: relative;
    padding: 0.8rem 0;
  }
  .foot { display: grid; gap: 1rem; justify-items: start; }
  small { color: var(--gris); font-size: 0.82rem; }

  @media (max-width: 860px) {
    .grid { grid-template-columns: 1fr; }
    .card-stage { order: 2; }
    .offer { order: 1; }
  }
  /* Titres de l'adhésion : tout en doré */
  .title :global(.h2) { color: var(--jaune); }
</style>
