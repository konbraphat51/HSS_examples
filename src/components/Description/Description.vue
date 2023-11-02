<template>
    <div class="warning">
        <p>
            <img src="src\images\description\mark_exclamation.png" 
                width="15" 
                height="15">
            {{ $t("description.warning") }}
        </p>
    </div>

    <div id="description">
        <h2>{{ $t("description.what_is") }}</h2>
        <p> {{ $t("description.what_is_description") }} </p>
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
            "description": {
                "what_is": "What is HotSoupScript?",
                "what_is_description": "This library enables programming beginers to make an artistic (especially game) programming easily.",
                "warning": "If the \"Hello World\" script doesn't run (canvas shows nothing), refresh the page."
            }
        },
        "ja": {
            "description": {
                "what_is": "HotSoupScriptとは？",
                "what_is_description": "このライブラリは、プログラミング初心者が簡単にグラフィカルな（特にゲーム）プログラミングを行えるようにするものです。",
                "warning": "もし「Hello World」スクリプトが動かない（キャンバスに何も表示されない）場合は、ページをリロードしてください。"
            }
        }
    }
</i18n>

<style>
    #description {
        margin: 10px 20px 10px 20px;
        background-color: #faffdb;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #000000;
    }

    .warning {
        margin: 10px 20px 10px 20px;
        background-color: #ffdbdb;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #000000;
    }
</style>