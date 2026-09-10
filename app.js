// ==========================================
// ZERO TO HERO - YOUTUBE MONEY ACADEMY
// DASHBOARD V3
// ==========================================

let subscribers = Number(localStorage.getItem("subscribers")) || 0;
let watchHours = Number(localStorage.getItem("watchHours")) || 0;

let monthlyIncome =
    Number(localStorage.getItem("monthlyIncome")) || 0;

let lessonsCompleted =
    Number(localStorage.getItem("lessonsCompleted")) || 0;


// ==========================================
// DASHBOARD
// ==========================================

function updateDashboard() {

    const subscriberElement =
        document.getElementById("subscriberCount");

    const watchElement =
        document.getElementById("watchHours");

    if (subscriberElement) {
        subscriberElement.textContent =
            subscribers.toLocaleString();
    }

    if (watchElement) {
        watchElement.textContent =
            watchHours.toLocaleString();
    }

    const subscriberProgress =
        Math.min((subscribers / 1000) * 100, 100);

    const watchProgress =
        Math.min((watchHours / 4000) * 100, 100);

    const monetizationProgress =
        Math.round(
            (subscriberProgress + watchProgress) / 2
        );

    const bar =
        document.getElementById("progressBar");

    const text =
        document.getElementById("progressText");

    if (bar) {
        bar.style.width =
            monetizationProgress + "%";
    }

    if (text) {
        text.textContent =
            monetizationProgress + "%";
    }
}


// ==========================================
// UPDATE SUBSCRIBERS
// ==========================================

function updateSubscribers() {

    const value = prompt(
        "Enter your current subscribers:"
    );

    if (value === null) return;

    const number = Number(value);

    if (isNaN(number) || number < 0) {
        alert("Please enter a valid number.");
        return;
    }

    subscribers = number;

    localStorage.setItem(
        "subscribers",
        subscribers
    );

    updateDashboard();

    alert("✅ Subscribers updated!");
}


// ==========================================
// UPDATE WATCH HOURS
// ==========================================

function updateWatchHours() {

    const value = prompt(
        "Enter your current watch hours:"
    );

    if (value === null) return;

    const number = Number(value);

    if (isNaN(number) || number < 0) {
        alert("Please enter a valid number.");
        return;
    }

    watchHours = number;

    localStorage.setItem(
        "watchHours",
        watchHours
    );

    updateDashboard();

    alert("✅ Watch hours updated!");
}


// ==========================================
// MONTHLY INCOME
// ==========================================

