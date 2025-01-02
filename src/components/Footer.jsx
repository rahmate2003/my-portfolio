// src/components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
                <p className="text-center text-sm text-gray-400">
                    ©Rahmat Wahyudi. {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
