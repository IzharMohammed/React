import Todo from "./Todo"
function App() {
  const todos=[
        {data:'todo1' , id:1},
        {data:'todo2' , id:2},
        {data:'todo3' , id:3}
];

  return (
<>
<div>
  <Todo todos={todos} />
</div>
</>
  )
}

export default App
