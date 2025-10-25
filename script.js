document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById('languageFilter');  // dropdown element
    const rows = document.querySelectorAll('#projectTable tbody tr'); // table rows to filter

    // Event listener: runs whenever the dropdown changes
    filter.addEventListener('change', () => {
        const selected = filter.value.toLowerCase(); // get selected value

        rows.forEach(row => {
            const langText = row.cells[1].textContent.toLowerCase(); // language column
            // Show row if it matches selection or if 'all' is selected
            row.style.display = (selected === 'all' || langText.includes(selected)) ? '' : 'none';
        });
    });
});
