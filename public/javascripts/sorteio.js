$(document).ready(function() {

  $("#btn-sorteio").click(sortear);

  $("#btn-nao").click(nao_clique);

});

    function nao_clique(){
        document.getElementById('nao_clique').style.display = 'block';
    }


    function shuffle(o) {
       for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
       return o;
    };

  function sortear(){

    var  url = '/nomes';

    $.ajax({
       type: "GET",
       url: url,
       success: function(res){

         console.log(res);

           var html = "";
           var html2 = "";
           var html_proximo = "";

           var numeroMaximo = res.length
           console.log(numeroMaximo);
           var nomes = []


           console.log(nomes);

           $.each(res, function(p, c){

              nomes.push(c.nome)

            });


          var numero_gerado = shuffle(nomes);

          var goleiro = Math.floor(Math.random() * 10) + 1;

          console.log(goleiro);

            if(goleiro > 5){

              $('#time_b').empty();
              $('#time_a').empty();
              $("#time_b").append('TIME B - <img src="/images/bola.png">');
              $("#time_a").append('TIME A - <img src="/images/campo_1.jpg">');

            }else{
              $('#time_b').empty();
              $('#time_a').empty();
              $("#time_a").append('TIME B - <img src="/images/bola.png">');
              $("#time_b").append('TIME A - <img src="/images/campo_1.jpg">');

            }


          if(goleiro % 2 == 0){
            console.log('PAR');
            html2 += '<tr>';
              html2 += '<td><input id="teste" class="form-control" type="text" value="Joao" disabled="disabled" /></a></td>';
            html2 += '</tr>';
            html += '<tr>';
              html += '<td><input id="teste2"  class="form-control" type="text" value="Bruce" disabled="disabled" /></a></td>';
            html += '</tr>';

          }else{
            console.log('impar');
            html2 += '<tr>';
              html2 += '<td><input id="teste2"  class="form-control" type="text" value="Bruce" disabled="disabled" /></a></td>';
            html2 += '</tr>';
            html += '<tr>';
              html += '<td><input id="teste" class="form-control" type="text" value="Joao" disabled="disabled" /></a></td>';
            html += '</tr>';



          }




          for (var i = 0; i< 5;i++){
            html += '<tr>';
              html += '<td><input class="form-control" type="text" value="'+numero_gerado[i]+'" disabled="disabled" /></a></td>';
            html += '</tr>';
          }

          for (var i = 5; i< 10;i++){
            /*if(i == 5){
              html2 += '<tr>';
                html2 += '<td><input class="form-control" type="text" value="Rojas" disabled="disabled" /></a></td>';
              html2 += '</tr>';
              i++
            }*/

            html2 += '<tr>';
              html2 += '<td><input class="form-control" type="text" value="'+numero_gerado[i]+'" disabled="disabled" /></a></td>';
            html2 += '</tr>';
          }


          $('#proximo').empty();
          $("#proximo").append('PROXIMO 1*');
          html_proximo += '<tr>';
            html_proximo += '<td><input class="form-control" type="text" value="'+numero_gerado[10]+'" disabled="disabled" /></a></td>';
          html_proximo += '</tr>';

          $('#table_time_A tbody').empty();
          $('#table_time_A tbody').append(html);

          $('#table_time_B tbody').empty();
          $('#table_time_B tbody').append(html2);

          $('#table_proximo tbody').empty();
          $('#table_proximo tbody').append(html_proximo);


          $("#teste").css("background","skyblue");
          $("#teste").css("color","white");

          $("#teste2").css("background","skyblue");
          $("#teste2").css("color","white");


        }

      });

}
