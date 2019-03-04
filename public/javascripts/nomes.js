$(document).ready(function() {

  getNomes()

});


  function getNomes(){

      var  url = '/nomes?status=ausente';

      $.ajax({
         type: "GET",
         url: url,
         success: function(res){
            var html = "";
            var cont = res.length;

            console.log(res);

            $.each(res, function(p, c){


              html += '<tr id='+c.id+'>';
              html += '<td><input type="checkbox" name="id" value="'+c.id+'"></td>';
              html += '<td >'+c.nome+'</td>';

              //html += '<td><i class="fa fa-trash" onClick="deletar('+c.id+')"></i></td>'
              html += '</tr>';

            });

            $('#table tbody').empty();
            $('#table tbody').append(html);





          }

        });
  }

  function incluirJs (cont){

    var nome = $('#nome__'+cont+'').val();

    console.log(nome);

    $.ajax({
           url: '/nomes/incluir',
           type: 'POST',
           data: { nome: nome, status : 'presente' } ,
           success: function(response) {
             alert("Jogador incluido");
             window.location.reload();
           },
           failure: function(error){
             console.log(error);

           }
       });

  }
