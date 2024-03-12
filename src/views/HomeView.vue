<script setup>
    import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <div class="view-container">
        <section class="welcome-section">
        <h3>Welcome</h3>
        <p>
            I am a textile artist, sewist and community organizer based in Portland, Oregon. 
            I own and operate <a href="https://backandforthdesigns.com" target="_blank">Back and Forth: Designs and Dry Goods</a> and 
            am currently a part of the <a href="https://bridgeratstudios.com" target="_blank">Bridge Rat Studios</a> collective located under the Morrison Bridge. 
        </p>
        <p>
            I am also a freelance JavaScript and web application developer.
        </p>
        </section>
        <section class="contact-form-section">
            <h3>Contact</h3>
            <p>
                Send me a message with the contact form below.
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