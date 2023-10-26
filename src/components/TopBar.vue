<template>
    <div class="NavigationBarEntity">
       <h1>HotSoupScript Examples</h1>
    
        <LanguageSelection />
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
        components: {
            "LanguageSelection": Vue.defineAsyncComponent(
                () => loadModule("src/components/LanguageSelection.vue", options)
            ),
        }
    }
</script>

<style>

</style>