<script>
	import { Router, Link, Route } from "svelte-routing";
	import Header from "../containers/Header.svelte"
	import Home from "../containers/Home.svelte";
	import Barchart from "../containers/BarChart.svelte"
	import FunnelChart from "../containers/FunnelChart.svelte";
	import LineChart from "../containers/LineChart.svelte";
	import MekkoChart from "../containers/MekkoChart.svelte";
	import PieChart from "../containers/PieChart.svelte";
	import SankeyChart from "../containers/SankeyChart.svelte";
	import { nebulaPromise } from './stores.js';

	export let url = "";
	let n;
	nebulaPromise.subscribe(async value => {
		n = await value();
	});
</script>

<Router url="{url}">
	<Header {n}/>
  <div>
    <Route path="/sankey-chart/"><SankeyChart {n}/></Route>
    <Route path="/pie-chart/"><PieChart {n}/></Route>
    <Route path="/mekko-chart/"><MekkoChart {n}/></Route>
    <Route path="/line-chart/"><LineChart {n}/></Route>
    <Route path="/funnel-chart/"><FunnelChart {n}/></Route>
		<Route path="/bar-chart/"><Barchart {n}/></Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>