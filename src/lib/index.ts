import * as z from "zod"

export const signUpFormSchema = z.object({
    name: z.string().min(2, {message: "Name is too short",}),
    email: z.string().email({message: "Enter a valid Email"}),
    password: z.string().min(8).refine((password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /[0-9]/.test(password)
        const hasSpecialCharacter = /[@#$%^&+=]/.test(password);
        return hasUppercase && hasLowercase && hasDigit && hasSpecialCharacter;
      }, {
        message: "Password must be at least 8 characters long and meet the complexity requirements(Atleast 1 Uppercase & Lowercase character, atleast 1 number and atleast 1 special character).",
      }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })