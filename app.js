const button = document.getElementById('randomButton');
const randomText = document.getElementById('randomText');
const message = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const kissGif = document.getElementById('kissGif');
let clickCount = 0;
let yesButtonScale = 1;
let isYesPressed = false;
let yesTextIndex = 0;
let gifIndex = 1;

const texts = [
    'Will you be mine? ❤️',
    'Do you know how much I love you? 💖',
    'Can I keep you forever? 🌟',
    'Will you go on an adventure with me? 🌍',
    'Can you make me smile today? 😊',
    'Will you be my sunshine? ☀️',
    'Can I call you my everything? 💕',
    'Do you feel the same way I do? 🥰',
    'Will you hold my hand? 🤝',
    'Can I have your heart? 💓',
    'Do you know how special you are? ✨',
    'Will you be my partner in crime? 🕵️‍♀️',
    'Can I be your hero? 🦸‍♂️',
    'Will you be my forever? 💍',
    'Can we make more memories together? 📸',
    'Will you be my lover forever? 💞',
    'Can I cherish you forever? 🥂',
    'Will you make every day brighter? 🌈',
    'Do you know you complete me? 🧩',
    'Will you be the love of my life? 💘'
];

const yesTexts = [
    'I love you to the moon and back 🌙',
    'You make my heart skip a beat ❤️',
    'You are my everything 🌟',
    'Every day with you is a blessing 🙏',
    'I cherish you so much 💖',
    'You make life beautiful 🌸',
    'You are the best person 💞',
    'You are my forever and always 💍',
    'You light up my world like nobody else ✨',
    'You have the key to my heart 🔑',
    'I’m so lucky to have you 🍀',
    'You are my one and only 💘',
    'Your smile makes my day 😊',
    'Together, we are unstoppable 💪',
    'You complete me 🧩',
    'You are my dream come true 💤',
    'You are the love of my life 💕',
    'I adore you more than words can say 🥰',
    'I love you more than anything else 💝',
    'You know me so well 😏',
    'I’m so excited for our future 🏡',
    'I want to build a home for us 🏡',
    'iloveeyouuuuuu numnummmmm hihihihihi',
    'numm!!! gigill hihiihi',
    'iloveyou more',
    'you always make me so happy 🥺',
    'you are my inspiration',
    'I will be with you through ups and downs 😚',
    'you give me strength💪',
    'you’re so worth it 🤍'
];

const annoyedMessages = [
    'Seriously? You don’t want to say yes? 🙄',
    'Are you just trying to annoy me? 😠',
    'Why do you keep pressing No? 😔',
    'Come on, just say yes already! 😤',
    'You’re enjoying this, aren’t you? 😑',
    'Okay, now you’re just being mean. 😢',
    'nummmmmmmm say yes pleaseeeee 🥺🥺🥺'
];

function getRandomPosition() {
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;

    const x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - buttonHeight - window.innerHeight * 0.1)) + window.innerHeight * 0.1;
    return { x, y };
}

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function getRandomAnnoyedMessage() {
    const randomIndex = Math.floor(Math.random() * annoyedMessages.length);
    return annoyedMessages[randomIndex];
}

function getNextGif() {
    gifIndex = (gifIndex % 7) + 1; // Cycle from 1 to 7
    return `img/kiss${gifIndex}.gif`;
}

function moveButtonAndChangeText() {
    const { x, y } = getRandomPosition();
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    randomText.textContent = getRandomText();

    clickCount++;
    if (clickCount % 4 === 0) {
        message.textContent = getRandomAnnoyedMessage();
    } else {
        message.textContent = ''; // Clear the message if not the 4th click
    }

    // Increase the size of the "Yes!!!!" button
    yesButtonScale += 0.1;
    yesButton.style.transform = `scale(${yesButtonScale})`;
}

function cycleYesTexts() {
    if (!isYesPressed) {
        isYesPressed = true;
        button.style.display = 'none'; // Hide the "No!" button
        yesButton.textContent = 'iloveyou!!!!';
        message.style.display = 'none'; // Hide the message element
        yesButtonScale = 1; // Reset the scale of the "Yes!!!!" button
        yesButton.style.transform = `scale(${yesButtonScale})`;
    }

    randomText.textContent = yesTexts[yesTextIndex];
    yesTextIndex = (yesTextIndex + 1) % yesTexts.length;

    // Show next gif
    kissGif.src = getNextGif();
    kissGif.style.display = 'block';
}

button.addEventListener('click', moveButtonAndChangeText);
yesButton.addEventListener('click', cycleYesTexts);

// Set initial random text
randomText.textContent = getRandomText();
