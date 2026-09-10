/* =====================================================
   ZERO TO HERO - YOUTUBE MONEY ACADEMY
   V11 COURSE SYSTEM
===================================================== */


/* =========================
   BASIC DATA
========================= */

let subscribers =
    Number(localStorage.getItem("subscribers")) || 0;

let watchHours =
    Number(localStorage.getItem("watchHours")) || 0;

let monthlyIncome =
    Number(localStorage.getItem("monthlyIncome")) || 0;

let lessonsCompleted =
    Number(localStorage.getItem("lessonsCompleted")) || 0;


/* =========================
   30 DAY CHALLENGE
========================= */

let challengeDays = [];

try {
    challengeDays =
        JSON.parse(localStorage.getItem("challengeDays")) || [];
} catch (error) {
    challengeDays = [];
}


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


/* =========================
   OLD LESSON CONTENT
========================= */

const lessons = {

    "Start From Zero": {
        title: "🌱 Start From Zero",
        content: `
            <h3>Step 1 — Choose Your Niche</h3>
            <p>
                Choose one clear topic for your YouTube channel.
                Examples: Music, Education, Food, Technology,
                Gaming, Business and Lifestyle.
            </p>

            <h3>Step 2 — Create Your Channel</h3>
            <p>
                Create a professional channel name, profile picture,
                banner and description.
            </p>

            <h3>Step 3 — Start Creating</h3>
            <p>
                Your first goal is not perfection.
                Your goal is to publish consistently and learn.
            </p>
        `
    },


    "Grow Your Channel": {
        title: "📈 Grow Your Channel",
        content: `
            <h3>Focus on 3 Things</h3>

            <p>
                1. Click-through rate (CTR)
            </p>

            <p>
                2. Audience retention
            </p>

            <p>
                3. Consistent content
            </p>

            <h3>Simple Growth Strategy</h3>

            <p>
                Study videos that are already performing well
                in your niche and create better versions
                with your own original value.
            </p>
        `
    },


    "Monetization": {
        title: "💰 YouTube Monetization",
        content: `
            <h3>YouTube Partner Program</h3>

            <p>
                YouTube monetization allows eligible creators
                to earn money from their content.
            </p>

            <h3>Important Metrics</h3>

            <p>
                Subscribers, watch hours, views,
                audience retention and RPM are important
                metrics for understanding your channel.
            </p>
        `
    },


    "Income Calculator": {
        title: "🧮 Income Calculator",
        content: `
            <h3>YouTube Revenue Formula</h3>

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
                    onclick="calculateIncome()"
                >
                    Calculate Income
                </button>

                <div
                    id="calcResult"
                    class="result"
                ></div>

            </div>
        `
    },


    "AI YouTube Tools": {
        title: "🤖 AI YouTube Tools",
        content: `
            <h3>Use AI to Work Faster</h3>

            <p>
                AI can help you generate video ideas,
                titles, descriptions, scripts and thumbnail concepts.
            </p>

            <h3>Simple Workflow</h3>

            <p>
                Idea → Script → Recording → Editing →
                Thumbnail → Upload → Analytics
            </p>
        `
    },


    "30 Day Challenge": {
        title: "🔥 30-Day YouTube Challenge",
        content: `
            <p>
                Complete one YouTube task every day
                for 30 days.
            </p>
        `
    },


    "Ad Revenue": {
        title: "📺 Ad Revenue",
        content: `
            <h3>YouTube Ads</h3>

            <p>
                Advertising is one of the main income streams
                for monetized YouTube channels.
            </p>

            <p>
                Revenue can vary depending on audience,
                country, niche, views and RPM.
            </p>
        `
    },


    "Affiliate Marketing": {
        title: "🔗 Affiliate Marketing",
        content: `
            <h3>How Affiliate Marketing Works</h3>

            <p>
                You recommend a product or service using
                an affiliate link.
            </p>

            <p>
                When someone purchases through your link,
                you may receive a commission.
            </p>
        `
    },


    "Sponsorship": {
        title: "🤝 Sponsorship",
        content: `
            <h3>Brand Sponsorship</h3>

            <p>
                Brands may pay creators to promote their
                products or services.
            </p>

            <p>
                A professional media kit, audience profile
                and consistent content can help attract sponsors.
            </p>
        `
    },


    "Digital Products": {
        title: "📦 Digital Products",
        content: `
            <h3>Create Your Own Product</h3>

            <p>
                You can create ebooks, courses, templates,
                guides or other digital products.
            </p>

            <p>
                YouTube can be used as a traffic source
                to promote your own products.
            </p>
        `
    }

};


