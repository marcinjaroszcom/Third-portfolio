const typing = document.querySelector('.typing');
let currentIndex = 0;

    const startTyping = function(text) {
        const interval = setInterval(function() {
            if (text.length > currentIndex) {
                typing.textContent += text[currentIndex];
                currentIndex++;
            } else {
                clearInterval(interval)
            }
        }, 50 + Math.random() * 75)
    }

startTyping("Aspirujący Frontend Developer");