/* =========================================
   ZERO TO HERO
   YOUTUBE MONEY ACADEMY
   V11
========================================= */


/* ---------- BASIC DATA ---------- */

let subscribers =
    Number(localStorage.getItem("subscribers")) || 0;

let watchHours =
    Number(localStorage.getItem("watchHours")) || 0;

let monthlyIncome =
    Number(localStorage.getItem("monthlyIncome")) || 0;


/* ---------- COURSE DATA ---------- */

const courses = {

    beginner: {

        name: "🌱 YouTube Beginner",

        lessons: [

            {
                title: "Start From Zero",

                content: `
                    <h3>🌱 Start Your YouTube Journey</h3>

                    <p>
                    YouTube channel စတင်ဖို့ အရင်ဆုံး
                    ကိုယ်တကယ်လုပ်နိုင်မယ့် Niche တစ်ခုရွေးပါ။
                    </p>

                    <h3>1. Choose Your Niche</h3>

                    <p>
                    Music, Education, Food, Business,
                    Technology, Gaming စတဲ့ topic တွေထဲက
                    ကိုယ်ကျွမ်းကျင်ပြီး ရေရှည်လုပ်နိုင်တာကိုရွေးပါ။
                    </p>

                    <h3>2. Create Your Channel</h3>

                    <p>
                    Channel Name, Profile Picture, Banner
                    နဲ့ Description ကို professional ဖြစ်အောင်ပြင်ပါ။
                    </p>

                    <h3>3. Start Creating</h3>

                    <p>
                    ပထမဆုံး Video တွေမှာ perfection ထက်
                    consistency ကို ဦးစားပေးပါ။
                    </p>
                `
            },

            {
                title: "AI YouTube Tools",

                content: `
                    <h3>🤖 AI YouTube Tools</h3>

                    <p>
                    AI ကိုအသုံးပြုပြီး YouTube အလုပ်တွေကို
                    ပိုမြန်အောင်လုပ်နိုင်ပါတယ်။
                    </p>

                    <h3>AI နဲ့လုပ်နိုင်တာများ</h3>

                    <p>💡 Video Ideas</p>
                    <p>📝 Scripts</p>
                    <p>🎯 Titles</p>
                    <p>📄 Descriptions</p>
                    <p>🖼 Thumbnail Ideas</p>

                    <h3>Simple Workflow</h3>

                    <p>
                    Idea → Script → Video → Thumbnail →
                    Upload → Analytics
                    </p>
                `
            }

        ]

    },


    growth: {

        name: "📈 Channel Growth",

        lessons: [

            {
                title: "Grow Your Channel",

                content: `
                    <h3>📈 YouTube Growth</h3>

                    <p>
                    Channel growth အတွက် အရေးကြီးဆုံး
                    metric သုံးခုက CTR, Retention နဲ့ Consistency ဖြစ်ပါတယ်။
                    </p>

                    <h3>CTR</h3>

                    <p>
                    Thumbnail နဲ့ Title က viewer ကို
                    click လုပ်ချင်စေဖို့လိုပါတယ်။
                    </p>

                    <h3>Retention</h3>

                    <p>
                    Video အစပိုင်းမှာ strong hook တစ်ခုထားပြီး
                    viewer ကို ဆက်ကြည့်ချင်အောင်လုပ်ပါ။
                    </p>
                `
            },

            {
                title: "YouTube Analytics",

                content: `
                    <h3>📊 YouTube Analytics</h3>

                    <p>
                    Analytics က ဘယ် Video တွေကောင်းလဲ
                    ဘယ်နေရာမှာ viewer တွေထွက်သွားလဲဆိုတာ
                    သိနိုင်စေပါတယ်။
                    </p>

                    <h3>အရေးကြီး Metrics</h3>

                    <p>👀 Views</p>
                    <p>🖱 CTR</p>
                    <p>⏱ Average View Duration</p>
                    <p>👥 Returning Viewers</p>

                    <p>
                    တစ်ပတ်တစ်ကြိမ် Best Performing Video ကို
                    ပြန်လေ့လာပါ။
                    </p>
                `
            }

        ]

    },


    monetization: {

        name: "💵 YouTube Monetization",

        lessons: [

            {
                title: "Monetization",

                content: `
                    <h3>💵 YouTube Monetization</h3>

                    <p>
                    Eligible ဖြစ်တဲ့ Creator တွေဟာ
                    YouTube Partner Program ကနေ
                    ဝင်ငွေရနိုင်ပါတယ်။
                    </p>

                    <h3>အရေးကြီးတာများ</h3>

                    <p>
                    Subscribers, Watch Hours, Views,
                    Audience Retention နဲ့ RPM တို့ကို
                    နားလည်ထားဖို့လိုပါတယ်။
                    </p>
                `
            },

            {
                title: "Ad Revenue",

                content: `
                    <h3>📺 Ad Revenue</h3>

                    <p>
                    YouTube Ads က Creator တွေအတွက်
                    အဓိကဝင်ငွေလမ်းကြောင်းတစ်ခု ဖြစ်ပါတယ်။
                    </p>

                    <p>
                    RPM က Audience, Country, Niche,
                    Content နဲ့ advertiser demand စတာတွေအပေါ်
                    မူတည်ပြီး ပြောင်းလဲနိုင်ပါတယ်။
                    </p>
                `
            },

            {
                title: "Affiliate Marketing",

                content: `
                    <h3>🔗 Affiliate Marketing</h3>

                    <p>
                    Product သို့မဟုတ် Service တစ်ခုကို
                    ကိုယ့် Audience ကို recommend လုပ်ပြီး
                    Affiliate Link အသုံးပြုနိုင်ပါတယ်။
                    </p>

                    <p>
                    သတ်မှတ်ချက်များအတိုင်း ဝယ်ယူမှုဖြစ်လာရင်
                    commission ရနိုင်ပါတယ်။
                    </p>
                `
            }

        ]

    },


    income: {

        name: "🚀 YouTube Income",

        lessons: [

            {
                title: "Sponsorship",

                content: `
                    <h3>🤝 Sponsorship</h3>

                    <p>
                    Brand တွေက Creator တွေနဲ့
                    ပူးပေါင်းပြီး Product/Service promotion
                    လုပ်နိုင်ပါတယ်။
                    </p>

                    <h3>Professional ဖြစ်ဖို့</h3>

                    <p>
                    Media Kit, Audience Information,
                    Channel Statistics နဲ့ Professional Content
                    တွေရှိထားတာက အရေးကြီးပါတယ်။
                    </p>
                `
            },

            {
                title: "Digital Products",

                content: `
                    <h3>📦 Digital Products</h3>

                    <p>
                    ကိုယ်ပိုင် eBook, Course, Template,
                    Guide စတဲ့ Digital Product တွေဖန်တီးပြီး
                    ရောင်းချနိုင်ပါတယ်။
                    </p>

                    <p>
                    YouTube ကို ကိုယ့် Product အတွက်
                    Traffic Source အဖြစ်အသုံးပြုနိုင်ပါတယ်။
                    </p>
                `
            },

            {
                title: "Income Calculator",

                content: `
                    <h3>🧮 YouTube Income Calculator</h3>

                    <p>
                    Estimated Revenue =
                    Views ÷ 1,000 × RPM
                    </p>

                    <div class="calculator">

                        <label>Monthly Views</label>

                        <input
                            type="number"
                            id="calcViews"
                            placeholder="Example: 100000"
                        >

                        <label>RPM ($)</label>

                        <input
                            type="number"
                            id="calcRPM"
                            placeholder="Example: 1"
                            step="0.01"
                        >

                        <button
                            class="green"
                            onclick="calculateIncome()">
                            Calculate
                        </button>

                        <div
                            id="calcResult"
                            class="result">
                        </div>

                    </div>
                `
            }

        ]

    }

};


