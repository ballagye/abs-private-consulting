import type { Action } from 'svelte/action';

interface RevealOptions {
	threshold?: number;
	once?: boolean;
}

/**
 * Action Svelte : marque l'élément `data-in` lorsqu'il entre dans le viewport.
 * Le CSS (app.css) porte toute l'animation ; le délai se règle via `--i`.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (
	node,
	{ threshold = 0.18, once = true } = {}
) => {
	if (typeof IntersectionObserver === 'undefined') {
		node.dataset.in = '';
		return;
	}
	const io = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.dataset.in = '';
				if (once) io.disconnect();
			} else if (!once) {
				delete node.dataset.in;
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
};
