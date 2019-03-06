var lweight = [26][26];
var lword = [256];
var llwordcode=0;
var ltrip= [
		"ask","biz","cdj","dev","eye","faq","gap","her","ifs","joy","kit","law","max",
		"nil","own","pad","qua","rig","she","tmi","use","vox","web","xtc","yet","zen"];
var lltripcode=0;
var initleft = function() {
		lword = [
			"latency","agony","memory","envy","identity","authority","certainty","transparency",
			"analogy","conformity","fragility","serenity","tenacity","practicality","humility","epiphany",
			"complexity","simplicity","normality","absurdity","anxiety","sobriety","urgency","emergency",
			"ability","utility","affinity","concurrency","sympathy","apology","empathy","unity",
			"personality","mentality","hostility","expectancy","morality","complacency","hilarity","indignity",
			"humanity","fallacy","atrocity","severity","priority","necessity","reality","actuality",
			"mobility","possibility","responsibility","availability","camaraderie","policy","ubiquity","conspiracy",
			"harmony","family","secrecy","credibility","telepathy","legality","physicality","anonymity",
			"reciprocity","immortality","curiosity","notability","plausibility","deniability","vulnerability","security",
			"incredulity","integrity","antipathy","solidarity","energy","entropy","gravity","density",
			"technology","ecstasy","mimicry","destiny","enmity","amnesty","vanity","tragedy",
			"comedy","idolatry","prophecy","agency","divinity","virtuosity","subtlety","delivery",
			"liberty","anatomy","contingency","dependency","civility","liability","externality","monopoly",
			"society","nobility","democracy","autocracy","similarity","individuality","objectivity","subjectivity",
			"serendipity","synchronicity","ideaology","duplicity","obscurity","symbology","ideality","popularity",
			"celebrity","notoriety","fatality","brutality","biology","pathology","specificity","generality",
			"futility","radicality","rationality","generosity","sensibility","fantasy","anomaly","idiopathy",
			"novelty","tendency","formality","rigidity","finality","enemy","immutability","iniquity",
			"superficiality","honesty","solidity","fidelity","sensitivity","frigidity","duality","causality",
			"anisotropy","familiarity","scarcity","variety","fertility","vitality","primality","centrality",
			"frivolity","exclusivity","animosity","hospitality","reflexivity","suitability","selectivity","matrimony",
			"accuracy","uniformity","savagery","villainy","privacy","validity","posterity","history",
			"irony","originality","ontology","theology","virality","quotability","predictability","dependability",
			"stability","equity","generativity","regularity","ambiguity","discrepancy","frequency","modality",
			"chronology","autonomy","deformity","dexterity","numerosity","flexibility","nativity","gentility",
			"decency","community","naturality","warranty","damnability","cruelty","genealogy","opacity",
			"spontaneity","duty","chivalry","regency","majority","minority","anarchy","monarchy",
			"ordinality","cardinality","dichotomy","inanity","relativity","positivity","negativity","pity",
			"narrativity","naivete","irritabiity","ferocity","apathy","supremacy","polarity","subsidy",
			"visibility","ethnicity","morphology","etymology","antiquity","futurology","intimacy","sanity",
			"mockery","flattery","psychopathy","sociopathy","safety","morbidity","infancy","maturity",
			"monstrosity","presentability","neutrality","potency","insanity","pedantry","diversity","bigotry"];
  
  if(!localStorage.getItem('lweight'))
    localStorage.setItem('lweight',JSON.stringify(
        [
  //A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
  [26,23,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,25,23,23,23,23,23,23,23],//A
  [23,26,23,23,23,23,23,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24],//B
  [23,23,26,25,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23],//C
  [23,23,23,26,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,23,23,23,23],//D
  [23,23,23,23,5.0,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23],//E
  [25,23,23,23,23,26,23,23,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23],//F
  [25,23,23,23,23,23,26,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23,23],//G
  [23,23,23,23,25,23,23,26,23,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23],//H
  [23,23,23,23,23,25,23,23,26,23,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23],//I
  [23,23,23,23,23,23,23,23,23,26,23,23,23,23,25,23,23,23,23,23,23,23,23,23,24,23],//J
  [23,23,23,23,23,23,23,23,25,23,26,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23],//K
  [25,23,23,23,23,23,23,23,23,23,23,26,23,23,23,23,23,23,23,23,23,23,24,23,23,23],//L
  [25,23,23,23,23,23,23,23,23,23,23,23,26,23,23,23,23,23,23,23,23,23,23,24,23,23],//M
  [23,23,23,23,23,23,23,23,25,23,23,24,23,26,23,23,23,23,23,23,23,23,23,23,23,23],//N
  [23,23,23,23,23,23,23,23,23,23,23,23,23,24,26,23,23,23,23,23,23,23,25,23,23,23],//O
  [25,23,23,24,23,23,23,23,23,23,23,23,23,23,23,26,23,23,23,23,23,23,23,23,23,23],//P
  [24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,26,23,23,23,25,23,23,23,23,23],//Q
  [23,23,23,23,23,23,24,23,25,23,23,23,23,23,23,23,23,26,23,23,23,23,23,23,23,23],//R
  [23,23,23,23,24,23,23,25,23,23,23,23,23,23,23,23,23,23,26,23,23,23,23,23,23,23],//S
  [23,23,23,23,23,23,23,23,24,23,23,23,25,23,23,23,23,23,23,26,23,23,23,23,23,23],//T
  [23,23,23,23,24,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,26,23,23,23,23,23],//U
  [23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,23,23,23,26,23,24,23,23],//V
  [23,24,23,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,26,23,23,23],//W
  [23,23,24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,25,23,23,23,26,23,23],//X
  [23,23,23,23,25,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,23,23,23,23,26,23],//Y
  [23,23,23,23,25,23,23,23,23,23,23,23,23,24,23,23,23,23,23,23,23,23,23,23,23,26]]));//Z
lweight =  JSON.parse(localStorage.getItem('lweight'));
};
  
