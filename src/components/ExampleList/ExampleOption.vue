<template>
    <li>
        <a @click="select">
            <div class="ExampleTitle">
                {{ title }}
            </div>
            <div class="ExampleDescription">
                {{ description }}
            </div>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'ExampleOption',
        props: {
            title: String,
            description: String,
            optionId: String,
        },
        methods: {
            select () {
                this.$emit("onClick", this.optionId)
            }
        },
    }
</script>