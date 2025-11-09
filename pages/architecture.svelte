<script>
  import DocPage from '../components/DocPage.svelte'
</script>

<DocPage>
  <h1>Architecture</h1>

  <p>
    Here I'm attempting to give an overview of the architectural decisions of
    the Web Environment that maket it different from traditional web
    repositories.
  </p>

  <ul>
    <li>There is no production code</li>
    <li>All sub-repositories run on the same environment</li>
    <li>Substrates as a new distinction</li>
    <li>Mainframe: Web Environment self-management and sub-repos management</li>
    <li>Meta Vite Configurator</li>
    <li>Automatic port assignment</li>
    <li>Web Projecting</li>
    <li>Custom CLI rather than package.json script</li>
    <li>Shared curated package.json and config for every project</li>
    <li></li>
  </ul>
</DocPage>
