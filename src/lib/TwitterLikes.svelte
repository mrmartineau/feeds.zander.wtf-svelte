<script lang="ts">
  import { onMount } from 'svelte'
  import ColumnHeading from './ColumnHeading.svelte'
  import Link from './Link.svelte'
  import { simpleUrl } from '../utils/simpleUrl'

  const COUNT = 50
  const FEED_PATH = `/api/airtable?base=${import.meta.env.VITE_TWITTER_LIKES_BASE}&table=Likes&count=${COUNT}`

  let data = []
  onMount(async () => {
    try {
      const res = await fetch(FEED_PATH);
      const json = await res.json();
      data = json.body.records
    } catch (error) {
      console.log('no twitter likes')
    }
  })
</script>

<div>
  <ColumnHeading>Twitter Likes</ColumnHeading>
  <ul>
    {#each data as { fields }}
      <li class="mb-1">
        <Link url={fields.URL} subtitle={simpleUrl(fields.URL)}>
          {fields.Title}
        </Link>
      </li>
    {:else}
		<li>loading...</li>
	{/each}
  </ul>
</div>
