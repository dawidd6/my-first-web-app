<script>
	import { onDestroy } from "svelte";
	import Footer from "./Footer.svelte";
	import Navbar from "./Navbar.svelte";

	let time;

	const interval = setInterval(() => {
		const date = new Date();

		let hours = date.getHours().toString();
		hours = hours.length > 1 ? hours : 0 + hours;
		let mins = date.getMinutes().toString();
		mins = mins.length > 1 ? mins : 0 + mins;
		let secs = date.getSeconds().toString();
		secs = secs.length > 1 ? secs : 0 + secs;

		time = `${hours}:${mins}:${secs}`;
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
</main>

<style>
        body {
                background-color: #e6fcfd;
        }

	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	}

	.header {
		color: #0f5a5f;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: lighter;
	}

	.time {
		color: #1e7e85;
		font-size: 3em;
		font-weight: normal;
	}
</style>
