---
layout: post
title: Why does a^0=1?
date: 2022-08-14
description: A brief explanation using recursion and group theory
---

*Note: This article was written in one sitting and still needs to be proof-read.*

I was recently asked why $$a^0=1$$ for any number $$a \in \mathbb{R}$$. I tried to explain it verbally (without notation), but I don’t think I was able to explain it very well, so I’m going to explain it again here. There are two ways to approach this. One way is simpler and only relies on basic multiplication, but it only explains how to *think* about $$a^0$$. The other provides a deeper intuition into *why* we should think about $$a^0$$ in this way.

## Basic Reasoning

Suppose that we have some number $$a\in \mathbb{R}$$ (so $$a$$ could be $$1,1/5,\pi$$ etc.) that will act as the base of the exponent, and some number $$b \in \mathbb{N}$$ ($$b \in \{0,1,2,...\}$$) that will act as the exponent. In reality, the exponent doesn’t have to be a non-negative integer, but this basic explanation requires that we use only exponents. Exponentiation ($$a^b$$) is usually introduced as a shorthand for repeated multiplication (e.g. $$a^3=a\cdot a\cdot a$$). But what does it mean to repeat multiplication 0 times? We can think of this as a recursive definition, where $$a^b=a\cdot a^{(b-1)}$$. By recursion, we simply mean that the exponential operation is defined using itself. For concreteness, lets look at our earlier example again:

$$
\begin{aligned}
a^3 &= a \cdot a^{(3-1)} \\
&= a \cdot a^2 \\
&= a \cdot a \cdot a^{(2-1)} \\
&= a \cdot a \cdot a^1 \\
&= a \cdot a \cdot a \cdot a^{(1-1)} \\
&= a \cdot a \cdot a \cdot a^0
\end{aligned}
$$

Here, we run into a problem. What are we supposed to do with $$a^0$$? Our definition of repeated multiplication doesn’t really apply here. Let’s think about this definition carefully. We know that we should get $$a^3=a\cdot a\cdot a$$ using repeated multiplication, but instead we got $$a^3=a\cdot a\cdot a \cdot a^0$$ using our recursive definition. Since the value of $$a^0$$ is unknown, we can treat it as if it’s an unknown variable. In this case, we can use basic algebra to solve for $$a^0$$ as if it was any other unknown variable. We put our original definition on the left, and our recursive definition on the right.

$$
\begin{aligned}
a^3 &= a \cdot a \cdot a \cdot a^0 \\
a \cdot a \cdot a &= a \cdot a \cdot a \cdot a^0 \\
a \cdot a \cdot a \cdot \frac{1}{a} &= a \cdot a \cdot a \cdot a^0 \cdot \frac{1}{a}\\
a \cdot a \cdot \cancel{a} \cdot \cancel{\frac{1}{a}} &= a \cdot a \cdot \cancel{a} \cdot a^0 \cdot \cancel{\frac{1}{a}}\\
a \cdot a \cdot 1 \cdot \frac{1}{a} &= a \cdot a \cdot a^0 \cdot 1 \cdot \frac{1}{a}\\
a \cdot \cancel{a} \cdot \cancel{\frac{1}{a}} &= a \cdot \cancel{a} \cdot a^0 \cdot \cancel{\frac{1}{a}}\\
a \cdot 1 \cdot 1 \cdot \frac{1}{a} &= a \cdot 1 \cdot  1 \cdot a^0 \cdot \frac{1}{a}\\
\cancel{a} \cdot 1 \cdot \cancel{\frac{1}{a}} &= \cancel{a} \cdot  1 \cdot a^0 \cdot \cancel{\frac{1}{a}}\\
\cancel{a} \cdot \cancel{\frac{1}{a}} &= \cancel{a} \cdot  a^0 \cdot \cancel{\frac{1}{a}}\\
1 &=  1 \cdot a^0\\
1 &=  a^0
\end{aligned}
$$

