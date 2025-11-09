<script lang="ts">
  import App from '@/substrates/toroid-web/components/App.svelte'
  import favicon from './photos/tierra-icon.png'
  import navBg from './photos/navBg.jpg'
  import Guarda from './components/Guarda.svelte'
  import Container from './components/Container.svelte'
  import NavContainer from './components/NavContainer.svelte'
</script>

<App
  {navBg}
  {favicon}
  {Guarda}
  title="Web Environment - A Coding Field maintained by Ezequiel Schwartzman"
  nav={[
    ['index', 'handbook'],
    ['team', 'newsletter', 'funding'],
    ['releases', 'roadmap'],
    ['architecture', 'curated-library'],
  ]}
  {Container}
  {NavContainer}
  themeColors={{
    'main-hue': 82,
    'main-saturation': 57,
    'alt-hue': 35.1,
    'alt-saturation': 85.6,
  }}
></App>
