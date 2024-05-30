import CryptoJS from "crypto-js";

const iterations = 200; // 반복 횟수

export const hash = (password: string) => {
  const salt = CryptoJS.lib.WordArray.random(128 / 8);

  const passwordDigest = CryptoJS.PBKDF2(
    password, // 사용자 비밀번호
    salt, // 솔트
    {
      keySize: 256 / 32, // 키 길이
      iterations, // 반복 횟수
    }
  );

  return {
    password: passwordDigest.toString(),
    salt: salt.toString(CryptoJS.enc.Hex),
  };
};

export const compare = (password: string, dbPassowrd: string, salt: string) => {
  const parseSalt = CryptoJS.enc.Hex.parse(salt);

  const passwordDigest = CryptoJS.PBKDF2(
    password, // 사용자 비밀번호
    parseSalt, // 솔트
    {
      keySize: 256 / 32, // 키 길이
      iterations, // 반복 횟수
    }
  );

  if (passwordDigest.toString() === dbPassowrd) {
    return true;
  } else {
    return false;
  }
};
