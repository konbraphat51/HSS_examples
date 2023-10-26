<template>
    <TopBar />
    <Description />
    <ExampleList />
</template>

<script>
    export default Vue.defineComponent({
        name: 'App',
        components: {
            "TopBar": Vue.defineAsyncComponent(() => loadModule("src/components/TopBar/TopBar.vue", options)),
            "Description": Vue.defineAsyncComponent(() => loadModule("src/components/Description/Description.vue", options)),
            "ExampleList": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/ExampleList.vue", options)),
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>