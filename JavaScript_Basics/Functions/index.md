
Function : 

    Code reusability.


    Function Definition : 

        function function_name(parameter1, parameter2, ....){

            <!-- statements to be executed -->
            return value
        }   

    Function Calling : 

        var result = function_name(value1, value2, ....)


Nested Functions : 

    Private to the Container Function and,
    Cannot be invoked form outside the container function.

    function Container(){
        function nested(){

        }

        nested()
        
    }
