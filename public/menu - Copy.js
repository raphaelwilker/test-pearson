		
d = new dTree('d');

d.add(0,-1,'');
d.add(1,0,'Apresenta��o','javascript: go(1)','Apresenta��o','_self',true);
d.add(2,1,'Boas-Vindas','javascript: go(2)', 'Boas-Vindas');
d.add(3,1,'Objetivo','javascript: go(3)', 'Objetivo');
d.add(4,1,'Conhecimentos','javascript: go(4)', 'Conhecimentos');
d.add(5,1,'Carga hor�ria','javascript: go(5)', 'Carga hor�ria');
d.add(6,1,'Metodologia','javascript: go(6)', 'Metodologia');
d.add(7,1,'Avalia��o','javascript: go(7)', 'Avalia��o');

d.add(8,0, 'Situa��o de aprendizagem 1, Apresenta��o','javascript: go(8)', 'Situa��o de aprendizagem 1, Apresenta��o','_self',true);
d.add(9,8,'Sistemas de gest�o da qualidade','javascript: go(9)', 'Sistemas de gest�o da qualidade');
d.add(10,8, 'Resolvendo problemas com o retrabalho', 'javascript: go(10)', 'Resolvendo problemas com o retrabalho');
d.add(11,8, 'Desafio 1', 'javascript: go(11)', 'Desafio 1');
d.add(12,8, 'Princ�pios da gest�o da qualidade', 'javascript: go(12)', 'Princ�pios da gest�o da qualidade');
d.add(13,8, 'Qualidade e competitividade', 'javascript: go(13)', 'Qualidade e competitividade');
d.add(14,8, 'Terminologia da �rea da gest�o da qualidade', 'javascript: go(14)', 'Terminologia da �rea da gest�o da qualidade');

d.add(15,0, 'Situa��o de aprendizagem 2', '#', 'Situa��o de aprendizagem 2', '', true);
d.add(16,15,'Apresenta��o','javascript: go(13)', 'Situa��o de Aprendizagem 2 - Apresenta��o');
d.add(17,15,'Resolvendo problemas com o retrabalho','javascript: go(14)', 'Situa��o de Aprendizagem 2 - Resolvendo problemas com o retrabalho');
d.draw();
  
  
//Exemplo   d.add(sequencia, n� pai, Nome, link, titulo(title, hover), target, aberto(true, false), imagem)
