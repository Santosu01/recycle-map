export const isValidCPF = (cpf: string): boolean => {
  // Remove non-digit characters
  cpf = cpf.replace(/[^\d]+/g, "");

  // Invalid if not 11 digits or all digits are the same
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  let remainder: number;

  // Validate first check digit
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.charAt(i - 1), 10) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9), 10)) return false;

  // Validate second check digit
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.charAt(i - 1), 10) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(10), 10)) return false;

  return true;
};
