import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FormInput from '@/admin/components/FormInput';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from "@/assets/passpoint-logo.webp";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual authentication
        console.log('Login:', { email, password });
        navigate('/admin');
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-background'>
            <div className='w-full max-w-md'>
                <div className='bg-card border border-border rounded-lg shadow-lg p-8'>
                    <div className='flex flex-col items-center mb-8'>
                        <img src={Logo} className="h-8 sm:h-10 w-auto object-contain" alt="Passpoint Logo"/>
                        <p className='text-sm text-muted-foreground mt-1'>
                            Sign in as an admin to manage documentation
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <FormInput
                            label='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='admin@passpoint.com'
                        />
                        <FormInput
                            label='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='••••••••'
                        />

                        <Button type='submit' className='w-full gap-2'>
                            <LogIn className='h-4 w-4' />
                            Sign In
                        </Button>
                    </form>

                    <div className='mt-6 text-center'>
                        <a
                            href='#'
                            className='text-sm text-brand hover:underline'
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Password reset not implemented yet');
                            }}
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
