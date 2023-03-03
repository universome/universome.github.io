---
layout: page
published: true
title: Class Normalization for (Continual?) Generalized Zero-Shot Learning
conference: ICLR 2021
favicon_url: /assets/projects/class-norm/favicon.ico
authors:
  - name: Ivan Skorokhodov
    link: https://universome.github.io
    affiliations: [1,2]
  - name: Mohamed Elhoseiny
    link: http://www.mohamed-elhoseiny.com
    affiliations: [1]
common_organizations:
  - name: KAUST
    link: https://kaust.edu.sa
    logo: /assets/images/kaust-logo.png
  - name: MIPT
    link: https://mipt.ru
    logo: /assets/images/mipt-logo.png
informal_summary:
  - >-
    In the paper, we start by investigating some popular normalization techniques used in zero-shot learning and find out that they work as expected only for linear models and do not provide normalization properties for the deep ones.
    This means that the activations inside your model might have too big or too small variance which potentionally can spoil the training (as we observed in practice to some extent). This limitation is easily mitigated via <i>class normalization</i>: an analog of BatchNorm applied across class dimension instead of the batch dimension. We show that it stabilizes the activations variance in the model and smoothes out its loss surface.
  - >-
    Current SotA ZSL algorithms are quite sophisticated: they either use generative models (GANs/VAEs/flow-based models/etc) with many hand-crafted losses or some intricate learning pipelines like episode-based training or meta-learning. Also, the optimization for them is very slow and takes up to several hours (yes, for traditional ZSL it is somewhat a lot).
    Plugging in class normalization into a simple 3-layer MLP, we outperformed modern ZSL SotA on the common datasets without any bells and whistles. Moreover, since our method is so simple, it trains in just 20-30 seconds!
  - >-
    Encouraged, we decided to formulate a harder ZSL setup: <i>continual zero-shot learning</i>. In this setup, your model is trained sequentially on different ZSL tasks and each time its performance is evaluated on <i>all</i> the future tasks combined. We formulated for it a couple of benchmarks, evaluation metrics, tested a bunch of common lifelong-learning methods and tried our class normalization for them. To our surprise, it gave even larger boost than for a traditional ZSL: about ~40% on average (in mean harmonic accuracy).
links:
  arxiv: https://arxiv.org/abs/2006.11328
  github: https://github.com/universome/class-norm
  openreview: https://openreview.net/forum?id=7pgFL2Dkyyy
  colab: https://gist.github.com/iclr2021-classnorm/c29c8a1d4da78eb75a4cae24348b061d
bibtex: >-
  @inproceedings{class-norm,
    title={Class Normalization for (Continual)? Generalized Zero-Shot Learning},
    author={Ivan Skorokhodov and Mohamed Elhoseiny},
    booktitle={International Conference on Learning Representations},
    year={2021},
    url={https://openreview.net/forum?id=7pgFL2Dkyyy}
  }
---
