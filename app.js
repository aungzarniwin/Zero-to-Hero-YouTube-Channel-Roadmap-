// ==========================================
// ZERO TO HERO
// YOUTUBE MONEY ACADEMY
// APP.JS V9
// ==========================================


// ================================
// DATA
// ================================

let subscribers =
    Number(localStorage.getItem("subscribers")) || 0;

let watchHours =
    Number(localStorage.getItem("watchHours")) || 0;

let monthlyIncome =
    Number(localStorage.getItem("monthlyIncome")) || 0;

let lessonsCompleted =
    Number(localStorage.getItem("lessonsCompleted")) || 0;


let challengeDays = [];

try {

    const saved =
        localStorage.getItem("challengeDays");

    if (saved) {

        const parsed =
            JSON.parse(saved);

        if (Array.isArray(parsed)) {

            challengeDays =
                parsed
                .map(Number)
                .filter(function(day){

                    return (
                        Number.isInteger(day) &&
                        day >= 1 &&
                        day <= 30
                    );

                });

        }

    }

} catch(error){

    challengeDays = [];

}


challengeDays =
    [...new Set(challengeDays)];

challengeDays.sort(function(a,b){

    return a-b;

});


// ================================
// 30 DAY CHALLENGE
// ================================

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


// ================================
// LESSON DATA
// ================================

