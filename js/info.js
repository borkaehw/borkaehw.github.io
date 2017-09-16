// information

var id = {
    "head": ["name-head", "workexperience-head", "education-head", "project-head", "skill-head", "biography-head", "extracurricular-head"],
    "contact": ["linkedin", "github", "facebook", "twitter", "mobile", "email"],
    "work" : {
        "parttime": ["parttime-name", "parttime-loc", "parttime-startdate", "parttime-enddate"],
        "intern": ["intern-name", "intern-loc", "intern-startdate", "intern-enddate"],
    },
    "school": {
        "grad": ["grad-name", "grad-loc", "grad-degree", "grad-gpa", "grad-major", "grad-course", "grad-from", "grad-to"],
        "gradCourse": ["grad-course-list"],
        "undergrad": ["undergrad-name", "undergrad-loc", "undergrad-degree", "undergrad-gpa", "undergrad-major", "undergrad-course", "undergrad-from", "undergrad-to"],
        "undergradCourse": ["undergrad-course-list"]
    },
    "project": {
        "title": ["p1", "p2", "p3", "p4", "p5"],
        "content": ["p1-content", "p2-content", "p3-content", "p4-content", "p5-content"]
    },
    "skill": {
        "title": ["pro-lang-title", "database-title", "web-title", "tool-title"],
        "content": ["pro-lang", "database", "web", "tool"]
    },
    "biography": ["bio-content"],
    "extra": {
        "title": ["extra1", "extra2", "extra3"]
    }
};

var english = {
    "head": ["Kevin Hwang", "Work Experience", "Education", "Project", "Skills", "Biography", "Extracurricular Activities"],
    "contact": [
        "https://www.linkedin.com/in/borkaehwang", 
        "https://github.com/borkaehw", 
        "https://www.facebook.com/profile.php?id=100000219184369",
        "https://twitter.com/hi89757",
        "+1 734-548-7072", 
        "borkaehw@umich.edu"],
    "work" : {
        "parttime": ["UMTRI", "Ann Arbor, MI, USA", "Sep 2017", "Present"],
        "intern": ["Clinc, Inc.", "Ann Arbor, MI, USA", "May 2017", "August 2017"],
    },
    "school": {
        "grad": ["Univerisity of Michigan", "Ann Arbor, MI, USA", "Master", "GPA 3.7", "Electrical and Computer Engineering", "Courses", "September 2016", "April 2018"],
        "gradCourse": ["Operating Systems", "Database Management Systems", "Machine Learning", "Self-Driving Car", "Big Data Systems", "Matrix Methods", "Probability and Random Process"],
        "undergrad": ["National Tsing Hua University", "Hsinchu, Taiwan", "Bachelor", "GPA 4.05", "Electrical Engineering", "Courses", "September 2011", "June 2015"],
        "undergradCourse": ["Digital Signal Processing", "Operating Systems", "Data Structures", "Computer Architecture", "Signals and Systems"]
    },
    "project": {
        "title": [
            "Front-End Web Design: Starkque", 
            "Multi-class AdaBoost Algorithms Comparison", 
            "2D Indoor Positioning System through Android Game App", 
            "Augmented Reality Implementation with Box Man", 
            "Image and Audio Processing with Paper Keyboard"],
        "content": [
            "I am planning to build a social media with simple features, users can play games, post photos and articles. I Implement responsive web design for all size of device screen using Bootstrap, combined with MySQL and PHP for back-end support. Currently working on interface design, most of the parts are still under construction.", 
            "AdaBoost is a method to improve the performance of classification problem. Normally, classification problem will only use one classifier to determine the label, error is often high with this primitive method. In this project, we use decision tree as weak classifier, and classify the data set first round. At the next round, we will put more weight on misclassified data samples, and do the second round. Since we put more emphasis on misclassified data samples, they have higher chance to be correctly classified. The same procedure goes on several times keeping updating the weight of misclassified data samples. At the end, error drop dramatically. The goal of this project is to compare the pros and cons of different versions of AdaBoost (use teacher teaching a class as example), which means the different ways of updating the weight of misclassified data samples. We compare in total of three versions.", 
            "We put several bluetooth beacons on different locations in a space and used Android phone as signal receiver. Then we used RSSI, which stands for received signal strength indicator, as a measurement for calculating the distance between beacons and smartphone. With the distance data, we could detect the approximate location of users, and we used INS, inertial navigation system, as compensation for RSSI signal error, which is inevitable due to objects in the surrounding. Furthermore, we put RSSI and INS data into Kalman filter which improves location prediction up to 20%. Other DSP related technologies were used to erase sensor noise. Among all, my job was Android development and Bluetooth signal optimization. ", 
            "We used Webcam to record real world and the marker. The marker is a reference point between virtual world and real world. Then we projected a box man into the Webcam recorded world by coordinate transformation. We can also control the box man to walk, skate, and teleport.", 
            "At first, We recorded human voice at only a single pitch, and we used DSP to simulate piano sound at every pitch. It sounds like a person is singing like a piano. In order to detect motions of playing the piano, we used a color filter to distinguish red, green, and blue on the image recorded by webcam. We chose a color which is obvious under the filter as our indicator for 'press' action on the paper keyboard. Then we can demonstrate piano keyboard with classic music 'I dreamed a dream'."]
    },
    "skill": {
        "title": ["Languages", "Databases", "Web", "Tools"],
        "content": ["Python, Ruby, Java, C/C++, Swift", "SQL, Oracle SQL*Plus, MySQL", "HTML, CSS, JavaScript (jQuery), Bootstrap, PHP", "Git, MATLAB"]
    },
    "extra": {
        "title": ["HSNUZS", "TEDxNTHU", "WMUN"],
        "img": ["img/extra1.jpg", "img/extra2.jpg", "img/extra3.jpg"],
        "content": [
            "I was responsible for operating an association with members transferring from my high school to Tsing Hua. During that period, I enhanced cooperation skills with people, especially how to maintain friendship and work relationship at the same time. I coordinated 12 activities in a year like summer camp, winter camp, and university expo.", 
            "I coordinated a TED event as CFO. We invited both somebody and nobody to our event to share their story. We stick to the goal of 'ideas worth spreading'", 
            "I attended World Model United Nations (WMUN) in Seoul, Korea in March 2015. This event has been a chance of cultural exchange and mutual comprehension with elites around the world. Our topics were mostly politics and economy related."
        ]
    }
};

