# Pengembangan Webite BBTA3 BPPT

![Build & Deploy BBTA3 Website](https://github.com/bbta3-bppt/website/workflows/Build%20&%20Deploy%20BBTA3%20Website/badge.svg)

repository ini merupakan tempat pengembangan website BBTA3 BPPT yang dilakukan menggunakan konsep sederhana yaitu 
*Static Site Generator* melalui teknologi yang ditawarkan dari [HUGO](https://gohugo.io/). Sehingga ini menyebabkan 
terjadinya perombakan pengembangan dari semula.

## Latar Belakang
Sehubungan dengan keterbatasan sumber daya yang kami miliki, kelola website dengan **CMS** (_Content Management System_)
semisal _Wordpress_ membuat kami kesulitan dalam melakukan pembaruan dan penyesuaian kompatibilitas masing-masing _plugin_
dan _theme_. Disamping itu, proses _backup_ website yang kami alami kurang fleksibel serta untuk melakukan _Horizontal 
Scaling_ sulit untuk kami lakukan dengan keterbatasan yang ada.

Kami memahami **CMS** merupakan terbosan yang luar biasa dan kami sudah menggunakannya dalam beberapa tahun saat penulisan
dokumen ini kami lakukan. Untuk saat ini, kami beralih ke teknologi dasar *Static Site Generator* yang kami rasa lebih 
"murah" untuk dikerjakan dan lebih mudah untuk melakukan _deploy_ serta _Horizontal Scaling_ website BBTA3 BPPT. Tentu, 
kami masih terbuka dengan masukan komunitas sobat **AERO** agar website ini lebih baik lagi.

## Cara Memulai

```bash
# clone repositori ini dengan git di terminal
$ git clone https://github.com/bbta3-bppt/website.git

# pindah lokasi ke lokasi hasil clone
$ cd <DIREKTORI>

# yakinkan sebelumnya sudah memasang hugo cli
$ hugo version

# jalankan lokal server selama pengembangan
$ hugo server -D
```

## Informasi Lanjut

Apabila ada informasi lebih lanjut atau berminat bergabung dengan _Open Project_ BBTA3 BPPT, 
hubungi melalui layanan chat [BBTA3 BPPT](https://discord.gg/uwJ2NT3).
