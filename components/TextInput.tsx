import * as React from 'react';
import { TextInput as PaperTextInput, TextInputProps} from 'react-native-paper';

const TextInput = (props: TextInputProps) => {

  return (
    <PaperTextInput {...props}/>
  );
};

export default TextInput;