/* =====================================================
   V11 COURSE SYSTEM
===================================================== */

const courses = {

    beginner: {

        name: "🌱 YouTube Beginner",

        description:
            "Build your YouTube foundation from zero.",

        lessons: [

            {
                title: "Start From Zero",
                content: lessons["Start From Zero"].content
            },

            {
                title: "AI YouTube Tools",
                content: lessons["AI YouTube Tools"].content
            }

        ]

    },


    growth: {

        name: "📈 Channel Growth",

        description:
            "Learn how to grow views, subscribers and engagement.",

        lessons: [

            {
                title: "Grow Your Channel",
                content: lessons["Grow Your Channel"].content
            },

            {
                title: "YouTube Analytics",
                content: `
                    <h3>📊 Understand Your Analytics</h3>

                    <p>
                        YouTube Analytics helps you understand
                        what is working on your channel.
                    </p>

                    <h3>Important Metrics</h3>

                    <p>
                        👀 Views
                    </p>

                    <p>
                        🖱 Click-through rate (CTR)
                    </p>

                    <p>
                        ⏱ Average view duration
                    </p>

                    <p>
                        👥 Returning viewers
                    </p>

                    <h3>Action</h3>

                    <p>
                        Every week, identify your best-performing
                        video and learn why it performed well.
                    </p>
                `
            }

        ]

    },


    monetization: {

        name: "💵 YouTube Monetization",

        description:
            "Learn the main ways YouTube creators can earn money.",

        lessons: [

            {
                title: "Monetization",
                content: lessons["Monetization"].content
            },

            {
                title: "Ad Revenue",
                content: lessons["Ad Revenue"].content
            },

            {
                title: "Affiliate Marketing",
                content: lessons["Affiliate Marketing"].content
            }

        ]

    },


    income: {

        name: "🚀 YouTube Income",

        description:
            "Build multiple income streams from your audience.",

        lessons: [

            {
                title: "Sponsorship",
                content: lessons["Sponsorship"].content
            },

            {
                title: "Digital Products",
                content: lessons["Digital Products"].content
            },

            {
                title: "Income Calculator",
                content: lessons["Income Calculator"].content
            }

        ]

    }

};


/* =========================
   COMPLETED COURSE LESSONS
========================= */

let completedCourseLessons = [];

try {

    completedCourseLessons =
        JSON.parse(
            localStorage.getItem("completedCourseLessons")
        ) || [];

} catch (error) {

    completedCourseLessons = [];

}


/* =========================
   SAVE COURSE PROGRESS
========================= */

function saveCourseProgress(){

    localStorage.setItem(
        "completedCourseLessons",
        JSON.stringify(completedCourseLessons)
    );

}


/* =========================
   CHECK COMPLETED
========================= */

function isLessonCompleted(courseId, lessonIndex){

    const key =
        courseId + "-" + lessonIndex;

    return completedCourseLessons.includes(key);

}


/* =========================
   CHECK UNLOCKED
========================= */

function isLessonUnlocked(courseId, lessonIndex){

    if(lessonIndex === 0){
        return true;
    }

    return isLessonCompleted(
        courseId,
        lessonIndex - 1
    );

}


/* =========================
   COURSE PROGRESS
========================= */

