'use client';

import React, { useState } from 'react';
import { FaYoutube, FaLine, FaSquareXTwitter } from 'react-icons/fa6';
import { InstagramGradientIcon } from './Icons/Instagram';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerMenu = [
    { label: 'トップ', href: '#' },
    { label: '車を探す', href: '#' },
    { label: '車を使う・学ぶ', href: '#' },
    { label: '知識・読み物を読む', href: '#' },
    { label: 'サポート・便利機能', href: '#' },
];

export const TopHeader = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <header className="w-full font-sans text-sm bg-black">
            <div className="grid grid-cols-[auto,1fr] grid-rows-[auto,auto] border-[#E8005A] border-b-[3px]">
                {/* 左：ロゴ＋キャッチコピー */}
                <div className="row-span-2 flex items-center px-6">
                    <span className="text-white">ロゴ</span>
                    <span className="ml-4 text-gray-400">キャッチコピー</span>
                </div>

                {/* 右上：SNSリンク */}
                <div className="col-start-2 row-start-1 flex justify-end items-center py-1">
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
                <div className="col-start-2 row-start-2 flex justify-end items-center px-6 py-1">
                    <ul className="hidden md:flex items-center space-x-6 bg-[#FFFCE9] rounded-full px-6 py-1 text-black">
                        <li>
                            <a href="#" className="pb-1 border-b-2 border-pink-500">
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

                    {/* ハンバーガーボタン：小画面で表示 */}
                    <IconButton
                        className="ml-4 md:hidden"
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                    >
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>

                    {/* Drawer：ハンバーガーメニューの中身 */}
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                            <List>
                                {drawerMenu.map((item) => (
                                    <ListItem key={item.label} disablePadding>
                                        <ListItemButton component="a" href={item.href}>
                                            <ListItemText primary={item.label} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};