/* ---------- COMPLETED LESSONS ---------- */

let completedLessons = [];

try{

    completedLessons =
        JSON.parse(
            localStorage.getItem("completedCourseLessons")
        ) || [];

}catch(error){

    completedLessons = [];

}


/* ---------- SAVE ---------- */

function saveLessons(){

    localStorage.setItem(
        "completedCourseLessons",
        JSON.stringify(completedLessons)
    );

}


/* ---------- KEY ---------- */

function lessonKey(courseId,index){

    return courseId + "_" + index;

}


/* ---------- COMPLETED CHECK ---------- */

function isCompleted(courseId,index){

    return completedLessons.includes(
        lessonKey(courseId,index)
    );

}


/* ---------- UNLOCK CHECK ---------- */

function isUnlocked(courseId,index){

    if(index === 0){
        return true;
    }

    return isCompleted(
        courseId,
        index - 1
    );

}


/* ---------- COURSE PROGRESS ---------- */

function courseProgress(courseId){

    const course =
        courses[courseId];

    let completed = 0;

    for(
        let i = 0;
        i < course.lessons.length;
        i++
    ){

        if(
            isCompleted(courseId,i)
        ){

            completed++;

        }

    }

    return Math.round(
        completed /
        course.lessons.length *
        100
    );

}


