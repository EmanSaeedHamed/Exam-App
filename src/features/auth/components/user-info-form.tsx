'use client';
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, TLoginSchema } from "../schemas/login.schema";
import Link from "next/link";
import { CircleX, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Stepper from "./stepper";
export default function UserInfoForm() {
   const form = useForm<TLoginSchema>({
        defaultValues: {
            firstName: "",
             password: ""
        },
        resolver: zodResolver(loginSchema),

    });
    const {handleSubmit, formState:{errors, isSubmitted}} = form;
    function handleRegister(values:TLoginSchema) {
        console.log(values);
        
    }
  return <>
      {/* header */}
    <header>
    <Stepper steps={4} currentStep={3}/>
    <h2 className="font-inter font-bold text-3xl text-gray-800 mt-2.5">Create Account</h2>
    <h3 className="font-inter font-bold text-2xl text-blue-600 mb-2.5">Tell us more about you</h3>
    </header>

          <div>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
      <FieldGroup>
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-username" className="block">
                  First name
                  <span className="text-red-600">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    id="form-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ahmed"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError className="text-red-600 font-mono" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
      </FieldGroup>


      {isSubmitted && Object.keys(errors).length > 0  && 
      <div className="border border-red-600 mt-10 bg-red-50 w-full py-2.5 text-center relative">
      <p className="text-sm font-mono text-red-600">Something went wrong</p>
      <CircleX className="absolute text-red-600 size-[18px] bg-white left-1/2 -translate-1/2 top-0"/>
    </div>}

      <Button type="submit" className="w-full mt-6"> Login </Button>
      </form>
      <div className="space-x-2 font-mono text-sm font-medium text-center mt-9">
      <span className="text-gray-500">Don’t have an account?</span>
      <Link href={'/register'} className="text-blue-600 hover:text-blue-700">Create yours</Link>
      </div>
          </div>
      
  </>
}
