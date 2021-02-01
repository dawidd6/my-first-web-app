<script>
	import Footer from "./Footer.svelte";
	import API from "./api.js";
	import Navbar from "./Navbar.svelte";

	let current = {
		temp: "11",
		icon: "favicon.png",
		city: "Warsaw",
		condition: "Cloudy",
		cloud: "50",
		humidity: "60",
	};

	let error;
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
					cloud: json.current.cloud,
					humidity: json.current.humidity,
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
<main>
	{#if current}
		<div class="current">
			<div class="cloud-humidity">
				<i class="cloud-icon fa fa-cloud" />
				<p class="cloud-value">{current.cloud}%</p>
				<i class="humidity-icon fa fa-tint" />
				<p class="humidity-value">{current.humidity}%</p>
			</div>
			<div class="temp-grade">
				<p class="temp-value">{current.temp}</p>
				<sup class="grade-icon">&#8451;</sup>
			</div>
			<p class="city">{`${current.city}, ${current.country}`}</p>
			<p class="condition">{current.condition}</p>
			<img
				class="image"
				src={current.icon}
				alt="Icon"
				width="64"
				height="64"
			/>
		</div>
	{:else if error}
		<p class="error">{error.message}</p>
	{:else}
		<p class="greeting">Enter location and submit it!</p>
	{/if}
</main>
<Footer />

<style>
	main {
		margin-top: 10%;
		margin-bottom: 20%;
		color: black;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #dee0e4;
	}
	.current {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.cloud-humidity {
		display: flex;
		height: 4em;
		align-items: center;
		justify-content: center;
		width: 80px;
	}
	.cloud-icon {
		margin-right: 10px;
	}
	.cloud-value {
		margin-right: 20px;
	}
	.humidity-icon {
		margin-left: 20px;
	}
	.humidity-value {
		margin-left: 10px;
	}
	.temp-grade {
		display: flex;
		height: 4em;
		margin-bottom: 5px;
	}
	.temp-value {
		font-size: 4em;
		align-self: center;
	}
	.grade-icon {
		font-size: 2em;
	}
	.city {
		font-size: 1em;
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.condition {
		font-size: 1em;
		margin-top: 0px;
		margin-bottom: 5px;
	}
	.greeting {
		color: #7f899b;
		font-weight: bold;
		font-size: x-large;
	}
	.error {
		color: rgb(230, 78, 78);
		font-style: italic;
		font-weight: bold;
		font-size: large;
	}
</style>
