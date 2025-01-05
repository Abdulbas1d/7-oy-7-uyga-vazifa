import { createSlice } from "@reduxjs/toolkit";

export const text = createSlice({
    name: "text",
    initialState: {
        language: "uzbek",
        fizika: `tabiat hodisalarini va ularning qonuniyatlarini o‘rganuvchi ilmiy fan. Fizika so‘zi yunoncha "physis" so‘zidan kelib chiqqan bo‘lib, "tabiat" degan ma’noni anglatadi. Bu fan materiyaning xususiyatlari, harakati, va o‘zaro ta’sirlari bilan bog‘liq bo‘lgan fundamental tushunchalarni o‘rganadi. Fizika boshqa tabiiy fanlar — kimyo, biologiya, astronomiya — asoslarini tashkil qiladi va zamonaviy texnologiyalar rivojida muhim rol o‘ynaydi.`,
        algebra: "bu matematikaning bir bo‘limi bo‘lib, o‘zgaruvchilar, koeffitsiyentlar, va matematik operatsiyalar orqali masalalar yechiladi. Algebra ko‘proq raqamlar o‘rniga harflar ishlatiladigan matematik ifodalar bilan shug‘ullanadi. Ushbu bo‘limda matematik fikrlash, yechimlarni topish va tenglama yoki ifodalar o‘rtasidagi bog‘liqlikni aniqlash ko‘nikmalari rivojlanadi.Algebra ko‘plab sohalarda, shu jumladan fizika, iqtisod, muhandislik va kompyuter fanlarida qo‘llaniladi.",
        tarix: "bu insoniyatning o‘tgan davrlarini o‘rganadigan fan bo‘lib, tarixiy hodisalar, odamlarning hayoti, jamiyatlarning rivojlanishi, madaniyat va ijtimoiy tuzilmalar haqida ilmiy bilimlar beradi. Tarix fani orqali biz o‘tgan davrlar, ularning sabablari va oqibatlari, shuningdek, ijtimoiy, siyosiy va iqtisodiy tushunishga harakat qilamiz. Yozma manbalar, ya'ni tarixiy, asarlar, kitoblar, diplomatik yozuvlar, arxiv tarixni o‘rganishning asosiy vositalaridan biridir."
    },
    reducers: {
        toggleLanguage: (state, action) => {
            if (state.language === "uzbek") {
                state.language = "english"
                state.fizika = `The scientific discipline that studies natural phenomena and their laws. The word physics comes from the Greek word "physis", which means "nature". This science studies the fundamental concepts related to the properties, behavior, and interactions of matter. Physics forms the basis of other natural sciences - chemistry, biology, astronomy - and plays an important role in the development of modern technologies.`
                state.algebra = "It is a branch of mathematics that deals with solving problems using variables, coefficients, and mathematical operations. Algebra deals with mathematical expressions that use letters rather than numbers. This branch develops the skills of mathematical reasoning, finding solutions, and identifying relationships between equations or expressions. Algebra is used in many fields, including physics, economics, engineering, and computer science.",
                state.tarix = `It is a science that studies the past periods of humanity, providing scientific knowledge about historical events, people's lives, the development of societies, culture and social structures. Through the science of history, we try to understand past periods, their causes and consequences, as well as social, political and economic. Written sources, that is, historical works, books, diplomatic records, archives are one of the main tools for studying history.`
            } else {
                state.language = "uzbek"
                state.fizika = `tabiat hodisalarini va ularning qonuniyatlarini o‘rganuvchi ilmiy fan. Fizika so‘zi yunoncha "physis" so‘zidan kelib chiqqan bo‘lib, "tabiat" degan ma’noni anglatadi. Bu fan materiyaning xususiyatlari, harakati, va o‘zaro ta’sirlari bilan bog‘liq bo‘lgan fundamental tushunchalarni o‘rganadi. Fizika boshqa tabiiy fanlar — kimyo, biologiya, astronomiya — asoslarini tashkil qiladi va zamonaviy texnologiyalar rivojida muhim rol o‘ynaydi.`;
                state.algebra = "bu matematikaning bir bo‘limi bo‘lib, o‘zgaruvchilar, koeffitsiyentlar, va matematik operatsiyalar orqali masalalar yechiladi. Algebra ko‘proq raqamlar o‘rniga harflar ishlatiladigan matematik ifodalar bilan shug‘ullanadi. Ushbu bo‘limda matematik fikrlash, yechimlarni topish va tenglama yoki ifodalar o‘rtasidagi bog‘liqlikni aniqlash ko‘nikmalari rivojlanadi.Algebra ko‘plab sohalarda, shu jumladan fizika, iqtisod, muhandislik va kompyuter fanlarida qo‘llaniladi.";
                state.tarix = `bu insoniyatning o‘tgan davrlarini o‘rganadigan fan bo‘lib, tarixiy hodisalar, odamlarning hayoti, jamiyatlarning rivojlanishi, madaniyat va ijtimoiy tuzilmalar haqida ilmiy bilimlar beradi. Tarix fani orqali biz o‘tgan davrlar, ularning sabablari va oqibatlari, shuningdek, ijtimoiy, siyosiy va iqtisodiy tushunishga harakat qilamiz. Yozma manbalar, ya'ni tarixiy, asarlar, kitoblar, diplomatik yozuvlar, arxiv tarixni o‘rganishning asosiy vositalaridan biridir.`;
            }
        }
    }
})

export const { toggleLanguage } = text.actions;
export default text.reducer