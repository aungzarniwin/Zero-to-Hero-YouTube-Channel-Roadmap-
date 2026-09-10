// ==========================================
// ZERO TO HERO - YOUTUBE MONEY ACADEMY
// APP.JS V12
// ==========================================

let data = JSON.parse(localStorage.getItem("youtubeAcademyData")) || {
    subscribers: 0,
    watchHours: 0,
    income: 0,
    completedLessons: [],
    challengeDays: 0
};


// ==========================================
// SAVE DATA
// ==========================================

function saveData() {
    localStorage.setItem(
        "youtubeAcademyData",
        JSON.stringify(data)
    );
}


// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard() {

    document.getElementById("subscriberCount").textContent =
        data.subscribers.toLocaleString();

    document.getElementById("watchHours").textContent =
        data.watchHours.toLocaleString();

    document.getElementById("monthlyIncome").textContent =
        "$" + data.income.toLocaleString();

    let totalLessons = 10;

    let lessonPercent =
        Math.round((data.completedLessons.length / totalLessons) * 100);

    document.getElementById("lessonProgress").textContent =
        lessonPercent + "%";


    // Subscribers

    document.getElementById("dashSubscribers").textContent =
        data.subscribers.toLocaleString() + " / 1,000";

    document.getElementById("subscriberGoalBar").style.width =
        Math.min(data.subscribers / 1000 * 100, 100) + "%";


    // Watch Hours

    document.getElementById("dashWatchHours").textContent =
        data.watchHours.toLocaleString() + " / 4,000";

    document.getElementById("watchGoalBar").style.width =
        Math.min(data.watchHours / 4000 * 100, 100) + "%";


    // Income

    document.getElementById("dashIncome").textContent =
        "$" + data.income.toLocaleString() + " / $1,000";

    document.getElementById("incomeGoalBar").style.width =
        Math.min(data.income / 1000 * 100, 100) + "%";


    // Lessons

    document.getElementById("dashLessons").textContent =
        data.completedLessons.length + " / 10";

    document.getElementById("lessonGoalBar").style.width =
        Math.min(data.completedLessons.length / 10 * 100, 100) + "%";


    // Overall

    let overall =
        (
            Math.min(data.subscribers / 1000, 1) +
            Math.min(data.watchHours / 4000, 1) +
            Math.min(data.income / 1000, 1) +
            Math.min(data.completedLessons.length / 10, 1)
        ) / 4 * 100;

    overall = Math.round(overall);

    document.getElementById("overallProgressText").textContent =
        overall + "%";

    document.getElementById("overallProgressBar").style.width =
        overall + "%";


    updateAchievements();
    updateCourseProgress();
}


// ==========================================
// UPDATE SUBSCRIBERS
// ==========================================

function updateSubscribers() {

    let value = prompt(
        "Enter your current subscribers:"
    );

    if (value === null) return;

    value = Number(value);

    if (isNaN(value) || value < 0) {
        alert("Please enter a valid number.");
        return;
    }

    data.subscribers = value;

    saveData();
    updateDashboard();

    alert("✅ Subscribers updated!");
}


// ==========================================
// UPDATE WATCH HOURS
// ==========================================

function updateWatchHours() {

    let value = prompt(
        "Enter your current watch hours:"
    );

    if (value === null) return;

    value = Number(value);

    if (isNaN(value) || value < 0) {
        alert("Please enter a valid number.");
        return;
    }

    data.watchHours = value;

    saveData();
    updateDashboard();

    alert("✅ Watch Hours updated!");
}


// ==========================================
// UPDATE INCOME
// ==========================================

function updateIncome() {

    let value = prompt(
        "Enter your monthly YouTube income ($):"
    );

    if (value === null) return;

    value = Number(value);

    if (isNaN(value) || value < 0) {
        alert("Please enter a valid number.");
        return;
    }

    data.income = value;

    saveData();
    updateDashboard();

    alert("✅ Monthly Income updated!");
}


// ==========================================
// COURSE DATA
// ==========================================

