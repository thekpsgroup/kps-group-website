<script lang="ts">
	export let className = '';
	export let width: string | number = '100%';
	export let height: string | number = '1rem';
	export let rounded = 'rounded';
	
	$: style = `
		width: ${typeof width === 'number' ? `${width}px` : width};
		height: ${typeof height === 'number' ? `${height}px` : height};
	`;
</script>

<div 
	class="skeleton {className}"
	class:rounded-md={rounded === 'rounded-md'}
	class:rounded-lg={rounded === 'rounded-lg'}
	class:rounded-xl={rounded === 'rounded-xl'}
	class:rounded-full={rounded === 'rounded-full'}
	style={style}
	aria-hidden="true"
/>

<style>
	.skeleton {
		background: linear-gradient(
			90deg,
			rgba(212, 175, 55, 0.1) 25%,
			rgba(212, 175, 55, 0.2) 50%,
			rgba(212, 175, 55, 0.1) 75%
		);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;
		border-radius: 0.375rem;
	}
	
	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
	
	/* Respect reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.skeleton {
			animation: none;
		}
	}
</style>
