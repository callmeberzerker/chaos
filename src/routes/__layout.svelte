<script lang="ts">
  import Header from '$lib/components/Header.svelte'
</script>

<!-- <header>
  <Nav />
  <a href="/"><h1 class:small={$page.path !== '/'}>SvelteKit + MDsveX Blog</h1></a>
</header> -->

<Header />

<main>
  <slot />
</main>

<footer>
  <p>
    Copyright &#169; <a href="https://twitter.com/callmeberzerker" target="_blank">callmeberzerker</a>, {new Date().getFullYear()}
  </p>
</footer>

<style>
  :global(:root) {
    --spacing-unit: 4px;
    --color-background: #e5e5e5;
    --color-text-primary: #212121;
    --color-text-secondary: #5a5a5a;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;

    --color-green: #11998e;
    --color-purple: #6a0dad;

    --color-white: #fff;
    --color-grey: #9b9b9b;
    --color-orange: #ff3e00;
    --color-secondary: var(--purple);
    --color-primary: var(--orange);
  }

  :global(body) {
    margin: 0 auto;
    max-width: 75ch;
    padding: calc(var(--spacing-unit) * 8);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* 
    background-color: var(--color-background);
    color: var(--color-text-primary); */
    line-height: 1.51;
    font-size: 18px;
    overflow-y: overlay;
  }

  :global(a) {
    text-decoration: none;
    /* color: var(--color-text-primary); */
    font-weight: 700;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  footer {
    margin-top: calc(var(--spacing-unit) * 8);
  }
</style>
