import { Post } from '../../models/post';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    {
      id: '1',
      title: 'Sample title 1',
      description: 'Sample description 1',
    },{
      id: '2',
      title: 'Sample title 2',
      description: 'Sample description 2',
    },{
      id: '3',
      title: 'Sample title 3',
      description: 'Sample description 3',
    },{
      id: '4',
      title: 'Sample title 4',
      description: 'Sample description 4',
    },{
      id: '5',
      title: 'Sample title 5',
      description: 'Sample description 5',
    },
  ],
};
