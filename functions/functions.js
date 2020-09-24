/** 
 * Functions
 */

// function declaration
function sayHello() {
    console.log('Ja dag ze');
}
sayHello();

// function expressions 

// Option #1
const zegMijneNaam = function () {
    console.log('Fons makker');
}
zegMijneNaam();
const workerFunction = function (callback) {
    callback();
}

//optie #2
workerFunction(function () {
    console.log('beacon heaven ');
});

/** 
 * Arrrow functions
 */

const terminator = () => {
    return "I\'ll be back dikken"
}
terminator();

const terminator2 = () => "I\'ll be back "
console.log(terminator2());

/** 
 * This (the global scope aka the browser window)
 */
console.log(this);

function ringPhone(){
    console.log(this);
}

const phone = {
    type: "android",
    openApps: ['a','b','c'],
    start(){
        console.log("START", this);
    },
    showOpenApps(){
        this.openApps.forEach(function(app) {
            console.log("SHOWOPENAPPS", this );
        }, this);  
    },
    openApp: () => {
        console.log(this);
    }
}
phone.start();

phone.stop = function(){
    console.log("STOP", this);
}
phone.stop();

phone.showOpenApps();

phone.openApp();

const watch = {
    type:"oneplus watch"
}
phone.start.bind(watch)(); 
// this 
const startwatch = phone.start.bind(watch);
startwatch();