$(document).ready(function() {

  getNomes()
  $("#btn_delete_all").click(deletar);
});


  function getNomes(){

      var  url = '/nomes?mensalista=0';

      $.ajax({
         type: "GET",
         url: url,
         success: function(res){
            var html = "";
            var cont = res.length;

            console.log(res);

            $.each(res, function(p, c){

              
              html += '<tr id='+c.id+'>';
              html += '<td id="nome_'+c.id+'">'+c.nome+'</td>';
              html += '</tr>';

            });

            $('#table tbody').empty();
            $('#table tbody').append(html);

            $("#btn_more").click(addLinha);


            function addLinha(){

              var cont = $('#table >tbody >tr').length + 2;

              console.log(cont);

              var html = "";

                  html += '<tr>';
                  html += '<td>novo</a></td>';
                  html += '<td><input id="nome__'+cont+'" class="form-control" type="text"  /></a></td>';
                  html += '<td><button class="btn btn-primary" type="button" onClick="incluirJs('+cont+')"> Incluir</button></i></td>'
                  html += '</tr>';
                  $('#table tbody').append(html);
                }

          }

        });
  }

  function incluirJs (cont){

    var nome = $('#nome__'+cont+'').val();

    console.log(nome);

    $.ajax({
           url: '/nomes/incluir',
           type: 'POST',
           data: { nome: nome, status : 'presente', mensalista: 0 } ,
           success: function(response) {
             alert("Visitante incluido");
             window.location.reload();
           },
           failure: function(error){
             console.log(error);

           }
       });

  }


  function deletar(){
    var pass = prompt("Digite a senha para excluir todos", "");

    if(pass == "gol"){
      var question = confirm("Deletar TODOS os visitantes?");

      if(question == true){

        $.ajax({
          url: 'visitantes/delete',
          type: 'DELETE',
          success: function(response) {
            alert('Visitentes/Avulsos removidos!');
              window.location.reload();
          },
           failure: function(error){
             console.log(error);
           }
        });
      }

    }
    else{
      alert("senha incorreta!")
      return false;

    }

  }
