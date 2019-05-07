const SelectionReducer = (state = null, action) => {
    switch(action.type) {
        case 'select_library':
            return action.payload;

        default:
          return state;
    }
};

export default SelectionReducer;