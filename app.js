// ================================
// ZERO TO HERO - YOUTUBE MONEY
// App JavaScript
// ================================

// YouTube Progress Data
let subscribers = Number(localStorage.getItem("subscribers")) || 0;
let watchHours = Number(localStorage.getItem("watchHours")) || 0;


// ================================
// UPDATE DASHBOARD
// ================================

function updateDashboard() {

    // Subscriber display
    document.getElementById("subscriberCount").textContent =
        subscribers.toLocaleString();

    // Watch Hours display
    document.getElementById("watchHours").textContent =
        watchHours.toLocaleString();

    // Monetization progress
    // Example target:
    // 1,000 Subscribers
    // 4,000 Watch Hours

    const subscriberProgress =
        Math.min((subscribers / 1000) * 100, 100);

    const watchProgress =
        Math.min((watchHours / 4000) * 100, 100);

    const progress =
        Math.round((subscriberProgress + watchProgress) / 2);

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("progressText").textContent =
        progress + "%";
}


// ================================
// UPDATE SUBSCRIBERS
// ================================

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

    subscribers = value;

    localStorage.setItem(
        "subscribers",
        subscribers
    );

    updateDashboard();
}


// ================================
// UPDATE WATCH HOURS
// ================================

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

    watchHours = value;

    localStorage.setItem(
        "watchHours",
        watchHours
    );

    updateDashboard();
}


// ================================
// LESSON SYSTEM
// ================================

function showMessage(title) {

    const lessons = {

        "Start From Zero":
        "🚀 START FROM ZERO\n\n" +
        "1. Create your YouTube channel\n" +
        "2. Choose a profitable niche\n" +
        "3. Create channel name\n" +
        "4. Create logo & banner\n" +
        "5. Upload your first video\n\n" +
        "Your journey starts today!",


        "Grow Your Channel":
        "📈 GROW YOUR CHANNEL\n\n" +
        "Focus on:\n\n" +
        "• CTR\n" +
        "• Watch Time\n" +
        "• Audience Retention\n" +
        "• Thumbnail\n" +
        "• Title\n" +
        "• SEO\n" +
        "• Consistent Uploads",


        "Monetization":
        "💰 YOUTUBE MONETIZATION\n\n" +
        "Learn about:\n\n" +
        "• YouTube Partner Program\n" +
        "• Ad Revenue\n" +
        "• Memberships\n" +
        "• Super Thanks\n" +
        "• Sponsorships\n" +
        "• Affiliate Marketing\n" +
        "• Digital Products",


        "Income Calculator":
        "🧮 INCOME CALCULATOR\n\n" +
        "Use the calculator to estimate\n" +
        "your possible YouTube income\n" +
        "based on views and RPM.",


        "AI YouTube Tools":
        "🤖 AI YOUTUBE TOOLS\n\n" +
        "You will learn how to use AI for:\n\n" +
        "• Video Ideas\n" +
        "• Titles\n" +
        "• Descriptions\n" +
        "• Scripts\n" +
        "• Thumbnail Prompts\n" +
        "• Content Planning",


        "30 Day Challenge":
        "🔥 30-DAY CHALLENGE\n\n" +
        "Day 1 → Create Channel\n" +
        "Day 2 → Choose Niche\n" +
        "Day 3 → Channel Branding\n" +
        "Day 4 → First Video Idea\n" +
        "Day 5 → Thumbnail\n" +
        "Day 6 → Upload\n" +
        "Day 7 → Analyze\n\n" +
        "Continue until Day 30!"
    };


    if (lessons[title]) {

        alert(lessons[title]);

    } else {

        alert(
            "🚀 " +
            title +
            "\n\n" +
            "This lesson will be available soon."
        );
    }
}


// ================================
// INCOME CALCULATOR
// ================================

function calculateIncome() {

    let views = prompt(
        "Enter monthly views:"
    );

    if (views === null) return;

    views = Number(views);

    if (isNaN(views) || views < 0) {

        alert("Please enter a valid number.");

        return;
    }


    let rpm = prompt(
        "Enter RPM ($):",
        "1"
    );

    if (rpm === null) return;

    rpm = Number(rpm);

    if (isNaN(rpm) || rpm < 0) {

        alert("Please enter a valid RPM.");

        return;
    }


    const income =
        (views / 1000) * rpm;


    alert(
        "💰 ESTIMATED YOUTUBE INCOME\n\n" +
        "Monthly Views: " +
        views.toLocaleString() +
        "\n\nRPM: $" +
        rpm.toFixed(2) +
        "\n\nEstimated Revenue: $" +
        income.toFixed(2)
    );
}


// ================================
// INCOME STREAM LESSONS
// ================================

function showIncome(title) {

    const incomeLessons = {

        "Ad Revenue":
        "📺 AD REVENUE\n\n" +
        "You can earn money from eligible\n" +
        "advertisements shown on your videos.\n\n" +
        "Revenue depends on views, audience,\n" +
        "content and RPM.",


        "Affiliate Marketing":
        "🔗 AFFILIATE MARKETING\n\n" +
        "Recommend useful products or services\n" +
        "and earn a commission when viewers\n" +
        "make qualifying purchases.",


        "Sponsorship":
        "🤝 SPONSORSHIP\n\n" +
        "Brands can pay creators to promote\n" +
        "their products or services.\n\n" +
        "Build audience + trust first.",


        "Digital Products":
        "📚 DIGITAL PRODUCTS\n\n" +
        "You can create:\n\n" +
        "• E-books\n" +
        "• Courses\n" +
        "• Templates\n" +
        "• Guides\n" +
        "• Digital tools"
    };


    if (incomeLessons[title]) {

        alert(incomeLessons[title]);

    } else {

        alert(title);
    }
}


// ================================
// START APP
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

    }
);