function getCourseProgress(courseId){

    const course = courses[courseId];

    if(!course){
        return 0;
    }

    let completed = 0;

    course.lessons.forEach(function(lesson,index){

        if(
            isLessonCompleted(
                courseId,
                index
            )
        ){

            completed++;

        }

    });

    return Math.round(
        (completed / course.lessons.length) * 100
    );

}


/* =========================
   TOTAL COURSE LESSONS
========================= */

function getTotalCourseCompleted(){

    return completedCourseLessons.length;

}


/* =========================
   UPDATE COURSE CARDS
========================= */

function updateCourseCards(){

    const mapping = {

        beginner: {
            text:"courseProgressBeginner",
            bar:"courseBarBeginner"
        },

        growth: {
            text:"courseProgressGrowth",
            bar:"courseBarGrowth"
        },

        monetization: {
            text:"courseProgressMonetization",
            bar:"courseBarMonetization"
        },

        income: {
            text:"courseProgressIncome",
            bar:"courseBarIncome"
        }

    };


    Object.keys(mapping).forEach(function(courseId){

        const course =
            courses[courseId];

        const completed =
            course.lessons.filter(
                function(lesson,index){

                    return isLessonCompleted(
                        courseId,
                        index
                    );

                }
            ).length;


        const total =
            course.lessons.length;


        const progress =
            Math.round(
                (completed / total) * 100
            );


        const textElement =
            document.getElementById(
                mapping[courseId].text
            );

        const barElement =
            document.getElementById(
                mapping[courseId].bar
            );


        if(textElement){

            textElement.innerText =
                completed + " / " + total + " Lessons";

        }


        if(barElement){

            barElement.style.width =
                progress + "%";

        }

    });

}


/* =====================================================
   SHOW COURSE
===================================================== */

function showCourse(courseId){

    const course =
        courses[courseId];

    if(!course){
        return;
    }


    let html = `

        <button
            class="back-btn"
            onclick="goDashboard()"
        >
            ← Back to Dashboard
        </button>

        <div class="lesson-page">

            <h2>${course.name}</h2>

            <p>
                ${course.description}
            </p>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${getCourseProgress(courseId)}%"
                ></div>

            </div>

            <strong>
                ${getCourseProgress(courseId)}% Complete
            </strong>

            <div class="lesson-list">

    `;


    course.lessons.forEach(
        function(lesson,index){

            const completed =
                isLessonCompleted(
                    courseId,
                    index
                );


            const unlocked =
                isLessonUnlocked(
                    courseId,
                    index
                );


            if(completed){

                html += `

                    <div class="lesson-item">

                        <div class="lesson-info">

                            <div class="lesson-number">
                                Lesson ${index + 1}
                            </div>

                            <div class="lesson-name">
                                ✅ ${lesson.title}
                            </div>

                        </div>

                        <button
                            class="green"
                            onclick="showCourseLesson('${courseId}',${index})"
                        >
                            Review
                        </button>

                    </div>

                `;

            }
            else if(unlocked){

                html += `

                    <div class="lesson-item">

                        <div class="lesson-info">

                            <div class="lesson-number">
                                Lesson ${index + 1}
                            </div>

                            <div class="lesson-name">
                                📖 ${lesson.title}
                            </div>

                        </div>

                        <button
                            class="red"
                            onclick="showCourseLesson('${courseId}',${index})"
                        >
                            Start
                        </button>

                    </div>

                `;

            }
            else{

                html += `

                    <div class="lesson-item locked">

                        <div class="lesson-info">

                            <div class="lesson-number">
                                Lesson ${index + 1}
                            </div>

                            <div class="lesson-name">
                                🔒 ${lesson.title}
                            </div>

                        </div>

                        <button
                            class="dark"
                            disabled
                        >
                            Locked
                        </button>

                    </div>

                `;

            }

        }
    );


    html += `

            </div>

        </div>

    `;


    document.getElementById("app").innerHTML =
        html;

    window.scrollTo(0,0);

}


