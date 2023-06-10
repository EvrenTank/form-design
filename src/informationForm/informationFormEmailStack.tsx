import Input from '../components/input';
import MultilineInput from '../components/multilineInputOfInformationForm';
const EmailStack = () => {
  return (
    <>
      <Input label='E-Mail to' placeholder='E-Mail to'></Input>
      <Input label='Your E-Mail' placeholder='Your E-Mail' setTooltip={true} />
      <Input label='Title' placeholder='Title'></Input>
      <MultilineInput
        label='Message'
        placeholder='Your Message'
      ></MultilineInput>
    </>
  );
};

export default EmailStack;
