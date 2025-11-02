<script lang="ts">
  import { OptImg, photos } from '../photos'
</script>

<div id="nav-start"></div>
<a
  href="#nav-start"
  onclick={(ev) => {
    const el = document.getElementById('nav-start')!
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    ev.preventDefault()
  }}
  class="h-12 text-center flexcc relative font-fredoka"
>
  <span
    class="absolute inset-0 pointer-events-none z-100 shadow-[inset_0_-3px_0_#0007,inset_0_3px_#fff6]"
  ></span>
  <span class="absolute z-99 inset-0 pointer-events-none overflow-hidden">
    <OptImg {...photos['banner']} alt="Banner" class="relative -mt8%" />
  </span>
  <span class="absolute w-full h-1px z-101 top-2px bg-white/10"></span>
  <span
    class="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-black/5"
  ></span>

  <span
    class="mx-auto block relative text-white z-101 text-shadow-[0_1px_0_#0006]"
  >
    The <span class="underline underline-(1 double lime-500 offset-3)">
      Web Environment
    </span>
  </span>
</a>
