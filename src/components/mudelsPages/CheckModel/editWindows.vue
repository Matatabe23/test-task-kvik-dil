<template>
	<div>
		<div class="modalBackdrop" v-if="editingTask" @click="cancelEdit"></div>
		<div v-if="editingTask" class="editWindows">
			<input v-model="editedTask.name" type="text" placeholder="Название" maxlength="30">
			<input v-model="editedTask.type" type="text" placeholder="Цель" maxlength="30">
			<editButton @click="saveEditedTask">Сохранить</editButton>
			<editButton @click="cancelEdit">Отмена</editButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		editedTask: {
			type: Object,
			default: () => { }
		},
		editingTask: {
			type: Object,
			default: () => null
		}
	},
	methods: {
		saveEditedTask() {
			this.$emit('saveEdit', this.editedTask);
		},
		cancelEdit() {
			this.$emit('cancelEdit');
		}
	}
}
</script>

<style scoped>
.modalBackdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
}

.editWindows {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	z-index: 1000;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	max-height: 50vh;
	height: 40vh;
}

.editWindows input {
	padding: 1vh;
	width: 90%;
	border: none;
	border-bottom: 3px solid black;
	text-align: center;
}
</style>
