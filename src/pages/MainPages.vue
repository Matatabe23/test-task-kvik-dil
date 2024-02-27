<template>
	<div class="MainPages">
		<h1>Добро пожаловать!</h1>
		<button @click="$router.push('/CheckList')" class="">Начать работу</button>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped>
.MainPages {
	width: 70%;
	margin: 30vh auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 10;
}

.MainPages h1 {
	font-size: 8vh;
}

.MainPages button {
	background-color: rgb(0, 213, 255);
	border: none;
	padding: 4vh;
	font-size: 4vh;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.5s ease;
}

.MainPages button:hover {
	background-color: rgb(52, 175, 224);
	transform: scale(1.1);
}
</style>
