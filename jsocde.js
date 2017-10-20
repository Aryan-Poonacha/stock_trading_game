var money = 100000;

var itcvalue = 50;
var itcowned = 600;
var itctobuy = 0;
var itctosell = 0;

var steamowned = 125;
var steamvalue = 100;
var steamtobuy = 0;
var steamtosell = 0;

var relvalue = 150;
var relowned = 130;
var reltobuy = 0;
var reltosell = 0;

var airvalue = 200;
var airowned = 170;
var airtobuy = 0;
var airtosell = 0;

var bsnlvalue = 250;
var bsnlowned = 250;
var bsnltobuy = 0;
var bsnltosell = 0;

var d = 0;
var x = 1;
var change = 0;

var textopaquemaker;

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function updateValues()
{
  for(var i = 0; i<5; i++)
  {
  d = randomInt(1,2);
  change = randomInt(25,100);
  if(i==0)
  {
  if(d==1)
  {
    itcvalue +=change;
  }
  else if(d==2)
  {
    if((itcvalue-change)>0)
    {
    itcvalue -= change;
    }
  }
}
if(i==1)
{
  if(d==1)
  {
    steamvalue += change;
  }
  if(d==2)
  {
    if((steamvalue-change)>0)
    {
    steamvalue -= change;
    }
  }
}
if(i==2)
{
  if(d==1)
  {
    relvalue += change;
  }
  if(d==2)
  {
    if((relvalue-change)>0)
    {
    relvalue -= change;
    }
  }
}
if(i==3)
{
  if(d==1)
  {
    airvalue += change;
  }
  if(d==2)
  {
    if((airvalue-change)>0)
    {
    airvalue -= change;
    }
  }
}
if(i==4)
{
  if(d==1)
  {
    bsnlvalue += change;
  }
  if(d==2)
  {
    if((bsnlvalue-change)>0)
    {
    bsnlvalue -= change;
    }
  }
}
}
document.getElementById('itcvalue').innerHTML = itcvalue;
document.getElementById('steamvalue').innerHTML = steamvalue;
document.getElementById('relvalue').innerHTML = relvalue;
document.getElementById('airvalue').innerHTML = airvalue;
document.getElementById('bsnlvalue').innerHTML = bsnlvalue;
}

