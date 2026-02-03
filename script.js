document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    const mythText = document.getElementById('myth-text');
    const image = document.getElementById('myth-img');

    btn.addEventListener('click', () => {
        // Меняем текст на мораль
        mythText.innerHTML = "<strong>Мораль:</strong> Стремление к высшим целям прекрасно, но забывчивость и игнорирование чувства меры (гордыня — «хюбрис») могут привести к катастрофе. Соблюдайте баланс между земным и божественным.";
        
        // Меняем стиль кнопки
        btn.textContent = "Мудрость получена";
        btn.style.background = "#2ecc71"; // Зеленый цвет
        btn.disabled = true;

        // Небольшой эффект для картинки
        image.style.filter = "sepia(0.5) brightness(1.2)";
    });
});
