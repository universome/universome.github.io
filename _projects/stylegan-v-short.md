---
title:  "StyleGAN-V: A Continuous Video Generator with the Price, Image Quality and Perks of StyleGAN2"
date: 29 December 2021
categories: gans, inrs, video generation
arxiv_url: "https://arxiv.org/abs/2112.14683"
project_url: "https://universome.github.io/stylegan-v"
is_preprint: true
# conference: ICCV 2021
image_url: "/assets/images/projects-thumbs/stylegan-v.jpg"
code_url: "https://github.com/universome/stylegan-v"
authors:
  - Ivan Skorokhodov
  - Sergey Tulyakov
  - Mohamed Elhoseiny
short_description: >-
    We build a non-autoregressive video generator which is continuous in time. It is based on StyleGAN2 and we rethink fundamental components of video synthesis models. First, we redesign the motion codes to be continuous by structuring them as <i>acyclic</i> positional embeddings. Then, we drop the usage of expensive Conv3d layers and aggregate the temporal information across frames by simple concatenation. Finally, we demonstrate that a state-of-the-art video generator could be trained with a very sparse sampling scheme, using just 2-3 frames per clip. Our modifications greatly improve the training efficiency of our model and we achieve strong state-of-the-art results on FaceForensics \(256^2\), Sky Timelapse \(256^2\), UCF-101 \(256^2\), Rainbow Jelly \(256^2\) and MEAD \(1024^2\). We also demonstrate the video manipulation properties of our generator, like projecting a video into its latent space using just a single frame and CLIP-based editing.
---
