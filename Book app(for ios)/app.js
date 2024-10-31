// Sample book content and insights
const bookContent = "This is an example paragraph from a book.";
const insightContent = "This is an insight related to the book content.";

document.getElementById("bookContent").textContent = bookContent;
document.getElementById("insightContent").textContent = insightContent;

// Text-to-speech functionality
document.getElementById("playButton").addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(bookContent);
    window.speechSynthesis.speak(utterance);
});
