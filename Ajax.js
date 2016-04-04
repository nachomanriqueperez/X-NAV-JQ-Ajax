jQuery(document).ready(function() {
   $("#first").each(function(i){
     $(this).append("Este texto se inserta desde el JS");
   });

   $.ajax("doc.txt")
     .done(function(data){
       $("#second").append(data);
     });
});
