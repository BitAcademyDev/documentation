# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Working with translations

After editing react components & sidebars run `npm run docusaurus write-translations` this will update `i18n/en` json
files that can then be copied to different languages

Testing with another locale `npm run start -- --locale nl`

**Note** when testing, only one locale will be available at a given time.
