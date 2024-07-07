document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', event => {
            const type = event.target.dataset.type;
            const targetElement = event.target.closest('p').querySelector('.editable-content');
            const currentValue = targetElement.textContent.trim();
            const newValue = prompt(Edit ,{type}, currentValue);
            if (newValue) {
                targetElement.textContent = newValue;
            }
        });
    });

    document.querySelector('.save-btn').addEventListener('click', () => {
        alert('Changes saved.');
    });

    document.querySelector('.cancel-btn').addEventListener('click', () => {
        alert('Changes cancelled.');
    });
});