# Nebula Svelte template

## Get started

Install the dependencies...

```bash
cd nebula-svelte
npm install
```

Add Qlik Sense server url, appId and webIntegrationId if you are using Qlik Sense Business or Qlik Sense Enterprise SaaS in the src/components/provider.

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


---

### Components

| sn-bar-chart | sn-line-chart | sn-pie-chart |
| :----:| :----: |:----: |
| ![sn-bar-chart](public/assets/barchart.png)  | ![sn-line-chart](public/assets/linechart.png) | ![sn-pie-chart](public/assets/piechart.png) |


| sn-sankey-chart | sn-funnel-chart | sn-mekko-chart |
| :----:| :----: |:----: |
| ![sn-sankey-chart](public/assets/sankeychart.png)  | ![sn-funnel-chart](public/assets/funnelchart.png) | ![sn-mekko-chart](public/assets/mekkochart.png) |
