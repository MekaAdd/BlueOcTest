import React from 'react'
import ApiDisplay from './features/FetchAPI/ApiDisplay'
import PostForm from './features/PostAPI/PostForm';


function App() {
  return (
    <div>
      <PostForm></PostForm>
      <ApiDisplay></ApiDisplay>
    </div>
  );
}

export default App;
