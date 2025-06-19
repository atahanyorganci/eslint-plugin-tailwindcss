<script setup lang="ts">
import Counter from "./Counter.vue";
</script>

<template>
	<div class="relative mx-auto w-[50%]">
		<h1 class="text-2xl text-3xl font-medium">
			Header
		</h1>
		<p class="custom-font text-sm text-gray-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
		</p>
		<span class="absolute top-[-4px] right-[-4px] size-2 bg-red-500" />
	</div>
	<Counter />
</template>
