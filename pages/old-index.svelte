<script lang="ts">
  import { lsState, onTripleShift } from '@/center/utils/runes.svelte'
  import DiamondIcon from '~icons/fa6-solid/diamond'
  // import TLDrawWrapper from '../TLDrawWrapper.svelte'
  import StoredTLDraw from '../StoredTLDraw.svelte'
  import banner from '../photos/banner.png'
  import { onMount } from 'svelte'

  let vGridEnabled = lsState('v-grid-enabled', { v: false })
  let container: HTMLDivElement = null!

  // onTripleShift(window, () => {
  //   vGridEnabled.v = !vGridEnabled.v
  // })

  onMount(() => {
    console.log(container)
    document.documentElement.addEventListener('scrollend', () => {
      console.log(container!)
      const snapped = Math.round(container.scrollTop / 16) * 16
      container.scrollTo({ top: snapped, behavior: 'smooth' })
    })
  })
</script>

<svelte:head>
  <title>
    Web Environment - Post-insanity collaborative coding infrastructure
  </title>
</svelte:head>

<div
  class="relative min-h-screen bg-gray-100 font-sans overflow-auto"
  bind:this={container}
>
  <div class="flex">
    <div class="w-60 bg-gray-50 relative z-1 flex-shrink-0">
      <div
        class="w-60 h-screen text-right fixed top-0 left-0 b-r b-gray-200"
        style="--rhythm:1.5rem; --line-thickness:1px; background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0.12) 0 calc(var(--line-thickness)), transparent calc(var(--line-thickness)) var(--rhythm));"
      >
        <div class="h30 mb6 overflow-hidden relative">
          <img src={banner} alt="Banner" class="0" />
          <div
            class="absolute text-shadow-[0_2px_0px_#000f] flexcc inset-0 text-1rem text-center text-white/90 font-fredoka"
          >
            <div>
              The Web Environment
              <br />
              <span class="text-2rem underline underline-(2 lime-500 offset-3)"
                >Handbook</span
              >
            </div>
          </div>
        </div>
        <div class="pr2 font-serif font-bold tracking-wider">
          <div>Ethos</div>
          <div>The Distinctions</div>
          <div>The Architecture</div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <div class="center-context">
        <div class="mb6 mt6 relative">
          <div
            class="absolute text-shadow-[0_2px_0px_#000f] flexcc inset-0 text-4rem text-center text-white/90 font-fredoka"
          >
            <div>
              The <span
                class="underline underline-(3 double lime-500 offset-6)"
              >
                Web Environment
              </span>
            </div>
          </div>
          <div class="overflow-hidden h-18rem rounded-1rem">
            <img src={banner} alt="Banner" class="0" />
          </div>
        </div>
        <!-- <div class="bg-gray-100 relative z-60"> -->
        <h2>Ethos</h2>
        <!-- </div> -->
        <p>
          99.999999%+ of the computer code neccesary to display something on a
          screen anywhere in the world is code that has already been written,
          it's our common human heritage. <a
            href="https://chatgpt.com/share/68de80ec-fac4-8004-bfe5-11fc294f042e"
            target="_blank"
          >
            Read this conversation with ChatGPT to understand what I mean.
          </a>
        </p>
        <p>In this context, claiming ownership of software is insane.</p>
        <p>
          The Web Environment project is about consciously honouring this
          reality of code, and cooperatively building from this context.
        </p>
        <p>
          It's about stewarding fertile Substrates where humans can express
          themselves creatively on digital screens.
        </p>
        <h2>The Distinctions</h2>
        <p>
          On the Web Environment <strong>there are no apps.</strong>
          Pieces of code can project themselves to the web at different locations,
          or to the local operative system. The whole code commons is taken as a
          single organism.
        </p>
        <p>
          On the Web Environment <strong>there is no "production" code.</strong>
          We all use the same original open source code directly from a stewarded
          repository and that's what our computers run.
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
          repo. You choose the individual who you get updates from; if the person
          dies, you pick someone else or you just stop receiving updates.
        </p>
        <p>
          On the Web Environment <strong>there are no users.</strong>
          Everybody is a co-creative participant on a
          <a href="https://gameworldtheory.mystrikingly.com/">Gameworld</a>.
          What you create on the Web Environment is the little part of the web
          commons you are stewarding yourself.
        </p>
        <h2>The Architecture</h2>
      </div>
      <div class="h120 w-full mb6 relative z-1">
        <!-- <TLDrawWrapper
          tldrawKey="tldraw:architecture"
          tldrawValue={null}
          svgValue={null}
          onChange={(tlDrawValue, svgValue) => {
            console.log(tlDrawValue, svgValue)
          }}
        /> -->
      </div>
      <div class="center-context">
        <h3>The Commons</h3>
        <h3>The Mainframe</h3>
        <h3>The Substrates</h3>
        <h3>The Repos</h3>
        <h3>The Handbook</h3>
        <h2>Substrates</h2>
        <h2>Stewards</h2>
        <h2>Workflows</h2>

        <h2>The Tech Package</h2>
        <p>
          Warning: This next section will likely make little sense to anyone who
          has not been web-developing for a while.
        </p>
        <p>
          The Web Environment is a completely pre-configured, all-batteries
          included code development environment to build your projects.
        </p>
        <p>No more custom configuration files.</p>
        <p>No more more installing NPM packages.</p>
        <p>No more messing with TSConfig</p>
        <p>No more copying configuration files when starting new projects</p>
        <p>No more scaffolding</p>
        <p>No more setting up pre-rendering</p>
        <p
          >Just an evergreen environment where all the most delightful plugins,
          development tools, libraries, frameworks, are curated, installed,
          harmoniously working together and ready at your fingertips. And it's
          always up-to-date, we all share the same environment. Like the single
          Team Gaia that we are.</p
        >
        <h3>What you actually get at the moment</h3>
        <p>
          This is the state of the art coding environment I've grown, nurtured
          and evolved over the more than two decades since I learned how to
          write my first website writing HTML with Windows XP notepad.exe.
          Things have gotten <em>quite more complex</em> since then on the web arena.
        </p>
        <h4>
          All of this pre-configured for all your projects, without the burden
          of having to maintain it on each repo
        </h4>
        <p>
          Your new project can just be an empty repository with a single
          `App.svelte` file and wenv.yml and it has everything.
        </p>
        <ul>
          <li>Bun as the JavaScript runtime</li>
          <li>Prettier</li>
          <li>
            Frameworks: Mostly Svelte 5 centric, but others available
            <ul>
              <li>Svelte 5</li>
              <li>
                SVX (use Markdown on Svelte, or Svelte components on Markdown)
              </li>
              <li>React</li>
              <li>Preact</li>
            </ul>
          </li>
          <li>
            Utility library
            <ul>
              <li>Curated utility library accessible to all your projects</li>
            </ul>
          </li>
          <li>
            Fun toolkits
            <ul>
              <li>
                TLDraw
                <ul>
                  <li>
                    Custom TLDraw component that can be edited from the browser
                    and loads and saves itself to the disk, so you can furnish
                    anything you create with TLDraw-created SVGs that can be
                    edited
                  </li>
                </ul>
              </li>
              <li>Box2D</li>
            </ul>
          </li>
          <li>
            Vite
            <ul>
              <li
                >Plugins: Svelte, UnoCSS, Iconify configured for Svelte,
                imagetools, YAML imports</li
              >
              <li>3-step pre-rendering for Svelte 5 without using SvelteKit</li>
            </ul>
          </li>
          <li>Iconify with FontAwesome 6</li>
          <li>
            UnoCSS with...
            <ul>
              <li>Tailwind Preset</li>
              <li>Transformer Directive</li>
              <li>Icons Preset to use Iconify as classes</li>
              <li>Typhography Preset</li>
              <li>
                Web Fonts preset
                <ul>
                  <li>Configured with Bunny fonts</li>
                  <li>
                    Configured to be locally served so they keep working if you
                    force-refresh without Internet
                  </li>
                  <li>
                    Setup different custom fonts for each project by just
                    changing it on the wenv.yml file
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p>System API access</p>
        <ul>
          <li></li>
        </ul>
        <p>
          Electron based UI to manage the Web Environment, accessible to
          no-code-saavy people too
        </p>
        <ul>
          <li>
            Create new projects from blank or copy existing ones and pick which
            Substrate to use for it
          </li>
          <li>
            Start and stop Vite servers, auto-assign IPs, toggle the server
            availability to the local network (so it can be accessed from a
            phone for example), auto-start multiple servers on boot.
          </li>
          <li>
            Simplified GIT for easily syncing repos. Made simple so people
            without any GIT knowledge can auto-sync your latest code that you
            publish as a Git repository. Made easy for stewarding websites and
            tools for people.
          </li>
          <li>
            Build, pre-render and publish your projects as websites on the web
          </li>
          <li>
            Run any project on development mode as an Electron window that can
            be kiosk-mode-full-screened and live-auto-updated leveraging HMR as
            it pulls automatically from a Git repo.
          </li>
        </ul>
        <p>
          The Web Environment is not a package, it's not on NPM, it's a
          collaborative code repository. You can just use it by cloning my repo
          and pull to get the latest code I publish. And if you want to play
          around with it and add your own features, make sure to publish them
          and tell me about them so I can integrate them into my version if I
          love them!
        </p>
        <p>
          Also, if you use the Web Environment in your projects and you've get
          them published, please let me know so I can subscribe to your projects
          and see how people are using the system; and I get the added benefit
          of being able to check if a new feature I'm writing might break your
          code, and I can be more careful or tell you about it, or just update
          the code for you and send you a PR.
        </p>
      </div>
    </div>
  </div>
  {#if vGridEnabled.v}
    <div
      class="absolute inset-0 pointer-events-none z-0 mix-blend-normal"
      aria-hidden="true"
      style="--rhythm:1.5rem; --line-thickness:1px; background-image: repeating-linear-gradient(to bottom, rgba(0,0,0,0.12) 0 calc(var(--line-thickness)), transparent calc(var(--line-thickness)) var(--rhythm));"
    ></div>
  {/if}
</div>

<style>
  .center-context {
    @apply: mx-auto max-w-screen-md px4 relative z-1;
  }

  h2 {
    @apply text-2rem mb6 font-black font-serif my4;
  }

  h3 {
    @apply text-1rem mb6 underline underline-(black/80 2 single);
  }

  p,
  li {
    @apply text-1rem mb6 tracking-wider text-black/80;
  }

  a {
    @apply text-lime-600 underline;
  }

  ul {
    @apply ml6;
  }
  li {
  }
</style>
