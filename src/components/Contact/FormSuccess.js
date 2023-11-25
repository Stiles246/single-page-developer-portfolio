import { useState } from "react";
import Contact from './Contact';

function FormSuccess() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }


  return (
    <>
      {!isSubmitted ? <Contact submitForm={submitForm} /> : <Contact submitForm={submitForm} /> }
    </>
  )
}

export default FormSuccess
