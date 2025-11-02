<script module lang="ts">
  let svgs = import.meta.glob('./tldraw/*.svg', { eager: true, as: 'raw' })
  let tldraws = import.meta.glob('./tldraw/*.json', { eager: true })

  console.log('Loading', Object.keys(svgs), Object.keys(tldraws))

  function reloadModules() {
    svgs = import.meta.glob('./tldraw/*.svg', { eager: true, as: 'raw' })
    tldraws = import.meta.glob('./tldraw/*.json', { eager: true })
    console.log('Reloaded modules:', Object.keys(svgs), Object.keys(tldraws))
  }

  if (import.meta.hot) {
    console.log('HOot?')
    import.meta.hot.accept((updatedModules) => {
      console.log('Hotting!')
      console.log('Some module in folder changed', updatedModules)
      reloadModules()
    })
  }
</script>
