<template>
	<div class="checkList">
			<div class="PostData">
					<input v-model="Task.name" type="text" placeholder="Название" maxlength="30">
					<input v-model="Task.type" type="text" placeholder="Цель" maxlength="30">
					<saveTaskButton @click="createTask">Сохранить</saveTaskButton>
			</div>
			<ListTasks :waiting="Waiting" @deleteTask="deleteTask" @startEdit="startEdit"></ListTasks>
			<editWindows :editedTask="editedTask" :editingTask="editingTask" @saveEdit="saveEdit" @cancelEdit="cancelEdit"></editWindows>
	</div>
</template>

<script>
import ListTasks from "@/components/mudelsPages/CheckModel/ListTasks.vue";
import editWindows from "@/components/mudelsPages/CheckModel/editWindows.vue";

export default {
	name: 'CheckList',
	data() {
			return {
					Waiting: [],
					Task: {
							name: '',
							type: ''
					},
					editingTask: null,
					editedTask: {
							id: null,
							name: '',
							type: ''
					}
			};
	},
	components: {
			ListTasks,
			editWindows
	},
	methods: {
			createTask() {
					if (!this.Task.name || !this.Task.type) {
							alert('Заполните поля!');
							return;
					}
					const newTask = { id: Date.now(), name: this.Task.name, type: this.Task.type, time: 'Сегодня' };
					this.Waiting.push(newTask);
					this.saveTasksToLocalStorage();
					this.Task.name = '';
					this.Task.type = '';
			},
			deleteTask(task) {
					if (confirm('Вы уверены, что хотите удалить задачу?')) {
							this.Waiting = this.Waiting.filter(t => t.id !== task.id);
							this.saveTasksToLocalStorage();
					}
			},
			saveEdit(updatedTask) {
					const index = this.Waiting.findIndex(task => task.id === updatedTask.id);
					if (index !== -1) {
							this.Waiting.splice(index, 1, updatedTask);
							this.saveTasksToLocalStorage();
							this.cancelEdit();
					}
			},
			startEdit(task) {
					this.editingTask = task;
					this.editedTask = { ...task };
			},
			cancelEdit() {
					this.editingTask = null;
					this.editedTask = { id: null, name: '', type: '', time: '' };
			},
			saveTasksToLocalStorage() {
					localStorage.setItem('Waiting', JSON.stringify(this.Waiting));
			}
	},
	mounted() {
			const savedTasks = JSON.parse(localStorage.getItem('Waiting'));
			this.Waiting = savedTasks || [];
	}
}
</script>

<style scoped>
.PostData {
	padding: 10px;
	display: flex;
	justify-content: space-evenly;
}

.PostData input {
	padding: 1vh;
	width: 30%;
	border: none;
	border-bottom: 3px solid black;
	text-align: center;
}

@media (max-width: 600px) {
	.PostData{
		flex-direction: column;
		align-items: center;
		height: 20vh;
	}
}
</style>