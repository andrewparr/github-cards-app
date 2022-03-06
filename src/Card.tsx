import "./Card.css";

interface Props {
  avatar_url: string;
  name: string;
  company: string;
}

function Card(profile: Props) {
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="avatar" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
}

export default Card;
