'use client';

import { FaYoutube, FaLine, FaSquareXTwitter } from 'react-icons/fa6';
import { InstagramGradientIcon } from './Icons/Instagram';
import React from 'react';
import { HambergerIcon } from './Icons/Hamberger';

export const TopHeader = () => {
    return (
        <header className="w-full font-sans text-sm bg-black border-b-4 border-[#E8005A]">
            <div className="w-full mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-[auto,1fr] grid-rows-[auto,auto] gap-y-2">
                    {/* 左：ロゴ＋キャッチコピー */}
                    <div className="row-span-2 flex items-center gap-2">
                        <div className="w-[4vw] h-[4vw] min-w-[48px] bg-blue-400 flex items-center justify-center text-white font-bold text-xs shrink-0">
                            ロゴ
                        </div>
                        <div className="hidden md:flex items-center bg-yellow-400 px-2 text-gray-400 text-xs">
                            キャッチコピー
                        </div>
                    </div>

                    {/* 右上：SNSリンク */}
                    <div className="col-start-2 row-start-1 flex justify-end items-center">
                        <ul className="w-full max-w-[70%] flex flex-wrap justify-end items-center gap-x-3 bg-[#FFFCE9] rounded-l-full px-4 py-1 text-xs text-black">
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
                    <div className="col-start-2 row-start-2 flex justify-between items-center">
                        <ul className="hidden md:flex items-center flex-wrap gap-x-4 bg-[#FFFCE9] w-full max-w-[90%] rounded-full px-6 py-1 text-black">
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
            </div>
        </header>
    );
};
