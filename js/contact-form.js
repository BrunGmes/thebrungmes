document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const submitButton = document.getElementById('submit-button');

    if (!form || !feedbackDiv || !submitButton) return;

    // Assume que `texts` de lang.js está disponível globalmente
    const getTranslationContact = (key) => {
        const lang = localStorage.getItem('lang') || 'pt';
        const globalTexts = typeof texts !== 'undefined' ? texts : {}; // Fallback
        return globalTexts[lang]?.[key] || key;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        // Pegar o texto traduzido ATUAL do botão
        const originalButtonText = getTranslationContact('btnSend');
        const sendingText = getTranslationContact('sending');

        submitButton.disabled = true;
        // Atualizar texto do botão para 'Sending...' traduzido
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${sendingText}`;
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'mb-4 text-center h-6'; // Reset classes and ensure height

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                feedbackDiv.textContent = getTranslationContact('formSuccess');
                feedbackDiv.classList.add('text-green-600');
            } else {
                const data = await response.json();
                if (data.errors && data.errors.length > 0) {
                     // Pega apenas a primeira mensagem de erro para simplificar
                     feedbackDiv.textContent = data.errors[0].message || getTranslationContact('formError');
                } else {
                     feedbackDiv.textContent = getTranslationContact('formError');
                }
                 feedbackDiv.classList.add('text-red-600');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            feedbackDiv.textContent = getTranslationContact('formError');
            feedbackDiv.classList.add('text-red-600');
        } finally {
             // Restaura o botão após um delay
             // Usar o texto original traduzido
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                 // Optionally clear feedback after a while
                 setTimeout(() => {
                     feedbackDiv.textContent = '';
                     feedbackDiv.className = 'mb-4 text-center h-6';
                 }, 6000); // Clear after 6 seconds
            }, 1500);
        }
    });
});