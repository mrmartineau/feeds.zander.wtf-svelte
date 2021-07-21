<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import LinkSkeleton from './LinkSkeleton.svelte'
  import Link from './Link.svelte'

  const FEED_PATH = `https://rsstojson.com/v1/api/?rss_url=https://www.instapaper.com/rss/305104/YzRvSlLTQWV1lz5OjjeEk4Ogl8s`

  let data = []
  if (window.localStorage.getItem('zm-instapaper')) {
    data = JSON.parse(window.localStorage.getItem('zm-instapaper'))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH)
      const json = await res.json()
      data = json.rss.channel[0].item
      window.localStorage.setItem('zm-instapaper', JSON.stringify(data))
    } catch (error) {
      console.log('no unread items')
    }
  })
</script>

<div>
  <ColumnHeading>Instapaper unread</ColumnHeading>
  <ul>
    {#each data as { guid, link, title }}
      <li class="mb-1">
        <Link url={link} subtitle={guid}>
          {title}
        </Link>
      </li>
    {:else}
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
      <LinkSkeleton />
    {/each}
  </ul>
</div>
