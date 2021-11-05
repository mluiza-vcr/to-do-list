# Intruções para rodar o projeto

#### 1: Você deve rodar os comandos
```
npm install

npm run dev
```

#### 2: depois, se você não estiver com o mongoDB iniciado rode o comando no terminal

```bash
sudo service mongod start 
```

----------------------------------------------------------------

# Instruções para usar a API

### Se for usar no ambiente local: http://localhost:3001/
### Link do deploy da api: https://to-do-list-mluiza.herokuapp.com/tasks

</br>


----------------------

  ## Método POST na rota /tasks para cadastrar uma tarefa

 #### Body da requisição esperado: JSON
  
### EXEMPLO:

```
{
  
"name": "Caminhar na esteira"
"status": "pendente"

}
```
 **OBS**: *Todos os campos são obrigatórios, a data é atualizada automaticamente e o id é designado automaticamente pelo MongoDB*

*Resposta da api: JSON*

--------
 </br> 
  
## Método GET na rota /tasks/ para visualizar todas as tarefas
 
  *Resposta da api: um array com todas as tarefas*
  
</br>

--------

## Método PUT na rota /tasks/:id para atualizar as informações nos campos name e status de uma tarefa
  
#### Body da requisição esperado JSON
  
 ## EXEMPLO: 
  
```  
{

"name": "Fazer o projeto",
"status": "em andamento"

}
```
 **OBS**: *Todos os campos são obrigatórios, a data é atualizada automaticamente e o id é designado automaticamente pelo MongoDB*

*Resposta da api: JSON*

</br>

## Método DELETE na rota /tasks/:id para deletar uma tarefa

</br>