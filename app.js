// ==========================================
// ZERO TO HERO
// YOUTUBE MONEY ACADEMY
// APP.JS V13
// ==========================================


// ==========================================
// DATA
// ==========================================

let data = JSON.parse(
    localStorage.getItem("youtubeAcademyData")
) || {

    subscribers: 0,

    watchHours: 0,

    income: 0,

    completedLessons: [],

    challengeDays: 0
};


// ==========================================
// SAVE
// ==========================================

function saveData(){

    localStorage.setItem(
        "youtubeAcademyData",
        JSON.stringify(data)
    );
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
                    YouTube Channel စတင်မယ်ဆိုရင်
                    ပထမဆုံး ကိုယ်လုပ်မယ့် Content နဲ့ Niche
                    ကို သတ်မှတ်ရပါမယ်။
                    </p>

                    <h3>1️⃣ Choose Your Niche</h3>

                    <p>
                    Music, Education, Entertainment,
                    Gaming, Food, Vlog စတဲ့ Niche တစ်ခုကို
                    ရွေးချယ်ပါ။
                    </p>

                    <h3>2️⃣ Create Your Channel</h3>

                    <p>
                    Channel Name, Profile Picture,
                    Banner နဲ့ Description ကို
                    Professional ဖြစ်အောင် ပြင်ဆင်ပါ။
                    </p>

                    <h3>3️⃣ Upload Consistently</h3>

                    <p>
                    ပုံမှန် Upload Schedule တစ်ခုထားပြီး
                    Audience အတွက် တန်ဖိုးရှိတဲ့ Content
                    ထုတ်ပေးပါ။
                    </p>

                    <h3>🎯 Mission</h3>

                    <p>
                    ကိုယ့် YouTube Channel ရဲ့ Niche တစ်ခု
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
                    Perfect ဖြစ်ဖို့မဟုတ်ပါဘူး။
                    Publish လုပ်ပြီး လေ့လာတိုးတက်ဖို့ပါ။
                    </p>

                    <h3>Video Structure</h3>

                    <p>
                    1️⃣ Hook<br>
                    2️⃣ Introduction<br>
                    3️⃣ Main Content<br>
                    4️⃣ Value<br>
                    5️⃣ Call To Action
                    </p>

                    <h3>🎯 Mission</h3>

                    <p>
                    ကိုယ့်ပထမဆုံး YouTube Video ကို
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
                    Hook နဲ့ Audience Retention ကို
                    အာရုံစိုက်ရပါမယ်။
                    </p>

                    <h3>Important Metrics</h3>

                    <p>
                    CTR — Thumbnail နဲ့ Title ကို
                    လူတွေ ဘယ်လောက်နှိပ်သလဲ။
                    </p>

                    <p>
                    Retention — Video ကို
                    ဘယ်လောက်ကြာကြာကြည့်သလဲ။
                    </p>

                `
            },


            {
                id: "growth-2",

                title: "Lesson 4: Subscribers Growth",

                content: `

                    <h3>👥 Grow Subscribers</h3>

                    <p>
                    Audience အတွက် အသုံးဝင်တဲ့ Content ကို
                    ပုံမှန်ထုတ်ပေးပါ။
                    </p>

                    <p>
                    Video အဆုံးမှာ Like, Subscribe,
                    Comment ပြုလုပ်ဖို့ သဘာဝကျကျ
                    ဖိတ်ခေါ်ပါ။
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
                    YouTube Partner Program မှာ
                    ဝင်ငွေရရှိနိုင်တဲ့ နည်းလမ်းတွေကို
                    နားလည်ထားဖို့လိုပါတယ်။
                    </p>

                    <p>
                    Ads, Memberships, Super Thanks,
                    Super Chat စတဲ့ Income Streams တွေရှိပါတယ်။
                    </p>

                `
            },


            {
                id: "monetization-2",

                title: "Lesson 6: YouTube Revenue",

                content: `

                    <h3>💵 YouTube Revenue</h3>

                    <p>
                    YouTube Income ဟာ Views တစ်ခုတည်းနဲ့
                    ဆုံးဖြတ်တာမဟုတ်ပါဘူး။
                    </p>

                    <p>
                    Audience Location, Niche,
                    Advertiser Demand, Watch Time
                    စတဲ့အချက်တွေက Revenue ကို
                    သက်ရောက်စေပါတယ်။
                    </p>

                `
            },


            {
                id: "monetization-3",

                title: "Lesson 7: Increase RPM",

                content: `

                    <h3>📊 Increase RPM</h3>

                    <p>
                    Quality Content, Audience Quality,
                    Watch Time နဲ့ Advertiser-Friendly
                    Content ကို အာရုံစိုက်ပါ။
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
                    YouTube Channel ကို Audience ရှိတဲ့
                    Business Asset တစ်ခုအဖြစ် တည်ဆောက်ပါ။
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
                    သုံးခုကို ဆက်တိုက်အသုံးချပါ။
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
// DASHBOARD
// ==========================================

function updateDashboard(){

    document.getElementById(
        "subscriberCount"
    ).textContent =
        data.subscribers.toLocaleString();


    document.getElementById(
        "watchHours"
    ).textContent =
        data.watchHours.toLocaleString();


    document.getElementById(
        "monthlyIncome"
    ).textContent =
        "$" + data.income.toLocaleString();


    let lessonPercent =
        Math.round(
            data.completedLessons.length / 10 * 100
        );


    document.getElementById(
        "lessonProgress"
    ).textContent =
        lessonPercent + "%";


    document.getElementById(
        "dashSubscribers"
    ).textContent =
        data.subscribers.toLocaleString()
        + " / 1,000";


    document.getElementById(
        "subscriberGoalBar"
    ).style.width =
        Math.min(
            data.subscribers / 1000 * 100,
            100
        ) + "%";


    document.getElementById(
        "dashWatchHours"
    ).textContent =
        data.watchHours.toLocaleString()
        + " / 4,000";


    document.getElementById(
        "watchGoalBar"
    ).style.width =
        Math.min(
            data.watchHours / 4000 * 100,
            100
        ) + "%";


    document.getElementById(
        "dashIncome"
    ).textContent =
        "$" +
        data.income.toLocaleString()
        + " / $1,000";


    document.getElementById(
        "incomeGoalBar"
    ).style.width =
        Math.min(
            data.income / 1000 * 100,
            100
        ) + "%";


    document.getElementById(
        "dashLessons"
    ).textContent =
        data.completedLessons.length
        + " / 10";


    document.getElementById(
        "lessonGoalBar"
    ).style.width =
        Math.min(
            data.completedLessons.length / 10 * 100,
            100
        ) + "%";


    let overall = (

        Math.min(
            data.subscribers / 1000,
            1
        )

        +

        Math.min(
            data.watchHours / 4000,
            1
        )

        +

        Math.min(
            data.income / 1000,
            1
        )

        +

        Math.min(
            data.completedLessons.length / 10,
            1
        )

    ) / 4 * 100;


    overall = Math.round(overall);


    document.getElementById(
        "overallProgressText"
    ).textContent =
        overall + "%";


    document.getElementById(
        "overallProgressBar"
    ).style.width =
        overall + "%";


    updateAchievements();

    updateCourseProgress();

    updateChallenge();
}


// ==========================================
// UPDATE SUBSCRIBERS
// ==========================================

function updateSubscribers(){

    let value = prompt(
        "Enter your current subscribers:"
    );

    if(value === null) return;

    value = Number(value);

    if(
        isNaN(value) ||
        value < 0
    ){

        alert(
            "Please enter a valid number."
        );

        return;
    }


    data.subscribers = value;

    saveData();

    updateDashboard();

    alert(
        "✅ Subscribers updated!"
    );
}


// ==========================================
// UPDATE WATCH HOURS
// ==========================================

function updateWatchHours(){

    let value = prompt(
        "Enter your current watch hours:"
    );

    if(value === null) return;

    value = Number(value);

    if(
        isNaN(value) ||
        value < 0
    ){

        alert(
            "Please enter a valid number."
        );

        return;
    }


    data.watchHours = value;

    saveData();

    updateDashboard();

    alert(
        "✅ Watch Hours updated!"
    );
}


// ==========================================
// UPDATE INCOME
// ==========================================

function updateIncome(){

    let value = prompt(
        "Enter your monthly YouTube income ($):"
    );

    if(value === null) return;

    value = Number(value);

    if(
        isNaN(value) ||
        value < 0
    ){

        alert(
            "Please enter a valid number."
        );

        return;
    }


    data.income = value;

    saveData();

    updateDashboard();

    alert(
        "✅ Monthly Income updated!"
    );
}


// ==========================================
// SHOW COURSE
// ==========================================

function showCourse(courseName){

    const course =
        courses[courseName];

    if(!course) return;


    const app =
        document.getElementById("app");


    let html = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="location.reload()">

                ← Back to Dashboard

            </button>

            <h2>
                ${course.title}
            </h2>

            <div class="lesson-list">

    `;


    course.lessons.forEach(
        (lesson,index) => {

            const completed =
                data.completedLessons.includes(
                    lesson.id
                );


            let unlocked = true;


            if(index > 0){

                const previousLesson =
                    course.lessons[index - 1];


                unlocked =
                    data.completedLessons.includes(
                        previousLesson.id
                    );
            }


            html += `

                <div class="lesson-item
                    ${!unlocked ? "locked" : ""}">

                    <div>

                        <div class="lesson-number">
                            Lesson ${index + 1}
                        </div>

                        <div class="lesson-name">

                            ${
                                completed
                                ? "✅ "
                                : ""
                            }

                            ${lesson.title}

                        </div>

                    </div>

                    ${
                        unlocked

                        ?

                        `
                        <button
                            class="red"
                            onclick="
                                openLesson(
                                    '${courseName}',
                                    ${index}
                                )
                            ">

                            ${
                                completed
                                ? "Review"
                                : "Start"
                            }

                        </button>
                        `

                        :

                        `
                        <button disabled>
                            🔒 Locked
                        </button>
                        `
                    }

                </div>

            `;

        }
    );


    html += `

            </div>

        </section>

    `;


    app.innerHTML =
        html;


    window.scrollTo(
        0,
        0
    );
}


// ==========================================
// OPEN LESSON
// ==========================================

function openLesson(
    courseName,
    index
){

    const course =
        courses[courseName];

    if(!course) return;


    const lesson =
        course.lessons[index];

    if(!lesson) return;


    const app =
        document.getElementById("app");


    const completed =
        data.completedLessons.includes(
            lesson.id
        );


    app.innerHTML = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="
                    showCourse('${courseName}')
                ">

                ← Back to Lessons

            </button>

            <h2>
                ${lesson.title}
            </h2>

            <div class="lesson-content">

                ${lesson.content}

            </div>


            ${
                completed

                ?

                `
                <button
                    class="complete-btn"
                    onclick="
                        showCourse('${courseName}')
                    ">

                    ✅ Lesson Completed

                </button>
                `

                :

                `
                <button
                    class="complete-btn"
                    onclick="
                        completeLesson(
                            '${courseName}',
                            ${index}
                        )
                    ">

                    ✅ Complete Lesson

                </button>
                `
            }

        </section>

    `;


    window.scrollTo(
        0,
        0
    );
}


// ==========================================
// COMPLETE LESSON
// ==========================================

function completeLesson(
    courseName,
    index
){

    const course =
        courses[courseName];

    if(!course) return;


    const lesson =
        course.lessons[index];

    if(!lesson) return;


    if(
        !data.completedLessons.includes(
            lesson.id
        )
    ){

        data.completedLessons.push(
            lesson.id
        );


        saveData();


        alert(
            "🎉 Lesson Completed!"
        );
    }


    showCourse(
        courseName
    );

}


// ==========================================
// COURSE PROGRESS
// ==========================================

function updateCourseProgress(){

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
){

    const course =
        courses[courseName];

    if(!course) return;


    let completed =
        course.lessons.filter(
            lesson =>
                data.completedLessons.includes(
                    lesson.id
                )
        ).length;


    let total =
        course.lessons.length;


    let percent =
        Math.round(
            completed / total * 100
        );


    const text =
        document.getElementById(
            textId
        );


    const bar =
        document.getElementById(
            barId
        );


    if(text){

        text.textContent =
            completed +
            " / " +
            total +
            " Lessons";
    }


    if(bar){

        bar.style.width =
            percent + "%";
    }

}


// ==========================================
// ACHIEVEMENTS
// ==========================================

function updateAchievements(){

    const subscriber =
        document.getElementById(
            "achievementSubscriber"
        );


    const watch =
        document.getElementById(
            "achievementWatch"
        );


    const lesson =
        document.getElementById(
            "achievementLesson"
        );


    const challenge =
        document.getElementById(
            "achievementChallenge"
        );


    subscriber.classList.remove(
        "unlocked"
    );

    watch.classList.remove(
        "unlocked"
    );

    lesson.classList.remove(
        "unlocked"
    );

    challenge.classList.remove(
        "unlocked"
    );


    if(
        data.subscribers >= 1000
    ){

        subscriber.classList.add(
            "unlocked"
        );
    }


    if(
        data.watchHours >= 4000
    ){

        watch.classList.add(
            "unlocked"
        );
    }


    if(
        data.completedLessons.length >= 10
    ){

        lesson.classList.add(
            "unlocked"
        );
    }


    if(
        data.challengeDays >= 30
    ){

        challenge.classList.add(
            "unlocked"
        );
    }

}


// ==========================================
// CREATOR TOOLS
// ==========================================

function showTool(toolName){

    if(
        toolName === "start"
    ){

        alert(

            "📖 START FROM ZERO\n\n" +

            "1. Choose your niche\n" +

            "2. Create your channel\n" +

            "3. Create your first video\n" +

            "4. Upload consistently\n" +

            "5. Study Analytics"

        );

        return;
    }


    if(
        toolName === "ai"
    ){

        showAITools();

        return;
    }


    if(
        toolName === "challenge"
    ){

        showChallenge();

        return;
    }

}


// ==========================================
// AI TOOLS PAGE
// ==========================================

function showAITools(){

    const app =
        document.getElementById("app");


    app.innerHTML = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="location.reload()">

                ← Back to Dashboard

            </button>


            <h2>
                🤖 AI YouTube Tools
            </h2>


            <p>
                Generate YouTube ideas, titles,
                scripts and thumbnail concepts.
            </p>


            <!-- IDEA -->

            <div class="tool-card">

                <h3>
                    💡 Video Idea Generator
                </h3>

                <input
                    id="ideaTopic"
                    class="tool-input"
                    type="text"
                    placeholder="Enter your topic"
                >

                <button
                    class="blue"
                    onclick="generateIdeas()">

                    Generate Ideas

                </button>


                <div id="ideaResult"></div>

            </div>


            <br>


            <!-- TITLE -->

            <div class="tool-card">

                <h3>
                    📝 YouTube Title Generator
                </h3>

                <input
                    id="titleTopic"
                    class="tool-input"
                    type="text"
                    placeholder="Enter video topic"
                >

                <button
                    class="red"
                    onclick="generateTitles()">

                    Generate Titles

                </button>


                <div id="titleResult"></div>

            </div>


            <br>


            <!-- SCRIPT -->

            <div class="tool-card">

                <h3>
                    🎬 Video Script Generator
                </h3>

                <input
                    id="scriptTopic"
                    class="tool-input"
                    type="text"
                    placeholder="Enter video topic"
                >

                <button
                    class="green"
                    onclick="generateScript()">

                    Generate Script

                </button>


                <div id="scriptResult"></div>

            </div>


            <br>


            <!-- THUMBNAIL -->

            <div class="tool-card">

                <h3>
                    🖼️ Thumbnail Idea Generator
                </h3>

                <input
                    id="thumbTopic"
                    class="tool-input"
                    type="text"
                    placeholder="Enter video topic"
                >

                <button
                    class="dark"
                    onclick="generateThumbnail()">

                    Generate Thumbnail

                </button>


                <div id="thumbResult"></div>

            </div>

        </section>

    `;


    window.scrollTo(
        0,
        0
    );
}


// ==========================================
// VIDEO IDEAS
// ==========================================

function generateIdeas(){

    const topic =
        document.getElementById(
            "ideaTopic"
        ).value.trim();


    if(!topic){

        alert(
            "Please enter a topic."
        );

        return;
    }


    document.getElementById(
        "ideaResult"
    ).innerHTML = `

        <div class="ai-result">

            <h3>
                💡 Video Ideas
            </h3>

            <p>
                1. ${topic} — Beginner Guide
            </p>

            <p>
                2. ${topic} — 5 Things You Must Know
            </p>

            <p>
                3. ${topic} — Common Mistakes
            </p>

            <p>
                4. ${topic} — Step-by-Step Tutorial
            </p>

            <p>
                5. ${topic} — Tips & Tricks
            </p>

        </div>

    `;
}


// ==========================================
// TITLE GENERATOR
// ==========================================

function generateTitles(){

    const topic =
        document.getElementById(
            "titleTopic"
        ).value.trim();


    if(!topic){

        alert(
            "Please enter a topic."
        );

        return;
    }


    document.getElementById(
        "titleResult"
    ).innerHTML = `

        <div class="ai-result">

            <h3>
                📝 Title Ideas
            </h3>

            <p>
                🔥 ${topic} ကို ဒီလိုလုပ်ကြည့်ပါ
            </p>

            <p>
                🚀 ${topic} အတွက် အရေးကြီးဆုံး 5 ချက်
            </p>

            <p>
                😱 ${topic} လုပ်တဲ့သူတိုင်း သိထားသင့်တဲ့အချက်များ
            </p>

            <p>
                💡 ${topic} ကို Beginner ကနေ Pro ဖြစ်အောင်
            </p>

            <p>
                ⚠️ ${topic} လုပ်ရာမှာ လူအများဆုံးမှားတဲ့အချက်များ
            </p>

        </div>

    `;
}


// ==========================================
// SCRIPT GENERATOR
// ==========================================

function generateScript(){

    const topic =
        document.getElementById(
            "scriptTopic"
        ).value.trim();


    if(!topic){

        alert(
            "Please enter a topic."
        );

        return;
    }


    document.getElementById(
        "scriptResult"
    ).innerHTML = `

        <div class="ai-result">

            <h3>
                🎬 Video Script
            </h3>

            <p>
                <strong>HOOK</strong>
            </p>

            <p>
                ဒီ Video မှာ ${topic} အကြောင်း
                အရေးကြီးတဲ့အချက်တွေကို
                ပြောပြပေးသွားမှာပါ။
            </p>


            <p>
                <strong>INTRO</strong>
            </p>

            <p>
                မင်္ဂလာပါ။ ဒီနေ့ Video မှာ
                ${topic} ကို အဆင့်ဆင့် လေ့လာကြမယ်။
            </p>


            <p>
                <strong>MAIN CONTENT</strong>
            </p>

            <p>
                ပထမအချက်က ${topic} ရဲ့
                အခြေခံကို နားလည်ထားဖို့ ဖြစ်ပါတယ်။
            </p>


            <p>
                ဒုတိယအချက်က လက်တွေ့အသုံးချဖို့
                ဖြစ်ပါတယ်။
            </p>


            <p>
                <strong>CALL TO ACTION</strong>
            </p>

            <p>
                ဒီ Video က အသုံးဝင်တယ်ဆိုရင်
                Like & Subscribe လုပ်ထားပေးပါ။
            </p>

        </div>

    `;
}


// ==========================================
// THUMBNAIL GENERATOR
// ==========================================

function generateThumbnail(){

    const topic =
        document.getElementById(
            "thumbTopic"
        ).value.trim();


    if(!topic){

        alert(
            "Please enter a topic."
        );

        return;
    }


    document.getElementById(
        "thumbResult"
    ).innerHTML = `

        <div class="ai-result">

            <h3>
                🖼️ Thumbnail Concept
            </h3>

            <p>
                <strong>Main Text:</strong>
            </p>

            <p>
                🔥 ${topic}
            </p>


            <p>
                <strong>Visual:</strong>
            </p>

            <p>
                Big subject + emotional expression
                + simple background
            </p>


            <p>
                <strong>Rule:</strong>
            </p>

            <p>
                Thumbnail စာကို တိုတို၊ ကြီးကြီး၊
                တစ်ချက်ကြည့်တာနဲ့ နားလည်အောင်လုပ်ပါ။
            </p>

        </div>

    `;
}


// ==========================================
// 30 DAY CHALLENGE
// ==========================================

function showChallenge(){

    const app =
        document.getElementById("app");


    let tasks = [

        "Choose your YouTube niche",

        "Create your channel branding",

        "Write 10 video ideas",

        "Create your first video",

        "Upload your first video",

        "Create 5 better titles",

        "Study your Analytics",

        "Improve your thumbnails",

        "Create a content schedule",

        "Upload consistently",

        "Study audience retention",

        "Improve your video hook",

        "Create another video",

        "Reply to comments",

        "Study competitor channels",

        "Create a Shorts idea",

        "Improve your channel About section",

        "Create a playlist",

        "Review your top video",

        "Create another video",

        "Improve your CTR",

        "Create a stronger thumbnail",

        "Study your audience",

        "Create another video",

        "Improve your titles",

        "Create a 7-day content plan",

        "Review your channel analytics",

        "Create another video",

        "Plan your next 30 days",

        "Complete your Zero to Hero mission"

    ];


    let html = `

        <section class="lesson-page">

            <button
                class="back-btn"
                onclick="location.reload()">

                ← Back to Dashboard

            </button>


            <h2>
                🔥 30-Day YouTube Challenge
            </h2>


            <p>
                Complete one task every day.
            </p>


            <div class="lesson-list">

    `;


    tasks.forEach(
        (task,index) => {

            const checked =
                index < data.challengeDays
                ? "checked"
                : "";


            html += `

                <div class="challenge-item">

                    <label>

                        <input
                            type="checkbox"
                            ${checked}
                            onchange="
                                toggleChallenge(
                                    ${index},
                                    this.checked
                                )
                            "
                        >

                        Day ${index + 1} —
                        ${task}

                    </label>

                </div>

            `;

        }
    );


    html += `

            </div>

        </section>

    `;


    app.innerHTML =
        html;


    window.scrollTo(
        0,
        0
    );
}


// ==========================================
// CHALLENGE TOGGLE
// ==========================================

function toggleChallenge(
    index,
    checked
){

    if(checked){

        if(
            index === data.challengeDays
        ){

            data.challengeDays++;
        }

        else if(
            index < data.challengeDays
        ){

            // already completed

        }

        else{

            alert(
                "⚠️ Please complete the previous day first."
            );

            showChallenge();

            return;
        }

    }

    else{

        if(
            index === data.challengeDays - 1
        ){

            data.challengeDays--;
        }

        else{

            alert(
                "Complete days in order."
            );

            showChallenge();

            return;
        }
    }


    saveData();

    updateDashboard();

    showChallenge();

}


// ==========================================
// CHALLENGE PROGRESS
// ==========================================

function updateChallenge(){

    const text =
        document.getElementById(
            "challengeProgressText"
        );


    const bar =
        document.getElementById(
            "challengeProgressBar"
        );


    if(!text || !bar) return;


    text.textContent =
        data.challengeDays +
        " / 30 Days";


    bar.style.width =
        (
            data.challengeDays /
            30 *
            100
        ) + "%";

}


// ==========================================
// START APP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateDashboard();

        updateChallenge();

    }
);
