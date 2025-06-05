// app/page.tsx or pages/index.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Serif } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['700'] });

export default function Home() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Head>
                <title>車のガイド・記事</title>
                <meta name="description" content="車に関する情報サイト" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="relative w-full aspect-[32/15]">
                {/* 背景画像 */}
                <Image
                    src="/tsukada-kazuhiro-0VGi-isgSFg-unsplash 1.png"
                    alt="Hero"
                    fill
                    className="object-cover brightness-75"
                    priority
                />

                {/* キャッチコピー */}
                <div className="absolute left-0 top-0 bottom-[72px] px-[9.2975%] flex justify-center items-center text-[16px] text-white bg-black/40 z-10">
                    キャッチコピー
                </div>

                {/* 下部ナビゲーション */}
                <div className="absolute bottom-0 w-full h-[72px] bg-black/80 z-20 flex justify-center items-center">
                    <div className="flex flex-wrap justify-center items-center gap-x-6 px-4 text-white text-[12px] sm:text-sm">
                        {[
                            { label: '始めての方', id: 'Beginners' },
                            { label: '車を探す', id: 'MainContents' },
                            { label: '車の使い方を学ぶ', id: 'MainContents' },
                            { label: '知識を増やす', id: 'MainContents' },
                            { label: 'サポート', id: 'MainContents' },
                        ].map(({ label, id }, idx) => (
                            <a
                                key={idx}
                                href={`#${id}`}
                                className="flex flex-col items-center w-[100px] sm:w-[120px] hover:opacity-80 transition"
                            >
                                <span className="text-white/80">{label}</span>
                                <motion.svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 10"
                                    className="mt-1"
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <path
                                        d="M2 3L8 7L14 3"
                                        stroke="white"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beginners Section */}
            <section
                id="Beginners"
                className="bg-[#2A2A31] text-white w-full aspect-[32/5.4] flex items-center justify-center px-8"
            >
                <div className="flex w-full max-full h-full mx-auto">
                    {/* 左側：タイトルとテキスト */}
                    <div className="flex flex-col justify-center items-center w-1/2 px-4">
                        <div className="inline-flex flex-col items-end">
                            <h2 className={`text-[3vmax] font-bold mb-4 ${notoSerif.className}`}>
                                For Beginners
                            </h2>
                            <p className="text-xs">まずはこちらから</p>
                        </div>
                    </div>

                    {/* 区切り線（太くする） */}
                    <div className="w-px bg-white my-5" />

                    {/* 右側：2×2のボタン配置 */}
                    <div className="w-1/2 flex items-center justify-center px-4">
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <button className="w-[97%] px-6 py-2 rounded-full border border-[#FFFCE9] text-[#FFFCE9] hover:bg-yellow-400 hover:text-black transition">
                                    【サイトの使い方】
                                </button>
                            </div>
                            <div>
                                <button className="w-[97%] px-6 py-2 rounded-full border border-[#F8DE22] text-[#F8DE22] hover:bg-yellow-400 hover:text-black transition">
                                    【人気の車】
                                </button>
                            </div>
                            <div>
                                <button className="w-[97%] px-6 py-2 rounded-full border border-[#FFFCE9] text-[#FFFCE9] hover:bg-yellow-400 hover:text-black transition">
                                    【人気の記事】
                                </button>
                            </div>
                            <div>
                                <button className="w-[97%] px-6 py-2 rounded-full border border-[#FFFCE9] text-[#FFFCE9] hover:bg-yellow-400 hover:text-black transition">
                                    【おすすめ特集】
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative h-[11.12vh] text-center">
                <div className="absolute top-0 left-0 w-full h-[7.129vh] bg-[#2A2A31]" />
                <div className="absolute bottom-0 left-0 w-full h-[3.991vh] bg-[#656565]" />
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h2
                        className={`text-[3.7vmax] text-white font-semibold ${notoSerif.className}`}
                    >
                        Main Contents
                    </h2>
                </div>
            </div>
            <div className="h-[2.223vh]"></div>
            <div className="h-[2.223vh] bg-[#E8005A]"></div>
            <div className="h-[2.223vh]"></div>

            {/* Main Content Sections */}
            <section id="MainContent">
                <div className="w-full mx-auto">
                    {/* Find a Car */}
                    <section id="MainContents" className="bg-white text-white">
                        <div className="w-full mx-auto">
                            {/* カード：Find a Car */}
                            <section id="FindCar" className="flex bg-white text-black">
                                <div className="w-[56.25%]">
                                    <Image
                                        src="/jordan-graff-9TBgvuPAe0Y-unsplash 1.svg"
                                        alt="Find a Car"
                                        width={900}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-[42.2%] bg-[#3c2c22] text-white flex flex-col justify-between px-10 pr-[10vw] py-[7vh]">
                                    {/* 上部：タイトルとテキスト */}
                                    <div>
                                        <h3 className="text-[2vmax] font-bold border-b border-white pb-1 w-fit">
                                            車を探す　　　　　　
                                        </h3>
                                        <p className="text-[1vmax] mt-[7vw] leading-loose">
                                            気になるクルマをすぐ検索！
                                            <br />
                                            メーカー・種類・予算・用途から、あなたにぴったりの一台を見つけましょう。
                                        </p>
                                    </div>

                                    {/* 下部：リンクを右下に配置 */}
                                    <div className="mt-8 text-right">
                                        <a href="#" className="text-[1vmax] hover:underline">
                                            詳しく見る →
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>

                    <div className="h-[2.223vh]"></div>

                    {/* Drive & Learn */}
                    <section id="DriveLearn" className="md:flex bg-white ml-[1.56%]">
                        <div className="w-[42.2%] bg-[#2C3A43] text-white flex flex-col justify-between px-10 pr-[10vw] py-[7vh]">
                            {/* 上部：タイトルとテキスト */}
                            <div>
                                <h3 className="text-[2vmax] font-bold border-b border-white pb-1 w-fit">
                                    車を使う・学ぶ　　　　　　
                                </h3>
                                <p className="text-[1vmax] mt-[7vw] leading-loose">
                                    車の使い方がよく分かる！
                                    <br />
                                    初めての運転、日常のメンテナンス、カーライフの基礎をやさしく解説します。
                                </p>
                            </div>

                            {/* 下部：リンクを右下に配置 */}
                            <div className="mt-8 text-right">
                                <a href="#" className="text-[1vmax] hover:underline">
                                    詳しく見る →
                                </a>
                            </div>
                        </div>
                        <div className="w-[57.81%]">
                            <Image
                                src="/tigran-hambardzumyan-B2gmkU2mgqw-unsplash.svg"
                                alt="Drive & Learn"
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>

                    <div className="h-[2.223vh]"></div>

                    {/* Read & Discover */}
                    <section id="ReadDiscover" className="md:flex bg-white">
                        <div className="w-[56.25%]">
                            <Image
                                src="/atieh-parsaeian-wICRqfQDXfY-unsplash 1.svg"
                                alt="Read & Discover"
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-[42.2%] bg-[#604E49] text-white flex flex-col justify-between px-10 pr-[10vw] py-[7vh]">
                            {/* 上部：タイトルとテキスト */}
                            <div>
                                <h3 className="text-[2vmax] font-bold border-b border-white pb-1 w-fit">
                                    知識・読み物を読む　
                                </h3>
                                <p className="text-[1vmax] mt-[7vw] leading-loose">
                                    知って得するクルマの話。
                                    <br />
                                    雑学・歴史・比較レビューなど、読むだけでクルマ通になれるコンテンツ満載！
                                </p>
                            </div>

                            {/* 下部：リンクを右下に配置 */}
                            <div className="mt-8 text-right">
                                <a href="#" className="text-[1vmax] hover:underline">
                                    詳しく見る →
                                </a>
                            </div>
                        </div>
                    </section>

                    <div className="h-[2.223vh]"></div>

                    {/* Support & Tools */}
                    <section id="SupportTools" className="md:flex bg-white ml-[1.56%]">
                        <div className="w-[42.2%] bg-[#3B373A] text-white flex flex-col justify-between px-10 pr-[10vw] py-[7vh]">
                            {/* 上部：タイトルとテキスト */}
                            <div>
                                <h3 className="text-[2vmax] font-bold border-b border-white pb-1 w-fit">
                                    サポート・便利機能　　
                                </h3>
                                <p className="text-[1vmax] mt-[7vw] leading-loose">
                                    困ったときも安心サポート
                                    <br />
                                    用語集やよくある質問、自分に合った車探しを手助けする便利な機能もこちら
                                </p>
                            </div>

                            {/* 下部：リンクを右下に配置 */}
                            <div className="mt-8 text-right">
                                <a href="#" className="text-[1vmax] hover:underline">
                                    詳しく見る →
                                </a>
                            </div>
                        </div>
                        <div className="w-[57.81%]">
                            <Image
                                src="/obi-FmOdtM4KXhk-unsplash 2.svg"
                                alt="Support & Tools"
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                </div>
            </section>

            <div className="h-[2.223vh]"></div>
            <div className="relative h-[11.12vh] text-center">
                <div className="absolute top-0 left-0 w-full h-[7.329vh] bg-[#2A2A31]" />
                <div className="absolute bottom-0 left-0 w-full h-[3.791vh] bg-[#656565]" />
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h2
                        className={`text-[3.7vmax] text-white font-semibold ${notoSerif.className}`}
                    >
                        News & Updates
                    </h2>
                </div>
            </div>
            <div className="h-[2.223vh]"></div>
            <div className="h-[2.223vh] bg-[#E8005A]"></div>
            <div className="h-[2.223vh]"></div>

            {/* News & Updates */}
            <section className="bg-[#2A2A31] text-white py-12" id="news">
                <div className="w-[90%] mx-auto px-4">
                    {[...Array(6)].map((_, idx) => (
                        <div key={idx} className="bg-[#FFFCE9] text-black mb-1 flex">
                            <div className="w-1/4 py-4 px-4 flex items-center border-r border-black">
                                <span>・YYYY. MM. DD</span>
                            </div>
                            <div className="w-3/4 py-4 px-4 flex items-center justify-between">
                                <span className="whitespace-nowrap">ニュースタイトル＋概要</span>
                                <div className="border-t border-dashed border-black flex-grow ml-2 mt-2"></div>
                            </div>
                        </div>
                    ))}
                    <div className="text-right mt-6">
                        <a href="#" className="text-[#F8DE22] hover:underline">
                            ニュース一覧へ →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
