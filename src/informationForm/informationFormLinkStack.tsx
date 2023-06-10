import Input from '../components/input';
import MultilineInput from '../components/multilineInputOfInformationForm';
const LinkStack = () => {
  return (
    <>
      <Input label='Title' placeholder='Title'></Input>
      <MultilineInput
        label='Message'
        placeholder='Your Message'
      ></MultilineInput>
    </>
  );
};

export default LinkStack;
