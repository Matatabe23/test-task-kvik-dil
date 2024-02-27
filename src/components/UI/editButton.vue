<template>
	<button>
		<slot></slot>
	</button>
</template>

 <script>
export default{
	name: 'editButton'
}
</script>

<style scoped>

button {
	background-color: #6cff47;
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

button:hover {
	background-color: #478e36;
}
</style>