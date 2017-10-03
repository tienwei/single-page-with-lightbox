import reducers from './reducers';

describe('reducers', () => {
  const mockImageSet = [
    { id: 1, content: 'test 1', img: 'test1.png' },
    { id: 2, content: 'test 2', img: 'test2.png' }
  ];

  test('invlid action', () => {
    const mockAction = { type: 'INVALID_ACTION'};
    expect(reducers(undefined, mockAction)).toEqual({});
  });

  test('opens a modal', () => {
    const mockAction = {
      type: 'OPEN_MODAL', 
      active: true, 
      selectedImage: 'test.png'};
    expect(reducers(undefined, mockAction)).toEqual({
      modalActive: true, selectedImage: 'test.png' });
  });

  test('opens a gallery', () => {
    const mockAction = {
      type: 'OPEN_GALLERY', 
      active: true, 
      selectedId: 1,
      imageSet: mockImageSet
    };
    expect(reducers(undefined, mockAction)).toEqual({
      modalActive: true, selectedId: 1, imageSet: mockImageSet 
    });
  });

  test('goes to previous image', () => {
    const initState = {
      modalActive: true,
      selectedId: 'test2.png',
      imageSet: mockImageSet
    }
    const mockAction = {
      type: 'GO_PREVIOUS_IMAGE', 
      selectedId: 2,
      imageSet: mockImageSet
    };
    expect(reducers(initState, mockAction)).toEqual({
      modalActive: true, selectedId: 1, imageSet: mockImageSet 
    });
  });

  test('goes to next image', () => {
    const initState = {
      modalActive: true,
      selectedId: 0,
      imageSet: mockImageSet
    }
    const mockAction = {
      type: 'GO_NEXT_IMAGE', 
      selectedId: 1,
      imageSet: mockImageSet
    };
    expect(reducers(initState, mockAction)).toEqual({
      modalActive: true, selectedId: 2, imageSet: mockImageSet 
    });
  });

  test('closes a modal', () => {
    const mockAction = { type: 'CLOSE_MODAL', active: false};
    expect(reducers(undefined, mockAction)).toEqual({
      modalActive: false, selectedImage: '', imageSet: [] });
  });
});