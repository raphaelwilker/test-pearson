d = new dTree('d');

d.add(0,-1,'');
d.add(1,0,'Gera��o de tens�o alternada em diferentes posi��es','#','Introdu��o','',true);
d.add(2,1,'Introdu��o','javascript: go(1)','Introdu��o');
d.add(3,1,'Gera��o de tens�o alternada em diferentes posi��es','javascript: go(2)','Gera��o de tens�o alternada em diferentes posi��es');

d.add(4,0, 'Unidade de medida de frequ�ncia','#', 'Unidade de medida de frequ�ncia','',true);
d.add(5,4, 'Unidade de medida de frequ�ncia', 'javascript: go(3)', 'Unidade de medida de frequ�ncia');

d.add(6,0, 'Res�duos resultantes da poda de �rvores','#', 'Res�duos resultantes da poda de �rvores','',true);
d.add(7,6, 'Res�duos resultantes da poda de �rvores', 'javascript: go(4)', 'Res�duos resultantes da poda de �rvores');

d.draw();

//Exemplo   d.add(sequencia, n� pai, Nome, link, titulo(title, hover), target, aberto(true, false), imagem)
