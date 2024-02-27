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
	text-align: center;
}

.MainPages h1 {
	font-size: 4vh; 
	margin-bottom: 3vh; 
}

.MainPages button {
	background-color: rgb(0, 213, 255);
	border: none;
	padding: 3vh 4vh; 
	font-size: 3vh;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.5s ease;
}

.MainPages button:hover {
	background-color: rgb(52, 175, 224);
	transform: scale(1.1);
}

@media (max-width: 600px) {
	.MainPages {
		width: 90%; 
		margin: 20vh auto;
	}

	.MainPages h1 {
		font-size: 3vh;
	}

	.MainPages button {
		padding: 2vh 3vh; 
		font-size: 2vh; 
	}
}
</style>
