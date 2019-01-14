// Initialize variables
let term = "";
let dataReceived = "";
let baseHeight = 550;

//Hold all values obtained form call here
let skillLevels = {};
let experienceTotals = {};

//Defualt skill ordering
let defaultOrder = ["Atk", "Def", "Str", "HP", "Rng", "Pray", "Mag", "Cook", "WC", "Flch", "Fish", "Fire", "Crft", "Smth", "Mine", "Herb", "Agil", "Slay", "Farm", "RC", "Hunt", "Con"];

//Base URL
let url1 = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=";

//Unique prefix for key
const prefix = "krw1619-";
const termKey = prefix + "SearchTerm";
const storedTerm = localStorage.getItem(termKey);

//Only change search term if there is a value to place there
if (storedTerm){
    document.querySelector("#searchterm").value = storedTerm;
}

// Make a call to the API when search button is clicked
window.onload = (e) => {document.querySelector("#search").onclick = getData};


// Forms a valid URL using the entered search term and makes an ajax call to the RuneScape API
function getData(){
    
    document.querySelector("h2").innerHTML = "Searching for player..."
    document.querySelector("h2").style.visibility = "visible";
    
    document.querySelector(".graph").style.opacity = 0.0;
    
    term = document.querySelector("#searchterm").value;
    
    url1 = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" + term;
    let url2 = "https://cors.io/?" + url1;

    localStorage.setItem(termKey, term); 
    
    $(function() {
        console.log(url2);
        $.ajax({
        url: url2,
        type:"GET",
        success: function(data) {
        dataReceived = data;
        console.log(dataReceived);
        parseHiscores();
        },
        error: function(err) {
        document.querySelector("h2").innerHTML = "Error finding player."
        console.error(err);
        }
        })
        
      });
}

//Translates the result of the call into usable arrays of data
function parseHiscores() {
    let parsed1 = dataReceived.replace(/(\r\n|\n|\r)/gm, ",");
    let parsedHS = parsed1.split(",");
    
    console.log(parsedHS);
    
    skillLevels.Atk = parsedHS[4];
    experienceTotals.Atk = parsedHS[5];
    
    skillLevels.Def = parsedHS[7];
    experienceTotals.Def = parsedHS[8];
    
    skillLevels.Str = parsedHS[10];
    experienceTotals.Str = parsedHS[11];
    
    skillLevels.HP = parsedHS[13];
    experienceTotals.HP = parsedHS[14];
    
    skillLevels.Rng = parsedHS[16];
    experienceTotals.Rng = parsedHS[17];
    
    skillLevels.Pray = parsedHS[19];
    experienceTotals.Pray = parsedHS[20];
    
    skillLevels.Mag = parsedHS[22];
    experienceTotals.Mag = parsedHS[23];
    
    skillLevels.Cook = parsedHS[25];
    experienceTotals.Cook = parsedHS[26];
    
    skillLevels.WC = parsedHS[28];
    experienceTotals.WC = parsedHS[29];
    
    skillLevels.Flch = parsedHS[31];
    experienceTotals.Flch = parsedHS[32];
    
    skillLevels.Fish = parsedHS[34];
    experienceTotals.Fish = parsedHS[35];
    
    skillLevels.Fire = parsedHS[37];
    experienceTotals.Fire = parsedHS[38];
    
    skillLevels.Crft = parsedHS[40];
    experienceTotals.Crft = parsedHS[41];
    
    skillLevels.Smth = parsedHS[43];
    experienceTotals.Smth = parsedHS[44];
    
    skillLevels.Mine = parsedHS[46];
    experienceTotals.Mine = parsedHS[47];
    
    skillLevels.Herb = parsedHS[49];
    experienceTotals.Herb = parsedHS[50];
    
    skillLevels.Agil = parsedHS[52];
    experienceTotals.Agil = parsedHS[53];
    
    skillLevels.Thv = parsedHS[55];
    experienceTotals.Thv = parsedHS[56];
    
    skillLevels.Slay = parsedHS[58];
    experienceTotals.Slay = parsedHS[59];
    
    skillLevels.Farm = parsedHS[61];
    experienceTotals.Farm = parsedHS[62];
    
    skillLevels.RC = parsedHS[64];
    experienceTotals.RC = parsedHS[65];
    
    skillLevels.Hunt = parsedHS[67];
    experienceTotals.Hunt = parsedHS[68];
    
    skillLevels.Con = parsedHS[70];
    experienceTotals.Con = parsedHS[71];
    
    document.querySelector("#totalLevel").innerHTML = "Total Level: " + parsedHS[1];
    document.querySelector("#totalXP").innerHTML = "Total XP: " + parsedHS[2];
    
    //Build the graph's columns differently based on the checked radio button
    if (document.getElementById('levelButton').checked) {
        scaleLevel();
    }
    else
    {
        scaleMax();
    }
    
    if (document.getElementById('defaultButton').checked) {
        sortDefault();
    }
    else if (document.getElementById('alphabeticalButton').checked) {
        sortAlpha();
    }
    else if (document.getElementById('highToLowButton').checked) 
    {
        sortHL();
    }
    
    //Once it's built, make the graph visible
    document.querySelector(".graph").style.visibility = "visible";
    $('.graph').css('visibility', 'visible').animate({opacity: 1.0}, 500);
    
    //Show the link to the official page as well
    document.querySelector("a").href = "https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1=" + term; 
    document.querySelector("a").style.visibility = "visible";
    //State the name of the current character
    document.querySelector("h2").innerHTML = "Showing " + term + "'s Skills";
}

