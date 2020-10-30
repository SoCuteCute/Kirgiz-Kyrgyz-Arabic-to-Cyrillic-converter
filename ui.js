// JavaScript Document
// JavaScript Document
var mode = 0; //默认是阿拉伯文转西里尔文
//mode =1 西里尔文转阿拉伯文
function setText(){
	var oTxt1=document.getElementById('left');
	var oTxt2=document.getElementById('right');
	if(mode === 0){
		oTxt1.value='西里尔文кыргыз тили';
		oTxt2.value='阿拉伯文قىرعىز تىلى';
		mode = 1;
	}else{
		oTxt2.value='西里尔文кыргыз тили';
		oTxt1.value='阿拉伯文قىرعىز تىلى';
		mode = 0;
	}	
}



function artocy(arText)
{
	//alert(arText);
	var clStr = arText;
	var temp = "";
	var i;
	
	for(i=0;i<clStr.length;i++)
	{
		clStr = clStr.replace("يۇ","ю");
		clStr = clStr.replace("يۇ","ю");
		clStr = clStr.replace("يۇ","Ю");

		clStr = clStr.replace("يە","э");
		clStr = clStr.replace("يا","я");

		clStr = clStr.replace("تس","ц");
		clStr = clStr.replace("شش","Щ");
		clStr = clStr.replace("تس","ц");
		clStr = clStr.replace("تس","Ц");
		clStr = clStr.replace("يو","Ё");
		clStr = clStr.replace("يو","ё");
		clStr = clStr.replace("شيا","Щ");
		clStr = clStr.replace("شيا","щ");
		
	}
	
	for( i=0 ; i<clStr.length ; i++ )
	{
		var ch = clStr.charCodeAt(i) ;
		switch(ch)
		{
			case 0x0627:
				temp+="а";
				break;
			case 0x06c5:
				temp+="ө";
				break;
			case 0x06c9:
				temp+="ү";
				break;
			case 0x0628:
				temp+="б";       
				break;
			case 0x06C6:
				temp+="в";
				break;
			case 0x06AF:
				temp+="г";
				break;
			case 0x0639:
				temp+="г";
				break;
			case 0x062F:
				temp+="д";
				break;
			case 0x06D5:
				temp+="е";
				break;
			case 0x062C:
				temp+="ж";
				break;
			case 0x064A:
				temp+="й";
				break;
			case 0x0632:
				temp+="з";
				break;
			case 0x0643:
				temp+="к";      
				break;
			case 0x0642:
				temp+="к";
				break;
			case 0x0644:
				temp+="л";
				break;
			case 0x0645:
				temp+="м";
				break;
			case 0x0646:
				temp+="н";
				break;
			case 0x06AD:
				temp+="ң";
				break;
			case 0x0648:
				temp+="о";
				break;
			case 0x067E:
				temp+="п";
				break;
			case 0x0631:
				temp+="р";         
				break;
			case 0x0633:
				temp+="с";
				break;
			case 0x062A:
				temp+="т";
				break;
			case 0x06CB:
				temp+="у";
				break;
			case 0x06C7:
				temp+="у";
				break;
			case 0x0641:
				temp+="ф";
				break;
			case 0x062D:
				temp+="х";
				break;
			case 0x06BE:
				temp+="һ";
				break;
			case 0x0686:
				temp+="ч";
				break;
			case 0x0634:
				temp+="ш";      
				break;
			case 0x0649:
				temp+="ы";
				break;
			case 0x0626:
				temp+="и";
				break;	
			case 0x0621:
				temp+="";
				break;
			case 0x0675:
				temp+="ә";
				break;
			case 0x0676:
				temp+="ө";
				break;
			case 0x0677:
				temp+="ү";
				break;
			case 0x0678:
				temp+="і";
				break;
			
			case 0x061F:
				temp+="\u003F";
				break;
			case 0x061B:
				temp+="\u003B";
				break;
			case 0x060C:
				temp+="\u002C";
				break;		
			
			default :
				temp+=clStr.charAt(i);
				break;
		} 
	}
	//alert(temp);
	return temp;
}
function cytoar(cyText)
{
	var cyrl = cyText;
	var temp="" ;
	var ok = false ;
	var i ;
	
	for( i=0; i<500 ; i++ )
	{
		cyrl = cyrl.replace("блика","بلىكا") ;
		cyrl = cyrl.replace("Конституция","كونستىتۇسىيا") ;
		cyrl = cyrl.replace("конституция","كونستىتۇسىيا") ;

		cyrl = cyrl.replace("РЕДАКЦИЯ","رەداكتسىيا") ;
		cyrl = cyrl.replace("диалог","دىيالوگ") ;
		cyrl = cyrl.replace("контрреволюция","كونترريەۋوليۇتسيا") ;
		cyrl = cyrl.replace("параграф","پاراگراف") ;
		cyrl = cyrl.replace("маркс","ماركس") ;
		cyrl = cyrl.replace("ифология","ئفولوگىيا") ;
		cyrl = cyrl.replace("графия","گرافونيا") ;
		cyrl = cyrl.replace("география","گەوگرافىيا") ;
		cyrl = cyrl.replace("ква","كىۋا") ;
		cyrl = cyrl.replace("орган","ورگان") ;
		cyrl = cyrl.replace("аген","اگەن") ;
		cyrl = cyrl.replace("комиссия","كومىسسىيا") ;
		cyrl = cyrl.replace("Комиссия","كومىسسىيا") ;
		cyrl = cyrl.replace("доктор","دوكتور") ;
		cyrl = cyrl.replace("академик","اكادەمىك") ;
		cyrl = cyrl.replace("академия","اكادەمىك") ;
		cyrl = cyrl.replace("банк","بانك") ;
		cyrl = cyrl.replace("техника","تەحنىكا") ;
		cyrl = cyrl.replace("КМШ","ق م ش") ;
		cyrl = cyrl.replace("коалиция","كوالىتسيا") ;
		cyrl = cyrl.replace("кургак","قۇرعاق") ;
		cyrl = cyrl.replace("экономика","ەكونومىكا") ;
		cyrl = cyrl.replace("сыякту","سىياقتۇ") ;

		cyrl = cyrl.replace("–","-") ;//
		cyrl = cyrl.replace("¬","") ;//
		cyrl = cyrl.replace("ия","я") ;//yya
		cyrl = cyrl.replace("һ","ھ") ;//h
		cyrl = cyrl.replace("Y","ۇ") ;//yw
		cyrl = cyrl.replace("ќ","қ") ;//kh
		cyrl = cyrl.replace("Ќ","қ") ;//kh
		cyrl = cyrl.replace("ç","ч") ;//kh
		cyrl = cyrl.replace("Ç","Ч") ;//kh
		cyrl = cyrl.replace("ş","ш") ;//kh
		cyrl = cyrl.replace("Ş","Ш") ;//kh
		cyrl = cyrl.replace("şç","щ") ;//kh
		cyrl = cyrl.replace("Şç","Щ") ;//kh
		cyrl = cyrl.replace("ѓ","ғ") ;//gh
		cyrl = cyrl.replace("ев","يەۋ") ;
		cyrl = cyrl.replace("ко","قو") ;
		cyrl = cyrl.replace("Ко","قو") ;
		
		cyrl = cyrl.replace("ку","قۇ") ;
		cyrl = cyrl.replace("Ку","قۇ") ;
		cyrl = cyrl.replace("ка","قا") ;
		cyrl = cyrl.replace("Ка","قا") ;
		cyrl = cyrl.replace("кы","قى") ;
		cyrl = cyrl.replace("Кы","قى") ;
		cyrl = cyrl.replace("кү","كۉ") ;
		cyrl = cyrl.replace("Кү","كۉ") ;
		cyrl = cyrl.replace("кө","كۅ") ;
		cyrl = cyrl.replace("Кө","كۅ") ;
		cyrl = cyrl.replace("көк","كۅك") ;

		cyrl = cyrl.replace("ке","كە") ;
		cyrl = cyrl.replace("Ке","كە") ;
		cyrl = cyrl.replace("кек","كەك") ;
		cyrl = cyrl.replace("кэ","كە") ;
		
		
		cyrl = cyrl.replace("кее","كەە") ;
		cyrl = cyrl.replace("Кее","كەە") ;
		cyrl = cyrl.replace("ки","كى") ;
		cyrl = cyrl.replace("Ки","كى") ;
        cyrl = cyrl.replace("КИ","كى") ;

		cyrl = cyrl.replace("күк","كۉك") ;
		cyrl = cyrl.replace("ок","وق") ;
		cyrl = cyrl.replace("ук","ۇق") ;
		cyrl = cyrl.replace("ак","اق") ;
		cyrl = cyrl.replace("ык","ىق") ;
		cyrl = cyrl.replace("үк","ۉك") ;
		cyrl = cyrl.replace("өк","ۅك") ;
		cyrl = cyrl.replace("Өк","ۅك") ;
		cyrl = cyrl.replace("ек","ەك") ;
                cyrl = cyrl.replace("ЕК","ەك") ;
		cyrl = cyrl.replace("ик","ئك") ;


		cyrl = cyrl.replace("оге","وگە") ;

		cyrl = cyrl.replace("ге","گە") ;
		cyrl = cyrl.replace("гү","گۉ") ;
		cyrl = cyrl.replace("гө","گۅ") ;
		cyrl = cyrl.replace("ги","گى") ;
		cyrl = cyrl.replace("ег","ەگ") ;
		cyrl = cyrl.replace("үг","ۉگ") ;
		cyrl = cyrl.replace("өг","ۅگ") ;
		cyrl = cyrl.replace("иг","ئگ") ;
		
		
		
		cyrl = cyrl.replace("го","عو") ;
		cyrl = cyrl.replace("га","عا") ;
		cyrl = cyrl.replace("гы","عى") ;
		cyrl = cyrl.replace("ГЫ","عى") ;
		cyrl = cyrl.replace("гу","عۇ") ;
		cyrl = cyrl.replace("ог","وع") ;
		cyrl = cyrl.replace("аг","اع") ;
		cyrl = cyrl.replace("ыг","ىع") ;
		cyrl = cyrl.replace("уг","ۇع") ;
		
		
		cyrl = cyrl.replace("Ц","تس") ;
		cyrl = cyrl.replace("ц","تس") ;




		
		cyrl = cyrl.replace("уулу"," ۇۇلۇ") ;
		cyrl = cyrl.replace("кызы"," قىزى") ;
		cyrl = cyrl.replace("ь","") ;//ts
	} 
	
	for(i=0; i<cyrl.length ; i++)
	{
		var ch = cyrl.charAt(i) ;
		switch( ch )
		{
			case 'Ё':
				case 'ё':
				temp += "يو"
				break ;
			case 'Щ':
				case 'щ':
				temp += "شش"
				break ;
			case 'Э':
				case 'э':
				temp += "ە" ;
				break ;
			case 'Я':
				case 'я':
				temp += "يا" ;
				break ;
			case 'Ю':
				case 'ю':
				temp += "يۇ" ;
				break ;
			case 'с':
				case 'С':
				temp += "\u0633" ;
				break ;
			case 'м':
				case 'М':
				temp += "\u0645" ;
				break ;
			case 'и':
				case 'И':
				temp += "\u0649" ;
				break ;
			case 'т':
				case 'Т':
				temp += "\u062A" ;
				break ;
			case 'ь':
				temp += "\u0600" ;//
				break ;
			case 'б':
				case 'Б':
				temp += "\u0628" ;
				break ;
			case 'ф':
				case 'Ф':
				temp += "\u0641" ;
				break ;
			case 'ы':
			case 'Ы':
			//case 'ь':
				temp += "\u0649" ;
				break ;
			case 'в':
				case 'В':
				temp += "\u06Cb" ;
				break ;
			case 'а':
//				case 'А':
			case '\u0410':
				temp += "\u0627" ;
				break ;
			case 'п':
				case 'П':
				temp += "\u067E" ;
				break ;
			case 'p':
				case 'P':
				temp += "\u0631" ;
				break ;

			case 'р':
				case 'Р':
				temp += "\u0631" ;
				break ;
			case 'о':
				case 'О':
				temp += "\u0648" ;
				break ;
			case 'л':
				case 'Л':
				temp += "\u0644" ;
				break ;
			case 'д':
				case 'Д':
				temp += "\u062F" ;
				break ;
			case 'ж':
				case 'Ж':
				temp += "\u062C" ;
				break ;
			case 'й':
				case 'Й':
				temp += "\u064A" ;
				break ;
			case 'у':
				case 'У':
				temp += "\u06C7" ;
				break ;
			case 'к':
				case 'К':
				temp += "\u0643" ;
				break ;
			case 'е':
				case 'Е':
				temp += "\u06D5" ;
				break ;
			case 'н':
				case 'Н':
				temp += "\u0646" ;
				break ;
			case 'г':
				case 'Г':
				temp += "\u06AF" ;
				break ;
			case 'ш':
				case 'Ш':
				temp += "\u0634" ;
				break ;
			case 'з':
				case 'З':
				temp += "\u0632" ;
				break ;
			case 'х':
				case 'Х':
				temp += "\u062D" ;
				break ;
			case 'ә':
				case 'Ә':
//					temp += "\u0675" ;
				temp += "\u0627" ;
				break ;
			case 'ң':
				case 'Ң':
				temp += "\u06AD" ;
				break ;
			case 'ғ':
				case 'Ғ':
				temp += "\u0639" ;
				break ;
			case 'ү':
				case 'Ү':
//					temp += "\u0677" ;
				temp += "\u06C9" ;
				break ;
			case 'у':
				case 'У':
				temp += "\u06C7" ;
				break ;
			case 'қ':
				case 'Қ':
				temp += "\u0642" ;
				break ;
			case 'ө':
				case 'Ө':
				temp += "\u06c5" ;
				break ;
			case 'һ':
			    case 'Һ':
				temp += "\u06BE" ;
				break ;
			case 'ч':
			case 'Ч':
				temp += "\u0686" ;
				break ;
			case ',':
				temp += "\u060C" ;
				break ;
			case '?':
				temp += "\u061F" ;
				break ;
			case ';':
				temp += "\u061B" ;
				break ;
			case '“':
				temp += "«" ;
				break ;
			case '”':
				temp += "»" ;
				break ;
			case '…':
				temp += "..." ;
				break ;
			default:
			var tmp = temp.charAt( temp.length-1) ;
				var tmp1 = cyrl.charAt( temp.length+1 );
				//window.alert(tmp);
				//if( (ch == '\u0065'| ch == '\u0045') & (tmp > '\u007A' | tmp1 > '\u007A'))
				//	temp += "\u06D5" ;
				//else if( (ch == '\u0069'| ch == '\u0049') & (tmp > '\u007A' | tmp1 > '\u007A') )
				//	temp += "\u0647" ;
				//else
					temp += ch ;
				break ;
		}
		ok = true ;
	}
	//alert(temp);
	return temp;
}

		
			
function getTranslation() {
        var txt = $('#getTranslation').val();/*获取需要翻译的文字*/
        $.getJSON(
            "https://translate.yandex.net/api/v1.5/tr.json/translate", "text="+txt+"&lang=ky-en&key=trnsl.1.1.20200330T184636Z.eb68ef6fbf7b5df8.04fb0a638ca715b87ee5db5726217543a3546434",
            function (res) {
                console.log("翻译：", res);
                if(res.code!==200){
                    alert('对不起，翻译有误，请重试！');
                    return
                }
                $('#translation').html(txt+" : "+res.text[0]);
            }
        )
    }
