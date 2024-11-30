'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@features/auth/auth"; // Đường dẫn đến API đăng nhập
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const [email, setEmail] = useState(""); // Quản lý email
    const [password, setPassword] = useState(""); // Quản lý password
    const [error, setError] = useState(""); // Quản lý lỗi
    const router = useRouter(); // Điều hướng trang sau khi đăng nhập thành công

    // Xử lý gửi form đăng nhập
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn form tự động reload
        try {
            // Gửi yêu cầu đăng nhập đến API
            const { token, hasProfile } = await login(email, password); // `hasProfile` là giá trị từ backend trả về
    
            // Lưu token vào localStorage
            localStorage.setItem("token", token);
    
            router.push("/");
        } catch (err) {
            // Xử lý lỗi và hiển thị thông báo
            setError(err.message || "Login failed. Please try again.");
        }
    };
    

    // Hàm xử lý đăng nhập bằng Google
    const handleGoogleLogin = () => {
        console.log("Đăng nhập bằng Google");
        // Bạn có thể tích hợp logic đăng nhập bằng Google tại đây
    };

    return (
        <div className="flex min-h-full flex-col justify-center bg-gray-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <Link href="/" className="py-1 inline-block">
                    <Image
                        width={134}
                        height={29}
                        sizes="50vw"
                        src="/images/logo.png"
                        alt="Logo"
                    />
                </Link>
                <h4 className="mt-5 mb-8 text-center font-medium text-gray-500">
                    Sign in to your account
                </h4>
            </div>
            <div className="shadow bg-white sm:mx-auto sm:w-full sm:max-w-sm px-6 py-6 lg:px-8 rounded-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-center">{error}</p>} {/* Hiển thị lỗi */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="input bg-primary-100 w-full rounded-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Cập nhật email
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="input bg-primary-100 w-full rounded-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Cập nhật password
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-full bg-primary-600 px-3 py-2 font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Nút Sign in with Google */}
                <div className="mt-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex w-full justify-center rounded-full bg-white px-3 py-2 font-semibold leading-6 text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                    >
                        <Image
                            src="/images/google-icon.svg" // Đường dẫn tới icon Google
                            alt="Google"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        Sign in with Google
                    </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link href="/signup" className="font-semibold leading-6 text-primary-600 hover:text-primary-500 m-1">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
