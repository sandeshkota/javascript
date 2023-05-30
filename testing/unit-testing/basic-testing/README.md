## Testing using plain Javascript methods

### How to ?
  - Open test.html in browser
  - Check console messages

### How it works ?
  - framework.js has defined assert and it functions
    - it function 
        - needs two params
            1. test message
            2. the function to be tested
        - if the function that is passed gets executed successfully it prints message in green color
        - if the function that is passed doesn't gets executed successfully it print message in red color
    - assert function
        - needs only one param, which should result in boolean
        - if the resultant param to it function is false, it throws a javascript error