/* =====================================================
   SHOW COURSE LESSON
===================================================== */

function showCourseLesson(courseId,lessonIndex){

    const course =
        courses[courseId];

    if(!course){
        return;
    }


    const lesson =
        course.lessons[lessonIndex];

    if(!lesson){
        return;
    }


    if(
        !isLessonUnlocked(
            courseId,
            lessonIndex
        )
    ){

        alert(
            "🔒 Complete the previous lesson first."
        );

        return;

    }


    const completed =
        isLessonCompleted(
            courseId,
            lessonIndex
        );


    let buttonHTML = "";


    if(completed){

        buttonHTML = `

            <button
                class="complete-btn"
                disabled
            >
                ✅ Lesson Completed
            </button>

        `;

    }
    else{

        buttonHTML = `

            <button
                class="complete-btn"
                onclick="completeCourseLesson('${courseId}',${lessonIndex})"
            >
                ✅ Complete Lesson
            </button>

        `;

    }


    document.getElementById("app").innerHTML = `

        <button
            class="back-btn"
            onclick="showCourse('${courseId}')"
        >
            ← Back to Course
        </button>

        <div class="lesson-page">

            <h2>
                Lesson ${lessonIndex + 1}:
                ${lesson.title}
            </h2>

            <div class="lesson-content">

                ${lesson.content}

            </div>

            ${buttonHTML}

        </div>

    `;


    window.scrollTo(0,0);

}


/* =====================================================
   COMPLETE COURSE LESSON
===================================================== */

function completeCourseLesson(courseId,lessonIndex){

    const key =
        courseId + "-" + lessonIndex;


    if(
        completedCourseLessons.includes(key)
    ){

        return;

    }


    completedCourseLessons.push(key);


    saveCourseProgress();


    /*
       Keep old dashboard lesson count
       synchronized with course completion.
    */

    lessonsCompleted =
        Math.min(
            getTotalCourseCompleted(),
            10
        );


    localStorage.setItem(
        "lessonsCompleted",
        lessonsCompleted
    );


    updateDashboard();


    const course =
        courses[courseId];


    if(
        lessonIndex ===
        course.lessons.length - 1
    ){

        alert(
            "🎉 Course Completed!\n\n" +
            course.name +
            "\n\nGreat job! 🚀"
        );

    }
    else{

        alert(
            "✅ Lesson Completed!\n\n" +
            "Next lesson is now unlocked! 🔓"
        );

    }


    showCourse(courseId);

}


/* =====================================================
   DASHBOARD PROGRESS
===================================================== */

function getMonetizationProgress(){

    const subscriberProgress =
        Math.min(
            (subscribers / 1000) * 100,
            100
        );


    const watchProgress =
        Math.min(
            (watchHours / 4000) * 100,
            100
        );


    return Math.round(
        (
            subscriberProgress +
            watchProgress
        ) / 2
    );

}


function getLessonProgress(){

    return Math.min(
        Math.round(
            (lessonsCompleted / 10) * 100
        ),
        100
    );

}


function getChallengeProgress(){

    return Math.min(
        Math.round(
            (challengeDays.length / 30) * 100
        ),
        100
    );

}


function getOverallProgress(){

    const monetization =
        getMonetizationProgress();

    const lesson =
        getLessonProgress();

    const challenge =
        getChallengeProgress();


    return Math.round(
        (
            monetization +
            lesson +
            challenge
        ) / 3
    );

}


/* =====================================================
   PROFESSIONAL DASHBOARD
===================================================== */

