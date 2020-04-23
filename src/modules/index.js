//createStore 함수를 사용하여 스토어를 만들기 위해선 리듀서를 하나만 사용해야함. 따라서 counter 리듀서와 todos 리듀서를 하나로 합처줌.
//파일 이름을 index.js로 설정해 놓으면 나중에 불러올땐 디렉터리 이름까지만 입력하여 불러올 수 있다.
// import rootReducer from './modules';
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

