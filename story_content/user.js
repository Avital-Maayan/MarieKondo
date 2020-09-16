function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fkksFhc4IR":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = 'your_email@address.com';
var fbk = player.GetVar( 'noteOne' );
var fbk1 = player.GetVar( 'noteTwo' );
var fbk2 = player.GetVar( 'noteT' );
var fbk3 = player.GetVar( 'noteFour' );
var subject = 'מטרות שלי';
var emailBody = 'אלו הן המטרות שלי:' + '\n' + fbk + '\n'+ fbk1+ '\n'+ fbk2+ '\n'+ fbk3;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