function updateProfessionalDashboard(){

    const subscriberPercent =
        Math.min(
            (subscribers / 1000) * 100,
            100
        );


    const watchPercent =
        Math.min(
            (watchHours / 4000) * 100,
            100
        );


    const incomePercent =
        Math.min(
            (monthlyIncome / 1000) * 100,
            100
        );


    const lessonPercent =
        Math.min(
            (lessonsCompleted / 10) * 100,
            100
        );


    const dashSubscribers =
        document.getElementById(
            "dashSubscribers"
        );

    const dashWatchHours =
        document.getElementById(
            "dashWatchHours"
        );

    const dashIncome =
        document.getElementById(
            "dashIncome"
        );

    const dashLessons =
        document.getElementById(
            "dashLessons"
        );


    if(dashSubscribers){

        dashSubscribers.innerText =
            subscribers.toLocaleString() +
            " / 1,000";

    }


    if(dashWatchHours){

        dashWatchHours.innerText =
            watchHours.toLocaleString() +
            " / 4,000";

    }


    if(dashIncome){

        dashIncome.innerText =
            "$" +
            monthlyIncome.toLocaleString() +
            " / $1,000";

    }


    if(dashLessons){

        dashLessons.innerText =
            lessonsCompleted +
            " / 10";

    }


    const subscriberBar =
        document.getElementById(
            "subscriberGoalBar"
        );

    const watchBar =
        document.getElementById(
            "watchGoalBar"
        );

    const incomeBar =
        document.getElementById(
            "incomeGoalBar"
        );

    const lessonBar =
        document.getElementById(
            "lessonGoalBar"
        );


    if(subscriberBar){
        subscriberBar.style.width =
            subscriberPercent + "%";
    }


    if(watchBar){
        watchBar.style.width =
            watchPercent + "%";
    }


    if(incomeBar){
        incomeBar.style.width =
            incomePercent + "%";
    }


    if(lessonBar){
        lessonBar.style.width =
            lessonPercent + "%";
    }

}


/* =====================================================
   CHALLENGE DASHBOARD
===================================================== */

function updateChallengeDashboard(){

    const progress =
        getChallengeProgress();


    const text =
        document.getElementById(
            "challengeProgressText"
        );


    const bar =
        document.getElementById(
            "challengeProgressBar"
        );


    if(text){

        text.innerText =
            challengeDays.length +
            " / 30 Days";

    }


    if(bar){

        bar.style.width =
            progress + "%";

    }

}


/* =====================================================
   OVERALL PROGRESS
===================================================== */

function updateOverallProgress(){

    const progress =
        getOverallProgress();


    const text =
        document.getElementById(
            "overallProgressText"
        );


    const bar =
        document.getElementById(
            "overallProgressBar"
        );


    if(text){

        text.innerText =
            progress + "%";

    }


    if(bar){

        bar.style.width =
            progress + "%";

    }

}


/* =====================================================
   ACHIEVEMENTS
===================================================== */

function updateAchievements(){

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

    const challengeBadge =
        document.getElementById(
            "achievementChallenge"
        );


    if(
        subscriberBadge &&
        subscribers >= 1000
    ){

        subscriberBadge.classList.add(
            "unlocked"
        );

    }


    if(
        watchBadge &&
        watchHours >= 4000
    ){

        watchBadge.classList.add(
            "unlocked"
        );

    }


    if(
        lessonBadge &&
        lessonsCompleted >= 10
    ){

        lessonBadge.classList.add(
            "unlocked"
        );

    }


    if(
        challengeBadge &&
        challengeDays.length >= 30
    ){

        challengeBadge.classList.add(
            "unlocked"
        );

    }

}


/* =====================================================
   UPDATE DASHBOARD
===================================================== */

function updateDashboard(){

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
            getLessonProgress() + "%";

    }


    updateProfessionalDashboard();

    updateChallengeDashboard();

    updateOverallProgress();

    updateAchievements();

    updateCourseCards();

}


/* =====================================================
   UPDATE SUBSCRIBERS
===================================================== */

function updateSubscribers(){

    const value =
        prompt(
            "Enter your current subscribers:"
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

        alert(
            "Please enter a valid number."
        );

        return;

    }


    subscribers =
        Math.floor(number);


    localStorage.setItem(
        "subscribers",
        subscribers
    );


    updateDashboard();


    alert(
        "✅ Subscribers updated!"
    );

}


