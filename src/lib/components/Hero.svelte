<script lang="ts">
  import { contact } from '../data/site';
  import { t } from '../i18n.svelte';
</script>

<section class="hero" id="top">
  <div class="inner">
    <div class="head">
    <p class="kicker stagger" style="--i: 0">{t('heroKicker')}</p>

    <h1>
      <span class="mask-line" style="--i: 1"><span>{t('heroL1')}</span></span>
      <span class="mask-line" style="--i: 2"><span><em>{t('heroL2')}</em></span></span>
    </h1>
    </div>

    <div class="row">
      <p class="sub stagger" style="--i: 4">
        {t('heroSub')}
      </p>
      <div class="ctas stagger" style="--i: 5">
        <a class="btn btn--solid" href="#adhesion">{t('become')}</a>
        <a class="btn" href="#services">{t('heroCta2')}</a>
      </div>
    </div>
  </div>

  <a class="call stagger" style="--i: 6" href={contact.phoneHref}>
    {t('heroCall')}
  </a>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: grid;
    align-items: end;
    padding: calc(var(--header-h) + 6vh) var(--gutter) clamp(88px, 12vh, 140px);
  }

  /* Le titre monte au centre de l'écran ; la ligne texte + boutons reste en bas */
  .inner {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: calc(100svh - var(--header-h) - 6vh - clamp(88px, 12vh, 140px));
    justify-items: start;
    text-align: left;
  }
  .head { display: grid; gap: clamp(1.4rem, 3vh, 2.4rem); align-self: center; padding-top: clamp(3rem, 12vh, 9rem); }

  h1 {
    font-family: var(--display);
    font-weight: 300;
    font-size: clamp(2.8rem, 7vw, 7rem);
    line-height: 1.02;
    letter-spacing: -0.015em;
  }
  h1 em { color: var(--jaune); font-style: italic; }

  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem 4rem;
    padding-top: clamp(1rem, 4vh, 3rem);
  }
  .sub { max-width: 44ch; color: var(--gris); font-size: 1.05em; }
  .ctas { display: flex; flex-wrap: wrap; gap: 1rem; }

  .call {
    position: absolute;
    right: var(--gutter);
    bottom: 36px;
    font-family: var(--display);
    font-style: italic;
    color: var(--jaune);
    font-size: 1.05rem;
  }

  @media (max-width: 760px) {
    .call { display: none; }
  }
</style>
