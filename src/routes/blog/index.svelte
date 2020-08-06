<script>
  // import the list of posts
  import { posts } from "./_blogs";
</script>

<div>
  {#each posts as post}
    <article>
      <!-- link article to /posts/$permalink -->
      <a href={`/blog/${post.permalink}`}>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
      </a>
    </article>
  {/each}
</div>
