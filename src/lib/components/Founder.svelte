<script lang="ts">
  import { asset } from '$app/paths';
  import { images } from '../data/site';
  import { t } from '../i18n.svelte';
  import DetailDialog from './DetailDialog.svelte';
</script>

<section class="section" id="fondateur">
  <div class="inner">
    <figure class="portrait">
      <DetailDialog
        title="Abdoulaye"
        kicker={t('foundRole')}
        paragraphs={[t('foundP1'), t('foundP2')]}
        image={images.founder}
        ctaLabel={t('foundWrite')}
        ctaHref="#contact"
        triggerClass="portrait-btn"
      >
        <img src={asset(images.founder.src)} alt={t('founderAlt')} width="720" height="900" />
      </DetailDialog>
    </figure>

    <div class="text">
      <span class="kicker">{t('foundKicker')}</span>
      <h2 class="name">Abdoulaye</h2>
      <span class="role">{t('foundRole')}</span>
      <p class="lede">{t('foundP1')}</p>
      <p class="lede">{t('foundP2')}</p>
      <div class="sig">
        <img src={asset(images.medal.src)} alt="" width="52" height="52" />
        <span>{t('foundSig')}</span>
      </div>
    </div>
  </div>
</section>

<style>
  .inner {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(2.5rem, 7vw, 8rem);
    align-items: center;
  }
  .portrait { position: relative; max-width: 560px; }
  .portrait :global(.portrait-btn) { display: block; width: 100%; position: relative; }
  .portrait img { width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; }
  .portrait::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px var(--ligne);
  }

  .text { display: grid; gap: 1.3rem; }
  .name {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(3.6rem, 9vw, 9rem);
    line-height: 0.98;
    letter-spacing: -0.03em;
  }
  .role { font-size: 0.74rem; letter-spacing: 0.34em; text-transform: uppercase; color: var(--or); }
  .sig { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; }
  .sig img { width: 52px; height: auto; }
  .sig span { font-family: var(--display); font-style: italic; font-size: 1.4rem; color: var(--or-clair); }

  @media (max-width: 860px) {
    .inner { grid-template-columns: 1fr; }
    .portrait { max-width: 420px; }
    .portrait { order: 2; }
    .text { order: 1; }
  }
</style>
