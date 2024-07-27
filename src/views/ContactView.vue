<script>
import ContactForm from '@/components/Forms/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="my-7">
            <p class="text-xl md:text-3xl font-bold text-center">Get in touch!</p>
            <p class="text-xs md:text-lg font-semibold text-center text-blue-400">We'd love to hear from you</p>
        </div>

        <ContactForm />
    </div>
</template>

<style scoped>
</style>