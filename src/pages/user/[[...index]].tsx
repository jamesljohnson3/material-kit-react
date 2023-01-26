import { UserProfile } from '@clerk/clerk-react';
import Box2 from '../../components/Box2';
import EmptyBox from '../../components/emptybox';
import Tease from '../../components/box5';


const UserProfilePage = () => <><Box2 /><EmptyBox /><UserProfile path='/user' routing='path' /></>;

export default UserProfilePage;
