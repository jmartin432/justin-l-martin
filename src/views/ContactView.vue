<script setup>
    import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <div class="view-container">
        <div class="contact-form-section">
            <h3>Send me a message.</h3>
            <p>
                Send me a message with the contact form below.
            </p>
            <ContactForm />
        </div>
        <div class="meeting-section">
            <h3>Put some time on my calendar.</h3>
            <p>
                If you would like to put some time on my calendar you can do so below. 
                We can talk about whatever you want... 
                sewing and design, textiles, salsa dancing, mental health, creative web development or anything else.
            </p>
            <iframe
            id="meeting-scheduler"
            src="https://app.simplymeet.me/justinlmartin/meeting?is_widget=1&view=compact&specific-meeting-type=1" 
            frameborder="0" 
            scrolling="yes"
        ></iframe>
        </div>
    </div>
</template>
  
<style>
</style>
  