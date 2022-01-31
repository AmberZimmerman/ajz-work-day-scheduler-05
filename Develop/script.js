

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// This presents the current time and day
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// This is the array that I'm going to use to change out tasks per hour
// <img src="./Assets/images/dolly-parton-01.jpg" />
let initialHourData = [
    {   id: 1,
        hour: 9,
        task: "",
        dolly: "01"
    },
    {   id: 2,
        hour: 10,
        task: "",
        dolly: "02"
    },
    {   id: 3,
        hour: 11,
        task: "",
        dolly: "03"
    },
    {   id: 4,
        hour: 12,
        task: "",
        dolly: "04"
    },
    {   id: 5,
        hour: 13,
        task: "",
        dolly: "05"
    },
    {   id: 6,
        hour: 14,
        task: "",
        dolly: "06"
    },
    {   id: 7,
        hour: 15,
        task: "",
        dolly: "07"
    },
    {   id: 8,
        hour: 16,
        task: "",
        dolly: "08"
    },
    {   id: 9,
        hour: 17,
        task: "",
        dolly: "09"
    }

]

// Checking to see if user has data in local storage.
// If they don't have data, let's create some to start with from what's above.
if (!localStorage.getItem('hourBlocks')) {
    const hourBlocks = JSON.stringify(initialHourData)
    localStorage.setItem('hourBlocks', hourBlocks)
}

// This entire function is what is going to allow the user to add data to the hour and save that specific task to local storage using a button to save
function initiateApp() {
    console.log('Initializing App');
    const hourBlocks = JSON.parse(localStorage.getItem('hourBlocks'));
    const el = document.getElementById('hour-blocks');
    console.log(hourBlocks);

    for (let index = 0; index < hourBlocks.length; index++) {
        const block = hourBlocks[index];
        const hour = block.hour;
        const hourEl = document.createElement('div');
        hourEl.innerText = hour;
        hourEl.classList.add('hours');
        hourEl.classList.add('col-1');
        
        const task = block.task;
        const taskEl = document.createElement('input');
        taskEl.value = task;
        taskEl.classList.add('task');
        taskEl.classList.add('col-10');
    
        const floppyDisk = document.createElement('button');
        floppyDisk.setAttribute('value', `<i class="far fa-save"></i>`);
        floppyDisk.classList.add('col-1');
        floppyDisk.setAttribute('value', block.id);
        taskEl.setAttribute('data-input-id', block.id);
        floppyDisk.addEventListener("click", function () {
            // User clicks on Button
            // Then take the value from said button
            const floppyDiskValue = floppyDisk.value;
            // Loop through blocks array to find specific data
            for (let index = 0; index < hourBlocks.length; index++) {
                const currentBlock = hourBlocks[index];
                const currentBlockId = currentBlock.id;
                // If it finds matching ids from array and button, it does stuff!
                if (floppyDiskValue == currentBlockId) {
                    console.log(currentBlock);
                    console.log('Floppy Value: ', floppyDiskValue);
                    // Create string parameter to select input
                    currentBlock.task = taskEl.value;
                    localStorage.setItem("hourBlocks", JSON.stringify(hourBlocks));
                }
            }
            
        });
        
        // Creating a row that all the columns can append to then appending the columns
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');
        el.appendChild(rowEl);
        rowEl.appendChild(hourEl);
        rowEl.appendChild(taskEl);
        rowEl.appendChild(floppyDisk);

        // Create a statement to determine if hours on app are before, after, or current to local time
        const currentTime = moment().format('H');
        // can use typeof to tell me if it returns a string
        console.log(typeof currentTime);
        const realTimeNumber = parseInt(currentTime);
        console.log(typeof realTimeNumber);

        // Create a statement to change colors, grey for past, red for current, green for future
        if (hour === realTimeNumber) {
            taskEl.classList.add('task-present');
        } else if (hour < realTimeNumber) {
            // instead of the color grey, make all slots fill in a picture of Dolly Parton
            taskEl.classList.add('dolly');
            const grabDolly = block.dolly;
            const dollyPicture = `./Assets/images/dolly-parton_${grabDolly}.jpg`;
            taskEl.style.backgroundImage = `url(${dollyPicture})`;
            console.log(dollyPicture);
            // taskEl.classList.add('task-past');
        } else if (hour > realTimeNumber) {
            taskEl.classList.add('task-future');
        }
    }
}

initiateApp();






