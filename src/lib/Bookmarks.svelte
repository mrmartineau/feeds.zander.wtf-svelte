<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import { simpleUrl } from '../utils/simpleUrl'
  import LinkSkeleton from './LinkSkeleton.svelte'

  const COUNT = 70
  const FEED_PATH = `/api/zmarks?count=${COUNT}`

  let data = []
  if (window.localStorage.getItem('zm-bookmarks')) {
    data = JSON.parse(window.localStorage.getItem('zm-bookmarks'))
  }
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH)
      const json = await res.json()
      console.log(`🚀 ~ onMount ~ json`, json)
      data = json.body.data
      window.localStorage.setItem('zm-bookmarks', JSON.stringify(data))
    } catch (error) {
      console.log('no bookmarks')
    }
  })
</script>

<div>
  <ColumnHeading>Bookmarks</ColumnHeading>
  <ul>
    {#each data as { title, url, description }}
      <li class="mb-1">
        <Link {url} subtitle={description} showUrl={true}>
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
