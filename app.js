(function() {
    const CONFIG = {
        resultImages: {
            '时差型': 'result_1.png',
            '积食型': 'result_2.png',
            '水肿型': 'result_3.png',
            '摆烂型': 'result_4.png',
            '易燃型': 'result_5.png',
            '精致型': 'result_6.png',
            '朋克型': 'result_7.png',
            '修仙型': 'result_8.png',
            '开摆型': 'result_9.png',
            '强迫型': 'result_10.png',
            '隐藏人格': 'result_hidden.png'
        },
        productImages: {
            '酸枣仁睡前膏': 'product_suanzao.png',
            '小调皮山楂膏': 'product_shanzha.png',
            '陈皮茯苓膏': 'product_fuling.png',
            '黄精元芪膏': 'product_huangqi.png',
            '小心甘养生茶花茶': 'product_xiaoyao.png',
            '玉容玫白膏': 'product_yurong.png',
            '纤荷茶': 'product_bazhen.png',
            '益椹黄精膏': 'product_shiqquan.png',
            '清润养生茶': 'product_lingzhi.png',
            '本草茶': 'product_tiao.png',
            '方回春堂陈皮玩偶我想开了': 'product_xiaokai.png'
        },
        posterQRImage: 'qr_code.png',
        posterAvatarImage: 'avatar.png',
        tmallUrl: 'https://fhct.tmall.com',
        douyinUrl: 'https://v.douyin.com/shop/FHCT'
    };

    const QUESTIONS = [
        { id: 1, text: '你的典型入睡时间是？', options: [{ letter: 'A', text: '23:00前', score: 1 }, { letter: 'B', text: '23:00-1:00', score: 2 }, { letter: 'C', text: '1:00-3:00', score: 3 }, { letter: 'D', text: '随缘，经常通宵', score: 4 }] },
        { id: 2, text: '工作日下午3点，你最常出现的状态是？', options: [{ letter: 'A', text: '困到灵魂出窍', score: 3 }, { letter: 'B', text: '肚子胀，感觉食物顶到喉咙', score: 2 }, { letter: 'C', text: '脸和脚肿得像注水', score: 4 }, { letter: 'D', text: '易燃易爆炸，想怼人', score: 1 }] },
        { id: 3, text: '周末的典型饮食模式？', options: [{ letter: 'A', text: '外卖重油重盐', score: 2 }, { letter: 'B', text: '啤酒烧烤小火锅', score: 3 }, { letter: 'C', text: '轻断食/一天一顿', score: 4 }, { letter: 'D', text: '自己做饭，但经常吃剩菜', score: 1 }] },
        { id: 4, text: '你对"养生"的真实态度？', options: [{ letter: 'A', text: '认真研究，保温杯里泡枸杞', score: 2 }, { letter: 'B', text: '一边作死一边自救，熬夜敷面膜', score: 4 }, { letter: 'C', text: '懒得动，能躺着绝不坐着', score: 1 }, { letter: 'D', text: '精神养生，相信意念可以战胜一切', score: 3 }] },
        { id: 5, text: '最近一个月，你最容易出现的情绪？', options: [{ letter: 'A', text: '莫名想哭/低落', score: 1 }, { letter: 'B', text: '烦躁，一点就着', score: 3 }, { letter: 'C', text: '麻木，对什么都无感', score: 2 }, { letter: 'D', text: '焦虑，总担心健康出问题', score: 4 }] },
        { id: 6, text: '照镜子时，你最先注意到的身体信号？', options: [{ letter: 'A', text: '黑眼圈/眼袋', score: 2 }, { letter: 'B', text: '下巴痘/色斑', score: 1 }, { letter: 'C', text: '头发变少/发际线后移', score: 3 }, { letter: 'D', text: '舌苔厚/有齿痕', score: 4 }] }
    ];

    const RESULT_TYPES = [
        { minScore: 6, maxScore: 8, label: '时差型·国际闲人', subtitle: '作息紊乱，白天崩溃', desc: '你的生物钟横跨五个时区，白天靠咖啡续命，晚上靠手机续魂。', radar: [2, 3, 2, 3, 2], product: { name: '酸枣仁睡前膏', desc: '安神助眠，睡前服用一勺，一觉睡到自然醒', url: 'https://v.douyin.com/DMz6pYV0Khg/' } },
        { minScore: 9, maxScore: 10, label: '积食型·外卖品鉴官', subtitle: '胃胀不消化', desc: '外卖评分4.9，肠胃评分负分。每一口都是对消化系统的极限挑战。', radar: [3, 1, 3, 4, 2], product: { name: '小调皮山楂膏', desc: '消食化积，饭后来一勺，肠胃轻松无负担', url: 'https://v.douyin.com/sOAZfHSNPVE/' } },
        { minScore: 11, maxScore: 12, label: '水肿型·人间注水肉', subtitle: '湿气重，浮肿乏力', desc: '起床像泡发的银耳，按一下小腿回弹要三秒——湿气，退！退！退！', radar: [3, 3, 2, 3, 1], product: { name: '陈皮茯苓膏', desc: '健脾祛湿，每天两杯，告别水肿一身轻', url: 'https://v.douyin.com/tjeEtIYNTag/' } },
        { minScore: 13, maxScore: 14, label: '摆烂型·行走的灭火器', subtitle: '气虚，精力不足', desc: '说话像0.5倍速，能坐着不站着，能躺着不坐着——你是节能环保代言人。', radar: [3, 3, 1, 3, 3], product: { name: '黄精元芪膏', desc: '补气养血，每天一勺，元气满满一整天', url: 'https://v.douyin.com/P_KLcvF3ebY/' } },
        { minScore: 15, maxScore: 16, label: '易燃型·行走的小爆竹', subtitle: '肝火旺，情绪失控', desc: '三句话点燃，两句话后悔，内心小剧场演完八十集，只剩疲惫。', radar: [3, 4, 3, 1, 3], product: { name: '小心甘养生茶花茶', desc: '疏肝解郁，服用后心平气和，看什么都顺眼', url: 'https://v.douyin.com/miCQ0_4itsY/' } },
        { minScore: 17, maxScore: 18, label: '精致型·脆皮塑料花', subtitle: '外强中干，气血虚', desc: '妆容精致，体检单惊心。换季必感冒，姨妈常迟到。', radar: [2, 3, 2, 2, 3], product: { name: '玉容玫白膏', desc: '补气养血，调经美容，内外兼修做精致女孩', url: 'https://v.douyin.com/qCX8lW-9WC8/' } },
        { minScore: 19, maxScore: 20, label: '朋克型·养生刺客', subtitle: '无效养生，自我欺骗', desc: '啤酒泡枸杞，熬夜敷面膜，你的养生主打一个"来都来了"。', radar: [2, 2, 3, 2, 2], product: { name: '纤荷茶', desc: '综合调理，阴阳双补，全面拯救你的亚健康', url: 'https://v.douyin.com/U9areEs3vMc/' } },
        { minScore: 21, maxScore: 22, label: '修仙型·行走的秃头预警', subtitle: '过度节食/精神内耗', desc: '灵修课上了三节，头发掉了三把。精神升天，肉身坠地。', radar: [1, 2, 1, 1, 3], product: { name: '益椹黄精膏', desc: '安神养心，补肾益精，身心同调找回状态', url: 'https://v.douyin.com/_ngbL84K-v8/' } },
        { minScore: 23, maxScore: 23, label: '开摆型·人间懒羊羊', subtitle: '懒动，代谢低下', desc: '能语音绝不打字，能外卖绝不出门。你的养生哲学：少消耗就是赢。', radar: [3, 3, 2, 3, 3], product: { name: '清润养生茶', desc: '开袋即食，无需煎煮，随时随地养生偷懒两不误', url: 'https://v.douyin.com/UKm5KbLJ6BA/' } },
        { minScore: 24, maxScore: 24, label: '强迫型·健康卷王', subtitle: '养生焦虑，过度干预', desc: '每天打卡八杯水、十种保健品，越养越累，越累越养。', radar: [2, 3, 2, 1, 3], product: { name: '本草茶', desc: '放松神经，疏解压力，停止焦虑享受生活', url: 'https://v.douyin.com/Wfr5h-6Szis/' } }
    ];

    const HIDDEN_RESULT = {
        label: '隐藏人格·我想开了',
        subtitle: '恭喜你发现了彩蛋',
        desc: '经历了所有的养生苦难，你终于看透了一切。不再焦虑，不再内耗——反正活着就是赢。恭喜你获得"摆烂王者"称号。',
        radar: [5, 5, 5, 5, 5],
        product: { name: '方回春堂陈皮玩偶——我想开了', desc: '陈皮香囊，随身携带，随时随地放松心情', url: 'https://v.douyin.com/feuySWyYJU4/' },
        isHidden: true
    };

    const HIDDEN_CHANCE = 0.9;

    const RADAR_LABELS = ['睡眠', '消化', '精力', '情绪', '湿气'];
    const STORAGE_KEY = 'fhcti_answers';

    let state = { currentQuestion: 0, answers: {}, totalScore: 0, result: null };
    let pages = {};

    function init() {
        pages = {
            home: document.getElementById('page-home'),
            question: document.getElementById('page-question'),
            loading: document.getElementById('page-loading'),
            result: document.getElementById('page-result'),
            poster: document.getElementById('page-poster')
        };
        loadState();
        bindEvents();
        initResultList();
        initShopLinks();
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;');
    }

    function initResultList() {
        const resultList = document.getElementById('result-list');
        if (!resultList) {
            console.log('result-list element not found');
            return;
        }

        const hiddenPersonalityHtml = `
            <div class="result-list-item hidden-personality-item">
                <div class="result-list-personality">
                    <div class="personality-img hidden-personality-img">
                        <div class="mystery-icon">?</div>
                        <div class="mystery-glow"></div>
                    </div>
                    <div class="personality-content">
                        <div class="personality-label hidden-label">???</div>
                        <div class="personality-name hidden-name">隐藏人格</div>
                        <p class="personality-desc hidden-desc">世间真有此人格？或许只有有缘人才能解锁...</p>
                    </div>
                </div>
            </div>
        `;

        const items = RESULT_TYPES.map(result => {
            const shortLabel = result.label.split('·')[0];
            const buyUrl = result.product.url;
            const personalityImg = getResultImage(result.label);
            const productImg = CONFIG.productImages[result.product.name] ? `images/${CONFIG.productImages[result.product.name]}` : '';

            const personalityImgHtml = personalityImg
                ? `<img src="${escapeHtml(personalityImg)}" alt="${escapeHtml(shortLabel)}" onload="this.classList.add('loaded')" onerror="this.src='images/default_personality.png'">`
                : `<div class="personality-img-default">${escapeHtml(shortLabel)}</div>`;

            const productImgHtml = productImg
                ? `<img src="${escapeHtml(productImg)}" alt="${escapeHtml(result.product.name)}" onload="this.classList.add('loaded')" onerror="this.src='images/default_product.png'">`
                : `<div class="product-img-default">🍯</div>`;

            return `
                <div class="result-list-item">
                    <div class="result-list-personality">
                        <div class="personality-img">${personalityImgHtml}</div>
                        <div class="personality-content">
                            <div class="personality-label">${escapeHtml(shortLabel)}</div>
                            <div class="personality-name">${escapeHtml(result.label)}</div>
                            <p class="personality-desc">${escapeHtml(result.desc)}</p>
                        </div>
                    </div>
                    <div class="result-list-product-card">
                        <div class="result-list-product-img">${productImgHtml}</div>
                        <div class="result-list-product-info">
                            <div class="result-list-product-row">
                                <span class="result-list-product-label">推荐</span>
                                <span class="result-list-product-name">${escapeHtml(result.product.name)}</span>
                            </div>
                            <p class="result-list-product-desc">${escapeHtml(result.product.desc)}</p>
                        </div>
                        <a href="${escapeHtml(buyUrl)}" class="result-list-buy" target="_blank" rel="noopener noreferrer">购买</a>
                    </div>
                </div>
            `;
        }).join('');

        resultList.innerHTML = hiddenPersonalityHtml + items;
    }

    function initShopLinks() {
        const tmallLink = document.getElementById('tmall-link');
        const douyinLink = document.getElementById('douyin-link');
        if (tmallLink && CONFIG.tmallUrl) tmallLink.href = CONFIG.tmallUrl;
        if (douyinLink && CONFIG.douyinUrl) douyinLink.href = CONFIG.douyinUrl;
    }

    function getResultImage(label) {
        const shortLabel = label.split('·')[0];
        const imageName = CONFIG.resultImages[shortLabel];
        return imageName ? `images/${imageName}` : null;
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.answers && Object.keys(parsed.answers).length > 0) {
                    state.answers = parsed.answers;
                    state.currentQuestion = Math.min(parsed.currentQuestion || 0, 5);
                    state.totalScore = parsed.totalScore || 0;
                    
                    if (parsed.result && parsed.result.isHidden) {
                        state.result = HIDDEN_RESULT;
                    }
                }
            }
        } catch (e) { console.warn('Failed to load state:', e); }
    }

    function saveState() {
        try {
            const stateData = {
                answers: state.answers,
                currentQuestion: state.currentQuestion,
                totalScore: state.totalScore,
                result: state.result ? {
                    label: state.result.label,
                    isHidden: state.result.isHidden || false
                } : null
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(stateData));
        } catch (e) { console.warn('Failed to save state:', e); }
    }

    function clearState() {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) { console.warn('Failed to clear state:', e); }
    }

    function checkReturningUser() {
        if (Object.keys(state.answers).length > 0) {
            const allAnswered = QUESTIONS.every(q => state.answers[q.id] !== undefined);
            if (allAnswered) {
                state.totalScore = Object.values(state.answers).reduce((sum, score) => sum + score, 0);
                if (!state.result || !state.result.isHidden) {
                    state.result = RESULT_TYPES.find(r => state.totalScore >= r.minScore && state.totalScore <= r.maxScore);
                }
                renderResult();
                showPage('result');
                return;
            }
            showPage('question');
            renderQuestion();
        }
    }

    function bindEvents() {
        const on = (id, event, fn) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener(event, fn);
        };
        on('start-btn', 'click', startTest);
        on('prev-btn', 'click', prevQuestion);
        on('next-btn', 'click', nextQuestion);
        on('generate-poster', 'click', generatePoster);
        on('retest', 'click', retest);
        on('book-consult', 'click', bookConsult);
        on('save-poster', 'click', savePoster);
        on('back-result', 'click', backToResult);
    }

    function backToResult() {
        const posterContent = document.getElementById('poster-content');
        const captured = document.getElementById('captured-poster');
        if (captured) captured.remove();
        if (posterContent) posterContent.style.display = '';
        if (state.result) renderResult();
        showPage('result');
    }

    function showPage(pageName) {
        Object.values(pages).forEach(page => {
            if (page) page.classList.remove('active');
        });
        const target = pages[pageName];
        if (target) {
            target.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    function startTest() {
        trackEvent('start_test');
        
        // 水墨转场动画
        const inkTransition = document.getElementById('ink-transition');
        if (inkTransition) {
            inkTransition.classList.remove('leaving');
            inkTransition.classList.add('active');
            
            setTimeout(() => {
                inkTransition.classList.add('leaving');
                
                setTimeout(() => {
                    inkTransition.classList.remove('active', 'leaving');
                    
                    if (Object.keys(state.answers).length === 0) {
                        state.answers = {};
                        state.currentQuestion = 0;
                    }
                    showPage('question');
                    renderQuestion();
                }, 800);
            }, 1500);
        } else {
            if (Object.keys(state.answers).length === 0) {
                state.answers = {};
                state.currentQuestion = 0;
            }
            showPage('question');
            renderQuestion();
        }
    }

    function renderQuestion() {
        const question = QUESTIONS[state.currentQuestion];
        const progress = ((state.currentQuestion) / QUESTIONS.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-q').textContent = state.currentQuestion + 1;
        document.getElementById('question-text').textContent = question.text;

        const optionsList = document.getElementById('options-list');
        optionsList.innerHTML = question.options.map(opt => `
            <div class="option-item ${state.answers[question.id] === opt.score ? 'selected' : ''}" data-score="${opt.score}">
                <div class="option-letter">${opt.letter}</div>
                <div class="option-text">${opt.text}</div>
            </div>
        `).join('');

        optionsList.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', () => selectOption(item, question.id));
        });

        document.getElementById('prev-btn').style.opacity = state.currentQuestion === 0 ? '0' : '1';
        document.getElementById('next-btn').textContent = state.currentQuestion === QUESTIONS.length - 1 ? '提交测试' : '下一题';
    }

    function selectOption(item, questionId) {
        const score = parseInt(item.dataset.score);
        state.answers[questionId] = score;
        saveState();
        document.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('selected'));
        item.classList.add('selected');
        trackEvent('question_answer', { question_id: questionId, answer_option: item.querySelector('.option-letter').textContent, score: score });
    }

    function prevQuestion() {
        if (state.currentQuestion > 0) {
            state.currentQuestion--;
            saveState();
            renderQuestion();
        }
    }

    function nextQuestion() {
        const question = QUESTIONS[state.currentQuestion];
        if (state.answers[question.id] === undefined) {
            alert('请先选择一个答案');
            return;
        }
        if (state.currentQuestion < QUESTIONS.length - 1) {
            state.currentQuestion++;
            saveState();
            renderQuestion();
        } else {
            submitTest();
        }
    }

    function submitTest() {
        trackEvent('test_complete', { total_score: state.totalScore, result_type: state.result?.label });
        showPage('loading');
        state.totalScore = Object.values(state.answers).reduce((sum, score) => sum + score, 0);
        
        if (Math.random() < HIDDEN_CHANCE) {
            state.result = HIDDEN_RESULT;
        } else {
            state.result = RESULT_TYPES.find(r => state.totalScore >= r.minScore && state.totalScore <= r.maxScore);
        }
        
        setTimeout(() => {
            renderResult();
            showPage('result');
        }, 2000);
    }

    function renderResult() {
        const result = state.result;
        const resultImage = getResultImage(result.label);
        const badgeEl = document.getElementById('result-badge');

        if (result.isHidden) {
            if (resultImage) {
                badgeEl.innerHTML = `<img src="${resultImage}" alt="${result.label}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.innerHTML='<div class=\\'hidden-badge\\'>?</div>'">`;
            } else {
                badgeEl.innerHTML = `<div class="hidden-badge">?</div>`;
            }
        } else if (resultImage) {
            badgeEl.innerHTML = `<img src="${resultImage}" alt="${result.label}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.textContent='${result.label.split('·')[0]}'">`;
        } else {
            badgeEl.textContent = result.label.split('·')[0];
        }

        document.getElementById('result-label').textContent = result.label;
        document.getElementById('result-subtitle').textContent = result.isHidden ? '🎉 恭喜你发现了彩蛋！' : result.subtitle;
        document.getElementById('result-desc').textContent = result.desc;

        const productCard = document.getElementById('product-card');
        const productImg = getProductImage(result.product.name);
        
        productCard.innerHTML = `
            <div class="product-card-content ${result.isHidden ? 'hidden-result' : ''}">
                ${productImg ? `<img src="${productImg}" alt="${result.product.name}" class="product-card-img" onload="this.classList.add('loaded')" onerror="this.src='images/default_product.png'">` : '<div class="product-card-img-placeholder">🍯</div>'}
                <div class="product-card-info">
                    <div class="product-card-name">${result.product.name}</div>
                    <div class="product-card-desc">${result.product.desc}</div>
                </div>
            </div>
        `;

        const productLinkBtn = document.getElementById('product-link-btn');
        const buyUrl = result.product.url;
        if (productLinkBtn) {
            if (buyUrl) {
                productLinkBtn.href = buyUrl;
                productLinkBtn.style.display = '';
            } else {
                productLinkBtn.removeAttribute('href');
                productLinkBtn.style.display = 'none';
            }
        }

        const resultTmallLink = document.getElementById('result-tmall-link');
        const resultDouyinLink = document.getElementById('result-douyin-link');
        if (resultTmallLink && CONFIG.tmallUrl) resultTmallLink.href = CONFIG.tmallUrl;
        if (resultDouyinLink && CONFIG.douyinUrl) resultDouyinLink.href = CONFIG.douyinUrl;

        drawWellnessBars(result.radar);
    }

    function getProductImage(productName) {
        const imageName = CONFIG.productImages[productName];
        return imageName ? `images/${imageName}` : null;
    }

    function drawWellnessBars(data) {
        const container = document.getElementById('wellness-bars');
        const labels = ['睡眠', '消化', '精力', '情绪', '湿气'];
        const colors = ['#9B2335', '#C9A227', '#6B4423', '#A68520', '#3D5A52'];

        let html = '<div class="bars-container">';
        for (let i = 0; i < 5; i++) {
            const value = data[i];
            const percentage = (value / 5) * 100;
            html += `
                <div class="bar-item">
                    <div class="bar-label">${labels[i]}</div>
                    <div class="bar-track"><div class="bar-fill" style="width:${percentage}%;background:${colors[i]};"></div></div>
                    <div class="bar-value">${value}<span>/5</span></div>
                </div>
            `;
        }
        html += '</div>';
        container.innerHTML = html;
    }

    function generatePoster() {
        trackEvent('generate_poster', { result_type: state.result.label });
        const resultImage = getResultImage(state.result.label);
        const posterContent = document.getElementById('poster-content');

        let badgeHtml;
        if (resultImage) {
            badgeHtml = `<img src="${resultImage}" alt="${state.result.label}" class="poster-badge-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`;
        }
        if (!badgeHtml || !resultImage) {
            badgeHtml = `<div class="poster-badge-text" style="display:none;">${state.result.label.split('·')[0]}</div>`;
        }
        const fallbackBadge = `<div class="poster-badge-text" style="display:${resultImage ? 'none' : 'flex'};">${state.result.label.split('·')[0]}</div>`;

        let qrHtml = CONFIG.posterQRImage
            ? `<img src="images/${CONFIG.posterQRImage}" alt="qr" style="width:80px;height:80px;object-fit:cover;border-radius:8px;" onerror="this.parentElement.innerHTML='<div style=font-size:10px;color:#8B7355;text-align:center;>扫码<br>测试</div>'">`
            : `<div class="poster-qr"><div>扫码<br>测试</div></div>`;

        posterContent.innerHTML = `
            <div class="poster-header">
                <div class="poster-logo">方回春堂</div>
                <div class="poster-title">养生人格指数测试</div>
            </div>
            <div class="poster-badge-container">${badgeHtml}${fallbackBadge}</div>
            <div class="poster-label">${state.result.label}</div>
            <div class="poster-sublabel">${state.result.subtitle}</div>
            <div class="poster-desc">${state.result.desc}</div>
            <div class="poster-footer">
                <div class="poster-brand">
                    <div>方回春堂</div>
                    <div style="font-size:10px;color:#8B7355;">中华老字号</div>
                </div>
                <div class="poster-qr">${qrHtml}</div>
            </div>
        `;

        showPage('poster');

        setTimeout(() => {
            html2canvas(posterContent.parentElement, { scale: 2, useCORS: true, backgroundColor: '#F5EFE3' }).then(canvas => {
                canvas.id = 'captured-poster';
                const existing = document.getElementById('captured-poster');
                if (existing) existing.remove();
                document.getElementById('poster-content').style.display = 'none';
                posterContent.parentElement.appendChild(canvas);
                canvas.style.width = '100%';
                canvas.style.display = 'block';
            }).catch(err => {
                console.error('Poster generation failed:', err);
                alert('海报生成失败，请尝试长按截图保存');
            });
        }, 100);
    }

    function savePoster() {
        const canvas = document.getElementById('captured-poster');
        if (!canvas) {
            alert('请先等待海报生成');
            return;
        }
        const link = document.createElement('a');
        link.download = '我的回春人格.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        trackEvent('share_success', { platform: 'local' });
    }

    function retest() {
        trackEvent('retest');
        clearState();
        state.answers = {};
        state.currentQuestion = 0;
        state.totalScore = 0;
        state.result = null;
        const captured = document.getElementById('captured-poster');
        if (captured) captured.remove();
        const posterContent = document.getElementById('poster-content');
        if (posterContent) posterContent.style.display = '';
        showPage('home');
    }

    function bookConsult() {
        trackEvent('book_consult');
        window.location.href = 'https://fhct-wechat.fhctdyf.com/mini/?page=activeDetail&id=69c1e2cfd08e5b2a089b0d42&channel=1';
    }

    function trackEvent(eventName, params = {}) {
        const data = { event: eventName, timestamp: Date.now(), source: getQueryParam('source') || 'direct', channel: getQueryParam('channel') || 'none', ...params };
        try {
            const events = JSON.parse(sessionStorage.getItem('fhcti_events') || '[]');
            events.push(data);
            sessionStorage.setItem('fhcti_events', JSON.stringify(events));
        } catch (e) { console.warn('Failed to track event:', e); }
        if (typeof fbq !== 'undefined') fbq('trackCustom', eventName, params);
    }

    function getQueryParam(key) {
        return new URLSearchParams(window.location.search).get(key);
    }

    function initWeChatShare() {
        if (typeof wx !== 'undefined') {
            const shareData = {
                title: '测测你的养生人格',
                desc: `我是「${state.result?.label || '回春人格'}」！你的身体在过什么朝代？`,
                link: window.location.origin + window.location.pathname,
                imgUrl: window.location.origin + '/share-icon.png'
            };
            wx.ready(() => { wx.updateAppMessageShareData(shareData); wx.updateTimelineShareData(shareData); });
            wx.error(() => {});
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();