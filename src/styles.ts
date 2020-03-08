import { css } from 'linaria';

const MOBILE_BREAKPOINT = 768;

export const MEDIA_MOBILE = `@media all and (max-width: ${MOBILE_BREAKPOINT - 1}px)`;
export const MEDIA_DESKTOP = `@media all and (min-width: ${MOBILE_BREAKPOINT}px)`;

export const globals = css`
  :global :root {
    font-size: 16px;

    --font: 'Italiana', serif;

    --meta-font: italic 500 1rem var(--font);
    --nav-font: 500 1rem var(--font);
    --normal-font: 500 1.5rem var(--font);
    --title-font: 700 2rem var(--font);

    --black: #1b1c25;
    --grey: #3d3e4a;

    --small-margin: 1.5rem;
    --large-margin: 4rem;
  }
`;

export const reset = css`
  :global body,
  :global ul,
  :global p,
  :global h1 {
    border: 0;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  :global a {
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
    &:active {
      color: var(--black);
      text-decoration: underline;
    }
    &:visited {
      color: inherit;
    }
  }
`;
