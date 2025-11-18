---
title:  "AlphaFlow: Understanding and Improving MeanFlow Models"
date: 23 October 2025
categories: fast diffusion, few-step diffusion, meanflow
arxiv_url: https://arxiv.org/abs/2510.20771
project_url: ~
is_preprint: true
conference: ~
image_url: "/assets/images/projects-thumbs/alphaflow.png"
code_url: https://github.com/snap-research/alphaflow
authors: ["Huijie Zhang", "Aliaksandr Siarohin", "Willi Menapace", "Michael Vasilkovsky", "Sergey Tulyakov", "Qing Qu", "Ivan Skorokhodov"]
short_description: >-
  We explore the recently proposed MeanFlow framework for few-step from-scratch-trained diffusion models. We first analyze the training objective, showing that it can be decomposed into vanilla flow matching and consistency terms. We then propose a simple generalization of such decomposable objective which we name AlphaFlow. It supports a convenient curriculum schedule which leads it from flow matching into consistency training regimes. We show that for the same DiT architecutre on ImageNet 256x256, such design achieves 10-20% better FID scores for one/two-step generation.
---
