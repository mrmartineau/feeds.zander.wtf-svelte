<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import { simpleUrl } from '../utils/simpleUrl'
  import LinkSkeleton from './LinkSkeleton.svelte'

  const COUNT = 50
  const FEED_PATH = `/api/airtable?base=${import.meta.env.VITE_BOOKMARKS_BASE}&table=bookmarks&count=${COUNT}`

  let data = []
  if (window.localStorage.getItem('zm-bookmarks')) {
    data = JSON.parse(window.localStorage.getItem('zm-bookmarks'))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH);
      const json = await res.json();
      data = json.body.records
      window.localStorage.setItem('zm-bookmarks', JSON.stringify(data))
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
