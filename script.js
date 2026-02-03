const pages = {
    home: `
        <h1>Мифы Древней Греции</h1>
        <p style="text-align:center; font-size: 1.2rem;">Добро пожаловать в колыбель европейской цивилизации. Здесь оживают легенды о богах, героях и чудовищах.</p>
        <div style="margin-top: 30px;">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1200" style="width:100%; border-radius:15px; height: 400px; object-fit: cover;">
        </div>
    `,
    gods: `
        <h1>Боги Олимпа</h1>
        <div class="grid-container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=500" alt="Зевс">
                <h3>Зевс</h3>
                <p>Царь богов, повелитель грома и молний. Главный на Олимпе.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1603831871617-380d005f0a71?q=80&w=500" alt="Посейдон">
                <h3>Посейдон</h3>
                <p>Владыка морей и океанов. Его трезубец вызывает землетрясения.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1634842520334-9271816e1075?q=80&w=500" alt="Афина">
                <h3>Афина</h3>
                <p>Богиня мудрости и справедливой войны. Покровительница знаний.</p>
            </div>
        </div>
    `,
    heroes: `
        <h1>Великие Герои</h1>
        <div class="grid-container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1614701830114-f066b69076f7?q=80&w=500" alt="Геракл">
                <h3>Геракл</h3>
                <p>Сын Зевса, совершивший 12 невероятных подвигов.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=500" alt="Персей">
                <h3>Персей</h3>
                <p>Победитель Медузы Горгоны и спаситель Андромеды.</p>
            </div>
        </div>
    `,
    monsters: `
        <h1>Мифические Существа</h1>
        <div class="grid-container">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1643491370258-052a65851940?q=80&w=500" alt="Минотавр">
                <h3>Минотавр</h3>
                <p>Чудовище с телом человека и головой быка, обитавшее в Лабиринте.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=500" alt="Цербер">
                <h3>Цербер</h3>
                <p>Трехглавый пес, охраняющий вход в царство Аида.</p>
            </div>
        </div>
    `
};

function renderPage(pageKey) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = pages[pageKey];
    
    // Обновляем активный класс в меню
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-target') === pageKey) {
            item.classList.add('active');
        }
    });
}

// Инициализация первой страницы
document.addEventListener('DOMContentLoaded', () => {
    renderPage('home');

    // Навешиваем клики на меню
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            renderPage(target);
        });
    });
});
