document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('dropdown');

            // Populate dropdown options
            data.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.id;
                opt.textContent = option.title;
                dropdown.appendChild(opt);
            });

            // Update content based on selected option
            window.updateContent = function () {
                const selectedId = dropdown.value;
                const selectedOption = data.options.find(option => option.id === selectedId);

                if (selectedOption) {
                    document.getElementById('content-image').src = selectedOption.src;
                    document.getElementById('content-title').textContent = selectedOption.title;
                    document.getElementById('content-paragraph1').textContent = selectedOption.paragraph1;
                    document.getElementById('content-paragraph2').textContent = selectedOption.paragraph2;
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
