---
title:  "EpiGRAF: Rethinking training of 3D GANs"
date: 21 June 2022
categories: gans, nerf, 3d generation
arxiv_url: "https://arxiv.org/abs/2206.10535"
project_url: "https://universome.github.io/epigraf"
is_preprint: false
conference: NeurIPS 2022
image_url: "/assets/images/projects-thumbs/epigraf.jpg"
code_url: "https://github.com/universome/epigraf"
authors:
  - Ivan Skorokhodov
  - Sergey Tulyakov
  - Yiqun Wang
  - Peter Wonka
short_description: >-
    In the past several months, there appeared 10+ works that speed up NeRF-based GANs by training a separate 2D decoder to upsample a low-resolution 3D representation produced from the NeRF generator. This solution comes at a cost: it break multi-view consistency and learns the geometry in a low resolution. Instead, we show that it is possible to obtain a high-resolution 3D generator with SotA image quality by simply training the model patch-wise. We revisit and improve this optimization scheme in two ways: 1) by designing a location- and scale-aware discriminator to work on patches of different proportions and spatial positions; and 2) modifying the patch sampling strategy based on an annealed beta distribution to stabilize training and accelerate the convergence. The resulted model, named EpiGRAF, is an efficient, high-resolution, pure 3D generator, and we test it on four datasets (two introduced in this work) at \(256^2\) and \(512^2\) resolutions. It obtains state-of-the-art image quality, high-fidelity geometry and trains \({\approx} 2.5 \times\) <i>faster</i> than the upsampler-based counterparts.
---
