loadPage();

var idAtual = 1;
var limite = 0;

$(function(){    
 limite= ($('a.file').length);

});

//Variáveis de inicialização
var largura = 0;
var altura = 0;
var content = 0;

var tamFonte = 12;
var fonteTitulo = 15;



 suspendData = doLMSGetValue("cmi.suspend_data");

if (suspendData != ''){
    trocaBgLink();

}else{
    
    for(var j = 0;j <= limite;j++){
        
        suspendData += 0;
    }


}


function atualizaSuspendData(id){
           
    var novo = '-';
        
   for(var k =1; k<=(limite+1);k++){
                
        if(k == id){
            novo = novo+''+1;
        }else{

            novo = novo+''+suspendData.charAt(k);
        }
    }
    
        suspendData = novo;
    	doLMSSetValue("cmi.suspend_data", novo);
        doLMSCommit();
    
    
}


$(function() {

    calculaWidth();
        $(window).resize(function() { 
       calculaWidth();

    });

function calculaWidth(){
        
        largura = $(window).width();
        altura = $(window).height();

        if ($("#bg-right").attr('class') == 'visible') {
            content = largura-50;
        } else {            
            content = largura-232;
        }

        if (altura >= 450){
            $('#content').css('height', (altura - 100)+'px');
            $('#conteudo').css('height', (altura - 220)+'px');
            
            var boxContent = $('#content').height();
            
            if(boxContent > 600){
                $('#content-esq').css('height', '96%');
                $('#content-dir').css('height', '98%');
            } else {
                $('#content-esq').css('height', '94%');
                $('#content-dir').css('height', '96%');
            }
           
        } else {
            $('#content').css('height', '350px');
            $('#conteudo').css('height', '230px');
        }
     
     
     $("#content").css('width', parseInt((content/largura)*100-0.5)+'%');
}
     
     
    
	$("#bg-right").live('click',function(){
                if ($("#bg-right").attr('class') == 'visible') {
                    
                      largura = $(window).width();
                      content = largura-232;

                    $("#bg-right").removeClass('visible');
                    $("#content").animate( {width:parseInt((content/largura)*100-0.5)+'%'}, 1500 );
                    $('.dtree').animate({width:'165px'},1500);
                    $("#menu").animate( {width:"190"}, 1500, function(){
                    $("#bg-right").css('background-image', 'url(images/menu-right.jpg)');
                        
                    } );
                } else {
                    
                      largura = $(window).width();
                      content = largura-50;
                    
                    $("#bg-right").addClass('visible');
                    $('#menu ul').animate({opacity: 0}, 1000);
                    $('.dtree').animate({width:'0px'},1500);
                    $("#menu").animate( {width:"9"}, 1500, function(){
                        $("#bg-right").css('background-image', 'url(images/slice-left.jpg)');
                    $("#content").animate( {width:parseInt((content/largura)*100-0.5)+'%'}, 800 );
                    });
                }

         
        });
        
       $(".font-content img").click(function(){			     						 
		//var $content = $('#conteudo p');
        fonteTitulo = $('#conteudo h1').css('font-size');
		tamFonte = $('#conteudo p').css('font-size');
		       
		if (this.id == 'aumenta-fonte' && parseInt(tamFonte) <=20 )  {              
			tamFonte = parseInt(tamFonte) +1;
            fonteTitulo = parseInt(fonteTitulo) +1;
                } else if(this.id == 'diminui-fonte' && parseInt(tamFonte) >= 12) { 
			tamFonte = parseInt(tamFonte) -1;
            fonteTitulo = parseInt(fonteTitulo) -1; 
                }        
        $('#conteudo h1').css('fontSize', fonteTitulo+'px');
		$('#conteudo p').css('fontSize', tamFonte+'px');	
		$('#conteudo strong').css('fontSize', tamFonte+'px');
		$('#conteudo em').css('fontSize', tamFonte+'px');
		$('#conteudo h1 em').css('fontSize', fonteTitulo+'px');
		$('#conteudo a').css('fontSize', tamFonte+'px');
		$('#conteudo li').css('fontSize', tamFonte+'px');
	 }); 
       
        $('#alto-contraste').live('click', function(){
            
            if ($("#conteudo").attr('class') == 'alto-contraste'){
                $('#conteudo p').css({color: '#000'});
				$('#conteudo strong').css('color', '#000');
				$('#conteudo em').css('color', '#000');
				$('#conteudo h1 em').css('color', '#009966');
				$('#conteudo a').css('color', '#000');
				$('#conteudo a.ext').css('color', '#009');
				$('#conteudo a.mo').css('color', '#666');
				$('#conteudo a.mo').css('background-color', '#9BFF9B');
				$('#conteudo li').css('color', '#000');
				$('#conteudo .fimEtapa p').css('color', '#C00000');
				$('#conteudo th p').css('color', '#000');
				$('#conteudo').css('background', '');
				$('.ui-accordion-header').css('background', '');
				$('.ui-accordion-content').css('background', ''); 
				$('.tooltipContent').css('background', '');
				$('#conteudo .bgClaro').css('background', '#9bff9b');
				$('#conteudo .bgEscuro').css('background', '#009966');
				$('#conteudo .bgEscuro strong').css({color: '#FFF'});
				$('.content').css('background', '#9bff9b'); 
				$('#saiba').css('background', '#FEEBB2');      
                $('#conteudo').removeClass('alto-contraste');

            }else {
                $('#conteudo p').css('color', '#FFF');
				$('#conteudo strong').css('color', '#FFF');
				$('#conteudo em').css('color', '#FFF');
				$('#conteudo h1 em').css('color', '#009966');
				$('#conteudo a').css('color', '#FFF');
				$('#conteudo a.ext').css('color', '#FFF');
				$('#conteudo a.mo').css('color', '#666');
				$('#conteudo a.mo').css('background-color', '#9BFF9B');
				$('#conteudo li').css('color', '#FFF');
				$('#conteudo .fimEtapa p').css('color', '#FFF');
				$('#conteudo th p').css('color', '#000');
				$('#conteudo').css('background', '#000');
				$('.ui-accordion-header').css('background', '#000');
				$('.ui-accordion-content').css('background', '#000');
				$('.tooltipContent').css('background', '#000');
				$('#conteudo .bgClaro').css('background', '#009966');
				$('#conteudo .bgEscuro').css('background', '#009966');
				$('.content').css('background', '#009966');
                $('#conteudo').addClass('alto-contraste');
                $('#saiba').css('background', '#FFF');
                $('#saiba p').css('color', '#000');
            }
        });	   
        
        $('.sair').click(function(){
        window.close();
        });
        
        $('.file').live('click', function(e){

            if ($(this).attr('href') != '#'){
              $($(this).css('background-image', 'url(images/visitado.jpg)'));
                
            }

        });
        
        $(".font-content img[title], .navegacao-content img[title]").tooltip();
        $(".seta-left").attr('src', 'images/seta-left-des.png');
        
        
        


});

