 const objectToArray=(input)=>{
     let output=[];
     for (const key in input) {
         if (input.hasOwnProperty(key)) {
             
             output.push({
                 key:key.split("_").join(" "),
                 value:input[key]
             });
             
         }
     }
     return output;
 }

 export default objectToArray;