<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
	<div class="flex h-full w-full flex-col items-center justify-center gap-2">
		<p class="text-2xl font-medium ">
			Count is {{ count }}
		</p>
		<button class="bg-purple-700 text-white rounded-lg text-lg px-4 py-2 cursor-pointer" type="button" @click="count++">
			Increment
		</button>
	</div>
</template>
