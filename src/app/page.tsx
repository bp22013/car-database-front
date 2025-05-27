/* TOPページ */

'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const runtime = 'edge';

export default function Home() {
    const router = useRouter();
    //const [isMenuOpen, setIsMenuOpen] = useState(false);

    const jumpPage = () => {
        router.push('https://www.lomando.com/elizabeth.html');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>車のガイド・記事</title>
                <meta name="description" content="車に関する情報サイト" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-1 flex-col md:flex-row bg-gray-100">
                <div className="w-full md:w-64 bg-gray-900 text-white">
                    <h2 className="px-4 pb-4 border-b border-gray-700 m-0 pt-4">ガイド・記事</h2>
                    <ul className="list-none p-0 m-0">
                        <li className="border-b border-gray-700">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                全記事 <span className="text-xl">›</span>
                            </Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                車初心者向け <span className="text-xl">›</span>
                            </Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                日常活用・ライフハック <span className="text-xl">›</span>
                            </Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                レビュー・体験談 <span className="text-xl">›</span>
                            </Link>
                        </li>
                        <li className="border-b border-gray-700 bg-orange-600">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                車の基礎知識 <span className="text-xl">›</span>
                            </Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link href="#" className="flex justify-between p-4 text-white">
                                コラム <span className="text-xl">›</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="w-full md:w-2/5 p-8 bg-gray-800 text-white relative">
                            <h3>コンテンツ例</h3>
                            <ul className="list-none p-0 my-4">
                                <li className="mb-2">エンジンの仕組み</li>
                                <li className="mb-2">オートマとマニュアルの違い</li>
                                <li className="mb-2">車検</li>
                                <li className="mb-2">タイヤの種類と選び方</li>
                                <li className="mb-2">燃費</li>
                            </ul>
                            <p className="mt-8 text-sm leading-relaxed">
                                車のしくみや各部位の役割、専門用語の意味など、知っておくと安心できる「車の基礎知識」をまとめています。難しいイメージのある車の様々なメンテナンスの基本も、初心者にもやさしい言葉でわかりやすく解説。車に自信をつけたい方や、車をもっと知識として持ちたい方におすすめの内容です。
                            </p>
                            <button
                                className="absolute bottom-4 right-4 px-4 py-2 bg-pink-600 text-white border-none rounded cursor-pointer"
                                onClick={jumpPage}
                            >
                                Read more →
                            </button>
                        </div>
                        <div className="w-full md:w-3/5 relative h-64 md:h-auto">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/mclaren-720s.jpg"
                                    alt="McLaren 720S with wedding decorations"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
