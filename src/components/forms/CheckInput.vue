<template>
    <div class="form-check">
        <input class="form-check-input" :checked="checked" :required="required" type="checked">
        <label class="form-check-label" :for="name">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'CheckInput',
    props: [
        "label",
        "required",
        "name",
        "value",
        "checked"
    ]
}
</script>

<style scoped>

</style>