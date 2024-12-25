import React from 'react'
import Footer from "../Footer/footer";
import Header from "../Header/header";
import leftarrow from '../../Assets/icons/arrowrleft.svg'
import fb from '../../Assets/icons/fb.svg'
import x from '../../Assets/icons/X.svg'
import linkedin from '../../Assets/icons/linkedin.svg'
import mainpic from '../../Assets/images/hasoolelm.svg'
import pic1 from '../../Assets/images/pic1.jpg'
import pic2 from '../../Assets/images/pic2.jpg'
import pic3 from '../../Assets/images/pic3.jpg'
const Article = () => {
  return (
    <>
    <Header />
    <div dir="rtl" className="bg-white min-h-screen w-full mt-28 px-5 sm:px-10 md:px-16 lg:px-20 text-black text-center font-nastaleeqRegular font-normal pt-10 mb-6">
        <div className='px-[246px]  gap-12'>
            <div className='p-[10px] rounded-lg bg-primaryBG w-fit flex gap-2 items-center mb-1'>
                <p className='font-normal'>امن</p>
                <img src={leftarrow} />
                <p className='font-normal'>تزکرات</p>
                <img src={leftarrow} />
                <p className='font-normal'> حصول علم</p>
                <img src={leftarrow} />
                <p className='text-primary'>حصول علم</p>
            </div>
            <div className='flex text-right'>
                <div>
                    <div className=' w-[695px] h-[335] flex flex-col gap-9 border-b-[1px] mb-4'>
                        <img src={mainpic} className=' w-[695px] h-[335]' />
                        <p className='font-nastaleeqRegular text-4xl font-normal leading-[52px]' >
                            گویا علم حاصل کرنا قدرومنزلت حاصل کرنے کا راستہ ہے۔ یہ عزت و منزلت نہ صرف اس دنیا میں ہوتی ہے بلکہ عنداللہ بھی ہوتی ہے۔ کیونکہ علم معرفت پیدا کرتا ہے۔ معرفت سے یقین حاصل ہوتا ہے اور یقین کے ساتھ حاصل عمل خدا کی قربت کا باعث بنتا ہے ۔ حدیثِ نبوی ہے ’’جو شخص علم کی طلب میں کسی راستے پر چلے گا اللہ تعالیٰ اسے جنت کے راستے پر چلائے گا اور عالم کو عابد پر وہی فضیلت حاصل ہے جو ماہ کامل کو دوسرے تمام ستاروں پر حاصل ہے‘‘۔
                        </p>
                        <p className='font-nastaleeqRegular text-4xl font-normal  leading-[52px]'>
                            پس حصولِ علم کی تگ و دو دراصل جنت کی طرف تگ و دو ہے اور اس کے لیے عمر کی کوئی قید نہیں۔ علم کا حصول صرف جوانوں یا عالموں تک ہی محدود نہیں ۔ یہ ہم سب کے لیے ضروری  اور ہر عمر میں ضروری ہے ۔ چنانچہ’’ماں کی گود سے قبر کی لحد تک علم حاصل کرو‘‘ کا ارشاد مشہور ہے۔ گویا انسان عمر کے کسی بھی حصے میں پہنچ جائے علم کے حصول و ترویج کی کوششیں جاری رہنی چاہئیں۔ جس طرح ایک چراغ سے دوسرا چراغ روشن ہوتا ہے اس طرح علم سے علم پھیلتا ہے اور شعور کا اُجالا پھیلنا چاہئے۔ امام حسن علیہ السلام نے فرمایا کہ اپنا علم دوسروں کو سکھاؤ اور دوسروں کا علم حاصل کرو‘‘۔ یعنی علم دوطرفہ ہونا چاہیے اور اس پر عمل کرنا چاہیے۔  مولا علی علیہ السلام نے حصول علم کی کس طرح تشویق دلائی ہے: فرماتے ہیں
                        </p>
                        <div className='rounded-3xl bg-primaryBG text-right p-4'>
                            <p className='font-alMajeed text-[40px]'>لَا يَسْتَحِيَنَ‏ أَحَدٌ إِذَا لَمْ يَعْلَمِ الشَّيْ‏ءَ أَنْ يَتَعَلَّم</p>
                            <p className='font-nastaleeqRegular text-[32px]' >	(	نہج البلاغہ ، ص: ۴۸۲)</p>
                            <p className='font-nastaleeqRegular text-[36px]' >	تم میں کوئی شخص اگر کسی چیز کا علم نہیں رکھتا تو اسے حاصل کرنے میں حیا محسوس نہ کرے۔</p>
                        </div>
                        <p className='font-nastaleeqRegular text-4xl font-normal  leading-[52px]' > یہ ظاہر سی بات ہے دینا کی کوئی کامیابی محنت و مشقت کے بغیر حاصل نہیں کی جاسکتی۔ وہ لوگ جو اعلیٰ تعلیم یافتہ ہیں وہ جانتے ہیں ہےسند خون و پسینے کے قطروں سے ہی رقم کی جاتی ہے تو پھر علوم محمد و آل محمد علیہم السلام بغیر محنت و مشقت کے کیسے حاصل ہو سکتا ہے ، چنانچہ مولائے کائنات ایک جگہ ارشاد فرماتے ہیں :</p>
                        <div className='rounded-3xl bg-primaryBG text-right p-4'>
                            <p className='font-alMajeed text-[40px]'>لَا يُدْرَكُ‏ الْعِلْمُ‏ بِرَاحَةِ الْجِسْمِ</p>
                            <p className='font-nastaleeqRegular text-[32px]' >	(عيون الحكم ص:۵۳۹)</p>
                            <p className='font-nastaleeqRegular text-[36px]' >	کوئی بھی جسمانی راحت کے ساتھ ساتھ علم حاصل نہیں کر سکتا</p>
                        </div>
                        <p className='font-nastaleeqRegular text-4xl font-normal  leading-[52px]'> جس طرح آپ حصول علم میں مشقت جھلتے ہیں اسی طرح آپ کے اپنے علم کر محبوس کر کے اسے زنگ آلود نہ کریں ، پس جو بندہ خود تو علم حاصل کر لے مگر اسے آگے نہ پھیلائے وہ عالم کہلوانے کا حق ہی نہیں رکھتا ۔
                            پس باب مدینۃ العلم اس طرح گوہر افشاں ہیں:</p>
                        <div className='rounded-3xl bg-primaryBG text-right p-4'>
                            <p className='font-alMajeed text-[40px]'>الْعَالِمُ‏ الَّذِي‏ لَا يَمَلُ‏ مِنْ‏ تَعَلُّمِ‏ الْعِلْم</p>
                            <p className='font-nastaleeqRegular text-[32px]' >	(تصنيف غرر الحكم ، ص:۴۳) </p>
                            <p className='font-nastaleeqRegular text-[36px]' >	وہ عالم ہی نہیں جو تعلیم دینے میں خستگی محسوس کرے۔ </p>
                        </div>
                        <p className='font-nastaleeqRegular text-4xl font-normal  leading-[52px]'> آئیے علوم محمد و آل محمد علیہم السلام خود سیکھیں اور دوسروں کو سکھائیں یقیناً یہی وہ راستا ہے جو ہم سب کو سیدھا خیمے امام زمان علیہ السلام تک لے جائے گا۔</p>

                        <div className='bg-gradient-to-r from-cyan-500 to-primary rounded-xl p-5 flex flex-row text-white justify-around items-center mb-4'>
                            <p className='font-nastaleeqRegular text-[32px]' >	جیسا کہ آپ دیکھتے ہیں؟ کسی دوست کے ساتھ شئیر کریں۔</p>

                            <div className='flex flex-row gap-1'>
                                <img className='size-[30px] cursor-pointer' src={fb} />
                                <img className='size-[30px] cursor-pointer' src={x} />
                                <img className='size-[30px] cursor-pointer' src={linkedin} />
                            </div>

                        </div>

                    </div>
                </div>
               
            </div>
            <div className='text-right flex flex-col'>
                    <p className='text-[32px]'>متعلقہ مضامین</p>
                    <div className='flex'>
                        <div className='p-3 w-fit rounded-[10px] bg-[#F8F8F8] flex flex-col gap-[10px]'>
                            <img src={pic1}/>
                            <div className='flex flex-row gap-1 bg-white rounded-[20px] p-[5px] pl-3 w-fit items-center'> 
                                <span className='rounded-full h-4 w-4 bg-primary'></span>
                                <p className='font-nastaleeqKasheeda text-primary text-sm'>یاد امام</p>
                            </div>
                            <p className='text-lg font-nastaleeqKasheeda'>اگر امام زمانہ علیہ السلام نہ ہوں</p>
                            <ul className='flex list-disc p-3 justify-start'>
                                <li className='ml-6 font-nastaleeqRegular'>۱۰ منٹ پڑھنے کا وقت</li>
                                <li className='font-nastaleeqRegular'>۲۹ اکتوبر</li>
                            </ul>
                        </div>
                        <div className='p-3 w-fit rounded-[10px] bg-[#F8F8F8] flex flex-col gap-[10px]'>
                            <img src={pic2}/>
                            <div className='flex flex-row gap-1 bg-white rounded-[20px] p-[5px] pl-3 w-fit items-center'> 
                                <span className='rounded-full h-4 w-4 bg-primary'></span>
                                <p className='font-nastaleeqKasheeda text-primary text-sm'>یاد امام</p>
                            </div>
                            <p className='text-lg font-nastaleeqKasheeda'>غوروفکر</p>
                            <ul className='flex list-disc p-3 justify-start'>
                                <li className='ml-6 font-nastaleeqRegular'>۱۰ منٹ پڑھنے کا وقت</li>
                                <li className='font-nastaleeqRegular'>۲۹ اکتوبر</li>
                            </ul>
                        </div>
                        <div className='p-3 w-fit rounded-[10px] bg-[#F8F8F8] flex flex-col gap-[10px]'>
                            <img src={pic3}/>
                            <div className='flex flex-row gap-1 bg-white rounded-[20px] p-[5px] pl-3 w-fit items-center'> 
                                <span className='rounded-full h-4 w-4 bg-primary'></span>
                                <p className='font-nastaleeqKasheeda text-primary text-sm'>محاسبہ</p>
                            </div>
                            <p className='text-lg fontfont-nastaleeqKasheeda'>غیبت و تہمت سے دُوری</p>
                            <ul className='flex list-disc p-3 justify-start'>
                                <li className='ml-6 font-nastaleeqRegular'>۱۰ منٹ پڑھنے کا وقت</li>
                                <li className='font-nastaleeqRegular'>۲۹ اکتوبر</li>
                            </ul>
                        </div>

                    </div>
                </div>

        </div>
    </div>
    <Footer />
</>
  )
}

export default Article