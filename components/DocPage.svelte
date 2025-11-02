<script lang="ts">
  import '@/center/doc.css'

  const props: { children: any } = $props()
</script>

<div class="max-w-screen-md mx-auto px6 doc pb12">
  {@render props.children?.()}
</div>

<style>
  :global(.doc h1) {
    @apply font-fredoka text-main-500 tracking-wider text-shadow-[1px_2px_0_#000a];
  }

  :global(.doc p) {
    @apply tracking-wide;
  }
</style>
