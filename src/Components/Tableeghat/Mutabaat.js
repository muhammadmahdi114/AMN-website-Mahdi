import React from 'react';
import Footer from "../Footer/footer";
import Header from "../Header/header";
import search from '../../Assets/icons/Search.svg';
import bgImg from '../../Assets/images/bgImg.jpg';
import book1 from '../../Assets/images/book1.jpg';
import book2 from '../../Assets/images/book2.jpg';
import book3 from '../../Assets/images/book3.jpg';
import { useNavigate } from 'react-router-dom';

const Mutabaat = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div dir="rtl" className="bg-white min-h-screen w-full mt-28 px-5 sm:px-10 md:px-16 lg:px-20 text-black text-center font-nastaleeqRegular font-normal mb-6">
                {/* Relative container for proper layout flow */}
                <div className="relative pb-[300px]">
                    {/* Hero Section */}
                    <div
                        style={{ backgroundImage: `url(${bgImg})` }}
                        className="bg-cover bg-center h-[450px] w-full flex items-center justify-center rounded-xl"
                    >
                        <div className="p-6 rounded-3xl bg-white flex gap-[10px]">
                            <div className="px-6 py-4 bg-[#F2F4F8] flex items-center rounded-xl w-[410px]">
                                <img src={search} alt="Search" className="size-5 ml-2" />
                                <input
                                    type="text"
                                    placeholder="مضمون کا نام یا مطلوبہ الفاظ..."
                                    className="h-[58px] rounded-xl bg-[#F2F4F8] outline-none"
                                />
                            </div>
                            <div className="px-6 py-4 flex items-center rounded-xl w-[410px] border border-[#F2F4F8]">
                                <select className="w-full h-full outline-none text-xl font-nastaleeqKasheeda">
                                    <option>تمام زمرے</option>
                                </select>
                            </div>
                            <button className="px-6 py-4 rounded-xl w-[170px] text-white bg-primary font-nastaleeqKasheeda text-xl">
                                تلاش کریں۔
                            </button>
                        </div>
                    </div>

                    {/* Books Section (Absolute Positioning) */}
                    <div className="absolute flex items-center justify-center py-3 top-[350px] left-1/2 transform -translate-x-1/2 gap-6 z-20">
                        {[book1, book2, book3].map((book, index) => (
                            <div key={index} className="flex flex-col gap-[10px] cursor-pointer" onClick={()=>{navigate('/tableeghat/bookDetail')}}>
                                <img src={book} alt={`Book ${index + 1}`} className="rounded-xl" />
                                <p className="text-[40px] text-right">عصر غیبت کی ذمہ داریاں</p>
                                <p className="text-[32px] text-right text-[#999FAA]">مصنف کا نام</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Text Section */}
                <div className="mt-[200px] flex flex-col items-center justify-center gap-6">
                    <p className='font-nastaleeqKasheeda text-[48px]'>کتابوں سے آشنائی</p>
                    <p className='font-nastaleeqRegular text-[32px] px-[242px]'>انجمن مشتاقان نور کتابوں سے تعلیمات اہلبیت کے سیکھنے اور پڑھنے کے ماحول کی حوصلہ افزائی اور فروغ دیتی ہے۔ اس سلسلے میں ہم نے ماہر مصنفین، علمائے کرام اور کتب کے ماہرین کی لکھی ہوئی چند کتابیں شائع کی ہیں تاکہ معصومین کا علم اردو میں پڑھنے کی خالص صورت میں فراہم کیا جا سکے۔</p>
                </div>
                <div className="mt-[20px] flex flex-col items-center justify-center gap-6">
                    <p className='font-nastaleeqKasheeda text-[48px]'>ہماری چند کتب</p>
                    <div className='flex justify-between gap-4'>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book1} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book2} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                        <div className='bg-primaryBG rounded-lg p-4 flex flex-col gap-[10px]'>
                            <img src={book3} className='h-[260px] w-[165px]' />
                            <p className="text-[24px] text-right">عصر غیبت کی ذمہ داریاں</p>
                            <p className="text-[16px] text-right text-[#999FAA]">مصنف کا نام</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Mutabaat;
