import React from 'react';
import { shallow } from 'enzyme';
import PostDetails from '../../../src/components/Posts/PostDetails';
import CommentForm from '../../../src/components/Comments/CommentForm';

jest.mock('react-router-dom', () => {
  return {
    useParams: jest.fn().mockReturnValue({
      postId: '1',
    }),
  };
});

describe('PostDetails', () => {
  test('Displays comment form when comment button is clicked', () => {
    const postDetails = shallow(<PostDetails />);
    const commentButton = postDetails.findWhere((node) => {
      return node.type() === 'button' && node.text() === 'Leave a Comment';
    });
    commentButton.simulate('click');
    const innerForm = postDetails.find(CommentForm);
    expect(innerForm.exists()).toEqual(true);
  });
});
