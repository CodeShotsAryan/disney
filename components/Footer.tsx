export default function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10 py-12 px-8 mt-20 text-white/60">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold tracking-widest text-white/80">DISNEY+ HOTSTAR</h2>
                    <p className="text-sm max-w-sm font-light">
                        © 2026 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-12 font-semibold text-sm">
                    <ul className="flex flex-col gap-2">
                        <li className="hover:text-white cursor-pointer transition-colors">About Disney+ Hotstar</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Terms of Use</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2 items-center">
                            Google Play
                        </li>
                        <li className="flex gap-2 items-center">
                            App Store
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
