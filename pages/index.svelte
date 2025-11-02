<script>
  import DocPage from '../components/DocPage.svelte'
  import { photos, OptImg } from '../photos.ts'
  import GithubIcon from '~icons/fa6-brands/github'
</script>

<div class="mb6 mt6 relative max-w-screen-md px6 mx-auto">
  <div class="absolute flexcc inset-0 text-center text-white/90">
    <div>
      <h1
        class="text-8 sm:text-12 lg:text-16 text-shadow-[0_2px_0px_#000f] font-fredoka"
      >
        The <span class="underline underline-(3 double lime-500 offset-6)">
          Web Environment
        </span>
      </h1>
      <div class="flexcc mt6">
        <a
          href="https://github.com/zequez/web-environment"
          target="_blank"
          class="flexcc bg-gradient-to-b from-white/10 to-white/0 bg-gray-200 b b-black/20 text-black/80 p3 rounded-2 shadow-[0_0_3px_0_#000a]"
        >
          <GithubIcon class="text-6 mr2" /> zequez/web-environment
        </a>
      </div>
    </div>
  </div>
  <div class="overflow-hidden h-18rem rounded-1rem">
    <OptImg {...photos['banner']} alt="Banner" class="0" />
  </div>
</div>

<DocPage>
  <div class="bg-gray-300 b-3 b-red-600 rounded-2 w-full relative mb6">
    <div class="pt-[60%]"></div>
    <div class="absolute inset-0 flexcc">YouTube Video</div>
  </div>

  <div class="mb6 flexcc">
    <span
      class="bg-yellow-500 block text-white px3 py3 rounded-2 text-shadow-[0_1px_0_#0005] shadow-[inset_0_0_6px_4px_#fff3,inset_0_-3px_0_0_#0002]"
      >Cooperation • Integrity • Generosity • Empowerment</span
    >
  </div>

  <p>
    Soverign Social Network Open Source Coding Environment Global Platform for
    Cultural Shift
  </p>

  <h2>Ethos</h2>
  <p>
    99.999999%+ of the computer code neccesary to display something on a screen
    anywhere in the world is code that has already been written, it's our common
    human heritage. <a
      href="https://chatgpt.com/share/68de80ec-fac4-8004-bfe5-11fc294f042e"
      target="_blank"
    >
      Read this conversation with ChatGPT to understand what I mean.
    </a>
  </p>
  <p>In this context, claiming ownership of software is insane.</p>
  <p>
    The Web Environment project is about consciously honouring this reality of
    code, and cooperatively building from this context.
  </p>
  <p>
    It's about stewarding fertile Substrates where humans can express themselves
    creatively on digital screens.
  </p>
  <p>
    It's about making software development accessible and transparent to
    everybody.
  </p>
  <h2>Radically different context</h2>
  <p>
    On the Web Environment <strong>there are no apps.</strong>
    Pieces of code can project themselves to the web at different locations, or to
    the local operative system. The whole code commons is taken as a single organism.
  </p>
  <p>
    On the Web Environment <strong>there is no "production" code.</strong>
    We all use the same original open source code directly from a stewarded repository
    and that's what our computers run.
  </p>
  <p>
    On the Web Environment <strong>there is no ownership.</strong>
    Code is stewarded, grown, evolved and tended like a garden.
  </p>
  <p>
    On the Web Environment <strong>
      there is no single source of truth.
    </strong>
    Individuals steward code repositories. There is no "official" Web Environment
    repo. You choose the individual who you get updates from; if the person dies,
    you pick someone else or you just stop receiving updates.
  </p>
  <p>
    On the Web Environment <strong>there are no users.</strong>
    Everybody is a co-creative participant on a
    <a href="https://gameworldtheory.mystrikingly.com/">Gameworld</a>. What you
    create on the Web Environment is the little part of the web commons you are
    stewarding yourself.
  </p>
  <!-- <div class="mb6 mt6 relative">
    <div
      class="absolute text-shadow-[0_2px_0px_#000f] flexcc inset-0 text-4rem text-center text-white/90 font-fredoka"
    >
      <h1 class="text-white!">
        The <span class="underline underline-(3 double lime-500 offset-6)">
          Web Environment
        </span>
      </h1>
    </div>
    <div class="overflow-hidden h-18rem rounded-1rem">
      <OptImg {...photos['banner']} alt="Banner" class="0" />
    </div>
  </div> -->
</DocPage>
