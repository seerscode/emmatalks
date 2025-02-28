function speak(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    // Optional: Set properties for the utterance
    utterance.lang = 'en-US'; // Set the language
    utterance.pitch = 2; // Set the pitch (0 to 2)
    utterance.rate = 0.5; // Set the rate to 0.7 for slower speech
    utterance.volume = 1; // Set the volume (0 to 1)

    window.speechSynthesis.speak(utterance);
}