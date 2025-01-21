"use client";

import { Checkbox } from "@/Components/ui/checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { LoginForm } from "@/Components/login-form";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )} */}

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        value={data.email}
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
            {/* <LoginForm>
                <form onSubmit={submit} className="p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-2xl font-bold">Welcome back</h1>
                            <p className="text-balance text-muted-foreground">
                                Masuk ke akun{" "}
                                <span className="text-slate-900 font-medium">
                                    DISPERKRIM
                                </span>{" "}
                                Anda
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={data.email}
                                autoFocus
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href={route("password.request")}
                                    className="ml-auto text-sm underline-offset-2 hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onCheckedChange={(checked: boolean) =>
                                    setData("remember", checked)
                                }
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Ingat saya
                            </label>
                        </div>

                        <Button
                            type="submit"
                            disabled={processing}
                            className="w-full"
                        >
                            Login
                        </Button>
                        <div className="text-center text-sm">
                            Belum punya akun?{" "}
                            <Link
                                href={route("register")}
                                className="underline underline-offset-4"
                            >
                                Hubungi Admin
                            </Link>
                        </div>
                    </div>
                </form>
            </LoginForm> */}
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <Link
                            href="https://flowbite.com/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="/logo-kg.png"
                                className="w-9 h-auto"
                                alt="Flowbite Logo"
                            />
                            <div className="-space-y-2">
                                <p className="self-center text-xl font-bold whitespace-nowrap">
                                    DISPERKIM
                                </p>
                                <p className="self-center text-md font-bold whitespace-nowrap">
                                    KOTA GORONTALO
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-2xl">
                            <form
                                onSubmit={submit}
                                className={cn("flex flex-col gap-6")}
                            >
                                <div className="space-y-7">
                                    <div className="space-y-2">
                                        <h1 className="text-4xl font-bold">
                                            Welcome!
                                        </h1>
                                        <p className="text-balance text-muted-foreground">
                                            Masuk ke akun{" "}
                                            <span className="text-slate-900 font-medium">
                                                DISPERKRIM
                                            </span>{" "}
                                            Anda
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                className="bg-gray-100 border-0 focus-visible:border-0 rounded-xl"
                                                placeholder="m@example.com"
                                                value={data.email}
                                                autoFocus
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>
                                                <Link
                                                    href={route(
                                                        "password.request"
                                                    )}
                                                    className="ml-auto text-sm underline-offset-2 hover:underline"
                                                >
                                                    Lupa password?
                                                </Link>
                                            </div>
                                            <Input
                                                id="password"
                                                type="password"
                                                className="bg-gray-100 border-0 focus-visible:border-0 rounded-xl"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                name="remember"
                                                checked={data.remember}
                                                onCheckedChange={(
                                                    checked: boolean
                                                ) =>
                                                    setData("remember", checked)
                                                }
                                            />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Ingat saya
                                            </label>
                                        </div>

                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full rounded-xl text-md"
                                    >
                                        Masuk
                                    </Button>
                                    <div className="text-center text-md text-gray-800">
                                        Belum punya akun?{" "}
                                        <Link
                                            href={route("register")}
                                            className="underline underline-offset-4"
                                        >
                                            Hubungi Admin
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block p-5">
                    <div className="bg-[#008080] h-full w-full rounded-xl"></div>
                    {/* <img
                        src="/image/login-image.jpg"
                        alt="Image"
                        className="absolute inset-0 h-auto w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    /> */}
                </div>
            </div>
        </GuestLayout>
    );
}