const courses = {

    beginner: {
        title: "🌱 YouTube Beginner",

        lessons: [

            {
                id: "beginner-1",
                title: "Lesson 1: Start From Zero",

                content: `
                    <h3>🚀 Start From Zero</h3>

                    <p>
                    YouTube channel စတင်မယ်ဆိုရင်
                    ပထမဆုံး ကိုယ်လုပ်မယ့် Content ကို သတ်မှတ်ရပါမယ်။
                    </p>

                    <h3>Step 1 — Choose Your Niche</h3>

                    <p>
                    Music, Education, Entertainment, Gaming,
                    Food, Vlog စတဲ့ niche တစ်ခုကို ရွေးပါ။
                    </p>

                    <h3>Step 2 — Create Your Channel</h3>

                    <p>
                    Channel Name, Profile Picture, Banner
                    နဲ့ Description ကို professional ဖြစ်အောင် ပြင်ပါ။
                    </p>

                    <h3>Step 3 — Upload Consistently</h3>

                    <p>
                    တစ်ပတ်မှာ အနည်းဆုံး 3–5 videos
                    ပုံမှန်တင်နိုင်အောင် plan ချပါ။
                    </p>

                    <h3>🎯 Mission</h3>

                    <p>
                    ကိုယ့် YouTube channel ရဲ့ niche တစ်ခုကို
                    ဒီနေ့ သတ်မှတ်ပါ။
                    </p>
                `
            },

            {
                id: "beginner-2",
                title: "Lesson 2: Create Your First Video",

                content: `
                    <h3>🎬 Create Your First Video</h3>

                    <p>
                    ပထမ Video ရဲ့ အရေးကြီးဆုံးအချက်က
                    Perfect ဖြစ်ဖို့မဟုတ်ဘဲ Publish လုပ်နိုင်ဖို့ပါ။
                    </p>

                    <h3>Video Structure</h3>

                    <p>
                    1️⃣ Hook<br>
                    2️⃣ Main Content<br>
                    3️⃣ Value<br>
                    4️⃣ Call To Action
                    </p>

                    <h3>🎯 Mission</h3>

                    <p>
                    ပထမဆုံး YouTube Video တစ်ခုကို
                    ပြင်ဆင်ပြီး Publish လုပ်ပါ။
                    </p>
                `
            }

        ]
    },


    growth: {

        title: "📈 Channel Growth",

        lessons: [

            {
                id: "growth-1",
                title: "Lesson 3: Get More Views",

                content: `
                    <h3>📈 Get More Views</h3>

                    <p>
                    Views တိုးဖို့ Title, Thumbnail,
                    Hook နဲ့ Audience Retention ကို အာရုံစိုက်ပါ။
                    </p>

                    <h3>Important Metrics</h3>

                    <p>
                    CTR — Thumbnail/Title ကို လူတွေ ဘယ်လောက်နှိပ်သလဲ။
                    </p>

                    <p>
                    Retention — Video ကို ဘယ်လောက်ကြာကြာကြည့်သလဲ။
                    </p>
                `
            },

            {
                id: "growth-2",
                title: "Lesson 4: Subscribers Growth",

                content: `
                    <h3>👥 Grow Subscribers</h3>

                    <p>
                    Audience အတွက် တန်ဖိုးရှိတဲ့ Content
                    ကို ပုံမှန်ထုတ်ပေးပါ။
                    </p>

                    <p>
                    Video အဆုံးမှာ Subscribe လုပ်ဖို့
                    သဘာဝကျကျ ဖိတ်ခေါ်ပါ။
                    </p>
                `
            }

        ]
    },


    monetization: {

        title: "💵 YouTube Monetization",

        lessons: [

            {
                id: "monetization-1",
                title: "Lesson 5: YouTube Monetization",

                content: `
                    <h3>💰 Monetization</h3>

                    <p>
                    YouTube Partner Program မှာ ဝင်ငွေရရှိနိုင်တဲ့
                    နည်းလမ်းများကို လေ့လာပါ။
                    </p>

                    <p>
                    Ads, Memberships, Super Thanks,
                    Super Chat စတဲ့ income streams တွေရှိပါတယ်။
                    </p>
                `
            },

            {
                id: "monetization-2",
                title: "Lesson 6: YouTube Revenue",

                content: `
                    <h3>💵 Revenue</h3>

                    <p>
                    YouTube income ဟာ Views တစ်ခုတည်းနဲ့
                    ဆုံးဖြတ်တာမဟုတ်ပါဘူး။
                    </p>

                    <p>
                    Audience location, niche,
                    advertiser demand နဲ့ watch time တို့က
                    revenue ကို သက်ရောက်စေပါတယ်။
                    </p>
                `
            },

            {
                id: "monetization-3",
                title: "Lesson 7: Increase RPM",

                content: `
                    <h3>📊 Increase RPM</h3>

                    <p>
                    Audience quality, content topic,
                    video length နဲ့ advertiser-friendly content
                    ကို အာရုံစိုက်ပါ။
                    </p>
                `
            }

        ]
    },


    income: {

        title: "🚀 YouTube Income",

        lessons: [

            {
                id: "income-1",
                title: "Lesson 8: Multiple Income Streams",

                content: `
                    <h3>🚀 Multiple Income Streams</h3>

                    <p>
                    YouTube Ads အပြင် Affiliate,
                    Sponsorship, Digital Products နဲ့
                    Services တွေကနေ ဝင်ငွေရှာနိုင်ပါတယ်။
                    </p>
                `
            },

            {
                id: "income-2",
                title: "Lesson 9: Build Your Business",

                content: `
                    <h3>🏢 Build Your Business</h3>

                    <p>
                    Channel ကို Audience တစ်ခုရှိတဲ့
                    Business Asset အဖြစ် တည်ဆောက်ပါ။
                    </p>
                `
            },

            {
                id: "income-3",
                title: "Lesson 10: Zero to Hero",

                content: `
                    <h3>🏆 Zero to Hero</h3>

                    <p>
                    Consistency + Quality + Analytics
                    သုံးခုကို ဆက်တိုက်အသုံးချပြီး
                    Channel ကို ရေရှည်တိုးတက်အောင်လုပ်ပါ။
                    </p>

                    <h3>🎯 Final Mission</h3>

                    <p>
                    ကိုယ့် YouTube Channel အတွက်
                    90-Day Growth Plan တစ်ခုရေးပါ။
                    </p>
                `
            }

        ]
    }

};


