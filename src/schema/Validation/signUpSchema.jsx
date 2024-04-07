import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    subject: Yup.string().min(1).max(100).required("Please Enter Your Subject"),
    textArea: Yup.string().min(1).max(100000).required("Please Enter Your Message")
});
