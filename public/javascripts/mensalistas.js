$(document).ready(function() {

  getNomes()

});


  function getNomes(){

      var mensalidade = 450;
      var  url = '/nomes?mensalista=1';

      $.ajax({
         type: "GET",
         url: url,
         success: function(res){
            var html = "";
            var cont = res.length;
            var mensalidadeCada = mensalidade / cont;
            console.log(res);

            $.each(res, function(p, c){

              console.log(mensalidadeCada);
              html += '<tr id='+c.id+'>';
              html += '<td id="nome_'+c.id+'">'+c.nome+'</td>';
              html += '<td id="mensalidade'+c.id+'"> R$'+Math.ceil(mensalidadeCada).toFixed(2)+'</td>';
              html += '<td><img id="image1" src="images/trash.png" onClick="deletar('+c.id+')" /></td>'
              //html += '<td><i class="fa fa-trash" onClick="deletar('+c.id+')"></i></td>'
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

                  //html += '<td><img id="image1" src="images/savee.png" onClick="incluirJs('+cont+')"></td>'
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
           data: { nome: nome, status : 'presente', mensalista: 1 } ,
           success: function(response) {
             alert("Perneta incluido");
             window.location.reload();
           },
           failure: function(error){
             console.log(error);

           }
       });

  }


  function deletar(id){
    var pass = prompt("Digite a senha para excluir o mensalista", "");

    if(pass == "gol"){
      var question = confirm("Deletar mensalista?");

      if(question == true){

        $.ajax({
          url: 'nomes/delete/'+id+'',
          type: 'DELETE',
          success: function(response) {
            alert('Mensalista apagado!');
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
