export default function Footer() {
    return (
        <div className="bg-[#191919] text-white pt-20 px-20 font-nastaleeqRegular">
            <div className="flex justify-end items-start text-end gap-x-10 pb-20 border-b">
                <div className="flex gap-x-28 px-20">
                    <div className="space-y-5">
                        <h1 className="text-2xl font-nastaleeqKasheeda">مناسبات</h1>
                        <div className="text-grayFooter space-y-3">
                            <p>محرم الحرام</p>
                            <p>غدیر</p>
                            <p>ایام فاطمیہ</p>
                            <p>جشن نور</p>
                            <p> نورنمائش</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl font-nastaleeqKasheeda">تذکرات</h1>
                        <div className="text-grayFooter space-y-3">
                            <p>ہمارے بارے میں</p>
                            <p>یاد امام</p>
                            <p>مناسبات</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl font-nastaleeqKasheeda">تبلیغات</h1>
                        <div className="text-grayFooter space-y-3">
                            <p>نور ڈائری</p>
                            <p>نور عصر مجلہ</p>
                            <p>مطبعات</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl font-nastaleeqKasheeda">تعارف</h1>
                        <div className="text-grayFooter space-y-3">
                            <p>ہمارے بارے میں</p>
                            <p>کلاسس کا تعارف</p>
                            <p>کلاس کے درجات</p>
                            <p>داخلہ فارم</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl mb-3">ایسوسی ایشن آف مشتاقان نور(امن)</h1>
                    <p className="text-grayFooter text-2xl font-nastaleeqKasheeda">پوسٹ آفس باکس نمبر ۲۵۵۲
                        <br /> اسلام آباد
                    </p>
                </div>

            </div>
            <div className="flex justify-between py-5 items-center">
                <div className="flex gap-x-3">
                    <img src="/facebook.svg" alt="Facebook" />
                    <img src="/instagram.svg" alt="Instagram" />
                    <img src="/youtube.svg" alt="Youtube" />
                </div>
                <div className="flex justify-between items-center text-xl">
                    <span className="text-secondary mr-2">ایسوسی ایشن آف مشتاقان نور (امن)</span>
                    <p>تمام حقوق ویب سائٹ پر محفوظ ہیں۔</p>
                    <p> ۲۰۲۴</p>
                </div>

            </div>
        </div>
    )
}