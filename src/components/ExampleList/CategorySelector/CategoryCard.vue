<template>
    <li class="CategoryOption">
        <div class="CategoryTitle">
            {{ title }}
        </div>
        <div class="CategoryDescription">
            {{ description  }}
        </div>
    </li>
</template>

<script>
    export default Vue.defineComponent({
        name: 'CategoryOption',
        props: {
            category: {
                title: String,
                description: String
            }
        },
        setup() {
            //set up i18n
            const { t } = VueI18n.useI18n()
            return { t }
        }
    })
</script>