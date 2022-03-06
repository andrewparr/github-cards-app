import Card from "./Card";
import Profile from "./Profile";

interface Props {
  profiles: Profile[];
}

const CardList = (props: Props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

export default CardList;
