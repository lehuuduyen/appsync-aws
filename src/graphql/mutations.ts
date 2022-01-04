export const createTodo = `mutation CreateTodo($input:CreateTodoInput!) {
  createTodo(input: $input){
    id 
    name
  }
}`
export const updateTodo = `mutation UpdateTodo($input:UpdateTodoInput!) {
  updateTodo(input: $input){
    id 
    name
  }
}`
export const deleteTodo = `mutation DeleteTodo($input:DeleteTodoInput!) {
  deleteTodo(input: $input){
    id 
    name
  }
}`