This means that, if we want our recursive definition to have the same result as our original definition (repeated multiplication), $$a^0=1$$ by necessity. Otherwise, our recursive definition would not work. Note that this is not a mathematical proof. A real proof would have to work for any exponent $$b$$, not just the value $$b=3$$ that we chose. However, this example is sufficient to develop an intuition as to *why* this works.



## More Complex Reasoning

One of the goals of mathematics to create abstract structures that we can work with and prove things about. By working with abstract structures, we can make proofs that prove an infinite number of things at once, instead of having to prove each thing individually. Take the Pythagorean theorem, for example. It proves that $$a^2+b^2=c^2$$ for $$a,b,c \in \mathbb{R}$$ where $$a,b$$ are the sides of a right triangle and $$c$$ is the hypotenuse. Since there are infinitely sizes of right triangle, this abstract proof proves the relationship $$a^2+b^2=c^2$$ for an infinite number of right triangles. Imagine if we had to make a proof for each triangle individually! We’d never be finished. In effect, by working with abstract structures, we can prove many things at once, rather than proving them individually.

One of my favorite abstract structures is called a **group**. You can think of a group as being a mathematical framework that guarantees that certain properties will be preserved by the elements of the group. We typically define a group as follows[^1]:

> A group is a set $$G$$ together with a binary operation on $$G$$, here denoted "$$\cdot$$", that combines any two elements $$a$$ and $$b$$ to form an element of $$G$$, denoted $$a\cdot b$$, such that the following three requirements, known as ''group axioms'', are satisfied:
>
> - Associativity: For all $$a$$, $$b$$, $$c$$ in $$G$$, one has $$(a\cdot b)\cdot c=a\cdot(b\cdot c)$$.
> - Identity element: There exists an element $$e$$ in $$G$$ such that, for every $$a$$ in $$G$$, one has $$e\cdot a=a$$ and $$a\cdot e=a$$. Such an element is unique. It is called ''the identity element'' of the group.
> - Inverse element: For each $$a$$ in $$G$$, there exists an element $$b$$ in $$G$$ such that $$a\cdot b=e$$ and $$b\cdot a=e$$, where $$e$$ is the identity element. For each $$a$$, the element $$b$$ is unique; it is called ''the inverse'' of $$a$$ and is commonly denoted $$a^{-1}$$.

In more straightforward terms, we say that that a group has two main components: a set $$G$$ and a binary operation. A **set** is just a collection of items that has no order and no repeats. The exact contents of the set don’t matter (e.g. $$\{1,5,\text{green},\star\}$$). For example $$\{1,1,2,3\}$$ would not be a set because $$1$$ is repeated. We also know that the sets $$\{1,2,3\}$$ and $$\{3,2,1\}$$ are the same because order doesn’t matter. For our purposes, our set will be all exponents of the variable $$a$$. This means that $$G=\{a^{1},a^{100},a^{\pi},...\}$$. A **binary operation** is an operator that takes in two elements of the set $$G$$ and outputs another element of the set $$G$$. In our case, the binary operation “$$\cdot$$” takes in two numbers and outputs a third (e.g. $$a^5\cdot a^7=a^{5+7}=a^{12}$$). Note that both the inputs and the output of the binary operation are elements of the set $$G$$, since all can be represented as exponents of $$a$$.

The three bullet points above are called “**axioms**”, which means that they are rules that are *assumed to be true*. They are not proven or derived from anything. There are many axioms in mathematics, and you can think of them as rules in a game. Just likes the rules of a game give you a framework to ensure that players behave and the game doesn’t descend into chaos, mathematical axioms are used to give a framework for our mathematics so we have something meaningful to build off of.

The first axiom is **associativity**, which means that, for all $$a$$, $$b$$, $$c$$ in $$G$$, we can say that $$(a\cdot b)\cdot c=a\cdot(b\cdot c)$$. For example, in exponentiation, $$a^3 \cdot (a^{10} \cdot a^2) = a^3 \cdot a^{12} = a^{15} = a^{13} \cdot a^2 = (a^3 \cdot a^{10}) \cdot a^2$$. This means that exponentiation adheres to the associativity axiom.