function go(id){
    
   
   if(id <= limite && id > 0){
       
        $('#conteudo').html('<img src=\'images/lightbox-ico-loading.gif\'  style="margin: 180px 45%" />');
           $.ajax({
              url: 'paginas/pagina'+id+'.html',
              
              success: function(data){
                  $('#conteudo').html(data);
                   if ($("#conteudo").attr('class') == 'alto-contraste'){

                    $('#conteudo').css({background: '#000'});
                    $('#conteudo p').css({color:'#FFF'});
					$('#conteudo strong').css({color:'#FFF'});
					$('#conteudo li').css({color:'#FFF'});
                    $('#conteudo').addClass('alto-contraste');
                    $('#saiba').css('background', '#FFF');
                    $('#saiba p').css('color', '#000');
                    }

                    if(tamFonte != 12){
                        $('#conteudo p').css('font-size', tamFonte);
						$('#conteudo strong').css('font-size', tamFonte);
						$('#conteudo li').css('font-size', tamFonte);
                        $('#conteudo h1').css('fontSize', fonteTitulo);
                    }

                    $('a[href="javascript: go('+id+')"]').css('background-image', 'url(images/visitado.jpg)');   

                    atualizaSuspendData(id);


                    if(id == limite) {
                        $(".seta-right").attr('src', 'images/seta-right-des.png');
                    } else {
                        $(".seta-right").attr('src', 'images/seta-right.jpg');
                    }

                    if(id == 1) {
                        $(".seta-left").attr('src', 'images/seta-left-des.png');
                    }else{
                        $(".seta-left").attr('src', 'images/seta-left.jpg');
                    }
                    }
           
            });
       
        
    // Deve ser persistida em uma variavel do scorm
    idAtual = id;
   }

    
}

function next(){
    go(idAtual+1);
    
    
    var idFile = $('a[href="javascript: go('+idAtual+')"]').attr('onclick');

    d.s(idFile.match(/[0-9]/));
}

