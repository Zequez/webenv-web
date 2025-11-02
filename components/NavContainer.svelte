<script lang="ts">
  import navBg from '../photos/grass.jpg'
  import wavyloops from '@/substrates/linear-web/separators/wavy-loops.svg?raw'
</script>

<div class="relative flex-grow bg-gray-700 text-white print:hidden pb6">
  <div
    class="absolute inset-0 z-8 saturate-120 shadow-[inset_0_8px_10px_#0007,inset_0_2px_0_#0004]"
    style={`background-image: url(${navBg})`}
  ></div>
  <!-- <div class="absolute w-full h-30 bottom-0 text-lightblue-400 rotate-180 z-9">
    {@html wavyloops}
  </div> -->
  <!-- <div class="absolute inset-0 z-9 bg-gradient-to-b from-white to-black h-full" -->
  <!-- ></div> -->
  <div class="relative z-10">
    <slot />
  </div>
</div>