function updateIncome() {

    const value = prompt(
        "Enter your monthly YouTube income ($):"
    );

    if (value === null) return;

    const number = Number(value);

    if (isNaN(number) || number < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    monthlyIncome = number;

    localStorage.setItem(
        "monthlyIncome",
        monthlyIncome
    );

    alert(
        "💰 Monthly income updated to $" +
        monthlyIncome.toFixed(2)
    );
}


// ==========================================
// LESSONS
// ==========================================

const lessons = {

    "Start From Zero": {
        icon: "🚀",
        title: "Start From Zero",

        content: `

        <h3>🚀 Start Your YouTube Journey</h3>

        <p>
        You don't need thousands of subscribers
        to start YouTube. You only need to start.
        </p>

        <h4>Step 1 — Choose Your Niche</h4>

        <p>
        Choose a topic you can consistently
        create content about.
        </p>

        <ul>
            <li>🎵 Music</li>
            <li>📚 Education</li>
            <li>🎬 Entertainment</li>
            <li>💻 Technology</li>
            <li>💼 Business</li>
            <li>🎮 Gaming</li>
        </ul>

        <h4>Step 2 — Create Your Channel</h4>

        <p>
        Choose a memorable channel name,
        profile picture, banner and description.
        </p>

        <h4>Step 3 — Upload Your First Video</h4>

        <p>
        Don't wait for perfection.
        Publish, analyze and improve.
        </p>

        <div class="lesson-tip">
        💡 Your first 10 videos are mainly
        for learning.
        </div>

        `
    },


    "Grow Your Channel": {
        icon: "📈",
        title: "Grow Your Channel",

        content: `

        <h3>📈 Grow Your YouTube Channel</h3>

        <p>
        Channel growth comes from creating videos
        people want to click and watch.
        </p>

        <h4>1. CTR</h4>

        <p>
        Improve your title and thumbnail
        to increase clicks.
        </p>

        <h4>2. Retention</h4>

        <p>
        Keep viewers interested from beginning
        to end.
        </p>

        <h4>3. Watch Time</h4>

        <p>
        Useful viewing sessions can help
        build watch time.
        </p>

        <h4>4. Consistency</h4>

        <p>
        Create a realistic upload schedule
        and follow it.
        </p>

        <div class="lesson-tip">
        🔥 Focus on CTR + Retention + Value.
        </div>

        `
    },


    "Monetization": {
        icon: "💰",
        title: "YouTube Monetization",

        content: `

        <h3>💰 YouTube Monetization</h3>

        <p>
        YouTube creators can build multiple
        income streams.
        </p>

        <h4>Main Income Opportunities</h4>

        <ul>
            <li>📺 Advertising</li>
            <li>⭐ Channel Memberships</li>
            <li>💚 Super Thanks</li>
            <li>🔴 Live Stream Features</li>
            <li>🤝 Sponsorships</li>
            <li>🔗 Affiliate Marketing</li>
            <li>📚 Digital Products</li>
        </ul>

        <div class="lesson-tip">
        💡 Don't depend on only one income source.
        </div>

        `
    },


    "Income Calculator": {
        icon: "🧮",
        title: "YouTube Income Calculator",

        content: `

        <h3>🧮 YouTube Income Calculator</h3>

        <p>
        Estimate possible advertising revenue
        using views and RPM.
        </p>

        <label>Monthly Views</label>

        <input
            id="calcViews"
            type="number"
            placeholder="100000"
        >

        <label>RPM ($)</label>

        <input
            id="calcRPM"
            type="number"
            step="0.01"
            placeholder="1.00"
        >

        <button onclick="calculateIncome()">
        Calculate Income
        </button>

        <div
            id="incomeResult"
            class="result-box">
        </div>

        `
    },


    "AI YouTube Tools": {
        icon: "🤖",
        title: "AI YouTube Tools",

        content: `

        <h3>🤖 AI YouTube Tools</h3>

        <p>
        AI can help you save time when planning
        and producing YouTube content.
        </p>

        <h4>AI Content Workflow</h4>

        <ol>
            <li>💡 Generate video ideas</li>
            <li>✍️ Create a script</li>
            <li>🎯 Generate titles</li>
            <li>📝 Write description</li>
            <li>🏷️ Create keywords</li>
            <li>🖼️ Create thumbnail prompts</li>
        </ol>

        <div class="lesson-tip">
        💡 Use AI as a creative assistant.
        </div>

        `
    },


    "30 Day Challenge": {
        icon: "🔥",
        title: "30-Day YouTube Challenge",

        content: `

        <h3>🔥 30-Day Challenge</h3>

        <p>
        Complete one important action every day.
        </p>

        <div class="challenge-list">

        <p>✅ Day 1 — Choose your niche</p>
        <p>⬜ Day 2 — Create channel</p>
        <p>⬜ Day 3 — Create branding</p>
        <p>⬜ Day 4 — Research competitors</p>
        <p>⬜ Day 5 — Create 10 video ideas</p>
        <p>⬜ Day 6 — Write first script</p>
        <p>⬜ Day 7 — Create first video</p>
        <p>⬜ Day 8 — Create thumbnail</p>
        <p>⬜ Day 9 — Upload video</p>
        <p>⬜ Day 10 — Study analytics</p>
        <p>⬜ Day 11 — Improve title</p>
        <p>⬜ Day 12 — Improve thumbnail</p>
        <p>⬜ Day 13 — Create next video</p>
        <p>⬜ Day 14 — Upload</p>
        <p>⬜ Day 15 — Study retention</p>
        <p>⬜ Day 16 — Create Short</p>
        <p>⬜ Day 17 — Create another Short</p>
        <p>⬜ Day 18 — Research keywords</p>
        <p>⬜ Day 19 — Create video</p>
        <p>⬜ Day 20 — Upload</p>
        <p>⬜ Day 21 — Analyze results</p>
        <p>⬜ Day 22 — Improve hook</p>
        <p>⬜ Day 23 — Create video</p>
        <p>⬜ Day 24 — Upload</p>
        <p>⬜ Day 25 — Improve thumbnail</p>
        <p>⬜ Day 26 — Create video</p>
        <p>⬜ Day 27 — Upload</p>
        <p>⬜ Day 28 — Analyze channel</p>
        <p>⬜ Day 29 — Plan next month</p>
        <p>⬜ Day 30 — 🚀 Review your progress</p>

        </div>

        `
    },


    "Ad Revenue": {
        icon: "📺",
        title: "Ad Revenue",

        content: `

        <h3>📺 YouTube Ad Revenue</h3>

        <p>
        Learn how advertising revenue works
        and how RPM affects your earnings.
        </p>

        <div class="lesson-tip">
        💡 Views and RPM both affect advertising
        revenue.
        </div>

        `
    },


    "Affiliate Marketing": {
        icon: "🔗",
        title: "Affiliate Marketing",

        content: `

        <h3>🔗 Affiliate Marketing</h3>

        <p>
        Recommend useful products or services
        and earn commissions from qualifying
        purchases.
        </p>

        <div class="lesson-tip">
        💡 Recommend products relevant to
        your audience.
        </div>

        `
    },


    "Sponsorship": {
        icon: "🤝",
        title: "Sponsorship",

        content: `

        <h3>🤝 Sponsorship</h3>

        <p>
        Brands may pay creators to promote
        products or services.
        </p>

        <div class="lesson-tip">
        💡 Build audience trust before accepting
        sponsorships.
        </div>

        `
    },


    "Digital Products": {
        icon: "📚",
        title: "Digital Products",

        content: `

        <h3>📚 Digital Products</h3>

        <p>
        Create and sell e-books, courses,
        templates, guides or digital tools.
        </p>

        <div class="lesson-tip">
        💡 Create products that solve a real
        problem for your audience.
        </div>

        `
    }

};


// ==========================================
// SHOW LESSON
// ==========================================

function showMessage(title) {

    const lesson = lessons[title];

    if (!lesson) {
        alert("Lesson coming soon!");
        return;
    }

    const oldContent =
        document.querySelector("main.container");

    if (!oldContent) return;

    oldContent.innerHTML = `

        <button
            class="back-button"
            onclick="location.reload()">

            ← Back to Dashboard

        </button>

        <div class="lesson-page">

            <div class="lesson-icon">
                ${lesson.icon}
            </div>

            <h2>
                ${lesson.title}
            </h2>

            <div class="lesson-content">
                ${lesson.content}
            </div>

        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// INCOME CALCULATOR
// ==========================================

function calculateIncome() {

    const views =
        Number(
            document.getElementById("calcViews").value
        );

    const rpm =
        Number(
            document.getElementById("calcRPM").value
        );

    const result =
        document.getElementById("incomeResult");

    if (
        isNaN(views) ||
        isNaN(rpm) ||
        views < 0 ||
        rpm < 0
    ) {

        result.innerHTML =
            "⚠️ Please enter valid numbers.";

        return;
    }

    const income =
        (views / 1000) * rpm;

    result.innerHTML = `

        <strong>
        Estimated Revenue
        </strong>

        <br><br>

        👁️ Views:
        ${views.toLocaleString()}

        <br>

        💵 RPM:
        $${rpm.toFixed(2)}

        <br><br>

        <strong>
        💰 $${income.toFixed(2)}
        </strong>

    `;
}


// ==========================================
// START APP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

    }
);