const lessons = {

"Start From Zero": {

icon:"🚀",

title:"Start From Zero",

content:`

<h3>🚀 Start Your YouTube Journey</h3>

<p>
You don't need thousands of subscribers to start YouTube.
You only need to start.
</p>

<h4>Step 1 — Choose Your Niche</h4>

<p>
Choose a topic you can consistently create content about.
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

💡 Your first 10 videos are mainly for learning.

</div>

`

},


"Grow Your Channel": {

icon:"📈",

title:"Grow Your Channel",

content:`

<h3>📈 Grow Your YouTube Channel</h3>

<p>
Channel growth comes from creating videos
people want to click and watch.
</p>

<h4>1. CTR</h4>

<p>
Improve your title and thumbnail to increase clicks.
</p>

<h4>2. Retention</h4>

<p>
Keep viewers interested from the beginning to the end.
</p>

<h4>3. Watch Time</h4>

<p>
Useful viewing sessions can help build watch time.
</p>

<h4>4. Consistency</h4>

<p>
Create a realistic upload schedule and follow it.
</p>

<div class="lesson-tip">

🔥 Focus on CTR + Retention + Value.

</div>

`

},


"Monetization": {

icon:"💰",

title:"YouTube Monetization",

content:`

<h3>💰 YouTube Monetization</h3>

<p>
YouTube creators can build multiple income streams.
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

icon:"🧮",

title:"YouTube Income Calculator",

content:`

<h3>🧮 YouTube Income Calculator</h3>

<p>
Estimate possible advertising revenue using views and RPM.
</p>

<label>
Monthly Views
</label>

<input
id="calcViews"
type="number"
placeholder="100000"
>

<label>
RPM ($)
</label>

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

Enter your views and RPM.

</div>

`

},


"AI YouTube Tools": {

icon:"🤖",

title:"AI YouTube Tools",

content:`

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

💡 Use AI as a creative assistant,
not a replacement for your judgment.

</div>

`

},


"30 Day Challenge": {

icon:"🔥",

title:"30-Day YouTube Challenge",

content:`

<h3>🔥 30-Day YouTube Challenge</h3>

<p>
Complete one important action every day.
Check each day when you finish it.
</p>

<div id="challengeContainer"></div>

`

},


"Ad Revenue": {

icon:"📺",

title:"Ad Revenue",

content:`

<h3>📺 YouTube Ad Revenue</h3>

<p>
YouTube advertising revenue depends on factors
such as views, audience, ad demand and RPM.
</p>

<div class="lesson-tip">

💡 Views and RPM both affect advertising revenue.

</div>

`

},


"Affiliate Marketing": {

icon:"🔗",

title:"Affiliate Marketing",

content:`

<h3>🔗 Affiliate Marketing</h3>

<p>
Recommend useful products or services
and earn commissions from qualifying purchases.
</p>

<div class="lesson-tip">

💡 Recommend products relevant to your audience.

</div>

`

},


"Sponsorship": {

icon:"🤝",

title:"Sponsorship",

content:`

<h3>🤝 Sponsorship</h3>

<p>
Brands may pay creators to promote products or services.
</p>

<div class="lesson-tip">

💡 Build audience trust before accepting sponsorships.

</div>

`

},


"Digital Products": {

icon:"📚",

title:"Digital Products",

content:`

<h3>📚 Digital Products</h3>

<p>
Create and sell e-books, courses,
templates, guides or digital tools.
</p>

<div class="lesson-tip">

💡 Create products that solve a real problem.

</div>

`

}

};


// ================================
// PROGRESS
// ================================

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
        (subscriberProgress + watchProgress) / 2
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

    return Math.min(

        Math.max(

            Math.round(
                (
                    monetization +
                    lesson +
                    challenge
                ) / 3
            ),

            0

        ),

        100

    );

}


// ================================
// DASHBOARD
// ================================

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

        subscriberElement.textContent =
            subscribers.toLocaleString();

    }


    if(watchElement){

        watchElement.textContent =
            watchHours.toLocaleString();

    }


    if(incomeElement){

        incomeElement.textContent =
            "$" + monthlyIncome.toFixed(2);

    }


    const monetization =
        getMonetizationProgress();


    const progressText =
        document.getElementById(
            "progressText"
        );

    const progressBar =
        document.getElementById(
            "progressBar"
        );


    if(progressText){

        progressText.textContent =
            monetization + "%";

    }


    if(progressBar){

        progressBar.style.width =
            monetization + "%";

    }


    const lesson =
        getLessonProgress();


    if(lessonElement){

        lessonElement.textContent =
            lesson + "%";

    }


    updateChallengeDashboard();

    updateOverallProgress();

}


// ================================
// OVERALL PROGRESS
// ================================

function updateOverallProgress(){

    const overall =
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

        text.textContent =
            overall + "%";

    }


    if(bar){

        bar.style.width =
            overall + "%";

    }

}


// ================================
// CHALLENGE DASHBOARD
// ================================

function updateChallengeDashboard(){

    const completed =
        challengeDays.length;

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

        text.textContent =
            completed + " / 30";

    }


    if(bar){

        bar.style.width =
            progress + "%";

    }

}


// ================================
// UPDATE SUBSCRIBERS
// ================================

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
            "⚠️ Please enter a valid number."
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


// ================================
// UPDATE WATCH HOURS
// ================================

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
            "⚠️ Please enter a valid number."
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


// ================================
// UPDATE INCOME
// ================================

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
            "⚠️ Please enter a valid amount."
        );

        return;

    }


    monthlyIncome =
        number;


    localStorage.setItem(
        "monthlyIncome",
        monthlyIncome
    );


    updateDashboard();


    alert(
        "💰 Monthly income updated!"
    );

}


// ================================
// SHOW LESSON
// ================================

function showMessage(title){

    const lesson =
        lessons[title];


    if(!lesson){

        alert(
            "Lesson coming soon!"
        );

        return;

    }


    if(
        title !== "30 Day Challenge"
    ){

        lessonsCompleted =
            Math.min(
                lessonsCompleted + 1,
                10
            );


        localStorage.setItem(
            "lessonsCompleted",
            lessonsCompleted
        );

    }


    const app =
        document.getElementById(
            "app"
        );


    if(!app){

        return;

    }


    app.innerHTML = `

        <button
            class="back-button"
            onclick="goDashboard()">

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


    if(
        title === "30 Day Challenge"
    ){

        renderChallenge();

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


// ================================
// GO DASHBOARD
// ================================

function goDashboard(){

    location.reload();

}


// ================================
// RENDER CHALLENGE
// ================================

function renderChallenge(){

    const container =
        document.getElementById(
            "challengeContainer"
        );


    if(!container){

        return;

    }


    const completed =
        challengeDays.length;

    const progress =
        getChallengeProgress();


    let html = `

        <div style="
            background:#f3f4f6;
            padding:18px;
            border-radius:12px;
            margin:20px 0;
        ">

            <strong>
                🔥 Challenge Progress
            </strong>


            <div style="
                margin-top:10px;
                height:14px;
                background:#e5e7eb;
                border-radius:20px;
                overflow:hidden;
            ">

                <div style="
                    height:100%;
                    width:${progress}%;
                    background:#047857;
                    transition:.3s;
                "></div>

            </div>


            <p style="
                margin-top:10px;
                font-weight:bold;
            ">

                ${completed} / 30 Days Completed
                — ${progress}%

            </p>

        </div>


        <div class="challenge-list">

    `;


    challengeTasks.forEach(
        function(task,index){

            const day =
                index + 1;


            const checked =
                challengeDays.includes(day);


            html += `

                <div class="challenge-day">

                    <input
                        type="checkbox"
                        id="day${day}"
                        ${checked ? "checked" : ""}
                        onchange="toggleChallengeDay(${day})"
                    >


                    <label for="day${day}">

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

    `;


    if(completed === 30){

        html += `

            <div class="challenge-complete">

                🎉 Congratulations!

                <br><br>

                You completed the
                30-Day YouTube Challenge! 🚀

            </div>

        `;

    }


    container.innerHTML =
        html;

}


// ================================
// TOGGLE CHALLENGE
// ================================

function toggleChallengeDay(day){

    const numericDay =
        Number(day);


    if(
        challengeDays.includes(numericDay)
    ){

        challengeDays =
            challengeDays.filter(
                function(item){

                    return item !== numericDay;

                }
            );

    }else{

        challengeDays.push(
            numericDay
        );

    }


    challengeDays =
        [...new Set(challengeDays)];


    challengeDays.sort(
        function(a,b){

            return a-b;

        }
    );


    localStorage.setItem(
        "challengeDays",
        JSON.stringify(
            challengeDays
        )
    );


    renderChallenge();

    updateChallengeDashboard();

    updateOverallProgress();

}


// ================================
// INCOME CALCULATOR
// ================================

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
            "incomeResult"
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


// ================================
// MAKE FUNCTIONS GLOBAL
// ================================

window.showMessage =
    showMessage;

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


// ================================
// START APP
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateDashboard();

    }
);
