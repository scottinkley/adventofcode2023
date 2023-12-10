/*
Day 9: Mirage Maintenance -- tests
*/

const { getSumOfExtrapolatedValues, getExtrapolatedValue, getIntervals } = require('./dec09')

const EXAMPLE =
`0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

const FULL_INPUT =
`13 9 1 2 50 233 728 1871 4300 9258 19218 39107 78571 155948 304911 585118 1098671 2014751 3605471 6296784 10739208
16 39 84 173 354 719 1433 2795 5379 10350 20134 39782 79679 160823 324893 652941 1299026 2548741 4917680 9311783 17280520
0 14 39 74 117 165 221 322 616 1545 4242 11327 28389 66554 146616 305124 602288 1130037 2015139 3405883 5420809
6 14 26 55 130 298 626 1203 2142 3582 5690 8663 12730 18154 25234 34307 45750 59982 77466 98711 124274
15 27 57 112 193 306 501 952 2094 4836 10868 23071 46018 86517 154090 261201 422937 655705 974331 1386730 1885055
4 12 28 52 84 124 172 228 292 364 444 532 628 732 844 964 1092 1228 1372 1524 1684
22 47 82 125 185 290 491 862 1496 2497 3968 5995 8627 11852 15569 19556 23434 26627 28318 27401 22429
6 12 35 99 244 535 1072 2012 3626 6421 11355 20156 35713 62421 106221 173913 271307 400407 558224 746250 1014251
15 26 48 94 193 412 891 1885 3817 7386 13867 25919 49530 98253 201764 422275 885030 1834213 3735657 7467927 14683606
14 15 14 13 34 138 444 1154 2610 5452 11027 22332 45982 96031 201059 417001 850134 1698093 3322716 6378295 12034330
13 15 19 36 81 167 312 579 1183 2729 6703 16441 38971 88387 191804 399496 801577 1554595 2922723 5339906 9501421
5 13 35 89 205 427 815 1439 2358 3594 5152 7214 10777 19279 42304 103555 257455 622919 1450657 3254515 7062161
11 19 39 81 180 414 936 2037 4271 8691 17269 33611 64154 120210 221655 404097 733769 1339849 2485861 4727059 9251974
23 33 59 123 252 482 881 1609 3050 6083 12617 26617 56019 116204 236113 468683 908121 1717669 3173015 5728447 10115310
12 23 54 112 214 397 731 1347 2498 4673 8788 16497 30720 56601 103321 187540 339776 615803 1116226 2018838 3630258
13 39 79 146 265 476 841 1455 2461 4069 6579 10408 16121 24466 36413 53197 76365 107827 149911 205422 277705
4 17 55 132 266 497 916 1705 3188 5888 10572 18242 29992 46596 67617 89729 103820 90291 11781 -197672 -648282
22 29 30 32 53 122 279 575 1072 1843 2972 4554 6695 9512 13133 17697 23354 30265 38602 48548 60297
26 40 64 102 169 307 614 1301 2796 5918 12148 24028 45723 83785 148162 253499 420782 679380 1069544 1645426 2478685
19 22 29 60 158 396 884 1776 3286 5747 9803 16932 30680 59260 120545 250955 520281 1055056 2073597 3936192 7213942
16 33 76 170 360 717 1344 2382 4016 6481 10068 15130 22088 31437 43752 59694 80016 105569 137308 176298 223720
2 1 2 19 86 273 714 1651 3509 7041 13625 25869 48802 92120 174240 329318 618936 1150885 2108392 3794283 6695962
-6 -14 -14 4 57 177 419 869 1652 2940 4960 8002 12427 18675 27273 38843 54110 73910 99198 131056 170701
-1 6 22 54 122 269 580 1225 2543 5180 10292 19850 37204 68423 125831 237215 468583 977344 2130410 4754920 10649430
-1 2 11 28 56 118 291 755 1857 4190 8687 16730 30274 51986 85399 135081 206819 307818 446915 634808 884300
19 34 50 69 97 154 305 723 1809 4423 10328 23025 49290 101997 205419 405536 790659 1533096 2972518 5778945 11261923
11 30 60 111 203 366 640 1075 1731 2678 3996 5775 8115 11126 14928 19651 25435 32430 40796 50703 62331
17 33 54 81 122 201 368 710 1363 2525 4470 7563 12276 19205 29088 42824 61493 86377 118982 161061 214638
7 22 57 122 226 377 582 847 1177 1576 2047 2592 3212 3907 4676 5517 6427 7402 8437 9526 10662
17 30 43 56 69 82 95 108 121 134 147 160 173 186 199 212 225 238 251 264 277
4 15 27 47 100 242 588 1362 2972 6109 11865 21861 38372 64432 103898 161448 242484 352907 498727 685467 917316
8 13 18 23 28 33 38 43 48 53 58 63 68 73 78 83 88 93 98 103 108
12 16 30 65 133 253 462 836 1538 2929 5822 12063 25836 56474 124203 271294 582804 1223910 2505578 4998285 9726819
10 4 4 17 45 78 99 127 344 1385 4932 14878 39588 96342 220238 482311 1026525 2144441 4422435 9022958 18202954
-8 -15 -27 -48 -83 -138 -220 -337 -498 -713 -993 -1350 -1797 -2348 -3018 -3823 -4780 -5907 -7223 -8748 -10503
6 15 35 73 138 245 423 742 1391 2871 6420 14863 34177 76173 162814 332796 651100 1222255 2208009 3849957 6497388
8 26 52 89 149 269 537 1126 2350 4797 9680 19720 41207 88482 193086 421410 907096 1908096 3904084 7759931 15000013
7 -1 -3 15 82 256 650 1484 3179 6519 12934 25019 47548 89584 169083 323156 630831 1262359 2582435 5358159 11162062
1 9 25 57 129 295 664 1453 3108 6571 13827 28941 59892 121629 240912 463657 865675 1567877 2757205 4714737 7852595
11 24 50 89 141 206 284 375 479 596 726 869 1025 1194 1376 1571 1779 2000 2234 2481 2741
-6 -13 -7 26 105 261 555 1123 2284 4784 10319 22608 49499 106908 225830 464252 926635 1794990 3378142 6191087 11087494
-5 -11 -20 -21 6 100 337 863 1954 4110 8172 15414 27505 46184 72529 106021 144565 188831 258644 437033 970832
21 39 62 102 187 369 738 1460 2876 5727 11617 23908 49380 101213 204191 403530 779439 1470487 2710128 4882394 8604873
-1 -6 -15 -28 -42 -45 11 267 1053 3051 7603 17344 37537 78854 162989 333510 675784 1351492 2654874 5099428 9547513
-7 -14 -22 -23 1 83 283 717 1612 3393 6801 13020 23737 40943 66061 97587 125727 121288 13960 -348505 -1274819
19 37 75 142 251 433 777 1515 3185 6924 14971 31509 64065 125846 239653 444428 806103 1435295 2515595 4347808 7417599
8 9 26 79 188 381 730 1433 2971 6400 13910 29927 63296 131533 268879 541090 1071790 2088135 3997950 7517035 13874816
7 12 9 -8 -46 -113 -218 -371 -583 -866 -1233 -1698 -2276 -2983 -3836 -4853 -6053 -7456 -9083 -10956 -13098
0 14 34 68 146 330 724 1484 2828 5046 8510 13684 21134 31538 45696 64540 89144 120734 160698 210596 272170
25 47 91 175 333 632 1211 2351 4592 8931 17178 32645 61547 115894 219414 419464 810455 1578815 3087077 6026863 11689341
14 24 54 123 257 489 859 1414 2208 3302 4764 6669 9099 12143 15897 20464 25954 32484 40178 49167 59589
-2 -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16 -17 -18 -19 -20 -21 -22
8 22 42 72 127 246 515 1100 2290 4550 8584 15408 26433 43558 69273 106772 160076 234166 335126 470296 648435
18 28 55 119 250 500 964 1818 3396 6348 11950 22678 43214 82126 154559 286393 520470 925668 1609809 2737633 4555354
15 42 83 141 229 392 751 1575 3393 7171 14596 28530 53745 98211 175700 311745 557907 1025336 1960193 3904439 8021557
8 23 51 111 247 548 1193 2535 5237 10472 20198 37518 67134 115903 193502 313208 492798 755573 1131509 1658537 2383953
2 7 23 61 137 284 583 1238 2742 6220 14103 31399 68001 142729 290167 571854 1094050 2035157 3686967 6515273 11247057
15 35 70 123 205 351 640 1234 2476 5127 10881 23388 50168 106080 219575 444178 880313 1718307 3325116 6420001 12426035
-4 -8 -12 1 60 216 571 1344 3003 6504 13699 28030 55777 108507 208234 398611 769030 1505112 2990806 6007435 12108578
10 19 27 34 40 45 49 52 54 55 55 54 52 49 45 40 34 27 19 10 0
13 12 13 35 111 289 633 1224 2161 3562 5565 8329 12035 16887 23113 30966 40725 52696 67213 84639 105367
10 16 26 51 112 240 476 871 1486 2392 3670 5411 7716 10696 14472 19175 24946 31936 40306 50227 61880
13 37 69 117 202 358 632 1084 1787 2827 4303 6327 9024 12532 17002 22598 29497 37889 47977 59977 74118
0 7 22 38 56 105 277 788 2087 5065 11488 24924 52703 109923 227343 466485 948042 1905139 3783986 7436638 14494442
18 29 40 53 75 130 279 648 1469 3147 6376 12339 23053 42005 75484 135692 248275 470140 929564 1911551 4030024
7 5 3 1 -1 -3 -5 -7 -9 -11 -13 -15 -17 -19 -21 -23 -25 -27 -29 -31 -33
2 10 37 88 165 280 480 896 1841 3991 8681 18340 37110 71827 133945 243949 441888 811957 1537693 3021325 6133343
-8 -15 -24 -35 -48 -63 -80 -99 -120 -143 -168 -195 -224 -255 -288 -323 -360 -399 -440 -483 -528
17 37 81 164 306 543 946 1648 2879 5009 8599 14460 23720 37899 58992 89560 132829 192797 274349 383380 526926
17 30 53 110 236 487 971 1909 3751 7408 14718 29353 58532 116215 229079 447833 868909 1676370 3222975 6186132 11864580
8 19 23 15 -12 -69 -174 -357 -668 -1189 -2051 -3457 -5712 -9261 -14736 -23013 -35280 -53117 -78589 -114353 -163780
5 1 -9 -19 -4 107 488 1531 4073 9841 22317 48398 101541 207661 416099 819830 1592241 3053001 5783775 10827155 20020966
26 45 78 145 275 506 881 1443 2248 3444 5511 9827 19823 43121 95218 205491 426558 848343 1618564 2971797 5269771
-5 5 23 42 68 141 370 1001 2558 6142 14059 31092 66957 140831 289390 580684 1137621 2177151 4074871 7470282 13436026
-7 -17 -26 -19 28 148 383 784 1411 2333 3628 5383 7694 10666 14413 19058 24733 31579 39746 49393 60688
17 25 37 67 144 324 715 1526 3151 6299 12181 22765 41110 71790 121419 199288 318125 494989 752309 1119079 1632220
20 34 53 84 148 296 637 1384 2938 6064 12281 24712 49847 100989 204597 411300 813977 1575927 2973032 5456459 9752183
-3 10 39 84 150 259 464 863 1611 2928 5101 8478 13452 20433 29806 41873 56777 74406 94275 115384 136050
21 37 66 114 187 291 432 616 849 1137 1486 1902 2391 2959 3612 4356 5197 6141 7194 8362 9651
0 4 16 36 64 100 144 196 256 324 400 484 576 676 784 900 1024 1156 1296 1444 1600
3 -5 -18 -27 -16 46 225 654 1577 3405 6784 12675 22446 37976 61771 97092 148095 219983 319170 453457 632220
7 12 33 84 191 403 803 1519 2735 4702 7749 12294 18855 28061 40663 57545 79735 108416 144937 190824 247791
-1 -1 5 35 130 375 942 2176 4753 9940 19974 38536 71214 125737 211704 339788 521613 775131 1149369 1802719 3211284
12 23 59 134 275 534 1016 1949 3828 7666 15376 30280 57688 105422 184122 307268 491280 757141 1137221 1695078 2572965
11 34 82 179 375 763 1501 2854 5291 9707 17905 33594 64391 125777 248891 495913 990425 1977028 3937200 7811291 15417033
5 11 11 5 7 51 200 572 1407 3213 7062 15194 32298 68303 144450 306183 649533 1372959 2875153 5932603 12010709
6 6 9 20 44 86 151 244 370 534 741 996 1304 1670 2099 2596 3166 3814 4545 5364 6276
-1 10 43 107 213 375 607 926 1388 2214 4116 9024 21569 51943 121237 271265 582669 1208775 2440566 4835689 9483955
18 28 51 108 232 470 883 1544 2548 4070 6544 11102 20534 41261 87260 187763 402318 850324 1769065 3627460 7347100
9 22 58 144 322 649 1197 2053 3319 5112 7564 10822 15048 20419 27127 35379 45397 57418 71694 88492 108094
13 28 47 79 145 288 605 1312 2854 6073 12448 24422 45832 82459 142716 238493 386179 607882 932869 1399249 2055923
20 27 28 31 67 205 586 1493 3477 7562 15555 30490 57238 103318 179947 303370 496514 791013 1229654 1869297 2784325
4 2 13 51 134 280 512 899 1678 3537 8215 19730 46834 107787 239332 512954 1063256 2135748 4164713 7896309 14577942
2 19 44 85 163 330 702 1507 3148 6281 11908 21485 37045 61336 97974 151611 228118 334783 480524 676117 934439
0 8 20 32 33 7 -45 -50 238 1398 4574 11792 26375 53469 100693 178926 303244 494020 778200 1190768 1776413
5 10 18 42 112 282 649 1394 2858 5674 10989 20828 38675 70374 125486 219276 375547 630586 1038540 1678598 2664418
-8 -17 -22 -4 62 209 486 984 1904 3703 7366 14864 29870 58817 112394 207588 370392 639311 1069810 1739860 2756750
7 26 52 78 92 72 -25 -274 -772 -1557 -2348 -1889 3509 22953 76772 207538 501000 1126419 2415392 5016330 10193431
14 28 62 137 288 564 1029 1769 2918 4729 7736 13085 23161 42716 80860 154687 296474 569590 1106436 2201259 4534454
12 21 31 50 94 187 361 656 1120 1809 2787 4126 5906 8215 11149 14812 19316 24781 31335 39114 48262
25 40 66 119 216 376 626 1012 1615 2572 4102 6537 10358 16236 25078 38078 56773 83104 119482 168859 234804
-3 4 22 63 157 365 800 1663 3306 6354 11973 22497 42893 84077 170118 353241 743815 1567992 3274476 6725579 13528289
18 25 41 85 194 430 880 1646 2819 4426 6332 8070 8561 5673 -4447 -28351 -76680 -166089 -321853 -581325 -998444
-3 -5 -4 14 82 274 738 1741 3742 7538 14573 27573 51803 97491 184397 350160 664854 1254786 2338177 4272489 7605391
6 21 62 150 313 583 1001 1640 2656 4375 7423 12916 22772 40351 72035 131397 250022 504209 1077056 2394614 5408751
6 17 35 59 88 124 185 345 824 2164 5568 13581 31507 70374 153039 326443 685560 1419081 2894879 5817673 11517304
27 51 88 148 245 391 585 795 930 799 57 -1850 -5680 -12097 -20339 -23790 2752 136350 586925 1883535 5282830
20 38 66 111 178 267 369 455 452 220 -391 -1168 -280 9055 46292 159836 458972 1172986 2755500 6061229 12635038
-5 -2 3 6 1 -19 -61 -122 -142 139 1542 6276 19720 54102 135862 320038 717789 1547964 3231613 6561170 12995979
-1 -1 9 53 163 381 770 1441 2621 4813 9142 18067 36809 76146 157690 323371 651521 1282605 2458674 4584186 8329067
18 20 21 28 60 159 408 964 2117 4389 8690 16551 30457 54306 94023 158361 259924 416450 652395 1000862 1505922
11 12 20 44 91 172 320 632 1352 3027 6816 15144 33105 71372 151921 318691 656487 1323178 2602987 4993515 9348715
10 23 47 81 135 238 450 889 1799 3719 7887 17170 38131 85465 191183 422964 919688 1958646 4081245 8328736 16690611
12 20 44 109 256 542 1033 1786 2829 4186 6074 9555 18231 42167 106369 268243 652146 1515324 3369488 7197725 14829634
6 25 51 83 124 181 265 391 578 849 1231 1755 2456 3373 4549 6031 7870 10121 12843 16099 19956
16 27 51 95 167 294 566 1220 2778 6253 13437 27285 52409 95696 167064 280370 454484 714543 1093399 1633275 2387643
17 29 52 99 181 316 550 986 1828 3467 6661 12887 24966 48078 91289 169702 307315 540617 922874 1528947 2460339
9 30 58 88 124 207 471 1250 3276 8040 18452 40065 83389 168354 333074 651279 1267138 2464393 4801353 9367921 18259733
4 1 -2 -5 -8 -11 -14 -17 -20 -23 -26 -29 -32 -35 -38 -41 -44 -47 -50 -53 -56
7 22 50 91 145 212 292 385 491 610 742 887 1045 1216 1400 1597 1807 2030 2266 2515 2777
7 1 -6 -14 -23 -33 -44 -56 -69 -83 -98 -114 -131 -149 -168 -188 -209 -231 -254 -278 -303
16 23 34 58 122 295 733 1766 4057 8865 18435 36509 68900 124019 213263 351388 557578 859043 1300676 1966288 3018306
19 42 70 103 156 283 630 1545 3788 8913 19964 42779 88493 178375 353092 690132 1335849 2563024 4871834 9162883 17027082
25 34 47 69 120 265 674 1728 4183 9401 19673 38734 72782 132807 240082 438785 823950 1601445 3213979 6602677 13746667
6 8 18 49 128 316 738 1637 3473 7097 14050 27087 51140 95174 175877 325110 605065 1139295 2176603 4223022 8313933
25 42 60 82 113 163 267 541 1307 3339 8316 19634 43858 93352 191142 380084 740309 1422238 2707891 5121665 9624777
2 2 19 68 178 410 886 1831 3639 6995 13118 24248 44620 82430 153876 291645 563103 1109854 2234234 4587476 9573285
11 13 25 56 112 197 332 621 1407 3572 9054 21715 48867 104181 213629 428079 850295 1692681 3399755 6905048 14162974
-1 8 31 71 131 214 323 461 631 836 1079 1363 1691 2066 2491 2969 3503 4096 4751 5471 6259
11 22 57 144 328 676 1281 2264 3790 6140 9912 16465 28791 53136 101932 198969 388189 747858 1411787 2598014 4641722
11 34 76 148 282 560 1157 2398 4829 9302 17074 29920 50260 81300 127187 193178 285823 413162 584936 812812 1110622
10 37 84 168 320 586 1040 1838 3356 6472 13080 26976 55350 111277 217852 414992 770470 1397495 2482156 4325360 7405572
-1 12 39 80 131 183 221 223 159 -10 -333 -870 -1693 -2887 -4551 -6799 -9761 -13584 -18433 -24492 -31965
21 39 61 86 121 184 312 576 1099 2064 3692 6181 9656 14342 21553 36952 79452 203256 549054 1457131 3706426
12 26 45 69 98 132 171 215 264 318 377 441 510 584 663 747 836 930 1029 1133 1242
9 13 17 20 39 131 429 1193 2869 6138 11923 21305 35279 54258 77207 100260 114641 103675 38637 -126854 -464233
1 7 15 25 37 51 67 85 105 127 151 177 205 235 267 301 337 375 415 457 501
3 6 15 32 49 40 -54 -352 -1082 -2670 -5894 -12132 -23736 -44562 -80627 -140530 -233991 -362847 -487845 -427231 419811
14 38 83 171 347 698 1388 2724 5288 10201 19638 37821 72950 141014 273348 531439 1035182 2014956 3903969 7495723 14202481
8 22 41 69 119 213 382 666 1114 1784 2743 4067 5841 8159 11124 14848 19452 25066 31829 39889 49403
3 15 48 110 217 408 783 1581 3330 7128 15154 31569 64084 126754 245276 467816 888340 1697776 3295023 6521639 13142334
12 12 9 10 32 104 284 704 1654 3717 7971 16283 31744 59363 107339 189801 333432 594162 1098705 2143896 4422832
3 13 37 87 183 361 693 1333 2611 5203 10411 20599 39868 75173 138430 251021 454002 831116 1558760 3009394 5955544
2 9 34 96 231 502 1020 1991 3820 7331 14209 27852 54963 108448 212559 411783 785790 1473885 2713940 4902800 8687759
-1 15 54 141 325 694 1409 2782 5435 10589 20544 39423 74265 136564 244363 425024 718807 1183403 1899578 2978097 4568109
9 4 12 44 108 212 371 619 1035 1804 3358 6699 14130 30858 68345 150942 328333 697740 1441808 2890726 5620584
17 28 47 97 225 527 1197 2614 5485 11066 21487 40211 72661 127053 215477 355272 570745 895288 1373951 2066533 3051257
3 15 38 76 144 284 600 1315 2852 5950 11853 22663 42035 76521 138049 248260 445729 797473 1416608 2488566 4308930
0 14 55 138 280 500 821 1286 2006 3267 5743 10901 21750 44187 89337 177479 344404 651372 1200231 2155740 3777708
22 35 61 108 187 316 530 897 1534 2612 4352 7083 11627 20708 42925 102335 259214 651581 1573215 3612986 7893395
11 28 60 105 171 299 602 1339 3055 6825 14647 30050 59047 111723 205091 368507 654099 1156606 2050126 3654091 6548131
18 35 60 97 152 238 386 656 1136 1914 3025 4446 6394 10563 23656 65886 189593 518008 1324233 3191334 7336923
10 8 11 36 129 379 932 2005 3900 7018 11873 19106 29499 43989 63682 89867 124030 167868 223303 292496 377861
26 33 45 77 159 343 703 1325 2283 3595 5156 6661 7567 7202 5207 2580 3652 19321 71739 200305 468155
18 33 56 87 126 173 228 291 362 441 528 623 726 837 956 1083 1218 1361 1512 1671 1838
1 2 7 29 90 229 531 1187 2595 5526 11433 23113 46190 92325 185737 375632 758743 1519185 2999496 5832773 11204150
12 28 44 73 142 292 578 1069 1848 3012 4672 6953 9994 13948 18982 25277 33028 42444 53748 67177 82982
12 21 34 63 125 255 541 1189 2621 5600 11361 21706 39000 66000 105490 159830 230826 320887 437380 603585 881887
8 10 20 57 150 338 670 1205 2012 3170 4768 6905 9690 13242 17690 23173 29840 37850 47372 58585 71678
2 -2 0 29 113 288 609 1179 2205 4087 7537 13708 24286 41459 67624 104624 152220 205396 249966 255799 166799
4 11 36 90 189 373 751 1583 3410 7243 14822 28956 53955 96165 164617 271801 434576 675227 1022680 1513886 2195385
0 8 22 42 70 110 168 252 372 540 770 1078 1482 2002 2660 3480 4488 5712 7182 8930 10990
2 5 23 68 157 326 658 1332 2704 5435 10685 20396 37691 67420 116888 196804 322494 515425 805091 1231316 1847033
25 47 85 152 279 533 1039 2003 3740 6723 11690 19900 33774 58499 105884 203104 411369 863702 1838146 3895234 8131173
10 18 27 40 72 164 410 1012 2386 5361 11553 24059 48695 96085 184991 347390 636078 1136324 1984955 3404430 5768038
8 15 25 50 112 233 419 636 776 608 -295 -2649 -7494 -15878 -27415 -36011 -19424 83325 416753 1292008 3332900
-7 0 23 74 182 400 821 1630 3240 6595 13792 29310 62383 131475 272480 553264 1098587 2131402 4039149 7477082 13525036
11 18 29 58 137 326 727 1506 2928 5412 9617 16577 27914 46174 75353 121709 194993 310278 490621 770860 1202927
-6 -15 -25 -26 -6 41 119 260 606 1593 4335 11408 28450 67433 153324 337490 724266 1522768 3146361 6400695 12833630
-5 -5 9 61 191 461 961 1815 3187 5287 8377 12777 18871 27113 38033 52243 70443 93427 122089 157429 200559
5 9 4 -9 -20 5 160 662 1953 4876 11007 23311 47461 94541 186739 369616 738697 1496311 3069750 6348399 13142062
6 29 70 148 297 572 1075 2024 3895 7672 15243 29981 57548 106957 191922 332519 557172 904967 1428284 2195722 3295275
10 29 76 163 304 534 938 1685 3062 5503 9608 16147 26044 40336 60102 86357 119906 161153 209860 264851 323656
11 31 64 122 226 418 788 1536 3111 6510 13891 29762 63158 131435 266703 526818 1015051 1917713 3580282 6665458 12480162
6 8 23 66 156 316 573 958 1506 2256 3251 4538 6168 8196 10681 13686 17278 21528 26511 32306 38996
18 23 28 33 38 43 48 53 58 63 68 73 78 83 88 93 98 103 108 113 118
-10 -14 -12 16 111 356 907 2043 4255 8403 15978 29514 53204 93785 161771 273131 451532 731296 1161256 1809740 2770965
6 16 39 92 209 450 923 1841 3653 7320 14876 30549 62957 129299 263131 528419 1044364 2028412 3869505 7250862 13352589
-9 -3 8 33 98 253 578 1193 2285 4177 7491 13516 25007 47844 94312 189275 381271 761625 1496150 2875983 5396700
-1 9 33 79 158 286 485 787 1255 2057 3666 7326 16063 36815 84847 192719 427987 926941 1956539 4023933 8063400
14 36 85 180 343 603 1007 1638 2640 4250 6837 10948 17361 27145 41727 62966 93234 135504 193445 271524 375115
2 17 40 77 140 243 392 577 790 1122 2042 5040 13932 37286 92642 213474 460186 936855 1815940 3373775 6040364
14 20 27 34 51 119 341 927 2267 5060 10539 20835 39521 72410 128860 224389 386712 669984 1186943 2176996 4141659
5 22 56 122 245 460 808 1319 1969 2594 2740 1424 -3223 -14464 -37652 -81155 -157555 -285170 -489952 -807818 -1287475
4 9 11 20 70 237 663 1594 3448 6933 13240 24354 43576 76457 132544 228668 395012 685937 1198577 2103608 3694426
17 18 18 30 79 210 512 1167 2532 5261 10473 19971 36516 64159 108633 177806 282195 435540 655436 964020 1388709
11 11 16 29 68 181 465 1096 2392 4961 10050 20351 41823 87736 187498 405578 881209 1909587 4103216 8702809 18157950
1 2 12 43 107 223 433 827 1577 2980 5510 9879 17107 28601 46243 72487 110465 164102 238240 338771 472779
3 19 53 127 274 536 962 1606 2525 3777 5419 7505 10084 13198 16880 21152 26023 31487 37521 44083 51110
-1 -10 -25 -42 -37 59 396 1252 3091 6632 12929 23462 40239 65909 103886 158484 235063 340186 481787 669350 914099
23 39 53 60 60 79 202 626 1756 4398 10162 22301 47443 99158 205291 422907 868237 1775406 3609229 7278353 14533994
8 8 17 47 110 218 383 617 932 1340 1853 2483 3242 4142 5195 6413 7808 9392 11177 13175 15398
-5 -1 23 77 171 315 517 784 1146 1759 3224 7419 19431 51693 132386 321994 745481 1654653 3549409 7414859 15187687
3 8 28 81 191 381 659 997 1316 1514 1609 2115 4826 14251 40022 100687 229401 482140 949186 1770765 3157865
6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66
22 44 77 127 218 406 813 1694 3557 7370 14923 29492 57113 109074 206783 391235 741546 1412051 2708901 5252610 10327874
11 13 16 17 19 55 229 790 2268 5719 13151 28234 57430 111707 209014 377679 660833 1121841 1850514 2969559 4640269
10 8 17 60 185 483 1124 2424 4967 9834 19046 36418 69148 130628 245189 455923 837824 1521408 2739167 4923404 8917563
-2 -7 -20 -48 -88 -114 -64 173 770 1975 4124 7654 13116 21188 32688 48587 70022 98309 134956 181676 240400
8 13 34 82 172 321 539 818 1127 1427 1749 2476 5225 15285 47659 140712 384719 977950 2331461 5257403 11297755`

describe('getSumOfExtrapolatedValues', () => {
    test('provided example', () => {
       expect(getSumOfExtrapolatedValues(EXAMPLE)).toEqual(114) 
    })
})

describe('getExtrapolatedValue', () => {
    test('0 3 6 9 12 15', () => {
        expect(getExtrapolatedValue('0 3 6 9 12 15')).toEqual(18)
    })

    test('1 3 6 10 15 21', () => {
        expect(getExtrapolatedValue('1 3 6 10 15 21')).toEqual(28)
    })

    test('10 13 16 21 30 45', () => {
        expect(getExtrapolatedValue('10 13 16 21 30 45')).toEqual(68)
    })
})

describe('getIntervals', () => {
    test('0,3,6,9,12,15', () => {
        expect(getIntervals([0,3,6,9,12,15])).toEqual([3,3,3,3,3])
    })

    test('3,3,3,3,3', () => {
        expect(getIntervals([3,3,3,3,3])).toEqual([0,0,0,0])
    })

    test('10 13 16 21 30 45', () => {
        expect(getIntervals([10, 13, 16, 21, 30, 45])).toEqual([3, 3, 5, 9, 15])
    })

    test('3, 3, 5, 9, 15', () => {
        expect(getIntervals([3, 3, 5, 9, 15])).toEqual([0, 2, 4, 6])
    })
})

test('solutions', () => {
    console.log('Part 1 answer: ' + getSumOfExtrapolatedValues(FULL_INPUT))
    console.log('Part 2 answer: ')
})