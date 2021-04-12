<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import { simpleUrl } from '../utils/simpleUrl'
  import LinkSkeleton from './LinkSkeleton.svelte'

  const COUNT = 50
  // const FEED_PATH = `https://api.airtable.com/v0/appaU6WzgLaVQp5xt/bookmarks?fields%5B%5D=Title&fields%5B%5D=URL&fields%5B%5D=Description&fields%5B%5D=Tags&fields%5B%5D=Created&sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=50`
  const FEED_PATH = `/api/airtable?base=${import.meta.env.VITE_BOOKMARKS_BASE}&table=bookmarks&count=${COUNT}`

  let data = []
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH);
      const json = await res.json();
      data = json.body.records
    } catch (error) {
      console.log('no bookmarks')
    }
  })
</script>

<div>
  <ColumnHeading>Bookmarks</ColumnHeading>
  <ul>
    {#each data as { fields }}
      <li class="mb-1">
        <Link url={fields.URL} subtitle={simpleUrl(fields.URL)}>
          {fields.Title}
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
