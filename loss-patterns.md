---
layout: page
published: false
title: Loss Patterns of Neural Networks
favicon_url: /assets/projects/class-norm/favicon.ico
project:
    authors:
        - {name: Ivan Skorokhodov, link: https://universome.github.io}
        - {name: Mikhail Burtsev, link: https://scholar.google.com/citations?user=t_PLQakAAAAJ&hl=en}
    common_organizations:
        - {name: Moscow Institute of Physics and Technology, link: https://mipt.ru, logo: /assets/images/mipt-logo.png}
    informal_summary:
        - >-
            We present <i>multi-point optimization</i>: an optimization technique that allows to train several models simultaneously without the need to keep the parameters of each one individually.
            The proposed method is used for a thorough empirical analysis of the loss landscape of neural networks.
            By extensive experiments on FashionMNIST and CIFAR10 datasets we demonstrate two things: 1) loss surface is surprisingly diverse and intricate in terms of landscape patterns it contains; and 2) adding batch normalization makes it more smooth.
    links:
        arxiv: https://arxiv.org/abs/1910.03867
        github: https://github.com/universome/loss-patterns
    teaser:
        img_url: /assets/projects/loss-patterns/teaser.jpg
        caption: Loss patterns of a VGG-like model trained on FashionMNIST (left two images) and CIFAR-10 datasets (right two images). Our method shows that such patterns in the loss landscape exist and can find them through the optimization procedure. Each image is a 2D slice of the loss landscape at a specific region.
    sections:
        - title: A section
          paragraphs:
            - type: text
              content: A paragraph
            - type: image
              url: /assets/projects/loss-patterns/icons-grid.png
              max_width: 600
    bibtex: >-
        @misc{loss_patterns,
            title={Loss Landscape Sightseeing with Multi-Point Optimization},
            author={Ivan Skorokhodov and Mikhail Burtsev},
            year={2019},
            eprint={1910.03867},
            archivePrefix={arXiv},
            primaryClass={cs.LG}
        }
---
