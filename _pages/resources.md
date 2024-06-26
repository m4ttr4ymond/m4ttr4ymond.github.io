---
layout: page
permalink: /resources/
title: Resources
description: A list of learning/research resources
nav: True
nav_order: 3
---

## Technical References

### [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf)

> **What is this?**
> These pages are a collection of facts (identities, approximations, inequalities, relations, ...) about matrices and matters relating to them.
> It is collected in this form for the convenience of anyone who wants a quick desktop reference.

I personally have found this book to be invaluable.

### [MatrixCalculus.org](https://www.matrixcalculus.org/)
> MatrixCalculus provides matrix calculus for everyone.
> It is an online tool that computes vector and matrix derivatives (matrix calculus).

This is also another tool that I make extensive use of on a regular basis.

## Reading Groups

### [UMich ML Theory Reading Group](https://sites.google.com/umich.edu/mltheory/home)
This reading group is currently inactive. We may be starting it up again in the fall.

~~This reading group is internal to the University of Michigan, and is intended for general, rigorous ML theory.
It is more informal than other reading groups on this list, so it's a good place to practice talks/presentations for conferences or research meetings. Some presenters (me) discuss ML models for chemistry, but that is not the intent of the group.
This group is organized by Matt Raymond (me) and is not currently funded.
We are always looking for new presenters, so please consider joining!
To maintain the informal and low-risk nature of this reading group, meetings are not recorded.~~

