export const SignInForm = () => {
  return (
    <form autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};