/* ---------- TOTAL LESSONS ---------- */

function totalCompletedLessons(){

    return completedLessons.length;

}


/* ---------- DASHBOARD ---------- */

function updateDashboard(){

    const lessonCount =
        Math.min(
            totalCompletedLessons(),
            10
        );


    localStorage.setItem(
        "lessonsCompleted",
        lessonCount
    );


    const subscriberElement =
        document.getElementById(
            "subscriberCount"
        );

    const watchElement =
        document.getElementById(
            "watchHours"
        );

    const incomeElement =
        document.getElementById(
            "monthlyIncome"
        );

    const lessonElement =
        document.getElementById(
            "lessonProgress"
        );


    if(subscriberElement){

        subscriberElement.innerText =
            subscribers.toLocaleString();

    }


    if(watchElement){

        watchElement.innerText =
            watchHours.toLocaleString();

    }


    if(incomeElement){

        incomeElement.innerText =
            "$" +
            monthlyIncome.toLocaleString();

    }


    if(lessonElement){

        lessonElement.innerText =
            Math.round(
                lessonCount / 10 * 100
            ) + "%";

    }


    updateProfessionalDashboard();

    updateOverall();

    updateAchievements();

    updateCourseCards();

    updateChallengeDashboard();

}


/* ---------- PROFESSIONAL DASHBOARD ---------- */

function updateProfessionalDashboard(){

    setText(
        "dashSubscribers",
        subscribers.toLocaleString() +
        " / 1,000"
    );

    setText(
        "dashWatchHours",
        watchHours.toLocaleString() +
        " / 4,000"
    );

    setText(
        "dashIncome",
        "$" +
        monthlyIncome.toLocaleString() +
        " / $1,000"
    );


    const lessons =
        Math.min(
            totalCompletedLessons(),
            10
        );


    setText(
        "dashLessons",
        lessons + " / 10"
    );


    setWidth(
        "subscriberGoalBar",
        subscribers / 1000 * 100
    );

    setWidth(
        "watchGoalBar",
        watchHours / 4000 * 100
    );

    setWidth(
        "incomeGoalBar",
        monthlyIncome / 1000 * 100
    );

    setWidth(
        "lessonGoalBar",
        lessons / 10 * 100
    );

}


/* ---------- OVERALL ---------- */

function updateOverall(){

    const subscriber =
        Math.min(
            subscribers / 1000 * 100,
            100
        );

    const watch =
        Math.min(
            watchHours / 4000 * 100,
            100
        );

    const lessons =
        Math.min(
            totalCompletedLessons() / 10 * 100,
            100
        );

    const challenge =
        Math.min(
            getChallengeProgress(),
            100
        );


    const overall =
        Math.round(
            (
                subscriber +
                watch +
                lessons +
                challenge
            ) / 4
        );


    setText(
        "overallProgressText",
        overall + "%"
    );

    setWidth(
        "overallProgressBar",
        overall
    );

}


/* ---------- ACHIEVEMENTS ---------- */

function updateAchievements(){

    unlock(
        "achievementSubscriber",
        subscribers >= 1000
    );

    unlock(
        "achievementWatch",
        watchHours >= 4000
    );

    unlock(
        "achievementLesson",
        totalCompletedLessons() >= 10
    );

    unlock(
        "achievementChallenge",
        challengeDays.length >= 30
    );

}


/* ---------- COURSE CARDS ---------- */

