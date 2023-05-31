

    function RepeatAndPrint() {
        let repeatMessage = document.getElementById("repeatMessage");
        let repeatCount = document.getElementById("repeatCount");
        let repeatedValue  = $myapp.repeater(repeatMessage.value, repeatCount.value);

        let result = document.getElementById("result");
        result.innerHTML = repeatedValue;
    }