<template>
    <div>
        <form id="contact-form" method="post">
            <div class="input-label">
                <label for="name-input">Name<span>{{ nameWarning }}</span></label>
            </div>
            <input 
                required 
                type="text" 
                id="name-input" 
                placeholder="Enter name here…" 
                class="form-control" 
                v-model="name"
            /><br>
            <div class="input-label">
                <label for="email-input">Email<span>{{ emailWarning }}</span></label>
            </div>
            <input 
                required 
                type="email" 
                id="email-input" 
                placeholder="Enter email here…" 
                class="form-control" 
                v-model="email"
            /><br>
            <div class="input-label">
                <label for="message-input">Message<span>{{ messageWarning }}</span></label>
            </div>
            <textarea 
                required 
                id="message-input" 
                rows="3" 
                placeholder="Enter your message…" 
                class="form-control" 
                v-model="message"
            ></textarea><br>
            <!-- <p>{{ name }}, {{ email }}, {{ message }}, {{submitting }}</p> -->
            <!-- <div class="g-recaptcha" data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys" class="form-control" style="width:100%;"></div> -->
            <button type="button" id="contact-form-submit" @click=submitForm>Submit</button>
        </form>
        <Transition name="submit-message">
            <template v-if="showSubmitMessage">
                <div id="submit-message-container">
                    <div id="submit-message-text-container">
                        <p v-html="submitMessage" id="submit-message-text"></p>
                    </div>
                    <div id="submit-message-button-container" v-show="showSubmitMessage">
                        <button id="close-submit-message" @click=closeSubmitMessage v-show="showSubmitMessage">X</button>
                    </div>
                </div>
            </template>
        </Transition>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                url: 'https://oj6vub3ps7.execute-api.us-east-1.amazonaws.com/prod/contact-us',
                name: '',
                email: '',
                message: '',
                notificationEmail: 'info@justinlmartin.com',
                source: 'Justin L. Martin',
                nameWarning: ' * ',
                emailWarning: ' * ',
                messageWarning: ' * ',
                submitting: false,
                showSubmitMessage: false,
                submitMessage: ''
            };
        },
        methods: {

            resetForm: function() {
                this.name = this.email = this.message = "";
                this.submitting = false;
                this.showSubmitMessage = false;
                this.submitMessage = '';
            },

            submitForm: function(event) {
                event.preventDefault()
                if (this.submitting) {
                    console.log('Form is submitting, Please wait.');
                    return; 
                }
                this.nameWarning = !this.name ? " * This field is required." : " * ";
                this.emailWarning = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) ? " * " : " * Please enter a valid email."
                this.messageWarning = !this.message ? " * This field is required." : " * ";
                if (!this.name || !((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) || !this.message) return;
                this.submitting = true;
                fetch(
                    this.url, {
                        method: "POST",
                        mode: "cors",
                        credentials: "omit",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        redirect: "follow",
                        body: JSON.stringify({
                            "name": this.name,
                            "email": this.email,
                            "message": this.message,
                            "notificationEmail": this.notificationEmail,
                            "source": this.source
                        })
                    }
                )
                .then((response) => response.json())
                .then((data) => {
                    let responseBody = JSON.parse(data);
                    this.showSubmitMessage = true;
                    if (responseBody.statusCode === 200) {
                        console.log('SUCCESS');
                        this.submitMessage = 'Your message was successfully submitted. Thank you, we will be in touch.'
                        setTimeout(() => { this.resetForm(); }, 5000);
                    } else {
                        console.error(responseBody);
                        this.submitMessage = `There was a problem submitting your message. 
                            Please send us an email at <a href="mailto: info@backandforthdesigns.com" target="_blank">info@backandforthdesigns.com</a>`
                    }
                })
                .catch((error) => {
                    console.error(error);
                    this.showSubmitMessage = true;
                    this.submitMessage = `There was a problem submitting your message. 
                        Please send us an email at <a href="mailto: info@backandforthdesigns.com" target="_blank">info@backandforthdesigns.com</a>`
                });
            },

            closeSubmitMessage: function(event) {
                this.resetForm();
            }
        },
    };
</script>

<style>

label {
    color: #EAA48A;
    margin: 0 0 .5rem 0;
    display: block;
    font-size: 1.25rem;
}

input, select, textarea {
    padding: .25rem;
    font-size: 1rem;
    border: 2px solid #EAA48A;
    border-radius: 4px;
    font-family: Alegreya;
    font-size: 1rem;
    box-sizing: border-box;

}

input:focus, select:focus, textarea:focus {
    transition-duration: 0.4s;
    box-shadow:
        5px 5px 10px #EBB58Add,
        -5px -5px 10px #EBB58Add,
        -5px 5px 10px #EBB58Add,
        5px -5px 10px #EBB58Add;
}

.form-container {
    width: 80%;
    margin: auto;
    padding: 2.5rem;
}

@media (max-width: 600px) {  
    .form-container {
        width: 90%;
        padding: 1rem;
    }
}

.form-item {
    margin-top: 1.25rem;
}

.form-item input, .form-item select {
    width: 30%;
}

@media (max-width: 600px) {  
    .form-item input, .form-item select {
        width: 60%;
    }
}

.form-item textarea {
    width: 60%;
}

@media (max-width: 600px) {  
    .form-item textarea {
        width: 80%;
    }
}

.nobueno{
    height: 0;
    width: 0;
    margin: 0;
    overflow: hidden;
}

button {
    background-color: #333;
    border: 2px solid #EAA48A;
    border-radius: 4px;
    color: #EAA48A;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    transition-duration: 0.4s;
    font-family: 'Open sans';
    font-size: 1rem;
}

button:hover {
    box-shadow:
        5px 5px 10px #EBB58Add,
        -5px -5px 10px #EBB58Add,
        -5px 5px 10px #EBB58Add,
        5px -5px 10px #EBB58Add;
    cursor: pointer;
}

#submit-message-container {
    border: 2px solid #EAA48A;
    border-radius: 4px;
    height: auto;
    overflow: hidden;
    display: flex;
    margin: 1rem 0;
}

.submit-message-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.submit-message-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.submit-message-enter-from,
.submit-message-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

#submit-message-text-container {
    flex-grow: 8;
    align-self: center;
    padding: 0px 20px;
}

#submit-message-button-container {
    flex-grow: 2;
    align-self: center;
    justify-content: center;
    padding: 0px 20px;
}

#close-submit-message {
    padding: 5px 10px;
}

a {
    color: #75CBD1;
}

label span {
    color: #AC6868;
}

input, label {
    display: block;
}

input {
    width: 50%;
}

textarea {
    width: 80%
}

#contact-form-submit {
    margin-top: 1rem;
    padding: 10px 20px;
}

@media (max-width: 600px) {
    input, textarea {
        width: 100%;
    }
    #submit-message-text {
        font-size: .75rem;
    }
}

</style>