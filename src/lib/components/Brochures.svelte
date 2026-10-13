<script lang="ts">
  import { asset } from '$app/paths';
  import { reveal } from '../actions/reveal';
  import { images } from '../data/site';
  import DetailDialog from './DetailDialog.svelte';
  import { i18n, t } from '../i18n.svelte';

  // Une seule brochure, selon la langue choisie
  const isEn = $derived(i18n.lang === 'en');
  const pdf = $derived(isEn ? 'documents/abs-vip-consulting-en-2025.pdf' : 'documents/abs-vip-consulting-fr-2025.pdf');
</script>

<section class="section" id="brochures">
  <div class="inner">
    <div class="cover" data-curtain use:reveal={{ threshold: 0.3 }}>
      <DetailDialog
        title={isEn ? 'Brochure 2025' : 'Brochure 2025'}
        kicker="Lifestyle coordinator · Worldwide assistance"
        paragraphs={[t('brochDesc')]}
        image={images.brochure}
        ctaLabel={t('brochContact')}
        triggerClass="cover-btn"
      >
        <img src={asset(images.brochure.src)} alt={images.brochure.alt} width="380" height="675" />
      </DetailDialog>
    </div>

    <div class="text">
      <span class="kicker" data-reveal use:reveal>{t('brochKicker')}</span>
      <h2 class="h2" data-mask use:reveal><span>{t('brochTitle1')} <em>{t('brochTitle2')}</em></span></h2>
      <div class="links">
        <a class="btn" href={asset(pdf)} hreflang={isEn ? 'en' : 'fr'} target="_blank" rel="noopener">
          {t('brochCta')}
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .inner {
    display: grid;
    grid-template-columns: minmax(0, 0.55fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 7vw, 8rem);
    align-items: center;
  }
  .cover { max-width: 340px; border: 1px solid var(--ligne); }
  .cover :global(.cover-btn) { display: block; width: 100%; }
  .cover img { width: 100%; height: auto; }
  .text { display: grid; gap: 1.4rem; }
  .links { display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 0.6rem; }

  @media (max-width: 860px) {
    .inner { grid-template-columns: 1fr; }
    .cover { max-width: 240px; }
    .cover { order: 2; }
    .text { order: 1; }
  }
</style>
