<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import { simpleUrl } from '../utils/simpleUrl'
  import LinkSkeleton from './LinkSkeleton.svelte'

  const FEED_PATH = `/api/producthunt`
  const LS_KEY = 'zm-producthunt'
  let data = []
  if (window.localStorage.getItem(LS_KEY)) {
    data = JSON.parse(window.localStorage.getItem(LS_KEY))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH);
      const json = await res.json();
      data = json.body.data.viewer.user.votedPosts.edges
      window.localStorage.setItem(LS_KEY, JSON.stringify(data))
    } catch (error) {
      console.log('no PH likes')
    }
  })
</script>

<div>
  <ColumnHeading>Product Hunt Votes</ColumnHeading>
  <ul>
    {#each data as { node }}
      <li class="mb-1">
        <Link url={node.website} subtitle={node.description}>
          {node.name}
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
