const { z } = require("zod");

//creating an object schema

const signupSchema = z.object({
  username: z
    .string({ require_eror: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(255, { message: "Name must be at most 255 characters" }),
  email: z
    .string({ require_eror: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of three characters" })
    .max(255, { message: "Email must be at most 255 characters" }),
  phone: z
    .string({ require_eror: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(10, { message: "Phone should be of 10 characters only" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = signupSchema;
