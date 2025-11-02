<script lang="ts">
  import DocPage from '../components/DocPage.svelte'
  import CaretDownIcon from '~icons/fa6-solid/caret-down'
</script>

<DocPage>
  <h1>Ezequiel's Web Environment Team Report</h1>

  <p>
    Newsletters replace social networks notifications. In order to not-depend on
    the, emailing system infrastructure, the better approach, I believe, it's to
    write the newsletters just as you would write an ordinary page, and generate
    an RSS feed. Then enable people to subscribe to the RSS feed by email with
    some third party service, or just introduce them to RSS feed readers.
  </p>

  <p>
    Since this is not a priority at the moment, I'm just leaving a placeholder
    here, and the idea to float away into the ether so that it comes back when
    the neccesity demands it.
  </p>

  <p>
    And if you truly wish to subscribe to news about the Web Environment
    updates, I'll manually send you the link with the updates from my personal
    email.
  </p>

  <div class="flexcc mb6">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSePVOrc6PfDTT2IxBywBTG6sUHx4o6feyNxMUYwvKXDxe0gGw/viewform?usp=header"
      target="_blank"
      class={[
        'text-center',
        'btn p3 bg-main-500 text-white mx-auto block rounded-2 b b-black/10 text-b',
        'hover:brightness-110',
      ]}
      >Sign up so that I ping you personally
    </a>
  </div>

  <div class="bg-yellow-1 text-black/70 p6 b b-black/10 rounded-2 font-sans">
    <div class="flex mb6">
      <div class="flex-grow">
        <h2 class="">2nd of November 2025</h2>
        <div class="-mt6 font-mono">
          The struggle to explain what has never existed
        </div>
      </div>
      <button
        class="flexcc w-16 b b-transparent hover:(bg-white/50 b-black/10) rounded-2"
        ><CaretDownIcon class="text-6" /></button
      >
    </div>
    <p>Today marks the first update report and so I'm going to wing it.</p>
    <p>
      Over the years I've been inching closer and closer to the ultimate truth
      of life and everything. Or so I believe. I have not found it yet, but in
      the meantime, I've been also creating prototypes that have brought me to
      what I'm now calling the Web Environment.
    </p>
    <p>
      The web has always been kind of a hobbie for me, and a creative medium━━
    </p>
    <p>
      I've decided I'm just going to share with you what I've been working on
      rather than go into a long dramatic adventure about the story of my life,
      how I got here and and how I'm such a victim of my own genius, and the
      pain of being misunderstood.
    </p>
    <p
      >I'm making a list of the <em>most interesting</em> things I've created and
      then expanding on them:</p
    >
    <ul>
      <li>
        The visual Electron-based UI for managing projects, version controlling
        with GIT, syncing to remote, selecting substrate, awakening the
        dev-server-process, cloning, building and publishing.
      </li>
      <hr />
      <li>The very beautiful multi-process architecture</li>
      <li>Parent-repo architecture</li>
      <li>
        What I'm calling the toroidal-navigation-pattern for building websites
      </li>

      <li>
        WebEnv-based websites for my neighbourhood and the regional agroecologic
        network using toroidal navigation
      </li>

      <li>Video overview of the Web Environment</li>
      <li>First experiment with canvas-based mainframe UI</li>
      <li>First experiments with Svelte AST</li>
      <li>First experiments with HTML blocks editing</li>

      <li>Infinite canvas substrate and publishable website</li>
      <li>TypeScript simple browser-to-system tunneling server</li>
      <li>Soft internationalization approach for multi-language people</li>
      <li>First experiments with self-exported integrated TLDraw component</li>
    </ul>

    <p>Looking back, I've been having a lot of fun.</p>
    <p
      >So what's next in the roadmap? Check <a href="/roadmap">the roadmap</a
      >.</p
    >
  </div>
</DocPage>
