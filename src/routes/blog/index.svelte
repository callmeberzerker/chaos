<script>
  // import the list of posts
  import { posts } from './_blogs';
</script>

<svelte:head>

  <title>Spase Markovski | Blog posts</title>
  <meta
    name="description"
    content="Spase Markovski has opinions on things. Haven't you heard? It's my
    understanding that everyone has heard." />
</svelte:head>

<div>
  {#each posts as post}
    <article>
      <!-- link article to /posts/$permalink -->
      <a href={`/blog/${post.permalink}`}>
        <h2>{post.title}</h2>
        <p>
          {post.summary} - {new Intl.DateTimeFormat('en-GB').format(post.date)}
        </p>
      </a>
    </article>
  {/each}
</div>
