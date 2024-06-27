const Looger = (state) => (next) => (action) => {
    console.log("Current State :", state.getState());
    next(action)
    console.log("Action :", action);
    console.log("Next State :", state.getState());
    next(action)
}
export default Looger