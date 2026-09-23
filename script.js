// Function to add a recommendation and display the custom popup modal
function addRecommendation() {
    const recommendationInput = document.getElementById('recommendation-text');
    const recommendationText = recommendationInput.value.trim();

    // Validation
    if (recommendationText === "") {
        alert("Please write a recommendation before submitting.");
        return;
    }

    // Create and append recommendation card
    const newRecommendation = document.createElement('blockquote');
    newRecommendation.classList.add('recommendation');
    newRecommendation.innerText = `"${recommendationText}"`;

    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.appendChild(newRecommendation);

    // Clear input field
    recommendationInput.value = "";

    // Show the custom popup modal
    showPopup();
}

// Function to display the popup modal
function showPopup() {
    const modal = document.getElementById('popup-modal');
    modal.style.display = 'flex';
}

// Function to close the popup modal
function closePopup() {
    const modal = document.getElementById('popup-modal');
    modal.style.display = 'none';
}