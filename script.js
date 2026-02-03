const wikiData = {
    intro: {
        title: "Зарождение мира: Хаос",
        img: "https://images.unsplash.com/photo-1464802686167-b939a67e06a1?auto=format&fit=crop&w=800",
        content: `
            <p>В начале времен существовал лишь Хаос — безграничная и зияющая бездна. Из него возникла Гея (Земля), Тартар (бездна под землей) и Эрос (Любовь). </p>
            <p>Древнегреческая мифология — это не просто сказки, это попытка древних людей объяснить устройство вселенной, смену времен года и человеческую природу. Каждое природное явление имело своего покровителя. Гром был голосом Зевса, а морской шторм — гневом Посейдона.</p>
            <h2>Основные эпохи мифологии:</h2>
            <ul>
                <li><strong>Эпоха богов:</strong> сотворение мира, восстание титанов, установление власти Зевса.</li>
                <li><strong>Эпоха богов и людей:</strong> времена, когда боги активно вмешивались в дела смертных.</li>
                <li><strong>Эпоха героев:</strong> великие походы, Троянская война и подвиги полубогов.</li>
            </ul>
        `
    },
    olympians: {
        title: "12 Олимпийских Богов",
        img: "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&w=800",
        content: `
            <div class="grid-gallery">
                <div class="mini-card">
                    <img src="https://images.unsplash.com/photo-1634842520334-9271816e1075?q=80&w=300">
                    <h3>Зевс</h3>
                    <p>Верховный бог. Владеет молниями, управляет небом. Символ — орел.</p>
                </div>
                <div class="mini-card">
                    <img src="https://images.unsplash.com/photo-1603831871617-380d005f0a71?q=80&w=300">
                    <h3>Посейдон</h3>
                    <p>Бог морей. Ударом трезубца вызывает штормы. Покровитель лошадей.</p>
                </div>
                <div class="mini-card">
                    <img src="https://images.unsplash.com/photo-1572947225134-946723225f16?q=80&w=300">
                    <h3>Аид</h3>
                    <p>Владыка подземного царства мертвых. Самый богатый бог (владеет недрами).</p>
                </div>
                <div class="mini-card">
                    <img src="https://images.unsplash.com/photo-1620138401340-496666196a09?q=80&w=300">
                    <h3>Гера</h3>
                    <p>Царица богов, супруга Зевса. Покровительница брака и семьи.</p>
                </div>
            </div>
            <p style="margin-top:20px">Эти боги жили на вершине горы Олимп, питались нектаром и амброзией, которые даровали им бессмертие.</p>
        `
    },
    labors: {
        title: "Подвиги Геракла",
        img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800",
        content: `
            <h2>Сын Зевса и Алкмены</h2>
            <p>Геракл — величайший герой Греции. По приказу царя Эврисфея он совершил 12 невероятных дел:</p>
            <ol>
                <li><strong>Немейский лев:</strong> Геракл задушил зверя с непробиваемой шкурой.</li>
                <li><strong>Лернейская гидра:</strong> Уничтожение многоголового чудовища.</li>
                <li><strong>Керинейская лань:</strong> Поимка священного животного Артемиды.</li>
                <li><strong>Стимфалийские птицы:</strong> Изгнание птиц с медными перьями.</li>
                <li><strong>Авгиевы конюшни:</strong> Очистка гигантских конюшен за один день.</li>
            </ol>
            <p>Его жизнь — это путь искупления и борьбы с судьбой, навязанной ревнивой богиней Герой.</p>
        `
    },
    monsters: {
        title: "Бестиарий Древней Греции",
        img: "https://images.unsplash.com/photo-1566455113009-0c30a4736f8e?auto=format&fit=crop&w=800",
        content: `
            <div class="grid-gallery">
                <div class="mini-card">
                    <h3>Медуза Горгона</h3>
                    <p>Вместо волос — змеи, взгляд обращает в камень. Убита Персеем.</p>
                </div>
                <div class="mini-card">
                    <h3>Минотавр</h3>
                    <p>Человек-бык. Жил в критском Лабиринте, питался данью Афин.</p>
                </div>
                <div class="mini-card">
                    <h3>Химера</h3>
                    <p>Существо с головой льва, туловищем козы и хвостом дракона.</p>
                </div>
            </div>
        `
    }
};

function updateContent(pageId) {
    const app = document.getElementById('app');
    const data = wikiData[pageId] || wikiData.intro;

    app.style.opacity = 0;
    
    setTimeout(() => {
        app.innerHTML = `
            <div class="article-header">
                <h1>${data.title}</h1>
            </div>
            <div class="info-block">
                <img src="${data.img}" alt="${data.title}">
                <div class="text-content">
                    ${data.content}
                </div>
            </div>
        `;
        app.style.opacity = 1;
    }, 200);
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateContent(btn.dataset.page);
    });
});

// Плавное появление при первой загрузке
document.addEventListener('DOMContentLoaded', () => updateContent('intro'));
