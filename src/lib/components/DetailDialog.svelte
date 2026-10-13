<script lang="ts">
  /**
   * Fenêtre de détail ouverte au clic sur une image ou un service.
   * Construite sur le composant Dialog de bits-ui (focus piégé, Échap,
   * aria-modal) ; tout l'habillage passe par les attributs data-* ci-dessous.
   */
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { asset } from '$app/paths';
  import type { SiteImage } from '../data/site';
  import { t } from '../i18n.svelte';
  import { lockScroll, scrollToBottom } from '../scroll';

  interface Props {
    title: string;
    kicker?: string;
    paragraphs?: string[];
    image?: SiteImage | null;
    ctaLabel?: string;
    ctaHref?: string;
    triggerClass?: string;
    children: Snippet;
  }

  let {
    title,
    kicker = '',
    paragraphs = [],
    image = null,
    ctaLabel = '',
    ctaHref = '#contact',
    triggerClass = '',
    children
  }: Props = $props();

  let open = $state(false);
  let scrollAfterClose = $state(false);

  // Action : on ferme le dialogue ; une fois fermé (animation terminée, scroll déverrouillé),
  // on file tout en bas de la page (contact + pied de page).
  function request() {
    scrollAfterClose = true;
    open = false;
  }

  // Le défilement fluide est figé tant que la fenêtre est ouverte
  $effect(() => {
    lockScroll(open);
  });

  function onOpenChangeComplete(isOpen: boolean) {
    if (!isOpen && scrollAfterClose) {
      scrollAfterClose = false;
      scrollToBottom();
    }
  }
</script>

<Dialog.Root bind:open {onOpenChangeComplete}>
  <Dialog.Trigger class={triggerClass}>
    {@render children()}
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content data-has-image={image ? '' : undefined} data-lenis-prevent>
      {#if image}
        <figure class="media" data-fit={image.fit ?? 'cover'}>
          <img src={asset(image.src)} alt={image.alt} />
        </figure>
      {/if}

      <div class="body">
        {#if kicker}<span class="kicker">{kicker}</span>{/if}
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>
          {#each paragraphs as p}
            <span class="para">{p}</span>
          {/each}
        </Dialog.Description>

        <div class="actions">
          <button class="cta" data-cta onclick={request}>{ctaLabel || t('svcCta')}</button>
          <Dialog.Close>{t('dialogClose')}</Dialog.Close>
        </div>
      </div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

<style>
  /* ------------------------------------------------------------------
     Habillage en CSS pur via les data-attributes exposés par bits-ui :
       [data-dialog-overlay]  [data-dialog-content]
       [data-dialog-title]    [data-dialog-description]
       [data-cta]   [data-dialog-close]
       [data-state="open" | "closed"]  → pilote l'entrée / la sortie
     ------------------------------------------------------------------ */

  :global([data-dialog-trigger]) {
    text-align: inherit;
    cursor: pointer;
  }
  :global([data-dialog-trigger]:focus-visible) {
    outline: 1px solid var(--or-clair);
    outline-offset: 6px;
  }

  :global([data-dialog-overlay]) {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(17, 19, 20, 0.88);
  }
  :global([data-dialog-overlay][data-state='open']) { animation: veil-in 0.6s var(--out); }
  :global([data-dialog-overlay][data-state='closed']) { animation: veil-out 0.4s var(--ease) forwards; }

  :global([data-dialog-content]) {
    position: fixed;
    z-index: 201;
    inset: 0;
    margin: auto;
    width: min(1040px, calc(100vw - 2 * var(--gutter)));
    height: fit-content;
    max-height: calc(100dvh - 48px);
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr;
    background: var(--noir);
    border: 1px solid var(--ligne);
  }
  :global([data-dialog-content][data-has-image]) {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  }
  :global([data-dialog-content][data-state='open']) { animation: sheet-in 0.9s var(--out); }
  :global([data-dialog-content][data-state='closed']) { animation: sheet-out 0.45s var(--ease) forwards; }

  /* Image rectangulaire (4/3), jamais étirée */
  .media {
    position: relative;
    aspect-ratio: 4 / 3;
    align-self: stretch;
    overflow: hidden;
    background: var(--noir);
  }
  .media[data-fit='contain'] img { object-fit: contain; padding: 8%; }
  .media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 40% 30%;
  }

  .body {
    display: grid;
    align-content: center;
    gap: 1.4rem;
    padding: clamp(32px, 5vw, 64px);
  }

  :global([data-dialog-title]) {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(2rem, 3.6vw, 3.4rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--creme);
  }
  :global([data-dialog-description]) {
    display: grid;
    gap: 1rem;
    color: var(--gris);
    max-width: 46ch;
  }
  .para { display: block; }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.6rem;
    align-items: center;
    padding-top: 0.6rem;
  }
  :global([data-cta]) {
    padding: 1.1em 1.9em;
    background: var(--or);
    color: var(--noir);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    transition: background 0.4s var(--out);
  }
  :global([data-cta]:hover) { background: var(--blanc); }
  :global([data-dialog-close]) {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--or);
    padding-block: 0.4em;
    border-bottom: 1px solid var(--ligne);
    transition: color 0.3s, border-color 0.3s;
  }
  :global([data-dialog-close]:hover) { color: var(--or-clair); border-color: var(--or); }

  @keyframes veil-in { from { opacity: 0; } }
  @keyframes veil-out { to { opacity: 0; } }
  @keyframes sheet-in {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: none; }
  }
  @keyframes sheet-out { to { opacity: 0; transform: translateY(16px); } }

  @media (max-width: 760px) {
    :global([data-dialog-content][data-has-image]) { grid-template-columns: 1fr; }
    .media { aspect-ratio: 4 / 3; }
  }
</style>