### [LoGaG (Learning on Graphs and Geometry)](https://hannes-stark.com/logag-reading-group)
This reading group specializes in learning on graphs and other geometric structures.
It is not specifically about chemistry, but many of the papers are about chemistry, particle physics, or other such topics.
The group is organized by [Hannes Stark](https://hannes-stark.com), a PhD student from MIT, and is funded by [Valence Discovery](https://www.valencediscovery.com).
Recordings are available [here](https://www.youtube.com/watch?list=PLoVkjhDgBOt2UwOm70DAuxHf1Jc9ijmzl).

### [M2D2 (Molecular Modeling and Drug Discovery)](https://valence-discovery.github.io/M2D2-meetings/)
This reading group is directly organized and funded by [Valence Discovery](https://www.valencediscovery.com), which specializes in ML for chemistry.
Their talk are typically more applied than the talks from LoGaG but appear to be slightly less rigorous.
Recordings are available [here](https://www.youtube.com/watch?list=PLoVkjhDgBOt11Q3wu8lr6fwWHn5Vh3cHJ).


## Textbooks
### [An Introduction to Optimization on Smooth Manifolds](https://www.nicolasboumal.net/book/)
We've been using this book for reference in [Quing Qu](https://qingqu.engin.umich.edu)'s [EECS 559: Optimization Methods for Signal Processing and Machine Learning](https://qingqu.engin.umich.edu/teaching/optimization-methods-for-sipml-winter-2021/).
From what I've seen so far, I really like this book.
It focuses on the manifolds that are often found "in the wild," and it seems to provide a reasonable amount of intuition when explaining new concepts.
I think that it would be more efficient to read this book before *Manifolds and Differential Geometry*, as this book provides more help to the reader than the latter does.

### [Manifolds and Differential Geometry](https://bookstore.ams.org/gsm-107)
I also started this book recently, but I really like the way that Lee writes. This book seems to be very rigorous, and spends a lot of time setting up the notation required for theorems.
I think that this book goes well with "Topology Without Tears," and it looks like you will know enough topology for "Manifolds" if you get about halfway through "Topology."
Unfortunately, this one is not free unless your organization subscribes to the AMS library.

### [Topology Without Tears](https://www.topologywithouttears.net/)
I've only started this book recently, but it has very intuitive explanations and many exercises.
I wouldn't call it a "hardcore" topology book, but it's definitely helpful for picking up some topology on the side.
It also comes with several associated lectures, which are available trough YouTube links on the site.
Overall, I think it's a very enjoyable read.

### [Gaussian Processes for Machine Learning](http://gaussianprocess.org/gpml/chapters/RW.pdf)
This book gives a good introduction to Gaussian Processes.
I found it to be very helpful.
> Gaussian processes (GPs) provide a principled, practical, probabilistic approach to learning in kernel machines.
> GPs have received increased attention in the machine-learning community over the past decade, and this book provides a long-needed systematic and unified treatment of theoretical and practical aspects of GPs in machine learning.
> The treatment is comprehensive and self-contained, targeted at researchers and students in machine learning and applied statistics.

> The book deals with the supervised-learning problem for both regression and classification, and includes detailed algorithms.
> A wide variety of covariance (kernel) functions are presented and their properties discussed.
> Model selection is discussed both from a Bayesian and a classical perspective.
> Many connections to other well-known techniques from machine learning and statistics are discussed, including support-vector machines, neural networks, splines, regularization networks, relevance vector machines and others.
> Theoretical issues including learning curves and the PAC-Bayesian framework are treated, and several approximation methods for learning with large datasets are discussed.
> The book contains illustrative examples and exercises, and code and datasets are available on the Web.\
> Appendixes provide mathematical background and a discussion of Gaussian Markov processes.

### [Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges](https://arxiv.org/abs/2104.13478)
To me, this seems like the definitive work on Geometric Deep Learning.
There's more than enough material to warrant several readings.
> The last decade has witnessed an experimental revolution in data science and machine learning, epitomized by deep learning methods.
> Indeed, many high-dimensional learning tasks previously thought to be beyond reach -- such as computer vision, playing Go, or protein folding -- are in fact feasible with appropriate computational scale.
> Remarkably, the essence of deep learning is built from two simple algorithmic principles: first, the notion of representation or feature learning, whereby adapted, often hierarchical, features capture the appropriate notion of regularity for each task, and second, learning by local gradient-descent type methods, typically implemented as backpropagation.

> While learning generic functions in high dimensions is a cursed estimation problem, most tasks of interest are not generic, and come with essential pre-defined regularities arising from the underlying low-dimensionality and structure of the physical world.
> This text is concerned with exposing these regularities through unified geometric principles that can be applied throughout a wide spectrum of applications.
> Such a 'geometric unification' endeavour, in the spirit of Felix Klein's Erlangen Program, serves a dual purpose: on one hand, it provides a common mathematical framework to study the most successful neural network architectures, such as CNNs, RNNs, GNNs, and Transformers.
> On the other hand, it gives a constructive procedure to incorporate prior physical knowledge into neural architectures and provide principled way to build future architectures yet to be invented.


## Blogs
### [Math3ma](https://www.math3ma.com)
Tai-Danae Bradley is a research mathematician at Alphabet.
Her blog focuses on the intersection of category theory and natural language processing.

### [Count Baysie](https://www.countbayesie.com)
Will Kurt is a statistics author.
His blog covers topics in frequentist and bayesian statistics, and typically provides in-depth derivations.

### [Michael Bronstein](https://michael-bronstein.medium.com)
Michael Bronstein is the DeepMind Professor of AI at Oxford and the Head of Graph ML Research at Twitter.
This blog provides non-rigorous introductions to the ideas in papers published by himself or by his colleagues.
It's probably one of the more interesting ML blogs on Medium.

### [Lil'Log](https://lilianweng.github.io)
Lilian Weng is a researcher at OpenAI.
Her blog typically provides overviews of existing ML architectures, rather than covering specific theory topics.
It's generally readable by someone without too much ML background, and provides more derivations than the source papers.

### [Machine Learning Mastery](https://machinelearningmastery.com)
Jalon Brownlee is an ML author and professor.
This blog provides basic introductions to ML concepts, but is not specially rigorous or in-depth.
This blog is good if you know very little about a given topic, but does not provide more than heuristic justifications for its assertions.

### [Algebrology](https://algebrology.github.io/)
Topology, differential geometry, and algebraic topology.
"A gentle introduction to insanity."

## YouTube Channels

### [VCubingX](https://www.youtube.com/c/VCubingX)
Provides useful intuitions for abstract mathematical concepts using beautiful animations ([Manim](https://github.com/3b1b/manim)).
Its typical focus is ML.
