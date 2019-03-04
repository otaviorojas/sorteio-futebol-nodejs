$(document).ready(function() {

  $("#btn-reset").click(reset);

});



function reset (){

  var x = confirm("Está certo disso?");
  if (x){

  $.ajax({
         url: '/nomes/reset',
         type: 'POST',
         data: { status : 'presente' } ,
         success: function(response) {
           alert("Todos os pernetas foram colocados como PRESENTE");
           window.location.reload();
         },
         failure: function(error){
           console.log(error);

         }
     });

  }

    return false;

}
