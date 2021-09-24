import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Badge, { BadgeProps } from '.';
import Button from '../button';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default'
}

const BadgeRow = styled.div `
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const Sizes = () => {
  return (
    <>
    <BadgeRow>
      <Badge size='extraLarge'>Extra Large</Badge>
      <Badge size='large'>Large</Badge>
      <Badge size='default'>Default</Badge>
      <Badge size='small'>Small</Badge>
    </BadgeRow>
    <BadgeRow>
      <Badge>Default</Badge>
      <Badge type='secondary'>Secondary</Badge>
      <Badge type='danger'>Default</Badge>
      <Badge type='success'>Success</Badge>
      <Badge type='warning'>Warning</Badge>
      <Badge type='light'>Light</Badge>
    </BadgeRow>
    <BadgeRow>
      <Badge rounded>Default</Badge>
      <Badge type='secondary' rounded>Secondary</Badge>
      <Badge type='danger' rounded>Default</Badge>
      <Badge type='success' rounded>Success</Badge>
      <Badge type='warning' rounded>Warning</Badge>
      <Badge type='light' rounded>Light</Badge>
    </BadgeRow>
    <Button type='secondary'>
      Total Clicks
      <Badge type='light' rounded>199</Badge>
    </Button>
    </>
    );
}