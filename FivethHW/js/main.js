//////////Task1//////////

function Task1(arr){
    return String(`max = ${Math.max(arr)}\n min = ${Math.min(arr)}`);
}
//////////Task2//////////

function Task2(x1,y1,x2,y2)
{
    return Math.sqrt((Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));
}
//////////Task3//////////

function Task3(date){
  let parts = date.split("-"); 
  return `${parts[2]}/${parts[1]}/${parts[0]}`; 
}
//////////Task4//////////

function Task4(str, number){
    if (str.length > number) 
        return str.slice(0,number) + "...";
    return str;
}
//////////Task5//////////

function Task5(){
    let str = prompt("enter some text");
    let parts = str.split(' ');
    let filtered = parts.filter(word => word !== '');
    return filtered.join(' ');
}
//////////Task6//////////

function Task6(){
    let str = prompt("enter some text");
    let parts = str.split('-');
    let newStr="";
    for(let i=0; i<parts.length; i++){
        newStr+=parts[i][0].toUpperCase()+parts[i].toLowerCase().slice(1)
    }
    return newStr;
}
//////////Task7//////////

function Task7(str){
    
    let parts = str.split(' ');
    for(let i=0; i<parts.length; i++){
        parts[i] = parts[i][0].toUpperCase()+parts[i].toLowerCase().slice(1)
    }
    return parts.join(" ");
}
//////////Task8//////////


let dateTimeNY = new Date(2026, 0, 1, 0, 0, 0)


function Task8()
{ 
    let dateTimeNow = new Date;
    document.getElementById("seconds").textContent = String(Math.floor(((dateTimeNY - dateTimeNow)/1000) % 60)).padStart(2,0);
    document.getElementById("minutes").textContent = String(Math.floor(((dateTimeNY - dateTimeNow)/(1000 * 60))%60)).padStart(2,0);
    document.getElementById("hours").textContent = String(Math.floor(((dateTimeNY - dateTimeNow)/(1000 * 60 * 60))% 24)).padStart(2,0);
    document.getElementById("days").textContent = String(Math.floor((dateTimeNY - dateTimeNow)/(1000 * 60 * 60 * 24))).padStart(2,0);
}
setInterval(Task8,1000);