function TRANSACT()
{
  if(money>((itcvalue*itctobuy)+(steamvalue*steamtobuy)+(relvalue*reltobuy)+(airvalue*airtobuy)+(bsnlvalue*bsnltobuy)))
  {
  if(document.getElementById('itctobuy').value!='')
  {
  itctobuy = parseInt(document.getElementById('itctobuy').value);
  }
  if(document.getElementById('itctobuy').value=='')
  {
    itctobuy = 0;
  }
  if(document.getElementById('steamtobuy').value!='')
  {
  steamtobuy = parseInt(document.getElementById('steamtobuy').value);
  }
  if(document.getElementById('steamtobuy').value=='')
  {
    steamtobuy = 0;
  }
  if(document.getElementById('reltobuy').value!='')
  {
  reltobuy = parseInt(document.getElementById('reltobuy').value);
  }
  if(document.getElementById('reltobuy').value=='')
  {
    reltobuy = 0;
  }
  if(document.getElementById('airtobuy').value!='')
  {
  airtobuy = parseInt(document.getElementById('airtobuy').value);
  }
  if(document.getElementById('airtobuy').value=='')
  {
    airtobuy = 0;
  }
  if(document.getElementById('bsnltobuy').value!='')
  {
  bsnltobuy = parseInt(document.getElementById('bsnltobuy').value);
  }
  if(document.getElementById('bsnltobuy').value=='')
  {
    bsnltobuy = 0;
  }
  }

  money-=(itcvalue*itctobuy)+(steamvalue*steamtobuy)+(relvalue*reltobuy)+(airvalue*airtobuy)+(bsnlvalue*bsnltobuy);
  itcowned += itctobuy;
  steamowned += steamtobuy;
  relowned += reltobuy;
  airowned += airtobuy;
  bsnlowned += bsnltobuy;

  if((itctosell<=itcowned)&&(reltosell<=relowned)&&(airtosell<=airowned)&&(steamtosell<=steamowned)&&(bsnltosell<=bsnlowned))
  {
  if(document.getElementById('itctosell').value!='')
  {
  itctosell = parseInt(document.getElementById('itctosell').value);
  }
  if(document.getElementById('itctosell').value=='')
  {
    itctosell = 0;
  }
  if(document.getElementById('steamtosell').value!='')
  {
  steamtosell = parseInt(document.getElementById('steamtosell').value);
  }
  if(document.getElementById('steamtosell').value=='')
  {
    steamtosell = 0;
  }
  if(document.getElementById('reltosell').value!='')
  {
  reltosell = parseInt(document.getElementById('reltosell').value);
  }
  if(document.getElementById('reltosell').value=='')
  {
    reltosell = 0;
  }
  if(document.getElementById('airtosell').value!='')
  {
  airtosell = parseInt(document.getElementById('airtosell').value);
  }
  if(document.getElementById('airtosell').value=='')
  {
    airtosell = 0;
  }
  if(document.getElementById('bsnltosell').value!='')
  {
  bsnltosell = parseInt(document.getElementById('bsnltosell').value);
  }
  if(document.getElementById('bsnltosell').value=='')
  {
    bsnltosell = 0;
  }

  money+=(itcvalue*itctosell)+(steamvalue*steamtosell)+(relvalue*reltosell)+(airvalue*airtosell)+(bsnlvalue*bsnltosell);

  itcowned -= itctosell;
  steamowned -= steamtosell;
  relowned -= reltosell;
  airowned -= airtosell;
  bsnlowned -= bsnltosell;
}

document.getElementById('savingsdisplay2').innerHTML = "<mark><b>BALANCE:<br>"+money+"</b></mark>";

  document.getElementById('itcowned').innerHTML = itcowned;
  document.getElementById('steamowned').innerHTML = steamowned;
  document.getElementById('relowned').innerHTML = relowned;
  document.getElementById('airowned').innerHTML = airowned;
  document.getElementById('bsnlowned').innerHTML = bsnlowned;

  document.getElementById('itctobuy').value = '';
  document.getElementById('steamtobuy').value = '';
  document.getElementById('reltobuy').value = '';
  document.getElementById('airtobuy').value = '';
  document.getElementById('bsnltobuy').value = '';

  document.getElementById('itctosell').value = '';
  document.getElementById('steamtosell').value = '';
  document.getElementById('reltosell').value = '';
  document.getElementById('airtosell').value = '';
  document.getElementById('bsnltosell').value = '';

  gainorloss();

  itctosell = 0;
  steamtosell = 0;
  reltosell = 0;
  airtosell = 0;
  bsnltosell = 0;

  updateValues();
}

function gainorloss()
{
  clearInterval(textopaquemaker);
  x = 1;
  var gain = (itcvalue*itctosell)+(steamvalue*steamtosell)+(relvalue*reltosell)+(airvalue*airtosell)+(bsnlvalue*bsnltosell);
  var loss = (itcvalue*itctobuy)+(steamvalue*steamtobuy)+(relvalue*reltobuy)+(airvalue*airtobuy)+(bsnlvalue*bsnltobuy);
  if((gain-loss)>0)
  {
    document.getElementById('moneychangetext').style.opacity = "1";
    document.getElementById('moneychangetext').innerHTML = "+"+(gain-loss);
    textopaquemaker = setInterval(makeOpaque,30);
  }
  if((gain-loss)<0)
  {
    document.getElementById('moneychangetext').style.opacity = "1";
    document.getElementById('moneychangetext').innerHTML = "-"+(loss-gain);
    textopaquemaker = setInterval(makeOpaque,30);
  }
  if((gain-loss)==0)
  {
    document.getElementById('moneychangetext').style.opacity = "1";
    document.getElementById('moneychangetext').innerHTML = "+0";
    textopaquemaker = setInterval(makeOpaque,30);
  }
}

function makeOpaque()
{
  document.getElementById('moneychangetext').style.opacity = x;
  x-=0.02;
}

function checkFailure()
{
  if(money<=0)
  {
    alert('YOU ARE NOW BANKRUPT. YOU LOSE.');
  }
}

setInterval(checkFailure,3000);
