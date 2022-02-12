<script>
  import { simpleUrl } from '../utils/simpleUrl'

  export let url
  export let subtitle
  export let showUrl
</script>

<a
  href={url}
  class="transition-colors duration-200 relative block ( text-gray-700 hover:text-gray-900 hover:bg-gray-100 ) ( dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 ) p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded break-words"
  tabIndex="0"
>
  <img
    src={`https://icons.duckduckgo.com/ip3/${simpleUrl(url)}.ico`}
    alt=""
    width="16"
    height="16"
    class="inline-block mr-1"
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
      {simpleUrl(url)}
    </span>
  {/if}
</a>

<style>
  img {
    margin-top: -3px;
  }
</style>
