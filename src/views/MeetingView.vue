<template>
    <div class="view-container">
        <div>
            <h3>Schedule a Meeting</h3>
            <p>If you would like to schedule a meeting with us, feel free to do so.</p>
            <p>We can talk about textiles, sewing, design, salsa dancing, rollerskaing or anything else you are into.</p>
        </div>
        <iframe
            id="meeting-scheduler"
            src="https://app.simplymeet.me/justinlmartin/meeting?is_widget=1&view=compact&specific-meeting-type=1" 
            frameborder="0" 
            scrolling="yes"
        ></iframe>
    </div>
</template>
  
<style>

#meeting-scheduler {
    margin-top: 3rem;
    box-sizing: border-box;
    /* padding: 0 2rem; */
    width: 100%; 
    height: 650px; 
}

@media (max-width: 600px) {
    #meeting-scheduler {
        margin-top: 1rem;
        height: 1000px;
    }
}
</style>