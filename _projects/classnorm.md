---
title:  "Class Normalization for Zero-Shot Learning"
date: 19 Jun 2020
categories: zero-shot learning, continual learning
arxiv_url: "https://arxiv.org/abs/2006.11328"
image_url: "/assets/images/projects-thumbs/nm-zsl.jpg"
is_preprint: false
conference: ICLR 2021
code_url: "https://github.com/universome/nm-zsl"
authors:
  - Ivan Skorokhodov
  - Mohamed Elhoseiny
abstract: >-
    Normalization techniques have proved to be a crucial ingredient of successful training in a traditional supervised learning regime. However, in zero-shot learning (ZSL) world, these ideas have recieved only marginal attention. In this work, we study normalization in ZSL scenario from both theoretical and practical perspectives. First, we give a theoretical explanation to two popular tricks used in zero-shot learning: normalize+scale and attributes normalization and show that they help training by preserving variance during a forward pass. Next, we demonstrate that they are insufficient to normalize a deep ZSL model and propose class normalization: a normalization scheme, which alleviates this issue both provably and in practice. Third, we show that ZSL models typically have more irregular loss surface compared to traditional classifiers and that the proposed method partially remedies this problem. Then, we test our approach on 4 standard ZSL datasets and outperform sophisticated modern SotA with a simple MLP optimized without any bells and whistles and having ~50 times faster training speed. Finally, we generalize ZSL to a broader problem — continual ZSL, and introduce some principled metrics and rigorous baselines for this new setup. The code will be made available.
short_description: >-
    In this paper, we dived into normalization techniques used in zero-shot learning (ZSL). We showed how <i>scaled cosine similarity</i> and <i>attributes normalization</i> influences signal's variance inside a model. We showed that for deeper models, there is a need for other normalization procedures and developed <i>class normalization</i> which is similar to batch normalization, but applied across class dimension. Using class normalization, we built an MLP model that achieves state-of-the-art performance and trains x50-200 times faster compared to the current SotA. We also formulated a novel <i>continual zero-shot learning</i> problem and tested our approach in that setup.
---
