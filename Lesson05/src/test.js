const fs = require('fs');

decode("./input.txt")

 async function decode(message_file){
    fs.readFile(message_file, "utf-8", (err, data)=>{
        if(err) console.log(err)
        let file = data.toString().split("\n")
        let lines = [];
        for(let line of file) {
            let [num, word] = line.split(" ");
            let obj = {
                num: Number(num),
                word: word,
            }
            lines.push(obj)
        }

        lines.sort((a, b) => a.num - b.num); //sort based on number in line
        let step = 1;
        let endLines = [];
        while(lines.length){
            if(lines.length >= step) {
                endLines.push(lines[step-1].word);
                lines = lines.splice(step);
            }
            step++;
        }

         console.log(endLines.join(" "))

    })



}