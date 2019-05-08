		
d = new dTree('d');

d.add(0,-1,'');
d.add(1,0,'Apresentação','javascript: go(1)','Apresentação','_self',true);
d.add(2,1,'Boas-Vindas','javascript: go(2)', 'Boas-Vindas');
d.add(3,1,'Objetivo','javascript: go(3)', 'Objetivo');
d.add(4,1,'Conhecimentos','javascript: go(4)', 'Conhecimentos');
d.add(5,1,'Carga horária','javascript: go(5)', 'Carga horária');
d.add(6,1,'Metodologia','javascript: go(6)', 'Metodologia');
d.add(7,1,'Avaliação','javascript: go(7)', 'Avaliação');

d.add(8,0, 'Situação de aprendizagem 1, Apresentação','javascript: go(8)', 'Situação de aprendizagem 1, Apresentação','_self',true);
d.add(9,8,'Sistemas de gestão da qualidade','javascript: go(9)', 'Sistemas de gestão da qualidade');
d.add(10,8, 'Resolvendo problemas com o retrabalho', 'javascript: go(10)', 'Resolvendo problemas com o retrabalho');
d.add(11,8, 'Desafio 1', 'javascript: go(11)', 'Desafio 1');
d.add(12,8, 'Princípios da gestão da qualidade', 'javascript: go(12)', 'Princípios da gestão da qualidade');
d.add(13,8, 'Qualidade e competitividade', 'javascript: go(13)', 'Qualidade e competitividade');
d.add(14,8, 'Terminologia da área da gestão da qualidade', 'javascript: go(14)', 'Terminologia da área da gestão da qualidade');

d.add(15,0, 'Situação de aprendizagem 2', '#', 'Situação de aprendizagem 2', '', true);
d.add(16,15,'Apresentação','javascript: go(13)', 'Situação de Aprendizagem 2 - Apresentação');
d.add(17,15,'Resolvendo problemas com o retrabalho','javascript: go(14)', 'Situação de Aprendizagem 2 - Resolvendo problemas com o retrabalho');
d.draw();
  
  
//Exemplo   d.add(sequencia, nó pai, Nome, link, titulo(title, hover), target, aberto(true, false), imagem)
