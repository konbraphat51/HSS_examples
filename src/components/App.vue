<template>
    <TopBar />
    <Description />
    <ExampleList />
    <ExampleViewer />
</template>

<script>
import ExampleViewer from './ExampleViewer/ExampleViewer.vue';

    export default Vue.defineComponent({
        name: 'App',
        components: {
    "TopBar": Vue.defineAsyncComponent(() => loadModule("src/components/TopBar/TopBar.vue", options)),
    "Description": Vue.defineAsyncComponent(() => loadModule("src/components/Description/Description.vue", options)),
    "ExampleList": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleList/ExampleList.vue", options)),
    "ExampleViewer": Vue.defineAsyncComponent(() => loadModule("src/components/ExampleViewer/ExampleViewer.vue", options)),
    ExampleViewer
},
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>