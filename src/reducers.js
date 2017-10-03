const reducers = (state, action) => {
  switch(action.type) {
    case 'OPEN_MODAL':
      return { ...state, modalActive: action.active, selectedImage: action.selectedImage };
    case 'CLOSE_MODAL':
      return { ...state, modalActive: action.active, selectedImage: '', imageSet: [] };
    case 'OPEN_GALLERY':
      return { 
        ...state, 
        modalActive: action.active, 
        selectedId: action.selectedId, 
        imageSet: action.imageSet };
    case 'GO_PREVIOUS_IMAGE':
      const previousId = action.selectedId - 1;
      return { 
        ...state, 
        selectedId: previousId > 0 ? previousId : action.imageSet.length ,
        imageSet: action.imageSet
      };
    case 'GO_NEXT_IMAGE':
      const nextId = action.selectedId + 1;
      return { 
        ...state, 
        selectedId: nextId > action.imageSet.length ? 1 : nextId,
        imageSet: action.imageSet
      };
    default:
      return {};
  }
}

export default reducers;