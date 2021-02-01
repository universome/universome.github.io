---
layout: project
title: Class Normalization for Continual Zero-Shot Learning
favicon_url: /assets/projects/class-norm/favicon.ico
project:
    title: Class Normalization for Continual Zero-Shot Learning
    authors:
        - name: Ivan Skorokhodov
          affiliations:
            - 1
        - name: Mohamed Elhoseiny
          affiliations:
            - 1
    abstract: >-
        Normalization techniques have proved to be a crucial ingredient of successful training in a traditional supervised learning regime. However, in zero-shot learning (ZSL) world, these ideas have recieved only marginal attention. In this work, we study normalization in ZSL scenario from both theoretical and practical perspectives. First, we give a theoretical explanation to two popular tricks used in zero-shot learning: normalize+scale and attributes normalization and show that they help training by preserving variance during a forward pass. Next, we demonstrate that they are insufficient to normalize a deep ZSL model and propose class normalization: a normalization scheme, which alleviates this issue both provably and in practice. Third, we show that ZSL models typically have more irregular loss surface compared to traditional classifiers and that the proposed method partially remedies this problem. Then, we test our approach on 4 standard ZSL datasets and outperform sophisticated modern SotA with a simple MLP optimized without any bells and whistles and having ~50 times faster training speed. Finally, we generalize ZSL to a broader problem — continual ZSL, and introduce some principled metrics and rigorous baselines for this new setup. The code will be made available.
    links:
        arxiv: https://arxiv.org/abs/2006.11328
        github: https://github.com/universome/class-norm
        openreview: https://openreview.net/forum?id=7pgFL2Dkyyy
---
