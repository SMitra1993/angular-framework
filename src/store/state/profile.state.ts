import { Profile } from '../../models/profile';

export interface ProfileState {
  profile: Profile[];
}

export const initialState: ProfileState = {
  profile: [
    {
      id: '1',
      title: 'Sample title',
      description: 'Sample description',
    },
  ],
};
