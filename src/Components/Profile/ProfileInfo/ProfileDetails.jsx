const ProfileDetails = ({ profile, isOwner, activateEdit, }) => {
  const Contact = ({ title, value }) => {
    if (value == null || value == '') return null;
    return (
      <div>
        <b>{title}</b>: {value}
      </div>
    );
  };

  return (
    <div>
        {isOwner && <div><button onClick = {activateEdit}>Edit profile</button></div>}
      <div>Full Name: {profile.fullName}</div>
      <div>
        About me:
        {profile.aboutMe
          ? profile.aboutMe
          : "info is missing"}
      </div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => (
          <Contact title={key} value={profile.contacts[key]} />
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;