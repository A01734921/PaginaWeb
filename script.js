document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));
            // Show the corresponding content
            const contentId = tab.getAttribute('href').substring(1);
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Handle the click on the "Problemática" button within the introduction
    document.querySelector('.next-button').addEventListener('click', function (event) {
        event.preventDefault();

        // Hide all content
        contents.forEach(content => content.classList.remove('active'));
        // Show the "Problemática" content
        document.getElementById('problematica').classList.add('active');
    });

    // Handle the click on the back buttons
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));
            // Show the "Análisis y Limpieza" content
            document.getElementById('analisis-limpieza').classList.add('active');
        });
    });

    // Handle the click on the new buttons within "Análisis y Limpieza de Datos"
    const dataButtons = document.querySelectorAll('.buttons .button');
    dataButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));
            // Show the corresponding content
            const contentId = button.getAttribute('href').substring(1);
            document.getElementById(contentId).classList.add('active');
        });
    });
});
