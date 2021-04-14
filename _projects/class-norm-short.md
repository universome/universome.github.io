---
title: Class Normalization for (Continual?) Generalized Zero-Shot Learning
date: 19 Jun 2020
categories: zero-shot learning, continual learning
arxiv_url: "https://arxiv.org/abs/2006.11328"
image_url: "/assets/images/projects-thumbs/nm-zsl.jpg"
# project_url: "https://universome.github.io/class-norm"
is_preprint: false
conference: ICLR 2021
code_url: "https://github.com/universome/class-norm"
authors:
  - Ivan Skorokhodov
  - Mohamed Elhoseiny
short_description: >-
    In this paper, we dived into normalization techniques used in zero-shot learning (ZSL). We showed how <i>scaled cosine similarity</i> and <i>attributes normalization</i> influences signal's variance inside a model. We showed that for deeper models, there is a need for other normalization procedures and developed <i>class normalization</i>, which is similar to batch normalization but applied across the class dimension. Using class normalization, we built an MLP model that achieves state-of-the-art performance and trains x50-200 times faster than the current SotA. We also formulated a novel <i>continual zero-shot learning</i> problem and tested our approach in that setup.
---