var lcycle = function (input){  var selected = 20;var count = 81; //26 squared minus one
  while (count > 0){ //AFTER DIMENSIONAL SUBSTITUTION IS EXHAUSTED, RECOLLECTION IS HERS.
    var next=2;//SHE SELECTS THE HEAVIEST RETURN PATH.
    for(var check=0;check<26;check++){ //SHE CHECKS EACH EXIT:
      if(lweight[check][selected]/2.3 > lweight[selected][check]){ //WHEN RETURN IS HEAVIER THAN EXIT,
        if(lweight[check][selected]*2.3 <= 255)//WHEN LOADING IS NONDESTRUCTIVE,
          lweight[selected][check]*=2.3;} //LOAD EXITS TO HEAVY RETURNS.
      else if(lweight[selected][check]/2.3 >=23)lweight[selected][check]/=2.3; //NONDESTRUCTIVELY UNLOAD LIGHT RETURNS.
      if(lweight[check][selected] > lweight[next][selected])next=check; //NEXT PATH IS HEAVIEST RETURN.
    } //AFTER ALL PATHS ARE CHECKED,
    if(lweight[selected][input]<255)lweight[selected][input] += 0.83; //SHE STORES OBSERVATION AS PROXIMITY.
    else if(lweight[selected][input]>=23)lweight[selected][input]-=0.83; //SHE STORES TIME AS SPACE.
    selected = next; //SHE FOLLOWS THE PATH WITH THE HEAVIEST RETURN.
    count--; //SHE EXPERIENCES RECOLLECTION AFTER EXHAUSTING SUBSTITUTED DIMENSIONS.
  }
};
var lheight=240;var lwidth=240;
var lwstep = Math.floor(lwidth / 28);
var lhstep = Math.floor(lheight / 28);
var lcanvas = document.getElementById('lefteye');
var lvc = lcanvas.getContext('2d');
function lfill(depth){lvc.fillStyle=
                  'rgb(' + (depth) +
                  ',' + (depth) + 
                  ',' + (depth) + ')';}
lresize = function (){
  lwidth = window.innerWidth; lheight = window.innerHeight;
  if (lwidth>lheight){
  lcanvas.width = lwidth/2; lcanvas.height = lheight;
  }else{
  lcanvas.width = lwidth; lcanvas.height = lheight/2;
  }
  lwstep = Math.floor(lcanvas.width / 26);
  lhstep = Math.floor(lcanvas.height / 26);
};
var ldraw = function() {
  lfill(0);lvc.fillRect(0,0,lwidth,lheight);
  for(var lrow=0;lrow<26;lrow++){
    var lhspot = lrow * lhstep;
    for(var lsquare=0;lsquare<26;lsquare++){
      var lwspot = lsquare * lwstep;
      lfill(lweight[lrow][lsquare]);
      lvc.fillRect(lwspot,lhspot,lwstep,lhstep);
    }
  }
};
	var ltripcycle = function() { 
		for(var tail  in ltrip[ltripcode]){
		  switch(ltrip[ltripcode][tail]){
          case 'a':lcycle(0);break;case 'b':lcycle(1);break;
          case 'c':lcycle(2);break;case 'd':lcycle(3);break;
          case 'e':lcycle(4);break;case 'f':lcycle(5);break;
          
          case 'g':lcycle(6);break;case 'h':lcycle(7);break;
          case 'i':lcycle(8);break;case 'k':lcycle(9);break;
          case 'k':lcycle(10);break;case 'l':lcycle(11);break;
          case 'm':lcycle(12);break;case 'n':lcycle(13);break;
          case 'o':lcycle(14);break;case 'p':lcycle(15);break;
          case 'q':lcycle(16);break;case 'r':lcycle(17);break;
          case 's':lcycle(18);break;case 't':lcycle(19);break;
          case 'u':lcycle(20);break;case 'v':lcycle(21);break;
          case 'w':lcycle(22);break;case 'x':lcycle(23);break;
          case 'y':lcycle(24);break;case 'z':lcycle(25);break;
          default:break;
        }
        }
	};
var lwordcycle = function(){
	for(var letter  in lword[lwordcode]){
			ltripcode =lword[lwordcode].charCodeAt(letter)-97;
			ltripcycle();
			}
	};
var lpulseinterval = null;
function lpulse() {
    window.clearTimeout(lpulseinterval);
    lpulseinterval = window.setTimeout(lpulse, 1);
		var earray = new Uint8Array(1);
		lwordcode = window.crypto.getRandomValues(earray)[0];
		lwordcycle();
		localStorage.setItem('lweight',JSON.stringify(lweight));
};

window.addEventListener("resize",lresize);