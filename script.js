// Sample matches with predefined coefficients
const matches = [
    { name: 'Match 1', coefficients: { kills: 1.5, deaths: 0.5, win: 2.0, loss: 0.5 } },
    { name: 'Match 2', coefficients: { kills: 2.0, deaths: 0.7, win: 1.8, loss: 0.8 } },
    { name: 'Match 3', coefficients: { kills: 1.8, deaths: 0.6, win: 2.2, loss: 0.4 } }
];

// Function to create HTML for player inputs
function createPlayerInputs(matchName) {
    let playerInputs = '';
    for (let i = 1; i <= 5; i++) {
        playerInputs += `
            <div class="player">
                <h4>Player ${i}</h4>
                <label for="${matchName}-player${i}-kills">Kills:</label>
                <input type="number" id="${matchName}-player${i}-kills" min="0" step="1">
                <label for="${matchName}-player${i}-deaths">Deaths:</label>
                <input type="number" id="${matchName}-player${i}-deaths" min="0" step="1">
            </div>
        `;
    }
    return playerInputs;
}

// Function to create HTML for a match
function createMatchElement(match) {
    const matchElement = document.createElement('div');
    matchElement.classList.add('match');
    matchElement.innerHTML = `
        <h3>${match.name}</h3>
        <div class="coefficients">
            <label for="${match.name}-kills">Coefficient for Kills:</label>
            <input type="number" id="${match.name}-kills" value="${match.coefficients.kills}" min="0" step="0.1">
            <label for="${match.name}-deaths">Coefficient for Deaths:</label>
            <input type="number" id="${match.name}-deaths" value="${match.coefficients.deaths}" min="0" step="0.1">
            <label for="${match.name}-win">Coefficient for Match Won:</label>
            <input type="number" id="${match.name}-win" value="${match.coefficients.win}" min="0" step="0.1">
            <label for="${match.name}-loss">Coefficient for Match Lost:</label>
            <input type="number" id="${match.name}-loss" value="${match.coefficients.loss}" min="0" step="0.1">
        </div>
        <div class="player-bets">
            ${createPlayerInputs(match.name)}
        </div>
        <button class="place-bet">Place Bet</button>
    `;
    return matchElement;
}

// Betting Page
const matchesContainer = document.getElementById('matches-container');

// Display matches
matches.forEach(match => {
    const matchElement = createMatchElement(match);
    matchesContainer.appendChild(matchElement);
});

// Add event listener to "Place Bet" buttons
const placeBetButtons = document.querySelectorAll('.place-bet');

placeBetButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.textContent = 'Bet Placed';
        button.disabled = true;
    });
});
