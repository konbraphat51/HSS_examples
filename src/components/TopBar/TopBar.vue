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
                () => loadModule("src/components/TopBar/LanguageSelection.vue", options)
            ),
        }
    }
</script>

<style>
    .NavigationBarEntity {
        background-color: #98fb98;
        color: #000;
        padding: 0.5rem 1rem;
        position: sticky;
        top: 0;
        z-index: 99999;
    }
</style>