DELETE PETICIONAMENTO.PETICAO_EVENTO WHERE SEQ_PROTOCOLO = 9002;               

DELETE PETICIONAMENTO.ENVOLVIDO WHERE SEQ_ENVOLVIDO IN (9000, 9001, 9002);          

DELETE PETICIONAMENTO.EVENTO WHERE SEQ_EVENTO IN (9000, 9001, 9002, 9003);              

DELETE PETICIONAMENTO.ANEXO WHERE SEQ_ANEXO = 9000;             

DELETE PETICIONAMENTO.PETICAO WHERE SEQ_PROTOCOLO = 9002;         