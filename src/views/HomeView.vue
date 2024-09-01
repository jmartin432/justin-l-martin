<script setup>
    import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <div class="view-container">
        <section class="welcome-section">
            <h3>Hi</h3>
            <p>
                Thank you for dropping by. If you would like to get in touch please use the contact fomr below.
            </p>
            <ContactForm />
        </section>
    </div>
</template>

<style>

    .welcome-section {
        /* display: none; */
    }

    h3 {
        font-family: Poppins;
        font-size: 2rem;
        color: #EB938A;
    }

    @media (max-width: 600px) {
        h3 {
        font-size: 1.5rem;
        }
    }

p, a {
    font-family: Alegreya;
    font-size: 1.25rem;
}

@media (max-width: 600px) {
    p, a {
      font-size: 1rem;
    }
}

p {
    color: #DDD;
    padding: 0 1rem;
}

a {
    color: #EAA48A;
    text-decoration: none;
}
</style>