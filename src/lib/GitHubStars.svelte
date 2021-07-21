<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import LinkSkeleton from './LinkSkeleton.svelte'
  import Link from './Link.svelte'

  const FEED_PATH = `/api/github`

  let data = []
  if (window.localStorage.getItem('zm-gh-stars')) {
    data = JSON.parse(window.localStorage.getItem('zm-gh-stars'))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH)
      const json = await res.json()
      data = json.body
      window.localStorage.setItem('zm-gh-stars', JSON.stringify(data))
    } catch (error) {
      console.log('no stars')
    }
  })
</script>

<div>
  <ColumnHeading>GitHub Stars</ColumnHeading>
  <ul>
    {#each data as item}
      <li class="mb-1">
        <Link url={item.html_url} subtitle={item.description}>
          {item.full_name}
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
