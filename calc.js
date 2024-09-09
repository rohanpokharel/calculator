const output = document.getElementById("output");
        function resultFunction(value){
            output.value += value;
        }

        function clearFunction(){
     output.value = "";
        }
   
        function equalToFunction(){
            output.value = math.evaluate(output.value);
        }