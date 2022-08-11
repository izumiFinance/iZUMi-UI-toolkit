import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
// import theme from '../../theme/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'customButton',
    component: CustomButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const CustomBt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomBt.args = {
    variant: 'outline',
    text: 'Button',
    w: '180px',
    h: '60px',
};
export const buyizi = Template.bind({});
buyizi.args = {
    text: 'buyizi',
};
