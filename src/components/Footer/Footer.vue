<template>
    <div id="footer">
        <p><a href="https://github.com/konbraphat51/HotSoupScript">
                {{ t("footer.github") }}
            </a></p>
        <p><a href="https://github.com/konbraphat51/HSS_Template">
                {{ t("footer.hss_template") }}
            </a></p>
        <p><a href="https://github.com/konbraphat51">
                {{ t("footer.c") }}
            </a></p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
        //set up i18n
        const { t } = VueI18n.useI18n()
        return { t }
    }
}
</script>

<i18n>
{
    "en": {
        "footer": {
            "c": "© 2023 konbraphat51",
            "github": "GitHub: HotSoupScript",
            "hss_template": "GitHub: Template for who wants to start using HotSoupScript"
        }
    },
    "ja": {
        "footer": {
            "c": "© 2023 konbraphat51",
            "github": "Github: HotSoupScript",
            "hss_template": "Github: HotSoupScriptを使い始めたい人のためのテンプレート"
        }
    }
}
</i18n>

<style>
#footer {
    background-color: #faffdb;

    padding: 10px;
}
</style>