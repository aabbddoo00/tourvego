TourVego hero assets
====================

حط الصور هنا بنفس الأسماء دي بالظبط:

1) logo.png   ->  اللوجو بتاع TourVego (يفضل خلفية شفافة PNG)
2) hero-bg.jpg ->  صورة خلفية الهيرو سكشن (full background)

المسارات في الكود بتشير لـ:
  /imgs/logo.png
  /imgs/hero-bg.jpg

ملاحظات:
- لو اللوجو امتداده مختلف (svg/webp) غيّر الاسم في src/components/layout/Logo.tsx
- لو الباك جراوند امتداده مختلف غيّره في src/components/hero/HeroSection.tsx
- الفولدر ده (public/) بيتنسخ زي ما هو وقت الـ build، فالصور مش هتضيع.
