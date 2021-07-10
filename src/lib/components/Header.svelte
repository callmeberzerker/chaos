<script lang="ts">
  import { page } from '$app/stores'
</script>

<header>
  <nav>
    <ul>
      <li class:active={$page.path === '/' || $page.path.startsWith('/posts')}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::after {
    --size: 2px;
    content: '';
    position: absolute;
    top: 50px;
    width: 100%;
    border-bottom: var(--size) solid var(--color-orange);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--color-white);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-orange);
  }
</style>
