---
emoji: 📝
title: Pyeon–Ahn SAT (1) 가격 계산
date: '2023-02-05 14:00:00'
author: 이승준
tags: PASAT
categories: PASAT
---

## 문제
![Q1.svg](Q1.svg)

## 정답
52

## 해설
29 students and the teacher are going to buy the T-shirts, so the total number of people buying the T-shirts is $30$.
Let $a_{1}$ as the quantity of small-sized T-shirts, $a_{2}$ as the quantity of medium-sized T-shirts, $a_{3}$ as the quantity of large-sized T-shirts, $a_{4}$ as the quantity of extra-large-sized T-shirts, and $a_{5}$ as the quantity of extra-extra-large-sized T-shirts.
Since $a_{1},\:a_{2},\:a_{3},\:a_{4},\:a_{5}$ are in arithmetic progression and $\displaystyle\sum_{k=1}^{5}{a_k}=30$, the arithmetic mean would be $a_{3}=\displaystyle\frac{30}{5}=6$.
Since $a_{4}=4$, the common difference would be $d=-2$.
Also, according to the passage, the small-sized T-shirt costs £10 and a bigger size means an additional £2.
Based on this information, the following table can be made:

|      Size      |  S  |  M |  L | XL | 2XL | Total |
|:--------------:|:---:|:--:|:--:|:--:|:---:|:-----:|
|    Quantity    |  10 |  8 |  6 |  4 |  2  |   30  |
| Price per unit |  10 | 12 | 14 | 16 |  18 |   -   |
| Total Price(£) | 100 | 96 | 84 | 64 |  26 |  380  |

The number of students buying the red cap is $27$ (of the $29$ students buying the T-shirts) $ + 2$ (of the $4$ students not buying the T-shirts) $=29$.
Since the woman says she's buying the red caps for her *students*, it can be inferred that the woman is a teacher and she is not going to buy the red cap.
Therefore, the total number of people buying the red cap is $29$.
According to the question, the price of the red cap is set as $a$ (an unknown value).
Thus, the total price of the T-shirts and the red caps is £$(380+29a)$.

Although applying the 10%-off coupon before the £20 discount coupon is cheaper, the question presumes that the man repeatedly applied the discounts in the wrong order.
Thus, the £20 discount coupon was applied prior to the 10%-off coupon.
The same mechanism applies to the £2 apology discount—it was applied before the two coupons.
Therefore, the price after applying the two coupons and an additional discount would be £$\{(380+29a-2-20)\times 0.9\}=$£$(26.1a+322.2)$.

```toc
```