//Scale the columns differently based on checked radio button
function determineHeight(amount, tag)
{
    let height;
    console.log(tag);
    if (document.getElementById('levelButton').checked) {
        height = baseHeight * (amount / 99);
        document.querySelector("#" + CSS.escape(tag)).innerHTML = amount;
    }
    else if (document.getElementById('xp99Button').checked) {
        height = baseHeight * (amount / 13034431);
        let amountMillions = Math.abs(parseFloat(amount / 1000000).toFixed(1));
        document.querySelector("#" + CSS.escape(tag)).innerHTML = amountMillions + "m";
    }
    else
    {
        height = baseHeight * (amount / 200000000);
        let amountMillions = Math.abs(parseFloat(amount / 1000000).toFixed(1));
        document.querySelector("#" + CSS.escape(tag)).innerHTML = amountMillions + "m";
    }
    
    //Limit column height to max value
    if (height > baseHeight)
    {
        height = baseHeight;
    }
    
    //Move and scale the columns into their final positions
    document.querySelector("#" + CSS.escape(tag)).style.minHeight = height + "px";
    document.querySelector("#" + CSS.escape(tag)).style.height = height + "px";
    document.querySelector("#" + CSS.escape(tag)).style.marginTop = baseHeight - height + "px";
    
}

//Sort the columns according to the order on the official website
function sortDefault()
{
    for (let i = 0; i < defaultOrder.length; i++)
    {
        document.getElementById(defaultOrder[i]).style.order = i;  
        document.getElementById("Leg" + defaultOrder[i]).style.order = i; 
    }
}

//Sort the columns alphabetically by skill name
function sortAlpha()
{
    let sortable = [];
    for (let skill in experienceTotals) {
        sortable.push([skill, experienceTotals[skill]]);
    }
    
    sortable.sort();
    
    for (let i = 0; i < sortable.length; i++)
    {
        document.getElementById(sortable[i][0]).style.order = i;  
        document.getElementById("Leg" + sortable[i][0]).style.order = i; 
    }
}

//Sort columns by the amount of XP the character has, from most to least
function sortHL()
{
    let sortable = [];
    for (let skill in experienceTotals) {
        sortable.push([skill, experienceTotals[skill]]);
    }
    
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    console.log(sortable.length);
    
    for (let i = 0; i < sortable.length; i++)
    {
        document.getElementById(sortable[i][0]).style.order = i;  
        document.getElementById("Leg" + sortable[i][0]).style.order = i; 
    }
}

//Scale the columns based on the character's level
function scaleLevel()
{
    let sortable = [];
    for (let skill in skillLevels) {
        sortable.push([skill, skillLevels[skill]]);
    }
    
    for (let i = 0; i < sortable.length; i++)
    {
        determineHeight(sortable[i][1], sortable[i][0]); 
    }
}

//Scale the columns based on the character's experience totals
function scaleMax()
{
    let sortable = [];
    for (let skill in experienceTotals) {
        sortable.push([skill, experienceTotals[skill]]);
    }
    
    for (let i = 0; i < sortable.length; i++)
    {
        determineHeight(sortable[i][1], sortable[i][0]); 
    }
}