function updateCourseCards(){

    updateCourseCard(
        "beginner",
        "courseProgressBeginner",
        "courseBarBeginner"
    );

    updateCourseCard(
        "growth",
        "courseProgressGrowth",
        "courseBarGrowth"
    );

    updateCourseCard(
        "monetization",
        "courseProgressMonetization",
        "courseBarMonetization"
    );

    updateCourseCard(
        "income",
        "courseProgressIncome",
        "courseBarIncome"
    );

}


function updateCourseCard(
    courseId,
    textId,
    barId
){

    const course =
        courses[courseId];

    let completed = 0;

    for(
        let i = 0;
        i < course.lessons.length;
        i++
    ){

        if(
            isCompleted(courseId,i)
        ){

            completed++;

        }

    }


    setText(
        textId,
        completed +
        " / " +
        course.lessons.length +
        " Lessons"
    );


    setWidth(
        barId,
        courseProgress(courseId)
    );

}


/* ---------- SHOW COURSE ---------- */

function showCourse(courseId){

    const course =
        courses[courseId];

    if(!course){

        alert("Course not found.");

        return;

    }


    let html = `

        <button
            class="back-btn"
            onclick="goDashboard()">
            ← Back to Dashboard
        </button>

        <div class="lesson-page">

            <h2>${course.name}</h2>

            <p>
                Complete each lesson to unlock the next one.
            </p>

            <strong>
                ${courseProgress(courseId)}% Complete
            </strong>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${courseProgress(courseId)}%">
                </div>

            </div>

            <div class="lesson-list">

    `;


    for(
        let i = 0;
        i < course.lessons.length;
        i++
    ){

        const lesson =
            course.lessons[i];

        const completed =
            isCompleted(courseId,i);

        const unlocked =
            isUnlocked(courseId,i);


        if(completed){

            html += `

                <div class="lesson-item">

                    <div>

                        <div class="lesson-number">
                            Lesson ${i + 1}
                        </div>

                        <div class="lesson-name">
                            ✅ ${lesson.title}
                        </div>

                    </div>

                    <button
                        class="green"
                        onclick="showLesson('${courseId}',${i})">
                        Review
                    </button>

                </div>

            `;

        }
        else if(unlocked){

            html += `

                <div class="lesson-item">

                    <div>

                        <div class="lesson-number">
                            Lesson ${i + 1}
                        </div>

                        <div class="lesson-name">
                            📖 ${lesson.title}
                        </div>

                    </div>

                    <button
                        class="red"
                        onclick="showLesson('${courseId}',${i})">
                        Start
                    </button>

                </div>

            `;

        }
        else{

            html += `

                <div class="lesson-item locked">

                    <div>

                        <div class="lesson-number">
                            Lesson ${i + 1}
                        </div>

                        <div class="lesson-name">
                            🔒 ${lesson.title}
                        </div>

                    </div>

                    <button
                        class="dark"
                        disabled>
                        Locked
                    </button>

                </div>

            `;

        }

    }


    html += `

            </div>

        </div>

    `;


    document.getElementById("app").innerHTML =
        html;

    window.scrollTo(0,0);

}


/* ---------- SHOW LESSON ---------- */

function showLesson(courseId,index){

    const course =
        courses[courseId];

    if(!course){
        return;
    }


    const lesson =
        course.lessons[index];

    if(!lesson){
        return;
    }


    if(
        !isUnlocked(courseId,index)
    ){

        alert(
            "🔒 Complete the previous lesson first."
        );

        return;

    }


    const completed =
        isCompleted(courseId,index);


    let completeButton = "";


    if(completed){

        completeButton = `

            <button
                class="complete-btn"
                disabled>
                ✅ Lesson Completed
            </button>

        `;

    }
    else{

        completeButton = `

            <button
                class="complete-btn"
                onclick="completeLesson('${courseId}',${index})">
                ✅ Complete Lesson
            </button>

        `;

    }


    document.getElementById("app").innerHTML = `

        <button
            class="back-btn"
            onclick="showCourse('${courseId}')">
            ← Back to Course
        </button>

        <div class="lesson-page">

            <h2>
                Lesson ${index + 1}:
                ${lesson.title}
            </h2>

            <div class="lesson-content">

                ${lesson.content}

            </div>

            ${completeButton}

        </div>

    `;

    window.scrollTo(0,0);

}


