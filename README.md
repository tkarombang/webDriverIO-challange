Hi everyone! This month, I’ve been working on implementing my automation testing skills on web applications like Demoblaze, SauceDemo, and TechPanda using WebdriverIO. I’d love to share my journey with you. This documentation will guide you through the steps to become a software tester/QA.
What is the Automation Testing
The Automation Testing is a self-operating process. To effectively perform web application automation testing, you’ll need a solid understand of programming languages, Document Object Model (DOM), and other relevant tools and techniques.
PREREQUISITE
-	Visual Studio Code (code editor)
-	JavaScript, HTML, CSS
-	DOM (Document Object Models)
-	ES6 (Modern JavaScript)
-	NodeJS (runtime environment)
In these requirements, I’m assuming you’ve grasped the information I provided earlier. However, if there’s anything you’re unsure about, you can learn more about it from any source, including topics related to code editors.
What is WebdriverIO
The Automation testing framework for browser and mobile testing, we can test all Web and hybrid or native Mobile application free and open-source. You can visit the link of documentation from webdriver.io
FEATURES
-	WebdriverIO can be using in modern web application written in React, Vue, Angular etc.
-	Hybrid or Native mobile apps running on emulator/simulator or real device
-	Native desktop applications (e.g. written with Electron.js)
-	Work with Shadow DOM and React Object or Angular Objects, 
WebdriverIO is high-level worked on the automation testing

How to Install
1.	Open Terminal/Command Prompt: Navigate to your project's root directory using the terminal or command prompt.
2.	Install WebdriverIO: Use npm to install WebdriverIO globally (for use in any project) or locally (within the current project)
-	npm init -y (You can see package.json file)
-	npm init wdio (it will started webdriverio setup)
o	it will asking name project on your location: you can press Y and hit Enter
o	Which framework do you want to use? Select Mocha
o	do you want to use a compiler? press No
o	do you want webdriverio to autogenerate some test files? Pres Yes
o	where should these file be located? Select the location of your projects
o	do you want to use page objects (*****Link*****)? Pres Y
o	which reporter do you want to use? Select spec, allure for allure_report
o	do you want to add a service to your test setup? Select geckodriver for Mozila & chromedriver for google chrome then press enter
o	do you want to me to run ‘npm instaa’? select Y
3.	poroccess installing successfully
In this visual studio code that you have been done to installing webdriverio you will see some files like wdio.conf.js, package.json, node_modules(folder), test(folder). Now let me to explain what is that folder.
node_modules - folder
this folder is sub directory for our project folder. It will not interfere of with any other library in our system and keep clean power system that is why we started the command by using “npm init -y “ 
test – folder
Folder pageobject & specs will be used to store our project’s files
wdio.conf.js
you can see of the configuration our webdriverio, you will see our test files in specs , capabilities, timeout, loglevel, baseUrl, waitforTimeout, etc.. if you want to know that the configuration you can read each configure name has a description.
TRY TO RUN
You can use command in the terminal npx run wdio .\wdio.conf.js press enter and it will be run all the test in the folder test, but if you want to run a new project that you make type npx run wdio .\wdio.conf.js –spec .\test\spec\new_project_folder
TechPanda – demo website app project
I’ve recreated the code using JavaScript and the WebdriverIO automation framework along with the Mocha testing framework. The test cases were obtained from Guru99. If you’d like to download the test cases, please navigate to the testCase-TechPanda folder. You can then work on the code using your preferred programming language and compare your results with my code, which is located in the spec folder under the filename techPandaVxx.js 
