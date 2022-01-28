

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

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

const hourBlocks = [
    {   hour: 9,
        task: "",
        save: false
    },
    {   hour: 10,
        task: "Eat cheese",
        save: true
    },
    {   hour: 11,
        task: "Clean cowgirl boots",
        save: true
    },
    {   hour: 12,
        task: "Tip my hat",
        save: true
    },
    {   hour: 13,
        task: "Get a new saddle",
        save: true
    },
    {   hour: 14,
        task: "Put on fringe vest",
        save: true
    },
    {   hour: 15,
        task: "",
        save: true
    },
    {   hour: 16,
        task: "Sing a sad song",
        save: true
    },
    {   hour: 17,
        task: "Dance",
        save: true
    }

]

console.log('start loop')
// 1. Define starting number - DONE
// 2. Do a check first
// 3. If it passes check, run code block {}
// 4. Code Finishes
// 5. Then do number increate
// 6. Do check on index
// 7. Run code
// 8. Code finishes
// 9. index++
// 10. Does Check
// 11. Doesn't pass check
// 12. Exit for loop

const block1 =hourBlocks[0];

const el = document.getElementById('hour-blocks');

for (let index = 0; index < hourBlocks.length; index++) {
    const block = hourBlocks[index];
    const hour = block.hour;
    const hourEl = document.createElement('div');
    hourEl.innerText = block.hour;
    hourEl.classList.add('hours');
    hourEl.classList.add('col-1');
    
    const task = block.task;
    const taskEl = document.createElement('div');
    taskEl.innerText = block.task;
    taskEl.classList.add('task');
    taskEl.classList.add('col-10');

    const floppyDisk = document.createElement('button');
    floppyDisk.classList.add('col-1');
    
    const rowEl = document.createElement('div');
    rowEl.classList.add('row');
    el.appendChild(rowEl);
    rowEl.appendChild(hourEl);
    rowEl.appendChild(taskEl);
    rowEl.appendChild(floppyDisk);
}