/* ---------- COMPLETE LESSON ---------- */

function completeLesson(courseId,index){

    const key =
        lessonKey(courseId,index);


    if(
        completedLessons.includes(key)
    ){

        return;

    }


    completedLessons.push(key);

    saveLessons();


    updateDashboard();


    const course =
        courses[courseId];


    if(
        index === course.lessons.length - 1
    ){

        alert(
            "🎉 Course Completed!\n\n" +
            course.name
        );

    }
    else{

        alert(
            "✅ Lesson Completed!\n\n" +
            "Next lesson is unlocked! 🔓"
        );

    }


    showCourse(courseId);

}


/* ---------- CREATOR TOOLS ---------- */

function showTool(type){

    let title = "";
    let content = "";


    if(type === "start"){

        title =
            "📖 Start From Zero";

        content = `

            <h3>🌱 Start Your Channel</h3>

            <p>
            Choose a clear niche and create a professional
            YouTube channel.
            </p>

            <p>
            Start publishing consistently and improve
            based on your Analytics.
            </p>

        `;

    }


    if(type === "ai"){

        title =
            "🤖 AI YouTube Tools";

        content = `

            <h3>Use AI to save time</h3>

            <p>💡 Generate video ideas</p>
            <p>📝 Create scripts</p>
            <p>🎯 Generate titles</p>
            <p>📄 Write descriptions</p>
            <p>🖼 Create thumbnail concepts</p>

        `;

    }


    if(type === "challenge"){

        renderChallenge();

        return;

    }


    document.getElementById("app").innerHTML = `

        <button
            class="back-btn"
            onclick="goDashboard()">
            ← Back to Dashboard
        </button>

        <div class="lesson-page">

            <h2>${title}</h2>

            <div class="lesson-content">
                ${content}
            </div>

        </div>

    `;

    window.scrollTo(0,0);

}


/* ---------- CHALLENGE ---------- */

const challengeTasks = [

    "Choose your YouTube niche",
    "Create your YouTube channel",
    "Create channel branding",
    "Research 5 competitors",
    "Create 10 video ideas",
    "Write your first video script",
    "Create your first video",
    "Create your first thumbnail",
    "Upload your first video",
    "Study YouTube Analytics",
    "Improve your video title",
    "Improve your thumbnail",
    "Create your next video",
    "Upload your second video",
    "Study audience retention",
    "Create your first Short",
    "Create another Short",
    "Research YouTube keywords",
    "Create another video",
    "Upload another video",
    "Analyze your channel results",
    "Improve your video hook",
    "Create another video",
    "Upload another video",
    "Improve your thumbnail design",
    "Create another video",
    "Upload another video",
    "Analyze your channel",
    "Plan next month's content",
    "Review your 30-Day progress 🚀"

];


let challengeDays = [];

try{

    challengeDays =
        JSON.parse(
            localStorage.getItem("challengeDays")
        ) || [];

}catch(error){

    challengeDays = [];

}


function getChallengeProgress(){

    return Math.round(
        challengeDays.length /
        30 *
        100
    );

}


function updateChallengeDashboard(){

    setText(
        "challengeProgressText",
        challengeDays.length +
        " / 30 Days"
    );

    setWidth(
        "challengeProgressBar",
        getChallengeProgress()
    );

}


function renderChallenge(){

    let html = `

        <button
            class="back-btn"
            onclick="goDashboard()">
            ← Back to Dashboard
        </button>

        <div class="challenge">

            <h2>🔥 30-Day YouTube Challenge</h2>

            <p>
                Complete one task every day.
            </p>

            <strong>
                ${challengeDays.length} / 30 Days
            </strong>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${getChallengeProgress()}%">
                </div>

            </div>

    `;


    for(
        let i = 0;
        i < challengeTasks.length;
        i++
    ){

        const day =
            i + 1;

        const checked =
            challengeDays.includes(day)
            ? "checked"
            : "";


        html += `

            <div class="challenge-item">

                <label>

                    <input
                        type="checkbox"
                        ${checked}
                        onchange="toggleChallengeDay(${day})">

                    <strong>
                        Day ${day}
                    </strong>

                    — ${challengeTasks[i]}

                </label>

            </div>

        `;

    }


    html += `</div>`;


    document.getElementById("app").innerHTML =
        html;

    window.scrollTo(0,0);

}


