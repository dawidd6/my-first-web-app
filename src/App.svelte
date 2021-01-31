<script>
	import Footer from "./Footer.svelte";
	import API from "./api.js";
	import Navbar from "./Navbar.svelte";

	let error;
	/*
	let current = {
		temp: "11",
		icon: "favicon.png",
	};
	*/
	let current;
	let location;

	const fetchWeather = () => {
		const language = navigator.language;
		const api = new API(location, language);
		api.getCurrent()
			.then((res) => res.json())
			.then((json) => {
				if (json.error) {
					current = undefined;
					error = {
						code: json.error.code,
						message: json.error.message,
					};
					return;
				}
				current = {
					country: json.location.country,
					city: json.location.name,
					localtime: json.location.localtime,
					temp: json.current.temp_c,
					icon: json.current.condition.icon,
					condition: json.current.condition.text,
				};
				error = undefined;
			})
			.catch((err) => {
				current = undefined;
				error = {
					code: "0000",
					message: err,
				};
			});
	};

	const onSubmit = () => {
		fetchWeather();
	};

	const onKeyDown = (e) => {
		if (e.keyCode == 13) onSubmit();
	};
</script>

<svelte:head>
	<title>Weather</title>
</svelte:head>

<Navbar bind:location on:click={onSubmit} on:keydown={onKeyDown} />
<main class="w3-container w3-center w3-display-middle">
	{#if current}
		<div class="w3-container" style="display: flex">
			<img alt="Icon" src={current.icon} />
			<h1 class="temp">{current.temp}</h1>
			<p class="grade">&#8451;</p>
		</div>
		<p class="w3-text">
			{`${current.city}, ${current.country}`}
		</p>
	{:else if error}
		<p class="w3-text">{error.message}</p>
	{:else}
		<h2>Enter location and submit it!</h2>
	{/if}
</main>
<Footer />
