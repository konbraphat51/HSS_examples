<template>
    <div id="description">
        <h2>{{ $t("what_is") }}</h2>
        <p> {{ $t("what_is_description") }} </p>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'Description',
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>

<i18n>
    {
        "en": {
            "what_is": "What is HotSoupScript?",
            "what_is_description": "This library enables programming beginers to make an artistic (especially game) programming easily."
        },
        "ja": {
            "what_is": "HotSoupScriptとは？",
            "what_is_description": "このライブラリは、プログラミング初心者が簡単にグラフィカルな（特にゲーム）プログラミングを行えるようにするものです。"
        }
    }
</i18n>

<style>
    #description {
        margin: 10px 20px 10px 20px;
        background-color: #faffdb;
        border-radius: 10px;
        padding: 10px;
    }
</style>