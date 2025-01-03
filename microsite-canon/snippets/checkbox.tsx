import { Text } from '@backstage/canon';
import { Stack, Inline, Checkbox } from '@backstage/canon';

export const CheckboxPreview = () => {
  return <Checkbox label="Accept terms and conditions" />;
};

export const CheckboxAllVariants = () => {
  return (
    <Inline alignY="center">
      <Checkbox />
      <Checkbox checked />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" checked />
    </Inline>
  );
};

export const CheckboxPlayground = () => {
  return (
    <Stack>
      <Text>All variants</Text>
      <Inline alignY="center">
        <Checkbox />
        <Checkbox checked />
        <Checkbox label="Checkbox" />
        <Checkbox label="Checkbox" checked />
      </Inline>
    </Stack>
  );
};
