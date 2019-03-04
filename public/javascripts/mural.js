$(document).ready(function() {

  dados();
  $("#btn-calc").click(calc);

});


  function calc(){

    $('#v_mensal').empty();
    var mensal = $('#v_mensal').val();


    console.log(mensal);
    $('#t_mensalistas').empty();
    var mensalistas = $('#t_mensalistas').val();

    var total = parseFloat(mensal) / parseFloat(mensalistas);
    console.log(total);

    $('#v_pessoa').empty();
    $('#v_pessoa').val(total);
  }

  function dados(){


    $('#v_mensal').empty();
    $('#v_mensal').val(450);
    var mensal = $('#v_mensal').val();


    console.log(mensal);
    $('#t_mensalistas').empty();
    $('#t_mensalistas').val(20);
    var mensalistas = $('#t_mensalistas').val();

    console.log(mensalistas);






    $('#v_avulso').empty();
    $('#v_avulso').val(15);


  }