// ==========================================
// SHOW COURSE
// ==========================================

function showCourse(courseName) {

    const course = courses[courseName];

    if (!course) return;

    const app = document.getElementById("app");

    let html = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="location.reload()">
                ← Back to Dashboard
            </button>

            <h2>${course.title}</h2>

            <div class="lesson-list">
    `;


    course.lessons.forEach((lesson, index) => {

        const completed =
            data.completedLessons.includes(lesson.id);

        let unlocked = true;

        /*
        Lesson 2 onward requires previous lesson
        */

        if (index > 0) {

            const previousLesson =
                course.lessons[index - 1];

            unlocked =
                data.completedLessons.includes(
                    previousLesson.id
                );
        }


        html += `

            <div class="lesson-item ${!unlocked ? "locked" : ""}">

                <div>

                    <div class="lesson-number">
                        Lesson ${index + 1}
                    </div>

                    <div class="lesson-name">
                        ${completed ? "✅ " : ""}
                        ${lesson.title}
                    </div>

                </div>

                ${
                    unlocked
                    ?
                    `<button
                        class="red"
                        onclick="openLesson('${courseName}', ${index})">
                        ${completed ? "Review" : "Start"}
                    </button>`
                    :
                    `<button disabled>
                        🔒 Locked
                    </button>`
                }

            </div>
        `;
    });


    html += `

            </div>

        </section>
    `;


    app.innerHTML = html;

    window.scrollTo(0, 0);
}


// ==========================================
// OPEN LESSON
// ==========================================

function openLesson(courseName, index) {

    const course = courses[courseName];

    if (!course) return;

    const lesson = course.lessons[index];

    if (!lesson) return;


    const app = document.getElementById("app");


    const completed =
        data.completedLessons.includes(lesson.id);


    app.innerHTML = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="showCourse('${courseName}')">
                ← Back to Lessons
            </button>

            <h2>${lesson.title}</h2>

            <div class="lesson-content">

                ${lesson.content}

            </div>

            ${
                completed
                ?
                `
                <button
                    class="complete-btn"
                    onclick="showCourse('${courseName}')">
                    ✅ Lesson Completed
                </button>
                `
                :
                `
                <button
                    class="complete-btn"
                    onclick="completeLesson('${courseName}', ${index})">
                    ✅ Complete Lesson
                </button>
                `
            }

        </section>
    `;


    window.scrollTo(0, 0);
}


