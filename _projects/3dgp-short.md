---
title:  "3D generation on ImageNet"
date: 28 September 2022
categories: gans, nerf, 3d generation
arxiv_url: "https://arxiv.org/abs/2303.01416"
project_url: "https://snap-research.github.io/3dgp/"
is_preprint: false
conference: ICLR 2023 (Oral)
image_url: "/assets/images/projects-thumbs/3dgp-thumb.png"
code_url: "https://github.com/snap-research/3dgp"
authors: ["Ivan Skorokhodov", "Aliaksandr Siarohin", "Yinghao Xu", "Jian Ren", "Hsin-Ying Lee", "Peter Wonka", "Sergey Tulyakov"]
short_description: >-
    Existing 3D-from-2D generators are typically designed for well-curated single-category datasets, where all the objects have (approximately) the same scale, 3D location and orientation. This makes them inapplicable to diverse, in-the-wild datasets of non-alignable scenes rendered from arbitrary camera poses. In this work, we develop a 3D generator with Generic Priors (3DGP): a 3D synthesis framework with more general assumptions about the training data, and show that it scales to very challenging datasets, like ImageNet. Our model is based on three new ideas: 1) using an off-the-shelf depth estimator to guide the learning of 3D geometry; 2) a flexible learnable camera generator and a regularization strategy for; and 3) knowledge distillation into the discriminator to transfer the external knowledge from a pre-trained feature extractor. We explore our model on four datasets and demonstrate that 3DGP outperforms the recent state-of-the-art in terms of both texture and geometry quality.
---
