import { Button } from '@/components/ui/button'
import { signUpFormSchema } from '@/lib/validations/'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from '@/components/ui/input'
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import Loader from '@/components/shared/Loader'
import { Link } from 'react-router-dom'
import { createUserAccount } from '@/lib/appwrite/api'

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: ""
    },
  })
  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    const newUser = await createUserAccount(values)
    console.log(newUser)
  }

  const isLoading = false;
  return (

    <Form {...form}>
      <div className='sm:w-420 flex-center flex-col'>
        <img className='h-30' src="/assets/images/logo.png" />
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Create a new account</h2>
        <p className='text-light-3 small-medium md:base-regular mt-2'>To use Socio enter your details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage className='text-light-3' />
              </FormItem>
            )}
          />
          <Button type="submit" className='shad-button_primary'>
            {isLoading ? <div className='flex-center gap-2'><Loader /> Loading...</div> : <>Submit</>}
          </Button>
          <p className='text-small-regular text-light-2 text-center mt-2'>Already have an account? <Link className='text-primary-500 text-small-semibold' to={'/signIn'}>Log in</Link></p>
        </form>
      </div>

    </Form>

  )
}

export default SignUpForm