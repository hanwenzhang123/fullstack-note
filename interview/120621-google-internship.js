//11/29/2021 - 1st Interview
Start -> A -- B -- C
         |         |
         D    E -- F --G
              |
              H

class House {
  constructor(name, pipeLabels){
    this.name = name;
    this.pipeLabels = pipeLabels;
    this.firstReceivedBookFrom = null;
    this.fromPipes = [];
  }
  
  onReceivedWorkbook (fromPipeLabel, workbook){
    if(firstReceivedBookFrom === null){
      this.firstReceivedBookFrom = fromPipeLabel;     //when firstReceivedBookFrom is null, then we assign who we get the workbook from
      workbook.apprend(this.name);           //put the name of this firstReceivedBookFrom 
      
      const index = this.pipeLabels.indexOf(fromPipeLabel);
      const newPipeArr = this.pipeLabels.splice(index, 1)      //get the fromPipeLabel
      this.fromPipes.push(newPipeArr)                 //push fromPipeLabel to fromPipes Array
    }
    sendWorkbookThroughPipe(fromPipes[0], workbook)   //send to next one from current pipe
    const newPipeArray = this.fromPipes.splice(0, 1)
    this.fromPipes = newPipeArray;
    
    if(fromPipes.length === 0){
      sendWorkbookThroughPipe(firstReceivedBookFrom, workbook)          //send it back to where it comes from
    }
  }
  
  sendWorkbookThroughPipe(toPipeLabel, workbook){
  }
}

class Workbook {
  appendName(name){
  }
}


//12/06/2021 - 2nd Interview
class Job {
  constructor(startTime, duration, cpus) {	
    this.startTime = startTime;
    this.duration = duration;
    this.cpus = cpus;
  }       
}

Example: maxCpus = 3
0123456789
0---(3) 0--------(2)
  0------------(1) => false

Example: maxCpus = 3
0---3 0--------2 0-------1 => true

Example:
0 1 2 3 4 5 6 7 8 9
    0 - - - (start: 2, duration: 4)
      0 - - (start: 3, duration: 3)

earliest start ---------------- latest end time
jobs = [{startTime: 1, duration: 2, cpus: 5}, {}];
       [{}, {}, {}]

function checkSchedule(maxCpus, jobs){
 let check;
 for (job in jobs) {
   const earliestStart = Math.min(...Object.values(job.startTime))
   const latestEnd = Math.max(job.startTime + (job.duration - 1))
   let endPoint = job.startTime + (job.duration - 1);
 }
 if(maxCpus <= ){
   check = true
 } else {
   check = false
 }
 return check;
}