function prev(){
    
    go(idAtual-1);
    var idFile = $('a[href="javascript: go('+idAtual+')"]').attr('onclick');

    d.s(idFile.match(/[0-9]/));
        
    
}


function trocaBgLink(){
    $(function(){
        for(var i =0; i<=(limite);i++){
            if(suspendData.charAt(i) == 0){

                $('a[href="javascript: go('+1+')"]').css('background-image', 'url(images/visitado.jpg)'); 
		d.s(idAtual+1);		
            }
            else if(suspendData.charAt(i) != 0) {

                $('a[href="javascript: go('+i+')"]').css('background-image', 'url(images/visitado.jpg)'); 
				
            }
        }
    });
}

// outras funções - flash e troca aba de tabela interativa


function flash(arquivo,flash_vars,largura,altura,bgcolor) {
if(typeof flash_vars=='undefined') flash_vars='';
if(typeof largura=='undefined') largura='100%';
if(typeof altura=='undefined') altura='100%';
if(typeof bgcolor=='undefined') bgcolor='#ffffff';
return('<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+largura+'" height="'+altura+'" align="top">\n'
+' <param name="movie" value="'+arquivo+'"/>\n'
+' <param name="quality" value="high"/>\n'
+' <param name="allowScriptAccess" value="sameDomain"/>\n'
+' <param name="bgcolor" value="'+bgcolor+'"/>\n'
+' <param name="wmode" value="transparent"/>\n'
+' <param name="scale" value="showall"/>\n'
+(flash_vars?' <param name="FlashVars" value="'+flash_vars+'"/>\n':'')
+' <embed src="'+arquivo+(flash_vars?'" FlashVars="'+flash_vars:'')+'" quality="high" scale="showall" bgcolor="'+bgcolor+'" wmode="transparent" allowScriptAccess="sameDomain" width="'+largura+'" height="'+altura+'" name="flash" align="top" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_br"/>\n'
+"</object>\n");
}

function popup(url,params) {
if(typeof params=='undefined') params={};
if(typeof params['win_name']=='undefined') params['win_name']='jan_pop';
if(typeof params['w']=='undefined') params['w']=810;
if(typeof params['h']=='undefined') params['h']=screen.height-55;
if(typeof params['scroll']=='undefined') params['scroll']='yes';
if(typeof params['resizable']=='undefined') params['resizable']='yes';
var idPopup=window.open(url,params['win_name'],'scrollbars='+params['scroll']+',resizable='+params['resizable']+','
+'toolbar=no,location=no,directories=no,menubar=no,status=yes,top=0,left='
+((screen.width-params['w'])/2)+',width='+params['w']+',height='+params['h']);
idPopup.focus();
}

function troca_aba(idx_ssm,layer_id,obj) {
var id,obj2;
// troca as imagens das abas
$('[id^='+layer_id+'_img_]').each(function() {
obj2=$(this);
id=obj2.attr('id');
id=parseInt(id.substring(id.lastIndexOf('_')+1),10);
if(id!=idx_ssm) obj2.attr('src',obj2.attr('src').replace('_on','_off'));
else obj2.attr('src',obj2.attr('src').replace('_off','_on'));
});
if(layer_id.indexOf('bloco_menu_')==0) { // troca as classes
$(obj).parent().children().each(function() {
this.className=(this!=obj?'menu_inativo':'menu_ativo');
});
}
if(layer_id.indexOf('bloco')>=0) {
$('[id^='+layer_id.replace('bloco','conteudo')+'_]').each(function() {
if($(this).attr('id').replace('conteudo','bloco')==layer_id+'_'+idx_ssm) $(this).show();
else $(this).hide();
});
}
}

function troca_aba2(idx_ssm,layer_id,obj) {
var id;
if(layer_id.indexOf('bloco_menu_')==0) { // troca as classes
$(obj).parent().parent().children().each(function() {
$(this).children().each(function() {
if(this.className=='menu_inativo2'||this.className=='menu_ativo2')
this.className=(this!=obj?'menu_inativo2':'menu_ativo2');
});
});
}
if(layer_id.indexOf('bloco')>=0) {
$('[id^='+layer_id.replace('bloco','conteudo')+'_]').each(function() {
if($(this).attr('id').replace('conteudo','bloco')==layer_id+'_'+idx_ssm) $(this).show();
else $(this).hide();
});
}
}
