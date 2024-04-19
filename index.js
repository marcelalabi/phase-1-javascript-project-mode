document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all buttons with IDs starting with "showButton"
    document.querySelectorAll('button[id^="showButton"]').forEach(button => {
        button.addEventListener('click', () => {
            const playerId = button.id.replace('showButton', ''); // Extract player ID from button ID

            // Fetch player data from JSON file
            fetchPlayerData(playerId)
                .then(player => {
                    if (player) {
                        displayPlayerInfo(player);
                    } else {
                        throw new Error('Player data not found');
                    }
                })
                .catch(error => {
                    console.error('Error fetching or displaying player data:', error);
                });
        });
    });

    // Function to fetch player data from the server
    function fetchPlayerData(playerId) {
        return fetch(`http://localhost:3000/players/${playerId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    // Function to display player information
    function displayPlayerInfo(player) {
        const nameElement = document.querySelector('.name');
        const positionElement = document.querySelector('.position');
        const nationalityElement = document.querySelector('.nationality');
        const abilityElement = document.querySelector('.ability');
        const goalsScoredElement = document.querySelector('.goalsScored');

        nameElement.textContent = player.name;
        positionElement.textContent = player.position;
        nationalityElement.textContent = player.nationality;
        abilityElement.textContent = player.ability;
        goalsScoredElement.textContent = player.goalsScored;

        // Show the player info section
        document.getElementById('player-info').style.display = 'block';
    }

    // Get a reference to the player info box
    const item = document.querySelector('image');
    let startX = 0;
    let isDragging = false;

    item.addEventListener('mousedown', startDrag);
    item.addEventListener('touchstart', startDrag);

    function startDrag(event) {
        isDragging = true;
        startX = event.clientX || event.touches[0].clientX;
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
    }

    function drag(event) {
        if (!isDragging) return;

        const currentX = event.clientX || event.touches[0].clientX;
        const diffX = currentX - startX;
        // Update the item's position
        item.style.transform = `translateX(${diffX}px)`;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
    }
});















// document.addEventListener('DOMContentLoaded', function () {
//     // Add event listeners to all buttons with IDs starting with "showButton"
//     document.querySelectorAll('button[id^="showButton"]').forEach(button => {
//         button.addEventListener('click', () => {
//             const playerId = button.id.replace('showButton', ''); // Extract player ID from button ID

//             // Fetch player data from JSON file
//             fetchPlayerData(playerId)
//                 .then(player => {
//                     if (player) {
//                         displayPlayerInfo(player);
//                     } else {
//                         throw new Error('Player data not found');
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error fetching or displaying player data:', error);
//                 });
//         });
//     });

//     // Get a reference to the player info box
//     const item = document.getElementById('slidingItem');
//     let startX = 0;
//     let isDragging = false;

//     item.addEventListener('mousedown', startDrag);
//     item.addEventListener('touchstart', startDrag);

//     function startDrag(event) {
//         isDragging = true;
//         startX = event.clientX || event.touches[0].clientX; // Fixed syntax error
//         document.addEventListener('mousemove', drag);
//         document.addEventListener('touchmove', drag);
//         document.addEventListener('mouseup', stopDrag);
//         document.addEventListener('touchend', stopDrag);
//     }

//     function drag(event) {
//         if (!isDragging) return;

//         const currentX = event.clientX || event.touches[0].clientX; // Fixed syntax error
//         const diffX = currentX - startX;
//         // Update the item's position
//         item.style.transform = `translateX(${diffX}px)`; // Fixed string interpolation
//     }

//     function stopDrag() {
//         isDragging = false;
//         document.removeEventListener('mousemove', drag);
//         document.removeEventListener('touchmove', drag);
//     }
// });

// // Function to fetch player data from the server
// function fetchPlayerData(playerId) {
//     return fetch(`http://localhost:3000/players/${playerId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         });
// }

// // Function to display player information
// function displayPlayerInfo(player) {
//     const nameElement = document.querySelector('.name');
//     const positionElement = document.querySelector('.position');
//     const nationalityElement = document.querySelector('.nationality');
//     const abilityElement = document.querySelector('.ability');
//     const goalsScoredElement = document.querySelector('.goalsScored');

//     nameElement.textContent = player.name;
//     positionElement.textContent = player.position;
//     nationalityElement.textContent = player.nationality;
//     abilityElement.textContent = player.ability;
//     goalsScoredElement.textContent = player.goalsScored;

//     // Show the player info section
//     document.getElementById('player-info').style.display = 'block';
// }


