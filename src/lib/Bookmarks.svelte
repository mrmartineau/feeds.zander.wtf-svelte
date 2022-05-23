<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import LinkSkeleton from './LinkSkeleton.svelte'
  export let tag
  export let title

  const COUNT = 70
  const FEED_PATH = `/api/otter?tag=${tag}&count=${COUNT}`

  let data = []
  if (window.localStorage.getItem(`zm-${tag}`)) {
    data = JSON.parse(window.localStorage.getItem(`zm-${tag}`))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH)
      const json = await res.json()
      data = json.body.data
      window.localStorage.setItem(`zm-${tag}`, JSON.stringify(data))
    } catch (error) {
      console.log('no bookmarks')
    }
  })
</script>

<div>
  <ColumnHeading>{title}</ColumnHeading>
  <ul>
    {#each data as { title, url, description }}
      {#if title}
        <li class="mb-1">
          <Link {url} subtitle={description} showUrl={true}>
            {title}
          </Link>
        </li>
      {/if}
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
