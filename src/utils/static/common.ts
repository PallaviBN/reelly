export const isNullorEmpty = (value: any) => {
  return value === null || value === undefined || !value.trim();
};

export const validate = (
  isSignIn: boolean,
  name: string | undefined,
  email: string | undefined,
  pwd: string | undefined
): string | null => {
  const isNameValid = name && /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPwdValid = pwd && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);

  if (!isSignIn) {
    return !isEmailValid
      ? !isPwdValid
        ? !isNameValid
          ? "Please enter a valid Name, Email, and Password."
          : "Please enter a valid Email and Password."
        : !isNameValid
        ? "Please enter a valid Name and Email Address."
        : "Please enter a valid Email Address."
      : !isPwdValid
      ? !isNameValid
        ? "Please enter a valid Name and Password."
        : "Please enter a valid Password."
      : !isNameValid
      ? "Please enter a valid Name."
      : null;
  }
  return isEmailValid
    ? isPwdValid
      ? null
      : "Please enter a valid Password"
    : isPwdValid
    ? "Please enter a valid Email Address"
    : "Please enter a valid Email and Password.";
};
