var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output-div");

var minionAPI = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text)
{
 return minionAPI + "?"+"text="+text;
}
//error handler function
function errorHandler(error)
{
 console.log("error occured ",error)
 alert("something wrong with server, please try again later ")
}

btnTranslate.addEventListener("click",()=>{
 //input
 var input = textArea.value;

 //calling server for input processing
 fetch(getTranslationUrl(input))
 .then(response => response.json())
 .then(json => {
  var translatedText = json.contents.translated;
  outputDiv.innerText = translatedText;
 })
 .catch(errorHandler)
 
})







