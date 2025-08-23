<script lang="ts">
	export let targetId = 'main-content';
	export let label = 'Skip to main content';
</script>

<a
	href="#{targetId}"
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-navy text-white px-4 py-2 rounded-lg z-50 focus-ring"
>
	{label}
</a>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	
	.focus\:not-sr-only:focus {
		position: absolute;
		width: auto;
		height: auto;
		padding: 0.5rem 1rem;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
	}
</style>
