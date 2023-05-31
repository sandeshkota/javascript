(function() {

    console.log("[Start] e2e tests");

    it('should repeat the message by the count specified', function () {
        var selector = document.querySelector('#selector');
        selector.innerHTML = getHtmlBody();
        
        var repeatMessage = document.querySelector("#repeatMessage");
        repeatMessage.value = "Welcome!";

        var repeatCount = document.querySelector("#repeatCount");
        repeatCount.value = 2;

        var repeatBtn = document.querySelector('#repeatBtn');
        repeatBtn.click();

        var result = document.querySelector("#result");
        assert(result.innerHTML === "Welcome!Welcome!");

        //cleanup
        selector.innerHTML = '';
    });

    console.log("[End] e2e tests");
}());


function getHtmlBody()
{
    return `<div id="main-container">
        Repeat Message: 
        <input id="repeatMessage" type="text" placeholder="enter repeat message.." value="Hello folks! " />
        
        <br/>
        Repeat Count: 
        <input id="repeatCount" type="text" placeholder="enter repeat count.." value="3" />

        <br/>
        <input id="repeatBtn" type="button" value="Repeat" onclick="RepeatAndPrint()" />

        <br/><br/>

        Result:
        <span id="result"></span>
    </div>`;
}