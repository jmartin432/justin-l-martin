<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="title-container">
            <!-- <div class="title-image-container">
              <img alt="Justin L. Martin Logo" class="logo title-image" src="@/assets/images/logo.svg" width="125" height="125" />
            </div> -->
            <div class="title-text-container">
                <h1>Justin L. Martin</h1>
                <h2>Thank You for Dropping By</h2>
            </div>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
    </header>

    <RouterView class="view-container"/>

    <footer>
        <div id="footer-social-icons">
            <div class="social-icon-container">
                <a href="https://github.com/jmartin432" target="_blamk">
                    <img class="social-icon" src="@/assets/images/github_mark.svg" alt="GitHub Logo" />
                </a>
            </div>
            <!-- <div class="social-icon-container">
                <a href="https://www.linkedin.com/in/justinleemartin" target="_blamk">
                    <img class="social-icon" src="@/assets/images/linkedin_mark.svg" alt="Linkedin Logo" />
                </a>
            </div>
            <div  class="social-icon-container">
                <a href="https://www.instagram.com/backandforthdesigns/" target="_blank">
                    <img class="social-icon" src="@/assets/images/instagram_mark.svg" href="" alt="Instagram Logo"/>
                </a>
            </div> -->
        </div>
        <div id="footer-message">
            <!-- <img src = "assets/images/bnf.svg" alt="Back and Forth Logo"/> -->
            <span id="footer-emoji-left">🦄</span>
            <span id="footer-text"> Have a Nice Day! </span>
            <span id="footer-emoji-right">🦄</span>
            <!-- <img src = "assets/images/bnf.svg" alt="Back and Forth Logo"/> -->
        </div>
    </footer>
</template>

<style scoped>

header {
  max-height: 100vh;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #EBC58A
}

.title-container {
    width: 100%;
    /* display: flex; */
    margin: 0 auto;
    justify-content: center;
    margin-bottom: 1rem;
}

.title-text-container {
  align-self: center;
  text-align: center;
  padding: 0 1rem;
}

h1 {
    display: none;
    font-size: 4rem;
    color: #EB938A;
    font-family: Oswald;
    font-weight: 700;
    margin: 0;
}

h2 {
    font-size: 3rem;
    color: #EB8AA6;
    font-family: Poppins;
    font-weight: 400;
    margin: 0;
}

nav {
    display: none;
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin: auto;
    padding: .5rem 0;
    border-top: 1px solid #EBC58A
}

nav a {
    color: #EB938A;
    text-decoration: none;
    display: inline-block;
    padding: .25rem 1rem;
    /* border-left: 1px solid #ffffff; */
    font-family: "Open Sans";
    font-weight: 500;
    transition: .3s ease;
}

footer {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    width: 100%;
    padding: 2rem 0;
    color: #EB8AA6;
    transition-duration: .75s;
    border-top: 1px solid #EBC58A;
    margin-top: 2rem;
}

#footer-message{
    text-align: center;
}

#footer-social-icons {
    display: flex;
    justify-content: center;
}

.social-icon-container{
    display: none;
    padding: 1rem 2rem;
}

.social-icon {
    width: 2rem;
}

@media screen and (max-width: 600px) {
    .title-container {
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    nav a {
      font-size: .75rem;
    }

    .title-image {
      width: 4rem;
      height: max-content;
      padding: .5rem 0;
    }

    .social-icon {
        width: 1.5rem;
    }
}

/* footer > div > img {
    height: 20px;
    margin: 0px 15px;
} */

/* .footer-contact {
    display: flex;
    flex-direction: row;
} */

/* .footer-contact-item {
    flex: 50%
} */
  
/* Responsive layout - makes a one column layout instead of a two-column layout */

#footer-emoji-right {
    display: inline-block;
    transform: scale(-1, 1);
    transition-duration: .75s;
}

#footer-emoji-left {
    display: inline-block;
    transform: scale(1, 1);
    transition-duration: .75s;
}

footer:hover #footer-emoji-right {
    transform: scale(1, 1);
}

footer:hover #footer-emoji-left {
    transform: scale(-1, 1);
}
</style>
