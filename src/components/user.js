
const generateRandomString = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState();

  const handleLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const generatePassword = () => {
    const randomPassword = generateRandomString(passwordLength);
    setPassword(randomPassword);
  };

  return (
    <div>
      <h2>Oluşturulan Şifre: {password}</h2>
      <label>
        Şifre Uzunluğu:
        <input
          type="number"
          value={passwordLength}
          onChange={handleLengthChange}
        />
      </label>
      <button onClick={generatePassword}>Şifre Oluştur</button>
    </div>
  );
};

export default PasswordGenerator;
