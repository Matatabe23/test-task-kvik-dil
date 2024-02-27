<template>
  <div>
    <div class="task" v-for="(task, index) in waiting" :key="index">
      <div class="task-card">
        <h3>{{ task.name }}</h3>
        <p>{{ task.type }}</p>
        <deleteButton @click="deleteTask(task)">Удалить</deleteButton>
        <editButton @click="edit(task)">Редактировать</editButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    waiting: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteTask(task) {
      this.$emit('deleteTask', task);
    },
		edit(task){
      this.$emit('startEdit', task);
		}
  }
};
</script>

<style scoped>
.task {
  margin-bottom: 20px;
}

.task-card {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.task-card h3,
.task-card p {
  width: 40%;
  text-align: center;
}

.task-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.task-card p {
  margin-bottom: 5px;
}

@media (max-width: 600px) {
  .task-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .task-card h3,
  .task-card p {
    width: auto; 
  }

  .task-card button {
    margin-top: 10px; 
  }
}
</style>
