import { openModal, openGallery, closeModal, goPreviousImage, goNextImage } from './actions';

describe('actions', () => {
  const mockImageSet = [
    { id: 1, content: 'test 1', img: 'test1.png' },
    { id: 2, content: 'test 2', img: 'test2.png' }
  ];

  test('returns open modal action without selected images', () => {
    const expectedAction = { type: 'OPEN_MODAL', active: true, 
      selectedImage: '' };
    expect(openModal()).toEqual(expectedAction);
  });

  test('returns open modal action with selected images', () => {
    const expectedAction = { type: 'OPEN_MODAL', active: true, 
      selectedImage: 'test.png' };
    expect(openModal('test.png')).toEqual(expectedAction);
  });

  test('returns open gallery action with selected id', () => {
    const expectedAction = { type: 'OPEN_GALLERY', active: true, selectedId: 2,
      imageSet: mockImageSet };
    expect(openGallery(2, mockImageSet)).toEqual(expectedAction);
  });

  test('returns close modal action', () => {
    const expectedAction = { type: 'CLOSE_MODAL', active: false, selectedImage: '' };
    expect(closeModal()).toEqual(expectedAction);
  });

  test('goes to previous image', () => {
    const expectedAction = { type: 'GO_PREVIOUS_IMAGE', selectedId: 1,
      imageSet: mockImageSet};
     expect(goPreviousImage(1, mockImageSet)).toEqual(expectedAction);
  });

  test('goes to next image', () => {
    const expectedAction = { type: 'GO_NEXT_IMAGE', selectedId: 1,
      imageSet: mockImageSet};
     expect(goNextImage(1, mockImageSet)).toEqual(expectedAction);
  });
});