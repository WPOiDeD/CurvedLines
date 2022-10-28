function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KnMKMW4kkB":
        Script1();
        break;
      case "5kg8fgb2jVY":
        Script2();
        break;
  }
}

function Script1()
{
  var randomnumber = Math.floor((Math.random()*99)+1);
var player = GetPlayer();
player.SetVar("P_Num1",randomnumber);
}

function Script2()
{
  var randomnumber = Math.floor((Math.random()*99)+1);
var player = GetPlayer();
player.SetVar("P_Num2",randomnumber);
}

