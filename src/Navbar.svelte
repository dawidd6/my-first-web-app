<script>
	export let location;
</script>

<nav class="w3-bar w3-black w3-card-4 w3-center">
	<input
		class="w3-input w3-border w3-round w3-bar-item w3-margin"
		type="text"
		placeholder="Enter location"
		bind:value={location}
		on:keydown
	/>
	<button on:click class="w3-button w3-round w3-teal w3-bar-item w3-margin-top w3-margin-bottom"
		>Submit</button
	>
</nav>