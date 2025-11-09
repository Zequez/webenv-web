<script>
  import DocPage from '../components/DocPage.svelte'
</script>

<DocPage>
  <h1>The Roadmap</h1>
  <p>
    In no particular order. So at the moment it's more like a nebulosa map, just
    dumped off my mind. It is my intention to bring more clarity to priority
    over time, with target completion dates and more details.
  </p>

  <p>
    There is no rush, except for total civilization collapse and the mass
    extinction of species.
  </p>

  <ul>
    <li>
      Play-test the Web Environment setup process on multiple machines on
      Windows, Linux and OSX-from-scratch, and make sure it can become fully
      functional and self-syncing to the upstream repository without any
      command-line interventions. This implies writing boot scripts to install
      Bun, and either another script for Git, or relying on isomorphic-git for
      the syncing operations.
    </li>
    <li>
      Add visual management of the toroidal pages navigation.
      <ul>
        <li>Add new pages</li>
        <li>Have the list of pages that are not visible on the navigation</li>
        <li>Add/remove columns</li>
        <li>Move pages around</li>
      </ul>
      This is all done manually from the code, the proposal is to embrace code-as-data
      and, using the tunneling system and Svelte AST reading update the App call
      directly.
    </li>
    <li>Have a default template for toroidal websites.</li>
    <li
      >Improving upon the repos management UI so that you can create repos with
      specific systems and configure them from there.</li
    >
    <li
      >Write a guide to registering domain names and configuring them for using
      them on Github pages</li
    >
    <li>
      Write workflow about creating a custom KEY for specific repos to give to
      people so they can push a repo to Github from their computer using
    </li>
    <li>
      Either setup an in-browser code editor for the repos or have a mechanism
      for setting up VSCode or any other code editor with the neccesary plugins.
      Point is, the code editor should come included with the Web Environment as
      it will be installed by everybody, not just coding enthusiasts.
    </li>
    <li>
      Prepare the appropiate infrastructure and proposal for using the Web
      Environment to ensure the future stewarding of the 700+ <a
        href="https://howtoplay.mystrikingly.com/"
        target="_blank">Startover.xyz</a
      > websites
    </li>
    <li>
      Alternative strategies for publishing the static pages other than Github
      Pages.
    </li>
  </ul>

  <h2>Definitely much further in the future</h2>

  <ul>
    <li>Tools for simultaneous multi-person editing of repos</li>
    <li>Add Holochain tools to the curated library</li>
    <li>
      Add Secure Scuttlebut to the curated library, and implement some sort of
      web-environment off-the-web communication channel. Also maybe use it's
      decentralized GIT system instead of relying on centralized Git.
    </li>
    <li
      >Sandboxing: is it even possible to safely run web-environment projects
      from untrusted third parties? Or should you just run the published
      projected version? Experimenting is may be needed.</li
    >
  </ul>
</DocPage>