/* =====================================================
   UPDATE WATCH HOURS
===================================================== */

function updateWatchHours(){

    const value =
        prompt(
            "Enter your current watch hours:"
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

        alert(
            "Please enter a valid number."
        );

        return;

    }


    watchHours =
        Math.floor(number);


    localStorage.setItem(
        "watchHours",
        watchHours
    );


    updateDashboard();


    alert(
        "✅ Watch hours updated!"
    );

}


/* =====================================================
   UPDATE INCOME
===================================================== */

function updateIncome(){

    const value =
        prompt(
            "Enter your monthly YouTube income ($):"
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

        alert(
            "Please enter a valid number."
        );

        return;

    }


    monthlyIncome =
        Math.floor(number);


    localStorage.setItem(
        "monthlyIncome",
        monthlyIncome
    );


    updateDashboard();


    alert(
        "✅ Income updated!"
    );

}


/* =====================================================
   OLD LESSON SYSTEM
===================================================== */

function showMessage(title){

    const lesson =
        lessons[title];


    if(!lesson){
        return;
    }


    if(title === "30 Day Challenge"){

        document.getElementById("app").innerHTML = `

            <button
                class="back-btn"
                onclick="goDashboard()"
            >
                ← Back to Dashboard
            </button>

            <div class="lesson-page">

                <h2>${lesson.title}</h2>

                ${lesson.content}

            </div>

        `;

        renderChallenge();

        return;

    }


    document.getElementById("app").innerHTML = `

        <button
            class="back-btn"
            onclick="goDashboard()"
        >
            ← Back to Dashboard
        </button>

        <div class="lesson-page">

            <h2>${lesson.title}</h2>

            <div class="lesson-content">

                ${lesson.content}

            </div>

        </div>

    `;


    window.scrollTo(0,0);

}


/* =====================================================
   GO DASHBOARD
===================================================== */

function goDashboard(){

    location.reload();

}


/* =====================================================
   RENDER CHALLENGE
===================================================== */

function renderChallenge(){

    let html = `

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
                    style="width:${getChallengeProgress()}%"
                ></div>

            </div>

            <div>

    `;


    challengeTasks.forEach(
        function(task,index){

            const day =
                index + 1;

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
                            onchange="toggleChallengeDay(${day})"
                        >

                        <strong>
                            Day ${day}
                        </strong>

                        — ${task}

                    </label>

                </div>

            `;

        }
    );


    html += `

            </div>

        </div>

    `;


    document.getElementById("app").innerHTML +=
        html;

}


/* =====================================================
   TOGGLE CHALLENGE
===================================================== */

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

    updateDashboard();

}


/* =====================================================
   INCOME CALCULATOR
===================================================== */

function calculateIncome(){

    const viewsElement =
        document.getElementById(
            "calcViews"
        );


    const rpmElement =
        document.getElementById(
            "calcRPM"
        );


    const result =
        document.getElementById(
            "calcResult"
        );


    if(
        !viewsElement ||
        !rpmElement ||
        !result
    ){

        return;

    }


    const views =
        Number(
            viewsElement.value
        );


    const rpm =
        Number(
            rpmElement.value
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


    const income =
        (views / 1000) * rpm;


    result.innerText =
        "Estimated Revenue: $" +
        income.toFixed(2);

}


/* =====================================================
   GLOBAL FUNCTIONS
===================================================== */

window.showMessage =
    showMessage;

window.showCourse =
    showCourse;

window.showCourseLesson =
    showCourseLesson;

window.completeCourseLesson =
    completeCourseLesson;

window.updateSubscribers =
    updateSubscribers;

window.updateWatchHours =
    updateWatchHours;

window.updateIncome =
    updateIncome;

window.goDashboard =
    goDashboard;

window.toggleChallengeDay =
    toggleChallengeDay;

window.calculateIncome =
    calculateIncome;


/* =====================================================
   START APP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateDashboard();

    }
);
