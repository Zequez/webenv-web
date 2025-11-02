<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  let container: HTMLDivElement | null = null
  let reactRoot: any = null

  /**
   * We dynamically import React/ReactDOM/Tldraw inside onMount to avoid SSR issues
   * and to keep bundling predictable. This will render the official React <Tldraw />
   * into the `container` div.
   *
   * persistenceKey: any string. tldraw will persist the session to localStorage under that key.
   * See tldraw docs for persistence details.
   */
  onMount(async () => {
    if (!container) return

    // dynamic imports so bundlers handle them only in the browser runtime
    const React = (await import('react')).default
    const ReactDOMClient = await import('react-dom/client')
    const { Tldraw } = await import('tldraw')

    // tldraw CSS (global). Make sure your bundler handles CSS imports.
    await import('tldraw/tldraw.css')

    // create React root into our container
    reactRoot = ReactDOMClient.createRoot(container)

    // render the tldraw editor
    reactRoot.render(
      React.createElement(Tldraw, {
        // persistenceKey will make tldraw save/load snapshots to localStorage automatically
        persistenceKey: 'tldraw:local',
        // you can pass other props here (collaboration config, default pageId, etc.)
      }),
    )
  })

  onDestroy(() => {
    if (reactRoot) {
      try {
        reactRoot.unmount()
      } catch (err) {
        // ignore unmount errors
      }
    }
  })
</script>

<div class="canvas-root" bind:this={container}></div>

<style>
  /* container should fill its parent. Adjust as you wish */
  .canvas-root {
    width: 100%;
    height: 100%;
    min-height: 420px;
  }
</style>
