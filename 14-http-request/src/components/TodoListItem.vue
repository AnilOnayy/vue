<template>
    <li class="d-flex align-items-center justify-content-between">
        <span> {{ todo.title }}  </span>
        <button class="sm red"  @click="onTaskDelete(todo)" > Delete  </button>
    </li>
</template>


<script>
export default {
    props : ["todo"],
    inject : ["onTaskDelete"]
}
</script>