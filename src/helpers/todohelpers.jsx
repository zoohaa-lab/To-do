import { supabase } from "../supabaseConfig";


export async function GetAllTodos(setTodos) {
    const {data} = await supabase.from("todo").select();
    console.log(data);
    setTodos(data);
}

export async function handleSubmitTodo(newTodo , description , setNewTodo) {
    console.log("submit",newTodo);
    const response = await supabase.from('todo').insert({
      title : newTodo ,
      description : description
    })
    setNewTodo("");
    console.log(response);
  }

export  async function handleCompleteTodo (id , name , setRandomState) {
    console.log("the handleComplete is running", id);
    const {data , error} = await supabase.from('todo').update({
      isCompleted : true
    }).eq('id',id);
    if (error) {
      console.error(error , "An error occured")
    } else {
      console.log(data);
      setRandomState(`The Todo has been updated Successfully ${name}`);
    }
  }

  export async function handleDeleteTodo(id , name , setRandomState) {
    const {error , data} = await supabase.from("todo").delete().eq('id', id);
    if (error) {
      console.error(error , "An error occured")
    } else {
      console.log(data);
      setRandomState(`Deleted Successfully ${name}`);
    }
  }



