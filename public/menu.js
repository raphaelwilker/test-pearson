d = new dTree('d');

d.add(0,-1,'');
d.add(1,0,'Geração de tensão alternada em diferentes posições','#','Introdução','',true);
d.add(2,1,'Introdução','javascript: go(1)','Introdução');
d.add(3,1,'Geração de tensão alternada em diferentes posições','javascript: go(2)','Geração de tensão alternada em diferentes posições');

d.add(4,0, 'Unidade de medida de frequência','#', 'Unidade de medida de frequência','',true);
d.add(5,4, 'Unidade de medida de frequência', 'javascript: go(3)', 'Unidade de medida de frequência');

d.add(6,0, 'Resíduos resultantes da poda de árvores','#', 'Resíduos resultantes da poda de árvores','',true);
d.add(7,6, 'Resíduos resultantes da poda de árvores', 'javascript: go(4)', 'Resíduos resultantes da poda de árvores');

d.draw();

//Exemplo   d.add(sequencia, nó pai, Nome, link, titulo(title, hover), target, aberto(true, false), imagem)
