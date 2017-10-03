export const openModal = (selectedImage = '') => ({
  type: 'OPEN_MODAL', active: true, selectedImage
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL', active: false, selectedImage: ''
});

export const openGallery = (selectedId = 0, imageSet = []) => ({
  type: 'OPEN_GALLERY', active: true, selectedId, imageSet
});

export const goPreviousImage = (selectedId = 1, imageSet = []) => ({
  type: 'GO_PREVIOUS_IMAGE', selectedId, imageSet
});

export const goNextImage = (selectedId = 1, imageSet = []) => ({
  type: 'GO_NEXT_IMAGE', selectedId, imageSet
});