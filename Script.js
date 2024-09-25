document.getElementById('filterBtn').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const filterType = document.querySelector('input[name="filterType"]:checked').value;
    const value = parseInt(document.getElementById('value').value);

    // Loop through table rows and apply the filter
    const table = document.getElementById('studentTable');
    for (let i = 1; i < table.rows.length; i++) { // start from 1 to skip header
        const row = table.rows[i];
        let score;

        if (subject === 'English') {
            score = parseInt(row.cells[2].textContent); // English score is in the 3rd column
        } else if (subject === 'Maths') {
            score = parseInt(row.cells[3].textContent); // Maths score is in the 4th column
        } else if (subject === 'Science') {
            score = parseInt(row.cells[4].textContent); // Science score is in the 5th column
        } else if (subject === 'Social Science') {
            score = parseInt(row.cells[5].textContent); // Social Science score is in the 6th column
        }

        // Determine visibility of the row based on filter type
        if (filterType === 'above' && score > value) {
            row.style.display = ''; // Show row
        } else if (filterType === 'below' && score < value) {
            row.style.display = ''; // Show row
        } else {
            row.style.display = 'none'; // Hide row
        }
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    const table = document.getElementById('studentTable');
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display = ''; // Show all rows
    }
    document.getElementById('value').value = ''; // Clear input
});
