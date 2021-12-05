11/29/2021 - 1st Interview
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
      this.firstReceivedBookFrom = fromPipeLabel;
      workbook.apprend(this.name);
      
      const index = this.pipeLabels.indexOf(fromPipeLabel);
      const newPipeArr = this.pipeLabels.splice(index, 1)
      this.fromPipes.push(newPipeArr)
    }
    sendWorkbookThroughPipe(fromPipes[0], workbook)
    const newPipeArray = this.fromPipes.splice(0, 1)
    this.fromPipes = newPipeArray;
    
    if(fromPipes.length === 0){
      sendWorkbookThroughPipe(firstReceivedBookFrom, workbook)
    }
  }
  
  sendWorkbookThroughPipe(toPipeLabel, workbook){
  }
}

class Workbook {
  appendName(name){
  }
}


12/06/2021 - 2nd Interview

 
