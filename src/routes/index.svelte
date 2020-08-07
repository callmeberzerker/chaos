<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  ul {
    text-align: center;
    list-style: inside;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Spase Markovski | Welcome!</title>
  <meta
    name="description"
    content="Spase Markovski - trials and tribulations..." />
</svelte:head>

<h1>Welcome to my home page!</h1>

<figure>
  <img alt="Yours truly" src="0.jpg" />
  <figcaption>Look at this mysterious face!</figcaption>
</figure>

<p>You can find me online in the following places:</p>

<ul>
  <li>
    <a href="https://twitter.com/callmeberzerker">
      https://twitter.com/callmeberzerker
    </a>
  </li>
  <li>
    <a href="https://github.com/callmeberzerker">
      https://github.com/callmeberzerker
    </a>
  </li>
  <li>
    <a href="https://instagram.com/callmeberzerker">
      https://instagram.com/callmeberzerker
    </a>
  </li>
</ul>
