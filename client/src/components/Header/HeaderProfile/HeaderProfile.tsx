import React from 'react';
import { Icon, Image, Label } from 'semantic-ui-react';
import { HeaderProfileINF } from './headerProfile.interface';

export const HeaderProfile:React.FC<HeaderProfileINF> = ({ userData }) => {
  console.log(userData);
  const { email, name, picture } = userData;
  return (
    <div>
      <Label as="a" color="grey">
        <Image avatar spaced="right" src={picture} />
        {name}
        <Label color="blue">
          <Icon name="mail" />
          {email}
        </Label>
      </Label>

    </div>
  );
};
