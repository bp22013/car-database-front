'use client';

import { FaYoutube, FaLine, FaSquareXTwitter } from 'react-icons/fa6';
import { InstagramGradientIcon } from './Icons/Instagram';
import React from 'react';
import { HambergerIcon } from './Icons/Hamberger';

export const TopHeader = () => {
    //const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full font-sans text-sm bg-black">
            <div className="grid grid-cols-[auto,1fr] grid-rows-[auto,auto] border-[#E8005A] border-b-[4px]">
                {/* 左：ロゴ＋キャッチコピー */}
                <div className="row-span-2 flex items-center">
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="w-[80px] h-[80px] bg-blue-400 flex items-center justify-center text-white font-bold text-xs">
                            ロゴ
                        </div>
                    </div>
                    <div className="row-span-2 w-full h-full md:flex bg-yellow-400 items-center text-gray-400 text-xs pl-2">
                        キャッチコピー
                    </div>
                </div>

                {/* 右上：SNSリンク */}
                <div className="col-start-2 row-start-1 flex mt-[4px] justify-end items-center py-1">
                    <ul className="flex items-center space-x-10 bg-[#FFFCE9] rounded-l-full px-4 py-1 text-xs text-black">
                        <li className="flex items-center gap-1">
                            <FaSquareXTwitter size={15} />
                            <a href="#">X (Twitter)</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <InstagramGradientIcon size={20} />
                            <a href="#">Instagram</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <FaYoutube color="red" size={15} />
                            <a href="#">YouTube</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <FaLine color="#32cd32" size={15} />
                            <a href="#">LINE</a>
                        </li>
                        <li>
                            <a href="#">お問い合わせ</a>
                        </li>
                        <li>
                            <a href="#">マイページ</a>
                        </li>
                        <li>
                            <a href="#">会員登録</a>
                        </li>
                    </ul>
                </div>

                {/* 右下：ナビゲーション + ハンバーガー */}
                <div className="col-start-2 row-start-2 flex justify-end items-center py-1">
                    <ul className="hidden md:flex items-center space-x-6 bg-[#FFFCE9] w-[850px] rounded-full px-6 py-1 text-black">
                        <li>
                            <a href="#" className="pb-1 border-b-2 border-[#E8005A]">
                                トップ
                            </a>
                        </li>
                        <li className="text-gray-400">|</li>
                        <li>
                            <a href="#">車を探す</a>
                        </li>
                        <li className="text-gray-400">|</li>
                        <li>
                            <a href="#">車を使う・学ぶ</a>
                        </li>
                        <li className="text-gray-400">|</li>
                        <li>
                            <a href="#">知識・読み物を読む</a>
                        </li>
                        <li className="text-gray-400">|</li>
                        <li>
                            <a href="#">サポート・便利機能</a>
                        </li>
                    </ul>
                    <HambergerIcon />
                </div>
            </div>
        </header>
    );
};
