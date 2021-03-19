---
layout: project
published: false
title: Class Normalization for Continual Zero-Shot Learning
subtitle: (Or how to outperform modern ZSL SotA with a simple MLP and 30 seconds of training)
favicon_url: /assets/projects/class-norm/favicon.ico
project:
    title: Class Normalization for Continual Zero-Shot Learning
    authors:
        - name: Ivan Skorokhodov
          link: https://universome.github.io/
        #   affiliations:
        #     - 1
        - name: Mohamed Elhoseiny
          link: http://www.mohamed-elhoseiny.com/
        #   affiliations:
        #     - 1
    common_organizations:
        - KAUST, Saudi Arabia
    informal_summary:
        # - >-
        #     What is zero-shot learning (ZSL)? Imagine, that you have diligently collected a dataset of dog images and labeled it with which dog is which breed. Now, you want to train a model to classify dogs by their breed since this is what we call science. You trained your model, released an app on AppStore, it got popular, people are happy and you are getting rich. But now imagine that some crazy Sebastian from Yorkshire has interbred Beagles with Bedlington Terrier and obtained some supposedly spectacular Yorksheaglton.
        #     Imagine, how beautiful the world would be, if instead of collecting a dataset of "Hey, my dear model, a spaniel is such type of a dog which is 20 centimeters high, really huge ears. I want you"
        - >-
            In our paper, we start by investigating some popular normalization techniques used in zero-shot learning and find out that they work as expected only for linear models and do not provable normalization properties for deep ones. This means that the activations inside your model might have too big or too small variance which potentionally can spoil the training and we observed this effect in practice. This limitation is easily mitigated via <i>class normalization</i>: an analog of BatchNorm applied across class dimension instead of the batch dimension. We show that it stabilizes the activations variance in the model and smoothes out its loss surface.
        - >-
            Current SotA ZSL algorithms are quite sophisticated: they either use generative models (GANs/VAEs/flow-based models/etc) with many hand-crafted losses or some intricate learning pipelines like episode-based training or meta-learning. Also, the optimization for them is very slow and takes up to several hours (yes, for traditional ZSL it is somewhat a lot).
            Plugging in class normalization into a simple 3-layer MLP, we outperformed modern ZSL SotA on the common datasets without any bells and whistles. Moreover, since our method is so simple, it trains in just 20-30 seconds!
        - >-
            Encouraged, we decided to formulate a harder ZSL setup: <i>continual zero-shot learning</i>. In this setup, your model is trained sequentially on different ZSL tasks and each time its performance is evaluated on <i>all</i> the future tasks combined. We formulated for it a couple of benchmarks, evaluation metrics, tested a bunch of common lifelong-learning methods and tried our class normalization for them. To our surprise, it gave even larger boost than for a traditional ZSL: about ~40% on average (in mean harmonic accuracy).
        - >-
            You can check the code/colab notebooks/paper in the links below.
    links:
        arxiv: https://arxiv.org/abs/2006.11328
        github: https://github.com/universome/class-norm
        openreview: https://openreview.net/forum?id=7pgFL2Dkyyy
        colab: https://gist.github.com/iclr2021-classnorm/c29c8a1d4da78eb75a4cae24348b061d
    sections:
        - title: "Normalization in zero-shot learning"
          paragraphs:
            - >-
                We explore two types of normalization techniques: <i>scaled cosine distance</i> and <i>attributes normalization</i>.
        - title: "Class Normalization"
          paragraphs:
            - >-
                To alleviate the above issue,
        - title: "Continual Zero-Shot Learning"
          paragraphs:
            - >-
                We formulate CZSL in such a way that the traditional ZSL is a special case of it for \(T = 2\).
    bibtex: >-
        @inproceedings{
            skorokhodov2021class,
            title={Class Normalization for Zero-Shot Learning},
            author={Ivan Skorokhodov and Mohamed Elhoseiny},
            booktitle={International Conference on Learning Representations},
            year={2021},
            url={https://openreview.net/forum?id=7pgFL2Dkyyy}
        }
---