We will skip the identity axiom for now. Instead, we will look at the axiom of the **inverse element**. This is a group element that “cancels out” another element. We know that multiplying two exponents with the same base is the same as adding their exponents (e.g. $$a^5 \cdot a^3=a^{5+3}=a^8$$). We also know that if we want to “cancel out” a number $$b$$, we can add $$-b$$ to it (e.g. $$b + (-b)=b-b=0$$. This seems to indicate that two exponents would cancel if they were negations of each other (e.g. $$a^5\cdot a^{-5}$$). However, we realize that $$a^b\cdot a^{-b}=a^{b+(-b)}=a^{b-b}=a^0$$, and it’s not clear what $$a^0$$ means. However, remember that $$a^{-5}$$ is the same as $$1/a^5$$. This means that $$a^5 \cdot a^{-5} = a^5 \cdot 1-a^5 = a^5/a^5 = (a\cdot a\cdot a\cdot a\cdot a)/(a\cdot a\cdot a\cdot a\cdot a) = 1$$. Since we have shown that $$a^b \cdot a^{-b} = a^b/a^b = 1 = a^{b-b} = a^0$$, we have shown that $$a^0=1$$. Our earlier definition said that “canceling out” an element from the group would give us something called the “**identity element**,” and that there is only one identity element.

An **identity element** is a number that has no effect on other group elements. In our case, we have shown that $$a^0$$ is the identity element, since $$a^b \cdot a^0 = a^{b+0} = a^b = a^{0+b} = a^0 \cdot a^b$$. Recall that $$\cdot$$ is normal multiplication. This means that for $$a^0 \cdot a^b=a^b$$, $$a^0$$ must be 1. There is no other value that it could be while still maintaining this property.

We haven’t shown any proofs here, and instead have relied on intuition. However, hopefully it is clear that exponentiation ($$a^b$$) forms a group structure over multiplication ($$\cdot$$). Once we know that exponentiation follows a group structure, it is much clearer why $$a^0=1$$. It is because $$a^0$$ is the **identity element**, and the identity element must not alter any number that it’s multiplied with. $$1$$ is the only number that universally fits this criteria.

## Post-script

An especially attentive reader might make the observation that if $$a=0$$, then $$a^0=0^0=1$$, which seems rather counter-intuitive. How can multiply $$0$$ times itself $$0$$ times and get $$1$$? This is an example of where our typical definition (repeated multiplication) breaks down, and we must instead rely on our more concrete mathematical definitions.

Recall our recursive definition. If $$0^3=0 \cdot 0 \cdot 0\cdot 0^0$$, then it doesn’t really make a difference whether $$0^0=1$$ or $$0^0=1,000,000,000$$. No matter what definition we choose for $$0^0$$, $$0^3=0$$. However, another one of the goals in mathematics is *simplicity*. We want to have as few rules as possible, since this makes it easier to work with the math. Because of this, we make sure that $$0^0$$ is consistent with every other case by choosing $$0^0=1$$ instead of $$0^0=2$$ or some other value.

To me, it seems a bit more principled if we think about it from a group-theoretic perspective. Based on the definition of an identity element, we know that $$0^5 \cdot 0^0 = 0^5$$. It may not be entirely clear what $$0^5$$ means; however, we know that a general solution to $$\alpha\cdot \beta = \alpha$$ is $$\beta=1$$. Thus, without even knowing what $$0^b$$ means, we can say that $$0^0=1$$. From there, we can easily derive our recursive definition: $$0^3=0^1 \cdot 0^{(3-1)}=0^1 \cdot 0^1 \cdot 0^{(3-2)} = 0^1 \cdot 0^1 \cdot 0^1 \cdot 0^{(3-3)} = 0^1 \cdot 0^1 \cdot 0^1 \cdot 0^0 = 0 \cdot 0 \cdot 0 \cdot 1 = 0$$.



[^1]: [Wikipedia, Group](https://en.wikipedia.org/wiki/Group_(mathematics))