function toggleChallengeDay(day){

    if(
        challengeDays.includes(day)
    ){

        challengeDays =
            challengeDays.filter(
                function(item){
                    return item !== day;
                }
            );

    }
    else{

        challengeDays.push(day);

    }


    challengeDays =
        [...new Set(challengeDays)]
        .sort(
            function(a,b){
                return a-b;
            }
        );


    localStorage.setItem(
        "challengeDays",
        JSON.stringify(challengeDays)
    );


    renderChallenge();

}


/* ---------- UPDATE SUBSCRIBERS ---------- */

function updateSubscribers(){

    const value =
        prompt(
            "Enter current subscribers:"
        );


    if(value === null){
        return;
    }


    const number =
        Number(value);


    if(
        !Number.isFinite(number) ||
        number < 0
    ){

        alert("Enter a valid number.");

        return;

    }


    subscribers =
        Math.floor(number);


    localStorage.setItem(
        "subscribers",
        subscribers
    );


    updateDashboard();

}


/* ---------- UPDATE WATCH HOURS ---------- */

function updateWatchHours(){

    const value =
        prompt(
            "Enter current watch hours:"
        );


    if(value === null){
        return;
    }


    const number =
        Number(value);


    if(
        !Number.isFinite(number) ||
        number < 0
    ){

        alert("Enter a valid number.");

        return;

    }


    watchHours =
        Math.floor(number);


    localStorage.setItem(
        "watchHours",
        watchHours
    );


    updateDashboard();

}


/* ---------- UPDATE INCOME ---------- */

function updateIncome(){

    const value =
        prompt(
            "Enter monthly YouTube income ($):"
        );


    if(value === null){
        return;
    }


    const number =
        Number(value);


    if(
        !Number.isFinite(number) ||
        number < 0
    ){

        alert("Enter a valid number.");

        return;

    }


    monthlyIncome =
        Math.floor(number);


    localStorage.setItem(
        "monthlyIncome",
        monthlyIncome
    );


    updateDashboard();

}


/* ---------- INCOME CALCULATOR ---------- */

function calculateIncome(){

    const views =
        Number(
            document.getElementById(
                "calcViews"
            ).value
        );


    const rpm =
        Number(
            document.getElementById(
                "calcRPM"
            ).value
        );


    const result =
        document.getElementById(
            "calcResult"
        );


    if(
        !Number.isFinite(views) ||
        !Number.isFinite(rpm) ||
        views < 0 ||
        rpm < 0
    ){

        result.innerText =
            "Please enter valid numbers.";

        return;

    }


    result.innerText =
        "Estimated Revenue: $" +
        (
            views / 1000 * rpm
        ).toFixed(2);

}


/* ---------- HELPERS ---------- */

function setText(id,value){

    const element =
        document.getElementById(id);

    if(element){

        element.innerText = value;

    }

}


function setWidth(id,value){

    const element =
        document.getElementById(id);

    if(element){

        const safe =
            Math.max(
                0,
                Math.min(
                    100,
                    value
                )
            );

        element.style.width =
            safe + "%";

    }

}


function unlock(id,status){

    const element =
        document.getElementById(id);

    if(!element){
        return;
    }

    if(status){

        element.classList.add(
            "unlocked"
        );

    }
    else{

        element.classList.remove(
            "unlocked"
        );

    }

}


/* ---------- BACK ---------- */

function goDashboard(){

    location.reload();

}


/* ---------- GLOBAL FUNCTIONS ---------- */

window.showCourse =
    showCourse;

window.showLesson =
    showLesson;

window.completeLesson =
    completeLesson;

window.showTool =
    showTool;

window.updateSubscribers =
    updateSubscribers;

window.updateWatchHours =
    updateWatchHours;

window.updateIncome =
    updateIncome;

window.calculateIncome =
    calculateIncome;

window.toggleChallengeDay =
    toggleChallengeDay;

window.goDashboard =
    goDashboard;


/* ---------- START ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateDashboard();

    }
);
