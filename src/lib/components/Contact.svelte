<script lang="ts">
  import { reveal } from '../actions/reveal';
  import { contact, services, servicesEn } from '../data/site';
  import { i18n, t } from '../i18n.svelte';

  // Services proposés selon la langue ; on mémorise les index pour survivre à un changement de langue.
  const list = $derived(i18n.lang === 'en' ? servicesEn : services);

  let name = $state('');
  let email = $state('');
  let tel = $state('');
  let message = $state('');
  let picked = $state<number[]>([]);
  let sent = $state(false);

  // Aucun back-end : la demande s'ouvre dans le client mail du visiteur.
  function submit(e: SubmitEvent) {
    e.preventDefault();
    const body = [
      `${i18n.lang === 'en' ? 'Name' : 'Nom'} : ${name}`,
      `${t('fEmail')} : ${email}`,
      ...(tel ? [`${i18n.lang === 'en' ? 'Phone' : 'Téléphone'} : ${tel}`] : []),
      ...(picked.length ? [`${i18n.lang === 'en' ? 'Interests' : 'Intérêts'} : ${picked.map((i) => list[i].title).join(', ')}`] : []),
      '',
      message
    ].join('\n');
    location.href = `mailto:${contact.email}?subject=${encodeURIComponent(i18n.lang === 'en' ? 'Request — ABS VIP Consulting' : 'Demande — ABS VIP Consulting')}&body=${encodeURIComponent(body)}`;
    sent = true;
  }
</script>

<section class="section" id="contact">
  <div class="wrap">
    <div class="left">
      <span class="kicker">{t('contactKicker')}</span>
      <h2 class="h2">{t('contactA')} <em>{t('contactEm')}</em></h2>

      <div class="lines">
        <a href={contact.phoneHref}><small>Paris</small><span>{contact.phone}</span></a>
        <a href="mailto:{contact.email}"><small>{t('fEmail')}</small><span>{contact.email}</span></a>
      </div>

      <div class="socials">
        {#each contact.socials as s}
          <a href={s.href} target="_blank" rel="noopener">{s.label}</a>
        {/each}
      </div>
    </div>

    <form onsubmit={submit}>
      <div class="field">
        <input id="f-name" bind:value={name} placeholder=" " required autocomplete="name" />
        <label for="f-name">{t('fName')}</label>
      </div>
      <div class="field">
        <input id="f-mail" type="email" bind:value={email} placeholder=" " required autocomplete="email" />
        <label for="f-mail">{t('fEmail')}</label>
      </div>
      <div class="field full">
        <input id="f-tel" type="tel" bind:value={tel} placeholder=" " autocomplete="tel" />
        <label for="f-tel">{t('fTel')}</label>
      </div>

      <fieldset class="full">
        <legend>{t('interest')}</legend>
        <div class="chips">
          {#each list as s, i}
            <label class="chip">
              <input type="checkbox" value={i} bind:group={picked} />
              <span>{s.title}</span>
            </label>
          {/each}
        </div>
      </fieldset>

      <div class="field full">
        <textarea id="f-msg" rows="4" bind:value={message} placeholder=" "></textarea>
        <label for="f-msg">{t('fMsg')}</label>
      </div>

      <label class="consent full">
        <input type="checkbox" required />
        <span>{t('fConsent')}</span>
      </label>

      <div class="full">
        <button class="btn btn--solid" type="submit">{t('fSend')}</button>
      </div>

      {#if sent}
        <p class="ok full" role="status">{t('fOk')}</p>
      {/if}
    </form>
  </div>
</section>

<style>
  .wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(3rem, 7vw, 8rem);
  }
  .left { display: grid; gap: 1.6rem; align-content: start; }

  .lines { display: grid; gap: 1.2rem; margin-top: 1rem; }
  .lines a { display: grid; gap: 0.2rem; width: fit-content; }
  .lines small { font-size: 0.68rem; letter-spacing: 0.34em; text-transform: uppercase; color: var(--or); }
  .lines span {
    font-family: var(--display);
    font-size: clamp(1.4rem, 2.3vw, 2.1rem);
    border-bottom: 1px solid transparent;
    transition: color 0.3s, border-color 0.3s;
    overflow-wrap: anywhere;
  }
  .lines a:hover span { color: var(--or-clair); border-color: var(--or); }

  .socials { display: flex; flex-wrap: wrap; gap: 0.6rem 2rem; font-size: 0.76rem; letter-spacing: 0.26em; text-transform: uppercase; color: var(--gris); }
  .socials a:hover { color: var(--or-clair); }

  form { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem 1.6rem; align-content: start; }
  .full { grid-column: 1 / -1; }

  .field { position: relative; }
  input:not([type='checkbox']),
  textarea {
    width: 100%;
    padding: 1.6rem 0 0.6rem;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--ligne);
    color: var(--creme);
    font: inherit;
    resize: vertical;
    border-radius: 0;
    transition: border-color 0.4s;
  }
  input:focus, textarea:focus { outline: none; border-color: var(--or-clair); }
  .field label {
    position: absolute;
    left: 0;
    top: 1.5rem;
    color: var(--gris);
    pointer-events: none;
    transition: transform 0.5s var(--out), font-size 0.5s var(--out), color 0.3s;
    transform-origin: left;
  }
  .field input:focus + label,
  .field input:not(:placeholder-shown) + label,
  .field textarea:focus + label,
  .field textarea:not(:placeholder-shown) + label {
    transform: translateY(-1.4rem);
    font-size: 0.7rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--or);
  }

  fieldset { border: 0; display: grid; gap: 0.9rem; }
  legend { font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--or); margin-bottom: 0.9rem; }
  .chips { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .chip { position: relative; cursor: pointer; }
  .chip input { position: absolute; opacity: 0; inset: 0; }
  .chip span {
    display: block;
    padding: 0.55em 1.2em;
    border: 1px solid var(--ligne);
    font-size: 0.82rem;
    transition: background 0.4s var(--out), color 0.4s, border-color 0.4s;
  }
  .chip input:checked + span { background: var(--or); color: var(--noir); border-color: var(--or); }
  .chip input:focus-visible + span { outline: 1px solid var(--or-clair); outline-offset: 3px; }

  .consent { display: flex; gap: 0.8rem; align-items: flex-start; font-size: 0.85rem; color: var(--gris); cursor: pointer; }
  .consent input { accent-color: var(--or); margin-top: 0.35em; }
  .ok { color: var(--or-clair); font-family: var(--display); font-size: 1.3rem; }

  @media (max-width: 860px) {
    .wrap { grid-template-columns: 1fr; }
    form { grid-template-columns: 1fr; }
  }
</style>
