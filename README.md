
# Work Day Scheduler

## Description
This "Work Day Scheduler" web application is designed to help a user track certain events within work-day time blocks, i.e. 9-5 but in this case 8-5. 
This scheduler features dynamic CSS styling that references the current hour (through Moment.js) and makes adjustments to hours passed, current hour and future hours. Users are able to input tasks for specific hour blocks, save those tasks, 
and have them persist upon page refresh. If a user would like to reset/clear their tasks they can press the "Clear Tasks" button contained in the header.

This scheduler mirrors applications many users might already be familiar with, for example Google Calender or other "todo" applications, and in this sense it works in similar ways despite being quite rudamentary in comparsion.
Thus this project was built to help develop my understanding of implementing API's in web applications (in this case Moment.js, Bootstrap and jQuery) while also building upon fundamentals I've already learned regarding local storage, DOM traversal and so on.

In essence this project aims to solve for basic work-day scheduling and task needs. In its current state it is built for hourly tasks within a work day, however it could easily be scaled to allow users to add tasks for whatever timeframe. Similarly the dynamic elements could be modified in a myriad of ways for a customized experience, or to emphasize certain tasks above others.

In the process of building this project I learned quite a bit about web API's and how to implement them properly, more specifically how jQuery can mesh with vanilla JavaScript or, in some cases how it can break scripts. 
## Table of Contents
- [Installation] (#installation)
- [Link to live url] (#live)
- [Usage/Examples] (#usage)
- [Credits] (#credits)
- [License] (#license)
## Live

- [https://skytexier.github.io/Customizable-Schedule/](https://skytexier.github.io/Customizable-Schedule/)
## Installation

For proper installation or usage of the website include index.html and assets folder. Script is found in develop folder.
No installation required unless modifying code, in such case proper git pulling from the repo and importing into editing software required.
    
## Usage/Examples

Upon loading the page a user will see a common work day schedule displayed, as pictured below.

![alt text](./Assets/images/main.png)

The time tables will automatically update to display the current time in blue, and future time blocks in green. Time blocks that have already passed will display dark grey.

![alt text](./Assets/images/timelog.png)

From here a user can input tasks for each hour and save them individually by pressing the button next to the time block.

![alt text](./Assets/images/tasksave.png)

These tasks will then be saved even upon page refresh. If a user wants to reset these tasks they can press the button "Clear Tasks" positioned at the bottom of the header.


![alt text](./Assets/images/cleartask.png)
## Credits

Most of this project I built myself, however I found myself in a hole when it came to navigating to my individual inputs and saving those individual inputs from each time-block-button without giving each of those buttons a unique script. To help me better understand DOM traversal and jQuery selectors Joem Casusi from AskBCS helped me with those for loops and traversal issues to select individual inputs based upon which button was pressed.

Aside from this I used a few APIs namely: 
- jQuery [https://jquery.com/](https://jquery.com/)
- Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/)
- Moment.js [https://momentjs.com/docs/](https://momentjs.com/docs/)

For sources on actual script execution and APi implementation I used:
- jQuery API Documentation [https://api.jquery.com/](https://api.jquery.com/)
- Bootstrap Documentation [https://getbootstrap.com/docs/4.6/getting-started/introduction/](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- W3Schools [https://www.w3schools.com/jquery/default.asp](https://www.w3schools.com/jquery/default.asp)
- TutorialRepublic [https://www.tutorialrepublic.com/jquery-tutorial/](https://www.tutorialrepublic.com/jquery-tutorial/)
- Stack Overflow [https://stackoverflow.com/](https://stackoverflow.com/)
## License
MIT License
 
Copyright (c) [2022] [Sky Hamilton Texier]
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

