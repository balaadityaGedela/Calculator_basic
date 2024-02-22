var number = 0;
var check = false;
var num1 = 0;
var num2 = 0;
var op = "";

$(".tile1").off().on("click",function(event){
  $(".dd2").css("display","none");
  $(".dd3").css("display","none");
  $(".dd4").css("display","none");

  var val = $(".dd1").css("display");
  if(val == "flex")
  {
    $(".dd1").css("display","none");
  }
  else
  {
      $(".dd1").css("display","flex");
  }
});

$(".tile2").off().on("click",function(event){
  $(".dd1").css("display","none");
  $(".dd3").css("display","none");
  $(".dd4").css("display","none");


  var val = $(".dd2").css("display");
  if(val == "flex")
  {
    $(".dd2").css("display","none");
  }
  else
  {
      $(".dd2").css("display","flex");
  }
});

$(".tile3").off().on("click",function(event){
  $(".dd1").css("display","none");
  $(".dd2").css("display","none");
  $(".dd4").css("display","none");
  var val = $(".dd3").css("display");
  if(val == "flex")
  {
    $(".dd3").css("display","none");
  }
  else
  {
      $(".dd3").css("display","flex");
  }
});

$(".tile4").off().on("click",function(event){
  $(".dd1").css("display","none");
  $(".dd2").css("display","none");
  $(".dd3").css("display","none");
  var val = $(".dd4").css("display");
  if(val == "flex")
  {
    $(".dd4").css("display","none");
  }
  else
  {
      $(".dd4").css("display","flex");
  }
});

make_number(number,check);

function number2(event)
{
  if($(event.target).hasClass("add"))
  {
    make_number(0,false);
    num2 = number;
    op = "add";
  }
  else if($(event.target).hasClass("sub"))
  {
    make_number(0,false);
    num2 = number;
    op = "sub";
  }
  else if($(event.target).hasClass("mul"))
  {
    make_number(0,false);
    num2 = number;
    op = "mul";
  }
  else if($(event.target).hasClass("div"))
  {
    make_number(0,false);
    num2 = number;
    op = "div";
  }
  console.log(op);

  return ;
}

function func(num1,num2,op)
{
  switch(op)
  {
    case "add":
      $(".container10").css("justify-content","center");
      $(".container10").css("fontSize","25px");
      console.log(num1+num2);
      $(".container10").text(String(num1+num2));
      break;
    case "sub":
      $(".container10").css("justify-content","center");
      $(".container10").css("fontSize","25px");
      console.log(num1-num2);
      $(".container10").text(String(num1-num2));
      break;
    case "mul":
      $(".container10").css("justify-content","center");
      $(".container10").css("fontSize","25px");

      if(String(num1).length >= 7 || String(num2).length >= 7)
      {
        $(".container10").text("MAXIMUM INTEGER VALUE REACHED");
      }
      else
      {
        $(".container10").text((num1*num2));
      }
      break;
    case "div":
      $(".container10").css("justify-content","center");
      $(".container10").css("fontSize","25px");
      if(num2 == 0)
      {
          $(".container10").text("SYNTAX ERROR");
      }
      else
      {
        console.log(num1/num2);
        $(".container10").text(String(num1/num2));
      }
      break;
  }

  number = 0;
  check = false;
  num1 = 0;
  num2 = 0;
  op = "";

  restart();

  return ;
}

function restart()
{
  $(".num").off().on("click",function (){});
  $(".clear").off().on("click",function ()
  {
    $(".container10").css("justify-content","flex-end");
    $(".container10").css("fontSize","30px");
    $(".container10").text("0");
  });

  make_number(0,false);
  return ;
}

function make_number(number,check)
{
  $("#clear").off().on("click",function ()
  {
    $(".container10").css("justify-content","flex-end");
    $(".container10").css("fontSize","30px");
    $(".container10").text("0");
    console.clear();
    number = 0;
    check = false;
    num1 = 0;
    num2 = 0;
    op = "";
    return ;
  });
  $("#res").off().on("click",function ()
  {
    num2 = number;
    console.log(Number(num2)+"  number2");
    console.log(op+" Operation");
    func(Number(num1),Number(num2),op);
    return ;
  });
  $(".operation").off().on("click",function (event)
  {
    num1 = number;
    console.log("Num1  " + Number(num1));
    number = 0;
    $(".container10").css("justify-content","flex-end");
    $(".container10").css("fontSize","30px");
    $(".container10").text("0");
    number2(event);
    return ;
  });

  $(".num").off().on("click",function ()
  {
    var temp = this.id;
    // if(number != 0 && count == 10), this wont work whn we press starting zeros and then some numbers, it will count for 10 only, so directly
    // remove count and just convert number to string and find the length.
    if(String(number).length >= 10)
    {
      $(".container10").css("justify-content","center");
      $(".container10").css("fontSize","25px");
      $(".container10").text("MAXIMUM LIMIT REACHED");
      return ;
    }
    else
    {
      if(check)
      {
        number = number*10 + Number(temp);
        $(".container10").text(number);
      }
      else
      {
        check = true;
        number = temp;
        $(".container10").text(number);
      }
      make_number(number,check);
      return ;
    }
  });
}
