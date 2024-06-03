import { useState, useEffect } from "react";

const REMEMBER_STORAGE_KEY = "remember";
const EMAIL_STORAGE_KEY = "email";

const useRememberEmail = () => {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");

  const handleChangeRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(
      REMEMBER_STORAGE_KEY,
      e.target.checked ? "true" : "false"
    );
    setRemember(e.target.checked);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(EMAIL_STORAGE_KEY, e.target.value);
    setEmail(e.target.value);
  };

  useEffect(() => {
    return () => {
      if (
        localStorage.getItem(REMEMBER_STORAGE_KEY) === "false" ||
        localStorage.getItem(REMEMBER_STORAGE_KEY) === null
      ) {
        localStorage.removeItem(EMAIL_STORAGE_KEY);
        localStorage.removeItem(REMEMBER_STORAGE_KEY);
      }
    };
  }, [email, remember]);

  useEffect(() => {
    if (window) {
      const remember = localStorage.getItem(REMEMBER_STORAGE_KEY);
      if (remember === "true") {
        setRemember(true);

        // Get email from local storage
        const email = localStorage.getItem(EMAIL_STORAGE_KEY);
        if (email) {
          setEmail(email);
        }
      } else {
        setRemember(false);
      }
    }
  }, []);

  return { remember, email, handleChangeRemember, handleChangeEmail };
};

export default useRememberEmail;
