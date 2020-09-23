<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <!-- <Route path="about" component="{About}" /> -->
    <Route path="/"><Home /></Route>
  </div>
</Router>