/*
Day 7: Camel Cards -- Tests
*/

const {} = require('./dec07')

const EXAMPLE =
`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const FULL_INPUT =
`99898 978
T99A9 198
43Q34 550
KK8QK 418
Q6Q57 767
35A37 832
AJ867 137
45679 936
8TJ88 409
7772T 208
8KJKQ 788
KKK66 948
JATQA 365
2A224 66
77QKA 119
88844 834
68K68 872
225J7 557
A7A3A 855
22326 7
7A7JQ 565
JQ44Q 735
5AA55 970
A23JQ 715
77976 47
QQ333 162
7JT7T 333
9T9T9 151
JJ888 217
77QQQ 954
TJ999 145
44J4T 485
J9378 655
3TK2T 747
297K5 257
AK77K 912
J25J4 120
999Q9 928
Q9Q88 981
9K696 919
66336 268
86J69 168
26729 650
8A7K2 59
7K77K 12
7Q567 391
5TQT5 688
JT838 968
45JJQ 647
JA44A 716
3QT98 507
6KT38 241
88838 362
AAA36 1000
KTKKJ 934
JJ8JJ 178
66286 757
27722 625
99899 53
6J6TT 128
TQ536 540
72222 165
K22K2 397
JA3AA 719
236Q8 82
Q229J 974
9639J 793
9Q67A 787
7JJ77 926
KK33K 423
AT735 497
KA3AK 664
AJQAA 459
JJT24 20
7J82Q 184
52K52 211
557K7 196
3JJ3J 531
68J8T 375
6A5KQ 93
J55AA 454
5838Q 898
9J7A9 32
T666J 419
777J7 99
38823 319
A4979 452
K22JK 740
8T4T8 663
A9TQA 63
KJ2T5 13
Q2946 614
39937 904
53975 982
29JTA 152
65T8J 718
6286T 500
JJAAJ 528
9K226 842
TA436 902
7464K 473
Q55AQ 155
63AA6 605
QK6KA 25
2442J 760
7A787 706
AQAQQ 140
KJTAK 689
88A8A 91
QA268 187
T8T36 308
K7727 961
82228 225
A55A8 811
Q63AQ 161
4AKKT 589
J2223 269
5J673 376
8586K 776
774KA 887
J5523 223
J78T6 481
QQQKQ 240
TQJQQ 668
K3T89 430
TTT3T 588
56655 604
TJJ8A 329
49422 969
5T6T5 233
J3773 894
99939 253
869T7 14
QQ242 143
4AQJ7 174
T74AQ 973
2397K 106
656T5 810
KQ2QK 250
99797 330
KQQK6 797
T9J9Q 170
586TK 310
AK54J 366
2676J 744
462KT 958
32366 460
K4664 651
8K859 683
TTT4T 517
43343 849
K3TTK 341
747KJ 70
4494T 1
6A962 378
AAAA4 197
9K6A6 583
TT68J 237
77K5J 576
JTK55 467
T8T88 559
55497 918
7J4TK 946
K3756 401
88J48 594
T6666 8
A8AAK 3
AAAQ7 316
JA3A6 897
3J77K 789
929KJ 773
9KJ22 129
K93A7 5
Q88T2 727
669Q6 57
555A5 875
AQ8JJ 632
6767Q 352
9AAAJ 745
AJ7Q8 979
55252 343
89QTA 406
T5555 845
9TTTT 676
6J8J7 696
9AQ8A 772
A25KK 831
K5K64 337
J62JQ 659
K344K 377
95T2Q 281
65666 527
A9A8A 925
JQKKJ 580
43K2K 266
JJ5J5 259
QJT65 564
Q6886 285
3QJQQ 67
T88TT 867
99922 31
22225 648
4A235 816
68866 967
73377 494
5TT5T 228
9QQ99 618
4K73T 472
Q6QQQ 426
TT3T6 871
TJ498 712
6Q8J6 786
QQAAK 892
46377 264
62832 711
5J57Q 642
A28A2 561
T7K79 624
2T22J 402
J5252 820
T7988 299
T9988 603
97369 993
88JJJ 726
8KK8K 72
694K6 457
999J3 514
78QKK 364
K6Q9K 743
636AK 717
5KT49 826
84A65 957
42K74 575
23322 512
69KAA 65
66339 96
3QATA 999
J7887 311
QA55A 214
J2242 389
J9999 346
99599 703
77Q7Q 68
25QK2 292
9JAT6 361
QAQQQ 923
48TJ6 815
55TK8 115
22668 751
KKKA7 853
372A4 424
4KK22 710
58555 478
6756J 775
36888 620
KKK64 940
24KK4 530
78437 405
63QJ5 653
TTQ7K 771
55352 995
4Q83J 149
5Q55T 421
Q7Q4T 498
T6496 144
35433 807
JKQJT 836
979A7 38
3K658 534
J7QJ4 707
Q947A 232
J439J 458
K7777 230
59525 360
KKKK2 370
9KKQK 554
J2T2Q 484
TT626 847
Q3299 812
67TAJ 2
66926 97
2Q7QQ 56
K797J 242
5J455 103
J66AJ 438
77477 71
83438 4
JJT3Q 722
5A7KA 873
77778 756
93744 888
99AAT 489
A75KQ 989
33A33 450
6786J 916
J55J5 821
99788 503
66A3T 493
JJJA7 112
ATTJ3 465
K9K7K 699
9T9TT 885
883K8 858
96J24 590
8J88Q 939
39TJ5 328
QQA23 966
A229A 619
8K267 868
66686 425
T662J 634
QQJQ8 997
3Q694 980
66636 325
TT8JK 296
289T7 231
9K479 801
66AJ6 327
524Q8 298
JTTT8 684
QQ9QJ 357
2222T 219
QQQ22 692
9TQK8 635
4T378 731
2K77T 125
5757T 860
2J222 29
64J4A 183
439T2 769
JA6QA 21
4Q8QJ 929
4JQ93 822
TT34J 804
QQ7KK 179
JJA22 943
5TJ6T 455
43QTA 545
JQ2Q2 572
94449 78
AA7AJ 814
89666 529
37443 385
TTJ22 607
AAKKJ 502
4K444 289
AAAJA 374
T3T74 121
K7TA4 794
T73A2 153
673J7 446
QQQ66 132
Q8288 675
9JJ44 262
326JQ 746
JQ44K 277
33T33 422
4555Q 626
33353 172
7Q8K9 515
55T27 750
KA29T 382
JTTA4 471
8A8JA 135
A8AA5 462
25443 487
555AJ 475
J5T55 522
Q2942 657
JKK88 182
T5TKJ 251
Q3942 965
9Q853 806
2QKQQ 113
T9J66 272
KK7KK 838
2JTQ6 307
4J494 24
59K4J 917
K26JJ 398
44743 17
5T548 275
KAA99 50
4J6A5 896
8J9J6 766
8J888 613
QQ2QQ 349
54544 581
T4666 347
82J62 448
K2KAA 186
92TQT 646
4Q4A4 107
525J5 436
22759 739
75456 94
QQ3Q3 695
22296 567
T44TT 796
JT55T 102
2A9Q4 569
Q9QQQ 854
J554A 136
J8KKJ 835
65QK7 667
777QK 597
76677 278
35555 670
8Q32K 577
28KA5 546
T95T9 209
44QAA 622
2A98T 40
6AA6A 41
JTTQT 984
K885K 686
444J4 254
2TK96 599
TJ24T 301
628K5 535
9K73Q 987
J6KQ3 795
9J663 199
3KQ5J 271
47864 761
5KAAA 238
Q474A 381
65A45 578
93JA8 592
2K5T5 95
Q3777 985
54465 280
A9A33 631
377J7 387
A8867 759
323KJ 134
74447 42
3T433 725
66AQ6 139
29926 283
4K868 293
AAAAQ 164
4Q92Q 693
TT7AK 142
K2A77 215
44Q44 15
64AA5 64
92T49 930
2AAAA 570
KKKTK 188
J444K 573
KK4KK 627
88T77 83
J7959 261
9Q2TK 479
22622 176
JJQJ2 900
A328T 58
3A33J 263
KT76K 874
35A28 852
7877J 640
J6QA9 428
2622T 709
KT736 202
KKQKA 392
QA542 236
J333T 694
J99J9 394
QQJ2Q 677
K223Q 645
692Q6 798
86792 932
Q33T3 207
3TAQQ 552
Q65AJ 226
74444 449
9J47T 439
3Q7KA 749
AA8A8 39
5KQ5J 150
TTTJT 111
5355J 286
46J6A 468
J6T24 679
A43T3 990
8659J 732
88JJ7 173
5T379 800
AA777 26
6KT9Q 555
43444 850
72T72 274
42222 16
262J6 840
KAKAQ 864
T367J 889
A2A22 235
58566 509
399J3 996
QAAQA 802
3J3J6 321
99449 942
TTKTK 612
JT6TT 456
AATA7 54
37536 678
54A44 248
77737 195
K495K 661
9QQ9Q 22
66J66 396
A649J 146
22599 724
22929 988
2K2QK 444
58622 508
AAA3Q 354
55J75 538
K9KQQ 62
K6QAJ 169
A2KQQ 666
J44J4 818
QA8QA 755
33343 331
A2634 44
664T4 729
K3QQ3 701
4AKTJ 519
T7T97 124
54KJ8 733
9QJQ9 273
866T6 167
K7TTK 480
8TJ84 705
24477 608
78877 148
A7777 300
QQKKK 844
KJ347 803
9699Q 160
J22J2 601
3AQ82 827
AA844 758
QQT7Q 690
4KAJ6 960
J77AJ 950
3TT3T 166
2A62Q 636
QQAJA 55
222A8 28
3TA59 579
834A3 833
6K26K 819
92T9K 466
954A5 118
5KKKK 935
J86J6 400
454TK 404
A5255 463
269TJ 61
6A686 407
39333 861
A25A2 431
JK72Q 388
A74AA 412
T5QA6 790
6AJAA 74
934TT 563
9JJK9 359
A534K 358
62TA9 568
7T474 158
JA8AA 443
J95J7 641
5585J 86
2Q9KA 708
3733T 350
83373 914
T89TJ 35
KKJKK 644
JT645 742
KK656 846
2A25T 983
74KKK 437
8Q898 730
K6J56 413
49989 464
79797 532
6Q444 353
AKQ42 371
84844 784
626K6 288
535QJ 870
QQ686 523
3643K 37
34T2Q 977
J3272 260
2222Q 87
4TTKQ 36
T2AQ8 314
94349 229
77673 825
J27A5 513
TQQ25 649
TT77T 869
32632 175
39799 312
6QKTT 189
TK428 859
68648 306
QKQ5A 372
755JJ 427
J8969 239
A835T 355
4J56Q 486
T475A 363
Q72KT 23
37733 837
J9959 687
56595 738
88778 909
JKQQ4 937
QQ766 297
6TAK5 944
87Q4A 34
595Q9 947
45J45 543
AKQ59 629
5A4KT 395
4A576 440
T8TTK 379
8887J 582
A5947 417
88848 383
33QJ4 482
8A77A 411
66A9T 863
93935 291
JTJT2 824
2KQJQ 474
Q33A9 587
4Q244 956
36TAT 108
8498K 19
944KJ 539
JTTAT 130
82828 638
795A7 201
5Q5QQ 910
66QJ6 596
2224Q 303
5K278 895
A4854 783
4744J 338
242A7 681
8358J 491
322QQ 141
99499 267
TT277 741
9KQ7Q 445
3TT33 799
T224T 416
J6TA4 351
45555 516
444A9 110
KKKAK 768
T2778 249
6666K 216
96566 504
96J96 866
5J284 891
52555 702
44JA4 496
73QQQ 952
A7TT2 403
55TT2 673
A552T 972
9855J 210
49J53 606
Q4A4Q 994
8J8K2 492
49623 884
T5T6T 785
8484J 495
55559 924
96929 276
JJ857 533
555J5 123
Q293K 704
T4275 553
22228 380
44245 903
A6696 116
89T2J 410
94J99 104
24227 224
K9KKK 777
QQQQ3 748
T6ATT 591
33J39 147
AAQ66 131
9K9K9 441
KQ88Q 245
45K44 157
2A6K4 393
366J7 736
3K72J 76
2TT22 33
8777Q 200
6TJJ4 302
338A8 433
276K9 434
Q884Q 100
7Q77J 258
J9AJ7 315
A849T 10
99QQ8 227
455J2 600
99699 322
26868 114
J88A8 886
5A796 483
5TTTT 933
JQ6QK 805
9J6A3 255
33733 368
A397J 593
T7TTT 317
8K447 18
55Q5A 656
59993 320
4JJ28 906
3JKTA 584
AAQ6A 857
KQ7J7 420
T6K22 246
3363K 520
JQQQQ 384
ATJ7T 713
95455 992
2QK6Q 11
66722 737
8A327 510
6J6QJ 453
888J5 781
338A3 526
J4TJT 548
A9627 52
29277 792
83866 244
97AAA 159
4K4K7 848
QATTT 610
AK26Q 75
5976K 566
88899 101
33K33 662
42739 652
QQ8Q6 89
K3KK7 880
9944K 672
QQQQ4 763
242K5 181
T86QA 915
55K2J 488
26262 326
A5755 518
22292 938
AKT2T 691
Q79J2 630
JJ488 6
QK9QQ 501
8T59A 447
4222T 222
2A4A5 971
KQ5TT 949
8JJAA 88
2A3Q2 922
76696 658
J22JJ 122
Q5362 616
A9T9T 602
4A234 290
33999 714
7Q9J6 964
4K424 660
848JK 558
K4K44 881
57K5K 839
3222Q 505
6QA98 117
929AA 340
42546 945
9QQQ8 698
8KK88 674
QTQJ4 51
4KKJK 671
KJQ7T 243
33437 90
QA5JA 654
JKT3J 927
33K39 752
KKK62 332
4AA5A 234
J3333 843
K5555 765
4Q333 77
Q27J2 893
7KJ77 506
AAAJJ 206
67676 828
7575J 562
25252 643
77277 204
87588 700
TQQQT 334
T4T94 339
TTJT5 345
6K8A6 778
6KT3J 595
J7774 639
9988J 685
JQ879 180
TT6T7 542
JKKKJ 279
Q5QQQ 399
67666 511
593A2 318
24932 265
J4JJ4 907
T4A8A 356
33988 335
999AA 536
9JQQ5 963
9553K 780
35435 913
224KJ 754
32K3Q 876
5246Q 48
A333A 551
JJT75 878
A8888 953
KKT6K 171
A767A 879
T66TT 865
55J99 46
8J442 212
88858 469
74T77 126
JJ885 390
K5J38 637
49664 80
4TKJQ 986
69969 809
TTTT6 560
84A5T 154
K6TAT 720
AAAA3 442
43KQA 611
9JQ45 734
A8AAA 830
A22K3 367
38883 323
6K966 193
75595 324
5A2A5 477
54Q42 521
44424 901
34J43 991
K5KK7 782
A64Q2 156
TJ7T3 541
65996 386
62J69 829
QQA2T 856
4A443 476
KK333 247
997J9 920
86856 962
QTJQT 256
7A363 49
75755 98
578T4 665
3336J 680
526A5 185
TQ36J 435
85K3T 823
7Q87J 753
83338 304
58585 408
5A984 941
7T5Q8 975
QQ939 369
TTT2T 723
T32T2 270
39K79 598
AATTT 295
KJ9KK 615
J8754 415
67777 499
4T44T 461
JJJJJ 628
97A27 177
J9822 770
48KKT 808
JJ553 109
JTTTJ 313
2JKA9 203
JQ339 669
Q5T5Q 817
Q5J2A 79
QQ8Q8 30
T778T 617
4355J 45
662QQ 305
9J788 544
Q8299 623
J7923 911
AAA77 81
93T79 220
A4446 697
8Q5J5 373
26257 221
AAJ66 470
7J49J 27
K7QT5 92
37J43 621
999K9 955
684K7 547
J666J 105
T4J49 344
53T5K 69
J6224 586
47TJ3 609
AA789 451
33636 998
8TJKJ 549
7KT42 976
A9J84 218
977AJ 882
68888 336
5K32A 931
35AJ9 764
42442 205
KQQQK 342
66TAT 721
TTQ9T 862
KAAKT 163
5TT9T 138
3753J 813
43K32 633
KKTQT 877
8TTJJ 84
383J8 85
8946T 556
4K2KK 585
T7T44 791
575Q3 294
K5Q49 574
Q2QJ4 774
5A93K 348
5A643 194
A24J9 429
TT773 127
K9J5A 921
38377 851
2226A 191
66662 537
77AA9 890
Q7547 951
JQAJQ 841
78888 213
4TTT7 571
526J2 133
TKQJT 309
955J5 414
96666 959
8886K 525
KK8TT 73
22A2T 908
JT4JQ 282
43448 60
JKJAQ 9
T4TTJ 43
Q75T6 779
237T4 883
46644 682
92T29 287
AAATA 490
TATK3 762
JK4KJ 192
34436 905
QK5T8 432
333K4 252
QQQ78 524
AAAA7 190
QQ222 899
7K283 284
23339 728`

test('solutions', () => {
    console.log('Part 1 answer: ')
    console.log('Part 2 answer: ')
})