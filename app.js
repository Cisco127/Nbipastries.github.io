document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                const itemId = menuItem.dataset.id;
                const itemName = menuItem.querySelector('h3').textContent;

                document.getElementById('item-id').value = itemId;
                document.getElementById('item-name').value = itemName;

                document.getElementById('order-form').classList.remove('hidden');
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.error('Menu item element not found.');
            }
        });
    });
});
