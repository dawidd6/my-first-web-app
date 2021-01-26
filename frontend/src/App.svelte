<script>
	import { onDestroy } from "svelte";

	let time;
	let error;

	const interval = setInterval(() => {
		fetch("/api/time")
			.then((response) => response.json())
			.then((body) => {
				time = body.time;
				error = undefined;
			})
			.catch((err) => {
				time = undefined;
				error = err;
			});
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Timer</title>
</svelte:head>

<main>
	<h1 class="header">The time is</h1>
	<p class="time">{time ? time : "..."}</p>
	{#if error}
		<p class="error">{error}</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.header {
		color: #3eb317;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: lighter;
	}

	.time {
		color: #0366fc;
		font-size: 3em;
		font-weight: normal;
	}

	.error {
		color: #fc0349;
		font-size: 1em;
		font-style: italic;
	}
</style>
