document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length === 0 || tabPanels.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPanelId = button.dataset.target;
            const targetPanel = document.querySelector(targetPanelId);

            // Desativar todas as abas e painéis
            tabButtons.forEach(btn => {
                btn.classList.remove('active-tab', 'border-blue-500', 'text-blue-600', 'font-semibold');
                btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300', 'font-medium');
                btn.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => {
                panel.classList.add('hidden');
            });

            // Ativar a aba e painel clicados
            button.classList.add('active-tab', 'border-blue-500', 'text-blue-600', 'font-semibold');
            button.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300', 'font-medium');
            button.setAttribute('aria-selected', 'true');

            if (targetPanel) {
                targetPanel.classList.remove('hidden');
            } else {
                console.error(`Target panel "${targetPanelId}" not found.`);
            }
        });
    });
});