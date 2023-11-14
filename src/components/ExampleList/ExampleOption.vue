<template>
    <li class="OptionCard">
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
        select() {
            this.$emit("onClick", this.optionId)
        }
    },
}
</script>

<style>
.OptionCard {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 80%;
    height: 80%;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: #e8ffe8;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.OptionCard:hover {
    background-color: #549966;
}

.ExampleTitle {
    font-size: 1.5em;
    font-weight: bold;
}

.ExampleDescription {
    font-size: 1em;
}
</style>