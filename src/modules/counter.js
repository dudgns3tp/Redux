import {createAction, handleActions} from 'redux-actions';
// 액션 타입 정의!  모듈이름/액션 이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE'
//액션 함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE)
//export const decrease = () => ({type:DECREASE});
//counter 모듈의 초기 상태와 리듀서 함수를 만들어준다
const initialState = {
    number: 0
}

const counter = handleActions(
    {
        [INCREASE] : (state,action) => ({number:state.number + 1}),
        [DECREASE] : (state,action) => ({number: state.number -1}), 
    },
    initialState,
);
// function counter(state = initialState, action){
//     switch(action.type){
//         case INCREASE :
//             return {
//                 number: state.number+1
//             };
//         case DECREASE :
//             return {
//                 number:state.number-1
//             };
//         default:
//             return state
//     }
// }
export default counter;