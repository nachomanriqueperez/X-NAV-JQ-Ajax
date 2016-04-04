jQuery(document).ready(function() {

   $.ajax("doc.txt")
     .done(function(data){
       $("#second").click(function(){
           $("#third").append(data);
       });
     });
});
