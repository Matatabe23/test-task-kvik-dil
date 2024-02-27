<template>
	<button>
		<slot></slot>
	</button>
</template>

 <script>
export default{
	name: 'deleteButton'
}
</script>

<style scoped>

button {
	background-color: #ff6347;
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

button:hover {
	background-color: #d32f2f;
}
</style>