import React from 'react';
import Counter from '../../redux-app/src/components/Counter'
import Todos from ''

const App = () =>{
  return(
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  )
}

export default App;
