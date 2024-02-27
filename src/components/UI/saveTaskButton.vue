<template>
	<button>
		<slot></slot>
	</button>
</template>

<script>
export default{
	name: 'saveTaskButton'
}
</script>

<style scoped>
button{
	background-color: aqua;
	border: none;
	border-radius: 8px;
	padding: 2vh;
	cursor: pointer;
}
</style>