<script>
	export let location;
</script>

<nav>
	<input
		type="text"
		placeholder="Enter location"
		bind:value={location}
		on:keydown
	/>
	<button on:click>Submit</button>
</nav>

<style>
	nav {
		display: flex;
		position: fixed;
		flex-flow: row;
		flex-wrap: nowrap;
		align-items: center;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #343842;
		border-radius: 0 0 20px 20px;
		color: white;
		box-shadow: 0 0 5px black;
	}
	input {
		width: 100%;
		margin: 10px 10px 10px 15px;
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0 0 5px black;
		font-size: 1em;
	}
	input:focus {
		outline-color: green;
	}
	button {
		background-color: green;
		color: white;
		border-color: green;
		border-style: solid;
		border-radius: 5px;
		box-shadow: 0 0 3px black;
		margin: 5px 15px 5px 5px;
		padding: 5px;
		font-size: 1em;
	}
	button:hover {
		background-color: rgba(0, 255, 0, 0.2);
	}
</style>
