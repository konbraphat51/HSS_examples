<template>
    <li class="CategoryOption">
        {{ title }}
    </li>
</template>

<script>
    export default Vue.defineComponent({
        name: 'CategoryOption',
        props: {
            title: String
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>