<template>
    <button id="ClearButton" @click="clear">
        {{ t("ClearButton.clear") }}
    </button>
</template>

<script>
export default {
    name: 'ClearButton',
    setup() {
        //set up i18n
        const { t } = VueI18n.useI18n()
        return { t }
    },
    methods: {
        clear() {
            //clear
            if (typeof (DrawRect) == "function") {
                SetColor("white")
                DrawRect(0, 0, GetCanvasSize()[0], GetCanvasSize()[1])
            }
        }
    },
}
</script>

<i18n>
    {
        "en": {
            "ClearButton":{
                "clear": "Clear"
            }
        },
        "ja": {
            "ClearButton":{
                "clear": "画面消去"
            }
        }
    }
</i18n>

<style>
#ClearButton {
    background-color: #faffdb;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #000000;
    width: 45%;
}

#ClearButton:hover {
    background-color: #e8ffe8;
}
</style>