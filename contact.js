function sendEmail(){
   var answerArr = [];

    var body = answerArr.join("\n");
    var mailto = "ediemetzger@gmail.com";
    
    var a = document.createElement('a');
    a.href = "mailto:" + mailto + "?body=" + escape(body);
    console.log(a.href);
    a.click();
}

$(document).on("click",".submit",sendEmail);