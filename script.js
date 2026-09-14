// 1. 手沖步驟資料陣列
const coffeeSteps = [
    {
        number: "Step 01",
        title: "溫杯與濕紙",
        time: "預備階段",
        desc: "將濾紙放入濾杯，用熱水淋濕濾紙。這能去除濾紙味，同時預熱濾杯與下壺。溫杯後將水倒掉。"
    },
    {
        number: "Step 02",
        title: "倒入咖啡粉",
        time: "預備階段",
        desc: "將研磨好的咖啡粉（約中等粗細，像粗鹽般大小）倒入濾杯，輕敲濾杯邊緣將粉層撫平。"
    },
    {
        number: "Step 03",
        title: "悶蒸 (Blooming)",
        time: "00:00 - 00:30 (約30秒)",
        desc: "以繞圈方式注入約 2 倍粉量的熱水（約 88°C-92°C），讓咖啡粉充分浸濕並排出二氧化碳，靜置等待 30 秒。"
    },
    {
        number: "Step 04",
        title: "第一次注水",
        time: "00:30 - 01:15",
        desc: "由中心向外輕柔繞圈注水，直到總水量達到設定目標的 60% 左右。注意水流要穩定，不要直接沖到濾紙壁。"
    },
    {
        number: "Step 05",
        title: "第二次注水與萃取完成",
        time: "01:15 - 02:30",
        desc: "水位略降後進行第二次注水，補足剩下的水量。待水完全滴濾完畢後即可移開濾杯，搖勻後享用！"
    }
];

// 2. 將步驟動態渲染到網頁上
function renderSteps() {
    const container = document.getElementById('steps-container');
    container.innerHTML = ''; // 清空容器

    coffeeSteps.forEach(step => {
        const stepHTML = `
            <div class="step-card">
                <span class="step-number">${step.number}</span>
                <h3 class="step-title">${step.title}</h3>
                <span class="step-time">⏱️ ${step.time}</span>
                <p>${step.desc}</p>
            </div>
        `;
        container.innerHTML += stepHTML;
    });
}

// 3. 粉水比動態計算邏輯
function setupCalculator() {
    const coffeeInput = document.getElementById('coffee-weight');
    const ratioInput = document.getElementById('ratio');
    const resultSpan = document.getElementById('water-result');

    function calculate() {
        const coffee = parseFloat(coffeeInput.value) || 0;
        const ratio = parseFloat(ratioInput.value) || 0;
        const totalWater = coffee * ratio;
        resultSpan.textContent = totalWater;
    }

    // 監聽輸入框的改變
    coffeeInput.addEventListener('input', calculate);
    ratioInput.addEventListener('input', calculate);
}

// 4. 當網頁載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    renderSteps();
    setupCalculator();
});
