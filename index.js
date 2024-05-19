const { error } = require("console");
const fs = require("fs")

// Blocking SYNCHRONOUS way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8') // to return the text
// console.log(textIn);

// const textOut = `Tis is what we know about the avocado : ${textIn}.\nCreated on ${Date.now()}`

// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written');

// Blocking ASYNCHRONOUS way
fs.readFile(`./txt/start.txt`, 'utf-8',(err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile(`./txt/final.txt`,`${data1}\n${data2}\n${data3}` ,'utf-8', (err, data4) => {
                console.log(data4);
                
            } )
            
        } )
        
    } )
})

//  fs.readFile(`./txt/start.txt`,'utf-8', (err, data) => {
//         console.log(data);
// } )


console.log('will read fila!');