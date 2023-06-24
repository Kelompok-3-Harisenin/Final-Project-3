'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('detailProducts', [
      {
       detailName: 'T-Shirt TELLA TEAL BLUE',
       discount: 57,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul5-lfmklqyyxnqi4f_590x.jpg?v=1681708520",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul7-lfmklqyytg165a_590x.jpg?v=1681708511",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul3-lfmklqyyw96288_grande.jpg?v=1681708516",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukz-lfmklqyyuulm92_590x.jpg?v=1681708514",
       description: "SCREAMOUS KAOS TELLA adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Imajinatif typography Screamous membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: " ",
       rating:5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice:185000 ,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt OVERSIZED LEGEND TINY DARK FOREST',
       discount: 65,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lgj2cflcwewvb8_360x.jpg?v=1683531724",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-lgj2cflcqsn38b_360x.jpg?v=1683531716",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-lgj2cflcv0cf1d_360x.jpg?v=1683531722",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lgj2cflctlrz4b_360x.jpg?v=1683531719",
       description: "SCREAMOUS KAOS LEGEND TINY adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Logo Crown dan Typografi Screamous yang Timbul membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: " ",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 300000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Polo Shirt CROWN BLACK MISTY',
       discount: 52,
       thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul4-lfrs48szn9bx9a_a97b430c-58a5-4c70-828c-509f8de0cd74_360x.jpg?v=1681901427",
       thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul0-lfrs48szj1mle6_150x.jpg?v=1681901413",
       thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukw-lfrs48szlurha3_360x.jpg?v=1681901418",
       thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul8-lfrs48szuabybd_150x.jpg?v=1681901416"
     ,
       description: "SCREAMOUS CROWN adalah kemeja kaos berkerah lengan pendek pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain embroidery logo crown dengan kancing deret pada bagian depan membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 250000,
       category: "Polo",
       link: " ",
    },
      {
       detailName: 'Flannel ANGELOS NAVY RED',
       discount: 55,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul0-lfmklqyz0hjida_590x.jpg?v=1681714282",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul6-lfmklqyyw9u646_150x.jpg?v=1681714272",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul5-lfmklqyyz2z297_150x.jpg?v=1681714279",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul3-lfmklqyyxoem9f_360x.jpg?v=1681714277"
    ,
       description: "SCREAMOUS ANGELOS adalah Kemeja Lengan Panjang pria yang dibuat dari bahan berkualitas tinggi, berkerah Spread collar dengan kancing deret pada bagian depan serta woven lebel dan Nyaman untuk penggunaan sehari-hari maupun acara casual.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 325000,
       category: "Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt Longsleeves Rugby MARK BLACK WHITE',
       discount: 33,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/products/id-11134207-7quky-lfry56ueejkj0c_0eaf70d7-d0ed-412c-80af-93ca118af8e9_360x.jpg?v=1681901366",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukx-lfrs48szq2gtcf_150x.jpg?v=1681901355",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/products/id-11134207-7qul8-lfrs48szua657e_150x.jpg?v=1681901360",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/products/id-11134207-7qukz-lfrs48szsvlpe0_150x.jpg?v=1681901357"
    ,
       description: "SCREAMOUS KAOS LENGAN PANJANG MARK adalah Rugby Longslevee pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Dengan looks Sportwear Vintage Dapat digunakan dalam cuaca panas maupun dingin, cocok untuk style sehari hari",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 225000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt OVERSIZED LEGEND TINY WHITE SLEET',
       discount: 65,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-li77pj321yi4e5_360x.jpg?v=1687173662",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-li77pj31wc8c1f_150x.jpg?v=1687173650",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-li77pj320jxo83_150x.jpg?v=1687173659",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul0-li77pj31xqss74_150x.jpg?v=1687173656",
       description: "SCREAMOUS KAOS NEW LEGEND TINY adalah Kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 300000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Longsleeve Shirt REECE NAVY BLUE',
       discount: 53,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-lhd6x0yvg4x7ec_360x.jpg?v=1687513330",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/ff9abfc7e1533170f38b8d8ec0d4ad7f_150x.jpg?v=1687513324",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/40852b066d963e499991010013e90cc9_da098801-21eb-4984-9704-bfa5276bcd9a_150x.jpg?v=1687513328",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/42f318b5c478c7f75b66656012c685ee_150x.jpg?v=1687513326",
       description: "SCREAMOUS REECE adalah Kemeja Lengan Panjang pria yang dibuat dari bahan berkualitas tinggi, berkerah Spread collar dengan kancing deret pada bagian depan serta woven lebel dan nyaman dipakai sepanjang hari.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 325000,
       category: "Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt OVERSIZED LEGEND TINY WHITE PURPLE',
       discount: 65,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukw-li77pj31tj3g37_590x.jpg?v=1687173642",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-li77pj31nwjfc5_150x.jpg?v=1687173630",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-li77pj31s4j0cc_150x.jpg?v=1687173638",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-li77pj31qpykf1_150x.jpg?v=1687173635",
       description: "SCREAMOUS KAOS NEW LEGEND TINY adalah Kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 300000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'T-Shirt OVERSIZED LEGEND TINY WHITE MOONSTRUCK',
       discount: 65,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-li77pj31wby370_360x.jpg?v=1687173604",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-li77pj31qpob7d_150x.jpg?v=1687173596",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul4-li77pj31uxdn61_150x.jpg?v=1687173601",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-li77pj31tit789_150x.jpg?v=1687173599",
       description: "SCREAMOUS KAOS NEW LEGEND TINY adalah Kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 300000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Crewneck LEGEND TINY ON WHITE SLEET',
       discount: 55,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-li1azl58t3dg22_360x.jpg?v=1686814733",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-li1azl58nhev8e_150x.jpg?v=1686814720",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-li1azl58rot00b_150x.jpg?v=1686814731",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-li1azl58ovo435_150x.jpg?v=1686814728",
       description: "SCREAMOUS LEGEND TINY adalah Sweater Crewneck pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan woven lebel membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 400000,
       category: "Sweater",
       link: " ",
    },
      {
       detailName: 'Crewneck LEGEND TINY ON WHITE WALNUT',
       discount: 55,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-lhsrhdlhks2mbb_360x.jpg?v=1686301549",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul0-lhsrhdlhhyxqa6_150x.jpg?v=1686301551",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-lhsrhdlhozryfd_150x.jpg?v=1686301563",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lhsrhdlhnl7ic3_150x.jpg?v=1686301560",
       description: "SCREAMOUS LEGEND TINY adalah Sweater Crewneck pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan woven lebel membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 400000,
       category: "Sweater",
       link: " ",
    },
      {
       detailName: 'T-Shirt LEGEND TINY ON WHITE LAUREN OAK',
       discount: 54,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul0-lhnfii9lpuxw83_360x.jpg?v=1686046997",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-lhnevviu442x72_150x.jpg?v=1686046986",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul7-lhnfii9lhfj80d_150x.jpg?v=1686046994",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-lhnevviu1ay1ef_150x.jpg?v=1686046991",
       description: "SCREAMOUS KAOS NEW LEGEND TINY adalah T-shirt pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 185000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Polo Shirt CROWN LINE BLACK MISTY',
       discount: 46,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lhnevvitzwdl89_360x.jpg?v=1686046960",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lhnevvitua3t99_150x.jpg?v=1686046953",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-lhnevvitx38p1e_150x.jpg?v=1686046957",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lhnevvitrgyx87_150x.jpg?v=1686046955",
       description: "SCREAMOUS CROWN LINE MISTY adalah kemeja kaos berkerah lengan pendek pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain embroidery logo crown dengan kancing deret pada bagian depan membuatnya pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 250000,
       category: "Polo",
       link: " ",
    },
      {
       detailName: 'Long Pants Ankle MODERA MILO',
       discount: 58,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-lhod21kyr1hw55_360x.jpg?v=1686046930",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-lhod21kyo8d0be_150x.jpg?v=1686046919",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-lhod21kypmxg14_150x.jpg?v=1686046928",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul4-lhod21kyk0no6d_150x.jpg?v=1686046923",
       description: "SCREAMOUS MODERA adalah Celana Panjang pria dan wanita dibuat dari bahan berkualitas tinggi nyaman dipakai sepanjang hari. dengan detail woven label dibagian belakang, cocok digunakan untuk kegiatan sehari-hari, ini adalah item essensial bagi anda yang ingin tampil lebih stylish dan nyaman, Keterangan Size ada di Photo.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 475000,
       category: "Pants",
       link: " ",
    },
      {
       detailName: 'Backpack BERRY BLACK',
       discount: 56,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-lhnevvitq2eh19_360x.jpg?v=1686046907",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul4-lhn5bdrgfkanee_150x.jpg?v=1686046895",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lhn5bdrggyv3dc_150x.jpg?v=1686046898",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-lhn5bdrgl6kf39_150x.jpg?v=1686046904",
       description: "SCREAMOUS BERRY adalah Tas ransel pria dan wanita dibuat dari bahan berkualitas tinggi nyaman dipakai sepanjang hari. Mengusung desain dengan gaya Basics , dengan tambahan accesories talikur, dan compartmen penyimpanan tumblr dibagian kiri dan kanan, dengan balutan Cordura dan Busa. memiliki volume 22 Liter dan 1 Compartmen laptop untuk 13 serta compartmen pada bagian depan untuk penyimpanan utilitas sehari-hari anda.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 225000,
       category: "Accessories",
       link: " ",
    },
      {
       detailName: 'T-Shirt LEGEND TINY ON WHITE ULTIMATE GREY',
       discount: 55,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-lhnfqt99zi1q6e_360x.jpg?v=1686046874",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul5-lhnfqt99wowub3_150x.jpg?v=1686046863",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukx-lhnfqt99y3ha06_150x.jpg?v=1686046872",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul3-lhnfii9lu2n8b6_150x.jpg?v=1686046869",
       description: "SCREAMOUS KAOS NEW LEGEND TINY adalah T-shirt pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 185000,
       category: "T-Shirt",
       link: " ",
    },
      {
       detailName: 'Long Pants Ankle MODERA BLACK',
       discount: 58,
      thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukw-lhod21kyim3842_360x.jpg?v=1686046811",
      thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul7-lhod21kyft7tbd_150x.jpg?v=1686046800",
      thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lhod21kyh7is97_150x.jpg?v=1686046808",
      thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lhod21kyfsyc26_150x.jpg?v=1686046806",
       description: "SCREAMOUS MODERA adalah Celana Panjang pria dan wanita dibuat dari bahan berkualitas tinggi nyaman dipakai sepanjang hari. dengan detail woven label dibagian belakang, cocok digunakan untuk kegiatan sehari-hari, ini adalah item essensial bagi anda yang ingin tampil lebih stylish dan nyaman, Keterangan Size ada di Photo.",
       review: "",
       rating: 5,
       product_quote_S: 100,
       product_quote_L: 100,
       product_quote_XL: 100,
       initialPrice: 475000,
       category: "Pants",
       link: " ",
    },

    //======================= HALAMAN 2 START=======================


    {
      detailName: 'T-Shirt LEGEND TINY ON WHITE BLUE ASTER',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul0-lhnfqt9a7xge9c_360x.jpg?v=1686046735",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukw-lhnfqt9a2b6m86_150x.jpg?v=1686046723",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul8-lhnfqt9a6ivy27_150x.jpg?v=1686046733",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul3-lhnfqt9a54bie7_150x.jpg?v=1686046730",
      description: "SCREAMOUS KAOS NEW LEGEND TINY adalah T-shirt pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'T-Shirt HEAVY TYPE BLACK',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-lhn5bdrge5q75b_360x.jpg?v=1686046678",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul7-lhn5bdrg9y0v07_150x.jpg?v=1686046669",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lhn5bdrgcr5r1d_150x.jpg?v=1686046675",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul7-lhn5bdrgbclbe7_150x.jpg?v=1686046672",
      description: "SCREAMOUS KAOS HEAVY TYPE adalah T-shirt pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dengan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'T-Shirt LEGEND TINY ON WHITE FADED DENIM',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-lhn5bdrg74vz5b_360x.jpg?v=1685955767",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lhn1stc095ex56_150x.jpg?v=1685955756",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukx-lhn1stc0dd493a_150x.jpg?v=1685955765",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-lhn1stc0ajzd58_150x.jpg?v=1685955762",
      description: "SCREAMOUS KAOS NEW LEGEND TINY adalah T-shirt pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan aplikasi sablon plastisol pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'T-Shirt SKULL BLACK',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul0-lh8hysw5qulb16_360x.jpg?v=1685160397",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lh8hysw5mmvza9_150x.jpg?v=1685160388",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul2-lh8hysw5pg0vc6_150x.jpg?v=1685160394",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qula-lh8hysw5l8bj8a_150x.jpg?v=1685160391",
      description: "SCREAMOUS KAOS SKULL adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Imajinatif yang membawa nuansa fantasi escapism membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'T-Shirt GREAT WHITE BLACK',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qula-lh8hysw54dt850_360x.jpg?v=1685160366",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qula-lh8hysw5tnq766_150x.jpg?v=1685160356",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lh8hysw52z8s09_150x.jpg?v=1685160362",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-lh8hysw51kocc4_150x.jpg?v=1685160359",
      description: "SCREAMOUS KAOS GREAT WHITE adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Imajinatif yang membawa nuansa fantasi escapism membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'T-Shirt GLITCH BLACK',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukw-lh8hyswp96r247_360x.jpg?v=1685160321",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qula-lh8hyswp3kha7e_150x.jpg?v=1685160312",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul7-lh8hyswp6dm6ec_150x.jpg?v=1685160318",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukx-lh8hyswp25wued_150x.jpg?v=1685160315",
      description: "SCREAMOUS KAOS GLITCH adalah kaos pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Imajinatif yang membawa nuansa fantasi escapism membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 185000,
      category: "T-Shirt",
      link: " ",
   },
    {
      detailName: 'Polo Shirt CROWN LINE WHITE NAVY BLUE',
      discount: 46,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lh8hysw58l7j3e_40277693-13e0-4f9b-af4c-367f9b0cb3bb_360x.jpg?v=1685082791",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lh8hysw51kdb29_150x.jpg?v=1685082779",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukx-lh8hysw576n3ed_150x.jpg?v=1685082787",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lh8hysw52yxr8a_150x.jpg?v=1685082785",
      description: "SCREAMOUS CROWN LINE NAVY BLUE adalah kemeja kaos berkerah lengan pendek pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain embroidery logo crown dengan kancing deret pada bagian depan membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 250000,
      category: "Polo",
      link: " ",
   },
    {
      detailName: 'Polo Shirt CROWN LINE BLACK WHITE',
      discount: 46,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qula-lh73asucqogvce_7355a4b7-68b0-42bf-b088-4c30a25fbde0_360x.jpg?v=1685074497",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/6b16e3ad1d323db7bb60fb7d2e47dd7e_150x.jpg?v=1685074480",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/79b061ea1848cee7a49c748673455762_2c490537-b6bc-4062-b047-bfec86c30a7c_150x.jpg?v=1685074490",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/69614687b9448a1254ff70cf36ecad17_150x.jpg?v=1685074486",
      description: "SCREAMOUS CROWN LINE WHITE adalah kemeja kaos berkerah lengan pendek pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain embroidery logo crown dengan kancing deret pada bagian depan membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 250000,
      category: "Polo",
      link: " ",
   },
    {
      detailName: 'Crewneck LEGEND TINY ON WHITE SAGE GREEN',
      discount: 55,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/LGS-SWT-30C_360x.jpg?v=1684982315",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukw-lh2vut1clskaf6_150x.jpg?v=1684982315",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul3-lh2vut1creu27b_150x.jpg?v=1684982315",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7quky-lh2vut1cq09me5_150x.jpg?v=1684982315",
      description: "SCREAMOUS LEGEND TINY adalah Sweater Crewneck pria dan wanita yang dibuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Mengusung desain Typografi Screamous yang Bold dan Timbul serta Logo Crown dibagian lengan, dan woven lebel membuatnya pas untuk dipakai dalam kegiatan apapun.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 400000,
      category: "Sweater",
      link: " ",
   },
    {
      detailName: 'Backpack ALE BLACK',
      discount: 68,
     thumbnailPreview: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lh2vut1cizfebf_360x.jpg?v=1684735393",
     thumbnailUrl1: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul9-lh2vut1cerar1a_150x.jpg?v=1684735381",
     thumbnailUrl2: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul1-lh2vut1cerq24d_150x.jpg?v=1684735384",
     thumbnailUrl3: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lh2vut1cg6ai51_150x.jpg?v=1684735390",
      description: "SCREAMOUS ALE adalah Tas Ransel pria dan wanita dibuat dari bahan berkualitas tinggi nyaman dipakai sepanjang hari. Mengusung desain dengan gaya klasik untuk body tas, serta mix materials pada straps, accesories talikur. dengan balutan Cordura dan Busa. memiliki volume 25 Liter dan 2 Compartmen laptop untuk 13 dan 15 serta compartmen pada bagian depan untuk penyimpanan utilitas sehari-hari anda.",
      review: "",
      rating: 5,
      product_quote_S: 100,
      product_quote_L: 100,
      product_quote_XL: 100,
      initialPrice: 425000,
      category: "Accessories",
      link: " ",
   },
      
      
     
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('detailProducts',null,{});
  }
};
