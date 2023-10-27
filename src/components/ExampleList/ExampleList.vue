<template>
    <div id="ExampleList">
        <CategorySelector />
        <ul class="options">
            <ExampleOption v-for="option in options" v-bind:title="option.title" v-bind:description="option.description"/>
        </ul>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'ExampleList',
        components:{
            "CategorySelector": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/CategorySelector/CategorySelector.vue", options)),
            "ExampleOption": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/ExampleOption.vue", options)),
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        },
        computed: {
            options() {
                return [
                    {
                        title: "Move by Key",
                        description: "Let your character move by pressing keys on the keyboard.\n You can learn usage of key inputing system"
                    }
                ]
            }
        }
    })
</script>

<i18n>
    {

    }
</i18n>