// components/Footer.tsx
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { FaLine, FaSquareXTwitter } from 'react-icons/fa6';
import { InstagramGradientIcon } from './Icons/Instagram';

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col md:flex-row w-full border-[#E8005A] border-t-[6px]">
            {/* ── 左カラム ── */}
            <div className="w-full md:w-1/3 bg-[#FF4C35] flex flex-col items-center justify-center text-white p-8 space-y-8">
                {/* ロゴ */}
                <div className="bg-[#1e1e1e] p-4">
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </div>
                {/* ブランド名 */}
                <h2 className="font-script text-4xl">Afternoon Garage</h2>
                {/* キャッチコピー */}
                <div className="bg-[#1e1e1e] px-6 py-4 text-lg">キャッチコピー</div>
            </div>

            {/* ── 右カラム ── */}
            <div className="w-full md:w-2/3 bg-black flex flex-col items-center p-8 space-y-8">
                {/* サイトマップブロック */}
                <div className="bg-[#1e1e1e] w-full max-w-2xl text-white h-48 flex items-center justify-center">
                    サイトマップ
                </div>

                {/* SNS セクション */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                        <span className="mx-4 text-white">－ SNS －</span>
                    </div>
                    <div className="flex space-x-20 mt-2">
                        {[
                            {
                                icon: <FaSquareXTwitter size={30} />,
                                label: 'X (Twitter)',
                                href: '#',
                            },
                            {
                                icon: <InstagramGradientIcon size={35} />,
                                label: 'Instagram',
                                href: '#',
                            },
                            {
                                icon: <FaYoutube size={30} color="red" />,
                                label: 'YouTube',
                                href: '#',
                            },
                            {
                                icon: <FaLine size={30} color="#32cd32" />,
                                label: 'LINE',
                                href: '#',
                            },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="bg-[#FFFCE9] p-4 flex w-23 h-23 flex-col items-center justify-center hover:opacity-80"
                            >
                                {item.icon}
                                <span className="mt-1 text-xs text-black">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* 区切り線 */}
                <hr className="border-t border-white w-full" />

                {/* 著作権 */}
                <p className="text-sm text-white">© Afternoon Garage. All rights reserved.</p>
            </div>
        </footer>
    );
};
