const telegramLink = "https://t.me/your_telegram_channel";

// YouTube channel link
const youtubeLink = "https://www.youtube.com/your_youtube_channel";

// Twitter account link
const twitterLink = "https://twitter.com/your_twitter_account";

// Get button elements
const telegramBtn = document.getElementById("telegramBtn");
const youtubeBtn = document.getElementById("youtubeBtn");
const twitterBtn = document.getElementById("twitterBtn");

// Add click event listeners to buttons
telegramBtn.addEventListener("click", () => {
    window.open(telegramLink, "_blank");
});

youtubeBtn.addEventListener("click", () => {
    window.open(youtubeLink, "_blank");
});

twitterBtn.addEventListener("click", () => {
    window.open(twitterLink, "_blank");
});