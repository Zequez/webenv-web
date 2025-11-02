<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher, tick } from 'svelte'
  import type { Editor } from 'tldraw'

  export let tldrawValue: any = null // incoming TLDraw JSON document
  export let tldrawKey: string = 'tldraw:local'
  export let svgValue: string | null = null
  export let onChange: (doc: any, svg: string | null) => void

  let fullscreen = false
  let container: HTMLDivElement | null = null
  let reactRoot: any = null
  let appRef: Editor | null = null
  let generateSnapshot: any = null

  // Close on ESC
  function handleKeydown(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && fullscreen) {
      closeEditor()
    }
  }

  function openEditor() {
    fullscreen = true
    // we’ll mount Tldraw editor on open
    tick().then(initTldraw)
    document.addEventListener('keydown', handleKeydown)
  }

  async function closeEditor() {
    fullscreen = false
    document.removeEventListener('keydown', handleKeydown)

    // get current TLDraw doc + exported SVG before unmount
    if (appRef) {
      try {
        const doc = generateSnapshot()
        const img = await appRef.toImage(appRef.getCurrentPageShapes(), {
          format: 'svg',
        })
        console.log(img)
        const svgStr = await img.blob.text()

        if (onChange) onChange(doc, svgStr)
      } catch (e) {
        console.error('Error exporting svg', e)
      }
    }

    if (reactRoot) {
      try {
        reactRoot.unmount()
      } catch {}
      reactRoot = null
      appRef = null
    }
  }

  async function initTldraw() {
    if (!container) return

    const React = (await import('react')).default
    const ReactDOMClient = await import('react-dom/client')
    const { Tldraw, Editor, getSnapshot } = await import('tldraw')
    await import('tldraw/tldraw.css')

    console.log('Initing')

    reactRoot = ReactDOMClient.createRoot(container)
    reactRoot.render(
      React.createElement(Tldraw, {
        persistenceKey: tldrawKey,
        snapshot: tldrawValue,
        onMount: (editor) => {
          console.log('EDITOR', editor)
          generateSnapshot = () => getSnapshot(editor.store)
          appRef = editor
        },
      }),
    )
  }

  onDestroy(() => {
    if (reactRoot) {
      try {
        reactRoot.unmount()
      } catch {}
    }
    document.removeEventListener('keydown', handleKeydown)
  })
</script>

<!-- Preview mode -->
{#if !fullscreen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="b-y b-gray-200 bg-gray-50 flexcc overflow-hidden w-full h-full cursor-pointer"
    on:dblclick={openEditor}
  >
    {#if svgValue}
      <div class="w-full h-full">
        {@html svgValue}
      </div>
    {:else}
      <div class="text-gray-400 italic">Double-click to edit drawing…</div>
    {/if}
  </div>
{/if}

<!-- Fullscreen editor -->
{#if fullscreen}
  <div class="fixed inset-0 z-50 bg-white">
    <div class="absolute inset-0" bind:this={container}></div>
  </div>
{/if}
