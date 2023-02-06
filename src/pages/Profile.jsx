import {useParams} from "react-router-dom";

const Profile = () => {
  const { name, age } = useParams();

  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <p>
        O meu nome é {name} e tenho {age} anos !
      </p>
    </div>
  );
};

export default Profile;
