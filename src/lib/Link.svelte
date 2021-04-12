<script>
  export let url
  export let subtitle
</script>

<a
  href={url}
  class="transition-colors duration-200 relative block ( text-gray-700 hover:text-gray-900 hover:bg-gray-100 ) ( dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-800 ) p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded"
  tabIndex="0"
>
  <slot />
  <br />
  <span class="text-sm text-gray-400 dark:text-gray-500">
    {subtitle}
  </span>
</a>
