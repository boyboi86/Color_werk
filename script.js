var calc = '';
var result = '';
var clear = false;
$(document).ready(function() {
  $('button').click(function() {
 //Add random colors to buttons
    $('button').each(function() {
      $(this).css('background-color', randomColor())
      $(this).css('color', randomColor())
      $('body').css('background-color', randomColor())
      $('.textbox').css('background-color', randomColor())
      function randomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.round(Math.random() * 15)];
        }
        return color;
      }
    });
    //all value will be reflected
 var text = $(this).attr("value");
     if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
      if(clear === false) {
        calc += text;
        $(".textbox").val(calc);
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
      
    } if(text === "AC") {
      calc = "";
      $(".textbox").val("");
    } else if(text === "CE") {
      calc = calc.slice(0, -1);
      $(".textbox").val(calc);
    } else if(text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      clear = true;
    }else if(text === "And") { 
      calc = $(".textbox").val(); 
      $(".textbox").val(calc); 
      clear=false;
    }
  
  
  })
})