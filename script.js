// Set the date for testing (2 minutes from now)
let testDate = new Date(new Date().getTime() + 2 * 60 * 1000).getTime(); // 2 minutes

// Use the test date instead of the actual birthday date
let birthdayDate = testDate;


/* // Set the date for the birthday
let birthdayDate = new Date("September 10, 2024 00:00:00").getTime(); */

// Update the countdown every second
let countdownFunction = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the birthday
    let distance = birthdayDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in respective elements
    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
    document.getElementById("seconds").innerHTML = seconds + " Seconds";

    // If the countdown is finished, display the message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
        
        // Personalized message
        document.getElementById("message").innerHTML =
            "🎉 Happy Birthday, Shaik Fasiha Tabassum! 🎉<br>" +
        "You’re not just my best friend, you’re the family I got to choose. 💖<br>" +
        "With you, even the simplest moments turn into unforgettable memories. 🌟<br>" +
        "No matter how far life takes us, you’ll always be my closest friend. 🌸<br>" +
        "I may not be there with you, but you will always be in my prayers. I miss you so much.<br>" +
        "I miss all the moments we spent together, especially our time during intermediate 6 years ago—" +
        "the way we used to have fun, study, play games, even our little fights. I remember it all so clearly. 💫<br>" +
        "You always scolded me when I didn’t eat my lunch and, like a second mother, you used to feed me with your hands. 🍽️💕<br>" +
        "I’m truly blessed to have you in my life, and I am so grateful for everything. You’re like my second mother. 🥰<br>" +
        "Thank you for coming into my life, Motu. 💖<br>" +
        "May Allah always keep our bond strong, and may He shower His countless blessings upon you. 🌸🤲<br>"  +
        "LOTS OF LOVE FOR YOU MERI PYAARI BEHNA💞<br>" 
                                                        
                                                            "from your Sona💫" ;
    }
}, 1000);
