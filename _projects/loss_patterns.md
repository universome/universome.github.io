---
title:  "Loss Landscape Sightseeing with Multi-Point Optimization"
date: 9 Oct 2019
categories: loss landscape analysis, optimization
arxiv_url: "https://arxiv.org/abs/1910.03867"
is_preprint: false
conference: Beyond First Order Methods in ML workshop, NeurIPS 2019
# conference: Optimization workshop @ NeurIPS 2019
code_url: "https://github.com/universome/loss-patterns"
image_url: "/assets/images/projects-thumbs/loss-patterns.jpg"
authors:
  - Ivan Skorokhodov
  - Mikhail Burtsev
abstract: >-
    We present multi-point optimization: an optimization technique that allows to train several models simultaneously without the need to keep the parameters of each one individually. The proposed method is used for a thorough empirical analysis of the loss landscape of neural networks. By extensive experiments on FashionMNIST and CIFAR10 datasets we demonstrate two things: 1) loss surface is surprisingly diverse and intricate in terms of landscape patterns it contains, and 2) adding batch normalization makes it more smooth. Source code to reproduce all the reported results is available on GitHub: this https URL.
short_description: >-
    Using <i>mode connectivity</i> ideas, we searched loss landscapes of different neural networks for different visual patterns. Due to the extreme overparametrization, it turned out that any pattern can be found inside the surface. This indicates that the loss landscapes of deep models are very complex and contain a lot of irregularities.
---