// ==========================================
// COMPLETE LESSON
// ==========================================

function completeLesson(courseName, index) {

    const course = courses[courseName];

    if (!course) return;

    const lesson = course.lessons[index];

    if (!lesson) return;


    if (!data.completedLessons.includes(lesson.id)) {

        data.completedLessons.push(lesson.id);

        saveData();

        alert("🎉 Lesson Completed!");

    }


    showCourse(courseName);

    updateDashboard();
}


// ==========================================
// COURSE PROGRESS
// ==========================================

function updateCourseProgress() {

    updateCourse(
        "beginner",
        "courseProgressBeginner",
        "courseBarBeginner"
    );

    updateCourse(
        "growth",
        "courseProgressGrowth",
        "courseBarGrowth"
    );

    updateCourse(
        "monetization",
        "courseProgressMonetization",
        "courseBarMonetization"
    );

    updateCourse(
        "income",
        "courseProgressIncome",
        "courseBarIncome"
    );
}


function updateCourse(
    courseName,
    textId,
    barId
) {

    const course = courses[courseName];

    if (!course) return;


    let completed = course.lessons.filter(
        lesson =>
            data.completedLessons.includes(lesson.id)
    ).length;


    let total = course.lessons.length;

    let percent =
        Math.round((completed / total) * 100);


    const text =
        document.getElementById(textId);

    const bar =
        document.getElementById(barId);


    if (text) {

        text.textContent =
            `${completed} / ${total} Lessons`;
    }


    if (bar) {

        bar.style.width =
            percent + "%";
    }
}


// ==========================================
// ACHIEVEMENTS
// ==========================================

function updateAchievements() {

    const subscriberBadge =
        document.getElementById(
            "achievementSubscriber"
        );

    const watchBadge =
        document.getElementById(
            "achievementWatch"
        );

    const lessonBadge =
        document.getElementById(
            "achievementLesson"
        );


    if (data.subscribers >= 1000) {

        subscriberBadge.classList.add(
            "unlocked"
        );

    }


    if (data.watchHours >= 4000) {

        watchBadge.classList.add(
            "unlocked"
        );

    }


    if (data.completedLessons.length >= 10) {

        lessonBadge.classList.add(
            "unlocked"
        );

    }


    if (data.challengeDays >= 30) {

        document.getElementById(
            "achievementChallenge"
        ).classList.add("unlocked");

    }
}


// ==========================================
// CREATOR TOOLS
// ==========================================

function showTool(toolName) {

    if (toolName === "start") {

        alert(
            "📖 Start From Zero\n\n" +
            "Choose a niche → Create channel → " +
            "Upload consistently → Study analytics."
        );

    }


    if (toolName === "ai") {

        alert(
            "🤖 AI YouTube Tools\n\n" +
            "AI ကို အသုံးပြုပြီး Video Ideas, " +
            "Titles, Scripts နဲ့ Content Planning ပြုလုပ်နိုင်ပါတယ်။"
        );

    }


    if (toolName === "challenge") {

        let day = prompt(
            "Enter completed challenge days (0-30):"
        );

        if (day === null) return;

        day = Number(day);

        if (
            isNaN(day) ||
            day < 0 ||
            day > 30
        ) {

            alert(
                "Please enter a number between 0 and 30."
            );

            return;
        }

        data.challengeDays = day;

        saveData();

        updateDashboard();

        updateChallenge();

        alert("🔥 Challenge progress updated!");

    }

}


// ==========================================
// CHALLENGE
// ==========================================

function updateChallenge() {

    const text =
        document.getElementById(
            "challengeProgressText"
        );

    const bar =
        document.getElementById(
            "challengeProgressBar"
        );


    if (!text || !bar) return;


    text.textContent =
        data.challengeDays + " / 30 Days";


    bar.style.width =
        (data.challengeDays / 30 * 100) + "%";
}


// ==========================================
// START APP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

        updateChallenge();

    }
);
