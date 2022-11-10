<script lang="ts">
  import { simpleUrl } from '../utils/simpleUrl'
  export let url: string | undefined = undefined
  export let subtitle: string | undefined = undefined
  export let showUrl: boolean | undefined = undefined
  const urlDomain = simpleUrl(url)
</script>

{#if url}
  <a
    href={url}
    class="transition-colors duration-200 relative block ( text-gray-700 hover:text-gray-900 hover:bg-gray-100 ) ( dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 ) p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded break-words"
    tabIndex="0"
  >
    <img
      src={`https://icons.duckduckgo.com/ip3/${urlDomain}.ico`}
      alt={`Favicon for ${urlDomain}`}
      width="20"
      height="20"
      class="inline-block mr-1 rounded-full overflow-hidden"
    />
    <slot />
    {#if subtitle}
      <br />
      <span class="text-sm text-gray300 dark:text-gray-400">
        {subtitle}
      </span>
    {/if}
    {#if showUrl}
      <br />
      <span class="text-sm text-gray-400 dark:text-gray-500">
        {urlDomain}
      </span>
    {/if}
  </a>
{/if}

<style>
  img {
    margin-top: -3px;
  }
</style>
