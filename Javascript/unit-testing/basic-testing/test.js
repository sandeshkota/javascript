(function(){
    
    it('should repeat message 1ce', function() {
        let repeatedValue = $myapp.repeater("hello-", 1);
        assert(repeatedValue === "hello-")
    });

    it('should repeat message 3 times', function() {
        let repeatedValue = $myapp.repeater("hello-", 3);
        assert(repeatedValue === "hello-hello-hello-")
    });

    it('should repeat message by trimming start', function() {
        let repeatedValue = $myapp.repeater(" hello", 3);
        assert(repeatedValue === "hello hello hello")
    });

    it('should repeat message by trimming end', function() {
        let repeatedValue = $myapp.repeater("hello ", 3);
        assert(repeatedValue === "hello hello hello")
    });

    it('should not repeat message if count is not supplied', function() {
        let repeatedValue = $myapp.repeater(" hello ");
        assert(repeatedValue.includes("[error]"));
    });

    it('should not repeat message if count is not a number', function() {
        let repeatedValue = $myapp.repeater(" hello ", "abc");
        assert(repeatedValue.includes("[error]"));
    });

    it('should not repeat message if count is null', function() {
        let repeatedValue = $myapp.repeater(" hello ", null);
        assert(repeatedValue.includes("[error]"));
    });

    it('should not repeat message if count is undefined', function() {
        let repeatedValue = $myapp.repeater(" hello ", undefined);
        assert(repeatedValue.includes("[error]"));
    });

    it('should not repeat message if count is < 1', function() {
        let repeatedValue = $myapp.repeater(" hello ", 0);
        assert(repeatedValue.includes("[error]"));
    });

  })();