"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import Input from "@/components/FormInput/Input";
import { useRouter } from "next/navigation";
import { useAuth, useAuthActions } from "src/context/AuthContext";
import { useEffect } from "react";

//  initial values
const initialValues = {
    email: "",
    password: "",
};

//  validation schema
const validationSchema = Yup.object({
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("ایمیل نامعتبر است"),
    password: Yup.string()
        .required("رمز عبور را وارد کنید")
        .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
});

const SignInForm = () => {
    const router=useRouter()
    const dispatch=useAuthActions()
    const {loading,user}=useAuth()

    //  onSubmit
    const onSubmit = (values) => {
        dispatch({ type: "SIGNIN", payload: values });
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    useEffect(()=>{
        if (user) router.push("/")
    },[user])

    return (
        <>
            <div className="md:max-w-md px-4 md:px-4 container min-h-screen  mx-auto">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <h1 className="font-black text-2xl text-violet-700 mb-4">
                        ورود
                    </h1>
                    <Input label="ایمیل" name="email" formik={formik} />
                    <Input
                        label="رمز عبور"
                        name="password"
                        type="password"
                        formik={formik}
                    />

                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="w-full py-2 rounded-lg bg-violet-800 text-white"
                    >
                        ورود
                    </button>
                    <Link href="/signup">
                        <p className="mt-4 py-4 cursor-pointer">
                            هنوز ثبت نام نکردی؟ لاگین
                        </p>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default SignInForm;
