<script>
	import { afterUpdate } from 'svelte';
	import { Link } from "svelte-routing";

	export let n;
	let selectionsToolbarElement;

	afterUpdate(async () => {
		if (!n) return;
		const selections = await n.selections();
		selections.mount(selectionsToolbarElement);
	});
</script>

<style>
	.nav { 
		padding-bottom: 50px; 
		text-align: center;
	}
	.selections {
		width:100%;
		height:50px;
	}
	.hidden { visibility: hidden; }
	.visible { visibility: visible; }
</style>

<nav class="nav">
	<Link to="/">Home</Link>
	|
	<Link to="/bar-chart/">Barchart</Link>
	|
	<Link to="/line-chart/">LineChart</Link>
	|
	<Link to="/pie-chart/">PieChart</Link>
	|
	<Link to="/mekko-chart/">MekkoChart</Link>
	|
	<Link to="/sankey-chart/">SankeyChart</Link>
	|
	<Link to="/funnel-chart/">FunnelChart</Link>
</nav>

<div
	bind:this={selectionsToolbarElement}
	class='selections visible'
></div>