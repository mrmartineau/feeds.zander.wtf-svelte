<script lang="ts">
  import Bookmarks from './lib/Bookmarks.svelte'
  import GitHubStars from './lib/GitHubStars.svelte'
  import InstapaperUnread from './lib/InstapaperUnread.svelte'
  import TwitterLikes from './lib/TwitterLikes.svelte'
  import Tailwind from './Tailwind.svelte'
</script>

<Tailwind />

<div class="grid p-5 md:p-10">
  <main class="mx-auto flex gap-5 md:gap-10 overflow-x-auto">
    <div class="w-80 flex-none">
      <Bookmarks tag="zm:link" title="Bookmarks" />
    </div>
    <div class="w-80 flex-none">
      <TwitterLikes />
    </div>
    <div class="w-80 flex-none">
      <InstapaperUnread />
    </div>
    <div class="w-80 flex-none">
      <GitHubStars />
    </div>
    <div class="w-80 flex-none">
      <Bookmarks tag="ProductHuntUpvote" title="Product Hunt Votes" />
    </div>
  </main>
</div>