var chinese = {
    "head": ["黃柏愷", "工作經驗", "學歷", "專題", "技術", "自傳", "課外活動"],
    "work" : {
        "parttime": ["UMTRI", "美國 密西根州 安娜堡市", "2017年9月", "現今"],
        "intern": ["Clinc, Inc.", "美國 密西根州 安娜堡市", "2017年5月", "2017年8月"],
    },
    "school": {
        "grad": ["密西根大學", "美國 密西根州 安娜堡市", "碩士", "GPA 3.7", "電機與電腦工程學系", "修課", "2016年9月", "2018年4月"],
        "gradCourse": ["作業系統", "資料庫", "機器學習", "自動駕駛車", "大數據系統", "矩陣方法", "機率與隨機過程"],
        "undergrad": ["國立清華大學", "台灣 新竹市", "學士", "GPA 4.05", "電機工程學系", "修課", "2011年9月", "2015年6月"],
        "undergradCourse": ["數位訊號處理", "作業系統", "資料結構", "計算機結構", "訊號與系統"]
    },
    "project": {
        "title": ["p1", "p2", "p3", "p4", "p5"],
        "content": ["p1-content", "p2-content", "p3-content", "p4-content", "p5-content"]
    },
    "skill": {
        "title": ["程式語言", "資料庫", "網頁設計", "工具"]
    },
    "extra": {
        "title": ["附中山校友會", "TEDxNTHU", "清華大學模擬聯合國"],
        "content": [
            "...", 
            "...", 
            "..."
        ]
    }
};
