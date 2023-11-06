import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/*Public Routes*/}
                <Route element={<AuthLayout />}>
                    <Route path='/signIn' element={<SignInForm />}></Route>
                    <Route path='/signUp' element={<SignUpForm />}></Route>
                </Route>
                {/* Private Routes */}
                <Route element={<RootLayout />}>
                    <Route  index element={<Home />}></Route>
                </Route>

            </Routes>
        </main>

    )
}

export default App